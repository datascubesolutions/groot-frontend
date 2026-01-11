import ErrorBoundary from "@/components/errors/ErrorBoundary";
import { Navbar } from "@/components/layout";
import Footer from "@/components/sections/Footer";
import { OrganizationSchema, WebsiteSchema } from "@/components/seo/StructuredData";
import { METADATA } from "@/lib/constants";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./accessibility.css";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  weight: ["300", "400", "500", "600", "700", "800"],
  fallback: ["system-ui", "sans-serif"],
});

export const metadata = {
  title: {
    default: METADATA.TITLE,
    template: `%s | ${METADATA.TITLE}`,
  },
  description: METADATA.DESCRIPTION,
  keywords: [
    "data engineering",
    "AI solutions",
    "data analytics",
    "machine learning",
    "data platform",
    "business intelligence",
  ],
  authors: [{ name: "Groot Analytics" }],
  creator: "Groot Analytics",
  publisher: "Groot Analytics",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
    siteName: "Groot Analytics",
    title: METADATA.TITLE,
    description: METADATA.DESCRIPTION,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Groot Analytics",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: METADATA.TITLE,
    description: METADATA.DESCRIPTION,
    images: ["/og-image.jpg"],
    creator: "@grootanalytics",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({ children }) {


  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <OrganizationSchema />
        <WebsiteSchema />
      </head>
      <body className={`${plusJakartaSans.variable} antialiased`} suppressHydrationWarning>
        <ErrorBoundary>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ErrorBoundary>
      </body>
    </html>
  );
}
