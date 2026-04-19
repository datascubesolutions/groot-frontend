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
      <main className="pt-20 min-h-screen relative bg-background overflow-x-hidden selection:bg-cyan-500/30">
        <HeroSection />
        <ProblemSection />
        <ComparisonMatrix />
        <MethodologyPanel />
        <CTASection />
      </main>
    </LazyMotion>
  );
}
