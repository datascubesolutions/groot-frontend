import CultureSection from "@/components/sections/elite/CultureSection";
import EliteCTASection from "@/components/sections/elite/EliteCTASection";
import EnterpriseHeroSection from "@/components/sections/elite/EnterpriseHeroSection";
import TestimonialsSection from "@/components/sections/elite/TestimonialsSection";

export const metadata = {
  title: "Elite UI Demo | Groot Analytics",
  description: "Showcasing the new enterprise design system.",
};

export default function EliteDemoPage() {
  return (
    <main className="min-h-screen bg-background theme-elite">
      <EnterpriseHeroSection />
      <TestimonialsSection />
      <CultureSection />
      <EliteCTASection />
    </main>
  );
}
