/**
 * Route Groups Configuration
 * 
 * Defines route groups for organizing pages in the app directory.
 * Route groups use parentheses in folder names and don't affect URL structure.
 * 
 * @example
 * (marketing) - Public marketing pages
 * (app) - Authenticated application pages
 * (admin) - Admin-only pages
 */

export const ROUTE_GROUPS = {
  MARKETING: "(marketing)",
  APP: "(app)",
  ADMIN: "(admin)",
  AUTH: "(auth)",
};

/**
 * Route metadata for navigation and breadcrumbs
 */
export const ROUTE_METADATA = {
  "/": {
    title: "Home",
    group: "marketing",
    requiresAuth: false,
  },
  "/about": {
    title: "About",
    group: "marketing",
    requiresAuth: false,
  },
  "/services": {
    title: "Services",
    group: "marketing",
    requiresAuth: false,
  },
  "/app/dashboard": {
    title: "Dashboard",
    group: "app",
    requiresAuth: true,
  },
  "/admin/dashboard": {
    title: "Admin Dashboard",
    group: "admin",
    requiresAuth: true,
    requiresAdmin: true,
  },
};
