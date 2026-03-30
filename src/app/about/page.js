"use client";

import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { 
  Database, 
  Network, 
  Target, 
  Zap, 
  Cpu,
  ShieldCheck,
  ArrowRight,
  Workflow,
  BarChart4,
  ArrowRightLeft,
  ChevronRight
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function AboutPage() {
  const [hoveredCapability, setHoveredCapability] = useState(null);

  const capabilities = [
    {
      icon: Database,
      title: "Data Foundations",
      desc: "Microsoft Fabric implementations, Lakehouse architecture, robust pipelines, and enterprise governance with Microsoft Purview."
    },
    {
      icon: BarChart4,
      title: "Analytics & BI",
      desc: "Sophisticated Power BI semantic models, high-performance executive dashboards, and enabling true self-service for business users."
    },
    {
      icon: Workflow,
      title: "System Integrations",
      desc: "Reliably connecting disparate ERPs, CRMs, field service platforms, and bespoke SaaS applications into your unified data platform."
    },
    {
      icon: ArrowRightLeft,
      title: "Modern Migrations",
      desc: "Seamlessly moving from legacy SQL Server, Azure Analysis Services, or Synapse to Microsoft Fabric without disrupting operations."
    }
  ];

  return (
    <LazyMotion features={domAnimation} strict>
      <main className="min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary relative overflow-hidden font-sans">
        
        {/* Subtle base grid */}
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

        {/* --- 1. Immersive Abstract Hero --- */}
        <section className="relative min-h-[90vh] flex items-center pt-24 pb-32 border-b border-border/50 bg-card overflow-hidden">
          {/* Abstract Geometric Graphics / Deep aesthetic background */}
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 right-0 w-full lg:w-[65%] h-full opacity-30 lg:opacity-60 [mask-image:linear-gradient(to_left,black,transparent)] transition-all duration-1000">
              <Image 
                src="https://images.unsplash.com/photo-1618044733300-9472054094ee?q=80&w=2671&auto=format&fit=crop" 
                alt="Abstract Architectural Data Structure"
                fill
                priority
                className="object-cover object-center mix-blend-multiply"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-card via-card/90 to-transparent" />
          </div>

          <div className="container mx-auto container-padding relative z-10">
            <Breadcrumb items={[{ label: "About Us", href: "/about" }]} />

            <div className="mt-16 max-w-4xl space-y-8">
              <m.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="inline-flex items-center gap-3"
              >
                <span className="w-12 h-px bg-primary/60" />
                <span className="text-primary font-bold uppercase tracking-[0.2em] text-sm">Our Mission</span>
              </m.div>

              <m.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="text-5xl md:text-7xl lg:text-[6rem] font-black tracking-tighter text-foreground leading-[1.05] drop-shadow-sm text-balance"
              >
                We build data platforms <br className="hidden lg:block"/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-forest relative">
                   that actually work.
                </span>
              </m.h1>

              <m.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-medium text-balance max-w-2xl"
              >
                Microsoft Fabric. Power BI. Azure. We help modern enterprises unify scattered data, establish absolute governance, and drive decisions—without the bloated consulting timelines.
              </m.p>
            </div>
          </div>
        </section>

        {/* --- Metrics Float --- */}
        <section className="relative z-20 -mt-16 container container-padding mx-auto">
          <m.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-border/60 border border-border/80 bg-card/90 backdrop-blur-2xl rounded-[2.5rem] shadow-[0_20px_50px_-20px_rgba(0,0,0,0.05)] overflow-hidden"
          >
            {[
              { label: "Consulting Bloat", value: "Zero" },
              { label: "Microsoft Native", value: "100%" },
              { label: "Faster Delivery", value: "3x" },
              { label: "Focus", value: "Data & AI" }
            ].map((stat, i) => (
              <div key={i} className="p-10 flex flex-col justify-center items-center text-center group hover:bg-muted/30 transition-colors duration-500">
                <span className="text-5xl lg:text-6xl font-black tracking-tighter text-foreground mb-3 group-hover:scale-105 transition-transform duration-500">{stat.value}</span>
                <span className="text-xs font-bold text-primary uppercase tracking-[0.2em]">{stat.label}</span>
              </div>
            ))}
          </m.div>
        </section>

        {/* --- 2. Editorial Sticky-Scroll Story (Retaining Original Content) --- */}
        <section className="relative py-32 lg:py-48 bg-background">
          {/* Subtle background abstract drawing */}
          <div className="absolute top-40 right-10 opacity-5 pointer-events-none rotate-12">
            <Network size={800} strokeWidth={0.5} />
          </div>

          <div className="container mx-auto container-padding">
            <div className="grid lg:grid-cols-12 gap-16 lg:gap-8 items-start relative">
              
              {/* Sticky Left Column */}
              <div className="lg:col-span-5 lg:sticky top-32 flex flex-col justify-center">
                 <div className="inline-flex items-center gap-3 mb-6">
                  <div className="h-px w-8 bg-primary/40 block"></div>
                  <span className="text-primary font-bold uppercase tracking-[0.25em] text-xs">The Background</span>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-foreground mb-8 leading-[1.05]">
                  The Origin <span className="text-gradient">Story</span>
                </h2>
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-medium">
                  Groot Analytics was born from frustration with the status quo. Data was always a mess, and the traditional path to fixing it took too long. We decided to change the paradigm.
                </p>
              </div>

              {/* Scrolling Right Column (The Original 4 Bento Blocks reformatted brilliantly) */}
              <div className="lg:col-span-6 lg:col-start-7 space-y-12 md:space-y-20 relative z-10">
                
                {/* Block 1 */}
                <m.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                  className="bg-card p-10 md:p-12 rounded-[2.5rem] border border-border/80 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] relative group hover:-translate-y-2 transition-transform duration-500 overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-40 h-40 bg-[radial-gradient(circle_at_top_right,hsl(var(--mint)/0.3),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                  <div className="w-16 h-16 rounded-2xl bg-muted text-primary flex items-center justify-center mb-8 shadow-sm relative z-10 border border-border/50 group-hover:bg-primary/5 transition-colors duration-500">
                    <Network size={32} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-3xl font-bold mb-6 text-foreground tracking-tight relative z-10">The Familiar Problem</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed relative z-10 font-medium">
                    Executives need visibility—consolidated revenue, margins, operational KPIs. But data is trapped in isolated ERPs and sprawling Excel sheets. The standard consulting answer is a six-month slog of requirements gathering. By then, leaders are flying blind.
                  </p>
                </m.div>

                {/* Block 2 */}
                <m.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                  className="bg-card p-10 md:p-12 rounded-[2.5rem] border border-border/80 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] relative group hover:-translate-y-2 transition-transform duration-500 overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-40 h-40 bg-[radial-gradient(circle_at_top_right,hsl(var(--mint)/0.3),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                  <div className="w-16 h-16 rounded-2xl bg-muted text-primary flex items-center justify-center mb-8 shadow-sm relative z-10 border border-border/50 group-hover:bg-primary/5 transition-colors duration-500">
                    <Zap size={32} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-3xl font-bold mb-6 text-foreground tracking-tight relative z-10">Our Approach</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed relative z-10 font-medium">
                    We lay down a Microsoft Fabric foundation in weeks, not months. The first integration is the hardest; by the third, it's a completely repeatable engine.
                  </p>
                </m.div>

                {/* Block 3 */}
                <m.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                  className="bg-card p-10 md:p-12 rounded-[2.5rem] border border-border/80 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] relative group hover:-translate-y-2 transition-transform duration-500 overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-40 h-40 bg-[radial-gradient(circle_at_top_right,hsl(var(--mint)/0.3),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                  <div className="w-16 h-16 rounded-2xl bg-muted text-primary flex items-center justify-center mb-8 shadow-sm relative z-10 border border-border/50 group-hover:bg-primary/5 transition-colors duration-500">
                    <Cpu size={32} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-3xl font-bold mb-6 text-foreground tracking-tight relative z-10">Why Microsoft?</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed relative z-10 font-medium">
                    Most enterprises already own Microsoft 365, Power BI, and Azure. They don't need a new platform—they need experts to unlock what they already have.
                  </p>
                </m.div>

                {/* Block 4 */}
                <m.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                  className="bg-card p-10 md:p-12 rounded-[2.5rem] border border-border/80 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] relative group hover:-translate-y-2 transition-transform duration-500 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,hsl(168,76%,96%)_0%,transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                  <div className="w-16 h-16 rounded-2xl bg-muted text-primary flex items-center justify-center mb-8 shadow-sm relative z-10 border border-border/50 group-hover:bg-primary/5 transition-colors duration-500">
                    <Target size={32} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-3xl font-bold mb-6 text-foreground tracking-tight relative z-10">Built for Business Value</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed relative z-10 font-medium">
                    We don't build tech for tech's sake. Every pipeline, model, and dashboard is tied directly to a business outcome: reducing manual reporting hours, uncovering margin leakage, or accelerating post-merger integration.
                  </p>
                </m.div>

              </div>
            </div>
          </div>
        </section>

        {/* --- 3. Interactive Hover-Reveal Capabilities (Original Content) --- */}
        <section className="py-32 bg-muted/30 border-y border-border/60 relative overflow-hidden">
          <div className="absolute left-[-10%] bottom-[-10%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="container mx-auto container-padding max-w-7xl relative z-10">
            <div className="mb-20">
               <div className="inline-flex items-center gap-3 mb-6">
                <span className="text-primary font-bold uppercase tracking-[0.25em] text-xs">Ecosystem Expertise</span>
                <div className="h-px w-24 bg-primary/40 block"></div>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-foreground text-balance mb-6">
                Core Capabilities
              </h2>
              <p className="text-xl text-muted-foreground font-medium leading-relaxed text-balance">
                End-to-end data platform implementation across the entire Microsoft ecosystem.
              </p>
            </div>
            
            <div className="flex flex-col border-t border-border/60">
              {capabilities.map((item, idx) => {
                const isHovered = hoveredCapability === idx;
                return (
                  <div 
                    key={idx} 
                    className="group border-b border-border/60 relative overflow-hidden cursor-pointer"
                    onMouseEnter={() => setHoveredCapability(idx)}
                    onMouseLeave={() => setHoveredCapability(null)}
                  >
                    {/* Hover backdrop fill */}
                    <div 
                      className={`absolute inset-0 bg-primary/5 transition-transform duration-500 ease-out origin-left ${isHovered ? 'scale-x-100' : 'scale-x-0'}`} 
                    />

                    <div className="py-10 px-4 md:px-8 flex flex-col md:flex-row md:items-center justify-between gap-8 relative z-10">
                      <div className="flex items-center gap-8 md:w-5/12">
                        <div className={`transition-all duration-500 ${isHovered ? 'text-primary scale-110' : 'text-muted-foreground'}`}>
                          <item.icon size={40} strokeWidth={1.5} />
                        </div>
                        <h3 className={`text-3xl font-bold tracking-tight transition-colors duration-500 ${isHovered ? 'text-primary' : 'text-foreground'}`}>
                          {item.title}
                        </h3>
                      </div>
                      
                      <div className="md:w-6/12 flex items-center gap-6">
                        <p className={`text-lg transition-colors duration-500 ${isHovered ? 'text-foreground' : 'text-muted-foreground'} leading-relaxed font-medium`}>
                          {item.desc}
                        </p>
                      </div>

                      <div className="hidden md:flex justify-end w-1/12 text-muted-foreground">
                         <ChevronRight size={32} className={`transition-transform duration-500 ${isHovered ? 'translate-x-2 text-primary opacity-100' : 'opacity-0 -translate-x-4'}`} strokeWidth={2} />
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* --- 4. High-Contrast Authority Block (The Experts) - Original Content --- */}
        <section className="py-32 bg-forest text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(var(--mint)/0.15),transparent_50%)] pointer-events-none" />
          
          {/* Faint network abstraction overlay to give it a tech/data feel */}
           <div className="absolute opacity-10 top-0 left-0 w-full h-full pointer-events-none">
             <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="dotGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="2" fill="currentColor"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#dotGrid)" color="white"/>
             </svg>
          </div>

          <div className="container mx-auto container-padding max-w-7xl relative z-10">
            <div className="grid lg:grid-cols-5 gap-16 lg:gap-20 items-center">
              
              <div className="lg:col-span-2">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-8 text-white leading-[1.05]">
                  The Experts Behind the Platform
                </h2>
                <p className="text-xl text-mint-light/80 leading-relaxed font-normal mb-10 text-balance">
                  We are Data Engineers, Architects, Analytics Engineers, and Power BI Specialists. We've built production systems that run Fortune 500 operations. We know what actually works beyond the vendor demos.
                </p>
                <ul className="space-y-6">
                  <li className="flex items-center gap-4 text-white text-lg font-medium">
                     <div className="w-12 h-12 rounded-full bg-primary/20 border border-primary/50 flex items-center justify-center shrink-0">
                      <ShieldCheck size={24} className="text-primary" />
                    </div>
                    <span>Direct access to senior engineers.</span>
                  </li>
                  <li className="flex items-center gap-4 text-white text-lg font-medium">
                    <div className="w-12 h-12 rounded-full bg-primary/20 border border-primary/50 flex items-center justify-center shrink-0">
                      <ShieldCheck size={24} className="text-primary" />
                    </div>
                    <span>Battle-tested across PE and healthcare.</span>
                  </li>
                </ul>
              </div>

              <div className="lg:col-span-3 grid sm:grid-cols-2 gap-6 items-start">
                {[
                  { title: "Microsoft Fabric & Azure", tools: ["Lakehouse", "Data Factory", "Synapse", "Purview"] },
                  { title: "Power BI", tools: ["Semantic Modeling", "DAX", "RLS", "Performance Tuning"] },
                  { title: "Data Engineering", tools: ["Python", "SQL", "PySpark", "APIs"] },
                  { title: "Industries", tools: ["Private Equity", "Medical Device", "Construction", "Financial"] },
                ].map((group, idx) => (
                  <m.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    key={idx} 
                    className="p-8 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors duration-300 shadow-xl"
                  >
                    <h4 className="font-bold text-white mb-6 tracking-wide text-lg">{group.title}</h4>
                    <div className="flex flex-wrap gap-2.5">
                      {group.tools.map((tool, i) => (
                        <span key={i} className="px-4 py-2 text-sm rounded-xl bg-black/20 border border-white/10 text-mint-light/80 font-medium shadow-sm transition-colors hover:bg-primary/20 hover:text-white">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </m.div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* --- 5. Clean Typographic CTA (Original Content) --- */}
        <section className="relative py-32 md:py-48 overflow-hidden bg-background">
          {/* A beautiful glowing orb in the center */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="container mx-auto container-padding relative z-10">
            <div className="flex flex-col items-center justify-center text-center">
              <m.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto"
              >
                <div className="inline-flex items-center justify-center mb-8">
                  <span className="px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary font-bold tracking-[0.2em] uppercase text-xs shadow-sm">
                    Ready to Scale?
                  </span>
                </div>
                
                <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-foreground tracking-tighter mb-8 leading-[1.05]">
                  Ready to stop struggling <br className="hidden md:block" />
                  with your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-forest">data?</span>
                </h2>
                
                <p className="text-xl md:text-2xl text-muted-foreground font-medium mb-12 max-w-3xl mx-auto leading-relaxed text-balance">
                  Whether you're integrating an acquisition, replacing spreadsheets, or maximizing your Microsoft investment—let's build something that works.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <Link href="/contact">
                    <Button variant="hero" size="xl" className="h-16 px-10 text-lg font-bold rounded-full shadow-[0_0_40px_-5px_hsl(var(--primary)/0.3)] hover:shadow-[0_0_60px_-5px_hsl(var(--primary)/0.5)] transition-all group">
                      Book a Consultation
                      <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </m.div>
            </div>
          </div>
        </section>

      </main>
    </LazyMotion>
  );
}
