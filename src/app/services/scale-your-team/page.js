"use client";

import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { AlertCircle, ChevronRight, Users, ShieldAlert, Target, UserCheck, HardHat, TrendingUp, BookOpen, Clock } from "lucide-react";
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

export default function ScaleYourTeam() {
  return (
    <main className="pt-20 min-h-screen relative bg-background">
      <Breadcrumb
        items={[
          { label: "Services", href: "/services/define-your-roadmap/maturity-assessment" },
          { label: "Scale Your Team", href: "/services/scale-your-team" },
        ]}
      />

      {/* Hero Section - Split Layout */}
      <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden bg-background">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--primary)/0.15),transparent_50%)]" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            {/* Left Content */}
            <motion.div 
              initial="hidden" 
              animate="visible" 
              variants={staggerContainer}
              className="lg:col-span-7 max-w-2xl"
            >
              <motion.h1 variants={fadeIn} className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 tracking-tight leading-[1.1] text-foreground">
                Scale Your <br />
                <span className="text-[hsl(var(--secondary))]">
                  Team
                </span>
              </motion.h1>
              <motion.p variants={fadeIn} className="text-xl md:text-2xl text-foreground/90 mb-10 leading-relaxed font-light">
                Stop relying on expensive monolithic consultancies. We provide flexible, high-tier Microsoft Fabric and Power BI engineering talent that integrates directly into your existing team to accelerate delivery.
              </motion.p>
              
              <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact?service=scale" passHref>
                  <Button variant="hero" size="lg" className="px-8 shadow-primary/25 shadow-xl group">
                    Hire Elite Talent
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
                <div className="absolute inset-0 bg-primary/5 border border-primary/20 backdrop-blur-sm rounded-3xl flex items-center justify-center">
                  <div className="w-48 h-48 bg-primary/10 rounded-full blur-3xl absolute" />
                  <Users className="w-32 h-32 text-primary opacity-80" strokeWidth={1} />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Problem - Sticky Scroll */}
      <section className="py-16 lg:py-24 bg-muted/20 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            
            {/* Sticky Sidebar */}
            <div className="lg:col-span-5 pl-0 lg:pl-4">
              <div className="sticky top-32">
                <h2 className="text-sm font-bold uppercase tracking-widest text-emerald-400 mb-4 drop-shadow-[0_0_10px_rgba(52,211,153,0.2)]">The Challenge</h2>
                <h3 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-foreground">The consulting trap.</h3>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                  Traditional staffing agencies and global consultancies are structured to maximize their margins, not your delivery speed.
                </p>
              </div>
            </div>

            {/* Scrollable Content */}
            <div className="lg:col-span-7 flex flex-col gap-8 pt-10">
              <motion.div 
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn}
                className="bg-background/80 backdrop-blur-md p-6 md:p-10 rounded-[2rem] border border-border/60 hover:border-red-500/40 shadow-sm hover:shadow-glow transition-all duration-500 group"
              >
                <div className="w-14 h-14 bg-red-500/10 text-red-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Target size={28} />
                </div>
                <h4 className="text-2xl font-bold mb-4 text-foreground">The Generalist Trap</h4>
                <p className="text-lg text-muted-foreground leading-relaxed">You hire a large consultancy, and they staff your project with generalist developers who are learning Fabric on your dime. You need specialists who have actually built enterprise-grade data architectures, not people reading documentation for the first time.</p>
              </motion.div>

              <motion.div 
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn}
                className="bg-background/80 backdrop-blur-md p-6 md:p-10 rounded-[2rem] border border-border/60 hover:border-amber-500/40 shadow-sm hover:shadow-glow transition-all duration-500 group"
              >
                <div className="w-14 h-14 bg-amber-500/10 text-amber-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <ShieldAlert size={28} />
                </div>
                <h4 className="text-2xl font-bold mb-4 text-foreground">The "B-Team" Switch</h4>
                <p className="text-lg text-muted-foreground leading-relaxed">The consultancy pitches you with their senior architects, but once the contract is signed, they swap them out for junior resources. You're paying premium rates for entry-level execution, resulting in spaghetti code and architectural debt.</p>
              </motion.div>

              <motion.div 
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn}
                className="bg-background/80 backdrop-blur-md p-6 md:p-10 rounded-[2rem] border border-border/60 hover:border-indigo-500/40 shadow-sm hover:shadow-glow transition-all duration-500 group"
              >
                <div className="w-14 h-14 bg-indigo-500/10 text-indigo-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Clock size={28} />
                </div>
                <h4 className="text-2xl font-bold mb-4 text-foreground">Administrative Overhead</h4>
                <p className="text-lg text-muted-foreground leading-relaxed">Traditional staffing agencies send you 40 resumes to review. You spend weeks interviewing candidates only to find out they don't actually understand DAX. You need pre-vetted, elite talent that can start contributing on day one.</p>
              </motion.div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Deliverables - Bento Grid */}
      <section className="py-16 md:py-24 lg:py-32 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,hsl(var(--primary)/0.05),transparent_40%)]" />
        <div className="container mx-auto px-6 relative z-10 max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-sm font-bold uppercase tracking-widest text-emerald-400 mb-4 drop-shadow-[0_0_10px_rgba(52,211,153,0.2)]">Deliverables</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">Flexible augmentation models.</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-fr">
            {/* Large Feature 1 */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
              className="md:col-span-8 bg-muted/20 backdrop-blur-sm border border-border/60 rounded-[2rem] p-6 md:p-10 hover:border-primary/40 transition-colors shadow-sm relative overflow-hidden flex flex-col justify-end min-h-[300px]"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[80px] rounded-full" />
              <div className="relative z-10">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/30 shadow-[0_0_20px_-5px_rgba(52,211,153,0.3)] group-hover:bg-emerald-500/20 transition-all duration-300">
                  <Users className="w-7 h-7" strokeWidth={1.5} />
                </div>
                <h4 className="text-3xl font-bold mb-4 text-foreground">Dedicated Engineering Pods</h4>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                  A cohesive unit of pre-assembled architects and engineers that integrate seamlessly into your agile workflow. They already know how to work together, so they deliver features instantly.
                </p>
              </div>
            </motion.div>

            {/* Feature 2 */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
              className="md:col-span-4 bg-muted/20 backdrop-blur-sm border border-border/60 rounded-[2rem] p-6 md:p-10 hover:border-blue-500/40 transition-colors shadow-sm relative overflow-hidden"
            >
               <div className="relative z-10">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400 ring-1 ring-blue-500/30 shadow-[0_0_20px_-5px_rgba(59,130,246,0.3)] group-hover:bg-blue-500/20 transition-all duration-300">
                  <UserCheck className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <h4 className="text-2xl font-bold mb-4 text-foreground">Staff Augmentation</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Elite individual contributors specialized in Microsoft Fabric and Power BI that fill specific capability gaps on your existing team.
                </p>
              </div>
            </motion.div>

            {/* Feature 3 */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
              className="md:col-span-4 bg-muted/20 backdrop-blur-sm border border-border/60 rounded-[2rem] p-6 md:p-10 hover:border-emerald-500/40 transition-colors shadow-sm relative overflow-hidden"
            >
               <div className="relative z-10">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/30 shadow-[0_0_20px_-5px_rgba(52,211,153,0.3)] group-hover:bg-emerald-500/20 transition-all duration-300">
                  <HardHat className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <h4 className="text-2xl font-bold mb-4 text-foreground">Fractional Architecture</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Bring in a Principal Architect for 10 hours a week to validate technical designs, review code, and ensure your internal team is building on a solid foundation.
                </p>
              </div>
            </motion.div>

            {/* Large Feature 4 */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
              className="md:col-span-8 bg-muted/20 backdrop-blur-sm border border-border/60 rounded-[2rem] p-6 md:p-10 hover:border-indigo-500/40 transition-colors shadow-sm relative overflow-hidden flex flex-col justify-end min-h-[300px]"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-[80px] rounded-full" />
              <div className="relative z-10">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-400 ring-1 ring-indigo-500/30 shadow-[0_0_20px_-5px_rgba(99,102,241,0.3)] group-hover:bg-indigo-500/20 transition-all duration-300">
                  <BookOpen className="w-7 h-7" strokeWidth={1.5} />
                </div>
                <h4 className="text-3xl font-bold mb-4 text-foreground">Mentorship & Capability Building</h4>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                  We don't build walled gardens. We actively upskill your internal team on Fabric best practices so they can own the platform long after the initial build is complete.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Case Study - Premium Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-background relative overflow-hidden border-t border-border/50">
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="bg-primary/5 text-foreground rounded-[3rem] p-6 md:p-10 lg:p-16 relative overflow-hidden shadow-sm border border-primary/20">
            {/* Decorative background glow */}
            <div className="absolute top-0 right-0 w-[500px] max-w-full h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
            
            <div className="relative z-10">
              <div className="mb-8 inline-flex border border-primary/30 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-bold uppercase tracking-wider">
                Case Study: Enterprise Migration
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-12 max-w-3xl leading-tight text-foreground">
                Rescuing a Failing Fabric Migration
              </h2>

              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-primary">The Situation</h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    An internal team was struggling to migrate from Snowflake to Microsoft Fabric. They were 4 months behind schedule because they couldn't optimize the Lakehouse partitioning strategy, leading to massive compute costs and performance issues. Their engineers were learning on the fly.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4 text-primary">What We Built</h3>
                  <ul className="space-y-3 text-muted-foreground text-lg">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                      Deployed a fractional Fabric Architect (10 hrs/week) to immediately redesign the workspace and Medallion architecture.
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                      Added 2 dedicated Data Engineers to accelerate notebook refactoring from Snowpark to PySpark.
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                      Kept the client's internal team as product owners while we provided the specialized technical muscle.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-16 pt-10 border-t border-primary/20 grid grid-cols-1 sm:grid-cols-3 gap-8">
                <div>
                  <p className="text-5xl font-black text-primary mb-2">4 Weeks</p>
                  <p className="text-muted-foreground font-medium">To get the migration back on track</p>
                </div>
                <div>
                  <p className="text-4xl font-black text-primary mb-2 mt-1">Upskilled</p>
                  <p className="text-muted-foreground font-medium">Internal team fully adopted best practices</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-background border-t border-border">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="bg-primary/5 border border-primary/20 rounded-[3rem] p-12 md:p-10 lg:p-16 text-center shadow-lg shadow-primary/5">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Expand your bandwidth.</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              Plug proven architects and engineers directly into your sprints and accelerate your data initiatives.
            </p>
            <Link href="/contact?service=scale" passHref>
              <Button variant="hero" size="lg" className="px-10 text-lg h-14 rounded-full">
                Hire Elite Talent
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
