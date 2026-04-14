"use client";

import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, DatabaseZap, LayoutDashboard, Target, Users, AlertTriangle, SearchX, LineChart } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const includedCapabilities = [
  {
    id: "01",
    title: "Executive Analytics",
    desc: "Actionable dashboards designed for C-level & VP leaders.",
    details: "High-level, actionable dashboards designed for C-level and VP leaders. We focus on the KPIs that drive the business, not just creating pretty charts. Stop wading through uncurated data.",
    icon: LayoutDashboard,
    link: "/services/decision-intelligence/executive-analytics"
  },
  {
    id: "02",
    title: "Semantic Modeling",
    desc: "Centralized business logic for absolute truth.",
    details: "The invisible foundation of good BI. We build enterprise-grade Power BI datasets that define business logic centrally so every report tells the same truth, eliminating conflicting numbers.",
    icon: DatabaseZap,
    link: "/services/decision-intelligence/semantic-modeling"
  },
  {
    id: "03",
    title: "Self-Service Enablement",
    desc: "Train business users to build safely on certified data.",
    details: "Training and governance frameworks that empower business users to build their own reports safely, using certified data models without breaking the underlying architecture.",
    icon: Users,
    link: "/services/decision-intelligence/self-service-enablement"
  }
];

const methodology = [
  {
    step: "01",
    title: "Measure What Matters",
    desc: "We don't build generic reports. We align every visual and KPI directly to your strategic goals, ignoring vanity metrics."
  },
  {
    step: "02",
    title: "Single Version of Truth",
    desc: "By centralizing business logic in semantic models, we eliminate the 'spreadsheet wars' between departments."
  },
  {
    step: "03",
    title: "Adoption Focused",
    desc: "A dashboard is useless if nobody looks at it. We prioritize user experience, performance, and comprehensive training."
  }
];

