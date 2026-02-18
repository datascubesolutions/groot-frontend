/**
 * Auth Service
 * Handles login, logout, and session management.
 * @module services/authService
 */

import { API_ENDPOINTS } from "@/lib/api/endpoints";

/** Keys used in localStorage for session storage. */
export const AUTH_KEYS = {
  TOKEN: "authToken",
  USER: "authUser",
  RESPONSE: "authResponse",
};

/**
 * Extracts the auth token from all known API response shapes.
 * @param {Record<string, unknown>} data
 * @returns {string | null}
 */
function extractToken(data) {
  return (
    data?.token ||
    data?.idToken ||
    data?.accessToken ||
    data?.result?.token ||
    data?.result?.idToken ||
    data?.data?.token ||
    data?.data?.idToken ||
    null
  );
}

/**
 * Extracts the user object from all known API response shapes.
 * @param {Record<string, unknown>} data
 * @returns {Record<string, unknown> | null}
 */
function extractUser(data) {
  return data?.user || data?.result?.user || data?.data?.user || null;
}

export const authService = {
  /**
   * Log in with email and password.
   * Stores the token and user in localStorage on success.
   * @param {string} email
   * @param {string} password
   * @returns {Promise<{ token: string, user: unknown }>}
   */
  login: async (email, password) => {
    const response = await fetch(API_ENDPOINTS.AUTH.LOGIN_FN, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email.trim(),
        password,
        apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      const message =
        data?.message || data?.error?.message || data?.error || "Invalid credentials";
      throw new Error(message);
    }

    const token = extractToken(data);
    if (!token) {
      console.error("[authService.login] No token in response:", data);
      throw new Error("Authentication failed: no token in response");
    }

    const user = extractUser(data);

    // Persist session
    localStorage.setItem(AUTH_KEYS.TOKEN, token);
    if (user) localStorage.setItem(AUTH_KEYS.USER, JSON.stringify(user));
    localStorage.setItem(AUTH_KEYS.RESPONSE, JSON.stringify(data));

    return { token, user };
  },

  /** Clear all session data and return to login. */
  logout: () => {
    localStorage.removeItem(AUTH_KEYS.TOKEN);
    localStorage.removeItem(AUTH_KEYS.USER);
    localStorage.removeItem(AUTH_KEYS.RESPONSE);
    window.location.replace("/auth/login");
  },

  /** Returns the stored token, or null if not authenticated. */
  getToken: () => localStorage.getItem(AUTH_KEYS.TOKEN) || null,

  /** Returns true if a token exists in localStorage. */
  isAuthenticated: () => !!localStorage.getItem(AUTH_KEYS.TOKEN),

  /** Returns the stored user object, or null. */
  getUser: () => {
    try {
      const raw = localStorage.getItem(AUTH_KEYS.USER);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  },
};
