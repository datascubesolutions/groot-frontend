// @ts-nocheck
import { generateBreadcrumbSchema, generateRouteMetadata } from "@/lib/seo";
import StackEvaluationPageClient from "./StackEvaluationPageClient";

export const metadata = {
 ...generateRouteMetadata("stackEvaluation"),
};

export default function StackEvaluationPage() {
 const breadcrumbSchema = generateBreadcrumbSchema([
 { name: "Home", path: "/" },
 { name: "Services", path: "/services" },
 { name: "Define Your Roadmap", path: "/services/define-your-roadmap" },
 {
 name: "Stack Evaluation",
 path: "/services/define-your-roadmap/stack-evaluation",
 },
 ]);

 return (
 <>
 <script
 type="application/ld+json"
 dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
 />
 <StackEvaluationPageClient />
 </>
 );
}
