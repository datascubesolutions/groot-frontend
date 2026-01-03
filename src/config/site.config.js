/**
 * Site Configuration
 * Navigation and site-wide settings
 */

import { METADATA } from "@/lib/constants";
import { env } from "@/lib/env";

export const siteConfig = {
  name: "Groot",
  description: METADATA.DESCRIPTION,
  url: env.NEXT_PUBLIC_SITE_URL,
  metadata: {
    title: METADATA.TITLE,
    description: METADATA.DESCRIPTION,
  },
  navigation: [
    { name: "Home", href: "/" },
  ],
};
