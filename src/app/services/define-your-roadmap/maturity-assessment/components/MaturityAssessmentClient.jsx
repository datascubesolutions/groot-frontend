"use client";

import HeroSection from "./HeroSection";
import ProblemSection from "./ProblemSection";
import DeliverablesSection from "./DeliverablesSection";
import MethodologySection from "./MethodologySection";
import CaseStudySection from "./CaseStudySection";
import FAQSection from "./FAQSection";
import NextStepsSection from "./NextStepsSection";

export default function MaturityAssessmentClient() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background pt-20 selection:bg-forest/30">
      <HeroSection />
      <ProblemSection />
      <DeliverablesSection />
      <MethodologySection />
      <CaseStudySection />
      <FAQSection />
      <NextStepsSection />
    </main>
  );
}
