import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import {
  Bot,
  Brain,
  Cpu,
  MessageSquare,
  Workflow,
  Zap
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "AI & Automation Services | Groot Analytics",
  description: "Build production-ready AI systems and intelligent automation to drive measurable business impact.",
};

export default function AIAutomationPage() {
  return (
    <main className="pt-20">
      <Breadcrumb
        items={[
          { label: "Services", href: "/services" },
          { label: "AI & Automation", href: "/services/ai-automation" }
        ]}
      />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-background border-b border-border overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Artificial Intelligence & Automation
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
            From predictive models to intelligent automation, we build production-ready AI systems that integrate seamlessly into your workflows.
          </p>
          <Button variant="hero" size="lg">Start Building AI</Button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StatCard value="100+" label="ML Models in Production" />
            <StatCard value="40%" label="Operational Efficiency Gain" />
            <StatCard value="24/7" label="Intelligent Automation" />
            <StatCard value="RoI" label="Focused on Impact" />
          </div>
        </div>
      </section>

      {/* Service Grid Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our AI & Automation Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We deliver AI that creates measurable business impact, not just hype.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={Brain}
              title="AI Strategy & Roadmap"
              description="AI maturity assessment, use case identification, and technology stack recommendations for leadership exploring AI."
              href="/services/ai-automation/ai-strategy-roadmap"
            />
            <ServiceCard
              icon={Cpu}
              title="Machine Learning Solutions & MLOps"
              description="Custom ML model development, feature engineering, and MLOps pipelines for CI/CD of machine learning."
              href="/services/ai-automation/machine-learning-solutions-mlops"
            />
            <ServiceCard
              icon={MessageSquare}
              title="Natural Language Processing (NLP)"
              description="Text classification, sentiment analysis, document processing, and conversational AI powered by LLMs."
              href="/services/ai-automation/natural-language-processing-nlp"
            />
            <ServiceCard
              icon={Workflow}
              title="Intelligent Process Automation"
              description="RPA + AI integration, document automation, and workflow intelligence to automate complex business rules."
              href="/services/ai-automation/intelligent-process-automation"
            />
            <ServiceCard
              icon={Bot}
              title="AI Model Development & Deployment"
              description="End-to-end model development and production deployment with a focus on scalability and performance."
              href="/services/ai-automation/ai-model-development-deployment"
            />
            <ServiceCard
              icon={Zap}
              title="AI-Powered Decision Support"
              description="Recommendation engines, next-best-action systems, and AI copilots to augment human decision-making."
              href="/services/ai-automation/ai-powered-decision-support"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Modern AI Built for Production</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <WhyCard
                title="Responsible AI"
                text="We build with ethics, transparency, and governance in mind. No black boxes."
              />
              <WhyCard
                title="Seamless Integration"
                text="Our AI solutions don't sit in silos; they integrate into your existing tools and workflows."
              />
              <WhyCard
                title="Impact First"
                text="We prioritize use cases that deliver the highest ROI and business value."
              />
              <WhyCard
                title="Expertise at Scale"
                text="Our team of AI practitioners has experiences deploying models across diverse industries."
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="bg-primary/5 border border-primary/10 rounded-3xl p-12 text-center md:text-left md:flex items-center justify-between">
            <div className="mb-8 md:mb-0 md:w-2/3">
              <h2 className="text-3xl font-bold mb-4">Ready to Automate with AI?</h2>
              <p className="text-lg text-muted-foreground">
                Let's discuss your automation challenges and how we can solve them with AI.
              </p>
            </div>
            <div className="md:w-1/3 flex justify-center md:justify-end">
              <Button variant="hero" size="lg" className="px-8">
                Consult an AI Expert
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function ServiceCard({ icon: Icon, title, description, href }) {
  return (
    <div className="group p-8 rounded-2xl bg-background border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300">
      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-muted-foreground leading-relaxed mb-6">{description}</p>
      <Link href={href || "#"} className="inline-flex items-center text-primary font-medium hover:underline">
        Learn More <span className="ml-1">→</span>
      </Link>
    </div>
  );
}

function WhyCard({ title, text }) {
  return (
    <div className="p-6">
      <h4 className="text-lg font-bold mb-3">{title}</h4>
      <p className="text-sm text-muted-foreground">{text}</p>
    </div>
  );
}

function StatCard({ value, label }) {
  return (
    <div className="p-6 bg-background rounded-xl border border-border hover:border-primary transition-colors text-center">
      <div className="text-3xl font-bold text-primary mb-2">{value}</div>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  );
}
