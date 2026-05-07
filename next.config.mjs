/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  // Smaller source maps in production reduce build output size (default is false).
  productionBrowserSourceMaps: false,

  async redirects() {
    return [
      {
        source: "/work",
        destination: "/industries#our-work",
        permanent: true,
      },
    ];
  },

  // Performance optimizations
  compress: true,
  poweredByHeader: false,

  // Image optimization
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },

  // Experimental features
  experimental: {
    optimizePackageImports: [
      "@/components",
      "@/lib",
      "framer-motion",
      "recharts",
      "lucide-react",
    ],
    // Enable optimized route prefetching
    optimizeCss: true,
  },

  // Optimize route prefetching
  // Next.js automatically prefetches routes in viewport, but we ensure it's enabled
  // File-based routing is already in use via App Router

  // External packages (optional dependencies)
  serverExternalPackages: [],

  // Headers for security
  async headers() {
    const isProduction = process.env.NODE_ENV === "production";

    const cspHeader = `
      default-src 'self';
      script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com;
      style-src 'self' 'unsafe-inline';
      img-src 'self' blob: data: https://images.unsplash.com https://res.cloudinary.com https://www.google-analytics.com;
      font-src 'self' data:;
      connect-src 'self' https://region1.google-analytics.com https://www.google-analytics.com https://us-central1-datascube-2b74e.cloudfunctions.net wss:;
      object-src 'none';
      base-uri 'self';
      form-action 'self';
      frame-ancestors 'none';
      upgrade-insecure-requests;
    `
      .replace(/\s{2,}/g, " ")
      .trim();

    const baseHeaders = [
      {
        key: "Content-Security-Policy",
        value: cspHeader,
      },
      {
        key: "X-Content-Type-Options",
        value: "nosniff",
      },
      {
        key: "X-XSS-Protection",
        value: "1; mode=block",
      },
    ];

    const productionHeaders = [
      ...baseHeaders,
      {
        key: "X-DNS-Prefetch-Control",
        value: "on",
      },
      {
        key: "X-Frame-Options",
        value: "SAMEORIGIN",
      },
      {
        key: "Referrer-Policy",
        value: "origin-when-cross-origin",
      },
    ];

    const developmentHeaders = [
      ...baseHeaders,
      {
        key: "X-Frame-Options",
        value: "DENY",
      },
    ];

    return [
      {
        source: "/:path*",
        headers: isProduction ? productionHeaders : developmentHeaders,
      },
    ];
  },
};

export default nextConfig;
