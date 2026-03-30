"use client";

import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { motion } from "framer-motion";
import { HardHat, Sparkles } from "lucide-react";

export default function FoundationBuild() {
  return (
    <main className="pt-20 min-h-screen relative bg-background flex flex-col">
      <Breadcrumb
        items={[
          { label: "Services", href: "/services/define-your-roadmap/maturity-assessment" },
          { label: "Build Your Foundation", href: "/services/build-your-foundation" },
          { label: "Foundation Build", href: "/services/build-your-foundation/foundation-build" },
        ]}
      />
      
      <section className="relative flex-grow flex flex-col justify-center items-center py-24 overflow-hidden bg-background">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.15),transparent_50%)]" />
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <motion.div 
            animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-[20%] right-[20%] w-[40%] h-[40%] rounded-full bg-emerald-500/10 blur-[120px]" 
          />
          <motion.div 
            animate={{ scale: [1, 1.3, 1], rotate: [0, -90, 0], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-[10%] left-[20%] w-[30%] h-[30%] rounded-full bg-blue-500/10 blur-[100px]" 
          />
        </div>

        <div className="container mx-auto px-6 relative z-10 max-w-4xl text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="mb-8 inline-flex items-center gap-2 border border-primary/20 bg-primary/10 text-primary rounded-full px-5 py-2 text-sm font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(16,185,129,0.2)]"
          >
            <Sparkles size={16} /> Exclusive Service Under Development
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-8 flex justify-center"
          >
            <div className="w-24 h-24 bg-background/80 backdrop-blur-xl border border-border/60 rounded-3xl shadow-sm flex items-center justify-center ring-1 ring-inset ring-border/40">
               <HardHat className="w-12 h-12 text-emerald-600 dark:text-emerald-400" strokeWidth={1.5} />
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-8 tracking-tight leading-[1.1] text-foreground"
          >
            Fabric Foundation Build
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-2xl mx-auto font-light"
          >
            We are crafting the ultimate blueprint to build your data platform from scratch on Microsoft Fabric. Lakehouse with medallion architecture, Data Factory pipelines, Purview governance, security configuration, and CI/CD with Azure DevOps — implemented production-ready from day one.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link href="/contact" passHref>
              <Button variant="hero" size="lg" className="px-10 h-14 text-lg rounded-full shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                Talk to a Foundation Specialist
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
