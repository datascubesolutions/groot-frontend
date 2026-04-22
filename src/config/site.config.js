// @ts-nocheck
/**
 * Central site branding and asset paths.
 * Set NEXT_PUBLIC_SITE_* in production so titles, OG, manifest, and JSON-LD
 * match your live domain after DNS.
 */
function trimEnv(value) {
  return typeof value === "string" ? value.trim() : "";
}

const displayName =
  trimEnv(process.env.NEXT_PUBLIC_SITE_DISPLAY_NAME) || "Groot Analytics";

const alternateNames = trimEnv(process.env.NEXT_PUBLIC_SITE_ALTERNATE_NAMES || "")
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean);

export const siteConfig = {
  name: displayName,
  /** PWA / manifest short name (keep short for home-screen labels). */
  shortName:
    trimEnv(process.env.NEXT_PUBLIC_SITE_SHORT_NAME) ||
    displayName.split(/\s+/)[0] ||
    displayName,
  description:
    trimEnv(process.env.NEXT_PUBLIC_SITE_DESCRIPTION) ||
    "Data Engineering, AI & Analytics Solutions",
  longDescription:
    trimEnv(process.env.NEXT_PUBLIC_SITE_TAGLINE) ||
    `${displayName} transforms complex, scattered data into intelligent decisions. Modern data platforms, advanced analytics, and AI-powered automation.`,
  url:
    trimEnv(process.env.NEXT_PUBLIC_SITE_URL) || "https://grootanalytics.com",
  /** Extra Organization / WebSite names for structured data (comma-separated in env). */
  alternateNames,
  /** Paths are under /public — keep these files present or crawlers get 404s. */
  assets: {
    logoPath: "/logo.png",
    ogImagePath: "/og-image.png",
  },
};
