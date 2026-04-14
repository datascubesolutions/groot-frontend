"use client";

import { Button } from "@/components/ui/Button";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Database, Network, Zap } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const capabilities = [
  {
    id: "01",
    title: "Data Foundations",
    desc: "Microsoft Fabric implementations and Lakehouse architecture.",
    details: "We lay down robust foundations inside Microsoft Fabric. From Lakehouse implementations to sophisticated data pipelines and governance with Microsoft Purview.",
    icon: Database
  },
  {
    id: "02",
    title: "Analytics & BI",
    desc: "Power BI semantic models and executive dashboards.",
    details: "We build governed semantic models, executive dashboards, and self-service enablement tailored for leaders. We make your reporting the undeniable source of truth.",
    icon: BarChart4
  },
  {
    id: "03",
    title: "Integrations",
    desc: "Connecting enterprise systems to your data platform.",
    details: "Connecting disparate ERPs, CRMs, field service systems, and SaaS applications into a unified data ecosystem for frictionless reporting and centralized control.",
    icon: Network
  },
  {
    id: "04",
    title: "Migrations",
    desc: "Moving from legacy systems to Fabric successfully.",
    details: "Moving seamlessly from legacy systems to Fabric. Whether it's SQL Server, Azure Analysis Services, or Synapse—we do it without breaking what's already working.",
    icon: Zap
  }
];

function BarChart4(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 3v18h18" />
      <path d="M13 17V9" />
      <path d="M18 17V5" />
      <path d="M8 17v-3" />
    </svg>
  )
}

