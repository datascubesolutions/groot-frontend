// @ts-nocheck
import ErrorBoundary from "@/components/errors/ErrorBoundary";
import { Navbar } from "@/components/layout";
import Footer from "@/components/sections/Footer";
import {
  OrganizationSchema,
  WebsiteSchema,
  SiteNavigationSchema,
} from "@/components/seo/StructuredData";
import { siteConfig } from "@/config/site.config";
import { METADATA } from "@/lib/constants";
import { env } from "@/lib/env";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Toaster } from "sonner";
import "./accessibility.css";
import "./globals.css";

// Variable font: one network request instead of multiple static weight files.
const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "sans-serif"],
  adjustFontFallback: true,
});

export const metadata = {
  title: {
    default: METADATA.TITLE,
    template: `%s | ${METADATA.TITLE}`,
  },
  description: METADATA.DESCRIPTION,
  applicationName: siteConfig.name,
  category: "technology",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  keywords: [
    "data engineering",
    "AI solutions",
    "data analytics",
    "machine learning",
    "data platform",
    "business intelligence",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || siteConfig.url),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_SITE_URL || siteConfig.url,
    siteName: siteConfig.name,
    title: METADATA.TITLE,
    description: METADATA.DESCRIPTION,
    images: [
      {
        url: siteConfig.assets.ogImagePath,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: METADATA.TITLE,
    description: METADATA.DESCRIPTION,
    images: [siteConfig.assets.ogImagePath],
    creator: "@grootanalytics",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  appleWebApp: {
    title: siteConfig.name,
    statusBarStyle: "black-translucent",
    capable: true,
  },
  robots: {
    index: env.IS_PRODUCTION,
    follow: env.IS_PRODUCTION,
    googleBot: {
      index: env.IS_PRODUCTION,
      follow: env.IS_PRODUCTION,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

import { PublicLayoutWrapper } from "@/components/layout/PublicLayoutWrapper";
import { CookieConsent } from "@/components/ui";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import ScrollTracker from "@/components/analytics/ScrollTracker";
import { Suspense } from "react";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <OrganizationSchema />
        <WebsiteSchema />
        <SiteNavigationSchema />
      </head>
      <body
        className={`${plusJakartaSans.variable} antialiased`}
        suppressHydrationWarning
      >
        <Suspense fallback={null}>
          <GoogleAnalytics
            GA_MEASUREMENT_ID={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}
          />
        </Suspense>
        <ScrollTracker />
        <ErrorBoundary>
          <div className="flex min-h-screen flex-col">
            <PublicLayoutWrapper>
              <Navbar />
            </PublicLayoutWrapper>

            <main className="flex-1">{children}</main>

            <PublicLayoutWrapper>
              <Footer />
            </PublicLayoutWrapper>
          </div>
        </ErrorBoundary>
        <Toaster position="top-right" richColors theme="dark" />
        <CookieConsent />
      </body>
    </html>
  );
}
