"use client";

import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { motion, useScroll, useTransform } from "framer-motion";
import { CheckCircle2, FileText, LayoutTemplate, Route, ShieldCheck, Target, Users } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function DefineYourRoadmap() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.5]);

  return (
    <main className="pt-20 min-h-screen bg-background selection:bg-primary/20">
      <div className="container mx-auto px-6 py-4">
        <Breadcrumb
          items={[
            { label: "Services", href: "/services" },
            { label: "Define Your Roadmap", href: "/services/define-your-roadmap" },
          ]}
        />
      </div>

      {/* Hero Section - Split Layout */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-background">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(var(--primary)/0.2),transparent_50%)]" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

            {/* Left Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="lg:col-span-7 max-w-2xl"
            >
              <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-[1.1]">
                Define Your <br />
                <span className="text-[hsl(var(--secondary))]">
                  Data Roadmap
                </span>
              </motion.h1>
              <motion.p variants={fadeIn} className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed font-light">
                Before you invest in Microsoft Fabric, Power BI, or Copilot — understand where you are, where you need to go, and what it actually takes to get there.
              </motion.p>

              <motion.div variants={fadeIn} className="flex items-center gap-3 text-sm text-muted-foreground font-medium mb-10 bg-muted/40 p-4 rounded-2xl border border-border/50 inline-flex">
                <div className="bg-primary/20 p-1.5 rounded-full text-primary">
                  <CheckCircle2 size={16} />
                </div>
                <span>Strategic Clarity Before First Line of Code</span>
              </motion.div>

              <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact?service=roadmap" passHref className="w-full sm:w-auto">
                  <Button variant="hero" size="lg" className="w-full sm:w-auto shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all">
                    Start With an Assessment
                  </Button>
                </Link>
                <Link href="#problem" passHref className="w-full sm:w-auto">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto bg-background/50 backdrop-blur-sm border-border hover:bg-muted">
                    Explore Problem
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block lg:col-span-5"
            >
              <div className="relative w-full aspect-square max-w-lg mx-auto transform-gpu overflow-hidden rounded-3xl shadow-2xl shadow-[hsl(var(--primary))/0.15]">
                <Image
                  src="/define_your_roadmap_hero.png"
                  alt="Define Your Roadmap Strategy"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sticky Scroll Section - The Problem */}
      <section id="problem" className="py-32 bg-muted/20 relative" ref={targetRef}>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

            {/* Sticky Sidebar */}
            <div className="lg:col-span-5 pl-0 lg:pl-4">
              <div className="sticky top-32">
                <motion.p style={{ opacity }} className="text-sm font-bold uppercase tracking-widest text-primary mb-4">
                  The Problem
                </motion.p>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                  Why roadmaps matter.
                </h2>
                <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
                  <p>Every stalled data initiative shares a common origin: <span className="text-foreground font-medium">the team jumped straight to tools.</span></p>
                  <p>Someone provisioned a Microsoft Fabric capacity. Someone else started a Power BI pilot. IT set up an Azure Data Lake. Six months later, everyone's frustrated.</p>
                  <p className="font-medium text-foreground border-l-4 border-primary pl-5 py-2 bg-background p-4 rounded-r-xl shadow-sm">
                    The problem isn't Microsoft Fabric. The problem is nobody stopped to ask: What does our data landscape actually look like? Where are the gaps?
                  </p>
                </div>
              </div>
            </div>

            {/* Scrollable Content */}
            <div className="lg:col-span-7 flex flex-col gap-8 pt-10">
              <motion.div
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn}
                className="bg-background/80 backdrop-blur-md p-10 rounded-[2rem] border border-border shadow-sm hover:shadow-glow transition-shadow duration-500"
              >
                <div className="h-16 w-16 bg-red-500/10 text-red-500 rounded-2xl flex items-center justify-center mb-6">
                  <Target size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Misaligned Expectations</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">The CFO asks why monthly close still takes 10 days. The CTO wonders why the data team can't deliver what the business needs. Marketing built their own analytics stack because they don't trust central IT.</p>
              </motion.div>

              <motion.div
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn}
                className="bg-background/80 backdrop-blur-md p-10 rounded-[2rem] border border-border shadow-sm hover:shadow-glow transition-shadow duration-500"
              >
                <div className="h-16 w-16 bg-amber-500/10 text-amber-500 rounded-2xl flex items-center justify-center mb-6">
                  <LayoutTemplate size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Scattered Investments</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">Without an overarching strategy, cloud spend balloons across disconnected projects. A roadmap turns scattered Azure investments into coordinated, compounding progress.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-32 bg-background relative border-y border-border/50">
        <div className="absolute inset-0 dot-pattern opacity-30" />
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-4 text-center">Implementation Services</h2>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Three ways to gain clarity</h2>
          </div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <SubServiceCard
              title="Data & Analytics Maturity Assessment"
              description="A structured evaluation of your current data capabilities across six dimensions. We interview stakeholders, review your Microsoft Fabric or Azure architecture, and score your current state."
              timeline="3-4 weeks"
              href="/services/define-your-roadmap/maturity-assessment"
            />
            <SubServiceCard
              title="Enterprise Data Strategy"
              description="A comprehensive strategy aligning Microsoft data investments with business objectives. We document current state, define target architecture, prioritize initiatives, and build the business case."
              timeline="5-8 weeks"
              href="/services/define-your-roadmap/enterprise-data-strategy"
              featured
            />
            <SubServiceCard
              title="Platform Evaluation"
              description="Objective assessment of Microsoft Fabric vs. Databricks vs. Snowflake against your actual requirements. We provide the analysis with TCO modeling—not the vendor sales pitch."
              timeline="4-6 weeks"
              href="/services/define-your-roadmap/stack-evaluation"
            />
          </motion.div>
        </div>
      </section>

      {/* Engineering Principles / Our Approach */}
      <section className="py-32 bg-secondary/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay" />
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">Methodology</h2>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">How we build roadmaps</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ApproachCard
              step="01"
              title="Business First, Technology Second"
              desc="We start with business outcomes. What decisions do you need to make faster? The roadmap serves the business — Microsoft Fabric is just how we get there."
            />
            <ApproachCard
              step="02"
              title="Stakeholder Alignment"
              desc="We build roadmaps through workshops that surface competing priorities and political realities. The final roadmap reflects what's actually achievable in your organization."
            />
            <ApproachCard
              step="03"
              title="Phased Implementation"
              desc="We deliver roadmaps in 90-day phases. You're not locked into a 3-year plan that becomes irrelevant. Each phase delivers value, informs the next, and allows adjustments."
            />
          </div>
        </div>
      </section>

      {/* Is this right for you & Starting Point combined */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5">
              <h2 className="text-3xl md:text-5xl font-bold mb-10 tracking-tight">Is this right for you?</h2>
              <div className="space-y-6">
                <ScenarioItem title="The New Data Leader" text="You inherited a mix of systems, Azure resources, and half-finished Power BI projects. Before charting a path forward, you need to understand what you're actually working with." />
                <ScenarioItem title="The PE Operating Partner" text="Your firm just acquired a platform company. You need to assess data capabilities quickly and build a roadmap for Microsoft Fabric adoption." />
                <ScenarioItem title="The Post-Acquisition Integration" text="You have overlapping ERPs, conflicting data definitions, and no unified reporting. The integration plan needs a comprehensive data strategy." />
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 bg-muted/30 border border-border p-10 md:p-14 rounded-[2.5rem]"
            >
              <h2 className="text-3xl font-bold mb-10 tracking-tight text-center md:text-left">Where to start</h2>
              <div className="space-y-6 relative">
                <div className="absolute left-6 top-8 bottom-8 w-px bg-border hidden sm:block" />

                <div className="relative z-10 sm:pl-16">
                  <div className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-sm" />
                  <StartingPointCard title="Option 1: Maturity Assessment (3-4 weeks)" text="Best if you need a clear baseline before making any decisions. We interview stakeholders and deliver a scored assessment with prioritized recommendations." />
                </div>
                <div className="relative z-10 sm:pl-16">
                  <div className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-sm" />
                  <StartingPointCard title="Option 2: Strategy Workshop (3 weeks)" text="Best if you have a specific initiative in mind and need alignment. Includes prep, facilitated workshop, and synthesis of deliverables." />
                </div>
                <div className="relative z-10 sm:pl-16">
                  <div className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-sm" />
                  <StartingPointCard title="Option 3: Full Roadmap (6-10 weeks)" text="Best if you need a comprehensive strategy and implementation plan. Includes target state architecture, business case, and detailed roadmap." />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="border border-primary/20 bg-background/80 backdrop-blur-xl rounded-[3rem] p-12 md:p-20 max-w-5xl mx-auto shadow-2xl shadow-primary/5 flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
            <div className="flex-1">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground tracking-tight">Start with clarity.</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                You don't need another Azure service. You need a plan. Let's build a roadmap that turns your Microsoft investments into coordinated action.
              </p>
            </div>
            <div className="shrink-0 flex justify-center">
              <Link href="/contact?service=roadmap" passHref>
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-10 h-16 rounded-full font-bold shadow-xl shadow-primary/20">
                  Schedule a Conversation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function SubServiceCard({ href, title, description, timeline, featured = false }) {
  return (
    <motion.div variants={fadeIn} className="h-full">
      <Link href={href} className={`group flex flex-col h-full bg-background/50 backdrop-blur-sm border ${featured ? 'border-primary/50 shadow-md shadow-primary/5' : 'border-border/60 hover:border-primary/40'} rounded-[2rem] p-8 md:p-10 transition-all duration-500 hover:shadow-glow relative overflow-hidden`}>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <h3 className={`text-2xl font-bold mb-6 group-hover:text-primary transition-colors duration-300 tracking-tight z-10 ${featured ? 'text-primary' : ''}`}>
          {title}
        </h3>
        <p className="text-muted-foreground mb-10 leading-relaxed flex-grow text-lg z-10">{description}</p>

        <div className="mt-auto flex flex-col gap-4 z-10 border-t border-border pt-6">
          <span className="text-sm font-semibold text-foreground/60 bg-muted/40 w-fit px-3 py-1 rounded-full border border-border">⏱ {timeline}</span>
          <div className="flex items-center justify-between font-semibold text-foreground/70 group-hover:text-primary transition-colors">
            Explore phase
            <div className="bg-primary/5 flex items-center justify-center p-2 rounded-full group-hover:bg-primary group-hover:text-primary-foreground transition-all">
              <Route size={18} className="group-hover:translate-x-0.5 transition-transform" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

function ApproachCard({ step, title, desc }) {
  return (
    <motion.div
      initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
      className="bg-background/60 backdrop-blur-sm border border-border/50 p-10 rounded-[2rem] h-full hover:border-border transition-colors shadow-sm"
    >
      <div className="text-5xl font-black text-muted/30 mb-6 font-mono -ml-2">{step}</div>
      <h3 className="text-2xl font-bold mb-4 tracking-tight">{title}</h3>
      <p className="text-muted-foreground leading-relaxed text-lg">{desc}</p>
    </motion.div>
  );
}

function ScenarioItem({ title, text }) {
  return (
    <div className="flex flex-col sm:flex-row gap-6 p-8 rounded-[1.5rem] bg-background border border-border shadow-sm hover:shadow-md transition-shadow">
      <div className="mt-1 shrink-0">
        <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-500 border border-indigo-500/20">
          <ShieldCheck size={20} />
        </div>
      </div>
      <div>
        <h4 className="text-xl font-bold mb-3">{title}</h4>
        <p className="text-muted-foreground leading-relaxed text-lg">{text}</p>
      </div>
    </div>
  );
}

function StartingPointCard({ title, text }) {
  return (
    <div className="p-8 bg-background border border-border shadow-sm rounded-2xl hover:border-primary/30 transition-colors">
      <h4 className="text-xl font-bold mb-3">{title}</h4>
      <p className="text-muted-foreground leading-relaxed text-lg">{text}</p>
    </div>
  );
}
