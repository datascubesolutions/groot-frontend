"use client";

import ClientLogosSection from "@/components/sections/ClientLogosSection";
import { DataReadinessSection } from "@/components/sections/DataReadinessSection";
import HeroSection from "@/components/sections/HeroSection";
import { PainPointsSection } from "@/components/sections/PainPointsSection";
import { ProcessTimelineSection } from "@/components/sections/ProcessTimelineSection";
import ServicesSection from "@/components/sections/ServicesSection";
import VideoScrollSection from "@/components/sections/VideoScrollSection";
import { API_ENDPOINTS } from "@/lib/api/endpoints";
import { useEffect, useState } from "react";

export default function HomePageClient() {
  const [dynamicContent, setDynamicContent] = useState(null);

  useEffect(() => {
    let cancelled = false;

    const loadHomepage = async () => {
      try {
        const response = await fetch(API_ENDPOINTS.HOMEPAGE.GET, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ data: {} }),
          cache: "no-store",
        });
        const payload = await response.json();
        const content = payload?.result?.data ?? payload?.data ?? null;
        if (!cancelled && content?.isDynamic) {
          setDynamicContent(content);
        }
      } catch {
        // Fall back to static section defaults when dynamic fetch fails.
      }
    };

    loadHomepage();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <HeroSection content={dynamicContent?.hero} />
      <VideoScrollSection content={dynamicContent?.videoScroll} />
      <ClientLogosSection content={dynamicContent?.clientLogos} />
      <ServicesSection content={dynamicContent?.services} />
      <ProcessTimelineSection content={dynamicContent?.processTimeline} />
      <PainPointsSection content={dynamicContent?.painPoints} />
      <DataReadinessSection content={dynamicContent?.dataReadiness} />
    </div>
  );
}
