/**
 * Environment Configuration
 * Validates and exports environment variables
 * Edge Runtime compatible
 */

export const env = {
  NODE_ENV: process.env.NODE_ENV || "development",
  NEXT_PUBLIC_SITE_URL:
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.NODE_ENV === "production"
      ? "https://grootanalytics.com"
      : "http://localhost:3000"),
  IS_PRODUCTION: process.env.NODE_ENV === "production",
  IS_DEVELOPMENT: process.env.NODE_ENV === "development",
};
