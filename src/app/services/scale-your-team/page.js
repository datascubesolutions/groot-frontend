// @ts-nocheck
"use client";

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
 <main className="overflow-x-clip relative min-h-screen bg-background pt-16 md:pt-20">
 

 {/* Hero Section - Split Layout */}
 <section className="relative overflow-hidden bg-background py-16 lg:py-24 md:py-16 lg:py-24 lg:py-16 lg:py-24">
 <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--primary)/0.15),transparent_50%)]" />
 <div className="container relative z-10 mx-auto px-6">
 <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12 lg:gap-16">
 {/* Left Content */}
 <motion.div
 initial="hidden"
 animate="visible"
 variants={staggerContainer}
 className="max-w-2xl lg:col-span-7"
 >
 <motion.h1
 variants={fadeIn}
 className="mb-6 text-4xl font-bold leading-[1.1] tracking-tight text-foreground md:text-5xl lg:text-7xl"
 >
 Scale Your <br />
 <span className="text-[hsl(var(--secondary))]">Team</span>
 </motion.h1>
 <motion.p
 variants={fadeIn}
 className="mb-10 text-xl font-light leading-relaxed text-foreground/90 md:text-2xl"
 >
 Stop relying on expensive monolithic consultancies. We provide
 flexible, high-tier Microsoft Fabric and Power BI engineering
 talent that integrates directly into your existing team to
 accelerate delivery.
 </motion.p>

 <motion.div
 variants={fadeIn}
 className="flex flex-col gap-4 sm:flex-row"
 >
 <Link href="/contact?service=scale" passHref>
 <Button
 variant="hero"
 size="lg"
 className="group px-8 shadow-xl shadow-primary/25"
 >
 Hire Elite Talent
 <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
 </Button>
 </Link>
 </motion.div>
 </motion.div>

 {/* Right Visual */}
 <motion.div
 initial={{ opacity: 0, x: 40 }}
 animate={{ opacity: 1, x: 0 }}
 transition={{ duration: 0.8, delay: 0.2 }}
 className="relative hidden lg:col-span-5 lg:block"
 >
 <div className="relative mx-auto aspect-square w-full max-w-lg transform-gpu overflow-hidden rounded-3xl shadow-2xl shadow-[hsl(var(--primary))/0.15]">
 <div className="absolute inset-0 flex items-center justify-center rounded-3xl border border-primary/20 bg-primary/5 backdrop-blur-sm">
 <div className="absolute h-48 w-48 rounded-full bg-primary/10 blur-3xl" />
 <Users
 className="h-32 w-32 text-primary opacity-80"
 strokeWidth={1}
 />
 </div>
 </div>
 </motion.div>
 </div>
 </div>
 </section>

 {/* The Problem - Sticky Scroll */}
 <section className="overflow-x-clip relative bg-muted/20 py-16 lg:py-24 lg:py-16 lg:py-24">
 <div className="container mx-auto px-6">
 <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12 lg:gap-16">
 {/* Sticky Sidebar */}
 <div className="pl-0 lg:col-span-5 lg:pl-4">
 <div className="sticky top-32">
 <h2 className="mb-4 text-sm font-bold uppercase tracking-widest text-emerald-400 drop-shadow-[0_0_10px_rgba(52,211,153,0.2)]">
 The Challenge
 </h2>
 <h3 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
 The consulting trap.
 </h3>
 <p className="mb-8 text-xl leading-relaxed text-muted-foreground">
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
 className="hover:shadow-glow group rounded-[2rem] border border-border/60 bg-background/80 p-6 shadow-sm backdrop-blur-md transition-all duration-500 hover:border-red-500/40 md:p-6 lg:p-8"
 >
 <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-500/10 text-red-500 transition-transform group-hover:scale-110">
 <Target size={28} />
 </div>
 <h4 className="mb-4 text-2xl font-bold text-foreground">
 The Generalist Trap
 </h4>
 <p className="text-lg leading-relaxed text-muted-foreground">
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
 className="hover:shadow-glow group rounded-[2rem] border border-border/60 bg-background/80 p-6 shadow-sm backdrop-blur-md transition-all duration-500 hover:border-amber-500/40 md:p-6 lg:p-8"
 >
 <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-500 transition-transform group-hover:scale-110">
 <ShieldAlert size={28} />
 </div>
 <h4 className="mb-4 text-2xl font-bold text-foreground">
 The &quot;B-Team&quot; Switchwitch
 </h4>
 <p className="text-lg leading-relaxed text-muted-foreground">
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
 className="hover:shadow-glow group rounded-[2rem] border border-border/60 bg-background/80 p-6 shadow-sm backdrop-blur-md transition-all duration-500 hover:border-indigo-500/40 md:p-6 lg:p-8"
 >
 <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-500 transition-transform group-hover:scale-110">
 <Clock size={28} />
 </div>
 <h4 className="mb-4 text-2xl font-bold text-foreground">
 Administrative Overhead
 </h4>
 <p className="text-lg leading-relaxed text-muted-foreground">
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
 <section className="relative overflow-hidden bg-background py-16 lg:py-24 md:py-16 lg:py-24 lg:py-16 lg:py-24">
 <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,hsl(var(--primary)/0.05),transparent_40%)]" />
 <div className="container relative z-10 mx-auto max-w-7xl px-6">
 <div className="mb-6 lg:mb-8 text-center">
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
 className="relative flex min-h-[300px] flex-col justify-end overflow-hidden rounded-[2rem] border border-border/60 bg-muted/20 p-6 shadow-sm backdrop-blur-sm transition-colors hover:border-primary/40 md:col-span-8 md:p-6 lg:p-8"
 >
 <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-primary/10 blur-[80px]" />
 <div className="relative z-10">
 <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-400 shadow-[0_0_20px_-5px_rgba(52,211,153,0.3)] ring-1 ring-emerald-500/30 transition-all duration-300 group-hover:bg-emerald-500/20">
 <Users className="h-7 w-7" strokeWidth={1.5} />
 </div>
 <h4 className="mb-4 text-3xl font-bold text-foreground">
 Dedicated Engineering Pods
 </h4>
 <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
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
 className="relative overflow-hidden rounded-[2rem] border border-border/60 bg-muted/20 p-6 shadow-sm backdrop-blur-sm transition-colors hover:border-blue-500/40 md:col-span-4 md:p-6 lg:p-8"
 >
 <div className="relative z-10">
 <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400 shadow-[0_0_20px_-5px_rgba(59,130,246,0.3)] ring-1 ring-blue-500/30 transition-all duration-300 group-hover:bg-blue-500/20">
 <UserCheck className="h-6 w-6" strokeWidth={1.5} />
 </div>
 <h4 className="mb-4 text-2xl font-bold text-foreground">
 Staff Augmentation
 </h4>
 <p className="leading-relaxed text-muted-foreground">
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
 className="relative overflow-hidden rounded-[2rem] border border-border/60 bg-muted/20 p-6 shadow-sm backdrop-blur-sm transition-colors hover:border-emerald-500/40 md:col-span-4 md:p-6 lg:p-8"
 >
 <div className="relative z-10">
 <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-400 shadow-[0_0_20px_-5px_rgba(52,211,153,0.3)] ring-1 ring-emerald-500/30 transition-all duration-300 group-hover:bg-emerald-500/20">
 <HardHat className="h-6 w-6" strokeWidth={1.5} />
 </div>
 <h4 className="mb-4 text-2xl font-bold text-foreground">
 Fractional Architecture
 </h4>
 <p className="leading-relaxed text-muted-foreground">
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
 className="relative flex min-h-[300px] flex-col justify-end overflow-hidden rounded-[2rem] border border-border/60 bg-muted/20 p-6 shadow-sm backdrop-blur-sm transition-colors hover:border-indigo-500/40 md:col-span-8 md:p-6 lg:p-8"
 >
 <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-indigo-500/10 blur-[80px]" />
 <div className="relative z-10">
 <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-400 shadow-[0_0_20px_-5px_rgba(99,102,241,0.3)] ring-1 ring-indigo-500/30 transition-all duration-300 group-hover:bg-indigo-500/20">
 <BookOpen className="h-7 w-7" strokeWidth={1.5} />
 </div>
 <h4 className="mb-4 text-3xl font-bold text-foreground">
 Mentorship & Capability Building
 </h4>
 <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
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
 <section className="relative overflow-hidden border-t border-border/50 bg-background py-16 lg:py-24 md:py-16 lg:py-24 lg:py-16 lg:py-24">
 <div className="container relative z-10 mx-auto max-w-6xl px-6">
 <div className="relative overflow-hidden rounded-[3rem] border border-primary/20 bg-primary/5 p-6 text-foreground shadow-sm md:p-6 lg:p-8 lg:p-6 lg:p-8">
 {/* Decorative background glow */}
 <div className="pointer-events-none absolute right-0 top-0 w-[500px] max-w-full rounded-full bg-primary/10 blur-[120px]" />

 <div className="relative z-10">
 <div className="mb-8 inline-flex rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-bold uppercase tracking-wider text-primary">
 Case Study: Enterprise Migration
 </div>
 <h2 className="mb-6 lg:mb-8 max-w-3xl text-3xl font-bold leading-tight text-foreground md:text-5xl">
 Rescuing a Failing Fabric Migration
 </h2>

 <div className="grid gap-12 lg:gap-16 md:grid-cols-2">
 <div>
 <h3 className="mb-4 text-xl font-bold text-primary">
 The Situation
 </h3>
 <p className="text-lg leading-relaxed text-muted-foreground">
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
 <ul className="space-y-3 text-lg text-muted-foreground">
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

 <div className="mt-8 lg:mt-12 grid grid-cols-1 gap-8 border-t border-primary/20 pt-10 sm:grid-cols-3">
 <div>
 <p className="mb-2 text-5xl font-black text-primary">
 4 Weeks
 </p>
 <p className="font-medium text-muted-foreground">
 To get the migration back on track
 </p>
 </div>
 <div>
 <p className="mb-2 mt-1 text-4xl font-black text-primary">
 Upskilled
 </p>
 <p className="font-medium text-muted-foreground">
 Internal team fully adopted best practices
 </p>
 </div>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* CTA Section */}
 <section className="overflow-x-clip border-t border-border bg-background py-16 lg:py-24 lg:py-16 lg:py-24">
 <div className="container mx-auto max-w-5xl px-6">
 <div className="rounded-[3rem] border border-primary/20 bg-primary/5 p-6 lg:p-8 text-center shadow-lg shadow-primary/5 md:p-6 lg:p-8 lg:p-6 lg:p-8">
 <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
 Expand your bandwidth.
 </h2>
 <p className="mx-auto mb-10 max-w-2xl text-xl leading-relaxed text-muted-foreground">
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
