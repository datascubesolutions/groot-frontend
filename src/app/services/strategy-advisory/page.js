import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import {
  ClipboardList,
  Map,
  Rocket,
  Search,
  Settings,
  TestTube,
  TrendingUp
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Strategy & Advisory Services | Groot Analytics",
  description: "Transform your business with data-driven strategy and clear execution roadmaps.",
};

export default function StrategyAdvisoryPage() {
  return (
    <main className="pt-20">
      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: "Services", href: "/services" },
          { label: "Strategy & Advisory", href: "/services/strategy-advisory" }
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
            Strategy & Advisory
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
            Transform your business with data-driven strategy. We help you define your vision, build the roadmap, and execute with confidence.
          </p>
          <Button variant="hero" size="lg">
            Start Your Journey
          </Button>
        </div>
      </section>

      {/* Stats/Intro Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 bg-background rounded-xl border border-border hover:border-primary transition-colors">
              <div className="text-3xl font-bold text-primary mb-2">30%</div>
              <p className="text-sm text-muted-foreground">Faster Time-to-Value</p>
            </div>
            <div className="p-6 bg-background rounded-xl border border-border hover:border-primary transition-colors">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <p className="text-sm text-muted-foreground">Vendor Neutrality</p>
            </div>
            <div className="p-6 bg-background rounded-xl border border-border hover:border-primary transition-colors">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <p className="text-sm text-muted-foreground">Strategies Delivered</p>
            </div>
            <div className="p-6 bg-background rounded-xl border border-border hover:border-primary transition-colors">
              <div className="text-3xl font-bold text-primary mb-2">ROI</div>
              <p className="text-sm text-muted-foreground">Focus on Business Value</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content: The Approach */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Not Just Theory. Actionable Plans.</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Most strategies sit on a shelf. Ours are built to be executed. We bridge the gap between high-level business goals and technical implementation.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Whether you're starting from scratch or optimizing an existing stack, we provide the clarity and direction you need to move forward.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">1</div>
                  <div>
                    <h4 className="font-semibold text-foreground">Assess</h4>
                    <p className="text-sm text-muted-foreground">Current State Analysis</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">2</div>
                  <div>
                    <h4 className="font-semibold text-foreground">Define</h4>
                    <p className="text-sm text-muted-foreground">Future Vision & Goals</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">3</div>
                  <div>
                    <h4 className="font-semibold text-foreground">Plan</h4>
                    <p className="text-sm text-muted-foreground">Strategic Roadmap</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">4</div>
                  <div>
                    <h4 className="font-semibold text-foreground">Execute</h4>
                    <p className="text-sm text-muted-foreground">Deliver Value</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 relative">
              {/* Abstract Visual for Strategy */}
              <div className="aspect-square bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl border border-border relative overflow-hidden flex items-center justify-center">
                <TrendingUp className="text-primary w-32 h-32 opacity-20" />
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sub-Services Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Strategy & Advisory Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From initial assessment to full execution, we guide you at every step.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={Map}
              title="Analytics Roadmap & Planning"
              description="Assess your current analytics maturity, define your target state, and create a phased implementation roadmap that prioritizes business value."
              href="/services/strategy-advisory/analytics-roadmap-planning"
            />
            <ServiceCard
              icon={ClipboardList}
              title="Data Strategy Development"
              description="Establish data governance frameworks, define architecture principles, and align data initiatives with business objectives."
              href="/services/strategy-advisory/data-strategy-development"
            />
            <ServiceCard
              icon={Settings}
              title="Platform Strategy & Selection"
              description="Evaluate technology options, design platform architecture, and select vendors based on your needs—not vendor relationships."
              href="/services/strategy-advisory/platform-strategy-selection"
            />
            <ServiceCard
              icon={Search}
              title="AI/ML Feasibility & Assessment"
              description="Evaluate AI readiness, identify high-value use cases, and create realistic implementation plans with measurable ROI."
              href="/services/strategy-advisory/ai-ml-feasibility-assessment"
            />
            <ServiceCard
              icon={TestTube}
              title="Proof of Concept Development"
              description="Validate ideas with rapid prototypes, demonstrate business value, and reduce risk before committing to full-scale development."
              href="/services/strategy-advisory/proof-of-concept-development"
            />
            <ServiceCard
              icon={Rocket}
              title="Digital Transformation Consulting"
              description="End-to-end transformation planning, change management, operating model design, and ongoing advisory support."
              href="/services/strategy-advisory/digital-transformation-consulting"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Groot?</h2>
            <p className="text-muted-foreground">We're not consultants who write reports. We're partners who help you execute.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <WhyCard title="Real-World Experience" text="We've been in your shoes. We know what works, what doesn't, and how to navigate complexity." />
            <WhyCard title="Vendor-Neutral Guidance" text="We're not paid by any technology vendor. Our recommendations are based solely on what's best for you." />
            <WhyCard title="Actionable Roadmaps" text="We don't create shelf-ware. Every strategy comes with clear priorities, timelines, and measurable outcomes." />
            <WhyCard title="Execution Support" text="We can stay with you through implementation, providing ongoing advisory and hands-on support." />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="bg-primary/5 border border-primary/10 rounded-3xl p-12 text-center md:text-left md:flex items-center justify-between">
            <div className="mb-8 md:mb-0 md:w-2/3">
              <h2 className="text-3xl font-bold mb-4">Ready to Define Your Data Strategy?</h2>
              <p className="text-lg text-muted-foreground">
                Let's have a conversation about where you are, where you want to go, and how we can help you get there.
              </p>
            </div>
            <div className="md:w-1/3 flex justify-center md:justify-end">
              <Button variant="hero" size="lg" className="px-8">
                Schedule a Consultation
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
      <p className="text-muted-foreground leading-relaxed mb-6">
        {description}
      </p>
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
  )
}
