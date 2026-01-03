/**
 * Home Page
 * 
 * Main landing page - accessible at /
 */

import HeroSection from "@/pages/components/HeroSection";

export const metadata = {
  title: "Home",
  description: "Enterprise-grade solutions for modern businesses",
};

export default function HomePage() {
  return (
    <main className="w-full relative">
      <HeroSection />
    </main>
  );
}
