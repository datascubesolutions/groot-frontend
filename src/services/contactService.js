import { apiClient } from "@/lib/api/client";
import { API_ENDPOINTS } from "@/lib/api/endpoints";

export const contactService = {
  getAll: (pagination = { limit: 100 }) => {
    return apiClient.post(API_ENDPOINTS.CONTACT.LIST, { data: { pagination } });
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
