import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { BarChart, Brain, Database, TrendingUp, Users } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Our Services | Groot Analytics",
  description: "Comprehensive data engineering, analytics, and AI services to transform your business.",
};

export default function ServicesPage() {
  return (
    <main className="pt-20">
      <Breadcrumb items={[{ label: "Services", href: "/services" }]} />

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We provide end-to-end data capabilities, from strategy to execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={TrendingUp}
              title="Strategy & Advisory"
              description="Define your data vision, build the roadmap, and execute with confidence."
              href="/services/strategy-advisory"
            />
            <ServiceCard
              icon={Database}
              title="Data Engineering"
              description="Build modern cloud data platforms, pipelines, and warehouses."
              href="/services/data-engineering"
            />
            <ServiceCard
              icon={BarChart}
              title="Business Intelligence"
              description="Turn data into insights with dashboards, reporting, and semantic models."
              href="/services/business-intelligence"
            />
            <ServiceCard
              icon={Brain}
              title="AI & Automation"
              description="Deploy production-grade AI, machine learning, and intelligent automation."
              href="/services/ai-automation"
            />
            <ServiceCard
              icon={Users}
              title="Dedicated Resources"
              description="Scale your team with embedded engineers and offshore centers."
              href="/services/dedicated-resources"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

function ServiceCard({ icon: Icon, title, description, href }) {
  return (
    <Link href={href} prefetch={true} className="group">
      <div className="p-8 h-full bg-background rounded-2xl border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300">
        <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
          <Icon size={28} />
        </div>
        <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-muted-foreground mb-6">{description}</p>
        <span className="text-primary font-medium flex items-center gap-2">Explore <span className="group-hover:translate-x-1 transition-transform">→</span></span>
      </div>
    </Link>
  )
}
