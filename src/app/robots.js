// @ts-nocheck
import { siteConfig } from "@/config/site.config";
import { env } from "@/lib/env";

export default function robots() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || siteConfig.url;

  if (!env.IS_PRODUCTION) {
    return {
      rules: [
        {
          userAgent: "*",
          disallow: "/",
        },
      ],
    };
  }

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/", "/auth/", "/print/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
