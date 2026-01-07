/**
 * API Client Module
 * 
 * @fileoverview Centralized API client with typed fetch wrappers
 * @module lib/api
 */

export { apiClient, createApiClient } from './client';
export { API_ENDPOINTS } from './endpoints';
export { handleApiError, ApiError } from './errors';
