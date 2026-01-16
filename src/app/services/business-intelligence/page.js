import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import {
  BarChart3,
  Brain,
  PieChart,
  Sparkles,
  Target,
  TrendingUp
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Business Intelligence & Data Science | Groot Analytics",
  description: "Transform data into actionable insights with interactive dashboards, predictive analytics, and self-service BI.",
};

export default function BusinessIntelligencePage() {
  return (
    <main className="pt-20">
      <Breadcrumb
        items={[
          { label: "Services", href: "/services" },
          { label: "Business Intelligence", href: "/services/business-intelligence" }
        ]}
      />

      <section className="relative min-h-[60vh] flex items-center justify-center bg-background border-b border-border overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Business Intelligence & Data Science
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
            Turn data into insights. Build analytics systems that explain the past, predict the future, and guide decisions.
          </p>
          <Button variant="hero" size="lg">Explore Solutions</Button>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StatCard value="5000+" label="Dashboards Built" />
            <StatCard value="85%" label="User Adoption Rate" />
            <StatCard value="300+" label="Predictive Models" />
            <StatCard value="60%" label="Faster Decision Making" />
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our BI & Data Science Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From interactive dashboards to predictive analytics, we deliver insights that drive action.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={BarChart3}
              title="Enterprise Visualization"
              description="Design intuitive, interactive dashboards using Power BI and Tableau. We turn complex datasets into clear, actionable visual narratives."
              href="/services/business-intelligence/data-visualization-dashboards"
            />
            <ServiceCard
              icon={PieChart}
              title="Modern Data Warehousing"
              description="Build the foundation for BI with Azure Synapse, Amazon Redshift, Google BigQuery, or Snowflake. Centralized, governed, and fast."
              href="/services/business-intelligence/semantic-modeling-analytics-layer"
            />
            <ServiceCard
              icon={TrendingUp}
              title="Predictive Analytics"
              description="Leverage statistical models and machine learning to forecast trends, demand, and customer behavior using Python and SQL."
              href="/services/business-intelligence/predictive-analytics-forecasting"
            />
            <ServiceCard
              icon={Brain}
              title="Advanced Analytics"
              description="Go beyond basic reporting. Implement cohort analysis, attribution modeling, and customer lifetime value calculations."
              href="/services/business-intelligence/advanced-analytics-solutions"
            />
            <ServiceCard
              icon={Sparkles}
              title="Self-Service BI"
              description="Empower teams with governed self-service capabilities. We configure Power BI and Tableau Server for secure, democratized access."
              href="/services/business-intelligence/self-service-bi-democratization"
            />
            <ServiceCard
              icon={Target}
              title="Decision Intelligence"
              description="Integrate analytics directly into business workflows with prescriptive models and automated alerts using modern BI tools."
              href="/services/business-intelligence/decision-intelligence-optimization"
            />
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Why Choose Groot for BI & Analytics?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <WhyCard
                title="User-Centric Design"
                text="We design for the people who will use the dashboards, not just the data scientists."
              />
              <WhyCard
                title="Platform Expertise"
                text="Deep expertise in Power BI, Tableau, Looker, and custom visualization frameworks."
              />
              <WhyCard
                title="Predictive & Prescriptive"
                text="We go beyond descriptive analytics to build models that predict and recommend actions."
              />
              <WhyCard
                title="Adoption Focus"
                text="We don't just build dashboards—we ensure they're used. Training and enablement included."
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="bg-primary/5 border border-primary/10 rounded-3xl p-12 text-center md:text-left md:flex items-center justify-between">
            <div className="mb-8 md:mb-0 md:w-2/3">
              <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Analytics?</h2>
              <p className="text-lg text-muted-foreground">
                Let's discuss how we can help you turn data into actionable insights.
              </p>
            </div>
            <div className="md:w-1/3 flex justify-center md:justify-end">
              <Button variant="hero" size="lg" className="px-8">
                Get Started
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
