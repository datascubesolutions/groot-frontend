/**
 * Route Metadata Configuration
 * Used for sitemap generation and SEO optimization
 */

export const getIndexableRoutes = () => [
    // Home
    { path: '/', priority: 1.0, changeFrequency: 'weekly' },

    // About Section
    { path: '/about', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/about/who-we-are', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/about/what-we-do', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/about/how-we-do-it', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/about/our-story', priority: 0.7, changeFrequency: 'yearly' },
    { path: '/about/why-join-us', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/about/careers', priority: 0.9, changeFrequency: 'weekly' },

    // Services
    { path: '/services', priority: 1.0, changeFrequency: 'monthly' },
    { path: '/services/strategy-advisory', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/services/data-engineering', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/services/business-intelligence', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/services/ai-automation', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/services/dedicated-resources', priority: 0.9, changeFrequency: 'monthly' },

    // Other Main Pages
    { path: '/industries', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/solutions', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/work', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/technologies', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/contact', priority: 0.9, changeFrequency: 'yearly' },
];

/**
 * Get route by path
 * @param {string} path - Route path
 * @returns {object|null} Route metadata or null
 */
export const getRouteMetadata = (path) => {
    const routes = getIndexableRoutes();
    return routes.find((route) => route.path === path) || null;
};

/**
 * Check if route should be indexed
 * @param {string} path - Route path
 * @returns {boolean}
 */
export const isIndexable = (path) => {
    return getIndexableRoutes().some((route) => route.path === path);
};
