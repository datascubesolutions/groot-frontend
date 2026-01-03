/**
 * Application Constants
 * 
 * @fileoverview Centralized constants for type safety and maintainability
 * @module lib/constants
 */

// Routes moved to @/lib/routes for better organization
// Import from '@/lib/routes' instead

export const METADATA = {
  TITLE: {
    DEFAULT: "Groot",
    TEMPLATE: "%s | Groot",
  },
  DESCRIPTION: "Enterprise-grade solutions for modern businesses",
};

export const ANIMATION = {
  DURATION: {
    FAST: 200,
    NORMAL: 300,
    SLOW: 500,
    SLOWER: 800,
  },
  EASING: {
    EASE_OUT: "cubic-bezier(0.16, 1, 0.3, 1)",
    EASE_IN: "cubic-bezier(0.7, 0, 1, 1)",
    EASE_IN_OUT: "cubic-bezier(0.4, 0, 0.2, 1)",
  },
  THRESHOLD: {
    DEFAULT: 0.2,
    HIGH: 0.5,
    LOW: 0.1,
  },
};

export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  "2XL": 1536,
};

export const BUTTON_VARIANTS = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
  OUTLINE: "outline",
};

export const BUTTON_SIZES = {
  SM: "sm",
  MD: "md",
  LG: "lg",
};

export const CONTAINER_MAX_WIDTH = "1280px";

export const ACCESSIBILITY = {
  SKIP_TO_CONTENT: "Skip to main content",
  LOADING: "Loading",
  ERROR: "Error",
};
