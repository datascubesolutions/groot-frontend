import { DecisionMatrix } from "@/components/graphics/DecisionMatrix";
import { ProcessFlow } from "@/components/graphics/ProcessFlow";
import { UniverseNetwork } from "@/components/graphics/UniverseNetwork";
import { WaveMatrix } from "@/components/graphics/WaveMatrix";

export const productData = [
  {
    title: "Microsoft Azure",
    trademark: "",
    description:
      "A resilient, scalable cloud foundation for all your workloads. We architect secure, high-performance environments using Azure Virtual Machines, AKS, and App Services.",
    features: [
      { title: "Compute", description: "Azure VMs, App Service, and Kubernetes (AKS)" },
      { title: "Storage", description: "Azure Blob Storage and Data Lake Gen2" },
      { title: "Networking", description: "Virtual Network, Front Door, ExpressRoute" },
      { title: "Security", description: "Microsoft Entra ID and Sentinel" },
      { title: "Monitoring", description: "Azure Monitor and Application Insights" },
      { title: "Hybrid", description: "Azure Arc for hybrid management" },
    ],
    imagePosition: "right",
    bgVariant: "default",
    visualization: <UniverseNetwork />,
  },
  {
    title: "Microsoft Fabric",
    trademark: "",
    description:
      "The all-in-one analytics solution for enterprises. Unified data lake, engineering, data science, and real-time analytics on a SaaS platform.",
    features: [
      { title: "OneLake", description: "The OneDrive for data - single source of truth" },
      { title: "Synapse", description: "Data Engineering, Science, and Warehousing" },
      { title: "Data Factory", description: "Data integration and transformation flows" },
      { title: "Power BI", description: "Industry-leading business intelligence built-in" },
      { title: "Real-Time", description: "Observability and event stream processing" },
      { title: "Copilot", description: "AI-assisted development and insights" },
    ],
    imagePosition: "left",
    bgVariant: "muted",
    visualization: <ProcessFlow />,
  },
  {
    title: "Azure Databricks",
    trademark: "",
    description:
      "Accelerate big data analytics and artificial intelligence with the optimizations of the Databricks Lakehouse Platform on Azure.",
    features: [
      { title: "Unity Catalog", description: "Unified governance for data and AI" },
      { title: "Delta Lake", description: "Open source storage layer for reliability" },
      { title: "Photon", description: "High-performance vectorized query engine" },
      { title: "Data Science", description: "Collaborative notebooks and ML environment" },
      { title: "SQL Warehouse", description: "Serverless compute for BI and SQL" },
      { title: "Streaming", description: "Structured Streaming for real-time data" },
    ],
    imagePosition: "right",
    bgVariant: "default",
    visualization: <WaveMatrix />,
  },
  {
    title: "Microsoft AI Foundry",
    trademark: "",
    description:
      "Build, deploy, and manage AI solutions with a unified platform for generative AI and custom models.",
    features: [
      { title: "Model Catalog", description: "Access GPT-4, Llama 2, and more" },
      { title: "AI Studio", description: "Unified interface for AI development" },
      { title: "Safety", description: "Content safety and responsible AI tools" },
      { title: "Prompt Flow", description: "Streamlined development of AI applications" },
      { title: "Evaluation", description: "Tools to test and benchmark models" },
      { title: "Deployment", description: "One-click deploy to endpoints" },
    ],
    imagePosition: "left",
    bgVariant: "muted",
    visualization: <DecisionMatrix />,
  },
];
