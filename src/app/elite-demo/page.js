import { SectionSkeleton } from "@/components/skeletons/SectionSkeleton";
import { lazy, Suspense } from "react";

// Lazy load sections
const EnterpriseHeroSection = lazy(() => import("@/components/sections/elite/EnterpriseHeroSection"));
const PlatformPreviewSection = lazy(() =>
  import("@/components/sections/PlatformPreviewSection").then((mod) => ({
    default: mod.PlatformPreviewSection,
  }))
);
const DataReadinessSection = lazy(() =>
  import("@/components/sections/DataReadinessSection").then((mod) => ({
    default: mod.DataReadinessSection,
  }))
);
const CultureSection = lazy(() => import("@/components/sections/elite/CultureSection"));

export const metadata = {
  title: "Groot Analytics - Elite Demo",
  description: "Elite demo sections backup.",
};

export default function EliteDemoPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="theme-elite">
        <Suspense fallback={<SectionSkeleton />}>
          <EnterpriseHeroSection />
        </Suspense>
      </div>

      <Suspense fallback={<SectionSkeleton />}>
        <PlatformPreviewSection />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <DataReadinessSection />
      </Suspense>

      <div className="theme-elite">
        <Suspense fallback={<SectionSkeleton />}>
          <CultureSection />
        </Suspense>
      </div>
    </div>
  );
}
