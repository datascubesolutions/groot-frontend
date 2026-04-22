// @ts-nocheck
import { BenefitsSection } from "@/components/sections/microsoft/BenefitsSection";
import { CapabilitiesSection } from "@/components/sections/microsoft/CapabilitiesSection";
import { DeliveryTimeline } from "@/components/sections/microsoft/DeliveryTimeline";
import { ExampleSection } from "@/components/sections/microsoft/ExampleSection";
import { FAQSection } from "@/components/sections/microsoft/FAQSection";
import { MicrosoftCTA } from "@/components/sections/microsoft/MicrosoftCTA";
import { AIFoundryHero } from "@/components/sections/microsoft/AIFoundryHero";
import { ProblemSection } from "@/components/sections/microsoft/ProblemSection";
import { AppWindow, Cpu, Eye, Lock, Network, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Azure AI Foundry Development & RAG Implementation | Groot Analytics",
  description:
    "Build production AI with Azure AI Foundry. RAG implementation, AI agents, enterprise architecture. From POC to production.",
  keywords:
    "Azure AI Foundry, RAG implementation, AI agents, enterprise AI, Azure OpenAI",
};

export default function AIFoundryPage() {
  const problems = [
    {
      title: "Demo Day Was Amazing. Then What?",
      description:
        "Your data science team built a proof-of-concept in a Jupyter notebook. The demo impressed everyone. But turning that notebook into a production application requires different infrastructure, different security review, different skills. The prototype sits on a shelf while the business problem remains unsolved.",
    },
    {
      title: "Model Chaos",
      description:
        "Teams are experimenting with GPT-4, Claude, Llama, and fine-tuned models. Nobody knows what's deployed where. There's no central registry, no responsible AI review, no cost visibility. You're not building an AI capability — you're accumulating AI experiments.",
    },
    {
      title: "AI That Doesn't Know Your Business",
      description:
        "Foundation models know general knowledge. They don't know your customers, your products, or your procedures. When you ask about your specific situation, you get generic answers. The gap between AI capability and business utility is filled with custom engineering your team doesn't have time to build.",
    },
  ];

  const benefits = [
    {
      title: "Every Model, One Platform",
      description:
        "Foundry Models includes Azure OpenAI (GPT-4, o1), Anthropic Claude, Meta Llama, Mistral, DeepSeek, and thousands more. Explore, compare, deploy — without separate vendor relationships. One catalog, one API, one billing.",
      icon: <Cpu className="h-7 w-7" />,
    },
    {
      title: "Agent Service for Real Workloads",
      description:
        "Azure AI Agent Service lets you build agents that actually do things. Connect to business systems via 1,400+ connectors. Configure tools and actions. Deploy, scale, monitor. Agents that automate processes, not just chat.",
      icon: <AppWindow className="h-7 w-7" />,
    },
    {
      title: "Ground AI in Your Data",
      description:
        "Foundry IQ provides retrieval-augmented generation powered by Azure AI Search. Index your documents, knowledge bases, and databases. The AI responds with your information, cited with sources. Enterprise RAG without building the infrastructure.",
      icon: <Network className="h-7 w-7" />,
    },
    {
      title: "Observability Built In",
      description:
        "Foundry Observability provides end-to-end monitoring. Latency, throughput, cost, quality metrics. Trace logs of each agent's reasoning steps and tool calls. Know what your AI is doing, why it made decisions, and what it costs.",
      icon: <Eye className="h-7 w-7" />,
    },
    {
      title: "Responsible AI Controls",
      description:
        "Content safety filters. Bias evaluation. Transparency documentation. Built into the platform, not afterthoughts. Your AI applications can meet enterprise governance requirements because the tools exist to make it practical.",
      icon: <ShieldCheck className="h-7 w-7" />,
    },
    {
      title: "Enterprise Scale and Security",
      description:
        "Private endpoints, managed VNets, customer-managed keys. Deploy to 60+ regions. Scale from prototype to production without re-architecting. The security your organization requires, built into the platform.",
      icon: <Lock className="h-7 w-7" />,
    },
  ];

  const capabilities = [
    {
      title: "AI Application Architecture",
      description:
        "We design your AI application — model selection, RAG strategy, agent orchestration, integration patterns. A blueprint that scales from POC to production without rebuilding.",
    },
    {
      title: "RAG Implementation",
      description:
        "We build retrieval-augmented generation applications grounded in your data. Document indexing, embedding strategies, response generation with citations. AI that answers from your knowledge, not general knowledge.",
    },
    {
      title: "Agent Development",
      description:
        "We build agents using Azure AI Agent Service. Conversation design, tool configuration, production deployment. Agents that automate real business processes, integrated with your systems.",
    },
    {
      title: "Fine-Tuning When Needed",
      description:
        "When foundation models need domain-specific accuracy, we fine-tune. Industry terminology, specific output formats, specialized tasks. Better results for your use case.",
    },
    {
      title: "Fabric Integration",
      description:
        "We connect AI Foundry to your Microsoft Fabric data. Agents that query your Lakehouse. ML models that score data. RAG applications grounded in governed datasets. AI and data, unified.",
    },
    {
      title: "Responsible AI Implementation",
      description:
        "Content safety, bias evaluation, transparency. We configure these as part of every implementation. Your AI applications meet governance requirements from day one.",
    },
  ];

  const timeline = [
    {
      phase: "Week 1-2",
      title: "Use Case Definition",
      description:
        "We define objectives and success metrics. We select models. We design RAG strategy and data integration. We establish responsible AI requirements.",
      deliverable: "AI application architecture",
    },
    {
      phase: "Week 3-6",
      title: "Proof of Concept",
      description:
        "We deploy AI Foundry environment. We implement RAG with sample data. We build agent with core capabilities. We validate accuracy.",
      deliverable: "Working POC",
    },
    {
      phase: "Week 7-12",
      title: "Production Development",
      description:
        "We expand data integration. We add tool integrations. We implement observability. We configure security.",
      deliverable: "Production-ready application",
    },
    {
      phase: "Week 13-14",
      title: "Deployment",
      description:
        "We deploy to production. We tune performance and cost. We train operators. We establish improvement process.",
      deliverable: "AI application live",
    },
  ];

  const faqs = [
    {
      question: "AI Foundry vs. Copilot Studio — when do we use which?",
      answer:
        "Copilot Studio is low-code for conversational agents with straightforward knowledge retrieval. AI Foundry is for custom AI applications that need fine-tuned models, complex RAG, or deep system integration. Sometimes you use both.",
    },
    {
      question: "Can we use models besides Azure OpenAI?",
      answer:
        "Yes. Foundry Models includes Anthropic Claude, Meta Llama, Mistral, DeepSeek, and thousands more. Compare models, switch between them, use different models for different tasks.",
    },
    {
      question: "How do we control AI costs?",
      answer:
        "AI Foundry provides cost visibility per project and model. Model router can select cost-efficient models when quality allows. We design cost-aware architectures that balance performance and spend.",
    },
    {
      question: "How does RAG work with private data?",
      answer:
        "Your documents are indexed in Azure AI Search within your tenant. The index retrieves relevant context before calling the model. Your data stays in your environment; it's not used to train models.",
    },
    {
      question: "What about responsible AI and compliance?",
      answer:
        "AI Foundry includes content safety, bias evaluation, and transparency documentation. We configure these as standard. For regulated industries, we ensure compliance requirements are addressed.",
    },
    {
      question: "Does this integrate with our existing Azure?",
      answer:
        "Yes. AI Foundry is an Azure service. It integrates with your VNets, private endpoints, Key Vault, Entra ID, and governance controls. No separate security architecture.",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col">
      <AIFoundryHero />

      <ProblemSection tagline="The prototype graveyard." problems={problems} />

      <BenefitsSection title="What AI Foundry Provides" benefits={benefits} />

      <CapabilitiesSection
        title="What You Actually Get"
        capabilities={capabilities}
      />

      <DeliveryTimeline
        title="Fourteen Weeks to Production AI"
        timeline={timeline}
      />

      <ExampleSection
        title="Service Technician Co-Pilot"
        context="Medical device manufacturer. 400 field service technicians. 10,000+ product documents across PDFs, wikis, and training materials."
        reality="Technicians needed answers about specifications, installation, and troubleshooting. Documentation existed but was scattered and unsearchable. Finding the right information took 15+ minutes per question. First-time fix rates suffered."
        build={[
          "RAG application using AI Foundry and Foundry IQ",
          "Document indexing across all product documentation",
          "Conversational interface for technicians to ask questions",
          "Citation of source documents for every answer",
          "Integration with service ticketing system",
        ]}
        outcome="Answers in seconds instead of 15+ minutes. First-time fix rate improved 22%. Documentation that existed but was inaccessible is now available to the entire field team."
        linkText="See the full story"
        linkUrl="/industries/medical-device-manufacturing"
      />

      <FAQSection faqs={faqs} />

      <MicrosoftCTA
        title="Ready to ship production AI?"
        description="We'll help you define use cases, architect solutions, and deploy AI that creates actual business value."
        primaryCta="Discuss Your AI Project"
        primaryCtaLink="/contact?service=ai-foundry"
      />
    </main>
  );
}
