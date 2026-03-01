import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import {
  Brain,
  Building2,
  Cpu,
  Database,
  Factory,
  Globe2,
  Search,
  ShoppingCart,
  Stethoscope,
  TrendingUp
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Industries & Our Work | Groot Analytics",
  description: "Specialized analytics and AI solutions across Financial Services, Manufacturing, Healthcare, Retail, and Technology. Explore our success stories and case studies.",
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

const industries = [
  {
    icon: Building2,
    title: "Financial Services",
    description: "Risk modeling, fraud detection, and regulatory compliance solutions for banking, insurance, and fintech.",
    points: ["Real-time Risk Dashboards", "Fraud Detection Systems", "Customer Churn Prediction", "Portfolio Optimization"]
  },
  {
    icon: Factory,
    title: "Manufacturing & Supply Chain",
    description: "Optimize operations with predictive maintenance, demand forecasting, and inventory intelligence.",
    points: ["Predictive Maintenance", "Demand Forecasting", "Supply Chain Observability", "Quality Control AI"]
  },
  {
    icon: Stethoscope,
    title: "Healthcare",
    description: "Improving patient outcomes and operational efficiency through advanced data analytics and governance.",
    points: ["Patient Outcome Analytics", "Revenue Cycle Management", "Population Health Management", "Clinical Data Lakes"]
  },
  {
    icon: ShoppingCart,
    title: "Retail & E-commerce",
    description: "Personalize customer experiences and optimize pricing through data-driven insights and AI.",
    points: ["Personalization Engines", "Dynamic Pricing Models", "Inventory Optimization", "Market Basket Analysis"]
  },
  {
    icon: Globe2,
    title: "Logistics & Transport",
    description: "Route optimization and real-time tracking systems to drive efficiency in global logistics.",
    points: ["Route Optimization", "Fleet Health Monitoring", "Dynamic ETA systems", "Cost Benchmarking"]
  },
  {
    icon: Cpu,
    title: "Technology & SaaS",
    description: "Scalable analytics platforms for modern software companies to drive growth and product adoption.",
    points: ["Product Usage Analytics", "SaaS KPI Frameworks", "Customer Success Scoring", "Growth Attribution"]
  }
];

export default function IndustriesPage() {
  return (
    <main className="pt-20">
      <Breadcrumb
        items={[
          { label: "Industries", href: "/industries" }
        ]}
      />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-background border-b border-border overflow-hidden">
        <div className="container mx-auto px-6 text-center z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Industries We Serve
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10">
            Deep domain expertise combined with advanced analytics to solve industry-specific complex challenges.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 items-center">
            <Button variant="hero" size="lg">Consult Your Industry Expert</Button>
            <div className="relative group">
              <input type="text" placeholder="Search by industry..." className="h-14 px-6 pr-12 rounded-full border border-border bg-background focus:ring-2 focus:ring-primary outline-none transition-all w-64 group-focus-within:w-80" />
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies - Our Work */}
      <section id="our-work" className="py-24 bg-muted/10 border-y border-border">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Success Stories</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real problems solved with robust engineering and intelligent systems. Explore our impact across various domains.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {caseStudies.map((study, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="aspect-[16/10] bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl border border-border mb-8 overflow-hidden relative flex items-center justify-center p-12">
                  <study.icon size={80} className="text-primary/10 group-hover:scale-110 group-hover:text-primary/20 transition-all duration-500" />
                  <div className="absolute top-6 left-6 px-4 py-1.5 rounded-full bg-background/80 backdrop-blur-md border border-border text-xs font-bold text-primary">{study.category}</div>
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{study.title}</h3>
                <div className="flex gap-4 mb-4 flex-wrap">
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
          <div className="text-center mt-12">
            <Link href="/contact">
              <Button variant="hero" size="lg">Partner With Us</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Industry Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="p-8 rounded-3xl bg-background border border-border hover:border-primary/50 transition-all duration-300 group shadow-sm hover:shadow-xl">
                <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  <industry.icon size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{industry.title}</h3>
                <p className="text-muted-foreground mb-6 text-sm">{industry.description}</p>
                <ul className="space-y-2 mb-8 border-t border-border pt-6">
                  {industry.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-center gap-2 text-sm text-foreground/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {point}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full">Explore {industry.title}</Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary/5">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Don't See Your Industry?</h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            While we specialize in the sectors above, our analytics foundation is universal. Let's talk about how we can adapt our approach to your specific market.
          </p>
          <Button variant="hero" size="lg">Get in Touch</Button>
        </div>
      </section>
    </main>
  );
}
