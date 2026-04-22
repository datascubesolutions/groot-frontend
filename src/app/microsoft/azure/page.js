// @ts-nocheck
import { BenefitsSection } from "@/components/sections/microsoft/BenefitsSection";
import { CapabilitiesSection } from "@/components/sections/microsoft/CapabilitiesSection";
import { DeliveryTimeline } from "@/components/sections/microsoft/DeliveryTimeline";
import { ExampleSection } from "@/components/sections/microsoft/ExampleSection";
import { FAQSection } from "@/components/sections/microsoft/FAQSection";
import { MicrosoftCTA } from "@/components/sections/microsoft/MicrosoftCTA";
import { AzureHero } from "@/components/sections/microsoft/AzureHero";
import { ProblemSection } from "@/components/sections/microsoft/ProblemSection";
import { Activity, Cloud, Layers, Lock, Network, Server } from "lucide-react";

export const metadata = {
  title: "Azure Data Infrastructure & Architecture | Groot Analytics",
  description:
    "Enterprise foundation for your data platform. Azure networking, security, storage, and compute properly architected for analytics workloads.",
  keywords:
    "Azure data infrastructure, Azure architecture, Azure Data Lake Storage, private endpoints, managed VNets",
};

export default function AzurePage() {
  const problems = [
    {
      title: "The Security Review Blockade",
      description:
        "Your data team wants to adopt Fabric or Databricks. InfoSec asks for the network architecture diagram showing how sensitive data is protected from the public internet. The project stops for three months while teams argue about VNets, firewalls, and private endpoints.",
    },
    {
      title: "Accidental Sprawl",
      description:
        "Every new project gets a new resource group. Some use Premium storage, some use Standard. Naming conventions are suggestions, not rules. Costs are rising linearly with the number of projects, but nobody can explain exactly what resources are driving the bill.",
    },
    {
      title: "Performance Without Design",
      description:
        "Queries are slow. The immediate reaction is \"scale up the compute.\" It works, but it's expensive. The real issue is data partitioning in the lake, network latency between regions, or missing indexes. You're paying for infrastructure to compensate for bad architecture.",
    },
  ];

  const benefits = [
    {
      title: "Private by Default",
      description:
        "Configure PaaS services (Fabric, Databricks, SQL) without public internet exposure. Traffic stays on the Azure backbone through Private Link and managed VNets. Pass Infosec reviews because the foundation is secure by design.",
      icon: <Lock className="h-7 w-7" />,
    },
    {
      title: "Organized for Analytics",
      description:
        "Resource groups, naming conventions, tagging, and RBAC designed specifically for data teams. Cost allocation becomes simple because resources are tagged by project, department, and environment.",
      icon: <Layers className="h-7 w-7" />,
    },
    {
      title: "Storage That Scales",
      description:
        "Azure Data Lake Storage (ADLS Gen2) configured with hierarchical namespace, lifecycle management policies, and proper folder structures. Data moves to cold storage automatically when it's no longer queried.",
      icon: <Server className="h-7 w-7" />,
    },
    {
      title: "Compute Sized Correctly",
      description:
        "Right-sizing Synapse, SQL DB, or Databricks clusters. Auto-pause for dev environments. Reserved instances for production baselines. Paying for what you need, not what the defaults suggested.",
      icon: <Activity className="h-7 w-7" />,
    },
    {
      title: "Network Typography for Data",
      description:
        "Hub and spoke network designs that allow data movement between environments safely. ExpressRoute configured for on-premises data ingestion without saturating your corporate internet connection.",
      icon: <Network className="h-7 w-7" />,
    },
    {
      title: "Infrastructure as Code",
      description:
        "Bicep or Terraform templates for everything. When you need a new environment, you run a script, you don't click through the portal. Consistent, repeatable, auditable infrastructure.",
      icon: <Cloud className="h-7 w-7" />,
    },
  ];

  const capabilities = [
    {
      title: "Network Security Design",
      description:
        "We architect secure network boundaries. Private endpoints for PaaS services, managed VNets, firewall routing, and NSGs. Secure data movement from on-prem to cloud.",
    },
    {
      title: "Storage Architecture",
      description:
        "ADLS Gen2 hierarchy design. Raw, cleansing, and curated zones. Partitioning strategies that improve query performance instead of degrading it. Redundancy (LRS/ZRS/GRS) balanced with cost.",
    },
    {
      title: "Identity and Access (RBAC)",
      description:
        "Entra ID (Azure AD) integration. Custom roles following least privilege. Managed identities for service-to-service communication. No shared passwords or access keys in code.",
    },
    {
      title: "Cost Optimization",
      description:
        "We review existing Azure data estates for waste. Orphaned disks, over-provisioned compute, missing lifecycle management. Immediate ROI through bill reduction.",
    },
    {
      title: "Infrastructure as Code Implementation",
      description:
        "We build Terraform or Bicep templates for your data foundation. Modules for standard data landing zones. Version-controlled infrastructure.",
    },
    {
      title: "Disaster Recovery Planning",
      description:
        "RPO and RTO definition for data assets. Geo-replication strategies. Disaster recovery testing procedures. Ensuring your data survives regional outages.",
    },
  ];

  const timeline = [
    {
      phase: "Week 1",
      title: "Requirements & Architecture",
      description:
        "We define security requirements with InfoSec. We outline network topology. We map data flows. We design the infrastructure blueprint.",
      deliverable: "Architecture Design Document",
    },
    {
      phase: "Week 2-3",
      title: "Foundation Build",
      description:
        "We deploy core networking (VNets, subnets, routing). We establish identity and RBAC structure. We configure policies and tagging.",
      deliverable: "Secure Azure foundation",
    },
    {
      phase: "Week 4-5",
      title: "Data Services Deployment",
      description:
        "We provision data services (Storage, Compute) via IaC. We configure private endpoints. We set up monitoring and alerts.",
      deliverable: "Operational data infrastructure",
    },
    {
      phase: "Week 6",
      title: "Handover & Documentation",
      description:
        "We conduct DR testing. We review cost management dashboards. We train your cloud engineering team on the IaC repository.",
      deliverable: "Production-ready environment",
    },
  ];

  const faqs = [
    {
      question: "Do you use Terraform or Bicep?",
      answer:
        "We support both. We recommend based on your team's existing skills. If you already use Terraform for AWS, stick with Terraform. If you're 100% Azure and want Microsoft's native tooling, Bicep is excellent.",
    },
    {
      question: "How do private endpoints work with Power BI?",
      answer:
        "Power BI requires a VNet Data Gateway to securely access data sources behind private endpoints. We configure this architecture to ensure reports can refresh without exposing the database to the internet.",
    },
    {
      question: "Our Azure bill is too high. Can you just fix the cost?",
      answer:
        "Yes. Our cost optimization engagements typically find 15-30% savings within the first two weeks by addressing over-provisioning, unattached resources, and missing lifecycle policies.",
    },
    {
      question: "How do we handle multi-region deployments?",
      answer:
        "We design for data sovereignty and latency requirements. Storage replication (GRS/RA-GRS), paired regions for compute failover, and Traffic Manager/Front Door for routing.",
    },
    {
      question:
        "What's the relationship between Azure infrastructure and Fabric?",
      answer:
        "Fabric abstracts much of the underlying PaaS infrastructure, but it still requires network security (private links) and governance integration with your broader Azure estate. We ensure Fabric plays nicely with your enterprise landing zone.",
    },
    {
      question: "Who owns the infrastructure code?",
      answer:
        "You do. Everything we build is committed to your repository. We believe in knowledge transfer, not vendor lock-in.",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col">
      <AzureHero />

      <ProblemSection tagline="The foundation cracks." problems={problems} />

      <BenefitsSection
        title="What Proper Infrastructure Changes"
        benefits={benefits}
      />

      <CapabilitiesSection
        title="What You Actually Get"
        capabilities={capabilities}
      />

      <DeliveryTimeline
        title="Six Weeks to a Secure Foundation"
        timeline={timeline}
      />

      <ExampleSection
        title="Healthcare Provider Network Design"
        context="Regional healthcare provider adopting Azure for clinical analytics. Strict HIPAA requirements. Existing data architecture was entirely on-premises, heavily firewalled."
        reality="The analytics team wanted to use Azure Databricks, but InfoSec blocked the project because default deployments exposed public IP addresses. Every proposed architecture was rejected for non-compliance with data exfiltration policies."
        build={[
          "Hub and spoke network architecture with forced tunneling through on-prem firewall",
          "Azure Databricks deployed with Secure Cluster Connectivity (No Public IPs)",
          "All storage accounts and databases secured with Azure Private Link",
          "Terraform templates defining the entire environment for repeatable, auditable deployment",
          "Custom Azure Policies preventing creation of resources with public endpoints",
        ]}
        outcome="InfoSec approved the architecture in one review. The analytics team deployed their platform. The automated policies ensure new resources remain compliant without manual review."
        linkText="See our security approach"
        linkUrl="/services/build-your-foundation"
      />

      <FAQSection faqs={faqs} />

      <MicrosoftCTA
        title="Ready for a solid foundation?"
        description="We'll review your current Azure architecture and design a secure, performant foundation for your data workloads."
        primaryCta="Get an Infrastructure Assessment"
        primaryCtaLink="/contact?service=azure-assessment"
      />
    </main>
  );
}
