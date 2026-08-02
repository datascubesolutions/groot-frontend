// @ts-nocheck
import { BenefitsSection } from "@/components/sections/microsoft/BenefitsSection";
import { CapabilitiesSection } from "@/components/sections/microsoft/CapabilitiesSection";
import { DeliveryTimeline } from "@/components/sections/microsoft/DeliveryTimeline";
import { ExampleSection } from "@/components/sections/microsoft/ExampleSection";
import { FabricHero } from "@/components/sections/microsoft/FabricHero";
import { FAQSection } from "@/components/sections/microsoft/FAQSection";
import { MicrosoftCTA } from "@/components/sections/microsoft/MicrosoftCTA";
import { ProblemSection } from "@/components/sections/microsoft/ProblemSection";
import {
  Cpu,
  Database,
  Search,
  Share2,
  ShieldCheck,
  TrendingDown,
} from "lucide-react";

export const metadata = {
  title: "Microsoft Fabric Implementation & Consulting | Groot Analytics",
  description:
    "Unify your data with Microsoft Fabric. Groot Analytics delivers Lakehouse architecture, Purview governance, and production-ready pipelines. 20+ implementations.",
  keywords:
    "Microsoft Fabric implementation, Fabric Lakehouse, OneLake, medallion architecture, Microsoft Purview, Fabric consulting",
};

