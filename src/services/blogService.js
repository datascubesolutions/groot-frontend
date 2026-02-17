import { apiClient } from "@/lib/api/client";
import { API_ENDPOINTS } from "@/lib/api/endpoints";

export const blogService = {
  /**
   * List blog posts with optional filters
   * @param {{ limit?: number, category?: string, search?: string }} params
   */
  list: (params = { limit: 10, category: "", search: "" }) => {
    return apiClient.post(API_ENDPOINTS.BLOG.LIST, { data: params });
  },

  /**
   * Get a single blog post by ID
   * @param {string} blogId
   */
  getById: (blogId) => {
    return apiClient.post(API_ENDPOINTS.BLOG.GET, {
      data: { blogId, includeComments: true },
    });
  },

  /**
   * Create a new blog post (multipart form data for image uploads)
   * @param {FormData} formData
   * @param {string} token - Bearer token for authorization
   */
  create: async (formData, token) => {
    const response = await fetch(API_ENDPOINTS.BLOG.CREATE, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });
    const data = await response.json();
    if (!response.ok) {
      return Promise.reject(data);
    }
    return data;
  },
};
