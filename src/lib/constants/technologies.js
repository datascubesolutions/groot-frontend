import {
  Activity,
  BarChart,
  Brain,
  Cloud,
  Code2,
  Database,
  Network,
  ShieldCheck,
  Terminal,
  Users
} from "lucide-react";

export const TECH_STACK = [
  {
    id: "core",
    label: "Core Platform",
    icon: Cloud,
    description: "Multi-cloud infrastructure and services providing the foundation for scalable solutions.",
    subcategories: [
      {
        name: "Microsoft Azure",
        items: [
          { name: "Microsoft Azure", description: "Cloud infrastructure and services" },
          { name: "Microsoft Fabric", description: "Unified analytics platform" },
          { name: "Azure Databricks", description: "Data engineering and analytics" },
          { name: "Microsoft AI Foundry", description: "AI development and deployment" }
        ]
      },
      {
        name: "Amazon Web Services (AWS)",
        items: [
          { name: "AWS", description: "Cloud infrastructure and services" },
          { name: "AWS Glue", description: "Serverless data integration" },
          { name: "Amazon EMR", description: "Big data platform" },
          { name: "Amazon SageMaker", description: "ML platform" }
        ]
      },
      {
        name: "Google Cloud Platform (GCP)",
        items: [
          { name: "Google Cloud", description: "Cloud infrastructure and services" },
          { name: "BigQuery", description: "Serverless analytics" },
          { name: "Dataproc", description: "Managed Spark and Hadoop" },
          { name: "Vertex AI", description: "ML platform" }
        ]
      }
    ]
  },
  {
    id: "data-engineering",
    label: "Data Engineering",
    icon: Code2,
    description: "Robust data processing, orchestration, and transformation at scale.",
    subcategories: [
      {
        name: "Processing & Orchestration",
        items: [
          { name: "Apache Spark", description: "Large-scale data processing" },
          { name: "Apache Airflow", description: "Workflow automation" },
          { name: "dbt", description: "Data transformation" }
        ]
      },
      {
        name: "Cloud Data Services",
        items: [
          { name: "Azure Data Factory", description: "ETL/ELT orchestration" },
          { name: "Azure Databricks", description: "Unified analytics" },
          { name: "AWS Glue", description: "Serverless ETL" },
          { name: "Amazon EMR", description: "Big data processing" },
          { name: "AWS Step Functions", description: "Workflow orchestration" },
          { name: "Cloud Dataflow", description: "Stream and batch processing" },
          { name: "Cloud Composer", description: "Managed Apache Airflow" },
          { name: "Dataproc", description: "Managed Spark and Hadoop" }
        ]
      },
      {
        name: "Programming Languages",
        items: [
          { name: "Python", description: "Primary development language" },
          { name: "SQL", description: "Data querying and analysis" },
          { name: "PySpark", description: "Python + Spark integration" }
        ]
      }
    ]
  },
  {
    id: "bi-analytics",
    label: "BI & Analytics",
    icon: BarChart,
    description: "Advanced visualization, reporting, and enterprise data warehousing.",
    subcategories: [
      {
        name: "Visualization & Reporting",
        items: [
          { name: "Power BI", description: "Business intelligence and dashboards" },
          { name: "Tableau", description: "Advanced data visualization" }
        ]
      },
      {
        name: "Data Warehousing",
        items: [
          { name: "Azure Synapse Analytics", description: "Enterprise data warehouse" },
          { name: "Amazon Redshift", description: "Cloud data warehouse" },
          { name: "Google BigQuery", description: "Serverless analytics" },
          { name: "Snowflake", description: "Cloud data platform" }
        ]
      }
    ]
  },
  {
    id: "ai-ml",
    label: "AI & Machine Learning",
    icon: Brain,
    description: "Cutting-edge AI platforms, frameworks, and MLOps for intelligent solutions.",
    subcategories: [
      {
        name: "AI Platforms",
        items: [
          { name: "Microsoft AI Foundry", description: "Enterprise AI development" },
          { name: "Azure OpenAI Service", description: "GPT models and AI services" },
          { name: "Azure Machine Learning", description: "ML model development" },
          { name: "Azure Cognitive Services", description: "Pre-built AI services" },
          { name: "Amazon SageMaker", description: "End-to-end ML platform" },
          { name: "Amazon Bedrock", description: "Foundation models service" },
          { name: "AWS AI Services", description: "Pre-built AI capabilities" },
          { name: "Vertex AI", description: "Unified ML platform" },
          { name: "Google AI Studio", description: "AI model development" }
        ]
      },
      {
        name: "ML Frameworks",
        items: [
          { name: "TensorFlow", description: "Deep learning" },
          { name: "PyTorch", description: "Machine learning research" },
          { name: "Scikit-learn", description: "Classical ML algorithms" },
          { name: "XGBoost", description: "Gradient boosting" }
        ]
      },
      {
        name: "NLP & GenAI",
        items: [
          { name: "OpenAI API", description: "GPT models for text generation" },
          { name: "Anthropic Claude API", description: "Advanced language models" },
          { name: "Hugging Face", description: "Pre-trained NLP models" },
          { name: "Azure Cognitive Services", description: "Speech, vision, language AI" },
          { name: "Amazon Comprehend", description: "Natural language processing" },
          { name: "Google Cloud Natural Language", description: "Text analysis and NLP" }
        ]
      },
      {
        name: "MLOps",
        items: [
          { name: "MLflow", description: "ML lifecycle management" },
          { name: "Azure ML Pipelines", description: "Automated ML workflows" },
          { name: "SageMaker Pipelines", description: "ML workflow automation" },
          { name: "Vertex AI Pipelines", description: "ML orchestration" }
        ]
      }
    ]
  },
  {
    id: "storage-databases",
    label: "Storage & Databases",
    icon: Database,
    description: "Scalable databases and high-performance storage solutions.",
    subcategories: [
      {
        name: "Databases",
        items: [
          { name: "PostgreSQL", description: "Relational database" },
          { name: "Microsoft SQL Server", description: "Enterprise database" },
          { name: "MongoDB", description: "NoSQL database" },
          { name: "Redis", description: "In-memory cache" }
        ]
      }
    ]
  },
  {
    id: "devops-infra",
    label: "DevOps & Infrastructure",
    icon: Terminal,
    description: "Streamlined deployment, orchestration, and infrastructure as code.",
    subcategories: [
      {
        name: "Deployment & Orchestration",
        items: [
          { name: "Docker", description: "Containerization" },
          { name: "Kubernetes", description: "Container orchestration" },
          { name: "Terraform", description: "Infrastructure as code" },
          { name: "GitHub Actions", description: "CI/CD automation" }
        ]
      },
      {
        name: "Cloud-Native DevOps",
        items: [
          { name: "Azure Kubernetes (AKS)", description: "Managed Kubernetes" },
          { name: "Azure Container Instances", description: "Serverless containers" },
          { name: "Azure DevOps", description: "CI/CD pipelines" },
          { name: "Amazon EKS", description: "Elastic Kubernetes Service" },
          { name: "AWS Fargate", description: "Serverless containers" },
          { name: "AWS CodePipeline", description: "CI/CD service" },
          { name: "Google Kubernetes (GKE)", description: "Managed Kubernetes" },
          { name: "Cloud Run", description: "Serverless containers" },
          { name: "Cloud Build", description: "CI/CD platform" }
        ]
      },
      {
        name: "Version Control",
        items: [
          { name: "Git", description: "Version control system" },
          { name: "GitHub", description: "Source code management" }
        ]
      }
    ]
  },
  {
    id: "quality-governance",
    label: "Quality & Governance",
    icon: ShieldCheck,
    description: "Ensuring data integrity, compliance, and comprehensive governance.",
    subcategories: [
      {
        name: "Quality & Governance",
        items: [
          { name: "Great Expectations", description: "Data validation and testing" },
          { name: "dbt tests", description: "Data quality checks" },
          { name: "Azure Purview", description: "Data governance and discovery" },
          { name: "AWS Glue Data Catalog", description: "Metadata management" },
          { name: "Google Cloud Data Catalog", description: "Metadata discovery" }
        ]
      }
    ]
  },
  {
    id: "apis-monitoring",
    label: "APIs & Integration",
    icon: Network,
    description: "Seamless integration and modern API management.",
    subcategories: [
      {
        name: "APIs & Integration",
        items: [
          { name: "FastAPI", description: "Modern Python API framework" },
          { name: "Apache Kafka", description: "Event streaming" },
          { name: "Azure API Management", description: "API gateway" },
          { name: "Amazon API Gateway", description: "Managed API service" },
          { name: "Google Cloud API Gateway", description: "API management" }
        ]
      }
    ]
  },
  {
    id: "monitoring-observability",
    label: "Monitoring",
    icon: Activity,
    description: "Full-stack observability and performance monitoring.",
    subcategories: [
      {
        name: "Monitoring & Observability",
        items: [
          { name: "Datadog", description: "Application performance monitoring" },
          { name: "Grafana", description: "Metrics visualization" },
          { name: "Azure Monitor", description: "Cloud monitoring" },
          { name: "Amazon CloudWatch", description: "AWS monitoring and logging" },
          { name: "Google Cloud Monitoring", description: "Infrastructure monitoring" }
        ]
      }
    ]
  },
  {
    id: "collaboration",
    label: "Collaboration",
    icon: Users,
    description: "Tools for effective project management and team communication.",
    subcategories: [
      {
        name: "Collaboration Tools",
        items: [
          { name: "Jira", description: "Project management" },
          { name: "Confluence", description: "Documentation" },
          { name: "Slack", description: "Team communication" }
        ]
      }
    ]
  }
];
