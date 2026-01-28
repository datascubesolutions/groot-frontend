/**
 * API Errors
 *
 * @fileoverview Error handling utilities for API calls
 * @module lib/api/errors
 */

/**
 * Custom API Error class
 */
export class ApiError extends Error {
    /**
     * @param {string} message - Error message
     * @param {number} [status] - HTTP status code
     * @param {Object} [data] - Error data from API
     */
    constructor(message, status, data) {
        super(message);
        this.name = 'ApiError';
        this.status = status;
        this.data = data;
        this.isApiError = true;
    }

    /**
     * Check if error is a specific status
     * @param {number} status - Status to check
     * @returns {boolean}
     */
    isStatus(status) {
        return this.status === status;
    }

    /**
     * Check if error is unauthorized
     * @returns {boolean}
     */
    get isUnauthorized() {
        return this.status === 401;
    }

    /**
     * Check if error is forbidden
     * @returns {boolean}
     */
    get isForbidden() {
        return this.status === 403;
    }

    /**
     * Check if error is not found
     * @returns {boolean}
     */
    get isNotFound() {
        return this.status === 404;
    }

    /**
     * Check if error is validation error
     * @returns {boolean}
     */
    get isValidationError() {
        return this.status === 422 || this.status === 400;
    }

    /**
     * Check if error is server error
     * @returns {boolean}
     */
    get isServerError() {
        return this.status >= 500;
    }

    /**
     * Get validation errors if available
     * @returns {Object}
     */
    get validationErrors() {
        return this.data?.errors || {};
    }
}

/**
 * Error messages by status code
 */
const ERROR_MESSAGES = {
    400: 'Invalid request. Please check your input.',
    401: 'Please sign in to continue.',
    403: 'You do not have permission to perform this action.',
    404: 'The requested resource was not found.',
    408: 'Request timed out. Please try again.',
    422: 'Validation failed. Please check your input.',
    429: 'Too many requests. Please wait a moment.',
    500: 'Server error. Please try again later.',
    502: 'Server is temporarily unavailable.',
    503: 'Service unavailable. Please try again later.',
    504: 'Request timed out. Please try again.',
};

/**
 * Handle API errors and convert to ApiError
 * @param {Error} error - Original error
 * @returns {ApiError}
 */
export function handleApiError(error) {
    // Already an ApiError
    if (error instanceof ApiError) {
        return error;
    }

    // Network error
    if (error.name === 'TypeError' && error.message.includes('fetch')) {
        return new ApiError(
            'Unable to connect. Please check your internet connection.',
            0,
            { type: 'network' }
        );
    }

    // Abort error
    if (error.name === 'AbortError') {
        return new ApiError(
            'Request was cancelled.',
            0,
            { type: 'abort' }
        );
    }

    // Timeout error
    if (error.name === 'TimeoutError' || error.message.includes('timeout')) {
        return new ApiError(
            'Request timed out. Please try again.',
            408,
            { type: 'timeout' }
        );
    }

    // Generic error
    return new ApiError(
        error.message || 'An unexpected error occurred.',
        0,
        { type: 'unknown', originalError: error }
    );
}

/**
 * Get user-friendly error message
 * @param {Error | ApiError} error - Error object
 * @returns {string}
 */
export function getErrorMessage(error) {
    if (error instanceof ApiError) {
        // Handle specific nested validation errors from the user's example
        if (error.data?.details?.validationErrors && Array.isArray(error.data.details.validationErrors)) {
            return error.data.details.validationErrors[0];
        }

        // Handle generic details object
        if (error.data?.details?.message) {
            return error.data.details.message;
        }

        // Use custom message from API if available
        if (error.message && error.message !== error.status?.toString()) {
            return error.message;
        }
        // Fallback to status-based message
        return ERROR_MESSAGES[error.status] || 'An unexpected error occurred.';
    }

    // 1. Handle structure: { error: { details: { details: { validationErrors: [] } } } }
    // This often happens when the API response itself is the error object
    if (error?.error?.details?.details?.validationErrors && Array.isArray(error.error.details.details.validationErrors)) {
        return error.error.details.details.validationErrors[0];
    }

    if (error?.error?.message) {
        return error.error.message;
    }

    // 2. Handle structure: { details: { details: { validationErrors: [] } } }
    // This might happen if the error object is unwrapped
    if (error?.details?.details?.validationErrors && Array.isArray(error.details.details.validationErrors)) {
        return error.details.details.validationErrors[0];
    }

    if (error?.details?.message) {
        return error.details.message;
    }

    return error.message || 'An unexpected error occurred.';
}

/**
 * Check if error is an API error
 * @param {Error} error - Error to check
 * @returns {error is ApiError}
 */
export function isApiError(error) {
    return error instanceof ApiError || error?.isApiError === true;
}

export default { ApiError, handleApiError, getErrorMessage, isApiError };
