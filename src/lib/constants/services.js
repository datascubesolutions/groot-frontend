
import {
  BarChart,
  Brain,
  Database,
  TrendingUp,
  Users
} from "lucide-react";

export const SERVICE_CATEGORIES = [
  {
    title: "Strategy & Advisory",
    slug: "strategy-advisory",
    href: "/services/strategy-advisory",
    icon: TrendingUp,
    description: "Analytics Roadmap, Data Strategy & Digital Transformation",
    subServices: [
      { title: "Analytics Roadmap & Planning", slug: "analytics-roadmap-planning" },
      { title: "Data Strategy Development", slug: "data-strategy-development" },
      { title: "Platform Strategy & Selection", slug: "platform-strategy-selection" },
      { title: "AI/ML Feasibility & Assessment", slug: "ai-ml-feasibility-assessment" },
      { title: "Proof of Concept Development", slug: "proof-of-concept-development" },
      { title: "Digital Transformation Consulting", slug: "digital-transformation-consulting" }
    ]
  },
  {
    title: "Data Engineering",
    slug: "data-engineering",
    href: "/services/data-engineering",
    icon: Database,
    description: "Cloud Architecture, Pipelines & Data Warehousing",
    subServices: [
      { title: "Cloud Data Architecture & Design", slug: "cloud-data-architecture-design" },
      { title: "Data Pipeline Development", slug: "data-pipeline-development" },
      { title: "Data Lake & Warehouse Implementation", slug: "data-lake-warehouse-implementation" },
      { title: "Real-Time Data Processing", slug: "real-time-data-processing" },
      { title: "Data Quality & Observability", slug: "data-quality-observability" },
      { title: "Platform Migration & Modernization", slug: "platform-migration-modernization" }
    ]
  },
  {
    title: "Business Intelligence",
    slug: "business-intelligence",
    href: "/services/business-intelligence",
    icon: BarChart,
    description: "Dashboards, Visualization & Decision Intelligence",
    subServices: [
      { title: "Data Visualization & Dashboards", slug: "data-visualization-dashboards" },
      { title: "Semantic Modeling & Analytics Layer", slug: "semantic-modeling-analytics-layer" },
      { title: "Predictive Analytics & Forecasting", slug: "predictive-analytics-forecasting" },
      { title: "Advanced Analytics Solutions", slug: "advanced-analytics-solutions" },
      { title: "Self-Service BI & Democratization", slug: "self-service-bi-democratization" },
      { title: "Decision Intelligence & Optimization", slug: "decision-intelligence-optimization" }
    ]
  },
  {
    title: "AI & Automation",
    slug: "ai-automation",
    href: "/services/ai-automation",
    icon: Brain,
    description: "Machine Learning, NLP & Intelligent Automation",
    subServices: [
      { title: "AI Strategy & Roadmap", slug: "ai-strategy-roadmap" },
      { title: "Machine Learning Solutions & MLOps", slug: "machine-learning-solutions-mlops" },
      { title: "Natural Language Processing (NLP)", slug: "natural-language-processing-nlp" },
      { title: "Intelligent Process Automation", slug: "intelligent-process-automation" },
      { title: "AI Model Development & Deployment", slug: "ai-model-development-deployment" },
      { title: "AI-Powered Decision Support", slug: "ai-powered-decision-support" }
    ]
  },
  {
    title: "Dedicated Resources",
    slug: "dedicated-resources",
    href: "/services/dedicated-resources",
    icon: Users,
    description: "Staff Augmentation & Offshore Analytics Teams",
    subServices: [
      { title: "Dedicated Data Engineers", slug: "dedicated-data-engineers" },
      { title: "Analytics Engineers & BI Developers", slug: "analytics-engineers-bi-developers" },
      { title: "AI & Machine Learning Engineers", slug: "ai-machine-learning-engineers" },
      { title: "Team Augmentation & Flexible Capacity", slug: "team-augmentation-flexible-capacity" },
      { title: "Offshore Development Centers (ODC)", slug: "offshore-development-centers-odc" },
      { title: "Managed Analytics Services", slug: "managed-analytics-services" }
    ]
  }
];
