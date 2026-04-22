// @ts-nocheck
import { BenefitsSection } from "@/components/sections/microsoft/BenefitsSection";
import { CapabilitiesSection } from "@/components/sections/microsoft/CapabilitiesSection";
import { DeliveryTimeline } from "@/components/sections/microsoft/DeliveryTimeline";
import { ExampleSection } from "@/components/sections/microsoft/ExampleSection";
import { FAQSection } from "@/components/sections/microsoft/FAQSection";
import { MicrosoftCTA } from "@/components/sections/microsoft/MicrosoftCTA";
import { CopilotHero } from "@/components/sections/microsoft/CopilotHero";
import { ProblemSection } from "@/components/sections/microsoft/ProblemSection";
import {
  AppWindow,
  Bot,
  Layers,
  Lock,
  PlayCircle,
  ShieldAlert,
} from "lucide-react";

export const metadata = {
  title: "Microsoft Copilot Deployment & Custom Agents | Groot Analytics",
  description:
    "Deploy Microsoft Copilot for adoption, not shelfware. M365 Copilot enablement, Copilot Studio agents, readiness assessments. 100+ rollouts.",
  keywords:
    "Microsoft Copilot deployment, Copilot Studio agents, M365 Copilot implementation, Copilot readiness, AI adoption",
};

