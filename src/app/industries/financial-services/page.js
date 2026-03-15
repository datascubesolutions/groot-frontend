import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { CheckCircle2, Shield } from "lucide-react";

export const metadata = {
  title: "Financial Services Analytics | Groot Analytics",
  description: "Modernize legacy systems into secure, real-time analytics solutions for banking and insurance with Microsoft Fabric, prioritizing governance and compliance.",
  keywords: "financial data analytics, Microsoft Fabric financial services, banking analytics, risk dashboards, fraud detection analytics",
};

export default function FinancialServicesPage() {
  return (
    <main className="pt-20">
      <Breadcrumb
        items={[
          { label: "Industries", href: "/industries" },
          { label: "Financial Services", href: "/industries/financial-services" },
        ]}
      />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-background border-b border-border overflow-hidden p-6">
        <div className="container mx-auto relative z-10 max-w-5xl text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-semibold mb-6">
            <Shield className="w-4 h-4" />
            <span>Secure & Compliant Analytics</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Governance without gridlock.
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed max-w-3xl">
            Modernize monolithic risk and reporting systems while exceeding infosec requirements. Build resilient data foundations on Microsoft Fabric.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" passHref>
              <Button variant="hero" size="lg">Discuss your compliance</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Target Use Cases */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Use Cases</h2>
            <p className="text-xl text-muted-foreground max-w-2xl">Financial services require absolute precision. We build Azure and Fabric solutions that stand up to regulatory scrutiny.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="bg-primary/5 border border-primary/10 rounded-3xl p-12 text-center md:text-left md:flex items-center justify-between">
            <div className="mb-8 md:mb-0 md:w-2/3">
              <h2 className="text-3xl font-bold mb-4">Migrate with confidence</h2>
              <p className="text-lg text-muted-foreground">
                Move off legacy platforms into modern Microsoft Fabric environments without interrupting daily operations.
              </p>
            </div>
            <div className="md:w-1/3 flex justify-center md:justify-end">
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
    <div className="p-8 bg-background rounded-2xl border border-border flex flex-col items-start hover:border-primary/50 transition-colors">
      <div className="px-3 py-1 bg-primary/10 text-primary text-sm font-bold rounded mb-6">
        USE CASE {id}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{desc}</p>
    </div>
  )
}
