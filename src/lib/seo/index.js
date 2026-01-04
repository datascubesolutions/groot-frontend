/**
 * SEO Utilities
 * 
 * @fileoverview Helper functions for SEO and metadata management
 * @module lib/seo
 */

import { getRouteMetadata, ROUTE_METADATA } from '@/lib/routes/metadata';

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
  path = '/',
  image,
  keywords,
  noIndex = false,
}) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const url = `${siteUrl}${path}`;
  const ogImage = image ? `${siteUrl}${image}` : `${siteUrl}/og-image.jpg`;

  const metadata = {
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
      type: 'website',
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
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };

  if (noIndex) {
    metadata.robots = {
      index: false,
      follow: false,
    };
  }

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
      title: 'Groot Analytics',
      description: 'Data Engineering & AI Solutions',
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

/**
 * Generate breadcrumb structured data
 * 
 * @param {Array<{name: string, path: string}>} items - Breadcrumb items
 * @returns {Object} JSON-LD structured data
 */
export function generateBreadcrumbSchema(items) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.path}`,
    })),
  };
}

/**
 * Generate FAQ structured data
 * 
 * @param {Array<{question: string, answer: string}>} faqs - FAQ items
 * @returns {Object} JSON-LD structured data
 */
export function generateFAQSchema(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
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
 * @returns {Object} JSON-LD structured data
 */
export function generateArticleSchema(article) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    image: article.image,
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    author: {
      '@type': 'Person',
      name: article.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Groot Analytics',
      logo: {
        '@type': 'ImageObject',
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': article.url,
    },
  };
}

export default {
  generateMetadata,
  generateRouteMetadata,
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateArticleSchema,
};
