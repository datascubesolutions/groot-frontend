const jwt = require("jsonwebtoken");

// Configuration
const GHOST_URL =
  process.env.NEXT_PUBLIC_GHOST_API_URL || "https://amit-yadav.ghost.io";
const GHOST_ADMIN_API_KEY =
  process.env.GHOST_ADMIN_API_KEY ||
  "69957f0e6d04f6000134a630:38252793d6129e983d6dc9d4eb027b85dd249a7598204d00a9219e6d7d9bffa2";
const HASHNODE_GQL_URL = "https://gql.hashnode.com";

// Targeted tags for premium AI/ML content
const TAGS = [
  "data-science",
  "machine-learning",
  "artificial-intelligence",
  "deep-learning",
  "python",
];

// Helper to generate Ghost Admin Token
function getToken() {
  const [id, secret] = GHOST_ADMIN_API_KEY.split(":");
  return jwt.sign({}, Buffer.from(secret, "hex"), {
    keyid: id,
    algorithm: "HS256",
    expiresIn: "5m",
    audience: `/admin/`,
  });
}

// Fetch posts from Hashnode via GraphQL
async function fetchHashnodePosts() {
  console.log("Fetching premium articles from Hashnode...");

  // 1. Get Tag IDs first
  const tagIds = [];
  for (const slug of TAGS) {
    try {
      const query = `query { tag(slug: "${slug}") { id } }`;
      const res = await fetch(HASHNODE_GQL_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query }),
      });
      const { data } = await res.json();
      if (data?.tag?.id) {
        tagIds.push(data.tag.id);
      }
    } catch (e) {
      console.error(`Failed to get tag ID for ${slug}`);
    }
  }

  if (tagIds.length === 0) {
    console.error("No valid tags found.");
    return [];
  }

  // Query for "feed" to get trending/recent posts
  // We'll iterate through tags to get a mix
  let allPosts = [];
  const seenTitles = new Set();

  for (const tagId of tagIds) {
    const query = `
        query Feed {
          feed(first: 5, filter: { type: RELEVANT, tags: ["${tagId}"] }) {
            edges {
              node {
                title
                slug
                brief
                coverImage {
                  url
                }
                content {
                  html
                }
                author {
                  name
                  profilePicture
                }
                publishedAt
                readTimeInMinutes
                tags {
                  name
                  slug
                }
                url
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
      });
      const { data, errors } = await res.json();

      if (errors) {
        console.error(
          `GraphQL Error for tag ${tagId}:`,
          JSON.stringify(errors)
        );
        continue;
      }

      if (data?.feed?.edges) {
        for (const edge of data.feed.edges) {
          const post = edge.node;
          // Filter duplicates
          if (!seenTitles.has(post.title)) {
            seenTitles.add(post.title);
            // Basic quality filter: Must have a cover image
            if (post.coverImage && post.coverImage.url) {
              allPosts.push(post);
            }
          }
        }
      }
    } catch (error) {
      console.error(`Error fetching tag ${tagId}:`, error);
    }
  }

  // Sort by date (descending) and limit
  allPosts.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
  console.log(`Found ${allPosts.length} unique posts.`);
  return allPosts.slice(0, 15);
}

async function createGhostPost(article) {
  const token = getToken();
  const headers = {
    Authorization: `Ghost ${token}`,
    "Content-Type": "application/json",
  };

  // Prepare Ghost Post Object
  let htmlContent = article.content.html || `<p>${article.brief}</p>`;
  // Add attribution footer
  htmlContent += `<hr/><p><em>This article was originally published on <a href="${article.url}">Hashnode</a> by ${article.author.name}.</em></p>`;

  const postData = {
    posts: [
      {
        title: article.title,
        slug: article.slug,
        html: htmlContent,
        feature_image: article.coverImage?.url,
        status: "published",
        published_at: article.publishedAt,
        tags: article.tags
          ? article.tags.map((t) => ({ name: t.name, slug: t.slug }))
          : [],
        custom_excerpt: article.brief,
      },
    ],
  };

  try {
    const res = await fetch(`${GHOST_URL}/ghost/api/admin/posts/?source=html`, {
      method: "POST",
      headers,
      body: JSON.stringify(postData),
    });

    if (!res.ok) {
      const err = await res.json();
      if (err.errors && err.errors[0].message.includes("slug")) {
        console.log(`Skipping existing post: ${article.title}`);
        return;
      }
      console.error(
        `Failed to create post "${article.title}":`,
        JSON.stringify(err, null, 2)
      );
    } else {
      console.log(`Successfully created: ${article.title}`);
    }
  } catch (error) {
    console.error(`Error creating post "${article.title}":`, error);
  }
}

async function main() {
  const articles = await fetchHashnodePosts();
  console.log(`Found ${articles.length} premium articles to migrate.`);

  for (const article of articles) {
    await createGhostPost(article);
    await new Promise((r) => setTimeout(r, 500));
  }
  console.log("Hashnode Migration complete!");
}

main();
