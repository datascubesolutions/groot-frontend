import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import {
  Brain,
  Database,
  Search,
  TrendingUp
} from "lucide-react";

export const metadata = {
  title: "Our Work | Groot Analytics",
  description: "Explore our success stories and see how we've helped organizations transform their data capabilities.",
};

const caseStudies = [
  {
    category: "Data Engineering",
    title: "Modernizing a Global Financial Data Lake",
    client: "Tier 1 Investment Bank",
    impact: "99.9% Pipeline Reliability",
    description: "Built a cloud-native data architecture on Azure Databricks processing 5TB+ daily for real-time risk assessment.",
    icon: Database
  },
  {
    category: "AI & Automation",
    title: "Intelligent Inventory Optimization AI",
    client: "Retail Conglomerate",
    impact: "18% Stockout Reduction",
    description: "Deployed custom XGBoost models on Azure ML to predict demand spikes and automate reordering across 200+ locations.",
    icon: Brain
  },
  {
    category: "Strategy & BI",
    title: "Decision Intelligence for PE Integration",
    client: "Leading Private Equity Firm",
    impact: "40% Faster Reporting",
    description: "Designed a unified semantic layer on Snowflake and Power BI dashboards during a complex merger of three major entities.",
    icon: TrendingUp
  }
];

export default function WorkPage() {
  return (
    <main className="pt-20">
      <Breadcrumb
        items={[
          { label: "Our Work", href: "/work" }
        ]}
      />

      <section className="relative min-h-[50vh] flex items-center justify-center bg-background border-b border-border overflow-hidden">
        <div className="container mx-auto px-6 text-center z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Our Success Stories
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10">
            Real problems solved with robust engineering and intelligent systems. Explore our impact across various domains.
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="hero" size="lg">Explore Case Studies</Button>
            <div className="relative group">
              <input type="text" placeholder="Search by industry..." className="h-14 px-6 pr-12 rounded-full border border-border bg-background focus:ring-2 focus:ring-primary outline-none transition-all w-64 group-focus-within:w-80" />
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {caseStudies.map((study, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="aspect-[16/10] bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl border border-border mb-8 overflow-hidden relative flex items-center justify-center p-12">
                  <study.icon size={80} className="text-primary/10 group-hover:scale-110 group-hover:text-primary/20 transition-all duration-500" />
                  <div className="absolute top-6 left-6 px-4 py-1.5 rounded-full bg-background/80 backdrop-blur-md border border-border text-xs font-bold text-primary">{study.category}</div>
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{study.title}</h3>
                <div className="flex gap-4 mb-4">
                  <div className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded">Client: {study.client}</div>
                  <div className="text-xs font-bold text-primary bg-primary/5 px-2 py-1 rounded">Impact: {study.impact}</div>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6 line-clamp-2">{study.description}</p>
                <Link href="#" className="font-bold flex items-center gap-2 text-foreground hover:text-primary transition-colors">
                  Read Full Story <TrendingUp size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Impact CTA */}
      <section className="py-24 bg-muted/20 border-t border-border">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Write Your Success Story?</h2>
          <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
            Join our list of high-impact partners and transform your data into your greatest competitive advantage.
          </p>
          <Button variant="hero" size="lg">Partner With Us</Button>
        </div>
      </section>
    </main>
  );
}

import Link from "next/link";
