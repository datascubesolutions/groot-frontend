"use client";

import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { 
  CheckCircle2, 
  MapPin, 
  Briefcase, 
  ArrowRight,
  MonitorSmartphone,
  Sparkles,
  GraduationCap,
  HeartHandshake,
  Workflow,
  Cpu,
} from "lucide-react";
import Image from "next/image";

export default function CareersPage() {
  const jobs = [
    {
      title: "Azure Data Engineer",
      experience: "3+ Years",
      type: "Full-Time",
      location: "Remote",
      desc: "Building data pipelines and infrastructure on Azure and Microsoft Fabric. Data Factory, Lakehouse implementation, source system integrations.",
      subject: "Application: Azure Data Engineer"
    },
    {
      title: "Fabric Data Engineer",
      experience: "2+ Years",
      type: "Full-Time",
      location: "Remote",
      desc: "Microsoft Fabric implementations — Lakehouse, notebooks, pipelines, real-time analytics. Experience with Fabric, Databricks, or Spark.",
      subject: "Application: Fabric Data Engineer"
    },
    {
      title: "Analytics Engineer",
      experience: "3+ Years",
      type: "Full-Time",
      location: "Remote",
      desc: "The layer between raw data and business consumption. Gold layer datasets, transformation logic, data quality, semantic model design.",
      subject: "Application: Analytics Engineer"
    },
    {
      title: "Power BI Developer",
      experience: "3+ Years",
      type: "Full-Time",
      location: "Remote",
      desc: "Semantic models, DAX, reports that executives actually use. Strong DAX and data modeling fundamentals. Experience building semantic models.",
      subject: "Application: Power BI Developer"
    }
  ];

  const benefits = [
    { icon: HeartHandshake, title: "Competitive Comp", desc: "Top-tier base salary with performance-based bonuses tied directly to firm success." },
    { icon: MonitorSmartphone, title: "Remote Flexibility", desc: "Work from anywhere. We care about the output and client satisfaction, not your desk location." },
    { icon: GraduationCap, title: "Professional Growth", desc: "Fully funded certifications, training budgets, and continuous learning on the newest Microsoft stack." },
    { icon: Sparkles, title: "No Burnout Culture", desc: "Deadlines are real, but we respect your time. We don't celebrate 60-hour work weeks." }
  ];

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  return (
    <LazyMotion features={domAnimation} strict>
      <main className="min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary relative overflow-hidden font-sans">
        
        {/* Subtle grid background for architectural feel */}
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

        {/* --- 1. Hero Section --- */}
        <div className="relative z-10 pt-32 pb-32 border-b border-border/50 bg-card/30">
          <div className="container mx-auto container-padding">
            <Breadcrumb
              items={[
                { label: "About Us", href: "/about" },
                { label: "Careers", href: "/about/careers" }
              ]}
            />

            <div className="mt-16 lg:mt-24 grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
              
              <m.div 
                initial="initial"
                animate="animate"
                variants={staggerContainer}
                className="max-w-2xl"
              >
                <m.div variants={fadeIn} className="inline-flex items-center gap-3 mb-10">
                  <span className="w-12 h-px bg-primary/60" />
                  <span className="text-primary font-bold uppercase tracking-[0.2em] text-sm">Join The Team</span>
                </m.div>
                
                <m.h1 variants={fadeIn} className="text-6xl md:text-7xl lg:text-[6rem] font-black tracking-tighter mb-8 leading-[1.05] text-foreground text-balance">
                  Do the best work <br className="hidden md:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-forest relative whitespace-nowrap">
                    of your life.
                    {/* Hand-drawn style decorative swoosh */}
                    <svg className="absolute -bottom-2 left-0 w-full h-4 text-primary opacity-30" viewBox="0 0 100 10" preserveAspectRatio="none">
                      <m.path 
                        d="M0 5 Q 50 10 100 5" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="3"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                      />
                    </svg>
                  </span>
                </m.h1>
                
                <m.p variants={fadeIn} className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-medium max-w-xl text-balance">
                  We're looking for driven Data Engineers, Analytics Engineers, and Power BI Developers who obsess over solving real business problems.
                </m.p>
              </m.div>

              {/* Right Side Visual Component */}
              <m.div 
                initial={{ opacity: 0, scale: 0.95, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                className="relative w-full aspect-[4/3] lg:aspect-[4/5] xl:aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl group"
              >
                {/* Integration overlays */}
                <div className="absolute inset-0 bg-primary/10 mix-blend-color z-10 transition-colors duration-700 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 pointer-events-none" />
                
                <Image 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop"
                  alt="Engineering team collaborating"
                  fill
                  priority
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-1000"
                />
                
                {/* Floating Glass Detail */}
                <div className="absolute bottom-8 left-8 right-8 p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 z-20 shadow-xl flex items-center justify-between">
                  <div>
                    <p className="text-white font-bold text-lg leading-tight tracking-tight">Elite Engineering Culture</p>
                    <p className="text-white/80 font-medium text-sm mt-1">Join 40+ senior architects building the future.</p>
                  </div>
                  <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center shrink-0 bg-white/5 backdrop-blur-sm shadow-inner">
                    <Sparkles className="text-white w-5 h-5" />
                  </div>
                </div>
              </m.div>

            </div>
          </div>
        </div>

        {/* --- 2. Culture Grid (Who succeeds here?) --- */}
        <section className="py-32 md:py-48 bg-background relative overflow-hidden">
          {/* Ambient lighting */}
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,hsl(152,76%,96%)_0%,transparent_60%)] pointer-events-none" />

          <div className="container mx-auto container-padding relative z-10">
            <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
              
              <div className="lg:col-span-5">
                <m.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-8 text-foreground leading-[1.05]"
                >
                  Who succeeds here?
                </m.h2>
                <div className="space-y-6 text-xl text-muted-foreground font-medium leading-relaxed max-w-lg">
                  <m.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}>
                    We're looking for people with an <strong className="text-foreground font-black">ownership mindset</strong>. The kind who dig into the client's actual problem, not just the ticket they were handed.
                  </m.p>
                  <m.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="h-px w-16 bg-primary/40 block my-8 origin-left" />
                  <m.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.4 }}>
                    If you see a gap and fill it without being asked, if you care whether the solution works for the business, and if you'd rather understand "why" than just ship "what"—you'll fit right in.
                  </m.p>
                </div>
              </div>
              
              <div className="lg:col-span-7 grid md:grid-cols-2 gap-8 relative">
                {/* Visual Connector Line */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:block z-0 mix-blend-multiply opacity-50">
                  <svg width="300" height="150" fill="none" strokeDasharray="6 6" strokeWidth="2" stroke="hsl(var(--primary))">
                    <path d="M 0,150 C 150,150 150,0 300,0" />
                  </svg>
                </div>

                {/* Culture Card 1 */}
                <m.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6 }}
                  className="p-10 lg:p-12 rounded-[2.5rem] bg-card border border-border shadow-[0_10px_40px_-20px_rgba(0,0,0,0.05)] relative z-10 hover:-translate-y-2 transition-transform duration-500 overflow-hidden group"
                >
                  <div className="w-16 h-16 rounded-2xl bg-muted text-primary flex items-center justify-center mb-8 border border-border/50 group-hover:bg-primary/5 group-hover:scale-110 transition-all duration-500">
                    <Workflow size={32} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground tracking-tight">Partnership, Not Tickets</h3>
                  <p className="text-muted-foreground font-medium leading-relaxed">
                    You work in direct partnership with clients. No layers of PMs translating requirements.
                  </p>
                </m.div>

                {/* Culture Card 2 */}
                <m.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="p-10 lg:p-12 rounded-[2.5rem] bg-card border border-border shadow-[0_10px_40px_-20px_rgba(0,0,0,0.05)] relative z-10 hover:-translate-y-2 transition-transform duration-500 overflow-hidden group md:translate-y-16"
                >
                  <div className="w-16 h-16 rounded-2xl bg-muted text-primary flex items-center justify-center mb-8 border border-border/50 group-hover:bg-primary/5 group-hover:scale-110 transition-all duration-500">
                    <Cpu size={32} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground tracking-tight">Flat & Remote</h3>
                  <p className="text-muted-foreground font-medium leading-relaxed">
                    We operate remote-first with direct access to senior team members and architects.
                  </p>
                </m.div>
              </div>

            </div>
          </div>
        </section>

        {/* --- 3. Open Positions (Complex Asymmetric Sticky Layout) --- */}
        <section className="py-32 md:py-48 bg-background relative border-y border-border/50 overflow-hidden">
          {/* Deep Complex Ambient Background */}
          <div className="absolute top-0 right-0 w-[1200px] h-[1200px] bg-[radial-gradient(ellipse_at_top_right,hsl(var(--primary)/0.08),transparent_60%)] pointer-events-none" />
          <div className="absolute bottom-0 left-[-20%] w-[1000px] h-[1000px] bg-[radial-gradient(circle_at_bottom_left,hsl(var(--forest)/0.05),transparent_60%)] pointer-events-none" />
          
          <div className="container mx-auto container-padding max-w-[90rem] relative z-10">
            <div className="grid lg:grid-cols-12 lg:gap-20 items-start relative">
              
              {/* Sticky Complex Left Column */}
              <div className="lg:col-span-5 lg:sticky top-40 mb-16 lg:mb-0 hidden lg:flex flex-col">
                <div className="relative p-12 rounded-[3rem] bg-card border border-border shadow-2xl overflow-hidden aspect-square flex flex-col justify-center">
                  {/* Internal rotating complexity */}
                  <div className="absolute inset-0 z-0 opacity-10 flex items-center justify-center">
                    <div className="w-[150%] h-[150%] border border-primary rounded-full animate-[spin_60s_linear_infinite]" />
                    <div className="absolute w-[120%] h-[120%] border border-foreground/50 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
                    <div className="absolute w-[90%] h-[90%] border border-dashed border-primary/50 rounded-full animate-[spin_30s_linear_infinite]" />
                  </div>

                  <div className="relative z-10">
                    <div className="inline-flex items-center gap-3 mb-8">
                      <span className="w-10 h-px bg-primary" />
                      <span className="text-primary font-bold uppercase tracking-[0.2em] text-sm">Now Hiring</span>
                    </div>
                    <h2 className="text-5xl lg:text-7xl font-black tracking-tighter mb-8 text-foreground leading-[1] text-balance drop-shadow-sm">
                      Open <br/>
                      <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary via-forest to-foreground">Positions.</span>
                    </h2>
                    <p className="text-xl text-muted-foreground font-medium text-balance leading-relaxed mb-10">
                      Join an elite engineering culture building the world's most robust data platforms on the Microsoft stack.
                    </p>
                    
                    <div className="flex items-center gap-6">
                      <div className="text-foreground">
                        <span className="text-5xl font-black">{jobs.length}</span>
                      </div>
                      <div className="h-10 w-px bg-border flex-shrink-0" />
                      <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Active Roles <br/> Available Now</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Scrollable Complex Right Column */}
              <div className="lg:col-span-7 flex flex-col gap-8 relative z-10">
                {/* Mobile Header (Hidden on LG) */}
                <div className="lg:hidden mb-12 text-center">
                  <h2 className="text-5xl font-black tracking-tighter mb-4 text-foreground">Open Positions</h2>
                  <p className="text-lg text-muted-foreground font-medium">Join an elite engineering culture.</p>
                </div>

                {jobs.map((job, idx) => (
                  <a 
                    key={idx} 
                    href={`mailto:careers@grootanalytics.com?subject=${job.subject}`}
                    className="group block relative p-8 md:p-12 rounded-[2.5rem] bg-card/60 backdrop-blur-md border border-border shadow-lg hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] transition-all duration-700 overflow-hidden hover:-translate-x-2 lg:hover:-translate-x-4 hover:border-primary/60 hover:bg-card/80"
                  >
                    {/* Complex internal glow and micro geometry */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-forest/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                    <div className="absolute -right-32 -top-32 w-96 h-96 bg-gradient-to-br from-primary/30 to-mint/20 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
                    <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-gradient-to-t from-forest/10 to-transparent rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />

                    <div className="flex flex-col xl:flex-row xl:items-start justify-between gap-8 relative z-10">
                      
                      <div className="flex-1 w-full relative">
                        {/* Highly visible layered pills */}
                        <div className="flex flex-wrap items-center gap-2 mb-8">
                          <span className="px-5 py-2 rounded-xl bg-forest/5 border border-forest/10 text-forest tracking-[0.1em] uppercase text-xs font-black shadow-inner shadow-black/5">{job.type}</span>
                          <span className="px-5 py-2 rounded-xl bg-background border border-border shadow-sm text-foreground tracking-[0.1em] uppercase text-xs font-bold">{job.location}</span>
                          <span className="px-5 py-2 rounded-xl bg-background border border-border shadow-sm text-foreground tracking-[0.1em] uppercase text-xs font-bold flex items-center gap-2">
                             <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" /> {job.experience}
                          </span>
                        </div>
                        
                        <h3 className="text-3xl md:text-5xl font-black mb-6 text-foreground group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-forest transition-all duration-500 tracking-tight leading-[1.05]">
                          {job.title}
                        </h3>
                        
                        <p className="text-muted-foreground font-medium text-lg leading-relaxed max-w-2xl relative z-10">
                          {job.desc}
                        </p>
                      </div>
                      
                      {/* Geometric Action Block */}
                      <div className="relative z-10 shrink-0 mt-4 xl:mt-0 flex flex-row xl:flex-col items-center xl:items-end justify-between xl:justify-start w-full xl:w-auto border-t xl:border-t-0 xl:border-l border-border/50 pt-6 xl:pt-0 xl:pl-8">
                        <span className="text-sm font-bold text-muted-foreground uppercase tracking-widest group-hover:text-primary transition-colors xl:mb-12">Apply Now</span>
                        
                        <div className="flex items-center justify-center w-16 h-16 rounded-[1.5rem] bg-background border border-border text-foreground group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-md group-hover:shadow-[0_10px_30px_-5px_hsl(var(--primary)/0.4)] group-hover:scale-105 group-hover:rotate-12">
                          <ArrowRight size={24} strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>

                    </div>
                  </a>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* --- 4. Benefits Grid (Meticulously Spaced) --- */}
        <section className="py-32 md:py-48 bg-background relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="container mx-auto container-padding">
            <div className="text-center mb-20 max-w-3xl mx-auto align-middle">
               <div className="inline-flex items-center gap-3 mb-8 mx-auto">
                <span className="text-primary font-bold uppercase tracking-[0.2em] text-sm">Our Commitments</span>
                <span className="w-12 h-px bg-primary/60" />
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-6 text-foreground">What We Offer</h2>
              <p className="text-xl text-muted-foreground font-medium">Equipping our team to deliver the highest tier of engineering without the burnout.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:gap-12 gap-8 max-w-5xl mx-auto">
              {benefits.map((benefit, idx) => (
                <m.div 
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  key={idx} 
                  className="p-10 lg:p-14 rounded-[2.5rem] bg-card border border-border shadow-[0_10px_40px_-20px_rgba(0,0,0,0.05)] hover:-translate-y-1 transition-transform duration-500 flex flex-col items-center text-center group"
                >
                  <div className="w-20 h-20 rounded-2xl bg-background border border-border/80 flex items-center justify-center text-primary mb-8 shadow-sm group-hover:scale-110 group-hover:bg-primary/5 group-hover:border-primary/30 transition-all duration-500">
                    <benefit.icon size={36} strokeWidth={1.5} />
                  </div>
                  <h4 className="font-bold text-2xl lg:text-3xl mb-4 text-foreground tracking-tight">{benefit.title}</h4>
                  <p className="text-muted-foreground font-medium leading-relaxed text-lg">{benefit.desc}</p>
                </m.div>
              ))}
            </div>
          </div>
        </section>

        {/* --- 5. High-Contrast Dark Block (How To Apply) --- */}
        <section className="py-32 md:py-48 bg-forest text-white relative border-t-8 border-primary overflow-hidden">
          {/* Elegant ambient glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--mint)/0.15)_0%,transparent_60%)] pointer-events-none" />
          
          <div className="container mx-auto container-padding max-w-6xl relative z-10">
            <div className="flex flex-col lg:flex-row gap-20 items-center justify-between">
              
              <div className="flex-1 text-center lg:text-left">
                <m.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-5xl md:text-7xl font-black tracking-tighter mb-8 text-white drop-shadow-sm leading-[1.05]"
                >
                  Ready to make <br /> an impact?
                </m.h2>
                <m.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-2xl text-mint-light/80 mb-12 font-medium"
                >
                  Email us at <br className="hidden sm:block" />
                  <a href="mailto:careers@grootanalytics.com" className="text-white font-bold border-b-2 border-primary/50 hover:border-primary hover:text-primary transition-colors pb-1 mt-4 inline-block">careers@grootanalytics.com</a>
                </m.p>
                <m.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <Button asChild size="xl" variant="hero" className="rounded-full px-12 h-20 text-xl font-bold shadow-[0_0_40px_-5px_hsl(var(--primary)/0.4)] hover:shadow-[0_0_60px_-5px_hsl(var(--primary)/0.6)] group">
                    <a href="mailto:careers@grootanalytics.com">
                      Apply Now <ArrowRight className="ml-4 w-6 h-6 group-hover:translate-x-2 transition-transform" strokeWidth={2.5} />
                    </a>
                  </Button>
                </m.div>

                {/* Relatable image filling the blank space */}
                <m.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="mt-20 hidden lg:block relative w-full max-w-sm aspect-[4/3] rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] group/img"
                >
                  <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 transition-colors duration-700 pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 opacity-80 pointer-events-none" />
                  <Image
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop"
                    alt="Team mapping out architecture"
                    fill
                    className="object-cover object-center group-hover/img:scale-110 transition-transform duration-1000"
                  />
                  {/* Subtle caption */}
                  <div className="absolute bottom-6 left-6 right-6 z-20 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 shrink-0">
                      <Sparkles className="w-4 h-4 text-mint-light" />
                    </div>
                    <p className="text-white/90 text-sm font-medium leading-tight">Build systems that matter.</p>
                  </div>
                </m.div>
              </div>
              
              <div className="flex-1 w-full max-w-xl">
                <m.div 
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="bg-black/20 p-10 md:p-14 rounded-[3rem] border border-white/10 shadow-2xl backdrop-blur-md relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-40 h-40 bg-[radial-gradient(circle_at_top_right,hsl(var(--mint)/0.4),transparent_70%)] opacity-30 pointer-events-none" />
                  
                  <h3 className="font-bold mb-10 text-mint-light uppercase tracking-[0.2em] text-sm">Please Include in Email:</h3>
                  <ul className="space-y-10">
                    <li className="flex items-start gap-6 relative">
                      <div className="mt-1 text-primary shrink-0 relative z-10 bg-black/20 rounded-full">
                        <CheckCircle2 size={28} strokeWidth={2.5} />
                      </div>
                      <div>
                        <p className="font-bold text-2xl text-white tracking-tight mb-2">Resume or LinkedIn</p>
                        <p className="text-mint-light/80 font-medium text-lg leading-relaxed">So we can understand your technical background and experience.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-6 relative">
                      <div className="mt-1 text-primary shrink-0 relative z-10 bg-black/20 rounded-full">
                        <CheckCircle2 size={28} strokeWidth={2.5} />
                      </div>
                      <div>
                        <p className="font-bold text-2xl text-white tracking-tight mb-2">Why Groot?</p>
                        <p className="text-mint-light/80 font-medium text-lg leading-relaxed">A brief few sentences on what caught your eye about our approach.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-6 relative">
                      <div className="mt-1 text-primary shrink-0 relative z-10 bg-black/20 rounded-full">
                        <CheckCircle2 size={28} strokeWidth={2.5} />
                      </div>
                      <div>
                        <p className="font-bold text-2xl text-white tracking-tight mb-2">An Engineering Project</p>
                        <p className="text-mint-light/80 font-medium text-lg leading-relaxed">Briefly describe the most complex data challenge you solved and how you architected it.</p>
                      </div>
                    </li>
                  </ul>
                </m.div>
              </div>

            </div>
          </div>
        </section>

      </main>
    </LazyMotion>
  );
}
