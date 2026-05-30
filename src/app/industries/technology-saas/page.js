// @ts-nocheck
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { Cloud } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Technology & SaaS Analytics | Groot Analytics",
  description:
    "Scale your SaaS data architecture from seed stage through enterprise scaling with modern data stacks and embedded analytics.",
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
      <section className="relative overflow-hidden border-b border-border bg-background p-6 py-16">
        <div className="container relative z-10 mx-auto max-w-5xl text-center md:text-left">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary">
            <Cloud className="h-4 w-4" />
            <span>Built to Scale</span>
          </div>
          <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">
            Technology & SaaS Analytics
          </h1>
          <p className="mb-10 max-w-3xl text-xl leading-relaxed text-muted-foreground md:text-2xl">
            Stop running board reporting from product database replicas. We
            design scalable analytics architectures that separate operational
            workloads from analytical models.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link href="/contact" passHref>
              <Button variant="hero" size="lg">
                Discuss your data stack
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Target Use Cases */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto max-w-5xl px-6">
          <div className="mb-10">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Core Use Cases
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
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
    <div className="flex flex-col items-start rounded-2xl border border-border bg-background p-8 transition-colors hover:border-primary/50">
      <div className="mb-6 rounded bg-primary/10 px-3 py-1 text-sm font-bold text-primary">
        USE CASE {id}
      </div>
      <h3 className="mb-3 text-xl font-bold">{title}</h3>
      <p className="leading-relaxed text-muted-foreground">{desc}</p>
    </div>
  );
}
