"use client";


import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { ArrowUpRight, BarChart, ChevronRight, Target } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

/** @type {import("framer-motion").Variants} */
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      /** @type {import("framer-motion").Easing} */
      ease: [0.25, 0.1, 0.25, 1.0],
    },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

export default function HeroSection() {
  return (
    <>


      <section className="relative w-full flex flex-col border-t border-b border-[#1b2b36] lg:h-[calc(100vh-80px)] lg:min-h-[700px]">
        {/* Absolute full width border container to break out of any constraints */}
        <div className="relative flex flex-col lg:flex-row w-full flex-1 min-h-0 overflow-hidden">

          {/* Left side: Content */}
          <div className="relative flex w-full flex-col justify-center bg-[#e6f0eb] lg:w-1/2 z-10 overflow-hidden min-h-[55vh] lg:min-h-0">
            {/* Left side geometric pattern */}
            <div
              className="absolute inset-0 pointer-events-none z-0 opacity-40"
              style={{
                backgroundImage: `repeating-linear-gradient(45deg, #A8D5BA 0, #A8D5BA 1px, transparent 1px, transparent 80px), repeating-linear-gradient(-45deg, #A8D5BA 0, #A8D5BA 1px, transparent 1px, transparent 80px)`
              }}
            />

            {/* Background typographic elements to fill space */}
            <div className="absolute top-10 -left-10 z-0 select-none opacity-[0.04] pointer-events-none overflow-hidden">
              <span className="text-[10rem] lg:text-[14rem] font-black uppercase leading-none text-[#1b2b36] whitespace-nowrap">
                ALIGN
              </span>
            </div>
            <div className="absolute bottom-10 right-0 z-0 select-none opacity-[0.04] pointer-events-none overflow-hidden">
              <span className="text-[10rem] lg:text-[14rem] font-black uppercase leading-none text-[#1b2b36] whitespace-nowrap">
                EXECUTE
              </span>
            </div>

            {/* Inner constraint to align with 1400px container */}
            <div className="w-full max-w-[850px] mx-auto lg:ml-auto lg:mr-0 px-5 sm:px-6 lg:pl-10 xl:pl-16 lg:pr-10 py-8 lg:py-12 relative z-10">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="relative z-10"
              >
                {/* Eyebrow */}
                <motion.div variants={fadeIn} className="mb-8 flex items-center gap-3 text-[11px] font-bold tracking-[0.2em] text-[#1b2b36] sm:text-sm lg:text-[15px]">
                  <div className="h-3 w-3 bg-[#A8D5BA]"></div>
                  ENTERPRISE STRATEGY • ALIGN IT & BUSINESS
                </motion.div>

                {/* Headline */}
                <motion.h1 variants={fadeIn} className="mb-6 text-[2rem] font-black uppercase leading-[0.95] tracking-tight text-[#1b2b36] sm:text-[3rem] lg:text-[4rem] xl:text-[4.2rem] 2xl:text-[4.5rem]">
                  Enterprise<br />Data<br />Strategy
                </motion.h1>

                {/* Subtext */}
                <motion.p variants={fadeIn} className="mb-8 max-w-[650px] text-base leading-relaxed text-[#1b2b36] sm:text-lg lg:text-2xl xl:text-[1.75rem] xl:leading-[1.6]">
                  A comprehensive strategy that aligns your Microsoft Fabric and Azure investments with business outcomes. Not a vision deck — <span className="font-bold text-[#1b2b36]">a plan that gets executive buy-in and guides implementation.</span>
                </motion.p>

                {/* CTA */}
                <motion.div variants={fadeIn}>
                  <Link href="/contact?service=data-strategy" passHref>
                    <Button className="h-14 lg:h-16 rounded-none bg-[#1b2b36] hover:bg-[#1b2b36]/90 px-8 sm:px-12 lg:px-14 text-xs sm:text-sm lg:text-base font-bold uppercase tracking-widest text-white shadow-none border-none">
                      Start a Strategy Conversation <ChevronRight className="ml-3 h-5 w-5" />
                    </Button>
                  </Link>
                </motion.div>

                {/* Slogans / Stats to fill space */}
                <motion.div variants={fadeIn} className="mt-12 flex flex-col gap-6 sm:mt-16 sm:flex-row sm:gap-10 border-t-2 border-[#1b2b36]/20 pt-8 relative z-20">
                  <div className="flex flex-col gap-1 sm:gap-2">
                    <Target className="h-5 w-5 sm:h-6 sm:w-6 text-[#1b2b36]" />
                    <span className="text-2xl font-black text-[#1b2b36] lg:text-3xl">100%</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#1b2b36]/70 sm:text-xs">Business Alignment</span>
                  </div>
                  <div className="flex flex-col gap-1 sm:gap-2">
                    <BarChart className="h-5 w-5 sm:h-6 sm:w-6 text-[#1b2b36]" />
                    <span className="text-2xl font-black text-[#1b2b36] lg:text-3xl">90</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#1b2b36]/70 sm:text-xs">Day Milestones</span>
                  </div>
                  <div className="flex flex-col gap-1 sm:gap-2">
                    <ArrowUpRight className="h-5 w-5 sm:h-6 sm:w-6 text-[#1b2b36]" />
                    <span className="text-2xl font-black text-[#1b2b36] lg:text-3xl">1</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#1b2b36]/70 sm:text-xs">Clear Roadmap</span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Right side: Image */}
          <div className="relative flex w-full items-center justify-center bg-[#f8f9fa] lg:w-1/2 z-0 overflow-hidden min-h-[45vw] sm:min-h-[40vw] lg:min-h-0">
            {/* Right side geometric pattern */}
            <div
              className="absolute inset-0 pointer-events-none z-0 opacity-50"
              style={{
                backgroundImage: `repeating-linear-gradient(45deg, #A8D5BA 0, #A8D5BA 1px, transparent 1px, transparent 80px), repeating-linear-gradient(-45deg, #A8D5BA 0, #A8D5BA 1px, transparent 1px, transparent 80px)`
              }}
            />

            {/* Inner constraint to align with 1400px container */}
            <div className="w-full max-w-[850px] mx-auto lg:mr-auto lg:ml-0 px-5 sm:px-6 lg:pl-0 lg:pr-10 xl:pr-16 py-6 lg:py-12 z-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative w-full"
              >
                {/* Double bordered frame for the image */}
                <div className="relative w-full border-[2px] border-[#1b2b36] p-2 lg:p-3 bg-white">
                  <div className="relative aspect-[4/3] lg:aspect-[5/4] w-full border-[2px] border-[#1b2b36] bg-muted/20 overflow-hidden">
                    <Image
                      src="/images/data-strategy/hero_data_strategy.png"
                      alt="Data Strategy Roadmapping"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>

                  {/* Floating Slogan 1 */}
                  <motion.div
                    initial={{ opacity: 0, x: -20, y: 10 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="absolute -left-2 sm:-left-6 top-8 sm:top-12 z-20 bg-[#A8D5BA] px-3 py-2 sm:px-4 sm:py-2 border-2 border-[#1b2b36] shadow-[4px_4px_0px_0px_#1b2b36]"
                  >
                    <span className="text-[9px] sm:text-xs font-black uppercase tracking-widest text-[#1b2b36] flex items-center gap-2">
                      <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 bg-[#1b2b36] rounded-full"></div>
                      Align Execution
                    </span>
                  </motion.div>

                  {/* Floating Slogan 2 */}
                  <motion.div
                    initial={{ opacity: 0, x: 20, y: -10 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="absolute -right-2 sm:-right-6 bottom-8 sm:bottom-12 z-20 bg-white px-3 py-2 sm:px-4 sm:py-2 border-2 border-[#1b2b36] shadow-[4px_4px_0px_0px_#1b2b36]"
                  >
                    <span className="text-[9px] sm:text-xs font-black uppercase tracking-widest text-[#1b2b36] flex items-center gap-2">
                      <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 bg-[#A8D5BA] rounded-full"></div>
                      Prove ROI
                    </span>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
