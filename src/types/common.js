/**
 * Common Type Definitions
 * 
 * @fileoverview Shared type definitions used across the application
 * @module types/common
 */

/**
 * @typedef {Object} BaseEntity
 * @property {string} id - Unique identifier
 * @property {Date} createdAt - Creation timestamp
 * @property {Date} updatedAt - Last update timestamp
 */

/**
 * @typedef {'idle' | 'loading' | 'success' | 'error'} AsyncStatus
 */

/**
 * @typedef {Object} AsyncState
 * @property {AsyncStatus} status - Current status
 * @property {Error | null} error - Error if any
 * @property {boolean} isLoading - Loading state
 * @property {boolean} isError - Error state
 * @property {boolean} isSuccess - Success state
 */

/**
 * @typedef {Object} PaginationParams
 * @property {number} page - Current page (1-indexed)
 * @property {number} limit - Items per page
 * @property {string} [sortBy] - Sort field
 * @property {'asc' | 'desc'} [sortOrder] - Sort direction
 */

/**
 * @typedef {Object} PaginatedResponse
 * @template T
 * @property {T[]} data - Array of items
 * @property {number} total - Total count
 * @property {number} page - Current page
 * @property {number} totalPages - Total pages
 * @property {boolean} hasNext - Has next page
 * @property {boolean} hasPrev - Has previous page
 */

/**
 * @typedef {Object} ActionResult
 * @template T
 * @property {boolean} success - Operation success
 * @property {T} [data] - Result data
 * @property {string} [message] - Status message
 * @property {Object} [errors] - Validation errors
 */

// Export empty object for module resolution
export { };
