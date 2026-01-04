/**
 * Route Configuration
 * 
 * Centralized route definitions for type safety and maintainability.
 * This file serves as the single source of truth for all application routes.
 * 
 * @example
 * import { ROUTES } from '@/lib/routes';
 * <Link href={ROUTES.PUBLIC.HOME}>Home</Link>
 */

export const ROUTES = {
  // Public routes
  PUBLIC: {
    HOME: "/",
    ABOUT: "/about",
    SERVICES: "/services",
    CONTACT: "/contact",
    PRICING: "/pricing",
    BLOG: "/blog",
  },

  // Application routes (authenticated)
  APP: {
    DASHBOARD: "/app/dashboard",
    PROFILE: "/app/profile",
    SETTINGS: "/app/settings",
    PROJECTS: "/app/projects",
    ANALYTICS: "/app/analytics",
  },

  // Admin routes
  ADMIN: {
    DASHBOARD: "/admin/dashboard",
    USERS: "/admin/users",
    REPORTS: "/admin/reports",
    SETTINGS: "/admin/settings",
  },

  // Auth routes
  AUTH: {
    LOGIN: "/auth/login",
    REGISTER: "/auth/register",
    FORGOT_PASSWORD: "/auth/forgot-password",
    RESET_PASSWORD: "/auth/reset-password",
  },

  // Utility routes
  UTILITY: {
    NOT_FOUND: "/404",
    ERROR: "/500",
    MAINTENANCE: "/maintenance",
  },
};

/**
 * Get route by key path
 * @param {string} path - Dot-separated path (e.g., 'PUBLIC.HOME')
 * @returns {string} Route path
 */
export function getRoute(path) {
  const keys = path.split(".");
  let value = ROUTES;

  for (const key of keys) {
    value = value?.[key];
    if (!value) {
      console.warn(`Route not found: ${path}`);
      return "/";
    }
  }

  return value;
}

/**
 * Check if route is active
 * @param {string} currentPath - Current pathname
 * @param {string} routePath - Route to check
 * @returns {boolean}
 */
export function isActiveRoute(currentPath, routePath) {
  if (currentPath === routePath) return true;
  if (routePath !== "/" && currentPath.startsWith(routePath)) return true;
  return false;
}

// Route Metadata for SEO
export {
  ROUTE_METADATA,
  getRouteMetadata,
  getIndexableRoutes,
  getRoutesByPriority,
} from './metadata';
