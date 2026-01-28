import { TechStackVisualizer } from "@/components/sections/TechStackVisualizer";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Technologies | Groot Analytics",
  description: "Explore our modern technology stack including Databricks, Snowflake, Azure, AWS, GCP, and more.",
};

export default function TechnologiesPage() {
  return (
    <main className="pt-20">
      <Breadcrumb
        items={[
          { label: "Technologies", href: "/technologies" }
        ]}
      />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-background border-b border-border overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-mint/10 via-background to-background" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="container mx-auto px-6 text-center z-10">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-background/50 backdrop-blur-md border border-primary/20 shadow-[0_0_15px_-3px_hsl(var(--primary)/0.2)] animate-fade-in">
            <span className="text-xs md:text-sm font-bold bg-gradient-to-r from-primary to-forest bg-clip-text text-transparent tracking-widest uppercase">Core Infrastructure</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight text-foreground">
            Our Modern Tech Stack
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-10 leading-relaxed font-light">
            We are platform-agnostic partners. We help you choose the best-of-breed technologies to build your future-ready data landscape.
          </p>
          <Button variant="hero" size="xl">Request Tech Consultation</Button>
        </div>
      </section>

      {/* Interactive Tech Stack Section */}
      <section className="py-24 min-h-screen">
        <TechStackVisualizer />
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-muted/20 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">How We Choose Technology</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
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
            <p className="mt-12 text-muted-foreground italic">
              "We tailor our technology stack to each client's specific needs, ensuring seamless integration with existing systems."
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

function SelectionCard({ title, desc }) {
  return (
    <div className="p-6 bg-background rounded-xl border border-border">
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground">{desc}</p>
    </div>
  );
}