export default function FabricPage() {
  const problems = [
    {
      title: "The Scavenger Hunt",
      description:
        "Your CFO asks one question: \"What's our revenue by region?\" You check the dashboard — wrong number. Finance has a different one from the ERP. Sales has a third from Salesforce. By 10 AM, you're in a meeting about the data, not the decision. Sound familiar?",
      outcome: "One source. One answer. Same meeting, different outcome.",
    },
    {
      title: "The Trust Gap",
      description:
        'Dozens of dashboards. But when the CEO presents to the board, someone always builds a fresh Excel "just to double-check." The reports exist. The trust doesn\'t. Decisions stall.',
      outcome: "Governed data. Traceable lineage. Trust built in.",
    },
    {
      title: "Governance by Hope",
      description:
        '"Who has access to customer data?" The honest answer: you\'re not sure. Access sprawled over time. No one tracks revocations. Sensitive data in email, shared drives. Audit season = panic mode.',
      outcome: "Sensitivity labels. Access policies. Audit-ready by default.",
    },
  ];

  const benefits = [
    {
      title: "One Lake, One Truth",
      description:
        "Stop reconciling spreadsheets. OneLake unifies Data Factory, Lakehouse, Warehouse, and Power BI — everyone reads and writes to the same place. Engineering and analysts finally share one version of the truth.",
      outcome: "Decisions in hours, not weeks.",
      icon: <Database className="h-7 w-7" />,
    },
    {
      title: "Governance Built In",
      description:
        'Purview is inside Fabric — sensitivity labels, lineage, access policies. Configure once, enforce everywhere. When the board asks "where did this come from?" you show them. No scrambling.',
      outcome: "Audit-ready without the scramble.",
      icon: <ShieldCheck className="h-7 w-7" />,
    },
    {
      title: "One Bill. Everything Connects.",
      description:
        "Ingestion, transformation, analytics, streaming, ML — all in Fabric. No more juggling vendors, integrations, or surprise invoices. One capacity scales with you.",
      outcome: "Simplicity that scales.",
      icon: <Share2 className="h-7 w-7" />,
    },
    {
      title: "Query Without Copying",
      description:
        "Shortcuts point to Azure, S3, Dataverse — query where data lives. No duplication, no sync delays, no cost bloat. Less moving. More doing.",
      outcome: "Access everything. Move nothing.",
      icon: <Search className="h-7 w-7" />,
    },
    {
      title: "AI-Ready. Today.",
      description:
        "Copilot writes SQL, builds pipelines, explores data in plain language. Your Lakehouse feeds Azure AI Foundry, RAG, and the workloads competitors are still planning.",
      outcome: "Catch up — or get ahead.",
      icon: <Cpu className="h-7 w-7" />,
    },
  ];

  const capabilities = [
    {
      title: "Workspace Architecture",
      description:
        "Dev, test, prod separation. Capacity allocation. Team boundaries. We design a structure that scales — so you don't rebuild when you grow.",
      outcome: "A foundation that grows with you.",
    },
    {
      title: "Lakehouse with Medallion Architecture",
      description:
        "Bronze preserves raw data. Silver cleans and standardizes. Gold delivers business-ready datasets. Every layer has a purpose. Every transformation is traceable.",
      outcome: "From chaos to clarity. Lineage included.",
    },
    {
      title: "Pipelines That Actually Run",
      description:
        "ELT pipelines with error handling, logging, monitoring, alerting. The production rigor demos skip — but Finance needs when they depend on the numbers.",
      outcome: "Data that arrives. On time. Every time.",
    },
    {
      title: "Purview Configuration",
      description:
        "Catalog, sensitivity labels, lineage, access policies. Done during implementation — not six months later when compliance shows up with questions.",
      outcome: "Governance from day one.",
    },
  ];

  const timeline = [
    {
      phase: "Week 1-2",
      title: "Discovery",
      description:
        "We map your sources, pain points, and target architecture. First 3-5 data sources identified. Governance requirements locked in. No guesswork — a clear path forward.",
      deliverable: "Architecture document and implementation roadmap",
    },
    {
      phase: "Week 3-4",
      title: "Environment Setup",
      description:
        "Fabric capacity and workspaces provisioned. Purview integrated. Private endpoints configured if needed. Dev/test/prod strategy in place. Your platform is live.",
      deliverable: "Production-ready Fabric environment",
    },
    {
      phase: "Week 5-8",
      title: "Pipeline Development",
      description:
        "Pipelines built for priority sources. Medallion layers implemented. Refresh schedules and monitoring configured. Data quality validated at every stage.",
      deliverable: "Data flowing into your Lakehouse",
    },
    {
      phase: "Week 9-10",
      title: "Analytics Foundation",
      description:
        "Semantic model built. Row-level security configured. Initial dashboards created with your team. Analysts trained on self-service. You're ready to scale.",
      deliverable: "Analysts running reports on governed data",
    },
  ];

  const faqs = [
    {
      question: "Should we use Fabric or stick with Databricks/Snowflake?",
      answer:
        "Depends on your stack. If you're a Microsoft shop — M365, Power BI, Azure — Fabric integrates in ways Databricks and Snowflake can't. Fabric is also SaaS; less infrastructure to manage. If you're committed to multi-cloud or have heavy Databricks investment, the answer might be different. We help you evaluate during assessment.",
    },
    {
      question: "Lakehouse vs. Warehouse — what's the difference?",
      answer:
        "Both live in OneLake. Lakehouse uses Delta Lake format and supports SQL plus Spark notebooks — flexible for engineering and data science. Warehouse is pure SQL analytics, optimized for BI. Most organizations use both: Lakehouse for transformation, Warehouse for serving. They share storage.",
    },
    {
      question: "Our data is sensitive. How does Fabric handle compliance?",
      answer:
        "Fabric integrates with Purview for governance. Sensitivity labels, access policies, lineage — built in. For strict requirements (HIPAA, SOC 2, FedRAMP), Fabric supports private endpoints, managed VNets, customer-managed encryption keys. Your data stays in your tenant.",
    },
    {
      question: "We already have Power BI. What does Fabric add?",
      answer:
        "Power BI is included — it's Fabric's BI workload. What Fabric adds is the unified foundation underneath. Direct Lake mode lets Power BI query OneLake directly without importing data. Faster refresh, less duplication, same governance across the entire stack.",
    },
    {
      question: "How long until we see value?",
      answer:
        "Foundational implementation: 8-10 weeks. Complex enterprise rollouts with strict governance and many sources take longer. We scope based on your reality, not a template.",
    },
  ];

  return (
    <main className="relative w-full bg-background overflow-x-clip">
      <div className="w-full h-auto lg:h-screen lg:min-h-[700px] pt-[80px]">
        <FabricHero />
      </div>

      <div className="w-full h-auto lg:h-screen lg:min-h-[700px]">
        <ProblemSection
          title="Same Question. Too Many Answers."
          tagline="If this feels like your Monday, you're in the right place."
          problems={problems}
          bridgeText="Fabric changes that. Here's how."
        />
      </div>

      <div className="w-full h-auto lg:h-screen lg:min-h-[700px]">
        <BenefitsSection
          title="Why Leading Teams Choose Fabric"
          subtitle="One platform. Unified data. Decisions, not debates."
          benefits={benefits}
        />
      </div>

      <div className="w-full h-auto lg:h-screen lg:min-h-[700px]">
        <CapabilitiesSection
          title="What We Deliver"
          subtitle="From fragmented sources to a production-ready platform. In 10 weeks."
          capabilities={capabilities}
        />
      </div>

      <div className="w-full">
        <DeliveryTimeline
          title="From Chaos to Clarity in 10 Weeks"
          subtitle="A proven path. No endless discovery. Real deliverables, every phase."
          timeline={timeline}
        />
      </div>

      <div className="w-full h-auto lg:h-screen lg:min-h-[700px]">
        <ExampleSection
          title="Private Equity: 3 ERPs, 1 Truth"
          outcomeMetric="10 days → 3 days"
          outcomeMetricLabel="Monthly close"
          context="PE-backed portfolio company. Three acquisitions. Three ERPs — SAP, NetSuite, QuickBooks. CFO needed consolidated financials. Fast."
          reality="Finance spent the first week of every month in Excel. Manual exports. VLOOKUP hell. Board meetings delayed. 'Final' numbers still came with asterisks."
          build={[
            "Fabric Lakehouse with unified chart of accounts across all three ERPs",
            "Automated daily pipelines from SAP, NetSuite, and QuickBooks",
            "Medallion architecture: Bronze → Silver → Gold, fully traceable",
            "Purview lineage from source to executive dashboard",
          ]}
          outcome="Monthly close: 10 days → 3 days. Finance shifted from data wrestling to analysis. Board gets weekly flash reports. Asterisks eliminated."
          linkText="See the PE approach"
          linkUrl="/industries/private-equity-ma"
        />
      </div>

      <div className="w-full h-auto lg:h-screen lg:min-h-[700px]">
        <FAQSection faqs={faqs} />
      </div>

      <div className="w-full h-auto lg:h-screen lg:min-h-[700px]">
        <MicrosoftCTA
          title="Ready to stop chasing the same number?"
          description="20+ Fabric implementations delivered. We'll assess your landscape, identify quick wins, and map a path to one source of truth."
          primaryCta="Get Your Data Readiness Assessment"
          primaryCtaLink="/contact?service=fabric-assessment"
          secondaryCta="Talk to Our Team"
          secondaryCtaLink="/contact"
          stats={[
            { value: "20+", label: "Fabric implementations" },
            { value: "10", label: "Weeks to foundation" },
            { value: "1", label: "Source of truth" },
          ]}
        />
      </div>
    </main>
  );
}