export default function CopilotPage() {
  const problems = [
    {
      title: "Licenses Without Adoption",
      description:
        "Leadership saw the demo. IT bought the licenses. Three months later, usage is flat. Employees tried it once, got generic responses, and went back to their old workflows. The AI investment isn't failing — it's stalling.",
    },
    {
      title: "Generic Answers, Specific Problems",
      description:
        "You ask Copilot about your company's return policy. It gives you a Wikipedia-quality summary of return policies in general. It doesn't know your products, your processes, or your exceptions. Without your business context, it's just another chatbot.",
    },
    {
      title: "Security Concerns Freeze Progress",
      description:
        "Legal wants to know what data Copilot accesses. IT can't explain it clearly. Compliance worries about sensitive data exposure. Nobody moves forward because nobody's sure about the risks. The AI conversation becomes a governance debate.",
    },
  ];

  const benefits = [
    {
      title: "Works Where You Work",
      description:
        "Copilot inside Word drafts documents. Copilot in Excel analyzes data. Copilot in Teams summarizes meetings. Copilot in Outlook handles email. It's not a new app to learn — it's AI embedded in tools people already use daily.",
      icon: <AppWindow className="h-7 w-7" />,
    },
    {
      title: "Knows Your Organization",
      description:
        'Microsoft 365 Copilot uses Microsoft Graph to access your emails, files, chats, and meetings. When you ask "what did we decide about the Phoenix project?" — it searches your actual conversations, not the internet.',
      icon: <Layers className="h-7 w-7" />,
    },
    {
      title: "Respects Your Permissions",
      description:
        "Copilot only accesses data users already have permission to see. Sensitivity labels apply. Compliance policies apply. It doesn't create new access risks — but it does make existing oversharing more visible.",
      icon: <Lock className="h-7 w-7" />,
    },
    {
      title: "Custom Agents for Your Workflows",
      description:
        "Copilot Studio lets you build agents for specific tasks. IT helpdesk. HR policy lookup. Customer service. Connect them to your data sources, configure the conversation flow, deploy to Teams or your website.",
      icon: <Bot className="h-7 w-7" />,
    },
    {
      title: "Automation, Not Just Chat",
      description:
        "Agents can trigger on events, not just conversations. An email arrives, the agent processes it, takes action. Automate intake, triage, and routine responses. Free up your team for work that requires human judgment.",
      icon: <PlayCircle className="h-7 w-7" />,
    },
    {
      title: "Enterprise Security by Design",
      description:
        "Your prompts and outputs don't train Microsoft's models. Data stays in your tenant. Enterprise data protection (EDP) applies. Copilot is designed for enterprise, not bolted onto consumer AI.",
      icon: <ShieldAlert className="h-7 w-7" />,
    },
  ];

  const capabilities = [
    {
      title: "Readiness Assessment",
      description:
        "We audit your M365 environment for Copilot. Permission sprawl, oversharing risks, governance gaps. You need to fix these before rollout, not after someone surfaces sensitive data they shouldn't see.",
    },
    {
      title: "Environment Preparation",
      description:
        "We remediate oversharing. We configure sensitivity labels. We set up Copilot licensing and policies. We prepare SharePoint sites as knowledge sources. Proper setup so Copilot works on day one.",
    },
    {
      title: "Custom Agent Development",
      description:
        "We build agents in Copilot Studio. IT support bots, HR FAQ assistants, customer-facing agents. Connected to your knowledge sources, configured with your logic, deployed where your users are.",
    },
    {
      title: "Knowledge Source Integration",
      description:
        "We connect Copilot to your information — SharePoint sites, internal wikis, product databases, policy documents. Agents answer with your content, not generic responses.",
    },
    {
      title: "Use Case Prioritization",
      description:
        "Not every task benefits equally from Copilot. We work with your teams to identify high-value use cases. Meeting summarization for executives. Email drafting for sales. Document creation for legal. Targeted deployment, measurable outcomes.",
    },
    {
      title: "Adoption Program",
      description:
        "Training on effective prompting. Champions who model usage and help peers. Measurement of adoption metrics. The goal is behavior change, not just deployment.",
    },
  ];

  const timeline = [
    {
      phase: "Week 1-2",
      title: "Readiness Assessment",
      description:
        "We audit your M365 environment. We identify permission gaps. We review compliance requirements. We prioritize use cases by role.",
      deliverable: "Readiness report and remediation plan",
    },
    {
      phase: "Week 3-4",
      title: "Environment Preparation",
      description:
        "We fix oversharing. We configure sensitivity labels. We set up Copilot licensing. We prepare knowledge sources.",
      deliverable: "Environment ready for deployment",
    },
    {
      phase: "Week 5-6",
      title: "Pilot",
      description:
        "We deploy to 25-50 pilot users. We train on effective prompting. We collect feedback. We iterate on use cases.",
      deliverable: "Validated patterns and adoption baseline",
    },
    {
      phase: "Week 7-10",
      title: "Broad Rollout",
      description:
        "We expand to additional groups. We launch the champions program. We build first custom agents if scoped. We establish measurement.",
      deliverable: "Organization-wide adoption",
    },
  ];

  const faqs = [
    {
      question: "M365 Copilot vs. Copilot Studio — what's the difference?",
      answer:
        "M365 Copilot is AI assistance in Word, Excel, Teams, Outlook, etc. Per-user licensing. Copilot Studio is a platform for building custom agents. Pay-as-you-go based on usage. Different purposes, different pricing.",
    },
    {
      question: "What data can Copilot access?",
      answer:
        "Whatever the user can already access via M365 permissions. Copilot doesn't grant new access — it makes existing access more visible. That's why permission hygiene matters before deployment.",
    },
    {
      question: "How do we prove ROI?",
      answer:
        "Microsoft provides Copilot analytics for adoption metrics. We help you define business outcomes — time saved on specific tasks, documents created faster, meetings summarized. Compare to baseline. ROI becomes defensible.",
    },
    {
      question: "Can we build agents without developers?",
      answer:
        "Yes. Copilot Studio is low-code. You describe what the agent should do, connect knowledge sources, configure flows visually. Complex integrations may need developer involvement, but many agents don't.",
    },
    {
      question: "What about compliance (HIPAA, GDPR)?",
      answer:
        "Copilot inherits your M365 compliance posture. Sensitivity labels, retention policies, data residency. For regulated industries, we ensure configuration meets requirements before deployment.",
    },
    {
      question: "How long until people actually use it?",
      answer:
        "Users who learn effective prompting see value immediately. Organizational transformation — where Copilot changes how teams work — takes 3-6 months. Champions programs accelerate adoption.",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col">
      <CopilotHero />

      <ProblemSection tagline="The AI gap." problems={problems} />

      <BenefitsSection title="What Copilot Actually Does" benefits={benefits} />

      <CapabilitiesSection
        title="What You Actually Get"
        capabilities={capabilities}
      />

      <DeliveryTimeline
        title="Ten Weeks from Licenses to Adoption"
        timeline={timeline}
      />

      <ExampleSection
        title="Field Service Transformation"
        context="Fire protection contractor. 180 employees, mostly field-based. Project managers on job sites. Service techs in trucks. Small office staff."
        reality="PMs spent 2+ hours weekly writing status reports. Field techs called the office for information that existed in SharePoint but was impossible to find. Leadership wanted AI but worried about subcontractors accessing sensitive bid data."
        build={[
          "M365 Copilot deployment with permission boundaries between internal staff and subcontractors",
          "SharePoint site for company policies configured as Copilot knowledge source",
          "Custom agent in Copilot Studio for project status lookup (connects to project system)",
          "Training program for PMs on Teams meeting summarization and email drafting",
        ]}
        outcome="PMs save 2+ hours weekly. Field techs get answers via the agent instead of calling the office. Subcontractors have Copilot access but only see data appropriate to their projects."
        linkText="See our AI approach"
        linkUrl="/services/production-grade-ai"
      />

      <FAQSection faqs={faqs} />

      <MicrosoftCTA
        title="Ready to deploy AI that sticks?"
        description="We'll assess your environment, prioritize use cases, and build a rollout plan designed for adoption — not shelfware."
        primaryCta="Get a Copilot Readiness Assessment"
        primaryCtaLink="/contact?service=copilot-assessment"
      />
    </main>
  );
}
