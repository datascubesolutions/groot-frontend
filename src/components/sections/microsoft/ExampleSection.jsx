"use client";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import Link from "next/link";

export function ExampleSection({
  title = "Real Example",
  context,
  reality,
  build,
  outcome,
  linkText,
  linkUrl
}) {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-background text-foreground relative border-t border-border/50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mx-auto mb-16 md:mb-20 max-w-3xl"
        >
          <span className="text-forest font-bold tracking-wider uppercase text-sm mb-4 block">
            Case in Point
          </span>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight text-foreground mb-6">
            {title}
          </h2>
        </motion.div>

        <div className="flex flex-col rounded-3xl overflow-hidden shadow-2xl border border-border">

          {/* Top Half: Context vs Reality */}
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Context Block */}
            {context && (
              <div className="bg-card p-10 md:p-14 border-r border-border">
                <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-6 flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-border" />
                  The Context
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg lg:text-xl font-medium">
                  {context}
                </p>
              </div>
            )}

            {/* Reality Block (Problem) */}
            {reality && (
              <div className="bg-forest p-10 md:p-14">
                <h3 className="text-sm font-bold text-white/70 uppercase tracking-widest mb-6 flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-white" />
                  The Reality
                </h3>
                <p className="text-white leading-relaxed text-lg lg:text-xl font-medium">
                  {reality}
                </p>
              </div>
            )}
          </div>

          {/* Middle: What we built */}
          {build && build.length > 0 && (
            <div className="bg-background border-y border-border p-10 md:p-14">
              <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-8 flex items-center gap-3">
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
                    <span className="text-muted-foreground leading-relaxed font-medium">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Bottom Half: The Outcome */}
          {outcome && (
            <div className="bg-slate-50 p-10 md:p-14 relative overflow-hidden">
              <div className="absolute right-0 bottom-0 w-64 h-64 bg-forest/5 blur-[100px] rounded-full pointer-events-none" />
              <div className="relative z-10">
                <h3 className="text-sm font-bold text-forest/70 uppercase tracking-widest mb-6 flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-forest" />
                  The Outcome
                </h3>
                <p className="text-2xl md:text-3xl text-foreground font-bold leading-relaxed max-w-4xl">
                  &quot;{outcome}&quot;
                </p>
              </div>

              {/* CTA */}
              {linkUrl && linkText && (
                <div className="relative z-10 mt-10">
                  <Link
                    href={linkUrl}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-forest text-white font-bold hover:bg-forest/90 transition-colors group text-sm uppercase tracking-wider"
                  >
                    {linkText}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              )}
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
