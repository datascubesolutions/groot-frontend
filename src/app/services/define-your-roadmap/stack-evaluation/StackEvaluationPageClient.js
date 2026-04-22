// @ts-nocheck
"use client";

import { LazyMotion, domAnimation } from "framer-motion";
import ComparisonMatrix from "./components/ComparisonMatrix";
import CTASection from "./components/CTASection";
import HeroSection from "./components/HeroSection";
import MethodologyPanel from "./components/MethodologyPanel";
import ProblemSection from "./components/ProblemSection";

export default function StackEvaluationPageClient() {
  return (
    <LazyMotion features={domAnimation} strict>
      <main className="relative min-h-screen overflow-x-hidden bg-background pt-20 selection:bg-cyan-500/30">
        <HeroSection />
        <ProblemSection />
        <ComparisonMatrix />
        <MethodologyPanel />
        <CTASection />
      </main>
    </LazyMotion>
  );
}
