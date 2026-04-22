// @ts-nocheck
"use client";

import blogAnimation from "@/lottie/blog.json";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const ClientLottie = dynamic(() => import("@/components/ui/ClientLottie"), {
  ssr: false,
});

export function BlogPageHeader() {
  return (
    <header className="relative w-full overflow-hidden pb-4 pt-24 md:pb-8 md:pt-28">
      {/* Subtle Gradient Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-0 top-0 h-[600px] w-[600px] -translate-y-1/3 translate-x-1/3 rounded-full bg-primary/5 opacity-60 mix-blend-screen blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] -translate-x-1/3 translate-y-1/3 rounded-full bg-secondary/5 opacity-40 mix-blend-screen blur-[90px]" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.02] mix-blend-overlay" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="container relative z-10 mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12"
      >
        <div className="grid items-center gap-6 lg:grid-cols-[1.3fr_0.8fr]">
          <div className="w-full">
            <span className="mb-3 inline-block rounded-full border border-forest/30 bg-forest/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-forest">
              The Groot Blog
            </span>
            <h1 className="mb-3 text-3xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
              Insights for the <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-foreground via-foreground to-foreground/50 bg-clip-text text-transparent">
                Data-Driven Future
              </span>
            </h1>

            <p className="max-w-2xl text-base font-light leading-relaxed text-muted-foreground/90 md:text-lg">
              Expert perspectives on modern data stacks, AI engineering, and
              strategies shaping the next generation of enterprise intelligence.
            </p>
          </div>

          {/* Lottie Animation */}
          <div className="hidden items-center justify-end lg:flex">
            <div className="relative aspect-square w-full max-w-[320px]">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-transparent opacity-30 blur-[80px]" />
              <ClientLottie
                animationData={blogAnimation}
                className="relative z-10 h-full w-full"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </header>
  );
}
