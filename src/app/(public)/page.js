// @ts-nocheck
import { generateBreadcrumbSchema, generateRouteMetadata } from "@/lib/seo";
import HomePageClient from "./HomePageClient";

// Elite Demo Sections - BACKUP AT /elite-demo
// import TestimonialsSection from "@/components/sections/elite/TestimonialsSection";
// import CultureSection from "@/components/sections/elite/CultureSection";
// import EnterpriseHeroSection from "@/components/sections/elite/EnterpriseHeroSection";

export const metadata = {
  ...generateRouteMetadata("home"),
};
export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function HomePage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", path: "/" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <HomePageClient />
    </>
  );
}
