"use client";

import { motion } from "framer-motion";
import { CheckCircle2, PieChart, ShieldCheck, Target } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function DeliverablesSection() {
  return (
    <section className="relative border-b-2 border-t-[8px] border-foreground bg-muted/20 py-16 lg:py-24">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="container relative z-10 mx-auto max-w-[1400px] px-6">
        <div className="mb-16 flex flex-col justify-between gap-8 border-b-4 border-forest pb-8 md:flex-row md:items-end">
          <div className="max-w-4xl">
            <h2 className="mb-6 inline-block border border-forest/30 bg-forest/10 px-4 py-2 text-sm font-black uppercase tracking-[0.4em] text-forest">
              [ DELIVERABLES ]
            </h2>
            <h3 className="text-3xl font-black uppercase leading-[0.9] tracking-tighter text-foreground sm:text-[2.5rem] md:text-[4.5rem]">
              Clarity over
              <br />
              assumptions.
            </h3>
          </div>
          <p className="max-w-sm border-l-[3px] border-forest bg-background/50 p-4 pl-6 text-base font-bold leading-relaxed text-foreground/80 backdrop-blur-sm">
            Every assessment produces the same high-quality artifacts — no
            shortcuts, no templated scores. You get evidence, priorities, and
            a path forward.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-[2px] border-[3px] border-foreground bg-foreground p-[2px] shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] md:grid-cols-2 lg:grid-cols-4 dark:shadow-[16px_16px_0px_0px_rgba(255,255,255,1)]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="group relative col-span-1 flex min-h-[300px] flex-col justify-between overflow-hidden bg-card p-6 transition-colors duration-500 hover:bg-forest/5 sm:min-h-[350px] sm:p-8 md:col-span-2 lg:p-12"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(var(--primary)/0.08),transparent_50%)]" />
            <div className="relative z-10 mb-16 flex items-start justify-between">
              <PieChart
                className="h-16 w-16 text-forest transition-colors duration-500 group-hover:text-emerald-300"
                strokeWidth={1}
              />
              <span className="text-[6rem] font-black leading-none tracking-tighter text-foreground/5 mix-blend-multiply transition-colors duration-500 group-hover:text-emerald-500/20 dark:mix-blend-screen">
                D-01
              </span>
            </div>
            <div className="relative z-10 max-w-xl">
              <p className="mb-4 inline-block border-b-2 border-forest/30 pb-1 text-sm font-black uppercase tracking-[0.2em] text-forest transition-colors duration-500 group-hover:border-emerald-300/50 group-hover:text-emerald-300">
                Six dimensions, evidence-based scores
              </p>
              <h4 className="mb-6 text-4xl font-black uppercase leading-[0.9] tracking-tight transition-colors duration-500 group-hover:text-white">
                Maturity Scorecard
              </h4>
              <p className="text-lg font-semibold leading-relaxed text-muted-foreground transition-colors duration-500 group-hover:text-emerald-50">
                A scored assessment across six dimensions: Data Management,
                Analytics Capability, Governance, Technology, Organization,
                and Culture. Each dimension rated with clear evidence from
                interviews and technical review — not gut feel.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="group relative flex min-h-[300px] flex-col justify-between bg-card p-6 transition-colors duration-500 hover:bg-cyan-500/5 sm:min-h-[350px] sm:p-8 lg:p-12"
          >
            <div className="relative z-10 mb-14 flex items-start justify-between">
              <Target
                className="h-12 w-12 text-cyan-500 transition-colors duration-500 group-hover:text-cyan-300"
                strokeWidth={1}
              />
              <span className="text-[4rem] font-black leading-none tracking-tighter text-foreground/5 mix-blend-multiply transition-colors duration-500 group-hover:text-cyan-500/30 dark:mix-blend-screen">
                D-02
              </span>
            </div>
            <div className="relative z-10">
              <p className="mb-4 inline-block border-b border-cyan-500/30 pb-1 text-[0.7rem] font-black uppercase tracking-[0.2em] text-cyan-500 transition-colors duration-500 group-hover:border-cyan-300/50 group-hover:text-cyan-300">
                Current state vs. target
              </p>
              <h4 className="mb-6 text-3xl font-black uppercase leading-[0.9] tracking-tight transition-colors duration-500 group-hover:text-white">
                Gap Analysis
              </h4>
              <p className="text-base font-semibold leading-relaxed text-muted-foreground transition-colors duration-500 group-hover:text-cyan-50">
                For each dimension, we document where you are today vs. where
                you need to be. Gaps prioritized by business impact, not ease
                of implementation.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="group relative flex min-h-[300px] flex-col justify-between bg-card p-6 transition-colors duration-500 hover:bg-blue-500/5 sm:min-h-[350px] sm:p-8 lg:p-12"
          >
            <div className="relative z-10 mb-14 flex items-start justify-between">
              <ShieldCheck
                className="h-12 w-12 text-blue-500 transition-colors duration-500 group-hover:text-blue-300"
                strokeWidth={1}
              />
              <span className="text-[4rem] font-black leading-none tracking-tighter text-foreground/5 mix-blend-multiply transition-colors duration-500 group-hover:text-blue-500/30 dark:mix-blend-screen">
                D-03
              </span>
            </div>
            <div className="relative z-10">
              <p className="mb-4 inline-block border-b border-blue-500/30 pb-1 text-[0.7rem] font-black uppercase tracking-[0.2em] text-blue-500 transition-colors duration-500 group-hover:border-blue-300/50 group-hover:text-blue-300">
                Architecture review
              </p>
              <h4 className="mb-6 text-3xl font-black uppercase leading-[0.9] tracking-tight transition-colors duration-500 group-hover:text-white">
                Technical Findings
              </h4>
              <p className="text-base font-semibold leading-relaxed text-muted-foreground transition-colors duration-500 group-hover:text-blue-50">
                Specific observations from our architecture review:
                Fabric/Azure configuration, pipeline reliability, Power BI
                semantic model design, Purview governance implementation,
                security configuration, and technical debt.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="group relative col-span-1 flex flex-col items-center justify-between gap-12 overflow-hidden bg-foreground p-8 text-background sm:p-10 md:col-span-2 md:flex-row lg:col-span-4 lg:p-16 lg:px-6"
          >
            <div className="pointer-events-none absolute right-0 top-0 h-full w-full max-w-[800px] bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.25),transparent_60%)] opacity-50 transition-opacity duration-700 group-hover:opacity-100" />

            <div className="relative z-10 max-w-4xl">
              <div className="mb-8 flex items-center gap-6">
                <CheckCircle2 className="h-14 w-14 text-mint" />
                <span className="text-[4rem] font-black leading-none tracking-tighter text-background/10 md:text-[6rem]">
                  D-04
                </span>
              </div>
              <h4 className="mb-8 text-[2rem] font-black uppercase leading-[0.85] tracking-tight text-background lg:text-[4.5rem]">
                Prioritized Recommendations &amp; Exec Summary
              </h4>
              <p className="max-w-3xl border-l-[3px] border-forest pl-6 text-xl font-bold leading-relaxed text-background/80">
                A prioritized set of recommendations with rationale and rough
                effort estimates. We explain why and in what order. Delivered
                alongside a one-page summary for leadership that drives
                decisions, not just informs.
              </p>
            </div>

            <div className="relative z-10 hidden pr-4 lg:block">
              <div className="rotate-180 select-none text-[4rem] font-black uppercase leading-[0.75] tracking-tighter text-background/5 transition-colors [writing-mode:vertical-rl] group-hover:text-background/10 sm:text-[6rem] xl:text-[8rem]">
                ROADMAP
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
