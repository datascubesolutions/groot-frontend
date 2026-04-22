// @ts-nocheck
import { BenefitsSection } from "@/components/sections/microsoft/BenefitsSection";
import { CapabilitiesSection } from "@/components/sections/microsoft/CapabilitiesSection";
import { DeliveryTimeline } from "@/components/sections/microsoft/DeliveryTimeline";
import { ExampleSection } from "@/components/sections/microsoft/ExampleSection";
import { FAQSection } from "@/components/sections/microsoft/FAQSection";
import { MicrosoftCTA } from "@/components/sections/microsoft/MicrosoftCTA";
import { PurviewHero } from "@/components/sections/microsoft/PurviewHero";
import { ProblemSection } from "@/components/sections/microsoft/ProblemSection";
import {
  Activity,
  ArrowRightLeft,
  FileKey,
  Network,
  Search,
  ShieldAlert,
} from "lucide-react";

export const metadata = {
  title: "Microsoft Purview Data Governance & Implementation | Groot Analytics",
  description:
    "Govern your data estate with Microsoft Purview. Data catalog, lineage, classification, compliance. Governance that gets used.",
  keywords:
    "Microsoft Purview, data governance, data lineage, data catalog, sensitive data classification",
};

export default function PurviewPage() {
  const problems = [
    {
      title: "The Data Scavenger Hunt",
      description:
        "Someone needs customer data for a project. They search Slack. They email around. They ask in meetings. Eventually they find someone who knows where it lives. This happens every week. There's no catalog, no discoverability, no documentation.",
    },
    {
      title: "Audit Panic",
      description:
        'Regulators ask: "Where is PII stored? Who has access? When was it last accessed?" Your compliance team scrambles. Three weeks of manual investigation. Spreadsheets tracking spreadsheets. Even after all that work, nobody\'s confident the answer is complete.',
    },
    {
      title: "Unknown Quality",
      description:
        "Reports are built on data nobody has validated. ETL processes transform data without quality checks. Decisions happen on information that might be stale, duplicated, or wrong. There's no measurement, no ownership, no accountability.",
    },
  ];

  const benefits = [
    {
      title: "Data Map Across Everything",
      description:
        'Purview Data Map scans on-premises databases, Azure services, AWS, GCP, and SaaS applications. Your complete data estate, cataloged and searchable. No more "I think it\'s somewhere in Azure."',
      icon: <Network className="h-7 w-7" />,
    },
    {
      title: "Find Data Using Business Terms",
      description:
        "Unified Catalog lets business users search for data by business terms, not technical names. Glossary definitions, ownership, quality scores. Data becomes discoverable to people who aren't database administrators.",
      icon: <Search className="h-7 w-7" />,
    },
    {
      title: "Lineage That's Automatic",
      description:
        "Purview tracks where data comes from and where it goes. When a report shows unexpected numbers, trace back to the source. When a source changes, see what downstream assets are affected. Lineage that updates itself.",
      icon: <ArrowRightLeft className="h-7 w-7" />,
    },
    {
      title: "Know Where Sensitive Data Lives",
      description:
        "Automatic classification identifies PII, financial data, health information. Built-in classifiers for common patterns. Custom classifiers for your industry-specific data. Sensitivity labels applied consistently.",
      icon: <ShieldAlert className="h-7 w-7" />,
    },
    {
      title: "Policies That Work Across Systems",
      description:
        "Define access policies in Purview, enforce them at the source. Who can access what data under what conditions. Governance that works across your heterogeneous environment, not just within one platform.",
      icon: <FileKey className="h-7 w-7" />,
    },
    {
      title: "Data Quality You Can Measure",
      description:
        "Define quality rules. Run profiling. Measure health. Identify issues before they affect decisions. Assign ownership for remediation. Quality becomes visible and actionable.",
      icon: <Activity className="h-7 w-7" />,
    },
  ];

  const capabilities = [
    {
      title: "Source Registration and Scanning",
      description:
        "We register your data sources in Purview. We configure automated scans. Azure, on-premises, cloud storage, SaaS apps. Your complete estate, cataloged and current.",
    },
    {
      title: "Governance Domain Design",
      description:
        "We design governance domains that match your organization. Sales data, finance data, customer data — each with appropriate ownership, policies, and quality standards.",
    },
    {
      title: "Classification and Labeling",
      description:
        "We configure sensitivity labels and classification rules. Built-in classifiers for common patterns. Custom classifiers for your specific data. Labels applied automatically.",
    },
    {
      title: "Lineage Configuration",
      description:
        "We configure lineage tracking for your pipelines. Azure Data Factory, Synapse, Databricks, Fabric. Complete picture from source to report.",
    },
    {
      title: "Data Quality Rules",
      description:
        "We define quality rules based on your requirements. Completeness, accuracy, timeliness. Automated profiling and scoring. Dashboards showing health over time.",
    },
    {
      title: "Fabric Integration",
      description:
        "We configure Purview within your Fabric environment. OneLake catalog, sensitivity labels on Lakehouse data, lineage from ingestion to Power BI. Unified governance for unified data.",
    },
  ];

  const timeline = [
    {
      phase: "Week 1-2",
      title: "Assessment",
      description:
        "We inventory sources. We identify sensitive data and compliance requirements. We design governance domains. We define quality metrics.",
      deliverable: "Governance roadmap",
    },
    {
      phase: "Week 3-4",
      title: "Configuration",
      description:
        "We set up Purview. We register and scan initial sources. We configure classification. We establish glossary terms.",
      deliverable: "Purview operational",
    },
    {
      phase: "Week 5-8",
      title: "Implementation",
      description:
        "We expand source coverage. We configure lineage. We implement quality rules. We assign ownership.",
      deliverable: "Comprehensive catalog with quality metrics",
    },
    {
      phase: "Week 9-10",
      title: "Operationalization",
      description:
        "We train stewards. We establish processes. We configure monitoring. We document policies.",
      deliverable: "Self-sustaining governance",
    },
  ];

  const faqs = [
    {
      question: "What sources can Purview scan?",
      answer:
        "100+ sources. Azure services, AWS, GCP, on-premises databases, SaaS applications (Salesforce, SAP, etc.), file storage. If your data lives somewhere common, Purview supports it.",
    },
    {
      question: "How is this different from a traditional data catalog?",
      answer:
        "Traditional catalogs document what exists. Purview adds classification, lineage, quality, and policy enforcement. It's governance, not just documentation.",
    },
    {
      question: "Does Purview work outside Microsoft?",
      answer:
        "Yes. Purview scans multicloud and on-premises. It's designed for heterogeneous environments, not just Azure.",
    },
    {
      question: "How does Purview integrate with Fabric?",
      answer:
        "Purview governance is built into Fabric. The OneLake catalog uses Purview. Sensitivity labels carry through. Lineage tracks from pipelines to reports. Unified governance for unified data.",
    },
    {
      question:
        "What's the difference between data governance and compliance features?",
      answer:
        "Data governance (Data Map, Unified Catalog) focuses on discovery and management. Compliance features (DLP, Information Protection) focus on protecting sensitive data. They work together.",
    },
    {
      question: "How do we start without trying to do everything?",
      answer:
        "Start with high-priority sources — cloud platforms and critical applications. Expand over time. We help you prioritize based on value and compliance requirements.",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col">
      <PurviewHero />

      <ProblemSection tagline="The governance gap." problems={problems} />

      <BenefitsSection title="What Purview Changes" benefits={benefits} />

      <CapabilitiesSection
        title="What You Actually Get"
        capabilities={capabilities}
      />

      <DeliveryTimeline
        title="Ten Weeks to Governed Data"
        timeline={timeline}
      />

      <ExampleSection
        title="Banking Compliance Response"
        context="Regional bank preparing for regulatory examination. 50+ data sources across core banking, CRM, data warehouse, and departmental databases."
        reality="Regulators asked for documentation of where customer PII was stored and who had access. Compliance spent three weeks manually auditing systems and interviewing teams. Even after that, they weren't confident the answer was complete. The next exam was in six months."
        build={[
          "Purview Data Map covering all 50+ sources (on-prem and cloud)",
          "Automated PII classification with custom classifiers for banking-specific data",
          "Sensitivity labels applied and enforced consistently",
          "Access audit capabilities integrated with existing SIEM",
          "Compliance dashboard for continuous monitoring",
        ]}
        outcome="Future regulatory questions answered in hours, not weeks. Compliance has continuous visibility instead of point-in-time panic. New data sources automatically cataloged and classified as they're added."
        linkText="See our approach"
        linkUrl="/services/build-your-foundation"
      />

      <FAQSection faqs={faqs} />

      <MicrosoftCTA
        title="Ready to govern your data?"
        description="We'll assess your current state and build a governance roadmap that's practical, not theoretical."
        primaryCta="Get a Governance Assessment"
        primaryCtaLink="/contact?service=purview-assessment"
      />
    </main>
  );
}