export default function DecisionIntelligencePage() {
  const [activeAccordion, setActiveAccordion] = useState(null);

  return (
    <main className="min-h-screen bg-background font-sans selection:bg-forest/30 overflow-x-clip pt-20">
      
      {/* 1. The Monolith Hero */}
      <section className="relative flex flex-col lg:flex-row min-h-[calc(100vh-60px)] border-b-[8px] border-foreground bg-[#0c1214]">
        <div className="absolute top-6 left-6 lg:left-12 z-20">
          <Breadcrumb
            items={[
              { label: "Services", href: "/services" },
              { label: "Decision Intelligence", href: "/services/decision-intelligence", active: true }
            ]}
          />
        </div>

        {/* Left - Engineering Core */}
        <div className="lg:w-1/2 text-white flex flex-col justify-center px-8 lg:px-20 py-16 md:py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute top-1/2 -translate-y-1/2 -right-[20%] text-[4rem] sm:text-[6rem] lg:text-[14rem] font-black text-white/5 select-none pointer-events-none rotate-90 lg:rotate-0 transform origin-center font-mono leading-none">
            INTL
          </div>

          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }} className="relative z-10 w-full max-w-2xl">
            <div className="inline-flex items-center gap-4 mb-10">
              <div className="w-12 h-1 bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.6)]"></div>
              <span className="text-sm font-black uppercase tracking-[0.4em] text-emerald-400">Data & Strategy</span>
            </div>

            <h1 className="text-[3rem] md:text-[4rem] lg:text-[6rem] xl:text-[6.5rem] font-black leading-[0.85] tracking-tighter uppercase mb-10 drop-shadow-sm">
              Decision <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-white/40">Intelligence.</span>
            </h1>

            <p className="text-xl text-white/70 font-bold leading-relaxed border-l-[3px] border-emerald-400 pl-6">
              Turn scattered data into a clear strategic advantage. We design executive analytics, standardized semantic models, and self-service enablement that allow leaders to trust the numbers and make decisions faster.
            </p>

            <div className="mt-12 flex flex-col sm:flex-row gap-6">
              <Link href="/contact?service=decision-intelligence" passHref>
                <Button variant="hero" size="lg" className="rounded-none border-2 border-emerald-400 bg-emerald-400/10 text-emerald-400 hover:bg-emerald-400 hover:text-[#0c1214] font-black uppercase tracking-widest transition-all duration-300">
                  Discuss Strategy
                  <ArrowRight className="ml-3 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Right - Architectural Vision */}
        <div className="lg:w-1/2 bg-card relative min-h-[50vh] lg:min-h-screen flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 overflow-hidden outline outline-1 outline-border group transform-gpu"
          >
            <div className="absolute inset-0 bg-[#0a1012] mix-blend-multiply z-10" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--emerald-500))/0.05,transparent_70%)] z-10" />
            
            {/* Geometric Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px] z-0" />

            {/* Dashboard / Architecture Wireframe Placeholder */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 max-w-lg aspect-square border-2 border-emerald-400/20 bg-background/5 p-8 flex flex-col gap-6 z-20 backdrop-blur-sm">
               <div className="w-1/3 h-4 bg-emerald-400/40"></div>
               <div className="w-full flex-1 border border-emerald-400/20 flex items-end gap-4 p-4">
                  <div className="w-1/4 h-[40%] bg-white/5"></div>
                  <div className="w-1/4 h-[70%] bg-white/10"></div>
                  <div className="w-1/4 h-[50%] bg-white/5"></div>
                  <div className="w-1/4 h-[90%] bg-emerald-400/80 shadow-[0_0_20px_rgba(52,211,153,0.3)]"></div>
               </div>
               <div className="w-1/2 h-2 bg-emerald-400/20"></div>
            </div>

            <div className="absolute bottom-8 right-8 bg-black/80 backdrop-blur-md px-4 py-2 border border-emerald-400/30 rounded-none">
              <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-widest">[ DIAGNOSTIC HUB ]</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. The Problem (The Ledger Style) */}
      <section className="py-32 lg:py-20 md:py-32 lg:py-48 bg-background relative border-b border-border/50">
        <div className="absolute top-0 right-10 w-[1px] h-full bg-border/50"></div>
        <div className="absolute top-0 right-20 w-[1px] h-full bg-border/50 hidden md:block"></div>

        <div className="container mx-auto px-6 max-w-[1400px] relative">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn} className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-10 lg:gap-24 items-start">
            
            <div className="lg:col-span-5 lg:sticky lg:top-32">
              <h2 className="text-sm font-black text-red-500 uppercase tracking-[0.4em] mb-8">The Problem</h2>
              <div className="w-24 h-[4px] bg-red-500/50 mb-12 hidden lg:block"></div>
              
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tighter text-foreground mb-8 text-balance">
                You have data, but you don't have <span className="text-red-500">answers.</span>
              </h3>
              
              <p className="text-xl md:text-2xl font-bold leading-relaxed text-foreground/60 border-l-[3px] border-red-500/50 pl-6">
                You deployed Power BI, but you are still arguing in board meetings about which dashboard is correct because Finance and Sales define "Revenue" differently.
              </p>
            </div>

            <div className="lg:col-span-7 flex flex-col gap-12 mt-12 lg:mt-0">
               <div className="border-l-[4px] border-foreground pl-8 py-2">
                 <div className="flex items-center gap-4 mb-4">
                   <AlertTriangle className="text-foreground w-8 h-8" strokeWidth={2.5}/>
                   <h4 className="text-3xl font-black uppercase tracking-tight">Conflicting Numbers</h4>
                 </div>
                 <p className="text-xl text-foreground/70 font-bold leading-relaxed max-w-2xl">
                   Different departments pull from different spreadsheets. Nobody knows which number is the "official" metric, leading to distrust in the data platform as a whole.
                 </p>
               </div>
               
               <div className="border-l-[4px] border-foreground pl-8 py-2">
                 <div className="flex items-center gap-4 mb-4">
                   <SearchX className="text-foreground w-8 h-8" strokeWidth={2.5}/>
                   <h4 className="text-3xl font-black uppercase tracking-tight">Slow Time-to-Insight</h4>
                 </div>
                 <p className="text-xl text-foreground/70 font-bold leading-relaxed max-w-2xl">
                   When an executive asks a new question, it takes the data team three weeks to build a dashboard to answer it. The opportunity window closes before the data arrives.
                 </p>
               </div>
            </div>

          </motion.div>
        </div>
      </section>

      {/* 3. The Expansion Bellows (What's Included) */}
      <section className="bg-background pt-32 pb-40 border-b-[8px] border-foreground">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="mb-20">
            <h2 className="text-xs font-mono font-bold text-foreground/50 uppercase tracking-[0.4em] mb-4 border-l-2 border-forest pl-4">Platform Blueprint</h2>
            <h3 className="text-4xl md:text-5xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.9]">What's <br /> Included.</h3>
            <p className="text-xl md:text-2xl font-bold text-foreground/70 mt-6 max-w-2xl">A comprehensive approach to building an intelligence layer your entire organization can trust.</p>
          </div>

          <div className="border-t-[3px] border-foreground flex flex-col">
            {includedCapabilities.map((cap, index) => {
              const isActive = activeAccordion === index;
              return (
                <motion.div
                  key={index}
                  initial={false}
                  animate={{
                    backgroundColor: isActive ? "hsl(var(--card))" : "hsl(var(--background))",
                    borderColor: isActive ? "hsl(var(--foreground))" : "hsl(var(--border))"
                  }}
                  className={`border-b-[3px] transition-colors duration-500 overflow-hidden cursor-pointer group flex flex-col justify-center relative`}
                  onMouseEnter={() => setActiveAccordion(index)}
                  onMouseLeave={() => setActiveAccordion(null)}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r from-forest/5 to-transparent opacity-0 transition-opacity duration-500 ${isActive ? 'opacity-100' : ''}`} />

                  <div className="w-full flex items-center justify-between px-6 lg:px-12 py-10 relative z-10">
                    <div className="flex items-center gap-8 lg:gap-10 lg:gap-16 w-full lg:w-2/3">
                      <span className={`text-2xl font-mono font-black transition-colors duration-500 ${isActive ? 'text-forest' : 'text-muted-foreground'}`}>{cap.id}</span>
                      <h4 className={`text-3xl lg:text-5xl font-black tracking-tight uppercase transition-colors duration-500 ${isActive ? 'text-foreground' : 'text-foreground/70'}`}>
                        {cap.title}
                      </h4>
                    </div>
                    <div className="hidden lg:flex w-1/3 justify-end items-center gap-6">
                      <p className={`text-lg font-bold transition-all duration-500 text-right max-w-xs ${isActive ? 'text-foreground opacity-100 translate-x-0' : 'text-muted-foreground opacity-0 translate-x-4'}`}>
                        {cap.desc}
                      </p>
                      <div className={`w-12 h-12 flex items-center justify-center border-[2px] transition-all duration-500 ${isActive ? 'bg-forest border-forest text-forest-foreground scale-110' : 'bg-transparent border-muted-foreground/30 text-muted-foreground'}`}>
                        <cap.icon size={24} />
                      </div>
                    </div>
                  </div>

                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="px-6 lg:px-12 pb-10 relative z-10 w-full"
                      >
                        <div className="w-full lg:w-2/3 pl-[4rem] lg:pl-[6.5rem]">
                          <div className="h-[2px] w-16 bg-forest mb-6"></div>
                          <p className="text-xl text-muted-foreground font-bold leading-relaxed max-w-2xl mb-6">
                            {cap.details}
                          </p>
                          <Link href={cap.link} className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.2em] text-forest hover:text-foreground transition-colors group/link">
                             Explore Detail
                             <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 4. Methodology (Dark block) */}
      <section className="py-16 md:py-24 lg:py-32 bg-[#0c1214] text-white">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <h2 className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-[0.4em] mb-4 border-l-2 border-emerald-400 pl-4">Methodology</h2>
          <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9] mb-20 text-white">Our Approach.</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8">
            {methodology.map((item, i) => (
               <div key={i} className="flex flex-col border-t-2 border-white/20 pt-8 group cursor-default">
                  <div className="text-5xl font-black text-white/10 group-hover:text-emerald-400/50 transition-colors font-mono mb-6">{item.step}</div>
                  <h4 className="text-2xl font-black uppercase tracking-tight text-white mb-4 group-hover:text-emerald-400 transition-colors">{item.title}</h4>
                  <p className="text-lg text-white/60 font-medium leading-relaxed group-hover:text-white/80 transition-colors">{item.desc}</p>
               </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. The Filter (Who this is for) */}
      <section className="py-16 md:py-24 lg:py-32 bg-background relative border-b-2 border-border/80">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            
            <div>
              <h2 className="text-xs font-mono font-bold text-foreground/50 uppercase tracking-[0.4em] mb-4 border-l-2 border-forest pl-4">The Filter</h2>
              <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9] mb-12">Who This <br/> Is For.</h3>
              
              <ul className="space-y-6">
                {[
                  "Organizations struggling with 'multiple versions of the truth'.",
                  "Companies with conflicting departmental reports where metrics don't align.",
                  "Teams experiencing slow time-to-insight when business questions arise.",
                  "Leaders who want to transition from gut-feel decisions to data-backed strategy."
                ].map((text, i) => (
                   <li key={i} className="flex items-start gap-4">
                      <div className="w-2 h-2 bg-forest mt-2.5 shrink-0" />
                      <p className="text-xl font-bold text-foreground/80 leading-relaxed">{text}</p>
                   </li>
                ))}
              </ul>
            </div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-card border-4 border-foreground p-6 md:p-10 lg:p-16 relative shadow-[16px_16px_0_hsl(var(--forest))] group">
               <div className="absolute top-0 right-0 p-4">
                  <LineChart className="w-12 h-12 text-foreground/10" strokeWidth={1} />
               </div>
               <h4 className="text-sm font-black text-forest uppercase tracking-[0.2em] mb-8">Starting Point</h4>
               <blockquote className="text-3xl md:text-4xl font-black uppercase tracking-tight leading-[1.1] mb-8 text-foreground group-hover:text-forest transition-colors">
                 "We have Power BI but nobody uses it or trusts the data."
               </blockquote>
               <p className="text-lg font-bold text-foreground/70 mb-10">
                 If this sounds familiar, it's time to rethink your intelligence layer.
               </p>
               <Link href="/services/decision-intelligence/executive-analytics" className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.2em] text-background bg-foreground px-6 py-4 hover:bg-forest transition-colors">
                  Explore Executive Analytics
                  <ArrowRight size={16} />
               </Link>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 6. The Geometric Anchor (Extreme CTA) */}
      <section className="relative bg-background z-[50] overflow-hidden" style={{ paddingBottom: '60px' }}>
        <div className="flex flex-col items-center pt-8 lg:pt-16 relative">
          <div className="relative w-[320px] h-[320px] sm:w-[480px] sm:h-[480px] md:w-[560px] md:h-[560px] md:w-[640px] md:h-[640px] lg:w-[720px] lg:h-[720px] flex flex-col items-center justify-center text-forest-foreground group">
            <div className="absolute inset-0 bg-forest rounded-full shadow-[0_0_80px_rgba(34,197,94,0.12)] group-hover:scale-[1.02] transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] transform-gpu z-0"></div>

            <div className="text-center relative z-10 px-8 w-full -mt-16">
              <div className="w-16 h-[2px] bg-forest-foreground/50 mx-auto mb-6"></div>
              <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-black tracking-tighter uppercase leading-[0.95] mb-6">
                Ready to trust <br /> your numbers?
              </h2>
              <p className="text-base md:text-lg font-bold max-w-sm mx-auto text-forest-foreground/80 leading-relaxed mb-8">
                Stop arguing over data accuracy and start making informed decisions based on a singular unified architecture.
              </p>

              <Link href="/contact?service=decision-intelligence" passHref>
                <Button variant="hero" size="lg" className="px-8 py-6 text-lg rounded-none border-4 border-forest-foreground bg-forest-foreground text-forest font-black uppercase tracking-[0.2em] shadow-none hover:bg-transparent hover:text-forest-foreground transition-all duration-300">
                  ENGAGE GROOT
                  <ArrowRight className="ml-3 w-5 h-5" />
                </Button>
              </Link>
            </div>

            <div className="absolute left-8 md:left-14 top-[30%] text-forest-foreground/10 font-mono text-[4rem] lg:text-[6rem] font-black pointer-events-none select-none rotate-90 origin-left z-0">
              TRUST
            </div>
            <div className="absolute right-8 md:right-14 top-[30%] text-forest-foreground/10 font-mono text-[4rem] lg:text-[6rem] font-black pointer-events-none select-none -rotate-90 origin-right z-0">
              DATA
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
