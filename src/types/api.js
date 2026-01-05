/**
 * API Type Definitions
 * 
 * @fileoverview Type definitions for API requests and responses
 * @module types/api
 */

/**
 * @typedef {'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'} HttpMethod
 */

/**
 * @typedef {Object} ApiRequestConfig
 * @property {HttpMethod} method - HTTP method
 * @property {string} url - Request URL
 * @property {Object} [headers] - Request headers
 * @property {Object} [params] - Query parameters
 * @property {Object} [body] - Request body
 * @property {number} [timeout] - Request timeout in ms
 * @property {boolean} [withCredentials] - Include credentials
 */

/**
 * @typedef {Object} ApiResponse
 * @template T
 * @property {T} data - Response data
 * @property {number} status - HTTP status code
 * @property {string} statusText - Status text
 * @property {Object} headers - Response headers
 */

/**
 * @typedef {Object} ApiError
 * @property {string} message - Error message
 * @property {number} [status] - HTTP status code
 * @property {string} [code] - Error code
 * @property {Object} [details] - Additional error details
 */

/**
 * @typedef {Object} ContactFormData
 * @property {string} name - Contact name
 * @property {string} email - Contact email
 * @property {string} [company] - Company name
 * @property {string} [phone] - Phone number
 * @property {string} message - Message content
 * @property {'general' | 'support' | 'sales' | 'partnership'} [type] - Inquiry type
 */

/**
 * @typedef {Object} NewsletterSubscription
 * @property {string} email - Subscriber email
 * @property {string[]} [interests] - Areas of interest
 * @property {boolean} [gdprConsent] - GDPR consent
 */

// Export empty object for module resolution
export { };
