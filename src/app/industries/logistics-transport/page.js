// @ts-nocheck
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { MapPin } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Logistics & Transport Analytics | Groot Analytics",
  description:
    "Optimize supply chain moving parts with real-time data integration and Microsoft Fabric.",
};

export default function LogisticsTransportPage() {
  return (
    <main className="pt-20">
      <Breadcrumb
        items={[
          { label: "Industries", href: "/industries" },
          {
            label: "Logistics & Transport",
            href: "/industries/logistics-transport",
          },
        ]}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border bg-background p-6 py-16">
        <div className="container relative z-10 mx-auto max-w-5xl text-center md:text-left">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary">
            <MapPin className="h-4 w-4" />
            <span>Supply Chain Visibility</span>
          </div>
          <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">
            Logistics & Transport Analytics
          </h1>
          <p className="mb-10 max-w-3xl text-xl leading-relaxed text-muted-foreground md:text-2xl">
            Gain end-to-end visibility into your supply chain. We integrate
            fragmented routing, warehousing, and shipping data into unified
            dashboards.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link href="/contact" passHref>
              <Button variant="hero" size="lg">
                Discuss your logistics
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
              title="Route Optimization"
              desc="Analyze historical routing data to improve delivery times and reduce fuel consumption."
            />
            <UseCaseCard
              id="02"
              title="Carrier Performance"
              desc="Score third-party carriers on on-time delivery rates, damage claims, and cost per mile."
            />
            <UseCaseCard
              id="03"
              title="Warehouse Efficiency"
              desc="Monitor picking rates, inventory accuracy, and labor efficiency in real time."
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
