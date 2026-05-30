// @ts-nocheck
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
  stats = [],
}) {
  // Dynamically highlight the last word of the title
  const words = title.split(" ");
  const lastWord = words.pop();
  const titleWithoutLast = words.join(" ");

  return (
    <section className="relative z-0 overflow-hidden border-t border-border/50 bg-background py-12 md:py-16">
      <div className="container relative z-10 mx-auto w-full max-w-[1400px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-[2.5rem] border border-border/50 bg-card/60 shadow-2xl backdrop-blur-2xl"
        >
          {/* Background Accents */}
          <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
            {/* Fabric Logo Watermark */}
            <div className="absolute right-[-5%] top-1/2 h-[800px] w-[800px] -translate-y-1/2 -rotate-12 opacity-[0.03]">
              <Image
                src="/svg/fabric_48_color.svg"
                alt="Fabric Background"
                fill
                className="object-contain"
              />
            </div>

            {/* Elegant Light Glows */}
            <div className="absolute -right-[10%] -top-[30%] h-[600px] w-[600px] rounded-full bg-forest/5 blur-[100px] filter" />
            <div className="absolute bottom-[-30%] left-[-10%] h-[600px] w-[600px] rounded-full bg-forest/5 blur-[100px] filter" />
          </div>

          <div className="relative z-10 flex flex-col items-center justify-between gap-8 p-8 md:p-12 lg:gap-16 lg:p-16 xl:flex-row">
            {/* Text Content Area */}
            <div className="flex w-full flex-col items-center text-center antialiased xl:w-3/5 xl:items-start xl:text-left">
              <h2 className="mb-6 text-balance text-4xl font-semibold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
                {titleWithoutLast}{" "}
                <span className="font-bold text-forest">{lastWord}</span>
              </h2>

              <p className="mb-8 max-w-2xl text-balance text-lg font-normal leading-relaxed text-muted-foreground/90 md:text-xl">
                {description}
              </p>

              {stats && stats.length > 0 && (
                <div className="flex flex-wrap gap-6 md:gap-10">
                  {stats.map((stat, idx) => (
                    <div key={idx} className="text-left">
                      <div className="text-2xl font-black text-forest md:text-3xl">
                        {stat.value}
                      </div>
                      <div className="text-sm font-medium text-muted-foreground">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Actions/Buttons Area */}
            <div className="mx-auto flex w-full max-w-md shrink-0 flex-col gap-4 antialiased xl:mx-0 xl:w-2/5">
              <Link
                href={primaryCtaLink}
                className={cn(
                  "group inline-flex w-full items-center justify-between rounded-full bg-forest px-8 py-5 text-sm font-semibold uppercase tracking-wider text-white shadow-lg shadow-forest/20 transition-all hover:scale-[1.02] hover:bg-forest/90 active:scale-[0.98]",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                )}
              >
                <span className="text-left">{primaryCta}</span>
                <span
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 transition-colors group-hover:bg-white/30"
                  aria-hidden
                >
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>

              <Link
                href={secondaryCtaLink}
                className={cn(
                  "inline-flex w-full items-center justify-center rounded-full border border-border/50 bg-card px-8 py-5 text-sm font-semibold uppercase tracking-wider text-foreground shadow-sm transition-all hover:bg-muted/50",
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
