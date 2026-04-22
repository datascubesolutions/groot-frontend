// @ts-nocheck
"use client";

import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { motion } from "framer-motion";
import { HardHat, Sparkles } from "lucide-react";

export default function FoundationBuild() {
  return (
    <main className="relative flex min-h-screen flex-col bg-background pt-20">
      <Breadcrumb
        items={[
          {
            label: "Services",
            href: "/services/define-your-roadmap/maturity-assessment",
          },
          {
            label: "Build Your Foundation",
            href: "/services/build-your-foundation",
          },
          {
            label: "Foundation Build",
            href: "/services/build-your-foundation/foundation-build",
          },
        ]}
      />

      <section className="relative flex flex-grow flex-col items-center justify-center overflow-hidden bg-background py-16 lg:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.15),transparent_50%)]" />

        {/* Animated Background Elements */}
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute right-[20%] top-[20%] h-[40%] w-[40%] rounded-full bg-emerald-500/10 blur-[120px]"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, -90, 0],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-[10%] left-[20%] h-[30%] w-[30%] rounded-full bg-blue-500/10 blur-[100px]"
          />
        </div>

        <div className="container relative z-10 mx-auto max-w-4xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-5 py-2 text-sm font-bold uppercase tracking-wider text-primary shadow-[0_0_20px_rgba(16,185,129,0.2)]"
          >
            <Sparkles size={16} /> Exclusive Service Under Development
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-8 flex justify-center"
          >
            <div className="flex h-24 w-24 items-center justify-center rounded-3xl border border-border/60 bg-background/80 shadow-sm ring-1 ring-inset ring-border/40 backdrop-blur-xl">
              <HardHat
                className="h-12 w-12 text-emerald-600 dark:text-emerald-400"
                strokeWidth={1.5}
              />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 text-4xl font-bold leading-[1.1] tracking-tight text-foreground md:text-5xl lg:text-7xl"
          >
            Fabric Foundation Build
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mx-auto mb-12 max-w-2xl text-xl font-light leading-relaxed text-muted-foreground md:text-2xl"
          >
            We are crafting the ultimate blueprint to build your data platform
            from scratch on Microsoft Fabric. Lakehouse with medallion
            architecture, Data Factory pipelines, Purview governance, security
            configuration, and CI/CD with Azure DevOps — implemented
            production-ready from day one.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link href="/contact" passHref>
              <Button
                variant="hero"
                size="lg"
                className="h-14 rounded-full px-10 text-lg shadow-[0_0_20px_rgba(16,185,129,0.3)]"
              >
                Talk to a Foundation Specialist
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
