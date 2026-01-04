import { lazy, Suspense } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Loading } from "@/components/ui/Loading";

// Lazy load sections for better performance
const HeroSection = lazy(() => import("@/components/sections/HeroSection"));
const ServicesSection = lazy(() =>
  import("@/components/sections/ServicesSection")
);
const AboutSection = lazy(() => import("@/components/sections/AboutSection"));
const CTASection = lazy(() => import("@/components/sections/CTASection"));
const Footer = lazy(() => import("@/components/sections/Footer"));

export const metadata = {
  title: "Groot Analytics - Data Engineering & AI Solutions",
  description:
    "Turning messy data into intelligent decisions. Modern data platforms, advanced analytics, and AI-powered solutions.",
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Suspense fallback={<Loading className="min-h-screen" size="lg" />}>
          <HeroSection />
        </Suspense>
        <Suspense fallback={<Loading className="min-h-[400px]" />}>
          <ServicesSection />
        </Suspense>
        <Suspense fallback={<Loading className="min-h-[400px]" />}>
          <AboutSection />
        </Suspense>
        <Suspense fallback={<Loading className="min-h-[300px]" />}>
          <CTASection />
        </Suspense>
      </main>
      <Suspense fallback={<Loading className="min-h-[200px]" />}>
        <Footer />
      </Suspense>
    </div>
  );
}
