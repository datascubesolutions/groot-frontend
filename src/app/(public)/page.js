// @ts-nocheck
import { HeroSkeleton } from "@/components/skeletons/HeroSkeleton";
import { SectionSkeleton } from "@/components/skeletons/SectionSkeleton";
import { generateBreadcrumbSchema, generateRouteMetadata } from "@/lib/seo";
import { lazy, Suspense } from "react";

import HeroSection from "@/components/sections/HeroSection";
import ClientLogosSection from "@/components/sections/ClientLogosSection";
import VideoScrollSection from "@/components/sections/VideoScrollSection";
import ServicesSection from "@/components/sections/ServicesSection";
import { PainPointsSection } from "@/components/sections/PainPointsSection";
import { ProcessTimelineSection } from "@/components/sections/ProcessTimelineSection";
import { PlatformPreviewSection } from "@/components/sections/PlatformPreviewSection";
import AboutSection from "@/components/sections/AboutSection";
import { DataReadinessSection } from "@/components/sections/DataReadinessSection";

// Elite Demo Sections - BACKUP AT /elite-demo
// import TestimonialsSection from "@/components/sections/elite/TestimonialsSection";
// import CultureSection from "@/components/sections/elite/CultureSection";
// import EnterpriseHeroSection from "@/components/sections/elite/EnterpriseHeroSection";

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
