/**
 * Server-side blog data fetching utilities.
 * For use in Server Components only.
 */

import { API_ENDPOINTS } from "@/lib/api/endpoints";
import { marked } from "marked";

const DEFAULT_AVATAR =
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop";

// ─── Helpers ────────────────────────────────────────────────────────────────

function formatDate(dateValue) {
  if (!dateValue) return "Recently";
  if (dateValue?._seconds != null) {
    return new Date(dateValue._seconds * 1000).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  }
  try {
    const d = new Date(dateValue);
    return Number.isNaN(d.getTime())
      ? "Recently"
      : d.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });
  } catch {
    return "Recently";
  }
}

function toTimestamp(dateValue) {
  if (!dateValue) return 0;
  if (dateValue?._seconds != null) return dateValue._seconds * 1000;
  try {
    const d = new Date(dateValue);
    return Number.isNaN(d.getTime()) ? 0 : d.getTime();
  } catch {
    return 0;
  }
}

function normalizeCategory(raw) {
  if (!raw) return "General";
  return String(raw).charAt(0).toUpperCase() + String(raw).slice(1).toLowerCase();
}

// ─── Public API ─────────────────────────────────────────────────────────────

/**
 * Fetch the internal blog list from the API.
 * @returns {Promise<Array>} Normalized posts, or [] on failure.
 */
export async function fetchInternalBlogList() {
  try {
    const res = await fetch(API_ENDPOINTS.BLOG.LIST, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data: { limit: 100 } }),
      next: { revalidate: 300 },
    });

    if (!res.ok) return [];

    const data = await res.json();
    const raw =
      data?.result?.data?.blogs ??
      data?.result?.blogs ??
      data?.blogs ??
      [];

    if (!Array.isArray(raw)) return [];

    return raw.map((post) => {
      const dateVal = post.publishedAt ?? post.createdAt;
      return {
        id: post.id,
        slug: post.slug ?? post.id,
        title: post.title ?? "Untitled",
        excerpt: post.excerpt ?? "",
        content: post.content ?? "",
        category: normalizeCategory(post.category),
        author: {
          name: post.author?.name ?? "Groot Team",
          role: post.author?.designation ?? post.author?.role ?? "Contributor",
          avatar: post.author?.avatar ?? DEFAULT_AVATAR,
        },
        date: formatDate(dateVal),
        readTime: post.readTime ?? "5 min read",
        image: post.coverImage ?? post.image ?? null,
        featured: String(post.isFeatured) === "true" || post.isFeatured === true,
        source: "internal",
        publishedAt: toTimestamp(dateVal),
      };
    });
  } catch {
    return [];
  }
}

/**
 * Fetch a single internal blog post by ID.
 * @param {string} blogId
 * @returns {Promise<object|null>} Raw API post or null.
 */
export async function fetchInternalBlogById(blogId) {
  if (!blogId) return null;
  try {
    const res = await fetch(API_ENDPOINTS.BLOG.GET, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data: { blogId, includeComments: true } }),
      next: { revalidate: 300 },
    });

    if (!res.ok) return null;

    const data = await res.json();
    let raw = data?.result?.data ?? data?.result ?? data?.data ?? data;
    if (raw?.blog) raw = raw.blog;
    return raw ?? null;
  } catch {
    return null;
  }
}

/**
 * Map a raw internal API post to the unified post shape.
 * @param {object} apiPost
 * @returns {object|null} Normalized post.
 */
export function mapInternalApiPostToPost(apiPost) {
  if (!apiPost) return null;
  const dateVal = apiPost.publishedAt ?? apiPost.createdAt;
  return {
    id: apiPost.id,
    slug: apiPost.slug ?? apiPost.id,
    title: apiPost.title ?? "Untitled",
    excerpt: apiPost.excerpt ?? "",
    content: apiPost.content ?? "",
    category: normalizeCategory(apiPost.category),
    tags: apiPost.tags ?? [],
    author: {
      name: apiPost.author?.name ?? "Groot Team",
      role: apiPost.author?.designation ?? apiPost.author?.role ?? "Contributor",
      avatar: apiPost.author?.avatar ?? DEFAULT_AVATAR,
    },
    date: formatDate(dateVal),
    readTime: apiPost.readTime ?? "5 min read",
    image: apiPost.coverImage ?? apiPost.image ?? null,
    featured: String(apiPost.isFeatured) === "true" || apiPost.isFeatured === true,
    source: "internal",
  };
}

/**
 * Parse markdown content to HTML (server-side).
 * @param {string} content
 * @returns {Promise<string>} HTML string.
 */
export async function parseMarkdownContent(content) {
  if (!content) return "";
  // If content already looks like HTML, return as-is
  if (content.trimStart().startsWith("<")) return content;
  try {
    return await marked.parse(content);
  } catch {
    return content;
  }
}
