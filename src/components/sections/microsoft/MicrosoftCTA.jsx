"use client";

import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { Activity, ArrowRight } from "lucide-react";
import Link from "next/link";

export function MicrosoftCTA({
  title = "Ready to get started?",
  description = "We'll assess your current state and map out what a solid foundation looks like for your organization.",
  primaryCta = "Get Your Assessment",
  primaryCtaLink = "/contact",
  secondaryCta = "Talk to Our Team",
  secondaryCtaLink = "/contact"
}) {
  return (
    <section className="py-16 md:py-24 lg:py-32 relative overflow-hidden bg-background border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="bg-forest border border-forest/50 shadow-2xl rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden group hover:shadow-[0_20px_40px_rgba(22,78,60,0.2)] transition-shadow duration-500"
        >
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[100px] rounded-full pointer-events-none group-hover:bg-white/15 transition-colors duration-700" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 blur-[100px] rounded-full pointer-events-none" />

          <div className="relative z-10">
            {/* Icon */}
            <div className="mx-auto inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 text-white mb-8 border border-white/30">
              <Activity className="w-8 h-8" />
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8">
              {title}
            </h2>

            <p className="text-lg md:text-2xl text-white/80 font-medium max-w-3xl mx-auto leading-relaxed mb-12">
              {description}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href={primaryCtaLink} className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto bg-white hover:bg-slate-50 text-forest font-bold text-lg px-10 py-7 rounded-full shadow-xl shadow-black/10 transition-all group-hover:shadow-black/20 flex items-center justify-center">
                  {primaryCta}
                  <ArrowRight className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href={secondaryCtaLink} className="w-full sm:w-auto">
                <Button variant="outline" className="text-lg px-8 py-7 w-full border-white/30 text-white bg-transparent hover:bg-white/10 transition-colors rounded-full flex items-center justify-center">
                  {secondaryCta}
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
