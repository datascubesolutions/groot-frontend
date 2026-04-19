/**
 * Dynamic Sitemap Generator
 * 
 * @fileoverview Generates sitemap based on route metadata configuration
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap
 */

import { getIndexableRoutes } from '@/lib/routes/metadata';
import { siteConfig } from "@/config/site.config";
import { BLOG_POSTS } from "@/lib/blog-data";
import { fetchHashnodePosts } from "@/lib/hashnode";
import { fetchInternalBlogList } from "@/lib/blog-server";

// Regenerate sitemap hourly in production so new/removed posts are picked up quickly
export const revalidate = 3600;

/**
 * Generate sitemap entries from route metadata
 * @returns {import('next').MetadataRoute.Sitemap}
 */
export default async function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || siteConfig.url;

  // Get all indexable routes from metadata
  const indexableRoutes = getIndexableRoutes();

  // Generate sitemap entries
  const routes = indexableRoutes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const blogUrls = new Map();
  const blogRoutes = [];

  for (const post of BLOG_POSTS) {
    if (post?.slug) {
      blogUrls.set(`${baseUrl}/blog/${post.slug}`, post.updatedAt ?? post.date ?? new Date());
    }
  }

  try {
    const [internalPosts, hashnodePosts] = await Promise.all([
      fetchInternalBlogList(),
      fetchHashnodePosts(50),
    ]);

    for (const post of [...internalPosts, ...hashnodePosts]) {
      if (post?.slug) {
        // Prefer the most recent update date; fall back to publish date, then now
        const lastMod = post.updatedAt ?? post.publishedAt ?? post.date ?? new Date();
        blogUrls.set(`${baseUrl}/blog/${post.slug}`, lastMod);
      }
    }
  } catch {
    // Keep core route sitemap available even if external feeds fail.
  }

  for (const [url, lastModified] of blogUrls) {
    blogRoutes.push({
      url,
      lastModified: new Date(lastModified),
      changeFrequency: "weekly",
      priority: 0.7,
    });
  }

  return [...routes, ...blogRoutes];
}
