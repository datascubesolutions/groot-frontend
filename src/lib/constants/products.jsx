import { DecisionMatrix } from "@/components/graphics/DecisionMatrix";
import { ProcessFlow } from "@/components/graphics/ProcessFlow";
import { UniverseNetwork } from "@/components/graphics/UniverseNetwork";
import { WaveMatrix } from "@/components/graphics/WaveMatrix";

export const productData = [
  {
    title: "QuantumDNA",
    trademark: "™",
    description:
      "QuantumDNA™ follows an iterative approach to encode intelligence about business problems. The three strands that constitute QuantumDNA are Design, Representation, and Hypothesis - working together to create a comprehensive problem definition framework.",
    features: [
      { title: "Define", description: "Express problems clearly, setting the right path for data selection and analytical solution design" },
      { title: "Standardize", description: "Depict business problems in an organized manner using proven templates" },
      { title: "Knowledge Management", description: "Build a knowledge repository for the organization through reusable templates" },
      { title: "Represent", description: "Denote problems correctly, enabling transparent and actionable solutions" },
      { title: "Communicate", description: "Facilitate impactful interactions across multiple stakeholders" },
      { title: "Collaborate", description: "Allow multiple stakeholders to team up via a common language" },
    ],
    imagePosition: "right",
    bgVariant: "default",
    visualization: <ProcessFlow />,
  },
  {
    title: "NexusOBI",
    trademark: "™",
    description:
      "NexusOBI™ helps establish clarity of purpose with all stakeholders in the process and charts a course towards realizing measurable outcomes and transformative change. It facilitates alignment on Outcomes, shared business Behaviors, and Insights.",
    features: [
      { title: "Clarity", description: "Establish clarity of purpose with all stakeholders in the process" },
      { title: "Plan", description: "Facilitates a decision design process that backs into desired outcomes" },
      { title: "Collaborate", description: "Identify correct business priorities by collaborating with stakeholders" },
      { title: "Measure", description: "Track progress with quantifiable metrics and KPIs" },
      { title: "Transform", description: "Drive systematic transformation through phased implementation" },
      { title: "Align", description: "Ensure all teams are working toward common objectives" },
    ],
    imagePosition: "left",
    bgVariant: "muted",
    visualization: <WaveMatrix />,
  },
  {
    title: "UniverseMap",
    trademark: "™",
    description:
      "A platform built to help businesses see the complexity of their venture by displaying the business as a system with many interconnected problems while pursuing simplicity. Visualize relationships and identify leverage points.",
    features: [
      { title: "Plan", description: "Drive a more holistic perspective to problem solving, allowing better insights" },
      { title: "De-risk", description: "Build better governance models by eliminating blind spots" },
      { title: "Engage", description: "Allow stakeholders to have shared understanding around organizational issues" },
      { title: "Prioritize", description: "Align on major initiatives and identify areas with non-linear returns" },
      { title: "Investigate", description: "Evaluate relationship strength between problems to anticipate impacts" },
      { title: "Discover", description: "Identify new opportunities powered by data and analytics" },
    ],
    imagePosition: "right",
    bgVariant: "default",
    visualization: <UniverseNetwork />,
  },
  {
    title: "DecisionFlow",
    trademark: "™",
    description:
      "DecisionFlow™ helps organizations overcome bias towards just creating analytics by harmonizing creation and consumption. It tracks the progress of business problems across the decision supply chain for maximum impact.",
    features: [
      { title: "Optimize", description: "Keep track of the progress of each problem through the decision cycle" },
      { title: "Accountability", description: "Drive accountability across all stakeholders involved" },
      { title: "Identify Bottlenecks", description: "Proactively spot and address process bottlenecks" },
      { title: "Resolve Conflicts", description: "Identify and resolve conflicting priorities efficiently" },
      { title: "Measure Impact", description: "Quantify the business impact of analytics initiatives" },
      { title: "Scale", description: "Systematically scale successful solutions across the organization" },
    ],
    imagePosition: "left",
    bgVariant: "muted",
    visualization: <DecisionMatrix />,
  },
];
