// @ts-nocheck
import { generateBreadcrumbSchema, generateRouteMetadata } from "@/lib/seo";

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
        <HeroSection />
        <VideoScrollSection />
        <ClientLogosSection />
        <ServicesSection />
        <ProcessTimelineSection />
        <PainPointsSection />
        {/*
      <div className="theme-elite">
        <EnterpriseHeroSection />
      </div>
      <PlatformPreviewSection />
      */}
        <DataReadinessSection />
        {/*
      <div className="theme-elite">
        <CultureSection />
      </div>
      */}
      </div>
    </>
  );
}
