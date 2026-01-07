/**
 * Dynamic Sitemap Generator
 * 
 * @fileoverview Generates sitemap based on route metadata configuration
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap
 */

import { getIndexableRoutes } from '@/lib/routes/metadata';

/**
 * Generate sitemap entries from route metadata
 * @returns {import('next').MetadataRoute.Sitemap}
 */
export default function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

  // Get all indexable routes from metadata
  const indexableRoutes = getIndexableRoutes();

  // Generate sitemap entries
  const routes = indexableRoutes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  // Add additional dynamic routes here
  // For example, blog posts, service pages, etc.
  // const blogPosts = await getBlogPosts();
  // const blogRoutes = blogPosts.map(post => ({...}));

  return routes;
}
