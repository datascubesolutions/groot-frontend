import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { Shield, Target, Users, Zap } from "lucide-react";

export const metadata = {
  title: "How We Do It | Groot Analytics",
  description: "Our proven methodology for delivering data and analytics solutions.",
};

export default function HowWeDoItPage() {
  return (
    <main className="pt-20">
      <Breadcrumb
        items={[
          { label: "About Us", href: "/about" },
          { label: "How We Do It", href: "/about/how-we-do-it" }
        ]}
      />

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">How We Do It</h1>
            <p className="text-xl text-muted-foreground mb-16 leading-relaxed">
              Our methodology is simple: understand the problem, design the right solution, build it well, and ensure it delivers value.
            </p>

            {/* Methodology Steps */}
            <div className="space-y-12 mb-16">
              <MethodologyStep
                number="01"
                title="Discovery & Assessment"
                description="We start by understanding your business, not your technology. What decisions do you need to make? What's blocking you? Where's the biggest opportunity? We assess your current state, identify gaps, and prioritize based on business impact."
              />

              <MethodologyStep
                number="02"
                title="Strategy & Design"
                description="We design solutions that fit your context—your team, your budget, your timeline. No cookie-cutter approaches. We create detailed roadmaps with clear milestones, success criteria, and realistic timelines."
              />

              <MethodologyStep
                number="03"
                title="Agile Execution"
                description="We build in sprints, delivering working solutions incrementally. You see progress every 2-3 weeks, not after 6 months. We adapt as we learn, keeping you involved at every step."
              />

              <MethodologyStep
                number="04"
                title="Quality & Governance"
                description="We build quality in from day one: automated testing, data validation, observability, documentation. Governance isn't an afterthought—it's baked into the architecture."
              />

              <MethodologyStep
                number="05"
                title="Enablement & Handoff"
                description="We don't just build and leave. We train your team, document everything, and ensure you can maintain and evolve the solution. Knowledge transfer is part of every engagement."
              />

              <MethodologyStep
                number="06"
                title="Continuous Support"
                description="We're here for the long term. Whether it's ongoing managed services, periodic optimization, or just being available when you need us—we're your partner, not a vendor."
              />
            </div>

            {/* Principles */}
            <div className="bg-muted/30 rounded-2xl p-12 mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center">Our Core Principles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <PrincipleCard
                  icon={Target}
                  title="Business Value First"
                  description="Every technical decision must tie back to business outcomes. If it doesn't create value, we don't build it."
                />
                <PrincipleCard
                  icon={Users}
                  title="People-Centric Design"
                  description="Technology serves people. We design for the humans who will use the system, not just the data scientists."
                />
                <PrincipleCard
                  icon={Zap}
                  title="Speed with Quality"
                  description="Fast delivery doesn't mean cutting corners. We move quickly by doing things right the first time."
                />
                <PrincipleCard
                  icon={Shield}
                  title="Transparency Always"
                  description="No black boxes. No jargon. You'll always know what we're building, why, and what it costs."
                />
              </div>
            </div>

            <div className="text-center">
              <h2 className="text-3xl font-bold mb-6">See Our Methodology in Action</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Explore our case studies to see how we've helped organizations transform their data capabilities.
              </p>
              <Button variant="hero" size="lg">View Case Studies</Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function MethodologyStep({ number, title, description }) {
  return (
    <div className="flex gap-6 items-start">
      <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
        <span className="text-2xl font-bold text-primary">{number}</span>
      </div>
      <div className="flex-1">
        <h3 className="text-2xl font-bold mb-3">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

function PrincipleCard({ icon: Icon, title, description }) {
  return (
    <div className="flex gap-4 items-start">
      <Icon className="text-primary flex-shrink-0 mt-1" size={24} />
      <div>
        <h4 className="font-bold text-lg mb-2">{title}</h4>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
