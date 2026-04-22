// @ts-nocheck
import { BlogDetailContent } from "@/components/blog/BlogDetailContent";
import { siteConfig } from "@/config/site.config";
import { BLOG_POSTS } from "@/lib/blog-data";
import {
  fetchInternalBlogById,
  fetchInternalBlogList,
  mapInternalApiPostToPost,
  parseMarkdownContent,
} from "@/lib/blog-server";
import { fetchHashnodePostById, fetchHashnodePostBySlug } from "@/lib/hashnode";
import { generateArticleSchema, generateBreadcrumbSchema } from "@/lib/seo";

// ─── Metadata ────────────────────────────────────────────────────────────────

export async function generateMetadata({ params, searchParams }) {
  const { slug } = await params;
  const post = await resolvePost(slug, await searchParams);
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || siteConfig.url;
  const canonicalUrl = `${siteUrl}/blog/${slug}`;
  const defaultImage = `${siteUrl}/og-image.png`;

  if (post) {
    const publishedIso = getIsoDate(post);
    return {
      title: `${post.title} | Groot Analytics`,
      description:
        post.excerpt || "Read our latest article on Groot Analytics.",
      alternates: {
        canonical: canonicalUrl,
      },
      openGraph: {
        type: "article",
        url: canonicalUrl,
        title: `${post.title} | Groot Analytics`,
        description:
          post.excerpt || "Read our latest article on Groot Analytics.",
        images: [post.image || defaultImage],
        publishedTime: publishedIso,
        modifiedTime: publishedIso,
        authors: [post.author?.name || "Groot Team"],
      },
      twitter: {
        card: "summary_large_image",
        title: `${post.title} | Groot Analytics`,
        description:
          post.excerpt || "Read our latest article on Groot Analytics.",
        images: [post.image || defaultImage],
      },
      keywords: post.tags?.length ? post.tags : [post.category].filter(Boolean),
    };
  }

  const title = slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
  return {
    title: `${title} | Groot Analytics`,
    description: "Read our latest article on Groot Analytics.",
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default async function BlogDetailPage({ params, searchParams }) {
  const { slug } = await params;
  const resolvedParams = await searchParams;
  const post = await resolvePost(slug, resolvedParams);
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || siteConfig.url;

  const articleSchema = post
    ? generateArticleSchema({
        title: post.title,
        description:
          post.excerpt || "Read our latest article on Groot Analytics.",
        datePublished: getIsoDate(post),
        dateModified: getIsoDate(post),
        author: post.author?.name || "Groot Team",
        image: post.image || `${siteUrl}/og-image.png`,
        url: `${siteUrl}/blog/${slug}`,
        wordCount: getWordCount(post.content),
        keywords: post.tags?.length
          ? post.tags
          : [post.category].filter(Boolean),
      })
    : null;
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: post?.title || "Article", path: `/blog/${slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {articleSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
      )}
      <BlogDetailContent post={post} />
    </>
  );
}

// ─── Data resolution ─────────────────────────────────────────────────────────

/**
 * Resolve a blog post from any source given the URL slug and query params.
 * Resolution order:
 *   1. Static BLOG_POSTS (instant, no network)
 *   2. Internal API — match by slug from list, then fetch full content
 *   3. Hashnode — by `id` query param, then by slug (with optional `host`)
 */
async function resolvePost(slug, searchParams = {}) {
  // 1. Static data
  const staticPost = BLOG_POSTS.find((p) => p.slug === slug);
  if (staticPost) return staticPost;

  // 2. Internal API
  const internalPost = await resolveInternalPost(slug);
  if (internalPost) return internalPost;

  // 3. Hashnode
  return resolveHashnodePost(slug, searchParams);
}

async function resolveInternalPost(slug) {
  try {
    // Find the post ID by matching slug in the list
    const list = await fetchInternalBlogList();
    const match = list.find((p) => p.slug === slug);
    if (!match) return null;

    // Fetch the full post content
    const raw = await fetchInternalBlogById(match.id);
    if (!raw) return null;

    const post = mapInternalApiPostToPost(raw);
    if (!post) return null;

    // Parse markdown content to HTML server-side
    post.content = await parseMarkdownContent(post.content);
    return post;
  } catch {
    return null;
  }
}

async function resolveHashnodePost(slug, { id: blogId, host } = {}) {
  // Strategy 1: fetch by explicit ID query param
  if (blogId) {
    try {
      const post = await fetchHashnodePostById(blogId);
      if (post) return post;
    } catch {
      // fall through to slug strategy
    }
  }

  // Strategy 2: the slug may be in "original-slug-{id}" format
  // Extract the embedded ID (last segment if it looks like a Hashnode ID)
  const parts = slug.split("-");
  const lastPart = parts[parts.length - 1];
  const hasEmbeddedId = lastPart && lastPart.length > 8;

  if (hasEmbeddedId) {
    try {
      const post = await fetchHashnodePostById(lastPart);
      if (post) return post;
    } catch {
      // fall through
    }
  }

  // Strategy 3: fetch by slug (with host for publication-scoped lookup)
  const originalSlug = hasEmbeddedId ? parts.slice(0, -1).join("-") : slug;
  try {
    const post = await fetchHashnodePostBySlug(originalSlug, host ?? null);
    if (post) return post;
  } catch {
    // fall through
  }

  return null;
}

function getIsoDate(post) {
  if (post?.publishedAt) {
    const value = Number(post.publishedAt);
    if (!Number.isNaN(value) && value > 0) {
      return new Date(value).toISOString();
    }
  }

  if (post?.date && post.date !== "Recently") {
    const parsedDate = new Date(post.date);
    if (!Number.isNaN(parsedDate.getTime())) {
      return parsedDate.toISOString();
    }
  }

  return new Date().toISOString();
}

function getWordCount(content = "") {
  if (!content) return undefined;
  const plainText = content
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  if (!plainText) return undefined;
  return plainText.split(" ").length;
}
