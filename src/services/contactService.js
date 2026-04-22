// @ts-nocheck
/**
 * Contact Service
 * Handles all contact-related API calls.
 * @module services/contactService
 */

import { authPost } from "@/lib/api/auth";
import { API_ENDPOINTS } from "@/lib/api/endpoints";

export const contactService = {
  /** List all contacts (admin-only). */
  getAll: (params = { page: 1, limit: 10 }) =>
    authPost(API_ENDPOINTS.CONTACT.LIST, { data: params }),

  /** Get a single contact by ID (admin-only). */
  getById: (contactId) =>
    authPost(API_ENDPOINTS.CONTACT.GET, { data: { contactId } }),

  /**
   * Create a new contact.
   * Public endpoint — no auth required (website contact form).
   * @param {object} contactData
   */
  create: async (contactData) => {
    const response = await fetch(API_ENDPOINTS.CONTACT.CREATE, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data: contactData }),
    });
    const data = await response.json();
    if (!response.ok) return Promise.reject(data);
    return data;
  },

  /** Update a contact's details (admin-only). */
  update: (contactId, updates) =>
    authPost(API_ENDPOINTS.CONTACT.UPDATE, { data: { contactId, updates } }),

  /** Delete a contact (admin-only). */
  delete: (contactId) =>
    authPost(API_ENDPOINTS.CONTACT.DELETE, { data: { contactId } }),
};
