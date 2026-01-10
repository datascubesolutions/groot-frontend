import { HeroSkeleton } from "@/components/skeletons/HeroSkeleton";
import { SectionSkeleton } from "@/components/skeletons/SectionSkeleton";
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
      <Suspense fallback={<HeroSkeleton />}>
        <HeroSection />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <ServicesSection />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <ProcessTimelineSection />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <PlatformPreviewSection />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <AboutSection />
      </Suspense>
      <Suspense fallback={<SectionSkeleton className="min-h-[300px]" />}>
        <CTASection />
      </Suspense>
    </div>
  );
}
