"use client";

import { motion } from "framer-motion";
import { ChevronRight, PieChart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CaseStudySection() {
  return (
    <section className="relative overflow-x-clip bg-background pb-40 pt-12">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="relative grid grid-cols-1 lg:grid-cols-12 lg:items-start lg:gap-0">
          <div className="z-10 flex h-full flex-col lg:col-span-8 lg:col-start-1 lg:row-start-1">
            <div className="relative h-[300px] min-h-[300px] shrink-0 overflow-hidden border-[6px] border-foreground sm:h-[400px] sm:min-h-[400px] sm:border-8 lg:h-[650px] lg:min-h-[650px]">
              <Image
                src="/images/maturity/live_enterprise_alignment.png"
                alt="Executive Team Discussing Data Strategy"
                fill
                className="object-cover grayscale-[70%] contrast-125 brightness-90 mix-blend-luminosity opacity-80"
                sizes="(min-width: 1024px) 58vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent md:bg-gradient-to-l" />

              <div className="absolute left-4 top-10 rotate-180 text-[3rem] font-black uppercase leading-[0.8] tracking-tighter text-foreground/5 [writing-mode:vertical-rl] sm:text-[4rem] md:-left-10 md:text-[10rem] overflow-hidden">
                CASE STUDY
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group relative mr-[10%] mt-12 hidden h-full flex-1 overflow-hidden rounded-none border-[3px] border-foreground bg-card p-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] dark:shadow-[12px_12px_0px_0px_rgba(255,255,255,1)] md:p-10 lg:flex"
            >
              <div className="pointer-events-none absolute -bottom-10 -right-10 opacity-[0.03] transition-all duration-700 group-hover:-rotate-12 group-hover:scale-110 group-hover:opacity-[0.06]">
                <PieChart size={280} strokeWidth={1} />
              </div>

              <div className="relative z-10 flex w-full flex-col justify-center">
                <h3 className="mb-6 flex items-center gap-3 text-lg font-black uppercase tracking-[0.25em] text-foreground">
                  <span className="inline-block h-1 w-8 shrink-0 bg-forest"></span>
                  The ROI of Reality
                </h3>

                <p className="mb-8 border-l-[3px] border-forest/30 pl-6 text-base font-bold leading-relaxed text-muted-foreground">
                  A maturity assessment isn&apos;t about pointing fingers.
                  It&apos;s about eliminating invisible{" "}
                  <strong className="text-foreground">
                    technical debt constraints
                  </strong>{" "}
                  so you can stop wrestling with fractured pipelines and start
                  scaling advanced analytics securely.
                </p>

                <div className="relative mb-8 min-h-[160px] w-full flex-1 overflow-hidden rounded-none border-2 border-foreground shadow-inner">
                  <Image
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop"
                    alt="Analytics Scaling Up"
                    fill
                    className="object-cover object-center opacity-80 transition-all duration-1000 group-hover:scale-110 group-hover:opacity-100 grayscale-[70%] contrast-125 brightness-90 mix-blend-luminosity group-hover:grayscale-[20%]"
                  />
                  <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(0,0,0,0.6)] z-10 pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 pointer-events-none" />
                  
                  <div className="absolute top-3 left-3 z-20 flex items-center gap-2 bg-black/60 px-3 py-1.5 rounded-none backdrop-blur-md border border-white/20">
                    <span className="block h-2 w-2 rounded-none bg-emerald-400 animate-pulse shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">Velocity Optimized</span>
                  </div>
                </div>

                <div className="relative mt-auto grid grid-cols-2 gap-8 border-t border-border/80 pt-6">
                  <div className="absolute bottom-0 left-1/2 top-6 w-px bg-border/60"></div>
                  <div className="flex flex-col">
                    <div className="mb-1 flex items-baseline gap-2">
                      <span className="text-5xl font-black uppercase leading-[0.8] tracking-tighter text-rose-500">
                        - $1.2M
                      </span>
                    </div>
                    <span className="mt-2 text-[10px] font-black uppercase tracking-[0.2em] text-foreground/50">
                      Tech Debt Avoided
                    </span>
                  </div>

                  <div className="flex flex-col pl-4">
                    <div className="mb-1 flex items-baseline gap-2">
                      <span className="text-5xl font-black uppercase leading-[0.8] tracking-tighter text-forest">
                        + 40%
                      </span>
                    </div>
                    <span className="mt-2 text-[10px] font-black uppercase tracking-[0.2em] text-foreground/50">
                      Team Velocity Lift
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="relative z-20 mx-auto -mt-16 w-[92%] min-w-0 max-w-lg overflow-visible border-[3px] border-foreground bg-card/95 p-6 shadow-[10px_10px_0px_0px_hsl(var(--forest))] backdrop-blur-2xl sm:-mt-20 sm:w-[95%] sm:border-4 sm:p-10 sm:shadow-[20px_20px_0px_0px_hsl(var(--forest))] lg:col-span-6 lg:col-start-7 lg:row-start-1 lg:mx-0 lg:mt-24 lg:w-auto lg:max-w-none lg:self-start lg:p-12">
            <div className="mb-8 flex items-center gap-4">
              <span className="h-4 w-4 shrink-0 rounded-none bg-forest shadow-[2px_2px_0px_0px_foreground]"></span>
              <span className="text-sm font-black uppercase tracking-[0.3em] text-forest">
                Technology &amp; SaaS
              </span>
            </div>

            <h2 className="mb-6 text-2xl font-black uppercase leading-[0.95] tracking-tight text-foreground sm:mb-8 sm:text-3xl md:text-5xl">
              How we helped a PE portfolio company find their gaps
              <span className="mt-2 inline-block bg-forest px-2 py-1 text-forest-foreground">
                .
              </span>
            </h2>

            <p className="mb-8 border-l-[3px] border-forest bg-muted/40 p-4 pl-5 text-base font-bold leading-relaxed text-foreground/80 sm:mb-10 sm:border-l-[4px] sm:pl-6 sm:text-xl">
              A PE-backed software company had invested in Azure Analysis
              Services (AAS) for enterprise data modeling. Leadership believed
              they were &quot;data mature.&quot; But refresh failures were
              increasing, autoscaling wasn&apos;t working, and the BI team was
              frustrated with the complexity of managing AAS alongside Power
              BI.
            </p>

            <div className="mb-12 min-w-0 border-l-[4px] border-forest pl-4 sm:pl-6">
              <div className="border-y-4 border-forest bg-[linear-gradient(45deg,transparent_25%,hsl(var(--forest)/0.05)_25%,hsl(var(--forest)/0.05)_50%,transparent_50%,transparent_75%,hsl(var(--forest)/0.05)_75%,hsl(var(--forest)/0.05)_100%)] bg-[length:20px_20px] py-8 sm:py-10">
                <div className="grid min-w-0 grid-cols-1 gap-6 px-1 sm:grid-cols-2 sm:gap-8 sm:px-0">
                  <div className="min-w-0 text-center md:text-left">
                    <div className="group relative w-fit md:mx-0 mx-auto overflow-hidden">
                      <p className="mb-3 pb-3 text-[clamp(2.25rem,7vw,3.75rem)] font-black leading-none tracking-tighter text-foreground drop-shadow-[4px_4px_0px_rgba(0,0,0,0.8)] md:text-[4.5rem] dark:drop-shadow-[4px_4px_0px_rgba(255,255,255,1)]">
                        3x
                      </p>
                      <motion.div
                        animate={{ x: ["-100%", "250%"] }}
                        transition={{ repeat: Infinity, duration: 2.5, ease: "linear", repeatDelay: 0.5 }}
                        className="absolute inset-0 z-10 w-1/3 skew-x-12 bg-gradient-to-r from-transparent via-forest/40 to-transparent"
                      />
                    </div>
                    <p className="inline-block max-w-full whitespace-normal bg-foreground px-2 py-1 text-[0.65rem] font-black uppercase tracking-wider text-mint sm:px-3 sm:text-xs sm:tracking-widest">
                      Faster refresh after remediation
                    </p>
                  </div>
                  <div className="min-w-0 text-center md:text-left">
                    <div className="group relative w-fit md:mx-0 mx-auto overflow-hidden">
                      <p className="mb-3 pb-3 text-[clamp(2.25rem,7vw,3.75rem)] font-black leading-none tracking-tighter text-foreground drop-shadow-[4px_4px_0px_rgba(0,0,0,0.8)] md:text-[4.5rem] dark:drop-shadow-[4px_4px_0px_rgba(255,255,255,1)]">
                        8W
                      </p>
                      <motion.div
                        animate={{ x: ["-100%", "250%"] }}
                        transition={{ repeat: Infinity, duration: 2.5, ease: "linear", repeatDelay: 0.5, delay: 1.25 }}
                        className="absolute inset-0 z-10 w-1/3 skew-x-12 bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent"
                      />
                    </div>
                    <p className="inline-block max-w-full whitespace-normal bg-foreground px-2 py-1 text-[0.65rem] font-black uppercase tracking-wider text-mint sm:px-3 sm:text-xs sm:tracking-widest">
                      To Complete Fabric Migration
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-12 space-y-6 border-l-2 border-forest/25 pl-4 text-sm font-bold text-muted-foreground">
              <p>
                <span className="mr-3 border border-forest/30 bg-forest/10 px-3 py-1 text-xs uppercase tracking-widest text-foreground">
                  Tech
                </span>{" "}
                AAS models were well-designed, but the platform was reaching
                its limits. No autoscaling. Manual runbooks for refresh
                management. XMLA endpoints weren&apos;t properly configured.
              </p>
              <p>
                <span className="mr-3 border border-forest/30 bg-forest/10 px-3 py-1 text-xs uppercase tracking-widest text-foreground">
                  Analytics
                </span>{" "}
                Good DAX measures, but models were disconnected from the
                modern Power BI Premium features (dataflows, deployment
                pipelines).
              </p>
              <p>
                <span className="mr-3 border border-forest/30 bg-forest/10 px-3 py-1 text-xs uppercase tracking-widest text-foreground">
                  Gov
                </span>{" "}
                No Purview integration. No lineage tracking. Sensitive data
                without classification.
              </p>
              <p>
                <span className="mr-3 border border-forest/30 bg-forest/10 px-3 py-1 text-xs uppercase tracking-widest text-foreground">
                  Org
                </span>{" "}
                One senior developer maintained everything. No documentation.
                Knowledge trapped in one person&apos;s head.
              </p>
              <p>
                <span className="mr-3 border border-forest/30 bg-forest/10 px-3 py-1 text-xs uppercase tracking-widest text-foreground">
                  Recommendation
                </span>{" "}
                Migrate from Azure Analysis Services to Microsoft Fabric. The
                assessment revealed that 80% of their pain points would be
                solved by the migration: autoscaling, simplified scheduling,
                native Power BI integration, and Fabric&apos;s built-in
                governance features.
              </p>
            </div>

            <Link
              href="/industries/technology-saas"
              className="group inline-flex flex-wrap items-center justify-center gap-2 border-4 border-foreground bg-foreground px-4 py-4 text-center text-xs font-black uppercase tracking-widest text-background shadow-[6px_6px_0_0_rgba(0,0,0,1)] transition-all hover:-translate-y-1 hover:translate-x-1 hover:bg-forest hover:text-forest-foreground hover:shadow-none sm:gap-4 sm:px-8 sm:py-5 sm:text-sm sm:tracking-[0.2em] dark:shadow-[6px_6px_0_0_rgba(255,255,255,1)] dark:hover:shadow-none"
            >
              See how we work with technology companies
              <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-3 sm:h-6 sm:w-6" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
