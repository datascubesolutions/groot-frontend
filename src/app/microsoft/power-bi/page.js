// @ts-nocheck
import { BenefitsSection } from "@/components/sections/microsoft/BenefitsSection";
import { CapabilitiesSection } from "@/components/sections/microsoft/CapabilitiesSection";
import { DeliveryTimeline } from "@/components/sections/microsoft/DeliveryTimeline";
import { ExampleSection } from "@/components/sections/microsoft/ExampleSection";
import { FAQSection } from "@/components/sections/microsoft/FAQSection";
import { MicrosoftCTA } from "@/components/sections/microsoft/MicrosoftCTA";
import { PowerBIHero } from "@/components/sections/microsoft/PowerBIHero";
import { ProblemSection } from "@/components/sections/microsoft/ProblemSection";
import {
  Filter,
  Link,
  Lock,
  MonitorSmartphone,
  Sparkles,
  Target,
} from "lucide-react";

export const metadata = {
  title: "Power BI Consulting & Dashboard Development | Groot Analytics",
  description:
    "Transform data into decisions with Power BI. Semantic models, executive dashboards, self-service enablement. 100+ dashboards delivered.",
  keywords:
    "Power BI consulting, Power BI semantic model, Power BI dashboard development, self-service analytics, Power BI implementation",
};

