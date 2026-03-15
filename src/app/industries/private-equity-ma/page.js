import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export const metadata = {
  title: "Private Equity & M&A Analytics | Growth through Data | Groot Analytics",
  description: "Accelerate due diligence, smooth post-merger integrations, and unify portfolio reporting using Microsoft Fabric and Azure Analytics.",
  keywords: "private equity data strategy, M&A data integration, portfolio company analytics, carve-out analytics, post-merger data integration",
};

export default function PrivateEquityMAPage() {
  return (
    <main className="pt-20">
      <Breadcrumb
        items={[
          { label: "Industries", href: "/industries" },
          { label: "Private Equity & M&A", href: "/industries/private-equity-ma" },
        ]}
      />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-background border-b border-border overflow-hidden p-6">
        <div className="container mx-auto relative z-10 max-w-5xl text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Data execution for PE & M&A
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed max-w-3xl">
            You bought the thesis. Now you need to visualize the reality. Turn fragmented portco data into unified dashboards across your portfolio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" passHref>
              <Button variant="hero" size="lg">Discuss your portfolio</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Real World Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Accelerating the hold period</h2>

          <div className="grid gap-8">
            <div className="flex flex-col md:flex-row gap-6 p-8 bg-background rounded-2xl border border-border">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center font-bold text-xl">
                  01
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Due Diligence</h3>
                <p className="text-muted-foreground leading-relaxed">Go beyond the data room. Rapidly assess target company data maturity, identify analytical gaps, and quantify the technology investment required to execute the value creation plan post-close.</p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6 p-8 bg-background rounded-2xl border border-border">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center font-bold text-xl">
                  02
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Day 1 & Post-Merger Integration (PMI)</h3>
                <p className="text-muted-foreground leading-relaxed">Stop managing integrations in Excel. We deploy rapid Azure/Fabric landing zones to consolidate reporting across newly merged entities in weeks, not months, establishing a single source of truth for the new leadership team.</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 p-8 bg-background rounded-2xl border border-border">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center font-bold text-xl">
                  03
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Portfolio Company Value Creation</h3>
                <p className="text-muted-foreground leading-relaxed">Execute specific use cases defined in the thesis: pricing optimization, customer churn prediction, or working capital dashboards. We provide the specialized data engineering talent your portco might not have in-house.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Target Use Cases */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Use Cases</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-muted/10 rounded-2xl border border-border">
              <h3 className="text-xl font-bold mb-4">Pricing Optimization</h3>
              <p className="text-muted-foreground mb-4">Identify margin leakage and cross-sell opportunities across disparate quoting and ERP systems in newly acquired companies.</p>
            </div>
            <div className="p-8 bg-muted/10 rounded-2xl border border-border">
              <h3 className="text-xl font-bold mb-4">Unified Executive Dashboards</h3>
              <p className="text-muted-foreground mb-4">Standardized Power BI reporting packs that provide operating partners with instant visibility into portfolio performance, removing dependency on manual portco updates.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="bg-primary/5 border border-primary/10 rounded-3xl p-12 text-center md:text-left md:flex items-center justify-between">
            <div className="mb-8 md:mb-0 md:w-2/3">
              <h2 className="text-3xl font-bold mb-4">Ready to execute your data thesis?</h2>
              <p className="text-lg text-muted-foreground">
                Stop waiting for portfolio companies to build data capabilities organically. Deploy specialized talent to accelerate value creation.
              </p>
            </div>
            <div className="md:w-1/3 flex justify-center md:justify-end">
              <Link href="/contact?industry=pe-ma" passHref>
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
