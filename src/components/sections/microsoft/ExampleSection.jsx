"use client";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function ExampleSection({
  title = "Real Example",
  outcomeMetric,
  outcomeMetricLabel,
  context,
  reality,
  build,
  outcome,
  linkText,
  linkUrl
}) {
  return (
    <section className="py-16 md:py-24 bg-background text-foreground relative border-t border-border/50 overflow-hidden">

      {/* Power BI Dashboard Background Art in Free Space */}
      <div className="hidden 2xl:block absolute bottom-0 -left-[10%] w-[1000px] h-[800px] opacity-10 pointer-events-none mix-blend-screen">
        <Image src="/images/fabric/powerbi_dashboard.png" alt="Power BI Dashboard" fill className="object-contain object-bottom" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background pointer-events-none" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mx-auto mb-16 md:mb-20 max-w-4xl antialiased"
        >
          <span className="text-forest font-semibold tracking-widest uppercase text-sm mb-4 block">
            Real Results
          </span>
          {outcomeMetric && outcomeMetricLabel && (
            <div className="inline-flex items-baseline gap-2 px-6 py-3 rounded-2xl bg-forest border border-white/15 mb-6">
              <span className="text-4xl md:text-5xl font-black text-forest-foreground tracking-tight">{outcomeMetric}</span>
              <span className="text-forest-foreground/75 font-semibold uppercase tracking-wider text-sm">{outcomeMetricLabel}</span>
            </div>
          )}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-foreground tracking-tight text-balance">
            {title}
          </h2>
        </motion.div>

        <div className="flex flex-col rounded-3xl overflow-hidden shadow-2xl border border-border/50">

          {/* Top Half: Context vs Reality */}
          <div className="grid grid-cols-1 md:grid-cols-2 antialiased">
            {/* Context Block */}
            {context && (
              <div className="bg-card/60 backdrop-blur-xl p-10 md:p-14 border-r border-border/50">
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-6 flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-border" />
                  The Context
                </h3>
                <p className="text-muted-foreground/90 leading-relaxed text-lg lg:text-xl font-normal text-balance">
                  {context}
                </p>
              </div>
            )}

            {/* Reality Block (Problem) */}
            {reality && (
              <div className="bg-forest p-10 md:p-14">
                <h3 className="text-sm font-semibold text-white/70 uppercase tracking-widest mb-6 flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-white" />
                  The Reality
                </h3>
                <p className="text-white/90 leading-relaxed text-lg lg:text-xl font-normal text-balance">
                  {reality}
                </p>
              </div>
            )}
          </div>

          {/* Middle: What we built */}
          {build && build.length > 0 && (
            <div className="bg-background/80 backdrop-blur-xl border-y border-border/50 p-10 md:p-14 antialiased">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-8 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-forest" />
                What We Built
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {build.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="mt-1 w-6 h-6 rounded-full bg-forest/10 flex items-center justify-center flex-shrink-0">
                      <ChevronRight className="w-4 h-4 text-forest" />
                    </div>
                    <span className="text-muted-foreground/90 leading-relaxed font-normal">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Bottom Half: The Outcome */}
          {outcome && (
            <div className="bg-forest/5 relative overflow-hidden grid grid-cols-1 lg:grid-cols-2 items-stretch antialiased">
              <div className="p-10 md:p-14 relative z-10 flex flex-col justify-center">
                <div className="absolute right-0 bottom-0 w-64 h-64 bg-forest/5 blur-[100px] rounded-full pointer-events-none" />
                <h3 className="text-sm font-semibold text-forest/80 uppercase tracking-widest mb-6 flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-forest" />
                  The Outcome
                </h3>
                <p className="text-2xl md:text-3xl text-foreground font-semibold leading-relaxed max-w-4xl tracking-tight">
                  &quot;{outcome}&quot;
                </p>

                {/* CTA */}
                {linkUrl && linkText && (
                  <div className="mt-10">
                    <Link
                      href={linkUrl}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-forest text-white font-semibold hover:bg-forest/90 transition-colors group text-sm uppercase tracking-widest w-fit"
                    >
                      {linkText}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                )}
              </div>

              <div className="relative hidden lg:block h-full min-h-[300px] bg-muted/30">
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2015&auto=format&fit=crop"
                  alt="Finance Team in Boardroom"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
