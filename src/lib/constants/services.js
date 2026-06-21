// @ts-nocheck

import { BarChart, Brain, Database, TrendingUp, Users } from "lucide-react";

export const SERVICE_CATEGORIES = [
  {
    title: "Define Your Roadmap",
    slug: "define-your-roadmap",
    href: "/services/define-your-roadmap",
    icon: TrendingUp,
    description: "Assessments, Data Strategy, and Platform Evaluation",
    subServices: [
      { title: "Maturity Assessment", slug: "maturity-assessment" },
      { title: "Enterprise Data Strategy", slug: "enterprise-data-strategy" },
      // { title: "Stack Evaluation", slug: "stack-evaluation" },
    ],
  },
  {
    title: "Build Your Foundation",
    slug: "build-your-foundation",
    href: "/services/build-your-foundation",
    icon: Database,
    description: "Lakehouse Build, Data Modernization, and Pipelines",
    subServices: [
      { title: "Data Modernization", slug: "data-modernization" },
      { title: "Foundation Build", slug: "foundation-build" },
      { title: "Data Integration", slug: "data-integration" },
    ],
  },
  {
    title: "Decision Intelligence",
    slug: "decision-intelligence",
    href: "/services/decision-intelligence",
    icon: BarChart,
    description: "Executive Dashboards, Semantic Modeling & Governance",
    subServices: [
      { title: "Executive Analytics", slug: "executive-analytics" },
      { title: "Semantic Modeling", slug: "semantic-modeling" },
      { title: "Self-Service Enablement", slug: "self-service-enablement" },
    ],
  },
  {
    title: "AI That Ships",
    slug: "ai-that-ships",
    href: "/services/ai-that-ships",
    icon: Brain,
    description: "Production-ready Copilot and AI solutions.",
    subServices: [],
  },
  {
    title: "Scale Your Team",
    slug: "scale-your-team",
    href: "/services/scale-your-team",
    icon: Users,
    description: "Extended analytics capacity.",
    subServices: [],
  },
];

/** Canonical URL when visiting `/services` (first category’s first offering). */
export const SERVICES_ENTRY_HREF = (() => {
  const cat = SERVICE_CATEGORIES[0];
  const first = cat.subServices[0];
  return first ? `${cat.href}/${first.slug}` : cat.href;
})();
