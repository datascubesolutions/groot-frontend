"use client";

import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
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
      <div className="container mx-auto max-w-[1400px] px-6 py-1">
        <Breadcrumb
          items={[
            {
              label: "Services",
              href: "/services/define-your-roadmap/maturity-assessment",
            },
            {
              label: "Define Your Roadmap",
              href: "/services/define-your-roadmap",
            },
            {
              label: "Maturity Assessment",
              href: "/services/define-your-roadmap/maturity-assessment",
            },
          ]}
        />
      </div>

      <section className="relative w-full flex flex-col border-t border-b border-[#1b2b36] lg:min-h-[calc(100vh-112px)]">
        {/* Absolute full width border container to break out of any constraints */}
        <div className="relative flex flex-col lg:flex-row w-full flex-1 overflow-hidden">

          {/* Left side: Content */}
          <div className="relative flex w-full flex-col justify-center bg-[#e6f0eb] lg:w-1/2 z-10 overflow-hidden min-h-[55vh] lg:min-h-0">
            {/* Left side geometric pattern */}
            <div
              className="absolute inset-0 pointer-events-none z-0 opacity-40"
              style={{
                backgroundImage: `repeating-linear-gradient(45deg, #A8D5BA 0, #A8D5BA 1px, transparent 1px, transparent 80px), repeating-linear-gradient(-45deg, #A8D5BA 0, #A8D5BA 1px, transparent 1px, transparent 80px)`
              }}
            />

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
                  DATA STRATEGY • STOP GUESSING • START SCALING.
                </motion.div>

                {/* Headline */}
                <motion.h1 variants={fadeIn} className="mb-6 text-[2rem] font-black uppercase leading-[0.95] tracking-tight text-[#1b2b36] sm:text-[3rem] lg:text-[4rem] xl:text-[4.2rem] 2xl:text-[4.5rem]">
                  Data & Analytics<br />Maturity<br />Assessment
                </motion.h1>

                {/* Subtext */}
                <motion.p variants={fadeIn} className="mb-8 max-w-[650px] text-base leading-relaxed text-[#1b2b36] sm:text-lg lg:text-2xl xl:text-[1.75rem] xl:leading-[1.6]">
                  Before you can close the gap, you need to know where the gap is. We assess your current data capabilities across six dimensions and show you exactly where you stand—<span className="font-bold text-[#1b2b36]">with evidence, not assumptions.</span>
                </motion.p>

                {/* CTA */}
                <motion.div variants={fadeIn}>
                  <Link href="/contact?service=maturity-assessment" passHref>
                    <Button className="h-14 lg:h-16 rounded-none bg-[#1b2b36] hover:bg-[#1b2b36]/90 px-8 sm:px-12 lg:px-14 text-xs sm:text-sm lg:text-base font-bold uppercase tracking-widest text-white shadow-none border-none">
                      Schedule Assessment <ChevronRight className="ml-3 h-5 w-5" />
                    </Button>
                  </Link>
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
                  <div className="relative aspect-[4/3] lg:aspect-[5/4] w-full border-[2px] border-[#1b2b36] bg-muted/20">
                    <Image
                      src="/images/maturity/live_radar.png"
                      alt="Data Professionals Analyzing Digital Radar"
                      fill
                      className="object-cover"
                      priority
                    />
                    {/* Small star icon at bottom right of image */}
                    <div className="absolute bottom-4 right-4 text-white opacity-80 mix-blend-overlay">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
