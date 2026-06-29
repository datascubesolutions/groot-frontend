// @ts-nocheck
"use client";

import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import {
  ServerCrash,
  Database,
  CloudCog,
  ShieldCheck,
  HardDrive,
  ChevronRight,
  Activity,
  Zap,
  Lock,
  Boxes,
  LineChart,
  ShieldAlert,
  FolderOpen
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

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

export default function FoundationBuild() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background pt-20 selection:bg-emerald-500/30">
      <div className="container mx-auto max-w-7xl px-6 pt-4 relative z-20">
        <Breadcrumb
          items={[
            { label: "Services", href: "/services/define-your-roadmap/maturity-assessment" },
            { label: "Build Your Foundation", href: "/services/build-your-foundation" },
            { label: "Foundation Build", href: "/services/build-your-foundation/foundation-build" },
          ]}
        />
      </div>

      {/* Hero Section */}
      <section className="relative pt-8 lg:pt-16 pb-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />
        
        <div className="container relative z-10 mx-auto px-6 max-w-[1400px]">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="border-[3px] border-foreground bg-card shadow-[20px_20px_0px_0px_hsl(var(--emerald-600)/0.2)]"
          >
            {/* Top Header Row */}
            <div className="border-b-[3px] border-foreground grid grid-cols-1 md:grid-cols-3 bg-muted/30">
              <div className="p-4 md:p-6 border-b-[3px] md:border-b-0 md:border-r-[3px] border-foreground flex items-center bg-card relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,hsl(var(--emerald-600)/0.1),transparent_70%)]" />
                <span className="text-xs font-black uppercase tracking-[0.3em] text-emerald-600 relative z-10">Sub-Service 2.2</span>
              </div>
              <div className="p-4 md:p-6 md:col-span-2 flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-[0.3em]">Status: Core Architecture Construction</span>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest hidden sm:inline-block">System Blueprint</span>
                  <div className="h-2.5 w-2.5 rounded-none bg-emerald-500 animate-pulse"></div>
                </div>
              </div>
            </div>
            
            {/* Main Hero Row */}
            <div className="grid grid-cols-1 lg:grid-cols-12 divide-y-[3px] lg:divide-y-0 lg:divide-x-[3px] divide-foreground">
              
              {/* Main Title Block */}
              <div className="lg:col-span-8 p-8 sm:p-12 lg:p-16 relative overflow-hidden bg-background">
                 <div className="absolute right-[-5%] bottom-[-15%] text-[10rem] sm:text-[15rem] font-black leading-none text-muted-foreground/5 select-none pointer-events-none">CORE</div>
                 
                 <motion.h1 
                   variants={staggerContainer}
                   initial="hidden" animate="visible"
                   className="text-[2.5rem] sm:text-[3.5rem] md:text-[5rem] font-black uppercase leading-[0.9] tracking-tighter text-foreground mb-8 relative z-10"
                 >
                   <motion.span variants={fadeIn} className="block text-emerald-600">Microsoft Fabric</motion.span>
                   <motion.span variants={fadeIn} className="block">Foundation Build.</motion.span>
                 </motion.h1>
                 
                 <motion.div 
                   initial={{ opacity: 0, x: -20 }}
                   animate={{ opacity: 1, x: 0 }}
                   transition={{ duration: 0.6, delay: 0.4 }}
                   className="max-w-2xl text-lg sm:text-xl font-bold leading-snug text-foreground mb-12 border-l-[4px] border-emerald-600 pl-6 relative z-10 bg-gradient-to-r from-emerald-500/5 to-transparent py-2"
                 >
                   We build the core architecture of your data platform. Workspaces, OneLake security, Purview governance, and Medallion architecture — done right the first time.
                 </motion.div>
                 
                 <Link href="/contact?service=foundation" passHref>
                    <Button
                      variant="hero"
                      size="lg"
                      className="group relative h-16 rounded-none border-[3px] border-foreground bg-foreground px-8 text-background shadow-[8px_8px_0px_0px_hsl(var(--emerald-600))] transition-all duration-300 hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none"
                    >
                      <span className="text-sm font-black uppercase tracking-[0.15em]">
                        Schedule a Foundation Assessment
                      </span>
                      <ChevronRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-2" />
                    </Button>
                  </Link>
              </div>

              {/* Visual / Data Block */}
              <div className="lg:col-span-4 flex flex-col divide-y-[3px] divide-foreground bg-muted/10">
                 <div className="relative h-[250px] sm:h-[350px] lg:flex-1 overflow-hidden bg-emerald-50/50 p-4 flex items-center justify-center">
                   <div className="absolute inset-0 z-0">
                     <Image 
                       src="/foundation_build_architecture.png" 
                       alt="Fabric Foundation Architecture" 
                       fill 
                       className="object-cover object-center opacity-90" 
                     />
                   </div>
                   
                   {/* Reticle/Data Overlay */}
                   <div className="absolute top-4 right-4 text-[10px] font-black uppercase tracking-[0.3em] text-emerald-800 bg-white/80 px-2 py-1 backdrop-blur-md border border-emerald-500/30">
                      [ SECURE_CORE ]
                   </div>
                   <div className="absolute bottom-6 left-6 h-12 w-12 border-l-[3px] border-b-[3px] border-emerald-600 shadow-[-5px_5px_15px_rgba(5,150,105,0.2)]"></div>
                   <div className="absolute top-6 right-6 h-12 w-12 border-r-[3px] border-t-[3px] border-emerald-600 shadow-[5px_-5px_15px_rgba(5,150,105,0.2)]"></div>
                 </div>
                 
                 <div className="p-8 bg-card">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground mb-6 flex items-center gap-3">
                       <Activity size={14} className="text-emerald-600"/> Foundation Health
                    </h4>
                    <div className="space-y-6">
                       <div>
                         <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest mb-2">
                           <span className="text-muted-foreground">Governance Risk</span>
                           <span className="text-rose-500 bg-rose-500/10 px-2 py-0.5">High Exposure</span>
                         </div>
                         <div className="h-2 w-full bg-border overflow-hidden rounded-none border border-foreground/10">
                            <motion.div initial={{ width: 0 }} animate={{ width: "75%" }} transition={{ duration: 1.5, delay: 0.5 }} className="h-full bg-rose-500 shadow-[0_0_10px_rgba(244,63,94,0.5)]"></motion.div>
                         </div>
                       </div>
                       
                       <div>
                         <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest mb-2 mt-6">
                           <span className="text-muted-foreground">Medallion Integrity</span>
                           <span className="text-emerald-600 bg-emerald-600/10 px-2 py-0.5">Enforced</span>
                         </div>
                         <div className="h-2 w-full bg-border overflow-hidden rounded-none border border-foreground/10">
                            <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 1, delay: 1 }} className="h-full bg-emerald-600 shadow-[0_0_10px_rgba(5,150,105,0.5)]"></motion.div>
                         </div>
                       </div>
                    </div>
                 </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Challenge Section - The Problem */}
      <section className="relative z-30 bg-muted/20 pb-32 pt-16">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        <div className="container relative z-10 mx-auto max-w-7xl px-6">
          <div className="mb-16 border-l-8 border-emerald-600 bg-card p-8 shadow-[15px_15px_0px_0px_rgba(0,0,0,0.05)] md:w-[70%]">
            <h2 className="mb-4 flex items-center gap-4 text-sm font-black uppercase tracking-[0.3em] text-emerald-600">
              <span className="h-1 w-12 bg-emerald-600"></span>
              The Problem
            </h2>
            <h3 className="text-[2.5rem] font-black uppercase leading-[0.9] tracking-tighter text-foreground md:text-[3.5rem]">
              Why platforms become swamps.
            </h3>
          </div>

          <div className="grid gap-12 lg:grid-cols-3 lg:gap-8">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn}
              className="group relative bg-card border-t-4 border-rose-500 p-8 shadow-xl transition-transform hover:-translate-y-2"
            >
              <div className="absolute right-4 top-4 select-none text-[5rem] font-black leading-none text-rose-500/10">01</div>
              <ShieldAlert className="mb-6 h-12 w-12 text-rose-500" />
              <h4 className="mb-4 text-2xl font-black uppercase leading-[1.1] tracking-tight">Security by Accident</h4>
              <p className="font-semibold text-muted-foreground">You turned on Microsoft Fabric and started building. Now you have 50 workspaces, data shared everywhere, and no clear idea who has access to PII. Without a proactive security model using OneLake data access roles and Purview, your data is exposed.</p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn}
              className="group relative bg-card border-t-4 border-amber-500 p-8 shadow-xl transition-transform hover:-translate-y-2 lg:mt-12"
            >
              <div className="absolute right-4 top-4 select-none text-[5rem] font-black leading-none text-amber-500/10">02</div>
              <FolderOpen className="mb-6 h-12 w-12 text-amber-500" />
              <h4 className="mb-4 text-2xl font-black uppercase leading-[1.1] tracking-tight">The &quot;Just Put It in the Lake&quot; Mentality</h4>
              <p className="font-semibold text-muted-foreground">Data lakes quickly become data swamps when there&apos;s no structure. Without enforcing the Medallion Architecture (Bronze, Silver, Gold), business users query raw, dirty data and get wrong answers. Trust in the platform drops to zero.</p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn}
              className="group relative bg-card border-t-4 border-indigo-500 p-8 shadow-xl transition-transform hover:-translate-y-2 lg:mt-24"
            >
              <div className="absolute right-4 top-4 select-none text-[5rem] font-black leading-none text-indigo-500/10">03</div>
              <LineChart className="mb-6 h-12 w-12 text-indigo-500" />
              <h4 className="mb-4 text-2xl font-black uppercase leading-[1.1] tracking-tight">Uncontrolled Costs</h4>
              <p className="font-semibold text-muted-foreground">Fabric capacity is powerful, but inefficient notebooks and poorly modeled data will burn through your compute credits rapidly. Without a cost management framework and optimization strategy, your Azure bill will surprise you.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What You Get - Deliverables */}
      <section className="relative border-y-[8px] border-foreground bg-background py-24">
        <div className="container mx-auto max-w-[1400px] px-6">
          <div className="mb-20 text-center">
            <span className="text-xs font-black uppercase tracking-[0.4em] text-emerald-600 block mb-4">What You Get</span>
            <h2 className="text-[3rem] font-black uppercase leading-[0.9] tracking-tighter text-foreground sm:text-[4rem]">
              Deliverables
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <DeliverableCard num="01" title="Workspace Architecture" icon={<Boxes />} text="Structured workspace design separating Dev, Test, and Prod. Tenant-level configurations optimized for your industry." />
            <DeliverableCard num="02" title="Medallion Architecture" icon={<Database />} text="Implementation of Bronze (raw), Silver (cleansed), and Gold (business) layers using Fabric Lakehouses or Warehouses." />
            <DeliverableCard num="03" title="Security & Governance Model" icon={<ShieldCheck />} text="Purview integration, data sensitivity labels, OneLake security, and role-based access control (RBAC)." />
            <DeliverableCard num="04" title="CI/CD & DevOps" icon={<CloudCog />} text="Deployment pipelines configured with Azure DevOps/GitHub. Version control for notebooks, models, and pipelines." />
            <DeliverableCard num="05" title="Cost Management Framework" icon={<LineChart />} text="Capacity planning, compute isolation strategies, and alerting so you never get a surprise bill." />
          </div>
        </div>
      </section>

      {/* How We Deliver - Process */}
      <section className="py-24 bg-card">
         <div className="container mx-auto max-w-5xl px-6">
           <div className="mb-16">
             <span className="text-xs font-black uppercase tracking-[0.4em] text-emerald-600 block mb-4">How we deliver</span>
             <h2 className="text-[3rem] font-black uppercase leading-[0.9] tracking-tighter text-foreground md:text-[4rem]">
               Our process.
             </h2>
           </div>

           <div className="space-y-6">
             <ProcessStep 
               phase="Phase 1" time="Week 1-2" title="Requirements & Design"
               desc="Define security requirements, data domains, and organizational structure to design the workspace and capacity architecture."
             />
             <ProcessStep 
               phase="Phase 2" time="Week 3-4" title="Core Infrastructure"
               desc="Provision Fabric capacities, set up workspaces, create Lakehouses/Warehouses, and establish the Medallion structure."
             />
             <ProcessStep 
               phase="Phase 3" time="Week 5-6" title="Security & Governance"
               desc="Implement Entra ID groups, OneLake security, and Microsoft Purview data cataloging and lineage."
             />
             <ProcessStep 
               phase="Phase 4" time="Week 7-8" title="DevOps & Handoff"
               desc="Configure Git integration, deployment pipelines, runbooks, and train your platform administration team."
             />
           </div>
         </div>
      </section>

      {/* Real Example / Case Study */}
      <section className="relative bg-foreground text-background py-16 lg:py-0 lg:min-h-[calc(100vh-80px)] flex items-center border-y-[6px] border-emerald-600">
        <div className="container relative mx-auto max-w-7xl px-6">
          <div className="mb-10 lg:mb-12">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-400 block mb-3 border border-emerald-400/30 bg-emerald-400/10 px-2 py-0.5 w-max">
              [ REAL EXAMPLE ]
            </span>
            <h2 className="text-[2rem] md:text-[3rem] lg:text-[3.5rem] font-black uppercase leading-[0.9] tracking-tighter max-w-4xl">
              How we built a secure data foundation for a financial services firm
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-4 flex flex-col gap-4 lg:gap-6">
              <div className="bg-background/5 border-[3px] border-background/20 p-5">
                <div className="text-[10px] font-black uppercase tracking-widest text-emerald-400 mb-1">Use Case</div>
                <div className="text-base font-bold">UC3 — Secure Data Foundation</div>
                <div className="mt-3 pt-3 border-t-[3px] border-background/10 text-[10px] font-black uppercase tracking-widest text-emerald-400 mb-1">Industry</div>
                <Link href="/industries/financial-services" className="text-base font-bold hover:text-emerald-400 transition-colors flex items-center gap-2">
                  Financial Services <ChevronRight size={16} />
                </Link>
              </div>

              <div className="bg-background/5 border-[3px] border-background/20 p-5 flex-1 flex flex-col justify-center">
                <div className="text-[10px] font-black uppercase tracking-widest text-emerald-400 mb-4">Security Posture</div>
                <div className="space-y-4">
                  <div>
                    <div className="text-3xl font-black uppercase tracking-tighter text-emerald-400 leading-none">100%</div>
                    <div className="mt-1 text-[10px] font-bold uppercase tracking-widest text-background/60">PII automatically identified and masked</div>
                  </div>
                  <div>
                    <div className="text-3xl font-black uppercase tracking-tighter text-emerald-400 leading-none">0</div>
                    <div className="mt-1 text-[10px] font-bold uppercase tracking-widest text-background/60">Manual interventions for workspace provisioning</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-8 text-base font-medium text-background/80 leading-relaxed">
              <div>
                <h3 className="text-xl font-black uppercase tracking-tight text-background mb-2">Situation</h3>
                <p className="text-sm leading-relaxed">A regional wealth management firm needed to unify data from Salesforce, portfolio management systems, and market feeds. But their CISO halted the Microsoft Fabric project because there was no documented plan for securing PII, managing workspace sprawl, or controlling compute costs. They had the license, but couldn&apos;t use it.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-black uppercase tracking-tight text-background mb-3">What We Built</h3>
                <ul className="list-disc pl-5 space-y-1.5 text-sm text-background/80 leading-relaxed">
                  <li>Tenant-level configuration disabling external sharing and enforcing private links.</li>
                  <li>Hub-and-spoke workspace architecture (Central Lakehouse + Domain-specific Workspaces).</li>
                  <li>Medallion architecture using Fabric Warehouses for the Gold layer to enforce strict SQL-based row-level and column-level security.</li>
                  <li>Microsoft Purview integration to automatically scan for SSNs, account numbers, and apply sensitivity labels that carried through to Power BI.</li>
                  <li>Azure DevOps CI/CD pipelines ensuring no developer had direct write access to Production.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-black uppercase tracking-tight text-emerald-400 mb-2">Outcome</h3>
                <p className="text-sm leading-relaxed">The CISO approved the architecture within two weeks. The data engineering team now deploys changes through automated pipelines. Business analysts securely query the Gold layer without any risk of exposing underlying PII. The foundation is set for their AI Copilot initiatives.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ & Related */}
      <section className="py-24 bg-background">
        <div className="container mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          <div className="lg:col-span-7">
            <span className="text-xs font-black uppercase tracking-[0.4em] text-emerald-600 block mb-4">FAQ</span>
            <h2 className="text-[3rem] font-black uppercase leading-[0.9] tracking-tighter text-foreground mb-10">
              Questions.
            </h2>
            
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="item-1" className="border-[3px] border-foreground bg-card px-6">
                <AccordionTrigger className="text-lg font-black uppercase tracking-tight hover:no-underline py-6">Do we need Microsoft Purview?</AccordionTrigger>
                <AccordionContent className="text-base font-semibold text-muted-foreground pb-6 leading-relaxed">
                  If you handle PII, financial data, or healthcare information, yes. Purview provides the governance, classification, and lineage required to use Fabric safely at an enterprise level. We configure this integration.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border-[3px] border-foreground bg-card px-6">
                <AccordionTrigger className="text-lg font-black uppercase tracking-tight hover:no-underline py-6">What is the Medallion Architecture?</AccordionTrigger>
                <AccordionContent className="text-base font-semibold text-muted-foreground pb-6 leading-relaxed">
                  It&apos;s a data design pattern: Bronze (raw, ingested data), Silver (cleaned, filtered, augmented data), and Gold (business-level aggregates ready for reporting). It ensures data quality and performance.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border-[3px] border-foreground bg-card px-6">
                <AccordionTrigger className="text-lg font-black uppercase tracking-tight hover:no-underline py-6">Can you fix our existing Fabric setup?</AccordionTrigger>
                <AccordionContent className="text-base font-semibold text-muted-foreground pb-6 leading-relaxed">
                  Yes. If you started building but hit a wall with security, performance, or organization, we can perform a remediation architecture project to refactor your current setup into best practices.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="lg:col-span-5">
            <span className="text-xs font-black uppercase tracking-[0.4em] text-emerald-600 block mb-4">Related Services</span>
            <h2 className="text-[2.5rem] font-black uppercase leading-[0.9] tracking-tighter text-foreground mb-10">
              Keep Building.
            </h2>
            <div className="space-y-4">
              <RelatedLink href="/services/build-your-foundation/data-modernization" title="Data Modernization" />
              <RelatedLink href="/services/build-your-foundation/data-integration" title="Data Integration" />
              <RelatedLink href="/services/decision-intelligence/semantic-modeling" title="Semantic Modeling" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-foreground py-24 text-background lg:py-32 border-t-[8px] border-emerald-600">
        <div className="container mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-8 text-[3rem] font-black uppercase leading-[0.9] tracking-tighter sm:text-[4rem] md:text-[5rem]">
            Build it right the first time.
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-xl font-bold leading-relaxed text-background/80">
            Don&apos;t turn your data lake into a swamp. Let&apos;s architect a secure, governed foundation for your AI and analytics initiatives.
          </p>
          <Link href="/contact?service=foundation" passHref>
            <Button
              variant="hero"
              size="lg"
              className="group h-16 rounded-none border-[3px] border-background bg-transparent px-10 text-background shadow-[8px_8px_0px_0px_hsl(var(--background))] transition-all hover:translate-x-[4px] hover:translate-y-[4px] hover:bg-background hover:text-foreground hover:shadow-none"
            >
              <span className="text-sm font-black uppercase tracking-[0.2em]">
                Schedule a Foundation Assessment
              </span>
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}

