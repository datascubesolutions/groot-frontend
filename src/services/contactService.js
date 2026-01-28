import { apiClient } from "@/lib/api/client";
import { API_ENDPOINTS } from "@/lib/api/endpoints";

export const contactService = {
  getAll: (params = { page: 1, limit: 10 }) => {
    return apiClient.post(API_ENDPOINTS.CONTACT.LIST, { data: params });
  },

  getById: (contactId) => {
    return apiClient.post(API_ENDPOINTS.CONTACT.GET, { data: { contactId } });
  },

  create: (contactData) => {
    return apiClient.post(API_ENDPOINTS.CONTACT.CREATE, { data: contactData });
  },

  update: (contactId, updates) => {
    return apiClient.post(API_ENDPOINTS.CONTACT.UPDATE, {
      data: {
        contactId,
        updates,
      },
    });
  },

  delete: (contactId) => {
    return apiClient.post(API_ENDPOINTS.CONTACT.DELETE, { data: { contactId } });
  },
};
