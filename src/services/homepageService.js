// @ts-nocheck
import { API_ENDPOINTS } from "@/lib/api/endpoints";
import { authPost } from "@/lib/api/auth";

export const homepageService = {
  /**
   * Fetch home page content.
   * Uses authenticated request if token is available, else public access.
   */
  getHomepage: async () => {
    try {
      const response = await fetch(API_ENDPOINTS.HOMEPAGE.GET, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: {} }),
      });

      const payload = await response.json();
      if (!response.ok || payload?.error) {
        throw new Error(
          payload?.error?.message ||
            payload?.error ||
            "Failed to fetch homepage content"
        );
      }
      // Callable returns { result: { success, data, meta } }; HTTP onRequest returns { success, data, meta }
      return payload.result?.data ?? payload.data ?? null;
    } catch (error) {
      console.error("[homepageService.getHomepage]", error);
      throw error;
    }
  },

  /**
   * Update home page content.
   * Requires authentication (Callable with auth).
   * @param {Object} data - Updates to apply
   */
  updateHomepage: async (data) => {
    const result = await authPost(API_ENDPOINTS.HOMEPAGE.UPDATE, {
      data: { updates: data },
    });
    return result?.result?.data ?? result?.data ?? null;
  },
};
