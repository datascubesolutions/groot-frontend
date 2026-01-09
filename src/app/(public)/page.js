import { Loading } from "@/components/ui/Loading";
import { lazy, Suspense } from "react";

// Lazy load sections for better performance
const HeroSection = lazy(() => import("@/components/sections/HeroSection"));
const ServicesSection = lazy(() =>
  import("@/components/sections/ServicesSection")
);
const PlatformPreviewSection = lazy(() =>
  import("@/components/sections/PlatformPreviewSection").then((mod) => ({
    default: mod.PlatformPreviewSection,
  }))
);
const ProcessTimelineSection = lazy(() =>
  import("@/components/sections/ProcessTimelineSection").then((mod) => ({
    default: mod.ProcessTimelineSection,
  }))
);
const AboutSection = lazy(() => import("@/components/sections/AboutSection"));
const CTASection = lazy(() => import("@/components/sections/CTASection"));

export const metadata = {
  title: "Groot Analytics - Data Engineering & AI Solutions",
  description:
    "Turning messy data into intelligent decisions. Modern data platforms, advanced analytics, and AI-powered solutions.",
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Suspense fallback={<Loading className="min-h-screen" size="lg" />}>
        <HeroSection />
      </Suspense>
      <Suspense fallback={<Loading className="min-h-[400px]" />}>
        <ServicesSection />
      </Suspense>
      <Suspense fallback={<Loading className="min-h-[400px]" />}>
        <ProcessTimelineSection />
      </Suspense>
      <Suspense fallback={<Loading className="min-h-[400px]" />}>
        <PlatformPreviewSection />
      </Suspense>
      <Suspense fallback={<Loading className="min-h-[400px]" />}>
        <AboutSection />
      </Suspense>
      <Suspense fallback={<Loading className="min-h-[300px]" />}>
        <CTASection />
      </Suspense>
    </div>
  );
}
