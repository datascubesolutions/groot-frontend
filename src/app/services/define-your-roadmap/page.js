"use client";

import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { motion, useScroll, useTransform } from "framer-motion";
import { Activity, CheckCircle2, ChevronRight, LayoutTemplate, Layers, Route, ShieldCheck, Target } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function DefineYourRoadmap() {
  const targetRef = useRef(null);
  
  return (
    <main className="pt-24 min-h-screen bg-background relative overflow-x-hidden selection:bg-forest/30">
      <div className="container mx-auto px-6 max-w-7xl pt-4 relative z-10 mb-10">
        <Breadcrumb
          items={[
            { label: "Services", href: "/services" },
            { label: "Define Your Roadmap", href: "/services/define-your-roadmap" },
          ]}
        />
      </div>

      {/* Extreme Hero Section - Unified Theme & Extended Margins */}
      <section className="relative pb-32 lg:pb-48 pt-10">
        <div className="absolute top-0 right-0 w-[55vw] h-[120%] bg-muted/40 backdrop-blur-3xl -z-10 hidden lg:block" style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 15% 100%)" }} />
        
        <div className="container mx-auto px-6 max-w-7xl relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-24 items-center">
            
            {/* Left Content */}
            <motion.div
              initial="hidden" animate="visible" variants={staggerContainer}
              className="lg:col-span-7 flex flex-col md:flex-row gap-10 items-start relative z-20"
            >
              {/* Vertical Badge */}
              <motion.div variants={fadeIn} className="hidden md:flex flex-col items-center pl-2 pt-4">
                <div className="w-px h-40 bg-gradient-to-b from-transparent to-forest/80 mb-8"></div>
                <div className="[writing-mode:vertical-rl] text-sm font-black tracking-[0.4em] uppercase text-forest rotate-180 flex items-center justify-center gap-6 whitespace-nowrap">
                  Strategic Clarity Check
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-mint/80 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-forest"></span>
                  </span>
                </div>
              </motion.div>

              <div className="max-w-[850px]">
                <motion.h1 
                  variants={fadeIn} 
                  className="text-[3rem] sm:text-[4rem] md:text-[6rem] lg:text-[7.5rem] font-black mb-12 tracking-tighter leading-[0.8] uppercase text-foreground drop-shadow-[5px_5px_0_hsl(var(--forest)/0.1)]"
                >
                  <span className="inline-block isolate mix-blend-normal text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/40 stroke-text">Define</span> <br />
                  <span className="text-mint">Your</span> <br />
                  Data &amp; AI<br/>
                  Roadmap
                </motion.h1>

                <motion.div variants={fadeIn} className="bg-background/95 backdrop-blur-2xl p-6 md:p-14 border-[4px] border-foreground shadow-[10px_10px_0_0_hsl(var(--forest))] md:shadow-[20px_20px_0_0_hsl(var(--forest))] relative -ml-4 md:-ml-8 z-30">
                   <div className="absolute top-0 right-0 max-w-[80%] text-right sm:max-w-none px-3 py-2 bg-foreground text-background text-[8px] sm:text-[10px] font-black uppercase tracking-widest sm:tracking-[0.3em]">Strategic Clarity Before First Line of Code</div>
                   <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-12 h-2 bg-forest z-40 hidden md:block" />
                   
                   <p className="text-xl md:text-3xl font-black text-foreground leading-snug mb-8 uppercase tracking-tight">
                     Before you invest in Microsoft Fabric, Power BI, or Copilot — understand where you are, where you need to go, and what it <span className="text-background bg-foreground px-2 py-1 relative shadow-[-5px_5px_0_hsl(var(--forest))]">actually takes</span> to get there.
                   </p>
                   
                   <div className="flex flex-col sm:flex-row gap-6">
                     <Link href="/contact?service=roadmap" passHref className="w-full sm:w-auto">
                       <Button variant="hero" size="lg" className="w-full px-4 sm:px-10 h-20 bg-foreground text-background hover:bg-forest hover:text-forest-foreground transition-all duration-500 rounded-none border-[3px] border-foreground shadow-[10px_10px_0px_0px_hsl(var(--forest)/0.4)] hover:shadow-none hover:translate-x-[10px] hover:translate-y-[10px] font-black uppercase tracking-widest sm:tracking-[0.2em] text-xs sm:text-sm md:text-base group flex justify-between items-center whitespace-normal text-left sm:whitespace-nowrap sm:text-center">
                         <span>Start With an Assessment</span>
                         <ChevronRight className="ml-4 w-5 h-5 shrink-0 group-hover:translate-x-2 transition-transform" />
                       </Button>
                     </Link>
                     <Link href="/contact" passHref className="w-full sm:w-auto">
                       <Button variant="outline" size="lg" className="w-full px-4 sm:px-10 h-20 bg-transparent text-foreground hover:bg-muted transition-all duration-500 rounded-none border-[3px] border-foreground shadow-[10px_10px_0px_0px_hsl(var(--foreground)/0.1)] hover:shadow-none hover:translate-x-[10px] hover:translate-y-[10px] font-black uppercase tracking-widest sm:tracking-[0.2em] text-xs sm:text-sm md:text-base flex items-center justify-center gap-3 whitespace-normal text-center sm:whitespace-nowrap">
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
              className="lg:col-span-5 relative mt-16 lg:mt-0 h-[450px] lg:h-[700px] border-[6px] border-foreground overflow-hidden bg-muted/20 group"
            >
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808020_1px,transparent_1px),linear-gradient(to_bottom,#80808020_1px,transparent_1px)] bg-[size:40px_40px] mix-blend-multiply" />
              
              {/* Massive Structural Elements */}
              <div className="absolute top-0 right-10 bottom-0 w-24 bg-foreground/5 group-hover:bg-forest/10 transition-colors duration-[2s]" />
              <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 h-px bg-foreground/20" />
              <div className="absolute top-[30%] left-0 right-0 h-px border-t border-dashed border-foreground/30" />
              
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <Target size={120} className="w-[80px] h-[80px] md:w-[120px] md:h-[120px] text-foreground/5 group-hover:scale-110 group-hover:text-forest/10 transition-all duration-1000 mb-8" strokeWidth={1} />
                <div className="text-[5rem] sm:text-[6rem] md:text-[8rem] font-black text-foreground/[0.03] leading-none uppercase tracking-tighter">DATA</div>
                <div className="text-[4rem] sm:text-[5rem] md:text-[6rem] font-black text-foreground/[0.03] leading-none uppercase tracking-tighter -mt-6">CORP</div>
              </div>
              
              {/* Overlay elements focused on Theme Color (Forest/Foreground) */}
              <div className="absolute bottom-10 right-10 p-5 bg-background text-foreground border-[4px] border-foreground shadow-[10px_10px_0_0_hsl(var(--forest))] flex flex-col gap-3">
                 <div className="flex items-center gap-3 mb-2 pb-3 border-b-2 border-border">
                    <div className="w-4 h-4 bg-forest shadow-[0_0_15px_hsl(var(--forest))] animate-pulse border-2 border-foreground" />
                    <span className="font-black uppercase tracking-widest text-xs text-forest">System Ready</span>
                 </div>
                 <div className="text-xs font-black uppercase tracking-[0.2em] text-foreground/80">Signal: Verified</div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Asymmetric Problem Section - Deep Spacing & Focused Forest Theme */}
      <section className="pt-24 pb-48 bg-background relative z-30" ref={targetRef}>
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 items-start">
            
            {/* Sticky Sidebar */}
            <div className="lg:w-[40%] bg-card p-6 md:p-10 lg:p-14 border-[4px] border-foreground border-l-[12px] border-l-forest shadow-[15px_15px_0_0_hsl(var(--forest)/0.2)] md:shadow-[30px_30px_0_0_hsl(var(--forest)/0.2)] md:sticky top-32 z-40 -mt-8 sm:-mt-16 lg:-mt-32">
              <h2 className="text-sm font-black uppercase tracking-[0.4em] text-forest mb-8 flex items-center gap-4">
                <span className="w-12 h-1 bg-forest"></span>
                The Friction
              </h2>
              <h3 className="text-[2.5rem] sm:text-[3rem] lg:text-[5rem] font-black mb-8 tracking-tighter leading-[0.85] uppercase">
                Why<br/>Roadmaps<br/>Matter.
              </h3>
              <p className="text-xl text-foreground font-bold leading-relaxed mb-8 bg-muted/50 p-6 border-l-4 border-foreground">
                Every stalled data initiative shares a common origin: <span className="text-forest">the team jumped straight to tools.</span>
              </p>
              <div className="space-y-6 text-base text-foreground/80 font-semibold leading-relaxed">
                <p>Someone provisioned a Microsoft Fabric capacity. Someone else started a Power BI pilot. IT set up an Azure Data Lake. Six months later, everyone's frustrated.</p>
                <p className="border-t-2 border-border/60 pt-6">
                  The problem isn't the technology. The problem is nobody stopped to ask the fundamental questions: What does our data landscape actually look like? Where are the gaps between what we have and what we need?
                </p>
              </div>
            </div>

            {/* Scrollable Overlapping Problem Cards - No playful colors, only strict theme */}
            <div className="lg:w-[60%] flex flex-col gap-10 lg:gap-16 pt-10">
              
              {/* Problem 01 */}
              <motion.div
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn}
                className="bg-card border-x-4 border-y border-foreground p-6 md:p-10 lg:p-16 shadow-[10px_10px_0_0_hsl(var(--forest)/0.1)] lg:shadow-[20px_20px_0_0_hsl(var(--forest)/0.1)] relative group isolate overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-forest/5 rounded-bl-full -z-10 transition-transform group-hover:scale-150 duration-700" />
                <div className="absolute -bottom-10 -right-6 text-[6rem] md:text-[10rem] font-black text-foreground/5 leading-none select-none pointer-events-none group-hover:scale-110 transition-transform duration-700">01</div>
                
                <div className="flex items-center gap-6 mb-10">
                  <div className="w-16 h-16 bg-forest text-forest-foreground flex items-center justify-center border-4 border-foreground shadow-[4px_4px_0_0_foreground]">
                    <Target size={32} />
                  </div>
                  <p className="text-sm font-black uppercase tracking-[0.3em] text-forest bg-forest/10 px-4 py-2 border border-forest/20">Expectation Gap</p>
                </div>
                
                <h4 className="text-3xl lg:text-4xl font-black mb-8 uppercase tracking-tight leading-[0.9]">Leadership Frustration</h4>
                <p className="text-lg text-foreground/90 font-bold leading-relaxed relative z-10 border-l-2 border-border pl-6">
                  The CFO asks why monthly close still takes 10 days. The CTO wonders why the data team can't deliver what the business needs. Marketing built their own analytics stack because they don't trust central IT.
                </p>
              </motion.div>

              {/* Problem 02 */}
              <motion.div
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn}
                className="bg-foreground text-background p-6 md:p-10 lg:p-16 shadow-[15px_15px_0_0_hsl(var(--forest)/0.3)] lg:shadow-[30px_30px_0_0_hsl(var(--forest)/0.3)] relative group self-end md:w-[90%] isolate overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-forest/10 rounded-bl-full -z-10 transition-transform group-hover:scale-150 duration-700" />
                <div className="absolute -bottom-10 -left-6 text-[6rem] md:text-[10rem] font-black text-background/10 leading-none select-none pointer-events-none group-hover:scale-110 transition-transform duration-700">02</div>
                
                <div className="flex items-center gap-6 mb-10 relative z-10">
                  <div className="w-16 h-16 bg-background text-foreground flex items-center justify-center shadow-[4px_4px_0_0_hsl(var(--forest))] rotate-3">
                    <LayoutTemplate size={32} />
                  </div>
                  <p className="text-sm font-black uppercase tracking-[0.3em] text-background bg-background/20 px-4 py-2 border border-background/20">Fragmentation</p>
                </div>
                
                <h4 className="text-3xl lg:text-4xl font-black mb-8 uppercase tracking-tight leading-[0.9] text-background">Scattered Investments</h4>
                <p className="text-lg text-background/80 font-bold leading-relaxed relative z-10 border-l-2 border-forest pl-6">
                  A roadmap isn't a Gantt chart. It's the strategic foundation that turns scattered Azure investments into coordinated progress.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Blueprint Services Section - Extended Padding & Strict Theming */}
      <section className="py-16 md:py-24 lg:py-32 bg-muted/30 relative border-t-[8px] border-b-2 border-foreground">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
        
        <div className="container mx-auto px-6 max-w-[1400px] relative z-10">
          <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-12 border-b-[6px] border-forest pb-10">
            <div className="max-w-5xl">
              <h2 className="text-sm font-black uppercase tracking-[0.5em] text-forest mb-8 bg-foreground text-background inline-block px-5 py-3 shadow-[5px_5px_0_hsl(var(--forest))]">
                Three ways to gain clarity
              </h2>
              <h3 className="text-[3rem] sm:text-[4rem] md:text-[6rem] lg:text-[7rem] font-black tracking-tighter text-foreground uppercase leading-[0.85]">
                What's<br />Included.
              </h3>
            </div>
            <p className="text-foreground font-black max-w-sm text-lg leading-relaxed border-l-[4px] border-forest pl-6 bg-background p-6">
              Three specific assessments to document your current state and design your target architecture.
            </p>
          </div>

          <div className="border-[4px] border-foreground bg-foreground gap-[4px] grid grid-cols-1 md:grid-cols-3 p-[4px] shadow-[25px_25px_0_0_hsl(var(--forest)/0.25)]">
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
      <section className="py-40 bg-background relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="border-b-[10px] border-foreground pb-12 lg:pb-16 mb-16 lg:mb-24 flex flex-col md:flex-row justify-between md:items-end gap-8 lg:gap-12">
            <h3 className="text-[3rem] sm:text-[4rem] lg:text-[7.5rem] font-black tracking-tighter text-foreground uppercase leading-none mb-0">
              Methodology
            </h3>
            <p className="text-background bg-foreground font-black max-w-sm text-sm uppercase tracking-[0.2em] p-6 shadow-[10px_10px_0_hsl(var(--forest))]">
              How we build roadmaps that survive leadership changes.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-0 border-[4px] border-foreground bg-foreground p-[3px]">
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
      <section className="py-16 md:py-24 lg:py-32 bg-muted/40 relative border-y-[6px] border-foreground">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 lg:gap-10 lg:gap-16 items-start">
            
            {/* Scenarios */}
            <div className="lg:col-span-5">
              <h2 className="text-5xl md:text-[4rem] font-black mb-16 tracking-tighter uppercase leading-[0.9]">Is this<br/>right for you?</h2>
              <div className="flex flex-col gap-[4px] bg-foreground border-[4px] border-foreground p-[4px] shadow-[20px_20px_0_0_hsl(var(--forest)/0.2)]">
                <ScenarioItem num="X" title="The New Data Leader" text="You inherited a mix of systems, Azure resources, and half-finished Power BI projects. You need a path forward." />
                <ScenarioItem num="Y" title="The PE Operating Partner" text="Your firm just acquired a platform company. You need to assess data capabilities quickly and build an execution plan." />
                <ScenarioItem num="Z" title="Post-Acquisition Integration" text="Overlapping ERPs, conflicting data definitions, and no unified reporting. The integration plan needs a data strategy." />
              </div>
            </div>

            {/* Starting Points */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 bg-card border-[6px] border-foreground p-6 md:p-12 lg:p-20 relative shadow-[15px_15px_0_0_hsl(var(--forest)/0.5)] lg:shadow-[25px_25px_0_0_hsl(var(--forest)/0.5)] lg:ml-8 lg:mt-32"
            >
              <div className="absolute top-0 right-0 px-4 py-2 sm:px-6 sm:py-3 bg-foreground text-background font-black uppercase tracking-[0.4em] text-[10px] sm:text-sm">Action Plan</div>
              <h2 className="text-[2rem] sm:text-[3rem] font-black mb-10 sm:mb-16 tracking-tight uppercase border-b-4 border-foreground pb-8">Initial Catalyst</h2>
              
              <div className="space-y-12 relative">
                <div className="absolute left-8 top-10 bottom-10 w-[4px] bg-border hidden sm:block" />

                <div className="relative z-10 sm:pl-24">
                  <div className="hidden sm:flex absolute left-5 top-8 w-6 h-6 rounded-none border-[4px] border-foreground bg-background group-hover:bg-forest transition-colors" />
                  <StartingPointCard title="Maturity Assessment" subtitle="3-4 weeks" text="Best if you need a clear baseline before making any decisions. We interview stakeholders and deliver a scored assessment." />
                </div>
                <div className="relative z-10 sm:pl-24">
                  <div className="hidden sm:flex absolute left-5 top-8 w-6 h-6 rounded-none border-[4px] border-foreground bg-background" />
                  <StartingPointCard title="Strategy Workshop" subtitle="3 weeks" text="Best if you have a specific initiative in mind and need alignment. Facilitated workshop and synthesis." />
                </div>
                <div className="relative z-10 sm:pl-24">
                  <div className="hidden sm:flex absolute left-5 top-8 w-6 h-6 rounded-none border-[4px] border-foreground bg-background" />
                  <StartingPointCard title="Full Roadmap Engagement" subtitle="6-10 weeks" text="Best if you need a comprehensive strategy. Target architecture, prioritized initiatives, and detailed roadmap." />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sledgehammer CTA Section - Absolute Margins & Forest emphasis */}
      <section className="py-20 md:py-32 lg:py-48 bg-background relative overflow-hidden border-t-[16px] border-foreground">
        
        {/* Intense background element */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--forest)/0.1),transparent_50%)] pointer-events-none" />
        
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="bg-foreground text-background border-[4px] sm:border-[8px] border-foreground p-8 sm:p-16 md:p-24 shadow-[15px_15px_0_0_hsl(var(--forest))] lg:shadow-[30px_30px_0_0_hsl(var(--forest))] flex flex-col items-center justify-center text-center gap-10 lg:gap-16 relative overflow-hidden group">
            
            {/* Watermark */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[5rem] sm:text-[8rem] md:text-[25rem] font-black text-background/[0.03] select-none pointer-events-none group-hover:scale-110 group-hover:text-forest/10 transition-all duration-1000">EXECUTE</div>
            
            <div className="relative z-10 max-w-3xl">
              <h2 className="text-[3rem] sm:text-[4rem] md:text-[6.5rem] font-black mb-10 tracking-tighter uppercase leading-[0.85]">
                Start with<br/>
                <span className="text-forest shadow-[0_8px_0_hsl(var(--forest))] border-t-8 border-forest block mt-6 pt-6">Clarity.</span>
              </h2>
              <p className="text-xl md:text-2xl font-bold text-background/80 leading-relaxed max-w-2xl mx-auto bg-background/5 p-6 border-l-[4px] border-forest backdrop-blur-sm">
                You don't need another Azure service. You need a plan. Let's build a roadmap that turns your Microsoft investments into coordinated action.
              </p>
            </div>
            
            <div className="relative z-10 w-full sm:w-auto">
              <Link href="/contact?service=roadmap" passHref>
                <Button size="lg" className="w-full md:w-auto overflow-hidden bg-background text-foreground hover:bg-forest hover:text-forest-foreground text-sm sm:text-base md:text-2xl px-6 py-6 md:px-16 md:py-10 rounded-none font-black uppercase tracking-widest sm:tracking-[0.2em] border-[4px] border-background hover:border-forest transition-all shadow-[8px_8px_0_0_hsl(var(--forest)/0.5)] md:shadow-[15px_15px_0_0_hsl(var(--forest)/0.5)] hover:shadow-none hover:translate-x-3 hover:translate-y-3 flex items-center justify-center gap-2 sm:gap-6 group/btn whitespace-normal text-center sm:whitespace-nowrap">
                  <span>Schedule a Roadmap Conversation</span>
                  <ChevronRight className="w-6 h-6 md:w-8 md:h-8 shrink-0 group-hover/btn:translate-x-3 transition-transform" />
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
function SubServiceCard({ href, title, description, timeline, itemNum, featured }) {
  return (
    <motion.div variants={fadeIn} className="h-full bg-card">
      <Link href={href} className={`group flex flex-col h-full bg-card p-6 sm:p-8 lg:p-14 transition-all duration-[800ms] relative overflow-hidden min-h-[450px] ${featured ? 'bg-forest/5' : ''}`}>
        
        {/* Dynamic theme accent background */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-forest/10 rounded-full blur-xl group-hover:scale-[3] group-hover:bg-forest/20 transition-all duration-[1s]" />

        <div className="relative z-10 flex items-start justify-between mb-12 sm:mb-20">
          <Layers className="w-12 h-12 sm:w-16 sm:h-16 text-forest group-hover:scale-110 transition-transform duration-500" strokeWidth={1} />
          <span className="text-[4rem] sm:text-[6rem] font-black text-foreground/5 leading-none tracking-tighter transition-colors duration-500 group-hover:text-forest/20">{itemNum}</span>
        </div>

        <div className="relative z-10 flex-grow flex flex-col">
          <h3 className="text-[2rem] font-black mb-8 uppercase tracking-tight leading-[0.9] text-foreground group-hover:text-forest transition-colors duration-500">
            {title}
          </h3>
          <p className="text-lg text-foreground/80 font-bold leading-relaxed mb-10 flex-grow">
            {description}
          </p>

          <div className="mt-auto flex flex-col gap-6 border-t-[4px] border-border group-hover:border-forest/50 transition-colors duration-500 pt-8">
            <span className="text-xs font-black uppercase tracking-[0.3em] text-foreground/70 bg-muted px-4 py-2 border border-border inline-block w-fit">
              Duration: {timeline}
            </span>
            <div className="flex items-center justify-between font-black uppercase text-[13px] tracking-widest text-forest transition-colors mt-4">
              Explore Vehicle
              <div className="bg-foreground flex items-center justify-center p-3 text-background group-hover:bg-forest group-hover:text-forest-foreground group-hover:shadow-[5px_5px_0_0_foreground] transition-all">
                <ChevronRight size={20} className="group-hover:translate-x-1.5 transition-transform" />
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
      initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
      className="flex-1 bg-card relative overflow-hidden group/panel flex flex-col lg:flex-row min-h-[400px]"
    >
      {/* Absolute hover backdrop that prevents parent container bg-foreground bleed */}
      <div className="absolute inset-0 bg-forest/5 opacity-0 group-hover/panel:opacity-100 transition-opacity duration-500 z-0 pointer-events-none" />
      
      <div className="bg-muted/40 p-8 flex lg:flex-col items-center justify-between border-b lg:border-b-0 lg:border-r border-border/60 group-hover/panel:bg-forest group-hover/panel:border-forest text-foreground transition-all duration-500 lg:min-w-[100px] relative z-20">
        <span className="text-4xl font-black text-foreground/30 group-hover/panel:text-background transition-colors">{step}</span>
        <div className="[writing-mode:horizontal-tb] lg:[writing-mode:vertical-rl] text-xs font-black tracking-[0.4em] uppercase text-foreground/40 group-hover/panel:text-background lg:rotate-180 whitespace-nowrap mt-auto">
          Protocol
        </div>
      </div>
      
      <div className="p-12 lg:p-14 flex-1 flex flex-col relative z-20 group-hover/panel:-translate-y-3 transition-transform duration-500 ease-out">
        <h4 className="text-[1.75rem] font-black tracking-tight uppercase leading-[0.9] mb-8 text-foreground group-hover/panel:text-forest transition-colors">{title}</h4>
        <p className="text-lg text-foreground font-bold leading-relaxed border-l-4 border-transparent group-hover/panel:border-forest pl-6 transition-colors">{desc}</p>
      </div>
      
      {/* Massive watermark */}
      <div className="absolute -bottom-10 -right-4 text-[12rem] font-black text-foreground/[0.03] leading-none select-none pointer-events-none group-hover/panel:scale-110 group-hover/panel:text-forest/[0.05] transition-all duration-700 z-10">{step}</div>
    </motion.div>
  );
}

function ScenarioItem({ num, title, text }) {
  return (
    <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 p-6 lg:p-10 bg-card relative overflow-hidden group hover:bg-forest/5 transition-colors">
      <div className="absolute top-1/2 -translate-y-1/2 right-4 sm:right-10 text-foreground/[0.03] text-[5rem] sm:text-[8rem] font-black leading-none z-0 group-hover:text-forest/[0.08] transition-colors group-hover:scale-110 duration-700">{num}</div>
      <div className="mt-1 shrink-0 relative z-10 w-12 h-12 sm:w-16 sm:h-16 bg-foreground text-background flex items-center justify-center font-black shadow-[4px_4px_0_0_hsl(var(--forest))] group-hover:bg-forest group-hover:shadow-[4px_4px_0_0_foreground] transition-all">
        <ShieldCheck size={32} />
      </div>
      <div className="relative z-10 flex-1">
        <h4 className="text-2xl font-black mb-4 uppercase tracking-tight">{title}</h4>
        <p className="text-foreground/80 font-bold leading-relaxed text-lg border-l-[3px] border-foreground/20 group-hover:border-forest/50 pl-5 transition-colors">{text}</p>
      </div>
    </div>
  );
}

function StartingPointCard({ title, subtitle, text }) {
  return (
    <div className="p-6 md:p-10 bg-background border-[4px] border-border group-hover:border-forest transition-colors shadow-sm hover:shadow-[10px_10px_0_0_hsl(var(--forest)/0.2)] relative group overflow-hidden">
      <div className="absolute top-0 right-0 bg-foreground text-background px-4 py-2 border-b-[4px] border-l-[4px] border-foreground text-[11px] font-black uppercase tracking-widest">{subtitle}</div>
      <h4 className="text-2xl font-black mb-6 uppercase tracking-tight pr-24">{title}</h4>
      <p className="text-foreground/80 font-bold leading-relaxed text-lg border-l-[3px] border-forest/30 pl-5 bg-muted/20 p-4">{text}</p>
    </div>
  );
}