function DeliverableCard({ num, title, text, icon }) {
  return (
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
      className="bg-card border-[3px] border-foreground p-8 relative shadow-[6px_6px_0px_0px_hsl(var(--foreground)/0.1)] transition-transform hover:-translate-y-1 group"
    >
      <div className="text-emerald-600 mb-6 bg-emerald-600/10 w-12 h-12 flex items-center justify-center border-2 border-emerald-600/20 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
        {icon}
      </div>
      <div className="absolute right-4 top-4 text-xs font-black text-muted-foreground/30">{num}</div>
      <h4 className="text-xl font-black uppercase leading-[1.1] tracking-tight mb-3 text-foreground">{title}</h4>
      <p className="text-[15px] font-semibold text-muted-foreground leading-relaxed">{text}</p>
    </motion.div>
  );
}

function ProcessStep({ phase, time, title, desc }) {
  return (
    <div className="flex flex-col sm:flex-row gap-6 bg-background border-[3px] border-foreground p-6 md:p-8 shadow-[8px_8px_0px_0px_hsl(var(--foreground)/0.1)] relative">
       <div className="sm:w-[150px] shrink-0 border-b-2 sm:border-b-0 sm:border-r-2 border-border/50 pb-4 sm:pb-0 sm:pr-4 flex flex-col justify-center">
         <div className="text-xs font-black uppercase tracking-widest text-emerald-600 mb-1">{phase}</div>
         <div className="text-sm font-bold text-muted-foreground">{time}</div>
       </div>
       <div className="flex-1 flex flex-col justify-center">
         <h4 className="text-2xl font-black uppercase tracking-tight text-foreground mb-2">{title}</h4>
         <p className="text-[15px] font-semibold leading-relaxed text-muted-foreground">{desc}</p>
       </div>
    </div>
  );
}

function RelatedLink({ href, title }) {
  return (
    <Link href={href} className="flex items-center justify-between p-6 bg-card border-[3px] border-foreground shadow-[4px_4px_0px_0px_hsl(var(--foreground)/0.1)] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_hsl(var(--emerald-600)/0.3)] transition-all group">
       <span className="text-xl font-black uppercase tracking-tight text-foreground">{title}</span>
       <ChevronRight className="w-6 h-6 text-emerald-600 transition-transform group-hover:translate-x-2" />
    </Link>
  );
}
