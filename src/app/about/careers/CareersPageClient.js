"use client";

import { LazyMotion, domAnimation } from "framer-motion";
import BenefitsSection from "./components/BenefitsSection";
import CTASection from "./components/CTASection";
import CultureGrid from "./components/CultureGrid";
import HeroSection from "./components/HeroSection";
import OpenPositions from "./components/OpenPositions";

export default function CareersPageClient() {
  return (
    <LazyMotion features={domAnimation} strict>
      <main className="min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary relative overflow-hidden font-sans">
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
        <HeroSection />
        <CultureGrid />
        <OpenPositions />
        <BenefitsSection />
        <CTASection />
      </main>
    </LazyMotion>
  );
}
