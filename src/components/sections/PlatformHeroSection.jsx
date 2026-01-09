"use client";

import { NetworkVisualization } from "@/components/graphics/NetworkVisualization";
import { motion } from "framer-motion";
import { CheckCircle2, ChevronRight, Sparkles } from "lucide-react";

export const PlatformHeroSection = () => {
  const platformBenefits = [
    "Unified decision intelligence framework",
    "End-to-end analytics value chain",
    "Stakeholder alignment and collaboration",
    "Systematic problem-solving approach",
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-24 pb-16">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Breadcrumb */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex items-center gap-2 text-sm text-muted-foreground mb-12"
        >
          <a href="/" className="hover:text-foreground transition-colors">Home</a>
          <ChevronRight className="w-4 h-4" />
          <a href="/platform" className="hover:text-foreground transition-colors">Platform</a>
          <ChevronRight className="w-4 h-4" />
          <span className="text-primary font-medium">Decision Intelligence</span>
        </motion.nav>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8 lg:space-y-10">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4"
            >
              <Sparkles className="w-4 h-4 text-primary" />
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif leading-[1.1] text-foreground mb-6">
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
              className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
            >
              We transform complex business challenges into actionable intelligence
              through advanced analytics and decision science frameworks. Our platform
              integrates multiple applications working in unison to help organizations
              navigate complexity and achieve systematic transformations.
            </motion.p>

            {/* Platform Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="space-y-4 pt-2"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                {platformBenefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="flex items-start gap-3 group"
                  >
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-primary/20 transition-colors">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-base text-foreground leading-relaxed">{benefit}</span>
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
            className="relative hidden lg:flex items-center justify-center"
          >
            <div className="relative w-full max-w-[600px] aspect-square">
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
        className="fixed right-0 top-1/2 -translate-y-1/2 z-50 hidden lg:block"
      >
        <a
          href="/contact"
          className="bg-primary text-primary-foreground px-3 py-6 rounded-l-lg shadow-lg hover:bg-primary/90 transition-all duration-300 [writing-mode:vertical-lr] text-sm font-medium tracking-wider hover:shadow-xl"
        >
          CONNECT WITH US
        </a>
      </motion.div>
    </section>
  );
};
