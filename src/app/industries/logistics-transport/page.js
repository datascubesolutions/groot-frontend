import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { MapPin } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Logistics & Transport Analytics | Groot Analytics",
  description: "Optimize supply chain moving parts with real-time data integration and Microsoft Fabric.",
};

export default function LogisticsTransportPage() {
  return (
    <main className="pt-20">
      <Breadcrumb
        items={[
          { label: "Industries", href: "/industries" },
          { label: "Logistics & Transport", href: "/industries/logistics-transport" },
        ]}
      />

      {/* Hero Section */}
      <section className="relative py-24 bg-background border-b border-border overflow-hidden p-6">
        <div className="container mx-auto relative z-10 max-w-5xl text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-semibold mb-6">
            <MapPin className="w-4 h-4" />
            <span>Supply Chain Visibility</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Logistics & Transport Analytics
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed max-w-3xl">
            Gain end-to-end visibility into your supply chain. We integrate fragmented routing, warehousing, and shipping data into unified dashboards.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" passHref>
              <Button variant="hero" size="lg">Discuss your logistics</Button>
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
    <div className="p-8 bg-background rounded-2xl border border-border flex flex-col items-start hover:border-primary/50 transition-colors">
      <div className="px-3 py-1 bg-primary/10 text-primary text-sm font-bold rounded mb-6">
        USE CASE {id}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{desc}</p>
    </div>
  )
}
