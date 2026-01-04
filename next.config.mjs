/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  
  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  
  // Image optimization
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // Experimental features
  experimental: {
    optimizePackageImports: ["@/components", "@/lib"],
  },
  
  // External packages (optional dependencies)
  // Mark Sentry as external so it doesn't try to bundle it
  serverExternalPackages: ["@sentry/nextjs"],
  
  // Headers for security
  async headers() {
    const isProduction = process.env.NODE_ENV === "production";
    
    const baseHeaders = [
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
