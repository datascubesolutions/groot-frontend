"use client";

import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { ChevronRight, ShieldCheck, Database, Activity, Target, Workflow, Stethoscope } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function HealthcareLifeSciencesPage() {
  return (
    <main className="pt-20 min-h-screen relative bg-background">
      <Breadcrumb
        items={[
          { label: "Industries", href: "/industries" },
          { label: "Healthcare & Life Sciences", href: "/industries/healthcare-lifesciences" },
        ]}
      />

      {/* Hero Section - Split Layout */}
      <section className="relative py-24 lg:py-32 overflow-hidden bg-background">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--primary)/0.15),transparent_50%)]" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Content */}
            <motion.div 
              initial="hidden" 
              animate="visible" 
              variants={staggerContainer}
              className="lg:col-span-7 max-w-2xl"
            >
              <div className="mb-6 inline-flex border border-teal-500/30 bg-teal-500/10 text-teal-600 dark:text-teal-400 rounded-full px-4 py-1.5 text-sm font-bold uppercase tracking-wider shadow-[0_0_15px_-3px_rgba(20,184,166,0.3)]">
                Industry Expertise
              </div>
              <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-[1.1] text-foreground">
                Healthcare <br />
                <span className="text-[hsl(var(--secondary))]">
                  &amp; Life Sciences
                </span>
              </motion.h1>
              <motion.p variants={fadeIn} className="text-xl md:text-2xl text-foreground/90 mb-10 leading-relaxed font-light">
                Unify clinical, operational, and financial data. We build secure, HIPAA-compliant data architectures on Microsoft Fabric that enable better patient outcomes and clinical efficiency.
              </motion.p>
              
              <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact?industry=healthcare" passHref>
                  <Button variant="hero" size="lg" className="px-8 shadow-[0_0_20px_rgba(20,184,166,0.25)] group">
                    Discuss Your Architecture
                    <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Visual */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 relative hidden lg:block"
            >
              <div className="relative w-full aspect-square max-w-lg mx-auto transform-gpu overflow-hidden rounded-3xl shadow-2xl shadow-[hsl(var(--primary))/0.15]">
                <div className="absolute inset-0 bg-teal-500/5 border border-teal-500/20 backdrop-blur-sm rounded-3xl flex items-center justify-center">
                  <div className="w-48 h-48 bg-teal-500/10 rounded-full blur-3xl absolute" />
                  <Stethoscope className="w-32 h-32 text-teal-500 opacity-80" strokeWidth={1} />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Real World Section - Bento Grid */}
      <section className="py-32 bg-muted/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary)/0.03)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.03)_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="container mx-auto px-6 relative z-10 max-w-7xl">
          <div className="text-center mb-20 text-foreground">
            <h2 className="text-sm font-bold uppercase tracking-widest text-teal-500 mb-4 drop-shadow-[0_0_10px_rgba(20,184,166,0.2)]">Execution</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">Precision engineering for healthcare.</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-fr">
            {/* Feature 1 */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
              className="md:col-span-4 bg-background/80 backdrop-blur-sm border border-border/60 rounded-[2rem] p-10 hover:border-teal-500/40 transition-colors shadow-sm relative overflow-hidden"
            >
               <div className="relative z-10">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-500/10 text-teal-500 ring-1 ring-teal-500/30 group-hover:bg-teal-500/20 transition-all duration-300">
                  <ShieldCheck className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <h4 className="text-2xl font-bold mb-4 text-foreground">Secure By Design</h4>
                <p className="text-muted-foreground leading-relaxed">
                  HIPAA compliance isn't an afterthought. We implement robust row-level security, Purview data classifications, and Azure Entra ID policies to ensure PHI remains strictly protected across all pipelines.
                </p>
              </div>
            </motion.div>

            {/* Feature 2 */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
              className="md:col-span-8 bg-background/80 backdrop-blur-sm border border-border/60 rounded-[2rem] p-10 hover:border-teal-500/40 transition-colors shadow-sm relative overflow-hidden"
            >
               <div className="relative z-10">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-500/10 text-teal-500 ring-1 ring-teal-500/30 group-hover:bg-teal-500/20 transition-all duration-300">
                  <Database className="w-7 h-7" strokeWidth={1.5} />
                </div>
                <h4 className="text-3xl font-bold mb-4 text-foreground">EMR Integration Architecture</h4>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Stop manually extracting data from Epic, Cerner, or proprietary clinic systems. We establish automated ingestion patterns leveraging FHIR standards and APIs to build a unified Lakehouse architecture.
                </p>
              </div>
            </motion.div>

            {/* Feature 3 */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
              className="md:col-span-12 bg-background/80 backdrop-blur-sm border border-border/60 rounded-[2rem] p-10 hover:border-teal-500/40 transition-colors shadow-sm relative overflow-hidden"
            >
               <div className="relative z-10">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-500/10 text-teal-500 ring-1 ring-teal-500/30 group-hover:bg-teal-500/20 transition-all duration-300">
                  <Activity className="w-7 h-7" strokeWidth={1.5} />
                </div>
                <h4 className="text-3xl font-bold mb-4 text-foreground">Clinical & Financial Visibility</h4>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
                  Break down the silos between clinical outcomes and revenue cycle management. We build certified semantic models that allow hospital executives and clinic directors to understand cost-of-care dynamically.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Target Use Cases */}
      <section className="py-24 bg-background border-t border-border/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,hsl(var(--secondary)/0.05),transparent_40%)]" />
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="text-center mb-16 text-foreground">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Core Use Cases</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeIn}
              className="p-10 bg-muted/20 backdrop-blur-sm rounded-[2rem] border border-border/60 hover:border-teal-500/30 transition-all duration-300 shadow-sm"
            >
              <div className="w-12 h-12 bg-teal-500/10 text-teal-500 rounded-xl flex items-center justify-center mb-6">
                <Workflow className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Revenue Cycle Management (RCM)</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Identify denial trends, optimize coding practices, and forecast cash flow by tracking claims from origination to remittance across complex payer networks.
              </p>
            </motion.div>

            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeIn}
              className="p-10 bg-muted/20 backdrop-blur-sm rounded-[2rem] border border-border/60 hover:border-teal-500/30 transition-all duration-300 shadow-sm"
            >
              <div className="w-12 h-12 bg-teal-500/10 text-teal-500 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Provider Capacity Planning</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Optimize clinic schedules, predict no-shows, and align staffing with patient demand using predictive modeling layered on top of your central Fabric architecture.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background border-t border-border">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="bg-teal-500/5 border border-teal-500/20 rounded-[3rem] p-12 md:p-16 text-center shadow-lg shadow-teal-500/5">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Modernize your healthcare data.</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              Stop fighting with EMR exports. Let's design a compliant, scalable foundation on Microsoft Fabric that empowers both clinical and financial teams.
            </p>
            <Link href="/contact?industry=healthcare" passHref>
              <Button variant="hero" size="lg" className="px-10 text-lg h-14 rounded-full bg-teal-600 hover:bg-teal-500 text-white shadow-[0_0_20px_rgba(20,184,166,0.3)]">
                Discuss Your Architecture
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
