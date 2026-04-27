import { siteConfig } from "@/config/site.config";

export default function manifest() {
  return {
    name: siteConfig.name,
    short_name: siteConfig.shortName,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#1db954",
    icons: [
      {
        src: "/svg/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
      {
        src: siteConfig.assets.logoPath,
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/apple-touch-icon-v2.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
