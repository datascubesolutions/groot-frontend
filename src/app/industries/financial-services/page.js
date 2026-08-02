// @ts-nocheck
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ChevronRight, Database, Server, Shield, Activity, Users, FileText } from "lucide-react";

export const metadata = {
  title: "Financial Services Analytics | Groot Analytics",
  description:
    "Modernize legacy systems into secure, real-time analytics solutions for banking and insurance with Microsoft Fabric, prioritizing governance and compliance.",
  keywords:
    "financial data analytics, Microsoft Fabric financial services, banking analytics, risk dashboards, fraud detection analytics",
};

export default function FinancialServicesPage() {
  return (
    <main className="min-h-screen bg-background pt-20 selection:bg-emerald-500/30">
      
      {/* Blueprint Grid */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-40">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--foreground)/0.06)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--foreground)/0.06)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-4 pb-10 lg:pt-8 flex lg:min-h-[calc(100vh-80px)] items-center">
        <div className="container mx-auto px-6 relative z-10 max-w-[1400px]">
          <div className="mb-4">
            <Breadcrumb
              items={[
                { label: "Industries", href: "/industries" },
                { label: "Financial Services", href: "/industries/financial-services" },
              ]}
            />
          </div>

          <div className="border-[4px] border-foreground bg-card shadow-[15px_15px_0px_0px_hsl(var(--emerald-600)/0.2)] overflow-hidden relative">
            <div className="absolute top-0 right-0 p-4 border-b-[4px] border-l-[4px] border-foreground bg-emerald-600/10">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-600">IND-FS.01</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-7 p-8 md:p-12 lg:p-16 flex flex-col justify-center relative z-10 bg-background/80 backdrop-blur-sm">
                <div className="mb-6 inline-block">
                  <div className="px-3 py-1 border-[2px] border-foreground text-[10px] sm:text-xs font-black uppercase tracking-widest inline-flex items-center gap-2">
                    <span className="h-2 w-2 bg-emerald-600 rounded-full animate-pulse" />
                    Secure & Compliant Analytics
                  </div>
                </div>

                <h1 className="mb-4 text-[2.5rem] font-black uppercase leading-[0.85] tracking-tighter text-foreground sm:text-[3.5rem] lg:text-[4.5rem]">
                  Governance<span className="text-emerald-600 block mb-2">Without Gridlock.</span>
                </h1>

                <p className="max-w-xl text-sm sm:text-base lg:text-lg font-bold leading-relaxed text-muted-foreground border-l-[4px] border-emerald-600 pl-6 mb-8 bg-emerald-600/5 py-2">
                  Modernize monolithic risk and reporting systems while exceeding infosec requirements. Build resilient data foundations on Microsoft Fabric.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact?industry=finance" passHref>
                    <Button variant="hero" size="lg" className="h-14 w-full sm:w-auto rounded-none border-[3px] border-foreground bg-foreground px-6 sm:px-8 text-background shadow-[6px_6px_0px_0px_hsl(var(--emerald-600))] transition-all duration-300 hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none">
                      <span className="text-xs sm:text-sm font-black uppercase tracking-[0.15em]">Discuss Compliance</span>
                      <ChevronRight className="ml-3 h-4 w-4 sm:h-5 sm:w-5" />
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Visual terminal */}
              <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-[350px] border-t-[4px] lg:border-t-0 lg:border-l-[4px] border-foreground bg-foreground overflow-hidden flex flex-col">
                <div className="flex items-center gap-2 px-5 py-3 border-b-[3px] border-background/20 bg-background/5">
                  <div className="h-3 w-3 bg-rose-500 border border-background/30" />
                  <div className="h-3 w-3 bg-amber-500 border border-background/30" />
                  <div className="h-3 w-3 bg-emerald-600 border border-background/30" />
                  <span className="ml-4 font-mono text-[10px] text-background/50 uppercase tracking-widest">finance_compliance_check.sh</span>
                </div>
                <div className="flex-1 p-6 font-mono text-sm space-y-3 overflow-hidden bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.4)_100%)]">
                  {[
                    { color: "text-emerald-500", line: "$ ./verify_governance.sh" },
                    { color: "text-background/60", line: "→ Scanning legacy ERP systems..." },
                    { color: "text-background/60", line: "→ Applying RBAC policies..." },
                    { color: "text-emerald-500", line: "✓ Security boundaries verified" },
                    { color: "text-background/60", line: "→ Routing data to Fabric Lakehouse..." },
                    { color: "text-emerald-500", line: "✓ Real-time risk dashboards ACTIVE" },
                    { color: "text-background/40", line: "─────────────────────────────" },
                    { color: "text-background", line: "STATUS: COMPLIANT & LIVE" },
                  ].map((item, i) => (
                    <div key={i} className={`${item.color} font-black text-xs sm:text-sm animate-in fade-in slide-in-from-left-4 duration-500`} style={{ animationFillMode: 'both', animationDelay: `${0.3 + i * 0.15}s` }}>
                      {item.line}
                    </div>
                  ))}
                  <span className="inline-block w-2 h-4 bg-emerald-500 animate-pulse mt-2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE USE CASES */}
      <section className="relative z-20 lg:min-h-[calc(100vh-80px)] flex items-center py-16 lg:py-0 border-y-[6px] border-foreground bg-card">
        <div className="container mx-auto px-6 max-w-[1400px] w-full">
          <div className="mb-10 lg:mb-12 border-b-[4px] border-foreground pb-6 lg:pb-8 flex flex-col lg:flex-row lg:items-end justify-between gap-6 lg:gap-8">
            <div className="max-w-3xl">
              <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.4em] text-emerald-600 block mb-3 border border-emerald-600/30 bg-emerald-600/10 px-3 py-1 w-max">
                [ USE CASES ]
              </span>
              <h2 className="text-[2.5rem] sm:text-[3.5rem] lg:text-[4rem] font-black uppercase leading-[0.85] tracking-tighter text-foreground">
                Core Execution Areas.
              </h2>
            </div>
            <p className="max-w-md font-bold text-lg text-muted-foreground border-l-[3px] border-emerald-600 pl-6">
              Financial services require absolute precision. We build solutions that stand up to regulatory scrutiny.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <UseCaseCard
              id="01"
              icon={Activity}
              title="Risk & Capital Reporting"
              desc="Consolidate exposure data into near real-time Executive Power BI dashboarding, eliminating overnight batch processing limits."
            />
            <UseCaseCard
              id="02"
              icon={Server}
              title="Post-Merger Visibility"
              desc="Rapidly virtualize reporting between merged institutions before full data-layer integration is complete."
            />
            <UseCaseCard
              id="03"
              icon={Users}
              title="Customer 360 & NBA"
              desc="Unify CRM, transaction, and behavioral data to power AI models that recommend the right financial product to the right customer."
            />
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-foreground py-16 lg:py-0 flex lg:min-h-[60vh] items-center border-t-[8px] border-emerald-600 text-background">
        <div className="container mx-auto max-w-4xl px-6 text-center w-full">
          <h2 className="mb-6 text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] font-black uppercase leading-[0.9] tracking-tighter">
            Migrate With Confidence.
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg lg:text-xl font-bold leading-relaxed text-background/70">
            Move off legacy platforms into modern Microsoft Fabric environments without interrupting daily operations.
          </p>
          <Link href="/contact?industry=finance" passHref>
            <Button
              variant="hero"
              size="lg"
              className="group h-16 rounded-none border-[3px] border-background bg-transparent px-10 text-background shadow-[8px_8px_0px_0px_hsl(var(--background))] transition-all hover:translate-x-[4px] hover:translate-y-[4px] hover:bg-background hover:text-foreground hover:shadow-none"
            >
              <span className="text-sm font-black uppercase tracking-[0.2em]">Get in Touch</span>
            </Button>
          </Link>
        </div>
      </section>

    </main>
  );
}

function UseCaseCard({ id, icon: Icon, title, desc }) {
  return (
    <div className="border-[3px] border-foreground bg-background p-6 lg:p-8 shadow-[8px_8px_0px_0px_hsl(var(--foreground)/0.1)] relative hover:-translate-y-1 transition-transform group">
      <div className="absolute right-4 top-4 text-[10px] font-black uppercase tracking-widest text-muted-foreground group-hover:text-emerald-600 transition-colors">UC_{id}</div>
      <Icon className="w-8 h-8 lg:w-10 lg:h-10 text-foreground mb-4 lg:mb-6 group-hover:text-emerald-600 transition-colors" strokeWidth={2} />
      <h3 className="text-lg lg:text-xl font-black uppercase leading-[1.1] tracking-tight mb-3 lg:mb-4">{title}</h3>
      <p className="text-sm lg:text-[15px] font-semibold text-muted-foreground leading-relaxed">{desc}</p>
    </div>
  );
}
