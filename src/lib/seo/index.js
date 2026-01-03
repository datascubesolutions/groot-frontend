/**
 * SEO Utilities
 * Helper functions for SEO and metadata management
 */

/**
 * Generates metadata object for pages
 * @param {Object} params - Metadata parameters
 * @param {string} params.title - Page title
 * @param {string} params.description - Page description
 * @param {string} params.path - Page path
 * @returns {Object} Metadata object
 */
export function generateMetadata({ title, description, path = "/" }) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const url = `${siteUrl}${path}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
