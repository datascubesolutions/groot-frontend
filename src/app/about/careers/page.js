import { generateBreadcrumbSchema, generateRouteMetadata } from "@/lib/seo";
import CareersPageClient from "./CareersPageClient";

export const metadata = {
  ...generateRouteMetadata("careers"),
};

export default function CareersPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Careers", path: "/about/careers" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <CareersPageClient />
    </>
  );
}
