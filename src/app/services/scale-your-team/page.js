// @ts-nocheck
"use client";

import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import {
  AlertCircle,
  ChevronRight,
  Users,
  ShieldAlert,
  Target,
  UserCheck,
  HardHat,
  TrendingUp,
  BookOpen,
  Clock,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

export default function ScaleYourTeam() {
  return (
    <main className="relative min-h-screen bg-background pt-20">
      <Breadcrumb
        items={[
          {
            label: "Services",
            href: "/services/define-your-roadmap/maturity-assessment",
          },
          { label: "Scale Your Team", href: "/services/scale-your-team" },
        ]}
      />

      {/* Hero Section - Neo-Brutalist Layout */}
      <section className="relative overflow-hidden border-b-8 border-foreground bg-background py-16 md:py-24 lg:py-32">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="container relative z-10 mx-auto px-6">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
            {/* Left Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="max-w-2xl lg:col-span-7"
            >
              <motion.div variants={fadeIn} className="mb-6 inline-block border-2 border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-black uppercase tracking-[0.3em] text-primary">
                Team Augmentation
              </motion.div>
              <motion.h1
                variants={fadeIn}
                className="mb-8 text-[3rem] font-black uppercase leading-[0.9] tracking-tighter text-foreground drop-shadow-[4px_4px_0_rgba(0,0,0,0.1)] sm:text-[4.5rem] lg:text-[6.5rem] dark:drop-shadow-[4px_4px_0_rgba(255,255,255,0.1)]"
              >
                Scale Your <br />
                <span className="text-primary underline decoration-primary/30 underline-offset-8">Team</span>
              </motion.h1>
              <motion.p
                variants={fadeIn}
                className="mb-10 border-l-[4px] border-primary pl-6 text-xl font-bold leading-relaxed text-foreground/80 md:text-2xl"
              >
                Stop relying on expensive monolithic consultancies. We provide
                flexible, high-tier Microsoft Fabric and Power BI engineering
                talent that integrates directly into your existing team.
              </motion.p>

              <motion.div
                variants={fadeIn}
                className="flex flex-col gap-4 sm:flex-row"
              >
                <Link href="/contact?service=scale" passHref className="w-full sm:w-auto">
                  <Button
                    variant="hero"
                    size="lg"
                    className="group relative flex h-16 w-full items-center justify-center rounded-none border-4 border-foreground bg-primary px-8 text-center text-sm font-black uppercase tracking-wider text-primary-foreground shadow-[8px_8px_0_0_rgba(0,0,0,1)] transition-all duration-300 hover:translate-x-2 hover:translate-y-2 hover:bg-primary/90 hover:shadow-none sm:w-auto sm:px-12 dark:shadow-[8px_8px_0_0_rgba(255,255,255,0.2)] dark:hover:shadow-none"
                  >
                    Hire Elite Talent
                    <ChevronRight className="ml-4 h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="relative hidden lg:col-span-5 lg:block"
            >
              <div className="group relative mx-auto aspect-square w-full max-w-lg transform-gpu overflow-hidden rounded-none border-[6px] border-foreground bg-background shadow-[16px_16px_0_0_rgba(0,0,0,1)] transition-all duration-700 hover:-translate-y-2 hover:translate-x-2 dark:shadow-[16px_16px_0_0_rgba(255,255,255,0.2)]">
                <Image
                  src="/images/services/scale-your-team-hero.png"
                  alt="Elite Software Engineering Team"
                  fill
                  priority
                  className="object-cover grayscale-[30%] contrast-125 transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                
                {/* Fixed Hover Overlay: No more center blur, just a clean bottom gradient */}
                <div className="absolute inset-0 z-20 flex items-end justify-start p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-t from-background/90 via-transparent to-transparent pointer-events-none">
                  <div className="border-l-[4px] border-primary bg-background/90 px-4 py-2 text-sm font-black uppercase tracking-widest text-foreground backdrop-blur-sm">
                    Elite Pods Deployed
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Problem - Sticky Scroll */}
      <section className="relative bg-muted/20 py-16 lg:py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
            {/* Sticky Sidebar */}
            <div className="pl-0 lg:col-span-5 lg:pl-4">
              <div className="sticky top-32">
                <h2 className="mb-4 text-sm font-bold uppercase tracking-widest text-emerald-400 drop-shadow-[0_0_10px_rgba(52,211,153,0.2)]">
                  The Challenge
                </h2>
                <h3 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                  The consulting trap.
                </h3>
                <p className="mb-8 text-xl leading-relaxed text-foreground/80">
                  Traditional staffing agencies and global consultancies are
                  structured to maximize their margins, not your delivery speed.
                </p>
              </div>
            </div>

            {/* Scrollable Content */}
            <div className="flex flex-col gap-8 pt-10 lg:col-span-7">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
                className="hover:shadow-glow group rounded-[2rem] border border-border/60 bg-background/80 p-6 shadow-sm backdrop-blur-md transition-all duration-500 hover:border-red-500/40 md:p-10"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-500/10 text-red-500 transition-transform group-hover:scale-110">
                  <Target size={28} />
                </div>
                <h4 className="mb-4 text-2xl font-bold text-foreground">
                  The Generalist Trap
                </h4>
                <p className="text-lg leading-relaxed text-foreground/80">
                  You hire a large consultancy, and they staff your project with
                  generalist developers who are learning Fabric on your dime.
                  You need specialists who have actually built enterprise-grade
                  data architectures, not people reading documentation for the
                  first time.
                </p>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
                className="hover:shadow-glow group rounded-[2rem] border border-border/60 bg-background/80 p-6 shadow-sm backdrop-blur-md transition-all duration-500 hover:border-amber-500/40 md:p-10"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-500 transition-transform group-hover:scale-110">
                  <ShieldAlert size={28} />
                </div>
                <h4 className="mb-4 text-2xl font-bold text-foreground">
                  The &quot;B-Team&quot; Switchwitch
                </h4>
                <p className="text-lg leading-relaxed text-foreground/80">
                  The consultancy pitches you with their senior architects, but
                  once the contract is signed, they swap them out for junior
                  resources. You&apos;re paying premium rates for entry-level
                  execution, resulting in spaghetti code and architectural debt.
                </p>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
                className="hover:shadow-glow group rounded-[2rem] border border-border/60 bg-background/80 p-6 shadow-sm backdrop-blur-md transition-all duration-500 hover:border-indigo-500/40 md:p-10"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-500 transition-transform group-hover:scale-110">
                  <Clock size={28} />
                </div>
                <h4 className="mb-4 text-2xl font-bold text-foreground">
                  Administrative Overhead
                </h4>
                <p className="text-lg leading-relaxed text-foreground/80">
                  Traditional staffing agencies send you 40 resumes to review.
                  You spend weeks interviewing candidates only to find out they
                  don&apos;t actually understand DAX. You need pre-vetted, elite
                  talent that can start contributing on day one.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables - Bento Grid */}
      <section className="relative overflow-hidden bg-background py-16 md:py-24 lg:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,hsl(var(--primary)/0.05),transparent_40%)]" />
        <div className="container relative z-10 mx-auto max-w-7xl px-6">
          <div className="mb-20 text-center">
            <h2 className="mb-4 text-sm font-bold uppercase tracking-widest text-emerald-400 drop-shadow-[0_0_10px_rgba(52,211,153,0.2)]">
              Deliverables
            </h2>
            <h3 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Flexible augmentation models.
            </h3>
          </div>

          <div className="grid auto-rows-fr grid-cols-1 gap-6 md:grid-cols-12">
            {/* Large Feature 1 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="relative flex min-h-[300px] flex-col justify-end overflow-hidden rounded-[2rem] border border-border/60 bg-muted/20 p-6 shadow-sm backdrop-blur-sm transition-colors hover:border-primary/40 md:col-span-8 md:p-10"
            >
              <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-primary/10 blur-[80px]" />
              <div className="relative z-10">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-400 shadow-[0_0_20px_-5px_rgba(52,211,153,0.3)] ring-1 ring-emerald-500/30 transition-all duration-300 group-hover:bg-emerald-500/20">
                  <Users className="h-7 w-7" strokeWidth={1.5} />
                </div>
                <h4 className="mb-4 text-3xl font-bold text-foreground">
                  Dedicated Engineering Pods
                </h4>
                <p className="max-w-2xl text-lg leading-relaxed text-foreground/80">
                  A cohesive unit of pre-assembled architects and engineers that
                  integrate seamlessly into your agile workflow. They already
                  know how to work together, so they deliver features instantly.
                </p>
              </div>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="relative overflow-hidden rounded-[2rem] border border-border/60 bg-muted/20 p-6 shadow-sm backdrop-blur-sm transition-colors hover:border-blue-500/40 md:col-span-4 md:p-10"
            >
              <div className="relative z-10">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400 shadow-[0_0_20px_-5px_rgba(59,130,246,0.3)] ring-1 ring-blue-500/30 transition-all duration-300 group-hover:bg-blue-500/20">
                  <UserCheck className="h-6 w-6" strokeWidth={1.5} />
                </div>
                <h4 className="mb-4 text-2xl font-bold text-foreground">
                  Staff Augmentation
                </h4>
                <p className="leading-relaxed text-foreground/80">
                  Elite individual contributors specialized in Microsoft Fabric
                  and Power BI that fill specific capability gaps on your
                  existing team.
                </p>
              </div>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="relative overflow-hidden rounded-[2rem] border border-border/60 bg-muted/20 p-6 shadow-sm backdrop-blur-sm transition-colors hover:border-emerald-500/40 md:col-span-4 md:p-10"
            >
              <div className="relative z-10">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-400 shadow-[0_0_20px_-5px_rgba(52,211,153,0.3)] ring-1 ring-emerald-500/30 transition-all duration-300 group-hover:bg-emerald-500/20">
                  <HardHat className="h-6 w-6" strokeWidth={1.5} />
                </div>
                <h4 className="mb-4 text-2xl font-bold text-foreground">
                  Fractional Architecture
                </h4>
                <p className="leading-relaxed text-foreground/80">
                  Bring in a Principal Architect for 10 hours a week to validate
                  technical designs, review code, and ensure your internal team
                  is building on a solid foundation.
                </p>
              </div>
            </motion.div>

            {/* Large Feature 4 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="relative flex min-h-[300px] flex-col justify-end overflow-hidden rounded-[2rem] border border-border/60 bg-muted/20 p-6 shadow-sm backdrop-blur-sm transition-colors hover:border-indigo-500/40 md:col-span-8 md:p-10"
            >
              <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-indigo-500/10 blur-[80px]" />
              <div className="relative z-10">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-400 shadow-[0_0_20px_-5px_rgba(99,102,241,0.3)] ring-1 ring-indigo-500/30 transition-all duration-300 group-hover:bg-indigo-500/20">
                  <BookOpen className="h-7 w-7" strokeWidth={1.5} />
                </div>
                <h4 className="mb-4 text-3xl font-bold text-foreground">
                  Mentorship & Capability Building
                </h4>
                <p className="max-w-2xl text-lg leading-relaxed text-foreground/80">
                  We don&apos;t build walled gardens. We actively upskill your
                  internal team on Fabric best practices so they can own the
                  platform long after the initial build is complete.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Case Study - Premium Section */}
      <section className="relative overflow-hidden border-t border-border/50 bg-background py-16 md:py-24 lg:py-32">
        <div className="container relative z-10 mx-auto max-w-6xl px-6">
          <div className="relative overflow-hidden rounded-[3rem] border border-primary/20 bg-primary/5 p-6 text-foreground shadow-sm md:p-10 lg:p-16">
            {/* Decorative background glow */}
            <div className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] max-w-full rounded-full bg-primary/10 blur-[120px]" />

            <div className="relative z-10">
              <div className="mb-8 inline-flex rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-bold uppercase tracking-wider text-primary">
                Case Study: Enterprise Migration
              </div>
              <h2 className="mb-12 max-w-3xl text-3xl font-bold leading-tight text-foreground md:text-5xl">
                Rescuing a Failing Fabric Migration
              </h2>

              <div className="grid gap-12 md:grid-cols-2">
                <div>
                  <h3 className="mb-4 text-xl font-bold text-primary">
                    The Situation
                  </h3>
                  <p className="text-lg leading-relaxed text-foreground/80">
                    An internal team was struggling to migrate from Snowflake to
                    Microsoft Fabric. They were 4 months behind schedule because
                    they couldn&apos;t optimize the Lakehouse partitioning
                    strategy, leading to massive compute costs and performance
                    issues. Their engineers were learning on the fly.
                  </p>
                </div>
                <div>
                  <h3 className="mb-4 text-xl font-bold text-primary">
                    What We Built
                  </h3>
                  <ul className="space-y-3 text-lg text-foreground/80">
                    <li className="flex items-start gap-3">
                      <div className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      Deployed a fractional Fabric Architect (10 hrs/week) to
                      immediately redesign the workspace and Medallion
                      architecture.
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      Added 2 dedicated Data Engineers to accelerate notebook
                      refactoring from Snowpark to PySpark.
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      Kept the client&apos;s internal team as product owners
                      while we provided the specialized technical muscle.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-16 grid grid-cols-1 gap-8 border-t border-primary/20 pt-10 sm:grid-cols-3">
                <div>
                  <p className="mb-2 text-5xl font-black text-primary">
                    4 Weeks
                  </p>
                  <p className="font-medium text-foreground/80">
                    To get the migration back on track
                  </p>
                </div>
                <div>
                  <p className="mb-2 mt-1 text-4xl font-black text-primary">
                    Upskilled
                  </p>
                  <p className="font-medium text-foreground/80">
                    Internal team fully adopted best practices
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border bg-background py-16 lg:py-24">
        <div className="container mx-auto max-w-5xl px-6">
          <div className="rounded-[3rem] border border-primary/20 bg-primary/5 p-12 text-center shadow-lg shadow-primary/5 md:p-10 lg:p-16">
            <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
              Expand your bandwidth.
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-xl leading-relaxed text-foreground/80">
              Plug proven architects and engineers directly into your sprints
              and accelerate your data initiatives.
            </p>
            <Link href="/contact?service=scale" passHref>
              <Button
                variant="hero"
                size="lg"
                className="h-14 rounded-full px-10 text-lg"
              >
                Hire Elite Talent
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
