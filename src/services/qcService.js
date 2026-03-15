// src/services/qcService.js
export const qcService = {
  fetchVendorRejectionNotes: async (ids, is_pdf = false) => {
    try {
      const response = await fetch('http://localhost:80/v1/qc-service/vendor-rejection-note-print', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Note: In a real app we'd pass auth tokens automatically via an interceptor, but currently setting based on requirements provided
        },
        body: JSON.stringify({ ids, is_pdf }),
      });
      if (!response.ok) {
        throw new Error('Failed to fetch rejection notes');
      }
      return await response.json();
    } catch (error) {
      console.error("Error fetching vendor rejection notes:", error);
      throw error;
    }
  }
};
