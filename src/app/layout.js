import ErrorBoundary from "@/components/errors/ErrorBoundary";
import { Navbar } from "@/components/layout";
import { METADATA } from "@/lib/constants";
import { Plus_Jakarta_Sans } from "next/font/google";
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
      <body className={`${plusJakartaSans.variable} antialiased min-h-screen flex flex-col`}>
        <ErrorBoundary>
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
        </ErrorBoundary>
      </body>
    </html>
  );
}
