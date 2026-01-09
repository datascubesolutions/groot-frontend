
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import {
  Brain,
  Database,
  Globe,
  Settings,
  Users,
  Zap
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Dedicated & Offshore Analytics Resources | Groot Analytics",
  description: "Scale your analytics capabilities with embedded specialists. We provide long-term data engineers and AI experts.",
};

export default function DedicatedResourcesPage() {
  return (
    <main className="pt-20">
      <Breadcrumb
        items={[
          { label: "Services", href: "/services" },
          { label: "Dedicated Resources", href: "/services/dedicated-resources" }
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
            Dedicated & Offshore Resources
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
            Scale your team with embedded experts who become a seamless extension of your organization.
          </p>
          <Button variant="hero" size="lg">Explore Team Models</Button>
        </div>
      </section>

      {/* Models Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StatCard value="250+" label="Global Experts" />
            <StatCard value="Flexible" label="Engagement Models" />
            <StatCard value="24/7" label="Support Availability" />
            <StatCard value="Low Risk" label="Managed Transition" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Resource Engagement Models</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get the skills you need, exactly when you need them.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={Database}
              title="Dedicated Data Engineers"
              description="Long-term specialists focused on pipeline development, maintenance, and data platform administration."
              href="/services/dedicated-resources/dedicated-data-engineers"
            />
            <ServiceCard
              icon={Settings}
              title="Analytics Engineers & BI Developers"
              description="Experts in dashboard development, semantic model maintenance, and report automation."
              href="/services/dedicated-resources/analytics-engineers-bi-developers"
            />
            <ServiceCard
              icon={Brain}
              title="AI & Machine Learning Engineers"
              description="Dedicated researchers and engineers for model development, monitoring, and MLOps management."
              href="/services/dedicated-resources/ai-machine-learning-engineers"
            />
            <ServiceCard
              icon={Zap}
              title="Team Augmentation & Flexible Capacity"
              description="Scale your internal team up or down with skill-specific specialists for short or long-term durations."
              href="/services/dedicated-resources/team-augmentation-flexible-capacity"
            />
            <ServiceCard
              icon={Globe}
              title="Offshore Development Centers (ODC)"
              description="Dedicated offshore teams working exclusively on your projects with managed service models."
              href="/services/dedicated-resources/offshore-development-centers-odc"
            />
            <ServiceCard
              icon={Users}
              title="Managed Analytics Services"
              description="End-to-end management of your analytics operations with SLA-based delivery and proactive monitoring."
              href="/services/dedicated-resources/managed-analytics-services"
            />
          </div>
        </div>
      </section>

      {/* Engagement Comparison Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Flexible Engagement</h2>
            <p className="text-muted-foreground">Tailored solutions for teams of all sizes.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PricingCard
              title="Individual Contributor"
              subtitle="Specific Skillset"
              features={["Full-time dedication", "Part of your daily scrum", "Direct management", "Skill transfer focus"]}
            />
            <PricingCard
              title="Resource Pods"
              subtitle="Small Managed Team"
              features={["Combined skills (Eng + DA)", "Project manager included", "Output focused", "Rapid onboarding"]}
              popular
            />
            <PricingCard
              title="Offshore Center"
              subtitle="Large Scale Talent"
              features={["Dedicated facility", "Scalable to 10+ resources", "Custom hiring pipeline", "Managed operations"]}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="bg-primary/5 border border-primary/10 rounded-3xl p-12 text-center md:text-left md:flex items-center justify-between">
            <div className="mb-8 md:mb-0 md:w-2/3">
              <h2 className="text-3xl font-bold mb-4">Need to Scale Your Data Team?</h2>
              <p className="text-lg text-muted-foreground">
                Let's discuss how our embedded specialists can help you deliver your roadmap faster.
              </p>
            </div>
            <div className="md:w-1/3 flex justify-center md:justify-end">
              <Button variant="hero" size="lg" className="px-8">
                Build My Team
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

function StatCard({ value, label }) {
  return (
    <div className="p-6 bg-background rounded-xl border border-border hover:border-primary transition-colors text-center">
      <div className="text-3xl font-bold text-primary mb-2">{value}</div>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  );
}

function PricingCard({ title, subtitle, features, popular }) {
  return (
    <div className={`p-8 rounded-3xl border-2 transition-all duration-300 flex flex-col ${popular ? 'border-primary shadow-xl bg-primary/5 lg:scale-105' : 'border-border'}`}>
      {popular && <div className="text-primary text-xs font-bold uppercase mb-4 text-center">Most Requested</div>}
      <h3 className="text-2xl font-bold text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm mb-6">{subtitle}</p>
      <ul className="space-y-4 mb-8 flex-1">
        {features.map((f, i) => (
          <li key={i} className="flex items-center gap-3 text-sm text-foreground/80">
            <Zap size={16} className="text-primary" /> {f}
          </li>
        ))}
      </ul>
    </div>
  )
}
