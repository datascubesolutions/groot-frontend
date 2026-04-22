// @ts-nocheck
import { TechStackVisualizer } from "@/components/sections/TechStackVisualizer";
import { ToolsSection } from "@/components/sections/ToolsSection";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Technologies | Groot Analytics",
  description:
    "Explore our modern technology stack including Databricks, Snowflake, Azure, AWS, GCP, and more.",
};

export default function TechnologiesPage() {
  return (
    <main className="pt-20">
      <Breadcrumb items={[{ label: "Technologies", href: "/technologies" }]} />

      {/* Hero Section */}
      <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden border-b border-border bg-background">
        {/* Abstract Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-mint/10 via-background to-background" />
          <div className="absolute right-0 top-0 h-[500px] w-[500px] -translate-y-1/2 translate-x-1/2 rounded-full bg-primary/5 blur-[100px]" />
          <div className="absolute bottom-0 left-0 h-[500px] w-[500px] -translate-x-1/2 translate-y-1/2 rounded-full bg-secondary/10 blur-[100px]" />
        </div>

        <div className="container z-10 mx-auto px-6 text-center">
          <div className="animate-fade-in mb-6 inline-block rounded-full border border-primary/20 bg-background/50 px-4 py-1.5 shadow-[0_0_15px_-3px_hsl(var(--primary)/0.2)] backdrop-blur-md">
            <span className="bg-gradient-to-r from-primary to-forest bg-clip-text text-xs font-bold uppercase tracking-widest text-transparent md:text-sm">
              Core Infrastructure
            </span>
          </div>
          <h1 className="mb-8 text-5xl font-bold tracking-tight text-foreground md:text-7xl">
            Our Modern Tech Stack
          </h1>
          <p className="mx-auto mb-10 max-w-4xl text-xl font-light leading-relaxed text-muted-foreground md:text-2xl">
            We are platform-agnostic partners. We help you choose the
            best-of-breed technologies to build your future-ready data
            landscape.
          </p>
          <Button variant="hero" size="xl">
            Request Tech Consultation
          </Button>
        </div>
      </section>

      {/* Favorite Tools & Resource Blog Teasers */}
      <ToolsSection />

      {/* Interactive Tech Stack Section */}
      <section className="min-h-screen py-24">
        <TechStackVisualizer />
      </section>

      {/* Philosophy Section */}
      <section className="border-t border-border bg-muted/20 py-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-8 text-3xl font-bold">
              How We Choose Technology
            </h2>
            <div className="grid grid-cols-1 gap-8 text-left md:grid-cols-2">
              <SelectionCard
                title="Client-First Context"
                desc="We start with your existing infrastructure. We don't rip and replace unless necessary."
              />
              <SelectionCard
                title="Scalability & Cost"
                desc="We balance performance needs with budget constraints, optimizing for long-term TCO."
              />
              <SelectionCard
                title="Integration Capabilities"
                desc="We select tools that play well together, avoiding vendor lock-in where possible."
              />
              <SelectionCard
                title="Community & Support"
                desc="We bet on technologies with vibrant ecosystems and enterprise-grade support."
              />
            </div>
            <p className="mt-12 italic text-muted-foreground">
              &quot;We tailor our technology stack to each client&apos;s
              specific needs, ensuring seamless integration with existing
              systems.&quot;
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

function SelectionCard({ title, desc }) {
  return (
    <div className="rounded-xl border border-border bg-background p-6">
      <h3 className="mb-2 text-lg font-bold">{title}</h3>
      <p className="text-muted-foreground">{desc}</p>
    </div>
  );
}
