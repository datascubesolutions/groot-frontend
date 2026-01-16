import { DecisionMatrix } from "@/components/graphics/DecisionMatrix";
import { ProcessFlow } from "@/components/graphics/ProcessFlow";
import { UniverseNetwork } from "@/components/graphics/UniverseNetwork";
import { WaveMatrix } from "@/components/graphics/WaveMatrix";

export const productData = [
  {
    title: "Multi-Cloud Infrastructure",
    trademark: "",
    description:
      "A resilient, scalable foundation built on Microsoft Azure, AWS, and Google Cloud Platform. We architect secure cloud environments that support enterprise growth and operational agility.",
    features: [
      { title: "Microsoft Azure", description: "Cloud infrastructure, Fabric, and AI Foundry" },
      { title: "AWS", description: "EC2, S3, EMR, and SageMaker ecosystems" },
      { title: "Google Cloud", description: "BigQuery, Dataproc, and Vertex AI" },
      { title: "Hybrid Cloud", description: "Seamless integration across on-prem and cloud" },
      { title: "Security", description: "Enterprise-grade identity and access management" },
      { title: "Cost Optimization", description: "Efficient resource scaling and budget control" },
    ],
    imagePosition: "right",
    bgVariant: "default",
    visualization: <UniverseNetwork />,
  },
  {
    title: "Data Engineering",
    trademark: "",
    description:
      "Robust processing and orchestration pipelines that turn raw chaos into structured assets. Utilizing Apache Spark, Databricks, and Fabric to ensure high-velocity data ingestion and transformation.",
    features: [
      { title: "Processing", description: "Apache Spark, Databricks, and Synapse Analytics" },
      { title: "Orchestration", description: "Apache Airflow, Azure Data Factory, AWS Step Functions" },
      { title: "Transformation", description: "dbt (Data Build Tool) and SQL-based modeling" },
      { title: "Data Lakes", description: "Scalable storage (OneLake, S3, ADLS Gen2)" },
      { title: "Governance", description: "Purview and Stick governance frameworks" },
      { title: "Quality", description: "Great Expectations for automated validation" },
    ],
    imagePosition: "left",
    bgVariant: "muted",
    visualization: <ProcessFlow />,
  },
  {
    title: "AI & Machine Learning",
    trademark: "",
    description:
      "Advanced AI platforms and LLMs that drive intelligent automation. We leverage Microsoft AI Foundry, SageMaker, and Vertex AI to build, train, and deploy cutting-edge models.",
    features: [
      { title: "AI Platforms", description: "Microsoft AI Foundry, Vertex AI, Amazon SageMaker" },
      { title: "GenAI & LLMs", description: "OpenAI GPT-4, Anthropic Claude, Hugging Face" },
      { title: "MLOps", description: "MLflow, Azure ML Pipelines, Vertex AI Pipelines" },
      { title: "Computer Vision", description: "Image recognition and defect detection" },
      { title: "NLP", description: "Text analysis, sentiment, and entity extraction" },
      { title: "Predictive Models", description: "Forecasting, churn prediction, and risk scoring" },
    ],
    imagePosition: "right",
    bgVariant: "default",
    visualization: <WaveMatrix />,
  },
  {
    title: "Business Intelligence",
    trademark: "",
    description:
      "Turning data into visual insights with Power BI, Tableau, and modern data warehousing. We create intuitive dashboards that empower stakeholders to make data-driven decisions.",
    features: [
      { title: "Visualization", description: "Power BI, Tableau, and Looker dashboards" },
      { title: "Data Warehousing", description: "Snowflake, BigQuery, Redshift, Synapse" },
      { title: "Reporting", description: "Automated report delivery and self-service BI" },
      { title: "Real-time Analytics", description: "Live streaming dashboards for ops" },
      { title: "Decision Support", description: "What-if analysis and scenario modeling" },
      { title: "User Adoption", description: "Training and efficient rollout strategies" },
    ],
    imagePosition: "left",
    bgVariant: "muted",
    visualization: <DecisionMatrix />,
  },
];
