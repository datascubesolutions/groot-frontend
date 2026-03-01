import { BenefitsSection } from "@/components/sections/microsoft/BenefitsSection";
import { CapabilitiesSection } from "@/components/sections/microsoft/CapabilitiesSection";
import { DeliveryTimeline } from "@/components/sections/microsoft/DeliveryTimeline";
import { ExampleSection } from "@/components/sections/microsoft/ExampleSection";
import { FAQSection } from "@/components/sections/microsoft/FAQSection";
import { MicrosoftCTA } from "@/components/sections/microsoft/MicrosoftCTA";
import { FabricHero } from "@/components/sections/microsoft/FabricHero";
import { ProblemSection } from "@/components/sections/microsoft/ProblemSection";
import { Cpu, Database, Search, Share2, ShieldCheck, TrendingDown } from "lucide-react";

export const metadata = {
  title: "Microsoft Fabric Implementation & Consulting | Groot Analytics",
  description: "Unify your data with Microsoft Fabric. Groot Analytics delivers Lakehouse architecture, Purview governance, and production-ready pipelines. 20+ implementations.",
  keywords: "Microsoft Fabric implementation, Fabric Lakehouse, OneLake, medallion architecture, Microsoft Purview, Fabric consulting",
};

export default function FabricPage() {
  const problems = [
    {
      title: "The Scavenger Hunt",
      description: "Your CFO asks a simple question: \"What's our revenue by region?\" You check the dashboard. The number looks wrong. You email Finance — they say their spreadsheet shows something different because they pull directly from the ERP. Sales jumps in with a third number from Salesforce. By 10 AM, you're in a meeting about the data instead of the decision the data was supposed to inform."
    },
    {
      title: "The Trust Gap",
      description: "You have dashboards. Dozens of them. But when the CEO presents to the board, someone always builds a fresh Excel file \"just to double-check.\" The reports exist. The trust doesn't."
    },
    {
      title: "Governance by Hope",
      description: "\"Who has access to customer data?\" The honest answer: you're not sure. Access was granted over time, nobody tracks revocations, and sensitive data moves through email attachments and shared drives. Audit season isn't preparation — it's panic."
    }
  ];

  const benefits = [
    {
      title: "One Lake, One Truth",
      description: "OneLake is Fabric's unified storage layer. All workloads — Data Factory, Lakehouse, Warehouse, Power BI — read and write to the same place. Your engineering team and your analysts finally work from identical data. No more reconciliation spreadsheets.",
      icon: <Database className="w-7 h-7" />},
    {
      title: "Governance That's Already There",
      description: "Microsoft Purview isn't a separate purchase you configure later. It's built into Fabric. Sensitivity labels, data lineage, access policies — configured once, enforced everywhere. When someone asks \"where did this data come from?\" you can actually show them.",
      icon: <ShieldCheck className="w-7 h-7" />},
    {
      title: "Everything Connects",
      description: "Data Factory for ingestion. Lakehouse for transformation. Warehouse for SQL analytics. Power BI for visualization. Real-Time Intelligence for streaming. Data Science for ML. One platform. One capacity. One bill.",
      icon: <Share2 className="w-7 h-7" />},
    {
      title: "Query Without Copying",
      description: "Fabric shortcuts let you access data in Azure Data Lake, Amazon S3, or Dataverse without moving it. Create a pointer, run your query. The data stays where it is. Less duplication, lower costs, fewer sync nightmares.",
      icon: <Search className="w-7 h-7" />},
    {
      title: "AI-Ready by Default",
      description: "Copilot in Fabric helps write SQL, build pipelines, and explore data using plain language. Your Lakehouse data is ready for Azure AI Foundry, RAG applications, and the AI workloads your competitors are already building.",
      icon: <Cpu className="w-7 h-7" />},
    {
      title: "Predictable Costs",
      description: "One capacity serves all workloads. You're not paying for idle Spark clusters, separate data warehouse compute, and Power BI Premium capacity. Scale the capacity up when you need it. Scale down when you don't.",
      icon: <TrendingDown className="w-7 h-7" />}
  ];

  const capabilities = [
    {
      title: "Workspace Architecture",
      description: "We design your workspace structure — dev, test, prod separation, capacity allocation, team boundaries. A foundation that scales without needing to be rebuilt when you grow."
    },
    {
      title: "Lakehouse with Medallion Architecture",
      description: "Bronze layer preserves raw data exactly as it arrived. Silver layer cleans, validates, and standardizes. Gold layer contains business-ready datasets for analytics. Each layer has a purpose. Each transformation is traceable."
    },
    {
      title: "Pipelines That Actually Run",
      description: "We build ELT pipelines using Data Factory and Spark notebooks. Error handling, logging, monitoring, alerting — the production concerns that don't exist in a demo but matter when Finance depends on the data."
    },
    {
      title: "Purview Configuration",
      description: "Data catalog, sensitivity labels, lineage tracking, access policies. Configured during implementation, not as a separate project six months later when compliance asks uncomfortable questions."
    },
    {
      title: "Private Endpoints",
      description: "For organizations where data cannot traverse public internet, we configure managed private endpoints and workspace-level private links. Fabric connects to your sources through Azure Private Link. Traffic stays on Microsoft's backbone."
    },
    {
      title: "Semantic Model Foundation",
      description: "The certified semantic model that sits between your Lakehouse and Power BI. Consistent measures, documented relationships, row-level security. Analysts build reports on governed data, not raw tables with cryptic column names."
    }
  ];

  const timeline = [
    {
      phase: "Week 1-2",
      title: "Discovery",
      description: "We document your current sources and pain points. We design the target architecture. We identify the first 3-5 data sources. We establish governance requirements.",
      deliverable: "Architecture document and implementation roadmap"
    },
    {
      phase: "Week 3-4",
      title: "Environment Setup",
      description: "We provision Fabric capacity and workspaces. We configure Purview integration. We set up private endpoints if required. We establish dev/test/prod strategy.",
      deliverable: "Production-ready Fabric environment"
    },
    {
      phase: "Week 5-8",
      title: "Pipeline Development",
      description: "We build pipelines for your priority sources. We implement medallion layers. We configure refresh schedules and monitoring. We validate data quality at each stage.",
      deliverable: "Data flowing into your Lakehouse"
    },
    {
      phase: "Week 9-10",
      title: "Analytics Foundation",
      description: "We build the semantic model. We configure row-level security. We create initial dashboards with your team. We train analysts on self-service.",
      deliverable: "Analysts running reports on governed data"
    }
  ];

  const faqs = [
    {
      question: "Should we use Fabric or stick with Databricks/Snowflake?",
      answer: "Depends on your stack. If you're a Microsoft shop — M365, Power BI, Azure — Fabric integrates in ways Databricks and Snowflake can't. Fabric is also SaaS; less infrastructure to manage. If you're committed to multi-cloud or have heavy Databricks investment, the answer might be different. We help you evaluate during assessment."
    },
    {
      question: "Lakehouse vs. Warehouse — what's the difference?",
      answer: "Both live in OneLake. Lakehouse uses Delta Lake format and supports SQL plus Spark notebooks — flexible for engineering and data science. Warehouse is pure SQL analytics, optimized for BI. Most organizations use both: Lakehouse for transformation, Warehouse for serving. They share storage."
    },
    {
      question: "Our data is sensitive. How does Fabric handle compliance?",
      answer: "Fabric integrates with Purview for governance. Sensitivity labels, access policies, lineage — built in. For strict requirements (HIPAA, SOC 2, FedRAMP), Fabric supports private endpoints, managed VNets, customer-managed encryption keys. Your data stays in your tenant."
    },
    {
      question: "We already have Power BI. What does Fabric add?",
      answer: "Power BI is included — it's Fabric's BI workload. What Fabric adds is the unified foundation underneath. Direct Lake mode lets Power BI query OneLake directly without importing data. Faster refresh, less duplication, same governance across the entire stack."
    },
    {
      question: "How long until we see value?",
      answer: "Foundational implementation: 8-10 weeks. Complex enterprise rollouts with strict governance and many sources take longer. We scope based on your reality, not a template."
    },
    {
      question: "What about our existing Azure Data Factory and Synapse?",
      answer: "They can coexist. ADF pipelines can write to OneLake. Synapse workspaces can query via shortcuts. We help you run them alongside Fabric during transition, then plan migration when it makes sense."
    },
    {
      question: "What happens after you leave?",
      answer: "You own everything. We document the architecture, train your team, and establish processes. The goal is a self-sustaining foundation — not ongoing dependency."
    }
  ];

  return (
    <main className="flex flex-col min-h-screen">
      <FabricHero />

      <ProblemSection
        tagline="This is probably your Monday."
        problems={problems}
      />

      <BenefitsSection
        title="What Fabric Actually Changes"
        benefits={benefits}
      />

      <CapabilitiesSection
        title="What You Actually Get"
        capabilities={capabilities}
      />

      <DeliveryTimeline
        title="Ten Weeks to a Working Foundation"
        timeline={timeline}
      />

      <ExampleSection
        title="Private Equity Integration"
        context="Private equity-backed portfolio company. Three acquisitions in two years. Three different ERPs — SAP, NetSuite, QuickBooks. CFO needs consolidated financials."
        reality="Finance spent the first week of every month in Excel. Manual exports from each system. VLOOKUP hell. Board meetings delayed waiting for 'final' numbers that still came with asterisks and caveats."
        build={[
          "Fabric Lakehouse with unified chart of accounts across all three ERPs",
          "Automated daily pipelines from SAP, NetSuite, and QuickBooks",
          "Medallion architecture: raw data preserved, standardized in Silver, business-ready in Gold",
          "Purview lineage from source system to executive dashboard",
          "Flash report dashboard the CFO checks every morning"
        ]}
        outcome="Monthly close: 10 days → 3 days. Finance team shifted from data wrestling to data analysis. Board receives weekly flash reports. Asterisks eliminated."
        linkText="See the PE approach"
        linkUrl="/industries/private-equity-ma"
      />

      <FAQSection faqs={faqs} />

      <MicrosoftCTA
        title="Ready to unify your data?"
        description="We'll assess your current data landscape, identify quick wins, and map out what a Fabric foundation looks like for your organization."
        primaryCta="Get Your Data Readiness Assessment"
        primaryCtaLink="/contact?service=fabric-assessment"
      />
    </main>
  );
}