export default function AboutPage() {
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const teamIndex = [
    { num: "01", category: "Microsoft Fabric & Azure", tools: ["Lakehouse", "Data Factory", "Synapse", "Purview"] },
    { num: "02", category: "Power BI", tools: ["Semantic Modeling", "DAX", "Row-Level Security", "Performance Optimization"] },
    { num: "03", category: "Data Engineering", tools: ["Python", "SQL", "PySpark", "API Integrations"] },
    { num: "04", category: "Industries", tools: ["Private Equity", "Medical Device", "Construction", "Financial Services", "SaaS"] }
  ];

  return (
    <main className="min-h-screen bg-background font-sans selection:bg-forest/30 overflow-x-clip pt-20">

      {/* 1. The Monolith Hero (50/50 Split) */}
      <section className="relative flex flex-col lg:flex-row min-h-[calc(100vh-60px)] border-b-[8px] border-foreground bg-[#0c1214]">

        {/* Left - Engineering Core */}
        <div className="lg:w-1/2 text-white flex flex-col justify-center px-8 lg:px-20 py-32 relative overflow-hidden">
          {/* Massive Watermark */}
          <div className="absolute top-1/2 -translate-y-1/2 -right-[20%] text-[10rem] lg:text-[18rem] font-black text-white/5 select-none pointer-events-none rotate-90 lg:rotate-0 transform origin-center font-mono">
            GRT
          </div>

          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }} className="relative z-10 w-full max-w-xl">
            <div className="inline-flex items-center gap-4 mb-10">
              <div className="w-12 h-1 bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.6)]"></div>
              <span className="text-sm font-black uppercase tracking-[0.4em] text-emerald-400">Identity</span>
            </div>

            <h1 className="text-[3.5rem] lg:text-[5rem] xl:text-[5.5rem] font-black leading-[0.85] tracking-tighter uppercase mb-10 drop-shadow-sm">
              We Build Data <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">Platforms</span> <br />
              That Work.
            </h1>

            <p className="text-xl text-white/70 font-bold leading-relaxed border-l-[3px] border-emerald-400 pl-6">
              Microsoft Fabric. Power BI. Azure. Helping companies unify their data and make better decisions.
            </p>
          </motion.div>
        </div>

        {/* Right - Architectural Vision */}
        <div className="lg:w-1/2 bg-card relative min-h-[50vh] lg:min-h-screen flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 overflow-hidden outline outline-1 outline-border group transform-gpu will-change-[opacity,transform]"
          >
            <img
              src="/images/about/building_hq.png"
              alt="Groot Analytics Architecture"
              className="object-cover w-full h-full grayscale-[80%] contrast-125 group-hover:grayscale-[50%] group-hover:scale-105 transition-all duration-[2s] ease-[cubic-bezier(0.19,1,0.22,1)] transform-gpu will-change-[filter,transform]"
            />
            <div className="absolute inset-0 bg-forest/10 mix-blend-multiply" />

            {/* Reticle Overlays */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border border-white/20 rounded-full flex items-center justify-center pointer-events-none">
              <div className="w-[400px] h-[1px] bg-white/20 absolute"></div>
              <div className="w-[1px] h-[400px] bg-white/20 absolute"></div>
              <div className="w-4 h-4 border border-white/60 rounded-full"></div>
            </div>

            <div className="absolute bottom-8 right-8 bg-black/60 backdrop-blur-md px-4 py-2 border border-white/20 rounded-md">
              <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-widest">+ SYSTEM ALIGNED</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. The Architectural Ledger (Origin Story) */}
      <section className="py-32 lg:py-48 bg-background relative border-b border-border/50">
        <div className="absolute top-0 right-10 w-[1px] h-full bg-border/50"></div>
        <div className="absolute top-0 right-20 w-[1px] h-full bg-border/50 hidden md:block"></div>

        <div className="container mx-auto px-6 max-w-[1400px] relative">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn} className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            
            <div className="lg:col-span-5 lg:sticky lg:top-32">
              <h2 className="text-sm font-black text-forest uppercase tracking-[0.4em] mb-8">How We Got Here</h2>
              <div className="w-24 h-[4px] bg-forest mb-12 hidden lg:block"></div>
              
              <p className="text-3xl md:text-4xl lg:text-5xl font-black leading-[1.1] tracking-tighter text-foreground/90 mb-8">
                Groot Analytics started with a pattern I kept seeing in <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/40">private equity.</span>
              </p>
              
              <p className="text-xl md:text-2xl font-bold leading-relaxed text-foreground/60 border-l-[3px] border-emerald-400 pl-6">
                Why does every engagement start from scratch? <br/>
                <span className="text-foreground font-black mt-2 inline-block">That question became Groot Analytics.</span>
              </p>
            </div>

            <div className="lg:col-span-7">
              <p className="text-xl md:text-2xl lg:text-3xl font-bold leading-relaxed text-foreground/80 mb-10">
                A PE firm acquires a company. Day one, the operating partners need visibility — consolidated revenue, margins, cash position, operational KPIs across the portfolio. Simple ask. But the acquired company's data is a mess. Different ERPs. No data warehouse. Finance runs on Excel. Operations tracks jobs in spreadsheets someone built three years ago.
              </p>
              <p className="text-xl md:text-2xl lg:text-3xl font-bold leading-relaxed text-foreground/80 mb-10">
                So begins the six-month slog. Consultants get hired. Requirements get gathered. Platforms get evaluated. By the time the dashboards are live, the PE firm has been flying blind for two quarters. <span className="text-foreground font-black">Decisions got made on gut feel and stale data.</span>
              </p>

              <div className="w-16 h-[2px] bg-border my-16"></div>

              <p className="text-xl md:text-2xl lg:text-3xl font-bold leading-relaxed text-foreground/80 mb-10">
                We start by building the PE firm's data foundation in Microsoft Fabric — a structure designed so that when the next acquisition closes, plugging in their data takes weeks, not months. <span className="bg-foreground text-background px-2 py-0.5 inline-block -skew-x-6 shadow-[4px_4px_0_hsl(var(--forest))] leading-none">The first portfolio company is the hardest. The second is faster. By the third, it's a repeatable process.</span>
              </p>
              <p className="text-xl md:text-2xl lg:text-3xl font-bold leading-relaxed text-foreground/80 mb-10">
                We specialize in Microsoft Fabric, Power BI, and Azure because that's what most mid-market companies already have. They don't need another platform — they need someone who can make what they already own actually work.
              </p>
              <p className="text-xl md:text-2xl lg:text-3xl font-bold leading-relaxed text-foreground/80">
                Today we work beyond PE: Medical device manufacturers. Construction companies. Financial services firms. The core problem is the same: data scattered across systems that needs to be unified, governed, and useful. We bring it together on the Microsoft stack, layer in AI where it adds value, and <span className="bg-forest text-forest-foreground px-2 py-0.5 inline-block border-2 border-forest-foreground/20 leading-none">get it done faster than the typical consulting timeline.</span>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. The Expansion Bellows (Core Capabilities) */}
      <section className="bg-background pt-32 pb-40">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="mb-20">
            <h2 className="text-xs font-mono font-bold text-foreground/50 uppercase tracking-[0.4em] mb-4 border-l-2 border-forest pl-4">The Short Version</h2>
            <h3 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9]">What <br /> We Do.</h3>
            <p className="text-xl md:text-2xl font-bold text-foreground/70 mt-6 max-w-2xl">We build data platforms and analytics on the Microsoft stack.</p>
          </div>

          <div className="border-t-[3px] border-foreground flex flex-col">
            {capabilities.map((cap, index) => {
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
                  {/* Subtle hover gradient tracker */}
                  <div className={`absolute inset-0 bg-gradient-to-r from-forest/5 to-transparent opacity-0 transition-opacity duration-500 ${isActive ? 'opacity-100' : ''}`} />

                  <div className="w-full flex items-center justify-between px-6 lg:px-12 py-10 relative z-10">
                    <div className="flex items-center gap-8 lg:gap-16 w-full lg:w-2/3">
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

                  {/* Expanding the bellows body */}
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
                          <p className="text-xl text-muted-foreground font-medium leading-relaxed max-w-2xl">
                            {cap.details}
                          </p>
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

      {/* 4. The Swiss Index (The Experts) */}
      <section className="py-32 bg-muted/20 border-y-2 border-border/80">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

            <div className="lg:col-span-5">
              <h2 className="text-xs font-mono font-bold text-foreground/50 uppercase tracking-[0.4em] mb-4 border-l-2 border-forest pl-4">Who Does The Work</h2>
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] text-foreground mb-8 mt-2">
                Our <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/30 stroke-text">Team.</span>
              </h2>
              <p className="text-xl font-bold text-foreground/80 leading-relaxed max-w-md">
                Data Engineers, Data Architects, Analytics Engineers, and Power BI developers. People who've built production systems and know what works beyond the vendor demo.
              </p>
            </div>

            <div className="lg:col-span-7 flex flex-col">
              <div className="border-t-[3px] border-foreground">
                {teamIndex.map((row, idx) => (
                  <div
                    key={idx}
                    className="group border-b border-border/80 py-6 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-crosshair relative"
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    {/* Premium dark hover background */}
                    <div className="absolute inset-0 bg-[#0a1f14] opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none" />

                    <div className="flex items-center gap-6 relative z-10 flex-shrink-0">
                      <span className="text-xs font-mono font-bold text-muted-foreground group-hover:text-emerald-400 transition-colors duration-300">[{row.num}]</span>
                      <h4 className="text-2xl lg:text-3xl font-black uppercase tracking-tight text-foreground group-hover:text-white group-hover:translate-x-2 transition-all duration-500">
                        {row.category}
                      </h4>
                    </div>

                    <div className="relative z-10 flex flex-wrap gap-2 md:justify-end">
                      {row.tools.map((tool, i) => (
                        <span
                          key={i}
                          className="text-xs font-bold uppercase tracking-widest px-3 py-1.5 border transition-all duration-500 group-hover:bg-emerald-400/10 group-hover:text-emerald-400 group-hover:border-emerald-400/40 bg-muted/50 border-border/50 text-foreground/50"
                          style={{
                            transform: hoveredIndex === idx ? "translateX(0)" : "translateX(10px)",
                            opacity: hoveredIndex === idx ? 1 : 0.5,
                            transitionDelay: `${i * 0.04}s`
                          }}
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. The Geometric Anchor (Extreme CTA) */}
      <section className="relative bg-background z-[50] overflow-hidden" style={{ paddingBottom: '60px' }}>
        <div className="flex flex-col items-center pt-4 lg:pt-6 relative">

          {/* The Lens — circle is centered, bottom half clipped by section overflow:hidden */}
          <div className="relative w-[560px] h-[560px] md:w-[640px] md:h-[640px] lg:w-[720px] lg:h-[720px] flex flex-col items-center justify-center text-forest-foreground group">

            {/* GPU Background layer */}
            <div className="absolute inset-0 bg-forest rounded-full shadow-[0_0_80px_rgba(34,197,94,0.12)] group-hover:scale-[1.02] transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] transform-gpu will-change-transform z-0"></div>

            <div className="text-center relative z-10 px-8 w-full -mt-16">
              <div className="w-16 h-[2px] bg-forest-foreground/50 mx-auto mb-6"></div>
              <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-black tracking-tighter uppercase leading-[0.95] mb-6">
                Let's <br /> Talk.
              </h2>
              <p className="text-base md:text-lg font-bold max-w-sm mx-auto text-forest-foreground/80 leading-relaxed mb-8">
                Whether you're integrating an acquisition, replacing spreadsheets, or trying to get more from your Microsoft investment — we're happy to have a conversation.
              </p>

              <Link href="/contact" passHref>
                <Button variant="hero" size="lg" className="px-8 py-6 text-lg rounded-none border-4 border-forest-foreground bg-forest-foreground text-forest font-black uppercase tracking-[0.2em] shadow-none hover:bg-transparent hover:text-forest-foreground transition-all duration-300">
                  Book a Conversation
                  <ArrowRight className="ml-3 w-5 h-5" />
                </Button>
              </Link>
            </div>

            {/* Decorative elements */}
            <div className="absolute left-8 md:left-14 top-[30%] text-forest-foreground/10 font-mono text-[4rem] lg:text-[6rem] font-black pointer-events-none select-none rotate-90 origin-left z-0">
              ACT
            </div>
            <div className="absolute right-8 md:right-14 top-[30%] text-forest-foreground/10 font-mono text-[4rem] lg:text-[6rem] font-black pointer-events-none select-none -rotate-90 origin-right z-0">
              NOW
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}
