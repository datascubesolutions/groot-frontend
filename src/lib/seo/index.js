// @ts-nocheck
/**
 * SEO Utilities
 *
 * @fileoverview Helper functions for SEO and metadata management
 * @module lib/seo
 */

import { ROUTE_METADATA } from "@/lib/routes/metadata";
import { siteConfig } from "@/config/site.config";

/**
 * Generate static metadata object for pages
 *
 * @param {Object} params - Metadata parameters
 * @param {string} params.title - Page title
 * @param {string} params.description - Page description
 * @param {string} [params.path='/'] - Page path
 * @param {string} [params.image] - OG image path
 * @param {string[]} [params.keywords] - Page keywords
 * @param {boolean} [params.noIndex=false] - Prevent indexing
 * @returns {import('next').Metadata}
 */
export function generateMetadata({
  title,
  description,
  path = "/",
  image,
  keywords,
  noIndex = false,
}) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || siteConfig.url;
  const normalizedPath = normalizePath(path);
  const url = `${siteUrl}${normalizedPath}`;
  const ogImage = image
    ? `${siteUrl}${image}`
    : `${siteUrl}${siteConfig.assets.ogImagePath}`;

  const metadata = {
    metadataBase: new URL(siteUrl),
    title,
    description,
    keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-snippet": -1,
        "max-image-preview": "large",
        "max-video-preview": -1,
      },
    },
  };

  return metadata;
}

/**
 * Generate metadata from route configuration
 *
 * @param {keyof typeof ROUTE_METADATA} routeKey - Key from ROUTE_METADATA
 * @param {Object} [overrides] - Override values
 * @returns {import('next').Metadata}
 */
export function generateRouteMetadata(routeKey, overrides = {}) {
  const routeMeta = ROUTE_METADATA[routeKey];

  if (!routeMeta) {
    console.warn(`Route metadata not found for key: ${routeKey}`);
    return generateMetadata({
      title: siteConfig.name,
      description: siteConfig.description,
      ...overrides,
    });
  }

  return generateMetadata({
    title: routeMeta.title,
    description: routeMeta.description,
    path: routeMeta.path,
    image: routeMeta.image,
    keywords: routeMeta.keywords,
    noIndex: !routeMeta.indexable,
    ...overrides,
  });
}

function normalizePath(path = "/") {
  if (!path) return "/";
  if (path.startsWith("http://") || path.startsWith("https://")) {
    try {
      return new URL(path).pathname || "/";
    } catch {
      return "/";
    }
  }
  return path.startsWith("/") ? path : `/${path}`;
}

/**
 * Generate FAQ structured data
 *
 * @param {Array<{question: string, answer: string}>} faqs - FAQ items
 * @returns {Object} JSON-LD structured data
 */
export function generateFAQSchema(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/**
 * Generate article structured data
 *
 * @param {Object} article - Article data
 * @param {string} article.title - Article title
 * @param {string} article.description - Article description
 * @param {string} article.datePublished - Publication date
 * @param {string} [article.dateModified] - Last modified date
 * @param {string} article.author - Author name
 * @param {string} article.image - Article image URL
 * @param {string} article.url - Article URL
 * @param {number} [article.wordCount] - Word count
 * @param {string[]} [article.keywords] - Article keywords
 * @returns {Object} JSON-LD structured data
 */
export function generateArticleSchema(article) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || siteConfig.url;
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.description,
    image: article.image,
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    ...(article.wordCount ? { wordCount: article.wordCount } : {}),
    ...(article.keywords?.length
      ? { keywords: article.keywords.join(", ") }
      : {}),
    author: {
      "@type": "Person",
      name: article.author,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}${siteConfig.assets.logoPath}`,
        width: 512,
        height: 512,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": article.url,
    },
  };
}

/**
 * Generate breadcrumb structured data.
 *
 * @param {Array<{name: string, path: string}>} items - Breadcrumb items
 * @returns {Object} JSON-LD structured data
 */
export function generateBreadcrumbSchema(items = []) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || siteConfig.url;
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${normalizePath(item.path)}`,
    })),
  };
}

const seoUtils = {
  generateMetadata,
  generateRouteMetadata,
  generateFAQSchema,
  generateArticleSchema,
  generateBreadcrumbSchema,
};

export default seoUtils;
