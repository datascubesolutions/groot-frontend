import { HeroSkeleton } from "@/components/skeletons/HeroSkeleton";
import { SectionSkeleton } from "@/components/skeletons/SectionSkeleton";
import { generateBreadcrumbSchema, generateRouteMetadata } from "@/lib/seo";
import { lazy, Suspense } from "react";

// Lazy load sections for better performance
const HeroSection = lazy(() => import("@/components/sections/HeroSection"));
const ClientLogosSection = lazy(() => import("@/components/sections/ClientLogosSection"));
const VideoScrollSection = lazy(() => import("@/components/sections/VideoScrollSection"));
const ServicesSection = lazy(() =>
  import("@/components/sections/ServicesSection")
);
const PainPointsSection = lazy(() =>
  import("@/components/sections/PainPointsSection").then((mod) => ({
    default: mod.PainPointsSection,
  }))
);
const ProcessTimelineSection = lazy(() =>
  import("@/components/sections/ProcessTimelineSection").then((mod) => ({
    default: mod.ProcessTimelineSection,
  }))
);
const PlatformPreviewSection = lazy(() =>
  import("@/components/sections/PlatformPreviewSection").then((mod) => ({
    default: mod.PlatformPreviewSection,
  }))
);
const AboutSection = lazy(() => import("@/components/sections/AboutSection"));
const DataReadinessSection = lazy(() =>
  import("@/components/sections/DataReadinessSection").then((mod) => ({
    default: mod.DataReadinessSection,
  }))
);


// Elite Demo Sections - BACKUP AT /elite-demo
// const TestimonialsSection = lazy(() => import("@/components/sections/elite/TestimonialsSection"));
// const CultureSection = lazy(() => import("@/components/sections/elite/CultureSection"));
// const EnterpriseHeroSection = lazy(() => import("@/components/sections/elite/EnterpriseHeroSection"));

export const metadata = {
  ...generateRouteMetadata("home"),
};

export default function HomePage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", path: "/" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="min-h-screen bg-background">
        <Suspense fallback={<HeroSkeleton />}>
          <HeroSection />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <VideoScrollSection />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <ClientLogosSection />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <ServicesSection />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <ProcessTimelineSection />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <PainPointsSection />
        </Suspense>
        {/*
      <div className="theme-elite">
        <Suspense fallback={<SectionSkeleton />}>
          <EnterpriseHeroSection />
        </Suspense>
      </div>
      <Suspense fallback={<SectionSkeleton />}>
        <PlatformPreviewSection />
      </Suspense>
      */}
      <Suspense fallback={<SectionSkeleton />}>
        <DataReadinessSection />
      </Suspense>
      {/*
      <div className="theme-elite">
        <Suspense fallback={<SectionSkeleton />}>
          <CultureSection />
        </Suspense>
      </div>
      */}
      </div>
    </>
  );
}
