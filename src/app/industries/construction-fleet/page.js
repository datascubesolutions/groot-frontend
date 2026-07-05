// @ts-nocheck
"use client";

import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import {
  Activity,
  BarChart3,
  ChevronRight,
  Cpu,
  Layers,
  MapPin,
  ShieldAlert,
  Terminal,
  Wifi,
  Database,
  Search,
  ShieldCheck,
  TrendingUp,
  ArrowRight
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const slideAndPop = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 15, duration: 0.6 },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

export default function ConstructionFleetPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background pt-20 text-foreground selection:bg-emerald-600/20">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <div className="relative z-10">
        {/* ── BREADCRUMB ── */}
        <div className="container mx-auto max-w-[1536px] px-4 xl:px-8 2xl:px-12">
          <Breadcrumb items={[
            { label: "Industries", href: "/industries" },
            { label: "Construction & Fleet", href: "/industries/construction-fleet" },
          ]} />
        </div>

        {/* ── HERO ── */}
        <section className="relative flex flex-col justify-center border-t-2 border-foreground min-h-[calc(100vh-80px)] overflow-hidden">
          <div className="absolute top-0 right-0 pointer-events-none">
            <div className="h-[600px] w-[600px] rounded-full bg-emerald-600/5 blur-[120px]" />
          </div>
          <div className="container relative z-10 mx-auto max-w-[1536px] px-4 xl:px-8 2xl:px-12 py-12 lg:py-0">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
              {/* Left */}
              <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="lg:col-span-7">
                <motion.div variants={fadeIn} className="mb-6 flex items-center gap-3">
                  <div className="flex items-center gap-2 border-2 border-foreground bg-emerald-100 px-3 py-1 text-xs font-black tracking-widest text-foreground uppercase shadow-[2px_2px_0_0_#1b2b36]">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-600" />
                    </span>
                    SYS_STATUS: ONLINE
                  </div>
                  <div className="h-[2px] w-12 bg-foreground" />
                  <span className="text-xs font-black tracking-widest uppercase text-muted-foreground">SECTOR_04 // FLEET</span>
                </motion.div>

                <motion.h1 variants={fadeIn} className="mb-6 text-[clamp(2.5rem,6vw,5rem)] font-black uppercase leading-[0.9] tracking-tighter text-[#1b2b36]">
                  Construction<br />
                  <span className="text-emerald-600">&amp; Fleet</span>
                </motion.h1>

                <motion.p variants={fadeIn} className="mb-8 max-w-xl text-lg font-medium leading-relaxed text-muted-foreground">
                  Turn telematics and project data into bottom-line performance.
                  We architect high-fidelity pipelines that track fleet utilization,
                  eliminate rental overruns, and defend critical project margins.
                </motion.p>

                <motion.div variants={fadeIn} className="flex flex-col gap-4 sm:flex-row">
                  <Link href="/contact?industry=construction" passHref>
                    <Button size="lg" className="group rounded-none border-2 border-foreground bg-emerald-600 px-8 py-6 text-white font-black uppercase tracking-widest hover:bg-emerald-500 transition-all shadow-[4px_4px_0_0_#1b2b36] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0_0_#1b2b36]">
                      Initialize Deployment
                      <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>

              {/* Right image */}
              <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative hidden lg:col-span-5 lg:block">
                <div className="relative aspect-[4/3] w-full overflow-hidden border-2 border-foreground bg-white shadow-[6px_6px_0_0_#1b2b36] group">
                  <div className="flex h-10 items-center border-b-2 border-foreground bg-muted px-4">
                    <div className="flex gap-2">
                      <div className="h-3 w-3 rounded-full border-2 border-foreground bg-red-500" />
                      <div className="h-3 w-3 rounded-full border-2 border-foreground bg-amber-500" />
                      <div className="h-3 w-3 rounded-full border-2 border-foreground bg-green-500" />
                    </div>
                    <div className="ml-auto text-[11px] font-black tracking-widest text-foreground uppercase">telemetry_feed_live</div>
                  </div>
                  <div className="relative h-[calc(100%-2.5rem)] w-full bg-black overflow-hidden">
                    <Image src="/industries/construction-hero.png" alt="Construction Telemetry" fill className="object-cover opacity-90 transition-transform duration-750 group-hover:scale-105" sizes="50vw" priority />
                  </div>
                  <div className="absolute bottom-3 left-3 z-20 flex flex-col gap-1.5">
                    <div className="flex items-center gap-2 border-2 border-foreground bg-white px-3 py-1 shadow-[2px_2px_0_0_#1b2b36] transform transition-transform group-hover:translate-x-1">
                      <Activity className="h-3.5 w-3.5 text-emerald-600" />
                      <span className="text-xs font-black tracking-widest text-foreground">ASSETS_TRACKED: 1,402</span>
                    </div>
                    <div className="flex items-center gap-2 border-2 border-foreground bg-white px-3 py-1 shadow-[2px_2px_0_0_#1b2b36] transform transition-transform group-hover:translate-x-1 delay-75">
                      <Wifi className="h-3.5 w-3.5 text-emerald-600" />
                      <span className="text-xs font-black tracking-widest text-foreground">LATENCY: 12ms</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── SYSTEM ARCHITECTURE ── */}
        <section className="relative flex flex-col justify-center border-t-2 border-foreground bg-muted/20 min-h-[calc(100vh-80px)] overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
          <div className="container relative z-10 mx-auto max-w-[1536px] px-4 xl:px-8 2xl:px-12 py-12 lg:py-16">
            <div className="mb-10 border-l-8 border-emerald-600 bg-card p-6 shadow-[8px_8px_0_0_rgba(0,0,0,0.05)] md:w-2/3">
              <h2 className="mb-2 flex items-center gap-3 text-xs font-black uppercase tracking-[0.3em] text-emerald-600">
                <span className="h-1 w-8 bg-emerald-600" />// SYSTEM ARCHITECTURE
              </h2>
              <h3 className="text-[clamp(2rem,5vw,3.5rem)] font-black uppercase leading-[0.9] tracking-tighter text-foreground">
                Operating with precision.
              </h3>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
              {/* MOD_01 */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
                className="group relative overflow-hidden border-2 border-foreground bg-card p-6 shadow-[4px_4px_0_0_#1b2b36] hover:-translate-y-1 hover:shadow-[6px_6px_0_0_#1b2b36] transition-all md:col-span-4">
                <div className="absolute right-0 top-0 border-l-2 border-b-2 border-foreground bg-emerald-100 px-3 py-1 text-[10px] font-black uppercase tracking-widest z-10">MOD_01</div>
                <div className="absolute right-2 bottom-2 select-none text-[6rem] font-black leading-none text-slate-100 pointer-events-none transition-colors group-hover:text-emerald-50">01</div>
                <div className="relative z-10">
                  <div className="mb-5 mt-4 inline-flex h-12 w-12 items-center justify-center border-2 border-foreground bg-emerald-100 text-emerald-600 shadow-[2px_2px_0_0_#1b2b36] group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <MapPin className="h-5 w-5" strokeWidth={2} />
                  </div>
                  <h4 className="mb-3 text-xl font-black uppercase tracking-tight text-foreground">Connected Sites</h4>
                  <p className="font-medium leading-relaxed text-muted-foreground">
                    Integrate structured ERP data with unstructured field reports and IoT sensor data to create a real-time digital twin of your construction sites.
                  </p>
                </div>
              </motion.div>

              {/* MOD_02 */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
                className="group relative overflow-hidden border-2 border-foreground bg-card p-6 shadow-[4px_4px_0_0_#1b2b36] hover:-translate-y-1 hover:shadow-[6px_6px_0_0_#1b2b36] transition-all md:col-span-8">
                <div className="absolute right-0 top-0 border-l-2 border-b-2 border-foreground bg-emerald-100 px-3 py-1 text-[10px] font-black uppercase tracking-widest z-10">MOD_02</div>
                <div className="absolute right-2 bottom-2 select-none text-[6rem] font-black leading-none text-slate-100 pointer-events-none transition-colors group-hover:text-emerald-50">02</div>
                <div className="relative z-10">
                  <div className="mb-5 mt-4 inline-flex h-12 w-12 items-center justify-center border-2 border-foreground bg-emerald-100 text-emerald-600 shadow-[2px_2px_0_0_#1b2b36] group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <BarChart3 className="h-5 w-5" strokeWidth={2} />
                  </div>
                  <h4 className="mb-3 text-xl font-black uppercase tracking-tight text-foreground">Margin Protection</h4>
                  <p className="max-w-2xl font-medium leading-relaxed text-muted-foreground">
                    Don&apos;t wait until month-end to realize a project is bleeding cash. Real-time semantic models unite labor costs, material spend, and change orders so managers can course-correct instantly.
                  </p>
                </div>
              </motion.div>

              {/* MOD_03 */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
                className="group relative overflow-hidden border-2 border-foreground bg-card p-6 shadow-[4px_4px_0_0_#1b2b36] hover:-translate-y-1 hover:shadow-[6px_6px_0_0_#1b2b36] transition-all md:col-span-12">
                <div className="absolute right-0 top-0 border-l-2 border-b-2 border-foreground bg-emerald-100 px-3 py-1 text-[10px] font-black uppercase tracking-widest z-10">MOD_03</div>
                <div className="absolute right-72 bottom-2 select-none text-[6rem] font-black leading-none text-slate-100 pointer-events-none transition-colors group-hover:text-emerald-50 hidden lg:block">03</div>
                <div className="flex flex-col lg:flex-row gap-8 items-start lg:items-center relative z-10">
                  <div className="flex-1">
                    <div className="mb-5 mt-4 inline-flex h-12 w-12 items-center justify-center border-2 border-foreground bg-emerald-100 text-emerald-600 shadow-[2px_2px_0_0_#1b2b36] group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                      <Cpu className="h-5 w-5" strokeWidth={2} />
                    </div>
                    <h4 className="mb-3 text-xl font-black uppercase tracking-tight text-foreground">Fleet Telematics Ecosystem</h4>
                    <p className="max-w-2xl font-medium leading-relaxed text-muted-foreground">
                      Connect natively to Samsara, Geotab, or OEM APIs. Ingest coordinate, fuel, and diagnostic data into unified lakes to build predictive maintenance pipelines.
                    </p>
                  </div>
                  <div className="w-full lg:w-72 border-2 border-foreground bg-background p-4 space-y-3 shadow-[4px_4px_0_0_#1b2b36]">
                    <div className="flex justify-between items-center border-b-2 border-foreground pb-2">
                      <span className="text-[10px] font-black uppercase tracking-widest">API_INGESTION</span>
                      <span className="text-[10px] font-black uppercase tracking-widest text-emerald-600 border border-emerald-600 px-1.5 py-0.5">200 OK</span>
                    </div>
                    <div className="h-3 w-full border border-foreground bg-white overflow-hidden">
                      <motion.div initial={{ x: "-100%" }} animate={{ x: "100%" }} transition={{ repeat: Infinity, duration: 2, ease: "linear" }} className="h-full w-1/2 bg-emerald-600" />
                    </div>
                    <div className="h-3 w-full border border-foreground bg-white overflow-hidden">
                      <motion.div initial={{ x: "-100%" }} animate={{ x: "100%" }} transition={{ repeat: Infinity, duration: 2.5, ease: "linear", delay: 0.5 }} className="h-full w-1/3 bg-amber-500" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── COMMAND CENTER ── */}
        <section className="relative flex flex-col justify-center border-t-2 border-foreground bg-background min-h-[calc(100vh-80px)]">
          <div className="container relative z-10 mx-auto max-w-[1536px] px-4 xl:px-8 2xl:px-12 py-12 lg:py-16">
            <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
                <motion.div variants={fadeIn} className="mb-6 inline-flex items-center gap-2 border-2 border-foreground bg-emerald-100 px-4 py-1.5 text-xs font-black uppercase tracking-widest shadow-[2px_2px_0_0_#1b2b36]">
                  <Terminal className="h-3.5 w-3.5" /> NEXUS OVERVIEW
                </motion.div>
                <motion.h2 variants={fadeIn} className="mb-6 text-[clamp(2rem,5vw,3.5rem)] font-black uppercase leading-[0.9] tracking-tighter text-[#1b2b36]">
                  Complete Visibility.<br /><span className="text-emerald-600">Zero Blind Spots.</span>
                </motion.h2>
                <motion.p variants={fadeIn} className="mb-8 text-lg font-medium leading-relaxed text-muted-foreground">
                  Our unified data layer brings your entire operational footprint into a single, real-time command center — no more fragmented spreadsheets.
                </motion.p>
                <motion.ul variants={staggerContainer} className="space-y-4">
                  {["Live Telemetry & Geofencing for thousands of assets","Predictive Maintenance alerts before catastrophic failures","Real-time Fuel Burn vs. Idle Time comparisons","Automated compliance and safety scorecarding"].map((item, i) => (
                    <motion.li key={i} variants={fadeIn} className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center border-2 border-foreground bg-emerald-100 text-emerald-600 shadow-[1px_1px_0_0_#1b2b36]">
                        <ChevronRight className="h-4 w-4" />
                      </div>
                      <span className="font-bold text-foreground">{item}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>

              <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                <div className="border-2 border-foreground bg-white shadow-[6px_6px_0_0_#1b2b36] group overflow-hidden">
                  <div className="flex h-10 items-center border-b-2 border-foreground bg-muted px-4">
                    <div className="flex gap-2">
                      <div className="h-3 w-3 rounded-full border-2 border-foreground bg-red-500" />
                      <div className="h-3 w-3 rounded-full border-2 border-foreground bg-amber-500" />
                      <div className="h-3 w-3 rounded-full border-2 border-foreground bg-green-500" />
                    </div>
                    <div className="ml-4 text-[11px] font-black uppercase tracking-widest text-foreground">~/nexus/operations/view.exe</div>
                  </div>
                  <div className="relative aspect-[4/3] w-full bg-black overflow-hidden">
                    <Image src="/industries/construction-dashboard.png" alt="Fleet Management Dashboard" fill className="object-cover opacity-90 transition-transform duration-750 group-hover:scale-103" sizes="50vw" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── CORE USE CASES ── */}
        <section className="relative flex flex-col justify-center border-t-2 border-foreground bg-muted/20 min-h-[calc(100vh-80px)]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
          <div className="container relative z-10 mx-auto max-w-[1536px] px-4 xl:px-8 2xl:px-12 py-12 lg:py-16">
            <div className="mb-10 border-l-8 border-emerald-600 bg-card p-6 shadow-[8px_8px_0_0_rgba(0,0,0,0.05)] md:w-2/3">
              <h2 className="mb-2 flex items-center gap-3 text-xs font-black uppercase tracking-[0.3em] text-emerald-600">
                <span className="h-1 w-8 bg-emerald-600" />// TARGET_VECTORS
              </h2>
              <h3 className="text-[clamp(2rem,5vw,3.5rem)] font-black uppercase leading-[0.9] tracking-tighter text-foreground">Core Use Cases</h3>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {[
                { 
                  icon: Layers, 
                  title: "Equipment Utilization & Allocation", 
                  desc: "Track exact engine hours used versus hours rented. Dashboards automatically flag idle rented equipment across job sites, saving hundreds of thousands in unnecessary overage fees.",
                  impact: "40% Rental Overrun Reduction",
                  metric: "POTENTIAL SAVINGS: $180K/QTR"
                },
                { 
                  icon: ShieldAlert, 
                  title: "Driver Safety & Telematics", 
                  desc: "Build enterprise safety rankings aggregating harsh braking, speeding, and camera-event data from Samsara/Geotab into customized executive scorecards for regional safety managers.",
                  impact: "15% Less Incidents",
                  metric: "SAFETY RATING IMPROVEMENT"
                },
              ].map(({ icon: Icon, title, desc, impact, metric }, i) => (
                <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeIn}
                  className="group relative border-2 border-foreground bg-card p-8 shadow-[4px_4px_0_0_#1b2b36] hover:-translate-y-1 hover:shadow-[6px_6px_0_0_#1b2b36] transition-all flex flex-col justify-between min-h-[340px]">
                  <div>
                    <div className="flex justify-between items-start mb-5">
                      <div className="flex h-14 w-14 items-center justify-center border-2 border-foreground bg-emerald-600 text-white shadow-[2px_2px_0_0_#1b2b36]">
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-[#1b2b36] bg-emerald-100 px-2.5 py-1 border-2 border-emerald-600 shadow-[1px_1px_0_0_#1b2b36]">
                        {metric}
                      </span>
                    </div>
                    <h3 className="mb-4 text-2xl font-black uppercase tracking-tight text-foreground">{title}</h3>
                    <p className="font-medium leading-relaxed text-muted-foreground mb-6">{desc}</p>
                  </div>
                  <div className="border-t border-slate-200 pt-4 mt-auto">
                    <span className="text-xs font-black uppercase tracking-widest text-emerald-600">// TARGET IMPACT: </span>
                    <span className="text-xs font-black text-slate-800 uppercase">{impact}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CASE STUDY SECTION ── */}
        <section className="relative flex flex-col justify-center border-t-2 border-foreground bg-background min-h-[calc(100vh-80px)] overflow-hidden">
          {/* Background Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

          <div className="container relative z-10 mx-auto max-w-[1536px] px-4 xl:px-8 2xl:px-12 flex flex-col justify-center h-full py-12">
            {/* Header Block */}
            <div className="mb-6 flex flex-col justify-between gap-5 border-b-[3px] border-emerald-600 pb-5 md:flex-row md:items-end shrink-0">
              <div className="max-w-4xl">
                <h3 className="text-[2.25rem] font-black uppercase leading-[0.9] tracking-tighter text-[#1b2b36] sm:text-[2.75rem] md:text-[3.25rem] lg:text-[3.5rem] max-w-[95%]">
                  How we optimized fleet logistics <br className="hidden md:block" /> for a multi-regional contractor.
                </h3>
              </div>
              <div className="flex shrink-0 pb-1">
                <div className="group flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-[#1b2b36] bg-emerald-100 px-5 py-2.5 rounded-full border-2 border-emerald-600 shadow-[2px_2px_0_0_#1b2b36]">
                  CASE STUDY: CS-03
                </div>
              </div>
            </div>

            {/* 2x2 Grid Block */}
            <div className="flex-1 min-h-0 bg-foreground border-[3px] border-foreground p-[2px] shadow-[15px_15px_0px_0px_hsl(var(--emerald-600)/0.25)] flex flex-col mb-2">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-[2px] h-full flex-1">

                {/* Cell 1: Situation */}
                <div className="group relative bg-card p-6 md:p-8 lg:p-10 flex flex-col overflow-hidden justify-center">
                  <div className="absolute right-[-2%] top-[-5%] text-[8rem] lg:text-[10rem] font-black leading-none tracking-tighter text-slate-100 pointer-events-none">01</div>
                  <div className="flex items-center gap-3 mb-4 lg:mb-6 relative z-10">
                    <Database className="h-6 w-6 text-emerald-600" strokeWidth={2.5} />
                    <h4 className="text-lg lg:text-xl font-black uppercase tracking-tight text-[#1b2b36]">The Situation</h4>
                  </div>
                  <p className="text-[15px] lg:text-base font-semibold leading-relaxed text-slate-700 relative z-10 max-w-[95%]">
                    A prominent infrastructure company with a fleet of over 1,400 active heavy machines lacked centralized visibility. Regional divisions acted independently, leasing duplicate equipment while similar company-owned assets sat idle. Project teams spent hours manually reconciling ERP spreadsheets against GPS logs.
                  </p>
                </div>

                {/* Cell 2: What We Built */}
                <div className="group relative bg-card p-6 md:p-8 lg:p-10 flex flex-col overflow-hidden justify-center">
                  <div className="absolute right-[-2%] top-[-5%] text-[8rem] lg:text-[10rem] font-black leading-none tracking-tighter text-slate-100 pointer-events-none">02</div>
                  <div className="flex items-center gap-3 mb-4 lg:mb-6 relative z-10">
                    <Search className="h-6 w-6 text-blue-600" strokeWidth={2.5} />
                    <h4 className="text-lg lg:text-xl font-black uppercase tracking-tight text-[#1b2b36]">What We Built</h4>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4 relative z-10">
                     <div className="bg-slate-50/80 p-4 rounded-md border border-slate-200 shadow-sm">
                        <strong className="text-blue-700 uppercase text-[11px] tracking-widest block mb-1.5">Samsara API</strong>
                        <span className="text-[13px] font-bold text-slate-800 leading-snug block">Real-time coordinates, engine diagnostic codes, and live activity streams ingested directly.</span>
                     </div>
                     <div className="bg-slate-50/80 p-4 rounded-md border border-slate-200 shadow-sm">
                        <strong className="text-blue-700 uppercase text-[11px] tracking-widest block mb-1.5">Microsoft Fabric</strong>
                        <span className="text-[13px] font-bold text-slate-800 leading-snug block">OneLake unified architecture matching telematics with ERP lease contracts.</span>
                     </div>
                     <div className="bg-slate-50/80 p-4 rounded-md border border-slate-200 shadow-sm">
                        <strong className="text-blue-700 uppercase text-[11px] tracking-widest block mb-1.5">Threshold Alerts</strong>
                        <span className="text-[13px] font-bold text-slate-800 leading-snug block">Automated notifications sent when rented machinery sits idle for over 72 hours.</span>
                     </div>
                     <div className="bg-slate-50/80 p-4 rounded-md border border-slate-200 shadow-sm">
                        <strong className="text-blue-700 uppercase text-[11px] tracking-widest block mb-1.5">Active Coaching</strong>
                        <span className="text-[13px] font-bold text-slate-800 leading-snug block">Central safety dashboard mapping harsh driving events directly to coaching queues.</span>
                     </div>
                  </div>
                </div>

                {/* Cell 3: The Solution */}
                <div className="group relative bg-[#0A2518] p-6 md:p-8 lg:p-10 flex flex-col text-background overflow-hidden justify-center">
                   <div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--emerald-600)/0.2),transparent_70%)] pointer-events-none"></div>

                   <div className="flex items-center gap-3 mb-4 lg:mb-6 relative z-10">
                    <ShieldCheck className="h-6 w-6 text-emerald-400" strokeWidth={2.5} />
                    <h4 className="text-lg lg:text-xl font-black uppercase tracking-tight text-background">The Solution</h4>
                  </div>
                  <p className="text-base lg:text-lg font-bold leading-relaxed text-white border-l-[3px] border-emerald-500 pl-5 lg:pl-6 relative z-10 max-w-[95%]">
                    A unified telemetry and ERP integration pipeline built on Microsoft Fabric. We combined active Samsara fleet trackers, rental schedules, and project milestone data into a real-time tracking registry, transforming local operations into a consolidated digital twin.
                  </p>
                </div>

                {/* Cell 4: Outcome */}
                <div className="group relative bg-card p-6 md:p-8 lg:p-10 flex flex-col overflow-hidden justify-center">
                  <div className="absolute right-[-2%] top-[-5%] text-[8rem] lg:text-[10rem] font-black leading-none tracking-tighter text-slate-100 pointer-events-none">04</div>
                  <div className="flex items-center gap-3 mb-5 lg:mb-8 relative z-10">
                    <TrendingUp className="h-6 w-6 text-violet-600" strokeWidth={2.5} />
                    <h4 className="text-lg lg:text-xl font-black uppercase tracking-tight text-[#1b2b36]">The Outcome</h4>
                  </div>

                  <div className="flex flex-col relative z-10">
                    <div className="mb-6 flex items-center gap-8 pb-6 border-b border-slate-200">
                      <div className="flex flex-col min-w-[120px]">
                        <div className="text-[3rem] lg:text-[4rem] font-black text-violet-600 leading-none tracking-tighter">40%</div>
                        <div className="text-[11px] font-bold uppercase tracking-widest text-slate-600 mt-2">Rental Overrun Reduction</div>
                      </div>
                      <div className="w-[1px] h-14 bg-slate-200"></div>
                      <div className="flex flex-col">
                        <div className="text-[3rem] lg:text-[4rem] font-black text-violet-600 leading-none tracking-tighter">$180K</div>
                        <div className="text-[11px] font-bold uppercase tracking-widest text-slate-600 mt-2">Prevented In First Qtr</div>
                      </div>
                    </div>
                    <p className="text-[15px] lg:text-base font-semibold leading-relaxed text-slate-700 max-w-[90%]">
                      The automated idle machinery notifications successfully prevented over $180K in contract overruns, while safety analytics triggered a 15% reduction in driving safety violations.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="relative flex flex-col justify-center border-t-2 border-foreground bg-background min-h-[calc(100vh-80px)]">
          <div className="container mx-auto max-w-[1536px] px-4 xl:px-8 2xl:px-12 py-12">
            <div className="mx-auto max-w-3xl border-2 border-foreground bg-card p-12 text-center shadow-[8px_8px_0_0_#1b2b36] md:p-16 relative">
              <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-emerald-600" />
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-emerald-600" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-emerald-600" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-emerald-600" />
              <h2 className="mb-6 text-[clamp(1.8rem,4vw,3rem)] font-black uppercase leading-[1] tracking-tighter text-[#1b2b36]">
                Don&apos;t fly blind<br />on your job sites.
              </h2>
              <p className="mx-auto mb-10 max-w-xl font-medium leading-relaxed text-muted-foreground">
                If you lack visibility into your major cost drivers—equipment, materials, and labor—it&apos;s time to build a professional-grade telemetry and ERP integration.
              </p>
              <Link href="/contact?industry=construction" passHref>
                <Button size="lg" className="rounded-none border-2 border-foreground bg-emerald-600 px-10 py-6 text-white font-black uppercase tracking-widest hover:bg-emerald-500 transition-all shadow-[4px_4px_0_0_#1b2b36] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0_0_#1b2b36]">
                  <span className="mr-2 font-mono">&gt;</span> OPTIMIZE_FLEET
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
