/**
 * Blog Service
 * Handles all blog-related API calls.
 * @module services/blogService
 */

import { authFormPost, authPost } from "@/lib/api/auth";
import { apiClient } from "@/lib/api/client";
import { API_ENDPOINTS } from "@/lib/api/endpoints";

export const blogService = {
  /** List blog posts with optional filters. */
  list: (params = { limit: 10, category: "", search: "" }) =>
    apiClient.post(API_ENDPOINTS.BLOG.LIST, { data: params }),

  /** Get a single blog post by ID. */
  getById: (blogId) =>
    apiClient.post(API_ENDPOINTS.BLOG.GET, {
      data: { blogId, includeComments: true },
    }),

  /**
   * Create a new blog post.
   * Sends multipart FormData to support image uploads.
   * @param {FormData} formData
   */
  create: (formData) =>
    authFormPost(API_ENDPOINTS.BLOG.CREATE, formData),

  /**
   * Update an existing blog post.
   * Appends blogId to the FormData before sending.
   * @param {string} blogId
   * @param {FormData} formData
   */
  update: (blogId, formData) => {
    formData.append("blogId", blogId);
    return authFormPost(API_ENDPOINTS.BLOG.UPDATE, formData);
  },

  /**
   * Delete a blog post by ID.
   * @param {string} blogId
   */
  delete: (blogId) =>
    authPost(API_ENDPOINTS.BLOG.DELETE, { blogId }),
};
