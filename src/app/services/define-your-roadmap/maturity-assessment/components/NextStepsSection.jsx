"use client";

import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { CheckCircle2, ChevronRight, CircleHelp, HelpCircle } from "lucide-react";
import Link from "next/link";

export default function NextStepsSection() {
  return (
    <section className="relative flex flex-col overflow-hidden border-t-2 border-foreground bg-background py-16 md:py-24 lg:py-28">
      {/* Subtle grid pattern — matches other page sections */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="pointer-events-none absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-forest/10 blur-[80px]" />
      <div className="pointer-events-none absolute -right-24 bottom-1/4 h-72 w-72 rounded-full bg-forest/5 blur-[80px]" />

      {/* Decorative question mark watermarks */}
      <div className="pointer-events-none absolute left-[8%] top-[18%] hidden text-forest/8 lg:block">
        <CircleHelp className="h-32 w-32" strokeWidth={1} />
      </div>
      <div className="pointer-events-none absolute right-[10%] bottom-[20%] hidden text-forest/6 lg:block">
        <HelpCircle className="h-24 w-24" strokeWidth={1} />
      </div>

      <div className="container relative z-10 mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          {/* Eyebrow */}
          <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-foreground/15 bg-muted/40 px-4 py-2 shadow-sm backdrop-blur-sm">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-forest/10 text-forest">
              <CircleHelp className="h-4 w-4" strokeWidth={2.5} />
            </span>
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
              Discovery starts here
            </span>
          </div>

          <h2 className="mb-10 text-balance font-serif text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-[4.25rem]">
            <span className="text-forest">Know</span> where
            <br className="hidden sm:block" />
            {" "}you stand
            <span className="inline-flex align-middle ml-2 sm:ml-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-forest/30 bg-muted/50 text-forest shadow-sm sm:h-12 sm:w-12">
                <HelpCircle className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2} />
              </span>
            </span>
          </h2>

          <div className="relative mx-auto max-w-3xl overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,0.05)] dark:shadow-[12px_12px_0px_0px_rgba(255,255,255,0.05)] sm:p-10 md:p-12">
            {/* Accent corners */}
            <div className="absolute left-0 top-0 h-16 w-1 bg-gradient-to-b from-forest to-forest/20" />
            <div className="pointer-events-none absolute -right-6 -top-6 text-forest/[0.06]">
              <CircleHelp className="h-28 w-28" strokeWidth={1.5} />
            </div>

            <p className="relative z-10 mx-auto mb-6 max-w-2xl text-lg font-semibold leading-relaxed text-foreground md:text-xl">
              A maturity assessment gives you the baseline you need to make
              confident Microsoft Fabric and Azure investments.
            </p>

            <div className="relative z-10 mx-auto mb-8 flex max-w-xl items-center justify-center gap-3 border-t border-border pt-6">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-forest/10 text-forest">
                <HelpCircle className="h-4 w-4" strokeWidth={2.5} />
              </span>
              <p className="text-base font-medium italic leading-relaxed text-muted-foreground md:text-lg">
                Let&apos;s find your gaps before they find you.
              </p>
            </div>

            {/* Trust signals */}
            <div className="relative z-10 mb-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-left">
              {[
                "Evidence-based scoring",
                "3–4 week delivery",
                "Executive-ready summary",
              ].map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                >
                  <CheckCircle2 className="h-3.5 w-3.5 text-forest" strokeWidth={2.5} />
                  {item}
                </span>
              ))}
            </div>

            <div className="relative z-10 flex w-full justify-center">
              <Link href="/contact?service=maturity-assessment" passHref className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="group relative flex w-full items-center justify-center gap-3 rounded-full border-0 bg-foreground px-10 py-6 text-sm font-bold uppercase tracking-[0.15em] text-background shadow-lg shadow-foreground/20 transition-all duration-300 hover:bg-foreground/90 hover:shadow-xl hover:shadow-foreground/25 sm:w-auto sm:px-14 sm:py-7 sm:text-base"
                >
                  Schedule Assessment
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 transition-colors group-hover:bg-white/25">
                    <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
