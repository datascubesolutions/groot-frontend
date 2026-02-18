/**
 * Hashnode GraphQL integration.
 * Fetches public blog posts by topic tags for the Groot blog feed.
 */

const HASHNODE_GQL_URL = "https://gql.hashnode.com";

// Known tag IDs to avoid extra network round-trips on cold start
const KNOWN_TAGS = {
  "data-science": "56744721958ef13879b94e35",
  "machine-learning": "56744723958ef13879b95147",
  "artificial-intelligence": "56744721958ef13879b94c50",
};

// In-memory tag ID cache (lives for the duration of the serverless instance)
const tagCache = { ...KNOWN_TAGS };

/**
 * Resolve a tag slug to its Hashnode ID.
 * Uses the in-memory cache, then falls back to a live API call.
 */
async function getTagId(slug) {
  if (tagCache[slug]) return tagCache[slug];

  try {
    const res = await fetch(HASHNODE_GQL_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: `query { tag(slug: "${slug}") { id } }` }),
      next: { revalidate: 3600 },
    });

    if (!res.ok) return null;

    const { data } = await res.json();
    if (data?.tag?.id) {
      tagCache[slug] = data.tag.id;
      return data.tag.id;
    }
  } catch (e) {
    console.error(`[hashnode] Failed to resolve tag ID for "${slug}":`, e);
  }
  return null;
}

/** Normalize a raw Hashnode post node into the unified post shape. */
function normalizePost(post) {
  let host = null;
  try {
    if (post.url) host = new URL(post.url).host;
  } catch {
    // ignore malformed URLs
  }

  return {
    id: post.id,
    // Embed the post ID in the slug so the detail page can reliably fetch it back
    slug: `${post.slug}-${post.id}`,
    originalSlug: post.slug,
    title: post.title,
    excerpt: post.brief ?? "",
    content: post.content?.html ?? "",
    image: post.coverImage?.url ?? null,
    author: {
      name: post.author?.name ?? "Contributor",
      avatar: post.author?.profilePicture ?? null,
      role: "Contributor",
    },
    date: post.publishedAt
      ? new Date(post.publishedAt).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
      : "Recently",
    readTime: post.readTimeInMinutes ? `${post.readTimeInMinutes} min read` : "5 min read",
    tags: (post.tags ?? []).map((t) => t.name),
    category: post.tags?.[0]?.name ?? "Technology",
    source: "hashnode",
    host,
  };
}

// ─── Public API ─────────────────────────────────────────────────────────────

const FEED_TAGS = [
  "data-science",
  "machine-learning",
  "artificial-intelligence",
  "analytics",
  "data-engineering",
  "python",
  "big-data",
  "fintech",
  "predictive-analytics",
  "business-intelligence",
];

/**
 * Fetch trending Hashnode posts across our topic tags.
 * @param {number} limit - Maximum number of posts to return.
 * @returns {Promise<Array>} Normalized posts sorted by date descending.
 */
export async function fetchHashnodePosts(limit = 10) {
  const seen = new Set();
  const posts = [];

  for (const tagSlug of FEED_TAGS) {
    const tagId = await getTagId(tagSlug);
    if (!tagId) continue;

    const query = `
      query Feed {
        feed(first: 5, filter: { type: RELEVANT, tags: ["${tagId}"] }) {
          edges {
            node {
              id title slug url brief
              coverImage { url }
              author { name profilePicture }
              publishedAt readTimeInMinutes
              tags { name slug }
            }
          }
        }
      }
    `;

    try {
      const res = await fetch(HASHNODE_GQL_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query }),
        next: { revalidate: 600 },
      });

      const { data } = await res.json();
      for (const { node } of data?.feed?.edges ?? []) {
        if (!seen.has(node.id) && node.coverImage?.url) {
          seen.add(node.id);
          posts.push(normalizePost(node));
        }
      }
    } catch (e) {
      console.error(`[hashnode] Feed fetch failed for tag "${tagSlug}":`, e);
    }
  }

  return posts
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, limit);
}

/**
 * Fetch a single Hashnode post by its node ID.
 * @param {string} id
 * @returns {Promise<object|null>} Normalized post or null.
 */
export async function fetchHashnodePostById(id) {
  if (!id) return null;

  const query = `
    query Post($id: ID!) {
      node(id: $id) {
        ... on Post {
          id title slug brief
          content { html }
          coverImage { url }
          author { name profilePicture }
          publishedAt readTimeInMinutes
          tags { name slug }
          url
        }
      }
    }
  `;

  try {
    const res = await fetch(HASHNODE_GQL_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query, variables: { id } }),
      next: { revalidate: 3600 },
    });

    const { data } = await res.json();
    if (data?.node) return normalizePost(data.node);
  } catch (e) {
    console.error(`[hashnode] Failed to fetch post by ID "${id}":`, e);
  }
  return null;
}

/**
 * Fetch a single Hashnode post by slug.
 * Prefers the publication-scoped query when a host is available.
 * @param {string} slug
 * @param {string|null} host - Hashnode publication host (e.g. "user.hashnode.dev")
 * @returns {Promise<object|null>} Normalized post or null.
 */
export async function fetchHashnodePostBySlug(slug, host) {
  if (!slug) return null;

  // Publication-scoped query (most reliable when host is known)
  if (host) {
    const query = `
      query Post($slug: String!, $host: String!) {
        publication(host: $host) {
          post(slug: $slug) {
            id title slug brief
            content { html }
            coverImage { url }
            author { name profilePicture }
            publishedAt readTimeInMinutes
            tags { name slug }
            url
          }
        }
      }
    `;
    try {
      const res = await fetch(HASHNODE_GQL_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query, variables: { slug, host } }),
        next: { revalidate: 3600 },
      });
      const { data } = await res.json();
      if (data?.publication?.post) return normalizePost(data.publication.post);
    } catch (e) {
      console.warn(`[hashnode] Publication query failed for slug "${slug}" host "${host}":`, e);
    }
  }

  // Generic fallback (works for some publications)
  const query = `
    query Post($slug: String!) {
      post(slug: $slug) {
        id title slug brief
        content { html }
        coverImage { url }
        author { name profilePicture }
        publishedAt readTimeInMinutes
        tags { name slug }
        url
      }
    }
  `;
  try {
    const res = await fetch(HASHNODE_GQL_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query, variables: { slug } }),
      next: { revalidate: 3600 },
    });
    const { data } = await res.json();
    if (data?.post) return normalizePost(data.post);
  } catch (e) {
    console.error(`[hashnode] Generic query failed for slug "${slug}":`, e);
  }
  return null;
}
