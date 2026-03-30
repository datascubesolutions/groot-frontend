"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function MicrosoftCTA({
  title = "Ready to get started?",
  description = "We'll assess your current state and map out what a solid foundation looks like for your organization.",
  primaryCta = "Get Your Assessment",
  primaryCtaLink = "/contact",
  secondaryCta = "Talk to Our Team",
  secondaryCtaLink = "/contact",
  stats = []
}) {
  // Dynamically highlight the last word of the title
  const words = title.split(" ");
  const lastWord = words.pop();
  const titleWithoutLast = words.join(" ");

  return (
    <section className="py-16 md:py-24 bg-background relative overflow-hidden z-0 border-t border-border/50">
      <div className="container mx-auto px-6 relative z-10 w-full max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-[2.5rem] bg-card/60 backdrop-blur-2xl overflow-hidden shadow-2xl border border-border/50"
        >
          {/* Background Accents */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            {/* Fabric Logo Watermark */}
            <div className="absolute top-1/2 right-[-5%] -translate-y-1/2 w-[800px] h-[800px] opacity-[0.03] -rotate-12">
              <Image src="/svg/fabric_48_color.svg" alt="Fabric Background" fill className="object-contain" />
            </div>

            {/* Elegant Light Glows */}
            <div className="absolute -top-[30%] -right-[10%] w-[600px] h-[600px] bg-forest/5 blur-[100px] rounded-full filter" />
            <div className="absolute bottom-[-30%] left-[-10%] w-[600px] h-[600px] bg-forest/5 blur-[100px] rounded-full filter" />
          </div>

          <div className="relative z-10 flex flex-col xl:flex-row items-center justify-between p-10 md:p-16 lg:p-24 gap-12 lg:gap-20">

            {/* Text Content Area */}
            <div className="w-full xl:w-3/5 text-center xl:text-left flex flex-col items-center xl:items-start antialiased">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6 leading-tight tracking-tight text-balance">
                {titleWithoutLast} <span className="text-forest font-bold">{lastWord}</span>
              </h2>

              <p className="text-muted-foreground/90 text-lg md:text-xl font-normal max-w-2xl leading-relaxed text-balance mb-8">
                {description}
              </p>

              {stats && stats.length > 0 && (
                <div className="flex flex-wrap gap-6 md:gap-10">
                  {stats.map((stat, idx) => (
                    <div key={idx} className="text-left">
                      <div className="text-2xl md:text-3xl font-black text-forest">{stat.value}</div>
                      <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Actions/Buttons Area */}
            <div className="w-full xl:w-2/5 flex flex-col gap-4 max-w-md mx-auto xl:mx-0 shrink-0 antialiased">
              <Link
                href={primaryCtaLink}
                className={cn(
                  "w-full inline-flex bg-forest hover:bg-forest/90 text-white px-8 py-5 rounded-full font-semibold text-sm tracking-wider uppercase transition-all shadow-lg shadow-forest/20 items-center justify-between group hover:scale-[1.02] active:scale-[0.98]",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                )}
              >
                <span className="text-left">{primaryCta}</span>
                <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors" aria-hidden>
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>

              <Link
                href={secondaryCtaLink}
                className={cn(
                  "w-full inline-flex bg-card border border-border/50 hover:bg-muted/50 text-foreground px-8 py-5 rounded-full font-semibold text-sm tracking-wider uppercase transition-all items-center justify-center shadow-sm",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                )}
              >
                {secondaryCta}
              </Link>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
