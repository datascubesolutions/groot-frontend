/**
 * API Client
 * 
 * @fileoverview Type-safe fetch wrapper for API calls
 * @module lib/api/client
 */

import { env } from '@/lib/env';
import { ApiError, handleApiError } from './errors';

/**
 * @typedef {Object} RequestConfig
 * @property {Object} [headers] - Custom headers
 * @property {Object} [params] - Query parameters
 * @property {number} [timeout] - Request timeout in ms
 * @property {boolean} [withCredentials] - Include credentials
 * @property {AbortSignal} [signal] - Abort signal
 */

/**
 * Default request configuration
 */
const DEFAULT_CONFIG = {
    timeout: 30000,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
};

/**
 * Build URL with query parameters
 * @param {string} url - Base URL
 * @param {Object} [params] - Query parameters
 * @returns {string} Full URL with params
 */
function buildUrl(url, params) {
    if (!params || Object.keys(params).length === 0) {
        return url;
    }

    const searchParams = new URLSearchParams();

    Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
            if (Array.isArray(value)) {
                value.forEach((v) => searchParams.append(key, String(v)));
            } else {
                searchParams.append(key, String(value));
            }
        }
    });

    const queryString = searchParams.toString();
    return queryString ? `${url}?${queryString}` : url;
}

/**
 * Create fetch with timeout
 * @param {string} url - Request URL
 * @param {RequestInit} options - Fetch options
 * @param {number} timeout - Timeout in ms
 * @returns {Promise<Response>}
 */
async function fetchWithTimeout(url, options, timeout) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);

    try {
        const response = await fetch(url, {
            ...options,
            signal: options.signal || controller.signal,
        });
        return response;
    } finally {
        clearTimeout(timeoutId);
    }
}

/**
 * Create an API client instance
 * 
 * @param {Object} [clientConfig] - Client configuration
 * @param {string} [clientConfig.baseUrl] - Base URL for all requests
 * @param {Object} [clientConfig.defaultHeaders] - Default headers
 * @returns {Object} API client methods
 */
export function createApiClient(clientConfig = {}) {
    const {
        baseUrl = env.NEXT_PUBLIC_API_URL || '',
        defaultHeaders = {},
    } = clientConfig;

    /**
     * Make a request
     * @template T
     * @param {string} method - HTTP method
     * @param {string} endpoint - API endpoint
     * @param {Object} [data] - Request body
     * @param {RequestConfig} [config] - Request config
     * @returns {Promise<T>}
     */
    async function request(method, endpoint, data, config = {}) {
        const url = buildUrl(`${baseUrl}${endpoint}`, config.params);

        const headers = {
            ...DEFAULT_CONFIG.headers,
            ...defaultHeaders,
            ...config.headers,
        };

        // Remove Content-Type for FormData
        if (data instanceof FormData) {
            delete headers['Content-Type'];
        }

        const options = {
            method,
            headers,
            credentials: config.withCredentials ?? DEFAULT_CONFIG.withCredentials
                ? 'include'
                : 'same-origin',
            signal: config.signal,
        };

        // Add body for methods that support it
        if (data && !['GET', 'HEAD'].includes(method)) {
            options.body = data instanceof FormData ? data : JSON.stringify(data);
        }

        try {
            const response = await fetchWithTimeout(
                url,
                options,
                config.timeout ?? DEFAULT_CONFIG.timeout
            );

            // Handle non-OK responses
            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                throw new ApiError(
                    errorData.message || response.statusText,
                    response.status,
                    errorData
                );
            }

            // Handle empty responses
            const contentType = response.headers.get('content-type');
            if (contentType?.includes('application/json')) {
                return await response.json();
            }

            return await response.text();
        } catch (error) {
            if (error instanceof ApiError) {
                throw error;
            }
            throw handleApiError(error);
        }
    }

    return {
        /**
         * GET request
         * @template T
         * @param {string} endpoint - API endpoint
         * @param {RequestConfig} [config] - Request config
         * @returns {Promise<T>}
         */
        get: (endpoint, config) => request('GET', endpoint, null, config),

        /**
         * POST request
         * @template T
         * @param {string} endpoint - API endpoint
         * @param {Object} [data] - Request body
         * @param {RequestConfig} [config] - Request config
         * @returns {Promise<T>}
         */
        post: (endpoint, data, config) => request('POST', endpoint, data, config),

        /**
         * PUT request
         * @template T
         * @param {string} endpoint - API endpoint
         * @param {Object} [data] - Request body
         * @param {RequestConfig} [config] - Request config
         * @returns {Promise<T>}
         */
        put: (endpoint, data, config) => request('PUT', endpoint, data, config),

        /**
         * PATCH request
         * @template T
         * @param {string} endpoint - API endpoint
         * @param {Object} [data] - Request body
         * @param {RequestConfig} [config] - Request config
         * @returns {Promise<T>}
         */
        patch: (endpoint, data, config) => request('PATCH', endpoint, data, config),

        /**
         * DELETE request
         * @template T
         * @param {string} endpoint - API endpoint
         * @param {RequestConfig} [config] - Request config
         * @returns {Promise<T>}
         */
        delete: (endpoint, config) => request('DELETE', endpoint, null, config),
    };
}

// Default API client instance
export const apiClient = createApiClient();

export default apiClient;
