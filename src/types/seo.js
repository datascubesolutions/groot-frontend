/**
 * SEO Type Definitions
 *
 * @fileoverview Type definitions for SEO and metadata
 * @module types/seo
 */

/**
 * @typedef {'daily' | 'weekly' | 'monthly' | 'yearly' | 'always' | 'hourly' | 'never'} ChangeFrequency
 */

/**
 * @typedef {Object} SitemapEntry
 * @property {string} url - Full URL
 * @property {Date} lastModified - Last modification date
 * @property {ChangeFrequency} changeFrequency - Update frequency
 * @property {number} priority - Priority (0.0 - 1.0)
 */

/**
 * @typedef {Object} RouteMetadata
 * @property {string} path - Route path
 * @property {string} title - Page title
 * @property {string} description - Meta description
 * @property {ChangeFrequency} changeFrequency - Sitemap change frequency
 * @property {number} priority - Sitemap priority
 * @property {boolean} [indexable] - Whether page should be indexed
 * @property {string[]} [keywords] - Meta keywords
 */

/**
 * @typedef {Object} OpenGraphData
 * @property {string} title - OG title
 * @property {string} description - OG description
 * @property {string} url - OG URL
 * @property {'website' | 'article' | 'profile'} type - OG type
 * @property {string} [image] - OG image URL
 * @property {string} [siteName] - Site name
 * @property {string} [locale] - Locale code
 */

/**
 * @typedef {Object} TwitterCardData
 * @property {'summary' | 'summary_large_image' | 'app' | 'player'} card - Card type
 * @property {string} title - Card title
 * @property {string} description - Card description
 * @property {string} [image] - Card image URL
 * @property {string} [creator] - Twitter handle
 */

/**
 * @typedef {Object} StructuredDataOrganization
 * @property {string} name - Organization name
 * @property {string} url - Organization URL
 * @property {string} [logo] - Logo URL
 * @property {string} [description] - Description
 * @property {string[]} [sameAs] - Social profiles
 * @property {Object} [contactPoint] - Contact information
 */



// Export empty object for module resolution
export { };
