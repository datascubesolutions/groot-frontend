import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { Cloud } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Technology & SaaS Analytics | Groot Analytics",
  description: "Scale your SaaS data architecture from seed stage through enterprise scaling with modern data stacks and embedded analytics.",
};

export default function TechnologySaasPage() {
  return (
    <main className="pt-20">
      <Breadcrumb
        items={[
          { label: "Industries", href: "/industries" },
          { label: "Technology & SaaS", href: "/industries/technology-saas" },
        ]}
      />

      {/* Hero Section */}
      <section className="relative py-24 bg-background border-b border-border overflow-hidden p-6">
        <div className="container mx-auto relative z-10 max-w-5xl text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-semibold mb-6">
            <Cloud className="w-4 h-4" />
            <span>Built to Scale</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Technology & SaaS Analytics
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed max-w-3xl">
            Stop running board reporting from product database replicas. We design scalable analytics architectures that separate operational workloads from analytical models.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" passHref>
              <Button variant="hero" size="lg">Discuss your data stack</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Target Use Cases */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Use Cases</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <UseCaseCard
              id="01"
              title="Embedded Analytics"
              desc="Productize your data by embedding Power BI into your SaaS offering, creating new revenue streams."
            />
            <UseCaseCard
              id="02"
              title="Customer Success Operations"
              desc="Merge product usage telemetry with Salesforce/HubSpot to predict churn and target interventions."
            />
            <UseCaseCard
              id="03"
              title="Board Pack Automation"
              desc="Automate ARR, NRR, and CAC reporting directly from billing systems to eliminate month-end manual assembly."
            />
          </div>
        </div>
      </section>
    </main>
  );
}

function UseCaseCard({ id, title, desc }) {
  return (
    <div className="p-8 bg-background rounded-2xl border border-border flex flex-col items-start hover:border-primary/50 transition-colors">
      <div className="px-3 py-1 bg-primary/10 text-primary text-sm font-bold rounded mb-6">
        USE CASE {id}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{desc}</p>
    </div>
  )
}
