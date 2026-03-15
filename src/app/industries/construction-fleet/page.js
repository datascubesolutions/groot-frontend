import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { Truck } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Construction & Fleet Analytics | Groot Analytics",
  description: "Optimize fleet utilization and construction operations with Microsoft Fabric and Power BI analytics.",
};

export default function ConstructionFleetPage() {
  return (
    <main className="pt-20">
      <Breadcrumb
        items={[
          { label: "Industries", href: "/industries" },
          { label: "Construction & Fleet", href: "/industries/construction-fleet" },
        ]}
      />

      {/* Hero Section */}
      <section className="relative py-24 bg-background border-b border-border overflow-hidden p-6">
        <div className="container mx-auto relative z-10 max-w-5xl text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-semibold mb-6">
            <Truck className="w-4 h-4" />
            <span>Operational Efficiency</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Construction & Fleet Analytics
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed max-w-3xl">
            Turn telematics and project data into bottom-line performance. We build analytics that track utilization, reduce rental overruns, and improve safety.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" passHref>
              <Button variant="hero" size="lg">Discuss your operations</Button>
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
              title="Equipment Utilization"
              desc="Track hours used vs. hours rented to reduce overage fees and optimize cross-site allocation."
            />
            <UseCaseCard
              id="02"
              title="Driver Safety & Telematics"
              desc="Integrate with Samsara or Geotab to build executive safety rankings and predictive maintenance models."
            />
            <UseCaseCard
              id="03"
              title="Project Profitability"
              desc="Combine ERP financial data with field operations data to see real-time project margins before month-end."
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
