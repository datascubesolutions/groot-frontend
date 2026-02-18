/**
 * Shared auth utilities for API services.
 * Handles token retrieval, authenticated fetch helpers, and 401 auto-logout.
 * @module lib/api/auth
 */

const AUTH_TOKEN_KEY = "authToken";

/**
 * Returns the stored auth token from localStorage.
 * Safe to call in SSR contexts (returns empty string on server).
 * @returns {string}
 */
export function getAuthToken() {
  return localStorage.getItem(AUTH_TOKEN_KEY) || "";
}

/**
 * Clears the session and redirects to login.
 * Called automatically on 401 responses.
 */
function handleUnauthorized() {
  localStorage.removeItem(AUTH_TOKEN_KEY);
  localStorage.removeItem("authUser");
  localStorage.removeItem("authResponse");
  window.location.replace("/auth/login");
}

/**
 * Parses a fetch Response, rejects on error, and auto-logouts on 401.
 * @param {Response} response
 * @returns {Promise<unknown>}
 */
async function parseResponse(response) {
  const data = await response.json();
  if (response.status === 401) {
    handleUnauthorized();
    return Promise.reject(data);
  }
  if (!response.ok) return Promise.reject(data);
  return data;
}

/**
 * Makes an authenticated POST request with a JSON body.
 * Automatically attaches the Bearer token and handles 401 auto-logout.
 * @param {string} url
 * @param {unknown} body
 * @returns {Promise<unknown>}
 */
export async function authPost(url, body) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getAuthToken()}`,
    },
    body: JSON.stringify(body),
  });
  return parseResponse(response);
}

/**
 * Makes an authenticated POST request with a multipart FormData body.
 * Automatically attaches the Bearer token and handles 401 auto-logout.
 * NOTE: Do NOT set Content-Type — the browser sets it with the boundary.
 * @param {string} url
 * @param {FormData} formData
 * @returns {Promise<unknown>}
 */
export async function authFormPost(url, formData) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${getAuthToken()}`,
    },
    body: formData,
  });
  return parseResponse(response);
}