export default function PowerBIPage() {
  const problems = [
    {
      title: "The Endless Backlog",
      description:
        '"Can you add customer segment to this report?" Sure. That request joins the queue behind 47 others. Two weeks later, the requester has moved on to a different question. Meanwhile, they built their own spreadsheet because they couldn\'t wait.',
    },
    {
      title: "Fifty Dashboards, Zero Accountability",
      description:
        'Everyone has "their" dashboard. Marketing\'s version. Sales\'s version. The CFO\'s "real" numbers. When leadership meets, the first ten minutes are always "let me explain where my data comes from." Nobody knows which dashboard is right because nobody owns the answer.',
    },
    {
      title: "Beautiful Charts, Ugly Data",
      description:
        "The visualizations look professional. But underneath? Direct connections to production databases that time out. Imported data that's three days stale. Measures that calculate differently depending on which filter you apply. The dashboard is a facade over chaos.",
    },
  ];

  const benefits = [
    {
      title: "Connect Once, Use Everywhere",
      description:
        "Power BI connects to 200+ data sources. Cloud databases, on-prem systems, REST APIs, flat files. Bring it all into a semantic model. Build connections once — then every report uses the same governed source.",
      icon: <Link className="h-7 w-7" />,
    },
    {
      title: "Self-Service with Guardrails",
      description:
        'Analysts build their own reports without waiting for IT. But they build on certified semantic models with defined measures and relationships. Freedom to explore, boundaries on what "revenue" means.',
      icon: <Lock className="h-7 w-7" />,
    },
    {
      title: "Lives Where Your Team Works",
      description:
        "Embed dashboards in Teams channels. Export to PowerPoint for board meetings. Analyze in Excel for the CFO who will never stop using spreadsheets. Insights in the tools people already open every day.",
      icon: <MonitorSmartphone className="h-7 w-7" />,
    },
    {
      title: "Measures That Mean Something",
      description:
        'A semantic model defines "revenue" once. Every report calculates it the same way. No more "my dashboard shows $12M, yours shows $11.7M." One truth, documented and owned.',
      icon: <Target className="h-7 w-7" />,
    },
    {
      title: "AI That's Actually Useful",
      description:
        "Copilot writes DAX formulas, explains measures, and suggests visualizations. Smart narratives summarize charts in plain language. Less time building, more time understanding.",
      icon: <Sparkles className="h-7 w-7" />,
    },
    {
      title: "Enterprise Controls That Don't Slow You Down",
      description:
        "Workspaces organize content by team. Deployment pipelines promote reports from dev to test to production. Row-level security controls who sees what. Endorsement labels mark what's certified. Governance that enables instead of blocks.",
      icon: <Filter className="h-7 w-7" />,
    },
  ];

  const capabilities = [
    {
      title: "Semantic Model Design",
      description:
        "We design the data model that encodes your business logic. Star schemas, proper relationships, calculated measures, display folders. The foundation analysts build on — not raw tables they have to figure out.",
    },
    {
      title: "Executive Dashboards",
      description:
        "Clean layouts for decision-makers. Relevant KPIs without clutter. Drill-through for the details when needed. Mobile views for executives who check numbers from the airport. Designed for decisions, not decoration.",
    },
    {
      title: "Migration and Optimization",
      description:
        'We migrate legacy reports from SSRS, Crystal Reports, or "that Excel file nobody can explain." We fix slow reports — inefficient DAX, bloated models, refresh timeouts. Existing investments rescued.',
    },
    {
      title: "Row-Level Security",
      description:
        "Sales reps see their territory. Managers see their team. Executives see everything. One report, appropriate access for everyone. No separate versions to maintain.",
    },
    {
      title: "Deployment Pipelines",
      description:
        "Changes move through dev → test → production. Validated before end users see them. Version control. Rollback capability. CI/CD thinking for analytics.",
    },
    {
      title: "Analyst Training",
      description:
        "We train your people to build reports confidently. DAX fundamentals. Visualization best practices. How to use the semantic models we built. Self-service that actually works.",
    },
  ];

  const timeline = [
    {
      phase: "Week 1",
      title: "Assessment",
      description:
        "We inventory existing reports and data sources. We identify what's working and what's trusted. We define success metrics.",
      deliverable: "Prioritized dashboard roadmap",
    },
    {
      phase: "Week 2-3",
      title: "Data Foundation",
      description:
        "We connect to source systems. We build or refine the semantic model. We configure refresh schedules and row-level security.",
      deliverable: "Certified semantic model ready for reporting",
    },
    {
      phase: "Week 4-6",
      title: "Dashboard Development",
      description:
        "We design and build priority dashboards. We implement interactivity. We optimize for performance and mobile.",
      deliverable: "Dashboards deployed to production",
    },
    {
      phase: "Week 7-8",
      title: "Enablement",
      description:
        "We train analysts on self-service. We document the semantic model. We set up deployment pipelines. We establish governance.",
      deliverable: "Analysts building their own reports",
    },
  ];

  const faqs = [
    {
      question: "We have Power BI licenses already. Why do we need help?",
      answer:
        "Most organizations have licenses but haven't built the foundation. Without a proper semantic model, governance, and training, Power BI becomes another collection of ungoverned files — just with better visualizations. We build the foundation that makes self-service work.",
    },
    {
      question: "Pro vs. Premium vs. Fabric — which do we need?",
      answer:
        "Pro is per-user licensing for creation and sharing. Premium is dedicated capacity for larger deployments. Fabric includes Power BI plus additional workloads. The right answer depends on your scale, sharing requirements, and whether you need the data platform capabilities. We help you choose.",
    },
    {
      question: "Can Power BI handle large datasets?",
      answer:
        "Yes. Billions of rows with proper design — incremental refresh, aggregations, efficient DAX. When Power BI feels slow, it's usually model design, not platform limits. We optimize for scale.",
    },
    {
      question:
        "How do we prevent everyone from creating their own dashboards?",
      answer:
        "You don't prevent creation — you establish ownership. Workspaces with clear owners. Certification labels for trusted datasets. Training on when to reuse vs. create. Governance that enables responsible self-service.",
    },
    {
      question: "What if our data sources are unusual?",
      answer:
        "Power BI connects to hundreds of sources natively. For custom systems, we build connections via REST APIs or custom connectors. If the data is accessible, we can connect it.",
    },
    {
      question: "What's the ongoing maintenance?",
      answer:
        "Semantic models need attention when source systems change. Refresh schedules need monitoring. New reports get created. We train your team to handle routine maintenance and establish a governance process for ongoing health.",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col">
      <PowerBIHero />

      <ProblemSection tagline="The reporting reality." problems={problems} />

      <BenefitsSection
        title="What Changes with Proper Power BI"
        benefits={benefits}
      />

      <CapabilitiesSection
        title="What You Actually Get"
        capabilities={capabilities}
      />

      <DeliveryTimeline
        title="Eight Weeks to Real Analytics"
        timeline={timeline}
      />

      <ExampleSection
        title="Financial Consolidation Desktop"
        context="$80M distribution company. Finance team of three. Reporting infrastructure: a network folder with 847 Excel files and a 12-year-old Access database nobody dares to touch."
        reality="Month-end meant exporting data from SAP, GP, and their WMS into Excel, then manually reconciling for five days. Different stakeholders received slightly different versions depending on when the export happened. The CFO built her own 'trust but verify' spreadsheet."
        build={[
          "Semantic model connecting SAP (financials), GP (legacy history), and WMS (inventory)",
          "Executive dashboard: revenue, margin, inventory turns, cash position",
          "Automated daily refresh replacing manual monthly exports",
          "Row-level security: regional managers see their region, CFO sees everything",
          "Self-service workspace for finance team exploration with the semantic model",
        ]}
        outcome="Monthly reporting: 5 days → same-day. CFO retired her verification spreadsheet. Finance team now spends time analyzing data instead of preparing it."
        linkText="See our approach"
        linkUrl="/services/decision-intelligence"
      />

      <FAQSection faqs={faqs} />

      <MicrosoftCTA
        title="Ready for dashboards people trust?"
        description="We'll assess your current reporting, identify quick wins, and map out what governed self-service looks like."
        primaryCta="Get a Dashboard Assessment"
        primaryCtaLink="/contact?service=powerbi-assessment"
      />
    </main>
  );
}
