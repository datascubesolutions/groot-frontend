import { API_ENDPOINTS } from "@/lib/api/endpoints";
import { authService } from "./authService";

export const homepageService = {
    /**
     * Fetch home page content.
     * Uses authenticated request if token is available, else public access.
     */
    getHomepage: async () => {
        try {
            const response = await fetch(API_ENDPOINTS.HOMEPAGE.GET, {
                method: "POST", // Firebase callable functions use POST
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ data: {} }),
            });

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            const payload = await response.json();
            return payload.result?.data || payload.data || null;
        } catch (error) {
            console.error("[homepageService.getHomepage]", error);
            throw error;
        }
    },

    /**
     * Update home page content.
     * Requires authentication token.
     * @param {Object} data 
     */
    updateHomepage: async (data) => {
        try {
            const token = authService.getToken();
            if (!token) {
                throw new Error("Authentication required to update homepage content.");
            }

            const response = await fetch(API_ENDPOINTS.HOMEPAGE.UPDATE, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                // We pass the data in the firebase callable function wrapper format { data: payload }
                body: JSON.stringify({ data }),
            });

            const payload = await response.json();

            if (!response.ok || payload.error) {
                throw new Error(payload.error?.message || "Failed to update homepage content");
            }

            return payload.result?.data || payload.data || null;
        } catch (error) {
            console.error("[homepageService.updateHomepage]", error);
            throw error;
        }
    },
};
