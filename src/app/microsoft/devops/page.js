// @ts-nocheck
import { BenefitsSection } from "@/components/sections/microsoft/BenefitsSection";
import { CapabilitiesSection } from "@/components/sections/microsoft/CapabilitiesSection";
import { DeliveryTimeline } from "@/components/sections/microsoft/DeliveryTimeline";
import { ExampleSection } from "@/components/sections/microsoft/ExampleSection";
import { FAQSection } from "@/components/sections/microsoft/FAQSection";
import { MicrosoftCTA } from "@/components/sections/microsoft/MicrosoftCTA";
import { DevOpsHero } from "@/components/sections/microsoft/DevOpsHero";
import { ProblemSection } from "@/components/sections/microsoft/ProblemSection";
import {
  CheckCircle,
  FileCode,
  GitBranch,
  GitCommit,
  GitMerge,
  RefreshCw,
} from "lucide-react";

export const metadata = {
  title: "DataOps & Azure DevOps Implementation | Groot Analytics",
  description:
    "Engineering discipline for data teams. CI/CD pipelines, version control, and automated testing for data workloads using Azure DevOps.",
  keywords:
    "Azure DevOps for data, DataOps, CI/CD for data, version control, automated testing, data engineering discipline",
};

export default function DevOpsPage() {
  const problems = [
    {
      title: 'The Production "Fix"',
      description:
        'Someone finds an error in a report. The data engineer opens the production pipeline, tweaks the code, and saves it. The report fixes itself. Three days later, another report breaks because that "fix" unexpectedly changed upstream logic. Nobody knows exactly what changed, or how to revert it.',
    },
    {
      title: "The Deployment Weekend",
      description:
        "Moving from Dev to Prod isn't a process, it's an event. It involves weekend work, manual script execution, hoping configuration strings get updated correctly, and a Monday morning full of \"hotfixes\" because something was forgotten. Deployments are feared, so they happen rarely, creating massive, risky releases.",
    },
    {
      title: "Testing by End Users",
      description:
        "How do you know the data is right? You publish it and wait to see if Finance yells. Your stakeholders are your quality assurance team. Trust degrades with every error they catch that you didn't.",
    },
  ];

  const benefits = [
    {
      title: "Version Control Everything",
      description:
        'SQL scripts, Python notebooks, pipeline definitions, and infrastructure as code—all in Git. Every change has an author, a timestamp, and a description. You can always answer "what changed?" and you can always revert.',
      icon: <GitBranch className="h-7 w-7" />,
    },
    {
      title: "Automated Deployments (CI/CD)",
      description:
        "Code moves from Dev to Test to Prod automatically upon approval. Azure Pipelines handle the deployment, update the connection strings, and run the migrations. Deployments become boring, predictable weekday events.",
      icon: <GitCommit className="h-7 w-7" />,
    },
    {
      title: "Peer Review Before Production",
      description:
        "Pull Requests require another engineer to review code before it merges. Catching logic errors, performance issues, and standard violations before they reach production. Engineering rigor applied to data.",
      icon: <GitMerge className="h-7 w-7" />,
    },
    {
      title: "Automated Testing",
      description:
        "Unit tests for transformations. Data quality tests for pipelines. The CI/CD pipeline runs these automatically and blocks deployment if tests fail. Catch errors before your stakeholders do.",
      icon: <CheckCircle className="h-7 w-7" />,
    },
    {
      title: "Isolated Environments",
      description:
        "Dev, Test, and Prod are completely separate. Engineers experiment in Dev without impacting production SLAs. Changes are validated in Test against production-like data volumes before final release.",
      icon: <FileCode className="h-7 w-7" />,
    },
    {
      title: "Continuous Delivery",
      description:
        "Because deployments are automated and safe, you deploy smaller changes more frequently. Deliver value to the business continuously instead of withholding improvements for the monthly mega-release.",
      icon: <RefreshCw className="h-7 w-7" />,
    },
  ];

  const capabilities = [
    {
      title: "Repository Architecture",
      description:
        "We set up Azure Repos with appropriate branching strategies (GitFlow or Trunk-based). Monorepo vs. multi-repo design based on your team size and component architecture.",
    },
    {
      title: "CI/CD Pipeline Development",
      description:
        "We build Azure Pipelines (YAML) for your specific workloads: Azure Data Factory ARM templates, Databricks notebooks, Synapse SQL scripts, Power BI datasets.",
    },
    {
      title: "Automated Testing Frameworks",
      description:
        "Implementation of testing tools. Great Expectations or dbt tests for data quality. PyTest for Spark data transformations. tSQLt for SQL Server logic.",
    },
    {
      title: "Environment Configuration Management",
      description:
        "Managing secrets in Azure Key Vault. Parameterizing pipelines so code moves between environments while configuration (connection strings, endpoints) changes automatically.",
    },
    {
      title: "Infrastructure integration",
      description:
        "Integrating Terraform or Bicep deployments into your DevOps pipelines. Provision infrastructure alongside the code that runs on it.",
    },
    {
      title: "Agile Board Setup",
      description:
        "Configuring Azure Boards. Epics, Features, User Stories tailored for data engineering workflows. Sprints, velocity tracking, and capacity planning.",
    },
  ];

  const timeline = [
    {
      phase: "Week 1",
      title: "Assessment & Strategy",
      description:
        "We review current deployment processes. We define the branching strategy. We map environments (Dev/Test/Prod). We design the pipeline architecture.",
      deliverable: "DataOps Strategy Document",
    },
    {
      phase: "Week 2-3",
      title: "Foundation & Tooling",
      description:
        "We set up Azure DevOps projects and repos. We configure Key Vaults and service connections. We establish basic CI pipelines for compilation and linting.",
      deliverable: "Configured DataOps Foundation",
    },
    {
      phase: "Week 4-5",
      title: "Deployment Automation",
      description:
        "We build CD pipelines for your specific data assets (ADF, Databricks, SQL). We implement environment parameters. We configure approval gates.",
      deliverable: "Automated Dev-to-Prod Deployments",
    },
    {
      phase: "Week 6",
      title: "Testing & Enablement",
      description:
        "We integrate automated testing frameworks. We train your team on Git workflows and PR processes. We assist with the first automated production deployment.",
      deliverable: "Team operating under DataOps practices",
    },
  ];

  const faqs = [
    {
      question: "Are DataOps and DevOps the same thing?",
      answer:
        "The principles are the same: version control, automation, testing. But data introduces state (the data itself) which makes schema migrations and testing harder than traditional software. DataOps adapts DevOps practices specifically for data engineering challenges.",
    },
    {
      question: "Can we use GitHub or GitLab instead of Azure DevOps?",
      answer:
        "Yes. The concepts apply regardless of the tool. If your organization already uses GitHub Actions or GitLab CI/CD, we will build your data pipelines there. We focus on Azure DevOps here as it's the most common pairing with the Microsoft Data stack.",
    },
    {
      question: "How do you version control Power BI reports?",
      answer:
        "Power BI historically struggled here, but with PBIP (Power BI Project) format or Fabric Git Integration, reports and datasets are saved as text files. This allows true Git version control, diffing, and CI/CD deployment via Azure DevOps.",
    },
    {
      question: "Does this replace testing by users (UAT)?",
      answer:
        "No. Automated tests catch logic errors, regressions, and bad data formatting. UAT confirms the dashboard actually answers the business question. DataOps ensures UAT isn't wasted finding obvious coding bugs.",
    },
    {
      question: "Our team doesn't know Git. Is this too advanced?",
      answer:
        "It's a learning curve, but it's non-negotiable for modern data engineering. We include Git training (commit, push, pull, branch, merge, resolve conflicts) as part of our enablement. We start simple and build capability.",
    },
    {
      question: "How do you handle database schema changes?",
      answer:
        "We employ state-based (e.g., DacPac/SQL Projects) or migration-based (e.g., Flyway, Liquibase) approaches in the deployment pipeline, ensuring database changes are applied predictably alongside the code.",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col">
      <DevOpsHero />

      <ProblemSection tagline="The deployment nightmare." problems={problems} />

      <BenefitsSection
        title="What Engineering Discipline Changes"
        benefits={benefits}
      />

      <CapabilitiesSection
        title="What You Actually Get"
        capabilities={capabilities}
      />

      <DeliveryTimeline
        title="Six Weeks to Automated Deployments"
        timeline={timeline}
      />

      <ExampleSection
        title="Retail Analytics Team Maturity"
        context="Data team of 8 supporting a national retailer. Stack: Azure Data Factory, Databricks, Synapse. All deployments were manual."
        reality="Deployments took two engineers a full weekend every month. Errors were common. Engineers overwrote each other's code in Databricks. 'Production' was whatever happened to be running in the workspace."
        build={[
          "Azure DevOps repository with GitFlow branching strategy",
          "Automated YAML pipelines for ADF, Databricks, and Synapse SQL",
          "Terraform for environment provisioning",
          "dbt testing integrated into the CI pipeline",
          "Pull Request policies requiring minimum 1 approval",
        ]}
        outcome="Weekend deployments eliminated. Features are deployed daily during business hours taking less than 5 minutes. Data quality errors caught in CI pipeline dropped production defects by 60%."
        linkText="See our engineering approach"
        linkUrl="/services/modern-data-architecture"
      />

      <FAQSection faqs={faqs} />

      <MicrosoftCTA
        title="Ready to automate deployments?"
        description="We'll review your current processes and build the CI/CD pipelines that bring engineering rigor to your data team."
        primaryCta="Assess Your DataOps Maturity"
        primaryCtaLink="/contact?service=devops-assessment"
      />
    </main>
  );
}
