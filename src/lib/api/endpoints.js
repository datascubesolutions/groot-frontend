/**
 * API Endpoints
 *
 * @fileoverview Centralized API endpoint definitions
 * @module lib/api/endpoints
 */

/**
 * API Endpoints organized by feature
 * @type {Object}
 */
export const API_ENDPOINTS = {
    // Auth
    AUTH: {
        LOGIN: '/auth/login',
        LOGOUT: '/auth/logout',
        REGISTER: '/auth/register',
        REFRESH: '/auth/refresh',
        FORGOT_PASSWORD: '/auth/forgot-password',
        RESET_PASSWORD: '/auth/reset-password',
        VERIFY_EMAIL: '/auth/verify-email',
    },

    // User
    USER: {
        PROFILE: '/users/profile',
        UPDATE_PROFILE: '/users/profile',
        CHANGE_PASSWORD: '/users/change-password',
        PREFERENCES: '/users/preferences',
    },

    // Contact
    CONTACT: {
        SUBMIT: '/contact',
        NEWSLETTER: '/contact/newsletter',
        CREATE: 'https://us-central1-datascube-2b74e.cloudfunctions.net/contact_create',
        LIST: 'https://us-central1-datascube-2b74e.cloudfunctions.net/contact_list',
        GET: 'https://us-central1-datascube-2b74e.cloudfunctions.net/contact_get',
        UPDATE: 'https://us-central1-datascube-2b74e.cloudfunctions.net/contact_update',
        DELETE: 'https://us-central1-datascube-2b74e.cloudfunctions.net/contact_delete',
    },

    // Services
    SERVICES: {
        LIST: '/services',
        DETAIL: (id) => `/services/${id}`,
    },

    // Blog
    BLOG: {
        LIST: '/blog/posts',
        DETAIL: (slug) => `/blog/posts/${slug}`,
        CATEGORIES: '/blog/categories',
        TAGS: '/blog/tags',
    },

    // Projects
    PROJECTS: {
        LIST: '/projects',
        DETAIL: (id) => `/projects/${id}`,
        CREATE: '/projects',
        UPDATE: (id) => `/projects/${id}`,
        DELETE: (id) => `/projects/${id}`,
    },

    // Analytics
    ANALYTICS: {
        DASHBOARD: '/analytics/dashboard',
        REPORTS: '/analytics/reports',
        EXPORT: '/analytics/export',
    },

    // Health
    HEALTH: {
        CHECK: '/health',
        STATUS: '/health/status',
    },
};

/**
 * Get endpoint with parameters
 * @param {string | ((...args: any[]) => string)} endpoint - Endpoint or endpoint factory
 * @param {...any} args - Arguments for endpoint factory
 * @returns {string} Resolved endpoint
 *
 * @example
 * getEndpoint(API_ENDPOINTS.SERVICES.DETAIL, 'service-123')
 * // Returns: '/services/service-123'
 */
export function getEndpoint(endpoint, ...args) {
    if (typeof endpoint === 'function') {
        return endpoint(...args);
    }
    return endpoint;
}

export default API_ENDPOINTS;
