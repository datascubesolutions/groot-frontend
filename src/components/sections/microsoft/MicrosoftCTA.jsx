// src/components/sections/microsoft/MicrosoftCTA.jsx
"use client";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { ArrowRight, MessageSquare, Rocket } from "lucide-react";
import Link from "next/link";

export function MicrosoftCTA({
  title = "Ready to get started?",
  description = "We'll assess your current state and map out what a solid foundation looks like for your organization.",
  primaryCta = "Get Your Assessment",
  primaryCtaLink = "/contact",
  secondaryCta = "Talk to Our Team",
  secondaryCtaLink = "/contact",
  stats = [],
}) {
  return (
    <section className="relative font-sans overflow-hidden bg-[#F8FAFC] border-t border-slate-200/60 h-full w-full flex flex-col justify-center pt-[80px]">

      {/* Background gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-100/50 rounded-full blur-[120px]" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-100/40 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto max-w-5xl px-6 text-center relative z-10 w-full h-full flex flex-col justify-center py-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-[3rem] p-10 lg:p-12 border border-slate-200/80 shadow-2xl relative overflow-hidden flex flex-col justify-center flex-1 max-h-[800px]"
        >
          <div className="absolute -left-20 -top-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="mb-6 mx-auto flex items-center justify-center w-16 h-16 rounded-3xl bg-blue-50 text-[#0067B8] border border-blue-100 shadow-sm relative z-10 shrink-0">
             <Rocket className="w-8 h-8 text-[#0067B8]" strokeWidth={2} />
          </div>

          <h2 className="mb-6 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0F172A] leading-[1.1] relative z-10 shrink-0">
            {title}
          </h2>

          <p className="mx-auto mb-8 max-w-2xl text-base sm:text-lg font-medium leading-relaxed text-slate-600 relative z-10 shrink-0">
            {description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-10 relative z-10 shrink-0">
            <Link href={primaryCtaLink} passHref className="w-full sm:w-auto">
              <Button
                className="h-14 w-full sm:w-auto rounded-2xl bg-[#0067B8] px-10 text-white hover:bg-[#005DA6] transition-all shadow-xl hover:shadow-blue-900/20 hover:-translate-y-1"
              >
                <span className="text-base font-bold">
                  {primaryCta}
                </span>
                <ArrowRight className="ml-2 h-5 w-5" strokeWidth={2} />
              </Button>
            </Link>

            <Link href={secondaryCtaLink} passHref className="w-full sm:w-auto">
              <Button
                variant="outline"
                className="h-14 w-full sm:w-auto rounded-2xl bg-white border-2 border-slate-200 px-10 text-[#0F172A] hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm"
              >
                <MessageSquare className="mr-2 h-5 w-5 text-[#0067B8]" strokeWidth={2} />
                <span className="text-base font-bold">
                  {secondaryCta}
                </span>
              </Button>
            </Link>
          </div>

          {stats && stats.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-slate-200/80 max-w-3xl mx-auto relative z-10 shrink-0 w-full">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center p-2">
                  <div className="text-4xl lg:text-5xl font-black text-[#0F172A] tracking-tight mb-2">
                    {stat.value}
                  </div>
                  <div className="text-[12px] font-bold uppercase tracking-widest text-[#0067B8]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
