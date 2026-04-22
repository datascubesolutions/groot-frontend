// @ts-nocheck
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
  linkUrl,
}) {
  return (
    <section className="relative overflow-hidden border-t border-border/50 bg-background py-16 text-foreground md:py-24">
      {/* Power BI Dashboard Background Art in Free Space */}
      <div className="pointer-events-none absolute -left-[10%] bottom-0 hidden h-[800px] w-[1000px] opacity-10 mix-blend-screen 2xl:block">
        <Image
          src="/images/fabric/powerbi_dashboard.png"
          alt="Power BI Dashboard"
          fill
          className="object-contain object-bottom"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-4xl text-center antialiased md:mb-20"
        >
          <span className="mb-4 block text-sm font-semibold uppercase tracking-widest text-forest">
            Real Results
          </span>
          {outcomeMetric && outcomeMetricLabel && (
            <div className="mb-6 inline-flex items-baseline gap-2 rounded-2xl border border-white/15 bg-forest px-6 py-3">
              <span className="text-4xl font-black tracking-tight text-forest-foreground md:text-5xl">
                {outcomeMetric}
              </span>
              <span className="text-sm font-semibold uppercase tracking-wider text-forest-foreground/75">
                {outcomeMetricLabel}
              </span>
            </div>
          )}
          <h2 className="text-balance text-4xl font-semibold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
            {title}
          </h2>
        </motion.div>

        <div className="flex flex-col overflow-hidden rounded-3xl border border-border/50 shadow-2xl">
          {/* Top Half: Context vs Reality */}
          <div className="grid grid-cols-1 antialiased md:grid-cols-2">
            {/* Context Block */}
            {context && (
              <div className="border-r border-border/50 bg-card/60 p-10 backdrop-blur-xl md:p-14">
                <h3 className="mb-6 flex items-center gap-3 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                  <div className="h-2 w-2 rounded-full bg-border" />
                  The Context
                </h3>
                <p className="text-balance text-lg font-normal leading-relaxed text-muted-foreground/90 lg:text-xl">
                  {context}
                </p>
              </div>
            )}

            {/* Reality Block (Problem) */}
            {reality && (
              <div className="bg-forest p-10 md:p-14">
                <h3 className="mb-6 flex items-center gap-3 text-sm font-semibold uppercase tracking-widest text-white/70">
                  <div className="h-2 w-2 rounded-full bg-white" />
                  The Reality
                </h3>
                <p className="text-balance text-lg font-normal leading-relaxed text-white/90 lg:text-xl">
                  {reality}
                </p>
              </div>
            )}
          </div>

          {/* Middle: What we built */}
          {build && build.length > 0 && (
            <div className="border-y border-border/50 bg-background/80 p-10 antialiased backdrop-blur-xl md:p-14">
              <h3 className="mb-8 flex items-center gap-3 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                <div className="h-2 w-2 rounded-full bg-forest" />
                What We Built
              </h3>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {build.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-forest/10">
                      <ChevronRight className="h-4 w-4 text-forest" />
                    </div>
                    <span className="font-normal leading-relaxed text-muted-foreground/90">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Bottom Half: The Outcome */}
          {outcome && (
            <div className="relative grid grid-cols-1 items-stretch overflow-hidden bg-forest/5 antialiased lg:grid-cols-2">
              <div className="relative z-10 flex flex-col justify-center p-10 md:p-14">
                <div className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 rounded-full bg-forest/5 blur-[100px]" />
                <h3 className="mb-6 flex items-center gap-3 text-sm font-semibold uppercase tracking-widest text-forest/80">
                  <div className="h-2 w-2 rounded-full bg-forest" />
                  The Outcome
                </h3>
                <p className="max-w-4xl text-2xl font-semibold leading-relaxed tracking-tight text-foreground md:text-3xl">
                  &quot;{outcome}&quot;
                </p>

                {/* CTA */}
                {linkUrl && linkText && (
                  <div className="mt-10">
                    <Link
                      href={linkUrl}
                      className="group inline-flex w-fit items-center gap-2 rounded-full bg-forest px-6 py-3 text-sm font-semibold uppercase tracking-widest text-white transition-colors hover:bg-forest/90"
                    >
                      {linkText}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                )}
              </div>

              <div className="relative hidden h-full min-h-[300px] bg-muted/30 lg:block">
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
