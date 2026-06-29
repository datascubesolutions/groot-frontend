// @ts-nocheck
"use client";

import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import {
  AlertCircle,
  ChevronRight,
  Workflow,
  Server,
  Database,
  Activity,
  RefreshCw,
  FileSpreadsheet,
  Clock,
  HardDrive,
  Settings,
  BookOpen
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

export default function DataIntegration() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background pt-20 selection:bg-emerald-500/30">
      <div className="container mx-auto max-w-7xl px-6 pt-4 relative z-20">
        <Breadcrumb
          items={[
            { label: "Services", href: "/services/define-your-roadmap/maturity-assessment" },
            { label: "Build Your Foundation", href: "/services/build-your-foundation" },
            { label: "Data Integration", href: "/services/build-your-foundation/data-integration" },
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
                <span className="text-xs font-black uppercase tracking-[0.3em] text-emerald-600 relative z-10">Sub-Service 2.3</span>
              </div>
              <div className="p-4 md:p-6 md:col-span-2 flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-[0.3em]">Status: Pipelines Active</span>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest hidden sm:inline-block">System Integration</span>
                  <div className="h-2.5 w-2.5 rounded-none bg-emerald-500 animate-pulse"></div>
                </div>
              </div>
            </div>
            
            {/* Main Hero Row */}
            <div className="grid grid-cols-1 lg:grid-cols-12 divide-y-[3px] lg:divide-y-0 lg:divide-x-[3px] divide-foreground">
              
              {/* Main Title Block */}
              <div className="lg:col-span-8 p-8 sm:p-12 lg:p-16 relative overflow-hidden bg-background">
                 <div className="absolute right-[-5%] bottom-[-15%] text-[10rem] sm:text-[15rem] font-black leading-none text-muted-foreground/5 select-none pointer-events-none">ETL</div>
                 
                 <motion.h1 
                   variants={staggerContainer}
                   initial="hidden" animate="visible"
                   className="text-[2.5rem] sm:text-[3.5rem] md:text-[5rem] font-black uppercase leading-[0.9] tracking-tighter text-foreground mb-8 relative z-10"
                 >
                   <motion.span variants={fadeIn} className="block text-emerald-600">Data Integration</motion.span>
                   <motion.span variants={fadeIn} className="block">& Pipeline Development.</motion.span>
                 </motion.h1>
                 
                 <motion.div 
                   initial={{ opacity: 0, x: -20 }}
                   animate={{ opacity: 1, x: 0 }}
                   transition={{ duration: 0.6, delay: 0.4 }}
                   className="max-w-2xl text-lg sm:text-xl font-bold leading-snug text-foreground mb-12 border-l-[4px] border-emerald-600 pl-6 relative z-10 bg-gradient-to-r from-emerald-500/5 to-transparent py-2"
                 >
                   Connect your source systems to Microsoft Fabric. ERP, CRM, field service software, REST APIs — we build the Data Factory pipelines that keep your Lakehouse current.
                 </motion.div>
                 
                 <Link href="/contact?service=integration" passHref>
                    <Button
                      variant="hero"
                      size="lg"
                      className="group relative h-16 rounded-none border-[3px] border-foreground bg-foreground px-8 text-background shadow-[8px_8px_0px_0px_hsl(var(--emerald-600))] transition-all duration-300 hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none"
                    >
                      <span className="text-sm font-black uppercase tracking-[0.15em]">
                        Schedule an Integration Conversation
                      </span>
                      <ChevronRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-2" />
                    </Button>
                  </Link>
              </div>

              {/* Visual / Data Block */}
              <div className="lg:col-span-4 flex flex-col divide-y-[3px] divide-foreground bg-muted/10">
                 <div className="relative h-[250px] sm:h-[350px] lg:flex-1 overflow-hidden bg-black p-4">
                   <div className="absolute inset-0 z-0">
                     <Image 
                       src="/data_integration_pipeline.png" 
                       alt="Data Integration Architecture" 
                       fill 
                       className="object-cover grayscale contrast-[1.2] opacity-60" 
                     />
                     <div className="absolute inset-0 bg-emerald-600/20 mix-blend-overlay"></div>
                   </div>
                   
                   {/* Reticle/Data Overlay */}
                   <div className="absolute top-4 right-4 text-[10px] font-black uppercase tracking-[0.3em] text-emerald-400 bg-black/50 px-2 py-1 backdrop-blur-sm border border-emerald-500/30">
                      [ PIPELINE_ACTIVE ]
                   </div>
                   <div className="absolute bottom-6 left-6 h-12 w-12 border-l-[3px] border-b-[3px] border-emerald-500 shadow-[-5px_5px_15px_rgba(16,185,129,0.3)]"></div>
                   <div className="absolute top-6 right-6 h-12 w-12 border-r-[3px] border-t-[3px] border-emerald-500 shadow-[5px_-5px_15px_rgba(16,185,129,0.3)]"></div>
                 </div>
                 
                 <div className="p-8 bg-card">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground mb-6 flex items-center gap-3">
                       <Activity size={14} className="text-emerald-600"/> Data Factory Metrics
                    </h4>
                    <div className="space-y-6">
                       <div>
                         <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest mb-2">
                           <span className="text-muted-foreground">Manual Interventions</span>
                           <span className="text-rose-500 bg-rose-500/10 px-2 py-0.5">High</span>
                         </div>
                         <div className="h-2 w-full bg-border overflow-hidden rounded-none border border-foreground/10">
                            <motion.div initial={{ width: 0 }} animate={{ width: "85%" }} transition={{ duration: 1.5, delay: 0.5 }} className="h-full bg-rose-500 shadow-[0_0_10px_rgba(244,63,94,0.5)]"></motion.div>
                         </div>
                       </div>
                       
                       <div>
                         <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest mb-2 mt-6">
                           <span className="text-muted-foreground">Automated Sync</span>
                           <span className="text-emerald-600 bg-emerald-600/10 px-2 py-0.5">Target</span>
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
              Why integration is harder than it looks.
            </h3>
          </div>

          <div className="grid gap-12 lg:grid-cols-3 lg:gap-8">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn}
              className="group relative bg-card border-t-4 border-rose-500 p-8 shadow-xl transition-transform hover:-translate-y-2"
            >
              <div className="absolute right-4 top-4 select-none text-[5rem] font-black leading-none text-rose-500/10">01</div>
              <FileSpreadsheet className="mb-6 h-12 w-12 text-rose-500" />
              <h4 className="mb-4 text-2xl font-black uppercase leading-[1.1] tracking-tight">The Export-to-Excel Workflow</h4>
              <p className="font-semibold text-muted-foreground">Data exists in your ERP. But the only way to get it into Power BI is: run a report, download to Excel, clean up the headers, upload to SharePoint. Someone does this every week. It takes 4 hours. This is your &quot;integration.&quot;</p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn}
              className="group relative bg-card border-t-4 border-amber-500 p-8 shadow-xl transition-transform hover:-translate-y-2 lg:mt-12"
            >
              <div className="absolute right-4 top-4 select-none text-[5rem] font-black leading-none text-amber-500/10">02</div>
              <AlertCircle className="mb-6 h-12 w-12 text-amber-500" />
              <h4 className="mb-4 text-2xl font-black uppercase leading-[1.1] tracking-tight">The One-Time Load That Became Critical</h4>
              <p className="font-semibold text-muted-foreground">Someone did a one-time data pull for a board presentation. It worked, so it became the &quot;official&quot; process. Now critical Power BI dashboards depend on a Python script that runs on someone&apos;s laptop.</p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn}
              className="group relative bg-card border-t-4 border-indigo-500 p-8 shadow-xl transition-transform hover:-translate-y-2 lg:mt-24"
            >
              <div className="absolute right-4 top-4 select-none text-[5rem] font-black leading-none text-indigo-500/10">03</div>
              <RefreshCw className="mb-6 h-12 w-12 text-indigo-500" />
              <h4 className="mb-4 text-2xl font-black uppercase leading-[1.1] tracking-tight">Full Refresh at Scale</h4>
              <p className="font-semibold text-muted-foreground">The Data Factory pipeline does a full refresh every night — truncate and reload. It worked with 100K rows. Now you have 15M rows. The refresh takes 6 hours and blocks morning reports. You need incremental loads, but the pipeline wasn&apos;t built for CDC.</p>
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <DeliverableCard num="01" title="Integration Architecture" icon={<Workflow />} text="Documented approach for each source: connectivity method, refresh pattern, schedule, and monitoring approach." />
            <DeliverableCard num="02" title="Data Factory Pipelines" icon={<Database />} text="Production pipelines that extract, load, and transform data into your Fabric Lakehouse. Parameterized and incremental." />
            <DeliverableCard num="03" title="Monitoring & Alerting" icon={<Activity />} text="Pipeline monitoring integrated with Teams or your incident system. You know when something fails within minutes." />
            <DeliverableCard num="04" title="Documentation & Runbooks" icon={<BookOpen />} text="Technical documentation: data flows, Notebook transformation logic, schedules, and troubleshooting procedures." />
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
               phase="Phase 1" time="Week 1-2" title="Discovery"
               desc="Analyze source systems: data structures, volumes, API capabilities, refresh requirements."
             />
             <ProcessStep 
               phase="Phase 2" time="Week 2-6" title="Pipeline Development"
               desc="Build pipelines iteratively, starting with priority sources. Each integration tested and validated."
             />
             <ProcessStep 
               phase="Phase 3" time="Week 6-7" title="Testing & Optimization"
               desc="Test under production conditions: full volumes, concurrent loads, failure scenarios."
             />
             <ProcessStep 
               phase="Phase 4" time="Week 7-8" title="Deployment & Handoff"
               desc="Deploy to production, configure monitoring, train your team."
             />
           </div>
         </div>
      </section>

      {/* Real Examples / Case Studies Stacked */}
      <section className="relative bg-foreground text-background py-24 lg:py-32 border-y-[6px] border-emerald-600">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="mb-16">
            <span className="text-xs font-black uppercase tracking-[0.4em] text-emerald-400 block mb-4 border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 w-max">
              Real Examples
            </span>
            <h2 className="text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] font-black uppercase leading-[0.9] tracking-tighter max-w-4xl">
              Integrations in action.
            </h2>
          </div>

          <div className="space-y-24">
            {/* Case Study 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 border-t-[3px] border-emerald-600/30 pt-16">
              <div className="lg:col-span-4 flex flex-col gap-8">
                <div className="bg-background/5 border-[3px] border-background/20 p-6">
                  <div className="text-xs font-black uppercase tracking-widest text-emerald-400 mb-2">Use Case</div>
                  <div className="text-lg font-bold">UC1 — Credit Card Spend Normalization</div>
                  <div className="mt-4 pt-4 border-t-[3px] border-background/10 text-xs font-black uppercase tracking-widest text-emerald-400 mb-2">Industry</div>
                  <Link href="/industries/construction-fleet" className="text-lg font-bold hover:text-emerald-400 transition-colors flex items-center gap-2">
                    Construction & Fleet <ChevronRight size={16} />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-8 space-y-10 text-lg font-medium text-background/80 leading-relaxed">
                <h3 className="text-3xl font-black uppercase tracking-tight text-emerald-400">How we automated vendor spend categorization with Fabric Notebooks</h3>
                
                <div>
                  <h4 className="text-xl font-black uppercase tracking-tight text-background mb-3">Situation</h4>
                  <p>A construction company&apos;s procurement team struggled with credit card spend analysis. Vendor names appeared in inconsistent formats across transactions — &quot;Home Depot,&quot; &quot;THE HOME DEPOT #4521,&quot; &quot;HD Supply.&quot; This made it impossible to track total vendor spend, enforce preferred vendor usage, or analyze spending by category.</p>
                </div>
                
                <div>
                  <h4 className="text-xl font-black uppercase tracking-tight text-background mb-3">What We Built</h4>
                  <ul className="list-disc pl-6 space-y-2 text-background/80">
                    <li><strong>Fabric Notebook Pipeline:</strong> Python-based vendor name normalization using intelligent string matching and fuzzy logic.</li>
                    <li><strong>Categorization Engine:</strong> Automated Level 1 and Level 2 spend categorization.</li>
                    <li><strong>Power BI Semantic Model:</strong> Clean, categorized data landing in a semantic model for self-service analysis.</li>
                    <li><strong>Power App for Exceptions:</strong> Embedded Power App in Power BI allowing business users to normalize unmatched vendors.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-black uppercase tracking-tight text-background mb-3">Technical Details</h4>
                  <ul className="list-disc pl-6 space-y-2 text-background/80">
                    <li>Fabric Notebook with PySpark for scalable processing.</li>
                    <li>Fuzzy matching using Levenshtein distance with configurable threshold.</li>
                    <li>Lookup tables maintained in SharePoint for business-owned categorization.</li>
                    <li>Incremental processing of new transactions only.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-black uppercase tracking-tight text-emerald-400 mb-3">Outcome</h4>
                  <p>Unified view of vendor spend across all credit card transactions. Procurement identified $180K in spend fragmentation that could be consolidated to fewer vendors for volume discounts. Business users now self-serve categorization updates.</p>
                </div>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 border-t-[3px] border-emerald-600/30 pt-16">
              <div className="lg:col-span-4 flex flex-col gap-8">
                <div className="bg-background/5 border-[3px] border-background/20 p-6">
                  <div className="text-xs font-black uppercase tracking-widest text-emerald-400 mb-2">Use Case</div>
                  <div className="text-lg font-bold">UC2 — Inventory Management Dashboard</div>
                  <div className="mt-4 pt-4 border-t-[3px] border-background/10 text-xs font-black uppercase tracking-widest text-emerald-400 mb-2">Industry</div>
                  <Link href="/industries/construction-fleet" className="text-lg font-bold hover:text-emerald-400 transition-colors flex items-center gap-2">
                    Construction & Fleet <ChevronRight size={16} />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-8 space-y-10 text-lg font-medium text-background/80 leading-relaxed">
                <h3 className="text-3xl font-black uppercase tracking-tight text-emerald-400">How we built real-time inventory tracking across 12 job sites</h3>
                
                <div>
                  <h4 className="text-xl font-black uppercase tracking-tight text-background mb-3">Situation</h4>
                  <p>A construction firm managed material inventory across 12 active job sites using Excel spreadsheets. Project managers tracked their own inventory locally. Central operations had no visibility into what materials existed where. Result: over-ordering at some sites while others delayed projects waiting for materials.</p>
                </div>
                
                <div>
                  <h4 className="text-xl font-black uppercase tracking-tight text-background mb-3">What We Built</h4>
                  <ul className="list-disc pl-6 space-y-2 text-background/80">
                    <li><strong>Data Integration:</strong> Connected procurement system, delivery tracking, and usage logs into Fabric Lakehouse.</li>
                    <li><strong>Fabric Notebooks:</strong> Transformation pipeline creating inventory snapshots with movement history.</li>
                    <li><strong>Power BI Dashboard:</strong> Real-time stock levels, reorder alerts, vendor delivery performance.</li>
                    <li><strong>Mobile Access:</strong> Power BI mobile app for project managers to check inventory on-site.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-black uppercase tracking-tight text-emerald-400 mb-3">Outcome</h4>
                  <p>Single source of truth for inventory across all sites. Over-ordering reduced 25%. Project delays from material shortages reduced 40%. Operations now redistributes excess materials between sites proactively.</p>
                </div>
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
                <AccordionTrigger className="text-lg font-black uppercase tracking-tight hover:no-underline py-6">What source systems can you integrate?</AccordionTrigger>
                <AccordionContent className="text-base font-semibold text-muted-foreground pb-6 leading-relaxed">
                  Common: ERPs (SAP, NetSuite, QuickBooks, Sage), CRMs (Salesforce, HubSpot, Dynamics 365), field service (ServiceTitan, Jobber), fleet (Samsara), and SaaS applications. If it has an API or database connection, we can integrate it.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border-[3px] border-foreground bg-card px-6">
                <AccordionTrigger className="text-lg font-black uppercase tracking-tight hover:no-underline py-6">What about real-time streaming?</AccordionTrigger>
                <AccordionContent className="text-base font-semibold text-muted-foreground pb-6 leading-relaxed">
                  Fabric Eventstream supports real-time patterns. But batch (daily/hourly) covers 90%+ of use cases and is simpler. We recommend streaming when business case justifies the complexity.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border-[3px] border-foreground bg-card px-6">
                <AccordionTrigger className="text-lg font-black uppercase tracking-tight hover:no-underline py-6">What about systems with poor data quality?</AccordionTrigger>
                <AccordionContent className="text-base font-semibold text-muted-foreground pb-6 leading-relaxed">
                  Common problem. We build data quality checks into pipelines: null detection, range validation, referential integrity. Bad data gets flagged, not silently loaded.
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
              <RelatedLink href="/services/build-your-foundation/foundation-build" title="Foundation Build" />
              <RelatedLink href="/services/build-your-foundation/data-modernization" title="Data Modernization" />
              <RelatedLink href="/services/decision-intelligence/semantic-modeling" title="Semantic Modeling" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-foreground py-24 text-background lg:py-32 border-t-[8px] border-emerald-600">
        <div className="container mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-8 text-[3rem] font-black uppercase leading-[0.9] tracking-tighter sm:text-[4rem] md:text-[5rem]">
            Connect your data to Microsoft Fabric.
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-xl font-bold leading-relaxed text-background/80">
            Stop exporting to Excel. Build Data Factory integrations that keep your Fabric Lakehouse current and consistent.
          </p>
          <Link href="/contact?service=integration" passHref>
            <Button
              variant="hero"
              size="lg"
              className="group h-16 rounded-none border-[3px] border-background bg-transparent px-10 text-background shadow-[8px_8px_0px_0px_hsl(var(--background))] transition-all hover:translate-x-[4px] hover:translate-y-[4px] hover:bg-background hover:text-foreground hover:shadow-none"
            >
              <span className="text-sm font-black uppercase tracking-[0.2em]">
                Schedule an Integration Conversation
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
