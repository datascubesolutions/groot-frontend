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

// Elite Demo Sections
const TestimonialsSection = lazy(() => import("@/components/sections/elite/TestimonialsSection"));
const CultureSection = lazy(() => import("@/components/sections/elite/CultureSection"));

export const metadata = {
  title: "Groot Analytics - Microsoft Azure Data & AI Solutions",
  description:
    "Specializing in Microsoft Azure, Fabric, Databricks, and AI Foundry. Turning messy data into intelligent decisions with modern cloud technologies.",
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
      <div className="theme-elite">
        <Suspense fallback={<SectionSkeleton />}>
          <TestimonialsSection />
        </Suspense>
      </div>
      <Suspense fallback={<SectionSkeleton />}>
        <PlatformPreviewSection />
      </Suspense>
      <div className="theme-elite">
        <Suspense fallback={<SectionSkeleton />}>
          <CultureSection />
        </Suspense>
      </div>
      <Suspense fallback={<SectionSkeleton />}>
        <AboutSection />
      </Suspense>
      <Suspense fallback={<SectionSkeleton className="min-h-[300px]" />}>
        <CTASection />
      </Suspense>
    </div>
  );
}
