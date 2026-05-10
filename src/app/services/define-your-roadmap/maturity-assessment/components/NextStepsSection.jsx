"use client";

import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { CheckCircle2, ChevronRight, PieChart, Target } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function NextStepsSection() {
  return (
    <>
      <section className="relative overflow-hidden border-t border-border/60 bg-background py-16 lg:py-24">
        <div className="container relative z-10 mx-auto max-w-7xl px-6">
          <div className="relative mb-24 grid grid-cols-1 items-end gap-10 md:grid-cols-12 lg:gap-10 lg:gap-16">
            <div className="absolute -top-12 right-[30%] -z-10 hidden h-[150%] w-[1px] bg-gradient-to-b from-transparent via-border to-transparent lg:block" />

            <div className="relative z-10 pb-4 pt-8 md:col-span-12 lg:col-span-7">
              <div className="absolute -left-12 bottom-0 top-0 hidden w-2 origin-bottom bg-forest transition-transform duration-700 hover:scale-y-110 lg:block"></div>
              <h2 className="mb-8 flex items-center gap-4 text-sm font-black uppercase tracking-[0.4em] text-forest">
                <span className="h-[2px] w-12 bg-forest"></span> Next Steps
              </h2>
              <h3 className="mb-8 text-[2rem] font-black uppercase leading-[0.9] tracking-tighter text-foreground drop-shadow-[5px_5px_0_rgba(0,0,0,0.02)] sm:mb-10 sm:text-[2.5rem] sm:leading-[0.85] md:text-[5rem] lg:text-[6rem]">
                Continue <br />
                <span className="stroke-text bg-gradient-to-r from-foreground to-foreground/30 bg-clip-text text-transparent mix-blend-normal">
                  Your
                </span>
                <br />
                Journey
              </h3>
              <p className="max-w-xl border-l-[4px] border-forest bg-muted/30 p-6 text-base font-bold leading-relaxed text-foreground/80 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] dark:shadow-[10px_10px_0px_0px_rgba(255,255,255,1)] backdrop-blur-md transition-colors selection:bg-forest/30 hover:bg-muted/50 sm:p-8 sm:text-xl">
                Data maturity is not a static destination. Explore related
                services to help you define and execute a resilient, scalable,
                and high-impact enterprise data strategy.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-20 mt-12 hidden h-full items-end justify-end md:col-span-12 md:flex lg:col-span-5 lg:mt-0 lg:justify-center"
            >
              <div className="group relative flex w-full max-w-[480px] flex-col overflow-visible bg-foreground text-background shadow-[12px_12px_0px_0px_hsl(var(--forest)/1)]">
                <div className="absolute -right-6 -top-6 z-30 h-20 w-20 border-r-[4px] border-t-[4px] border-forest transition-transform duration-700 group-hover:-translate-y-2 group-hover:translate-x-2" />

                <div className="relative h-[280px] w-full bg-background p-1.5 pb-0">
                  <div className="relative h-full w-full overflow-hidden bg-black outline outline-1 outline-border/20">
                    <Image
                      src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
                      alt="Future Readiness"
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="ease-[cubic-bezier(0.19,1,0.22,1)] object-cover opacity-80 grayscale-[80%] transition-all duration-1000 group-hover:scale-110 group-hover:opacity-100 group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-forest/20 mix-blend-overlay transition-colors duration-1000 group-hover:bg-transparent" />

                    <div className="absolute bottom-4 left-4 flex gap-2">
                      <div className="h-6 w-1.5 bg-forest shadow-[0_0_10px_rgba(34,197,94,0.6)]" />
                      <div className="mt-auto h-4 w-1.5 bg-forest/60" />
                      <div className="mt-auto h-8 w-1.5 bg-forest/30" />
                    </div>

                    <div className="absolute right-4 top-4 border border-white/20 bg-black/60 px-2 py-1 backdrop-blur-md">
                      <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white/80">
                        Telemetry: Active
                      </span>
                    </div>
                  </div>
                </div>

                <div className="relative p-6 md:p-10">
                  <div className="pointer-events-none absolute right-6 top-10 rotate-90 select-none text-[3.5rem] font-black tracking-tighter text-background/10 transition-colors duration-700 group-hover:text-background/20">
                    FWD
                  </div>

                  <div className="relative z-10 mb-8 flex w-fit items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center border-2 border-forest bg-transparent text-forest transition-colors duration-500 group-hover:bg-forest group-hover:text-foreground">
                      <Target size={18} strokeWidth={2.5} />
                    </div>
                    <span className="text-xs font-black uppercase tracking-[0.3em] text-forest">
                      Future Readiness
                    </span>
                  </div>
                  <p className="relative z-10 border-l-[3px] border-forest/40 pl-5 text-[1.05rem] font-bold leading-relaxed text-background/80">
                    The core capability that enables your organization to
                    compound value, integrate AI sustainably, and operate with
                    absolute clarity.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 gap-0 border-4 border-foreground bg-foreground p-1 md:grid-cols-3">
            <Link
              href="/services/define-your-roadmap/enterprise-data-strategy"
              className="group block h-full border border-transparent bg-card p-6 transition-colors duration-500 hover:border-forest md:p-10"
            >
              <div className="mb-10 flex h-16 w-16 items-center justify-center rounded-none border border-forest/30 bg-forest/10 text-forest shadow-[4px_4px_0_0_hsl(var(--forest)/1)] transition-transform duration-500 group-hover:scale-110">
                <Target size={28} strokeWidth={2.5} />
              </div>
              <h3 className="mb-4 text-2xl font-black uppercase leading-[0.9] tracking-tight text-foreground transition-colors group-hover:text-forest">
                Enterprise
                <br />
                Data Strategy
              </h3>
              <p className="mb-10 text-[0.95rem] font-medium leading-relaxed text-foreground/80">
                Align your data initiatives with business outcomes and build a
                comprehensive roadmap.
              </p>
              <div className="border-t-[3px] border-border pt-6 transition-colors group-hover:border-forest/50">
                <span className="flex items-center gap-3 text-sm font-black uppercase tracking-[0.2em] text-forest transition-colors group-hover:text-forest/90">
                  LEARN MORE{" "}
                  <ChevronRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" />
                </span>
              </div>
            </Link>

            <Link
              href="/services/define-your-roadmap/stack-evaluation"
              className="group block h-full border border-transparent bg-card p-6 transition-colors duration-500 hover:border-cyan-500 md:p-10"
            >
              <div className="mb-10 flex h-16 w-16 items-center justify-center rounded-none border border-cyan-500/30 bg-cyan-500/10 text-cyan-600 shadow-[4px_4px_0_0_rgba(6,182,212,1)] transition-transform duration-500 group-hover:scale-110 dark:text-cyan-400">
                <PieChart size={28} strokeWidth={2.5} />
              </div>
              <h3 className="mb-4 text-2xl font-black uppercase leading-[0.9] tracking-tight text-foreground transition-colors group-hover:text-cyan-600 dark:group-hover:text-cyan-400">
                Platform
                <br />
                Evaluation
              </h3>
              <p className="mb-10 text-[0.95rem] font-medium leading-relaxed text-foreground/80">
                Objective analysis to select the right tools and architecture
                for your specific needs.
              </p>
              <div className="border-t-[3px] border-border pt-6 transition-colors group-hover:border-cyan-500/50">
                <span className="flex items-center gap-3 text-sm font-black uppercase tracking-[0.2em] text-cyan-600 transition-colors group-hover:text-cyan-500 dark:text-cyan-400">
                  LEARN MORE{" "}
                  <ChevronRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" />
                </span>
              </div>
            </Link>

            <Link
              href="/services/build-your-foundation/foundation-build"
              className="group block h-full border border-transparent bg-card p-6 transition-colors duration-500 hover:border-blue-500 md:p-10"
            >
              <div className="mb-10 flex h-16 w-16 items-center justify-center rounded-none border border-blue-500/30 bg-blue-500/10 text-blue-600 shadow-[4px_4px_0_0_rgba(59,130,246,1)] transition-transform duration-500 group-hover:scale-110 dark:text-blue-400">
                <CheckCircle2 size={28} strokeWidth={2.5} />
              </div>
              <h3 className="mb-4 text-2xl font-black uppercase leading-[0.9] tracking-tight text-foreground transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400">
                Foundation
                <br />
                Build
              </h3>
              <p className="mb-10 text-[0.95rem] font-medium leading-relaxed text-foreground/80">
                Implement a robust, scalable data architecture that serves as
                the bedrock for analytics.
              </p>
              <div className="border-t-[3px] border-border pt-6 transition-colors group-hover:border-blue-500/50">
                <span className="flex items-center gap-3 text-sm font-black uppercase tracking-[0.2em] text-blue-600 transition-colors group-hover:text-blue-500 dark:text-blue-400">
                  LEARN MORE{" "}
                  <ChevronRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-t-[12px] border-forest bg-muted/30 py-16 text-foreground md:py-24 lg:py-32">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[200%] w-[150%] -translate-x-1/2 -translate-y-1/2 rounded-none bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.15),transparent_40%)] blur-[100px]" />

        <div className="container relative z-10 mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h2 className="mb-8 select-none text-4xl font-black uppercase leading-[0.85] tracking-tighter text-foreground sm:mb-10 sm:text-[2.5rem] md:text-[7rem]">
              <span className="text-forest underline decoration-forest/50 underline-offset-8">
                Know
              </span>
              <br /> Where you
              <br />
              Stand.
            </h2>

            <div className="relative mx-auto max-w-4xl border-[4px] border-foreground bg-card/95 p-6 shadow-[16px_16px_0_0_rgba(0,0,0,1)] backdrop-blur-xl sm:p-8 md:p-12 dark:shadow-[16px_16px_0_0_rgba(255,255,255,1)]">
              <div className="absolute -left-4 -top-4 h-8 w-8 border-l-4 border-t-4 border-forest"></div>
              <div className="absolute -bottom-4 -right-4 h-8 w-8 border-b-4 border-r-4 border-forest"></div>

              <p className="mx-auto mb-6 text-xl font-black uppercase leading-relaxed tracking-wide text-foreground md:text-2xl">
                A maturity assessment gives you the baseline you need to make
                confident Microsoft Fabric and Azure investments.
              </p>
              <p className="mx-auto mb-10 border-t-2 border-border/50 pt-6 text-lg font-bold leading-relaxed text-muted-foreground md:text-xl">
                Let&apos;s find your gaps before they find you.
              </p>

              <div className="flex w-full justify-center">
                <Link href="/contact?service=maturity-assessment" passHref className="w-full sm:w-auto">
                  <Button
                    variant="hero"
                    size="lg"
                    className="group relative flex w-full items-center justify-center rounded-none border-4 border-foreground bg-transparent py-6 text-center text-base font-black uppercase tracking-wider text-foreground shadow-[12px_12px_0_0_rgba(0,0,0,1)] transition-all duration-300 hover:translate-x-3 hover:translate-y-3 hover:border-forest hover:bg-forest hover:text-forest-foreground hover:shadow-none sm:w-auto sm:py-8 sm:text-xl sm:tracking-[0.2em] dark:shadow-[12px_12px_0_0_rgba(255,255,255,1)] dark:hover:shadow-none"
                  >
                    <span className="flex h-full w-full items-center justify-center px-12 sm:px-16">Schedule Assessment</span>
                    <ChevronRight className="absolute right-4 h-6 w-6 transition-transform group-hover:translate-x-3 sm:right-6 sm:h-8 sm:w-8" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
