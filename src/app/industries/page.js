import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import {
  Building2,
  Cpu,
  Factory,
  Globe2,
  ShoppingCart,
  Stethoscope
} from "lucide-react";

export const metadata = {
  title: "Industries | Groot Analytics",
  description: "Specialized analytics and AI solutions across Financial Services, Manufacturing, Healthcare, Retail, and Technology.",
};

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
          <Button variant="hero" size="lg">Consult Your Industry Expert</Button>
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
