// @ts-nocheck
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { CheckCircle2, Shield } from "lucide-react";

export const metadata = {
  title: "Financial Services Analytics | Groot Analytics",
  description:
    "Modernize legacy systems into secure, real-time analytics solutions for banking and insurance with Microsoft Fabric, prioritizing governance and compliance.",
  keywords:
    "financial data analytics, Microsoft Fabric financial services, banking analytics, risk dashboards, fraud detection analytics",
};

export default function FinancialServicesPage() {
  return (
    <main className="pt-20">
      <Breadcrumb
        items={[
          { label: "Industries", href: "/industries" },
          {
            label: "Financial Services",
            href: "/industries/financial-services",
          },
        ]}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border bg-background p-6 py-24">
        <div className="container relative z-10 mx-auto max-w-5xl text-center md:text-left">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary">
            <Shield className="h-4 w-4" />
            <span>Secure & Compliant Analytics</span>
          </div>
          <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">
            Governance without gridlock.
          </h1>
          <p className="mb-10 max-w-3xl text-xl leading-relaxed text-muted-foreground md:text-2xl">
            Modernize monolithic risk and reporting systems while exceeding
            infosec requirements. Build resilient data foundations on Microsoft
            Fabric.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link href="/contact" passHref>
              <Button variant="hero" size="lg">
                Discuss your compliance
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Target Use Cases */}
      <section className="bg-muted/30 py-24">
        <div className="container mx-auto max-w-5xl px-6">
          <div className="mb-16">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Core Use Cases
            </h2>
            <p className="max-w-2xl text-xl text-muted-foreground">
              Financial services require absolute precision. We build Azure and
              Fabric solutions that stand up to regulatory scrutiny.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <UseCaseCard
              id="01"
              title="Risk & Capital Reporting"
              desc="Consolidate exposure data into near real-time Executive Power BI dashboarding, eliminating overnight batch processing limits."
            />
            <UseCaseCard
              id="02"
              title="Post-Merger Visibility"
              desc="Rapidly virtualize reporting between merged institutions before full data-layer integration is complete."
            />
            <UseCaseCard
              id="03"
              title="Customer 360 & Next-Best-Action"
              desc="Unify CRM, transaction, and behavioral data to power AI models that recommend the right financial product to the right customer."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border py-24">
        <div className="container mx-auto px-6">
          <div className="items-center justify-between rounded-3xl border border-primary/10 bg-primary/5 p-12 text-center md:flex md:text-left">
            <div className="mb-8 md:mb-0 md:w-2/3">
              <h2 className="mb-4 text-3xl font-bold">
                Migrate with confidence
              </h2>
              <p className="text-lg text-muted-foreground">
                Move off legacy platforms into modern Microsoft Fabric
                environments without interrupting daily operations.
              </p>
            </div>
            <div className="flex justify-center md:w-1/3 md:justify-end">
              <Link href="/contact?industry=finance" passHref>
                <Button variant="hero" size="lg" className="px-8">
                  Get in touch
                </Button>
              </Link>
            </div>
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
