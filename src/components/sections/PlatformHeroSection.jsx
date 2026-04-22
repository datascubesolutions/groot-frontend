// @ts-nocheck
"use client";

import { NetworkVisualization } from "@/components/graphics/NetworkVisualization";
import { motion } from "framer-motion";
import { CheckCircle2, ChevronRight, Sparkles } from "lucide-react";
import Link from "next/link";

export const PlatformHeroSection = () => {
  const platformBenefits = [
    "Unified decision intelligence framework",
    "End-to-end analytics value chain",
    "Stakeholder alignment and collaboration",
    "Systematic problem-solving approach",
  ];

  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden pb-16 pt-24">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-10 top-20 h-72 w-72 animate-pulse-slow rounded-full bg-primary/5 blur-3xl" />
        <div
          className="absolute bottom-20 right-10 h-96 w-96 animate-pulse-slow rounded-full bg-teal/5 blur-3xl"
          style={{ animationDelay: "1s" }}
        />
        <div className="bg-primary/3 absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        {/* Breadcrumb */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12 flex items-center gap-2 text-sm text-muted-foreground"
        >
          <Link href="/" className="transition-colors hover:text-foreground">
            Home
          </Link>
          <ChevronRight className="h-4 w-4" />
          <Link
            href="/platform"
            className="transition-colors hover:text-foreground"
          >
            Platform
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="font-medium text-primary">
            Decision Intelligence
          </span>
        </motion.nav>

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left content */}
          <div className="space-y-8 lg:space-y-10">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2"
            >
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-foreground/80">
                Decision Intelligence Platform
              </span>
            </motion.div>

            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h1 className="mb-6 font-serif text-4xl leading-[1.1] text-foreground md:text-5xl lg:text-6xl xl:text-7xl">
                Powered by <span className="text-primary">Math</span>.
                <br />
                Fueled by <span className="text-primary">Curiosity</span>.
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl"
            >
              We transform complex business challenges into actionable
              intelligence through advanced analytics and decision science
              frameworks. Our platform integrates multiple applications working
              in unison to help organizations navigate complexity and achieve
              systematic transformations.
            </motion.p>

            {/* Platform Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="space-y-4 pt-2"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                {platformBenefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="group flex items-start gap-3"
                  >
                    <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary/20">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-base leading-relaxed text-foreground">
                      {benefit}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative hidden items-center justify-center lg:flex"
          >
            <div className="relative aspect-square w-full max-w-[600px]">
              <NetworkVisualization />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating contact button */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
        className="fixed right-0 top-1/2 z-50 hidden -translate-y-1/2 lg:block"
      >
        <a
          href="/contact"
          className="rounded-l-lg bg-primary px-3 py-6 text-sm font-medium tracking-wider text-primary-foreground shadow-lg transition-all duration-300 [writing-mode:vertical-lr] hover:bg-primary/90 hover:shadow-xl"
        >
          CONNECT WITH US
        </a>
      </motion.div>
    </section>
  );
};
