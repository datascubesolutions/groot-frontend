"use client";

import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { CheckCircle2, ChevronRight, CircleHelp, HelpCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const MaturityMockup = () => {
  return (
    <div className="relative w-full max-w-[480px] aspect-[1.65/1] rounded-2xl border border-white bg-gradient-to-br from-white/95 to-white/60 p-5 shadow-[0_20px_50px_rgba(0,0,0,0.07)] backdrop-blur-xl flex flex-col justify-between overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-emerald-100 rounded-full blur-[40px] pointer-events-none" />
      
      {/* Header */}
      <div className="flex items-center justify-between z-10">
        <span className="text-[10px] font-semibold text-slate-800">Maturity Score</span>
        <div className="flex items-center gap-2 text-[9px] text-slate-500 font-medium">
          <div className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-[#1b3d2f]"></span>3.8</div>
          <div className="w-6 h-[1px] bg-slate-300"></div>
          <div className="flex items-center gap-1.5">0</div>
          <div className="w-6 h-[1px] bg-slate-300"></div>
        </div>
      </div>

      {/* Main content area */}
      <div className="flex items-end justify-between h-full py-4 z-10 px-4 mt-2">
        {/* Left Bars */}
        <div className="flex gap-3 h-full items-end pb-5 relative">
          <div className="absolute -left-4 top-0 bottom-5 flex flex-col justify-between text-[7px] text-slate-400 font-medium">
            <span>6</span><span>4</span><span>2</span><span>0</span>
          </div>
          
          {/* Bar 1 */}
          <div className="flex flex-col gap-[1px] w-[18px] h-[30%] relative">
             <div className="absolute -top-4 w-full text-center text-[9px] font-bold text-slate-800">2</div>
             <div className="flex-1 w-full bg-[#1b3d2f] rounded-t-[2px]" style={{opacity: 0.6}}></div>
             <div className="flex-1 w-full bg-[#1b3d2f]" style={{opacity: 0.8}}></div>
             <div className="flex-1 w-full bg-[#1b3d2f] rounded-b-[2px]" style={{opacity: 1}}></div>
             <div className="absolute -bottom-5 w-full text-[8px] font-semibold text-slate-500 text-center bg-slate-100 rounded-sm py-0.5">M</div>
          </div>
          
          {/* Bar 2 */}
          <div className="flex flex-col gap-[1px] w-[18px] h-[65%] relative">
             <div className="absolute -top-4 w-full text-center text-[9px] font-bold text-slate-800">4</div>
             <div className="flex-1 w-full bg-[#1b3d2f] rounded-t-[2px]" style={{opacity: 0.2}}></div>
             <div className="flex-1 w-full bg-[#1b3d2f]" style={{opacity: 0.4}}></div>
             <div className="flex-1 w-full bg-[#1b3d2f]" style={{opacity: 0.6}}></div>
             <div className="flex-1 w-full bg-[#1b3d2f]" style={{opacity: 0.8}}></div>
             <div className="flex-1 w-full bg-[#1b3d2f] rounded-b-[2px]" style={{opacity: 1}}></div>
             <div className="absolute -bottom-5 w-full text-[8px] font-semibold text-slate-500 text-center bg-slate-100 rounded-sm py-0.5">A</div>
          </div>

          {/* Bar 3 */}
          <div className="flex flex-col gap-[1px] w-[18px] h-[50%] relative">
             <div className="absolute -top-4 w-full text-center text-[9px] font-bold text-slate-800">3</div>
             <div className="flex-1 w-full bg-[#1b3d2f] rounded-t-[2px]" style={{opacity: 0.4}}></div>
             <div className="flex-1 w-full bg-[#1b3d2f]" style={{opacity: 0.6}}></div>
             <div className="flex-1 w-full bg-[#1b3d2f]" style={{opacity: 0.8}}></div>
             <div className="flex-1 w-full bg-[#1b3d2f] rounded-b-[2px]" style={{opacity: 1}}></div>
             <div className="absolute -bottom-5 w-full text-[8px] font-semibold text-slate-500 text-center bg-slate-100 rounded-sm py-0.5">B</div>
          </div>
        </div>

        {/* Center Semi-Circle Gauge */}
        <div className="relative w-[130px] h-[80px] flex items-end justify-center mb-6">
          <svg className="absolute w-[120%] h-[120%] overflow-visible left-1/2 -translate-x-1/2 bottom-0" viewBox="0 0 100 60">
             {/* Background arc */}
             <path d="M 10 50 A 40 40 0 0 1 90 50" fill="none" stroke="#e2e8f0" strokeWidth="8" strokeLinecap="round" />
             {/* Active arc - green to yellow */}
             <path d="M 10 50 A 40 40 0 0 1 70 15" fill="none" stroke="#1b3d2f" strokeWidth="8" strokeLinecap="round" />
             <path d="M 70 15 A 40 40 0 0 1 85 30" fill="none" stroke="#eab308" strokeWidth="8" strokeLinecap="round" />
             {/* Inner dashed ring */}
             <path d="M 18 50 A 32 32 0 0 1 82 50" fill="none" stroke="#64748b" strokeWidth="1" strokeDasharray="3 3" opacity="0.3" />
          </svg>
          <div className="flex flex-col items-center mb-1 z-10 bg-white/80 px-4 py-1.5 rounded-full backdrop-blur-md shadow-[0_2px_10px_rgba(0,0,0,0.05)] border border-white">
             <span className="text-[7px] font-semibold text-slate-500 mb-0.5">Maturity Score</span>
             <span className="text-xl font-black text-slate-900 leading-none">3.8<span className="text-[10px] font-semibold text-slate-400">/5</span></span>
          </div>
        </div>

        {/* Right Bars */}
        <div className="flex gap-3 h-full items-end pb-5 relative">
          <div className="absolute -right-3 top-0 bottom-5 flex flex-col justify-between text-[7px] text-slate-400 font-medium text-right">
            <span>5</span><span>3</span><span>0</span>
          </div>
          
          {/* Bar 4 */}
          <div className="flex flex-col gap-[1px] w-[18px] h-[80%] relative">
             <div className="absolute -top-4 w-full text-center text-[9px] font-bold text-slate-800">5</div>
             <div className="flex-1 w-full bg-[#1b3d2f] rounded-t-[2px]" style={{opacity: 0.15}}></div>
             <div className="flex-1 w-full bg-[#1b3d2f]" style={{opacity: 0.3}}></div>
             <div className="flex-1 w-full bg-[#1b3d2f]" style={{opacity: 0.45}}></div>
             <div className="flex-1 w-full bg-[#1b3d2f]" style={{opacity: 0.6}}></div>
             <div className="flex-1 w-full bg-[#1b3d2f]" style={{opacity: 0.75}}></div>
             <div className="flex-1 w-full bg-[#1b3d2f] rounded-b-[2px]" style={{opacity: 0.9}}></div>
             <div className="absolute -bottom-5 w-full text-[8px] font-semibold text-slate-500 text-center bg-slate-100 rounded-sm py-0.5">5</div>
          </div>

          {/* Bar 5 */}
          <div className="flex flex-col gap-[1px] w-[18px] h-[50%] relative">
             <div className="absolute -top-4 w-full text-center text-[9px] font-bold text-slate-800">3</div>
             <div className="flex-1 w-full bg-[#1b3d2f] rounded-t-[2px]" style={{opacity: 0.4}}></div>
             <div className="flex-1 w-full bg-[#1b3d2f]" style={{opacity: 0.6}}></div>
             <div className="flex-1 w-full bg-[#1b3d2f]" style={{opacity: 0.8}}></div>
             <div className="flex-1 w-full bg-[#1b3d2f] rounded-b-[2px]" style={{opacity: 1}}></div>
             <div className="absolute -bottom-5 w-full text-[8px] font-semibold text-slate-500 text-center bg-slate-100 rounded-sm py-0.5">3</div>
          </div>
        </div>
      </div>
      
      {/* Bottom indicator */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center justify-center gap-1.5">
         <span className="w-3.5 h-[3px] bg-[#1b3d2f] rounded-full"></span>
         <span className="w-1.5 h-[3px] bg-slate-300 rounded-full"></span>
      </div>
    </div>
  );
};

export default function NextStepsSection({
  pillLabel = "Discovery starts here",
  headline = "Know where you stand",
  subHeadline = "A Strategic Roadmap for Microsoft Fabric and Azure",
  bodyText = null,
  buttonLabel = "Schedule Assessment",
  buttonHref = "/contact?service=maturity-assessment",
  trustSignals = null,
  tagline = null,
}) {
  const defaultBodyText = (
    <>
      Our expert maturity assessment provides the essential baseline for making
      confident, high-impact investments in{" "}
      <strong className="font-semibold text-slate-900">Microsoft Fabric and Azure</strong>.
    </>
  );

  const defaultTrustSignals = [
    { label: "Evidence-Based Scoring", desc: "Using proprietary benchmarks and data points." },
    { label: "3-4 Week Delivery", desc: "Rapid assessment to get insights quickly." },
    { label: "Executive-Ready Summary", desc: "Clear actionable steps for leadership." },
  ];

  const defaultTagline = (
    <>
      Let&apos;s find your gaps{" "}
      <HelpCircle className="inline h-[18px] w-[18px] text-slate-400 relative -top-[2px] ml-1" strokeWidth={2} />{" "}
      <br /> before they find you.
    </>
  );

  const resolvedTrustSignals = trustSignals ?? defaultTrustSignals;
  const resolvedTagline = tagline ?? defaultTagline;
  const resolvedBodyText = bodyText ?? defaultBodyText;

  return (
    <section className="relative flex flex-col overflow-hidden bg-[#f0f7f4] py-16 md:py-24 lg:py-32">
      {/* Subtle grid pattern */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#80808010_1px,transparent_1px),linear-gradient(to_bottom,#80808010_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-100/40 blur-[100px]" />

      {/* Decorative watermarks */}
      <div className="pointer-events-none absolute left-[2%] top-[25%] text-[#0a3622] opacity-15 sm:block hidden">
        <CircleHelp className="h-40 w-40" strokeWidth={2} />
      </div>
      <div className="pointer-events-none absolute right-[3%] bottom-[15%] text-[#0a3622] opacity-15 sm:block hidden">
        <HelpCircle className="h-32 w-32" strokeWidth={2} />
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16"
        >
          {/* Left Column - Mockup */}
          <div className="w-full lg:w-[45%] flex flex-col items-center">
            {/* Pill */}
            <div className="mb-10 inline-flex items-center gap-2.5 rounded-full border border-[#1b3d2f]/10 bg-white/70 px-4 py-2 shadow-sm backdrop-blur-md z-20 relative">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#1b3d2f]/10 text-[#1b3d2f]">
                <CircleHelp className="h-3.5 w-3.5" strokeWidth={2.5} />
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600">
                {pillLabel}
              </span>
            </div>
            
            <MaturityMockup />
          </div>

          {/* Right Column - Content Card */}
          <div className="relative w-full lg:w-[55%] rounded-[2.5rem] border border-white/80 bg-white/95 p-8 shadow-[0_16px_60px_rgba(0,0,0,0.04)] backdrop-blur-xl sm:p-10 md:p-12 lg:p-14">
            <h2 className="mb-2 font-serif text-[2.5rem] font-bold leading-[1.05] tracking-tight text-[#0a3622] sm:text-5xl lg:text-[3.25rem]">
              {headline}
            </h2>
            <h3 className="mb-6 text-[1.1rem] font-medium tracking-tight text-slate-800 sm:text-[1.25rem]">
              {subHeadline}
            </h3>
            
            <p className="mb-10 text-[1rem] leading-relaxed text-slate-700">
              {resolvedBodyText}
            </p>

            {/* Trust Signals Grid */}
            <div className="grid gap-4 sm:grid-cols-2 mb-10">
              {resolvedTrustSignals.map((signal, i) => (
                <div key={i} className="flex flex-col gap-1.5 rounded-xl border border-white bg-gradient-to-br from-[#eef7f2] to-white/60 p-5 shadow-[0_4px_15px_rgba(0,0,0,0.02)] backdrop-blur-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-slate-700" strokeWidth={2.5} />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-900">{signal.label}</span>
                  </div>
                  <p className="text-[12px] leading-snug text-slate-600 pl-6">{signal.desc}</p>
                </div>
              ))}

              {/* Tagline slot */}
              <div className="flex items-start pl-4 py-2">
                <p className="text-[1.15rem] font-serif italic text-slate-800 leading-snug">
                  {resolvedTagline}
                </p>
              </div>
            </div>

            <div className="px-1 w-full sm:w-[95%]">
              <Link href={buttonHref} passHref>
                <Button
                  size="lg"
                  className="group relative flex w-full items-center justify-center gap-3 sm:gap-4 rounded-full border border-slate-700 bg-[#182921] px-6 sm:px-10 py-7 text-[12px] sm:text-sm font-bold uppercase tracking-[0.1em] text-white shadow-[0_8px_25px_rgba(24,41,33,0.35)] transition-all hover:bg-black"
                >
                  {buttonLabel}
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/10 transition-colors group-hover:bg-white/20">
                    <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" strokeWidth={2.5} />
                  </span>
                </Button>
              </Link>
            </div>

            {/* Footer Logos */}
            <div className="mt-10 flex flex-wrap items-center gap-4 sm:gap-6 border-t border-slate-100 pt-6">
               <div className="flex flex-col justify-end">
                 <span className="text-[10px] font-medium italic text-slate-500 mb-0.5 text-left">In Partnership with...</span>
               </div>
               <div className="flex flex-wrap items-center gap-5 sm:gap-8 pl-0 sm:pl-2">
                 <div className="flex items-center gap-2 opacity-90 hover:opacity-100 transition-opacity">
                   <img src="/svg/fabric_48_color.svg" alt="Fabric" className="h-6 sm:h-8" />
                   <span className="text-slate-800 text-sm sm:text-base font-semibold">Microsoft Fabric</span>
                 </div>
                 <div className="flex items-center gap-2 opacity-90 hover:opacity-100 transition-opacity">
                   <img src="/svg/azure-2.svg" alt="Azure" className="h-6 sm:h-8" />
                   <span className="text-slate-800 text-sm sm:text-base font-semibold">Azure</span>
                 </div>
               </div>
            </div>
            
          </div>
        </motion.div>
      </div>
    </section>
  );
}
