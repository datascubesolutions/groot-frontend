import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import {
  BarChart,
  Lightbulb,
  Settings,
  ShieldCheck,
  Target,
  Zap
} from "lucide-react";

export const metadata = {
  title: "Solutions | Groot Analytics",
  description: "End-to-end data and AI solutions tailored to solve specific business problems.",
};

const solutions = [
  {
    title: "Executive Decision Intelligence",
    description: "AI-powered dashboards and automated reporting for leadership teams to make data-backed decisions faster.",
    icon: Lightbulb,
  },
  {
    title: "Customer 360 & Personalization",
    description: "Unified customer data platforms that drive deep personalization across marketing, sales, and support channels.",
    icon: Target,
  },
  {
    title: "Supply Chain & Operations AI",
    description: "Optimize logistics, inventory, and production workflows using predictive analytics and intelligent automation.",
    icon: Settings,
  },
  {
    title: "Financial Governance & Risk",
    description: "Robust data systems for risk assessment, fraud prevention, and regulatory compliance in real-time.",
    icon: ShieldCheck,
  },
  {
    title: "Sales & Growth Analytics",
    description: "Revenue attribution, pipeline forecasting, and churn prediction models to drive sustainable growth.",
    icon: BarChart,
  },
  {
    title: "Self-Service Analytics Engine",
    description: "Governed semantic layers that empower business users to explore data without technical barriers.",
    icon: Zap,
  }
];

export default function SolutionsPage() {
  return (
    <main className="pt-20">
      <Breadcrumb
        items={[
          { label: "Solutions", href: "/solutions" }
        ]}
      />

      <section className="relative min-h-[50vh] flex items-center justify-center bg-background border-b border-border overflow-hidden">
        <div className="container mx-auto px-6 text-center z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Impact-Driven Solutions
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10">
            We don't just build technology. We solve business problems using the power of data and AI.
          </p>
          <Button variant="hero" size="lg">Discuss Your Challenges</Button>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="p-10 rounded-3xl bg-background border border-border hover:border-primary/50 transition-all duration-300 group hover:shadow-2xl">
                <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  <solution.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{solution.title}</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">{solution.description}</p>
                <Button variant="link" className="p-0 text-primary font-bold group-hover:translate-x-2 transition-transform">
                  Learn More <span className="ml-2">→</span>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Teaser */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="bg-background border border-border rounded-[3rem] p-12 md:flex items-center gap-16">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold mb-6">Featured Transformation</div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Reducing Supply Chain Costs by 22%</h2>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                Discover how we implemented a real-time predictive logistics platform for a global manufacturing leader, resulting in millions of dollars in annual savings.
              </p>
              <Button variant="hero" size="lg">Read Case Study</Button>
            </div>
            <div className="md:w-1/2 aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-[2rem] border border-border flex items-center justify-center">
              <BarChart size={100} className="text-primary/10" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
