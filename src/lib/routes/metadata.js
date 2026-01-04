/**
 * Route Metadata Configuration
 * 
 * @fileoverview Centralized route metadata for SEO and sitemap generation
 * This is the single source of truth for all route-related SEO data
 * 
 * @module lib/routes/metadata
 */

/**
 * @typedef {Object} RouteMetadata
 * @property {string} path - Route path
 * @property {string} title - Page title
 * @property {string} description - Meta description
 * @property {'daily' | 'weekly' | 'monthly' | 'yearly' | 'always' | 'hourly' | 'never'} changeFrequency - Sitemap change frequency
 * @property {number} priority - Sitemap priority (0.0 - 1.0)
 * @property {boolean} indexable - Whether page should be indexed
 * @property {string[]} [keywords] - Additional keywords
 * @property {string} [image] - OG image path
 */

/**
 * Route metadata configuration
 * @type {Object<string, RouteMetadata>}
 */
export const ROUTE_METADATA = {
    // ============================================================================
    // Public Routes
    // ============================================================================
    HOME: {
        path: '/',
        title: 'Groot Analytics - Data Engineering & AI Solutions',
        description: 'Turning messy data into intelligent decisions. Modern data platforms, advanced analytics, and AI-powered solutions for your business.',
        changeFrequency: 'daily',
        priority: 1.0,
        indexable: true,
        keywords: ['data engineering', 'AI solutions', 'analytics', 'machine learning'],
        image: '/og-image.jpg',
    },

    ABOUT: {
        path: '/about',
        title: 'About Us',
        description: 'Learn about Groot Analytics - our mission, team, and commitment to transforming data into actionable insights.',
        changeFrequency: 'monthly',
        priority: 0.8,
        indexable: true,
        keywords: ['about', 'team', 'company', 'data experts'],
    },

    SERVICES: {
        path: '/services',
        title: 'Our Services',
        description: 'Explore our comprehensive data engineering and AI services including data platforms, analytics, and machine learning solutions.',
        changeFrequency: 'weekly',
        priority: 0.9,
        indexable: true,
        keywords: ['services', 'data platform', 'analytics', 'machine learning', 'consulting'],
    },

    CONTACT: {
        path: '/contact',
        title: 'Contact Us',
        description: 'Get in touch with Groot Analytics. Let\'s discuss how we can transform your data into intelligent decisions.',
        changeFrequency: 'monthly',
        priority: 0.7,
        indexable: true,
        keywords: ['contact', 'get in touch', 'consultation'],
    },

    PRICING: {
        path: '/pricing',
        title: 'Pricing',
        description: 'Transparent pricing for our data engineering and AI services. Find the perfect plan for your business needs.',
        changeFrequency: 'weekly',
        priority: 0.8,
        indexable: true,
        keywords: ['pricing', 'plans', 'packages', 'cost'],
    },

    BLOG: {
        path: '/blog',
        title: 'Blog',
        description: 'Insights, tutorials, and news about data engineering, AI, and analytics from the Groot Analytics team.',
        changeFrequency: 'daily',
        priority: 0.8,
        indexable: true,
        keywords: ['blog', 'articles', 'tutorials', 'insights'],
    },

    // ============================================================================
    // Legal Routes
    // ============================================================================
    PRIVACY: {
        path: '/privacy',
        title: 'Privacy Policy',
        description: 'Groot Analytics privacy policy - how we collect, use, and protect your data.',
        changeFrequency: 'yearly',
        priority: 0.3,
        indexable: true,
    },

    TERMS: {
        path: '/terms',
        title: 'Terms of Service',
        description: 'Terms and conditions for using Groot Analytics services.',
        changeFrequency: 'yearly',
        priority: 0.3,
        indexable: true,
    },

    // ============================================================================
    // Auth Routes (Not indexed)
    // ============================================================================
    LOGIN: {
        path: '/auth/login',
        title: 'Sign In',
        description: 'Sign in to your Groot Analytics account.',
        changeFrequency: 'never',
        priority: 0.0,
        indexable: false,
    },

    REGISTER: {
        path: '/auth/register',
        title: 'Create Account',
        description: 'Create your Groot Analytics account and start your data journey.',
        changeFrequency: 'never',
        priority: 0.0,
        indexable: false,
    },

    // ============================================================================
    // App Routes (Not indexed)
    // ============================================================================
    DASHBOARD: {
        path: '/app/dashboard',
        title: 'Dashboard',
        description: 'Your Groot Analytics dashboard.',
        changeFrequency: 'never',
        priority: 0.0,
        indexable: false,
    },
};

/**
 * Get route metadata by path
 * @param {string} path - Route path
 * @returns {RouteMetadata | undefined}
 */
export function getRouteMetadata(path) {
    return Object.values(ROUTE_METADATA).find((route) => route.path === path);
}

/**
 * Get all indexable routes for sitemap
 * @returns {RouteMetadata[]}
 */
export function getIndexableRoutes() {
    return Object.values(ROUTE_METADATA).filter((route) => route.indexable);
}

/**
 * Get routes by priority (for navigation ordering)
 * @returns {RouteMetadata[]}
 */
export function getRoutesByPriority() {
    return Object.values(ROUTE_METADATA)
        .filter((route) => route.indexable)
        .sort((a, b) => b.priority - a.priority);
}

export default ROUTE_METADATA;
