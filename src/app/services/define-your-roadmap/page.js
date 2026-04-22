// @ts-nocheck
"use client";

import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Activity,
  CheckCircle2,
  ChevronRight,
  LayoutTemplate,
  Layers,
  Route,
  ShieldCheck,
  Target,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

export default function DefineYourRoadmap() {
  const targetRef = useRef(null);

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background pt-24 selection:bg-forest/30">
      <div className="container relative z-10 mx-auto mb-10 max-w-7xl px-6 pt-4">
        <Breadcrumb
          items={[
            { label: "Services", href: "/services" },
            {
              label: "Define Your Roadmap",
              href: "/services/define-your-roadmap",
            },
          ]}
        />
      </div>

      {/* Extreme Hero Section - Unified Theme & Extended Margins */}
      <section className="relative pb-32 pt-10 lg:pb-48">
        <div
          className="absolute right-0 top-0 -z-10 hidden h-[120%] w-[55vw] bg-muted/40 backdrop-blur-3xl lg:block"
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 15% 100%)" }}
        />

        <div className="container relative z-20 mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-24">
            {/* Left Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="relative z-20 flex flex-col items-start gap-10 md:flex-row lg:col-span-7"
            >
              {/* Vertical Badge */}
              <motion.div
                variants={fadeIn}
                className="hidden flex-col items-center pl-2 pt-4 md:flex"
              >
                <div className="mb-8 h-40 w-px bg-gradient-to-b from-transparent to-forest/80"></div>
                <div className="flex rotate-180 items-center justify-center gap-6 whitespace-nowrap text-sm font-black uppercase tracking-[0.4em] text-forest [writing-mode:vertical-rl]">
                  Strategic Clarity Check
                  <span className="relative flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint/80 opacity-75"></span>
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-forest"></span>
                  </span>
                </div>
              </motion.div>

              <div className="max-w-[850px]">
                <motion.h1
                  variants={fadeIn}
                  className="mb-12 text-[3rem] font-black uppercase leading-[0.8] tracking-tighter text-foreground drop-shadow-[5px_5px_0_hsl(var(--forest)/0.1)] sm:text-[4rem] md:text-[6rem] lg:text-[7.5rem]"
                >
                  <span className="stroke-text isolate inline-block bg-gradient-to-r from-foreground to-foreground/40 bg-clip-text text-transparent mix-blend-normal">
                    Define
                  </span>{" "}
                  <br />
                  <span className="text-mint">Your</span> <br />
                  Data &amp; AI
                  <br />
                  Roadmap
                </motion.h1>

                <motion.div
                  variants={fadeIn}
                  className="relative z-30 -ml-4 border-[4px] border-foreground bg-background/95 p-6 shadow-[10px_10px_0_0_hsl(var(--forest))] backdrop-blur-2xl md:-ml-8 md:p-14 md:shadow-[20px_20px_0_0_hsl(var(--forest))]"
                >
                  <div className="absolute right-0 top-0 max-w-[80%] bg-foreground px-3 py-2 text-right text-[8px] font-black uppercase tracking-widest text-background sm:max-w-none sm:text-[10px] sm:tracking-[0.3em]">
                    Strategic Clarity Before First Line of Code
                  </div>
                  <div className="absolute -left-6 top-1/2 z-40 hidden h-2 w-12 -translate-y-1/2 bg-forest md:block" />

                  <p className="mb-8 text-xl font-black uppercase leading-snug tracking-tight text-foreground md:text-3xl">
                    Before you invest in Microsoft Fabric, Power BI, or Copilot
                    — understand where you are, where you need to go, and what
                    it{" "}
                    <span className="relative bg-foreground px-2 py-1 text-background shadow-[-5px_5px_0_hsl(var(--forest))]">
                      actually takes
                    </span>{" "}
                    to get there.
                  </p>

                  <div className="flex flex-col gap-6 sm:flex-row">
                    <Link
                      href="/contact?service=roadmap"
                      passHref
                      className="w-full sm:w-auto"
                    >
                      <Button
                        variant="hero"
                        size="lg"
                        className="group flex h-20 w-full items-center justify-between whitespace-normal rounded-none border-[3px] border-foreground bg-foreground px-4 text-left text-xs font-black uppercase tracking-widest text-background shadow-[10px_10px_0px_0px_hsl(var(--forest)/0.4)] transition-all duration-500 hover:translate-x-[10px] hover:translate-y-[10px] hover:bg-forest hover:text-forest-foreground hover:shadow-none sm:whitespace-nowrap sm:px-10 sm:text-center sm:text-sm sm:tracking-[0.2em] md:text-base"
                      >
                        <span>Start With an Assessment</span>
                        <ChevronRight className="ml-4 h-5 w-5 shrink-0 transition-transform group-hover:translate-x-2" />
                      </Button>
                    </Link>
                    <Link href="/contact" passHref className="w-full sm:w-auto">
                      <Button
                        variant="outline"
                        size="lg"
                        className="flex h-20 w-full items-center justify-center gap-3 whitespace-normal rounded-none border-[3px] border-foreground bg-transparent px-4 text-center text-xs font-black uppercase tracking-widest text-foreground shadow-[10px_10px_0px_0px_hsl(var(--foreground)/0.1)] transition-all duration-500 hover:translate-x-[10px] hover:translate-y-[10px] hover:bg-muted hover:shadow-none sm:whitespace-nowrap sm:px-10 sm:text-sm sm:tracking-[0.2em] md:text-base"
                      >
                        Talk to Our Team
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Graphic block - Architectural Typography replacing image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="group relative mt-16 h-[450px] overflow-hidden border-[6px] border-foreground bg-muted/20 lg:col-span-5 lg:mt-0 lg:h-[700px]"
            >
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808020_1px,transparent_1px),linear-gradient(to_bottom,#80808020_1px,transparent_1px)] bg-[size:40px_40px] mix-blend-multiply" />

              {/* Massive Structural Elements */}
              <div className="duration-[2s] absolute bottom-0 right-10 top-0 w-24 bg-foreground/5 transition-colors group-hover:bg-forest/10" />
              <div className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-foreground/20" />
              <div className="absolute left-0 right-0 top-[30%] h-px border-t border-dashed border-foreground/30" />

              <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
                <Target
                  size={120}
                  className="mb-8 h-[80px] w-[80px] text-foreground/5 transition-all duration-1000 group-hover:scale-110 group-hover:text-forest/10 md:h-[120px] md:w-[120px]"
                  strokeWidth={1}
                />
                <div className="text-[5rem] font-black uppercase leading-none tracking-tighter text-foreground/[0.03] sm:text-[6rem] md:text-[8rem]">
                  DATA
                </div>
                <div className="-mt-6 text-[4rem] font-black uppercase leading-none tracking-tighter text-foreground/[0.03] sm:text-[5rem] md:text-[6rem]">
                  CORP
                </div>
              </div>

              {/* Overlay elements focused on Theme Color (Forest/Foreground) */}
              <div className="absolute bottom-10 right-10 flex flex-col gap-3 border-[4px] border-foreground bg-background p-5 text-foreground shadow-[10px_10px_0_0_hsl(var(--forest))]">
                <div className="mb-2 flex items-center gap-3 border-b-2 border-border pb-3">
                  <div className="h-4 w-4 animate-pulse border-2 border-foreground bg-forest shadow-[0_0_15px_hsl(var(--forest))]" />
                  <span className="text-xs font-black uppercase tracking-widest text-forest">
                    System Ready
                  </span>
                </div>
                <div className="text-xs font-black uppercase tracking-[0.2em] text-foreground/80">
                  Signal: Verified
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Asymmetric Problem Section - Deep Spacing & Focused Forest Theme */}
      <section
        className="relative z-30 bg-background pb-48 pt-24"
        ref={targetRef}
      >
        <div className="container mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-start gap-16 lg:flex-row lg:gap-32">
            {/* Sticky Sidebar */}
            <div className="top-32 z-40 -mt-8 border-[4px] border-l-[12px] border-foreground border-l-forest bg-card p-6 shadow-[15px_15px_0_0_hsl(var(--forest)/0.2)] sm:-mt-16 md:sticky md:p-10 md:shadow-[30px_30px_0_0_hsl(var(--forest)/0.2)] lg:-mt-32 lg:w-[40%] lg:p-14">
              <h2 className="mb-8 flex items-center gap-4 text-sm font-black uppercase tracking-[0.4em] text-forest">
                <span className="h-1 w-12 bg-forest"></span>
                The Friction
              </h2>
              <h3 className="mb-8 text-[2.5rem] font-black uppercase leading-[0.85] tracking-tighter sm:text-[3rem] lg:text-[5rem]">
                Why
                <br />
                Roadmaps
                <br />
                Matter.
              </h3>
              <p className="mb-8 border-l-4 border-foreground bg-muted/50 p-6 text-xl font-bold leading-relaxed text-foreground">
                Every stalled data initiative shares a common origin:{" "}
                <span className="text-forest">
                  the team jumped straight to tools.
                </span>
              </p>
              <div className="space-y-6 text-base font-semibold leading-relaxed text-foreground/80">
                <p>
                  Someone provisioned a Microsoft Fabric capacity. Someone else
                  started a Power BI pilot. IT set up an Azure Data Lake. Six
                  months later, everyone&apos;s frustrated.
                </p>
                <p className="border-t-2 border-border/60 pt-6">
                  The problem isn&apos;t the technology. The problem is nobody
                  stopped to ask the fundamental questions: What does our data
                  landscape actually look like? Where are the gaps between what
                  we have and what we need?
                </p>
              </div>
            </div>

            {/* Scrollable Overlapping Problem Cards - No playful colors, only strict theme */}
            <div className="flex flex-col gap-10 pt-10 lg:w-[60%] lg:gap-16">
              {/* Problem 01 */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
                className="group relative isolate overflow-hidden border-x-4 border-y border-foreground bg-card p-6 shadow-[10px_10px_0_0_hsl(var(--forest)/0.1)] md:p-10 lg:p-16 lg:shadow-[20px_20px_0_0_hsl(var(--forest)/0.1)]"
              >
                <div className="absolute right-0 top-0 -z-10 h-32 w-32 rounded-bl-full bg-forest/5 transition-transform duration-700 group-hover:scale-150" />
                <div className="pointer-events-none absolute -bottom-10 -right-6 select-none text-[6rem] font-black leading-none text-foreground/5 transition-transform duration-700 group-hover:scale-110 md:text-[10rem]">
                  01
                </div>

                <div className="mb-10 flex items-center gap-6">
                  <div className="flex h-16 w-16 items-center justify-center border-4 border-foreground bg-forest text-forest-foreground shadow-[4px_4px_0_0_foreground]">
                    <Target size={32} />
                  </div>
                  <p className="border border-forest/20 bg-forest/10 px-4 py-2 text-sm font-black uppercase tracking-[0.3em] text-forest">
                    Expectation Gap
                  </p>
                </div>

                <h4 className="mb-8 text-3xl font-black uppercase leading-[0.9] tracking-tight lg:text-4xl">
                  Leadership Frustration
                </h4>
                <p className="relative z-10 border-l-2 border-border pl-6 text-lg font-bold leading-relaxed text-foreground/90">
                  The CFO asks why monthly close still takes 10 days. The CTO
                  wonders why the data team can&apos;t deliver what the business
                  needs. Marketing built their own analytics stack because they
                  don&apos;t trust central IT.
                </p>
              </motion.div>

              {/* Problem 02 */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
                className="group relative isolate self-end overflow-hidden bg-foreground p-6 text-background shadow-[15px_15px_0_0_hsl(var(--forest)/0.3)] md:w-[90%] md:p-10 lg:p-16 lg:shadow-[30px_30px_0_0_hsl(var(--forest)/0.3)]"
              >
                <div className="absolute right-0 top-0 -z-10 h-32 w-32 rounded-bl-full bg-forest/10 transition-transform duration-700 group-hover:scale-150" />
                <div className="pointer-events-none absolute -bottom-10 -left-6 select-none text-[6rem] font-black leading-none text-background/10 transition-transform duration-700 group-hover:scale-110 md:text-[10rem]">
                  02
                </div>

                <div className="relative z-10 mb-10 flex items-center gap-6">
                  <div className="flex h-16 w-16 rotate-3 items-center justify-center bg-background text-foreground shadow-[4px_4px_0_0_hsl(var(--forest))]">
                    <LayoutTemplate size={32} />
                  </div>
                  <p className="border border-background/20 bg-background/20 px-4 py-2 text-sm font-black uppercase tracking-[0.3em] text-background">
                    Fragmentation
                  </p>
                </div>

                <h4 className="mb-8 text-3xl font-black uppercase leading-[0.9] tracking-tight text-background lg:text-4xl">
                  Scattered Investments
                </h4>
                <p className="relative z-10 border-l-2 border-forest pl-6 text-lg font-bold leading-relaxed text-background/80">
                  A roadmap isn&apos;t a Gantt chart. It&apos;s the strategic
                  foundation that turns scattered Azure investments into
                  coordinated progress.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Blueprint Services Section - Extended Padding & Strict Theming */}
      <section className="relative border-b-2 border-t-[8px] border-foreground bg-muted/30 py-16 md:py-24 lg:py-32">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />

        <div className="container relative z-10 mx-auto max-w-[1400px] px-6">
          <div className="mb-24 flex flex-col justify-between gap-12 border-b-[6px] border-forest pb-10 md:flex-row md:items-end">
            <div className="max-w-5xl">
              <h2 className="mb-8 inline-block bg-foreground px-5 py-3 text-sm font-black uppercase tracking-[0.5em] text-background text-forest shadow-[5px_5px_0_hsl(var(--forest))]">
                Three ways to gain clarity
              </h2>
              <h3 className="text-[3rem] font-black uppercase leading-[0.85] tracking-tighter text-foreground sm:text-[4rem] md:text-[6rem] lg:text-[7rem]">
                What&apos;s
                <br />
                Included.
              </h3>
            </div>
            <p className="max-w-sm border-l-[4px] border-forest bg-background p-6 pl-6 text-lg font-black leading-relaxed text-foreground">
              Three specific assessments to document your current state and
              design your target architecture.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-[4px] border-[4px] border-foreground bg-foreground p-[4px] shadow-[25px_25px_0_0_hsl(var(--forest)/0.25)] md:grid-cols-3">
            <SubServiceCard
              itemNum="A."
              title="Data & Analytics Maturity Assessment"
              description="A structured evaluation of capabilities across six dimensions. We interview stakeholders and score your current state with irrefutable evidence."
              timeline="3-4 weeks"
              href="/services/define-your-roadmap/maturity-assessment"
            />
            <SubServiceCard
              itemNum="B."
              title="Enterprise Data Strategy"
              description="A comprehensive strategy aligning Microsoft data investments with business outcomes. Target Fabric architecture, timelines, and business case."
              timeline="5-8 weeks"
              href="/services/define-your-roadmap/enterprise-data-strategy"
              featured
            />
            <SubServiceCard
              itemNum="C."
              title="Platform Evaluation"
              description="Objective assessment of Fabric vs Databricks vs Snowflake against your reality. TCO modeling and feature mapping—no vendor sales pitch."
              timeline="4-6 weeks"
              href="/services/define-your-roadmap/stack-evaluation"
            />
          </div>
        </div>
      </section>

      {/* Engineering Principles Panel approach - Intense Margins */}
      <section className="relative overflow-hidden bg-background py-40">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="mb-16 flex flex-col justify-between gap-8 border-b-[10px] border-foreground pb-12 md:flex-row md:items-end lg:mb-24 lg:gap-12 lg:pb-16">
            <h3 className="mb-0 text-[3rem] font-black uppercase leading-none tracking-tighter text-foreground sm:text-[4rem] lg:text-[7.5rem]">
              Methodology
            </h3>
            <p className="max-w-sm bg-foreground p-6 text-sm font-black uppercase tracking-[0.2em] text-background shadow-[10px_10px_0_hsl(var(--forest))]">
              How we build roadmaps that survive leadership changes.
            </p>
          </div>

          <div className="flex flex-col gap-0 border-[4px] border-foreground bg-foreground p-[3px] lg:flex-row">
            <ApproachPanel
              step="01"
              title="Business First, Technology Second"
              desc="We start with business outcomes, not Fabric features. The roadmap serves the business — Fabric is just how we get there."
            />
            <ApproachPanel
              step="02"
              title="Stakeholder Alignment"
              desc="We build roadmaps through workshops that surface competing priorities and political realities, building a plan that's actually achievable."
            />
            <ApproachPanel
              step="03"
              title="Phased Implementation"
              desc="Delivered in 90-day increments. You aren't locked into a 3-year plan—each phase provides value, informs the next, and gives options to adjust."
            />
          </div>
        </div>
      </section>

      {/* Scenarios and Starting Point - Wider gaps, singular focus */}
      <section className="relative border-y-[6px] border-foreground bg-muted/40 py-16 md:py-24 lg:py-32">
        <div className="container mx-auto max-w-[1400px] px-6">
          <div className="grid grid-cols-1 items-start gap-24 lg:grid-cols-12 lg:gap-10 lg:gap-16">
            {/* Scenarios */}
            <div className="lg:col-span-5">
              <h2 className="mb-16 text-5xl font-black uppercase leading-[0.9] tracking-tighter md:text-[4rem]">
                Is this
                <br />
                right for you?
              </h2>
              <div className="flex flex-col gap-[4px] border-[4px] border-foreground bg-foreground p-[4px] shadow-[20px_20px_0_0_hsl(var(--forest)/0.2)]">
                <ScenarioItem
                  num="X"
                  title="The New Data Leader"
                  text="You inherited a mix of systems, Azure resources, and half-finished Power BI projects. You need a path forward."
                />
                <ScenarioItem
                  num="Y"
                  title="The PE Operating Partner"
                  text="Your firm just acquired a platform company. You need to assess data capabilities quickly and build an execution plan."
                />
                <ScenarioItem
                  num="Z"
                  title="Post-Acquisition Integration"
                  text="Overlapping ERPs, conflicting data definitions, and no unified reporting. The integration plan needs a data strategy."
                />
              </div>
            </div>

            {/* Starting Points */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative border-[6px] border-foreground bg-card p-6 shadow-[15px_15px_0_0_hsl(var(--forest)/0.5)] md:p-12 lg:col-span-7 lg:ml-8 lg:mt-32 lg:p-20 lg:shadow-[25px_25px_0_0_hsl(var(--forest)/0.5)]"
            >
              <div className="absolute right-0 top-0 bg-foreground px-4 py-2 text-[10px] font-black uppercase tracking-[0.4em] text-background sm:px-6 sm:py-3 sm:text-sm">
                Action Plan
              </div>
              <h2 className="mb-10 border-b-4 border-foreground pb-8 text-[2rem] font-black uppercase tracking-tight sm:mb-16 sm:text-[3rem]">
                Initial Catalyst
              </h2>

              <div className="relative space-y-12">
                <div className="absolute bottom-10 left-8 top-10 hidden w-[4px] bg-border sm:block" />

                <div className="relative z-10 sm:pl-24">
                  <div className="absolute left-5 top-8 hidden h-6 w-6 rounded-none border-[4px] border-foreground bg-background transition-colors group-hover:bg-forest sm:flex" />
                  <StartingPointCard
                    title="Maturity Assessment"
                    subtitle="3-4 weeks"
                    text="Best if you need a clear baseline before making any decisions. We interview stakeholders and deliver a scored assessment."
                  />
                </div>
                <div className="relative z-10 sm:pl-24">
                  <div className="absolute left-5 top-8 hidden h-6 w-6 rounded-none border-[4px] border-foreground bg-background sm:flex" />
                  <StartingPointCard
                    title="Strategy Workshop"
                    subtitle="3 weeks"
                    text="Best if you have a specific initiative in mind and need alignment. Facilitated workshop and synthesis."
                  />
                </div>
                <div className="relative z-10 sm:pl-24">
                  <div className="absolute left-5 top-8 hidden h-6 w-6 rounded-none border-[4px] border-foreground bg-background sm:flex" />
                  <StartingPointCard
                    title="Full Roadmap Engagement"
                    subtitle="6-10 weeks"
                    text="Best if you need a comprehensive strategy. Target architecture, prioritized initiatives, and detailed roadmap."
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sledgehammer CTA Section - Absolute Margins & Forest emphasis */}
      <section className="relative overflow-hidden border-t-[16px] border-foreground bg-background py-20 md:py-32 lg:py-48">
        {/* Intense background element */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--forest)/0.1),transparent_50%)]" />

        <div className="container relative z-10 mx-auto max-w-6xl px-6">
          <div className="group relative flex flex-col items-center justify-center gap-10 overflow-hidden border-[4px] border-foreground bg-foreground p-8 text-center text-background shadow-[15px_15px_0_0_hsl(var(--forest))] sm:border-[8px] sm:p-16 md:p-24 lg:gap-16 lg:shadow-[30px_30px_0_0_hsl(var(--forest))]">
            {/* Watermark */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none text-[5rem] font-black text-background/[0.03] transition-all duration-1000 group-hover:scale-110 group-hover:text-forest/10 sm:text-[8rem] md:text-[25rem]">
              EXECUTE
            </div>

            <div className="relative z-10 max-w-3xl">
              <h2 className="mb-10 text-[3rem] font-black uppercase leading-[0.85] tracking-tighter sm:text-[4rem] md:text-[6.5rem]">
                Start with
                <br />
                <span className="mt-6 block border-t-8 border-forest pt-6 text-forest shadow-[0_8px_0_hsl(var(--forest))]">
                  Clarity.
                </span>
              </h2>
              <p className="mx-auto max-w-2xl border-l-[4px] border-forest bg-background/5 p-6 text-xl font-bold leading-relaxed text-background/80 backdrop-blur-sm md:text-2xl">
                You don&apos;t need another Azure service. You need a plan.
                Let&apos;s build a roadmap that turns your Microsoft investments
                into coordinated action.
              </p>
            </div>

            <div className="relative z-10 w-full sm:w-auto">
              <Link href="/contact?service=roadmap" passHref>
                <Button
                  size="lg"
                  className="group/btn flex w-full items-center justify-center gap-2 overflow-hidden whitespace-normal rounded-none border-[4px] border-background bg-background px-6 py-6 text-center text-sm font-black uppercase tracking-widest text-foreground shadow-[8px_8px_0_0_hsl(var(--forest)/0.5)] transition-all hover:translate-x-3 hover:translate-y-3 hover:border-forest hover:bg-forest hover:text-forest-foreground hover:shadow-none sm:gap-6 sm:whitespace-nowrap sm:text-base sm:tracking-[0.2em] md:w-auto md:px-16 md:py-10 md:text-2xl md:shadow-[15px_15px_0_0_hsl(var(--forest)/0.5)]"
                >
                  <span>Schedule a Roadmap Conversation</span>
                  <ChevronRight className="h-6 w-6 shrink-0 transition-transform group-hover/btn:translate-x-3 md:h-8 md:w-8" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

// Unified SubServiceCard heavily rooted in Forest/Foreground theme
function SubServiceCard({
  href,
  title,
  description,
  timeline,
  itemNum,
  featured,
}) {
  return (
    <motion.div variants={fadeIn} className="h-full bg-card">
      <Link
        href={href}
        className={`duration-[800ms] group relative flex h-full min-h-[450px] flex-col overflow-hidden bg-card p-6 transition-all sm:p-8 lg:p-14 ${featured ? "bg-forest/5" : ""}`}
      >
        {/* Dynamic theme accent background */}
        <div className="duration-[1s] absolute -right-10 -top-10 h-40 w-40 rounded-full bg-forest/10 blur-xl transition-all group-hover:scale-[3] group-hover:bg-forest/20" />

        <div className="relative z-10 mb-12 flex items-start justify-between sm:mb-20">
          <Layers
            className="h-12 w-12 text-forest transition-transform duration-500 group-hover:scale-110 sm:h-16 sm:w-16"
            strokeWidth={1}
          />
          <span className="text-[4rem] font-black leading-none tracking-tighter text-foreground/5 transition-colors duration-500 group-hover:text-forest/20 sm:text-[6rem]">
            {itemNum}
          </span>
        </div>

        <div className="relative z-10 flex flex-grow flex-col">
          <h3 className="mb-8 text-[2rem] font-black uppercase leading-[0.9] tracking-tight text-foreground transition-colors duration-500 group-hover:text-forest">
            {title}
          </h3>
          <p className="mb-10 flex-grow text-lg font-bold leading-relaxed text-foreground/80">
            {description}
          </p>

          <div className="mt-auto flex flex-col gap-6 border-t-[4px] border-border pt-8 transition-colors duration-500 group-hover:border-forest/50">
            <span className="inline-block w-fit border border-border bg-muted px-4 py-2 text-xs font-black uppercase tracking-[0.3em] text-foreground/70">
              Duration: {timeline}
            </span>
            <div className="mt-4 flex items-center justify-between text-[13px] font-black uppercase tracking-widest text-forest transition-colors">
              Explore Vehicle
              <div className="flex items-center justify-center bg-foreground p-3 text-background transition-all group-hover:bg-forest group-hover:text-forest-foreground group-hover:shadow-[5px_5px_0_0_foreground]">
                <ChevronRight
                  size={20}
                  className="transition-transform group-hover:translate-x-1.5"
                />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

function ApproachPanel({ step, title, desc }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
      className="group/panel relative flex min-h-[400px] flex-1 flex-col overflow-hidden bg-card lg:flex-row"
    >
      {/* Absolute hover backdrop that prevents parent container bg-foreground bleed */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-forest/5 opacity-0 transition-opacity duration-500 group-hover/panel:opacity-100" />

      <div className="relative z-20 flex items-center justify-between border-b border-border/60 bg-muted/40 p-8 text-foreground transition-all duration-500 group-hover/panel:border-forest group-hover/panel:bg-forest lg:min-w-[100px] lg:flex-col lg:border-b-0 lg:border-r">
        <span className="text-4xl font-black text-foreground/30 transition-colors group-hover/panel:text-background">
          {step}
        </span>
        <div className="mt-auto whitespace-nowrap text-xs font-black uppercase tracking-[0.4em] text-foreground/40 [writing-mode:horizontal-tb] group-hover/panel:text-background lg:rotate-180 lg:[writing-mode:vertical-rl]">
          Protocol
        </div>
      </div>

      <div className="relative z-20 flex flex-1 flex-col p-12 transition-transform duration-500 ease-out group-hover/panel:-translate-y-3 lg:p-14">
        <h4 className="mb-8 text-[1.75rem] font-black uppercase leading-[0.9] tracking-tight text-foreground transition-colors group-hover/panel:text-forest">
          {title}
        </h4>
        <p className="border-l-4 border-transparent pl-6 text-lg font-bold leading-relaxed text-foreground transition-colors group-hover/panel:border-forest">
          {desc}
        </p>
      </div>

      {/* Massive watermark */}
      <div className="pointer-events-none absolute -bottom-10 -right-4 z-10 select-none text-[12rem] font-black leading-none text-foreground/[0.03] transition-all duration-700 group-hover/panel:scale-110 group-hover/panel:text-forest/[0.05]">
        {step}
      </div>
    </motion.div>
  );
}

function ScenarioItem({ num, title, text }) {
  return (
    <div className="group relative flex flex-col gap-6 overflow-hidden bg-card p-6 text-card-foreground transition-colors hover:bg-mint-light sm:flex-row sm:gap-8 lg:p-10">
      <div className="absolute right-4 top-1/2 z-0 -translate-y-1/2 text-[5rem] font-black leading-none text-foreground/[0.03] transition-colors duration-700 group-hover:scale-110 group-hover:text-forest/[0.08] sm:right-10 sm:text-[8rem]">
        {num}
      </div>
      <div className="relative z-10 mt-1 flex h-12 w-12 shrink-0 items-center justify-center bg-foreground font-black text-background shadow-[4px_4px_0_0_hsl(var(--forest))] transition-all group-hover:bg-forest group-hover:shadow-[4px_4px_0_0_foreground] sm:h-16 sm:w-16">
        <ShieldCheck size={32} />
      </div>
      <div className="relative z-10 flex-1">
        <h4 className="mb-4 text-2xl font-black uppercase tracking-tight">
          {title}
        </h4>
        <p className="border-l-[3px] border-foreground/20 pl-5 text-lg font-bold leading-relaxed text-foreground/80 transition-colors group-hover:border-forest/50">
          {text}
        </p>
      </div>
    </div>
  );
}

function StartingPointCard({ title, subtitle, text }) {
  return (
    <div className="group relative overflow-hidden border-[4px] border-border bg-background p-6 shadow-sm transition-colors hover:shadow-[10px_10px_0_0_hsl(var(--forest)/0.2)] group-hover:border-forest md:p-10">
      <div className="absolute right-0 top-0 border-b-[4px] border-l-[4px] border-foreground bg-foreground px-4 py-2 text-[11px] font-black uppercase tracking-widest text-background">
        {subtitle}
      </div>
      <h4 className="mb-6 pr-24 text-2xl font-black uppercase tracking-tight">
        {title}
      </h4>
      <p className="border-l-[3px] border-forest/30 bg-muted/20 p-4 pl-5 text-lg font-bold leading-relaxed text-foreground/80">
        {text}
      </p>
    </div>
  );
}
