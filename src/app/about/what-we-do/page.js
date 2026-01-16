import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { BarChart, Brain, Database, TrendingUp, Users } from "lucide-react";

export const metadata = {
  title: "What We Do | Groot Analytics",
  description: "Discover our comprehensive data analytics, engineering, and AI services.",
};

export default function WhatWeDoPage() {
  return (
    <main className="pt-20">
      <Breadcrumb
        items={[
          { label: "About Us", href: "/about" },
          { label: "What We Do", href: "/about/what-we-do" }
        ]}
      />

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">What We Do</h1>
            <p className="text-xl text-muted-foreground mb-16 leading-relaxed">
              We build data systems that drive decisions. From strategy to execution, from pipelines to predictions,
              we deliver end-to-end analytics solutions.
            </p>

            <div className="space-y-12">
              <ServiceSection
                icon={TrendingUp}
                title="Strategy & Advisory"
                description="We help you define where you're going. Analytics roadmaps, multi-cloud strategy (Azure/AWS/GCP), and platform selection—grounded in business value."
                link="/services/strategy-advisory"
              />

              <ServiceSection
                icon={Database}
                title="Data Engineering & Modern Platforms"
                description="We build the foundation: Lakehouse architectures on Databricks/OneLake, dbt pipelines, and real-time streaming with Kafka and Spark."
                link="/services/data-engineering"
              />

              <ServiceSection
                icon={BarChart}
                title="Business Intelligence & Data Science"
                description="We turn data into insights: Power BI & Tableau dashboards, semantic layers, and predictive forecasting models that people actually use."
                link="/services/business-intelligence"
              />

              <ServiceSection
                icon={Brain}
                title="Artificial Intelligence & Automation"
                description="We build production-ready AI: LLM apps with Azure OpenAI, MLOps with MLflow, and intelligent automation that creates measurable impact."
                link="/services/ai-automation"
              />

              <ServiceSection
                icon={Users}
                title="Dedicated & Offshore Resources"
                description="We scale your team: embedded data engineers, analytics specialists, AI practitioners, offshore development centers, and managed services—flexible capacity when you need it."
                link="/services/dedicated-resources"
              />
            </div>

            <div className="mt-16 bg-muted/30 rounded-2xl p-12">
              <h2 className="text-3xl font-bold mb-4">How We're Different</h2>
              <ul className="space-y-4 text-lg text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>We're engineers who write code, not consultants who write PowerPoints</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>We're vendor-neutral—our recommendations are based on your needs, not commissions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>We stay with you through implementation, not just strategy</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>We measure success by business outcomes, not technical metrics</span>
                </li>
              </ul>
            </div>

            <div className="mt-16 text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Let's discuss your data challenges and how we can help.
              </p>
              <Button variant="hero" size="lg">Schedule a Consultation</Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function ServiceSection({ icon: Icon, title, description, link }) {
  return (
    <div className="flex gap-6 items-start group">
      <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
        <Icon className="text-primary" size={32} />
      </div>
      <div className="flex-1">
        <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-muted-foreground mb-4 leading-relaxed">{description}</p>
        <a href={link} className="text-primary font-medium hover:underline inline-flex items-center gap-2">
          Learn More <span>→</span>
        </a>
      </div>
    </div>
  );
}
