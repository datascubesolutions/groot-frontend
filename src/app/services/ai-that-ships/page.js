// @ts-nocheck
"use client";

import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import {
  AlertCircle,
  AlertTriangle,
  CheckCircle2,
  ChevronRight,
  Cpu,
  Database,
  Lock,
  ShieldCheck,
  UserCheck
} from "lucide-react";
import Link from "next/link";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

export default function AIThatShipsPage() {
  return (
    <main className="min-h-screen bg-background pt-20 selection:bg-primary/30">

      {/* Fixed Blueprint Grid */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-40">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--foreground)/0.06)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--foreground)/0.06)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* ─── HERO ────────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-4 pb-10 lg:pt-8 flex lg:min-h-[calc(100vh-80px)] items-center">
        <div className="container mx-auto px-6 relative z-10 max-w-[1400px]">

          <div className="mb-6">
            <Breadcrumb
              items={[
                { label: "Services", href: "/services" },
                { label: "AI That Ships", href: "/services/ai-that-ships", active: true },
              ]}
            />
          </div>

          <div className="border-[4px] border-foreground bg-card shadow-[15px_15px_0px_0px_hsl(var(--primary)/0.15)] overflow-hidden relative">
            <div className="absolute top-0 right-0 p-4 border-b-[4px] border-l-[4px] border-foreground bg-primary/10">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">AI.PROD.01</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Left copy */}
              <motion.div
                initial="hidden" animate="visible" variants={staggerContainer}
                className="lg:col-span-7 p-8 md:p-16 flex flex-col justify-center relative z-10 bg-background/80 backdrop-blur-sm"
              >
                <motion.div variants={fadeIn} className="mb-6 inline-block">
                  <div className="px-3 py-1 border-[2px] border-foreground text-[10px] sm:text-xs font-black uppercase tracking-widest inline-flex items-center gap-2">
                    <span className="h-2 w-2 bg-primary rounded-full animate-pulse" />
                    Production AI — Not Demos
                  </div>
                </motion.div>

                <motion.h1
                  variants={fadeIn}
                  className="mb-6 text-[2.5rem] font-black uppercase leading-[0.85] tracking-tighter text-foreground sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5rem]"
                >
                  <span className="text-primary block mb-2">AI That</span>
                  Actually Ships.
                  <span className="block text-[2rem] sm:text-[2.5rem] lg:text-[3rem] mt-2 text-foreground/50">
                    To Production.
                  </span>
                </motion.h1>

                <motion.p variants={fadeIn} className="max-w-xl text-base sm:text-lg lg:text-xl font-bold leading-relaxed text-muted-foreground border-l-[4px] border-primary pl-6 mb-8">
                  Theoretical AI is a cost center. We architect and deploy custom RAG agents, Copilot implementations, and enterprise ML models that move from notebook to live environment.
                </motion.p>

                <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact?service=ai" passHref>
                    <Button variant="hero" size="lg" className="h-14 sm:h-16 w-full sm:w-auto rounded-none border-[3px] border-foreground bg-foreground px-6 sm:px-8 text-background shadow-[6px_6px_0px_0px_hsl(var(--primary))] transition-all duration-300 hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none">
                      <span className="text-xs sm:text-sm font-black uppercase tracking-[0.15em]">Deploy AI Now</span>
                      <ChevronRight className="ml-3 h-4 w-4 sm:h-5 sm:w-5" />
                    </Button>
                  </Link>
                  <Link href="/contact" passHref>
                    <Button variant="outline" size="lg" className="h-14 sm:h-16 w-full sm:w-auto rounded-none border-[3px] border-foreground bg-transparent px-6 sm:px-8 text-foreground transition-all duration-300 hover:bg-foreground/5">
                      <span className="text-xs sm:text-sm font-black uppercase tracking-[0.15em]">Talk to Our Engineers</span>
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>

              {/* Right — terminal visual */}
              <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-[400px] border-t-[4px] lg:border-t-0 lg:border-l-[4px] border-foreground bg-foreground overflow-hidden flex flex-col">
                {/* Terminal header */}
                <div className="flex items-center gap-2 px-5 py-3 border-b-[3px] border-background/20">
                  <div className="h-3 w-3 bg-rose-500 border border-background/30" />
                  <div className="h-3 w-3 bg-amber-500 border border-background/30" />
                  <div className="h-3 w-3 bg-primary border border-background/30" />
                  <span className="ml-4 font-mono text-[10px] text-background/50 uppercase tracking-widest">production_deployment.sh</span>
                </div>
                {/* Terminal body */}
                <div className="flex-1 p-6 font-mono text-sm space-y-3 overflow-hidden">
                  {[
                    { color: "text-primary", line: "$ ./deploy_rag_agent.sh --env production" },
                    { color: "text-background/60", line: "→ Connecting to Azure AI Search..." },
                    { color: "text-background/60", line: "→ Validating Entra ID permissions..." },
                    { color: "text-primary", line: "✓ Security trimming: ENABLED" },
                    { color: "text-background/60", line: "→ Grounding model in SharePoint index..." },
                    { color: "text-primary", line: "✓ RAG pipeline: LIVE" },
                    { color: "text-background/60", line: "→ Deploying to Azure Container Apps..." },
                    { color: "text-primary", line: "✓ Endpoint: ACTIVE" },
                    { color: "text-background/40", line: "─────────────────────────────" },
                    { color: "text-background", line: "STATUS: AI is in production. " },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + i * 0.15, duration: 0.4 }}
                      className={`${item.color} font-black text-xs sm:text-sm`}
                    >
                      {item.line}
                    </motion.div>
                  ))}
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    className="inline-block w-2 h-4 bg-primary"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── THE PROBLEM ─────────────────────────────────────────────────────── */}
      <section className="relative z-20 py-24 border-y-[6px] border-foreground bg-card">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="mb-16 border-b-[4px] border-foreground pb-8 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-3xl">
              <span className="text-xs font-black uppercase tracking-[0.4em] text-primary block mb-4 border border-primary/30 bg-primary/10 px-3 py-1 w-max">
                [ THE PROBLEM ]
              </span>
              <h2 className="text-[3rem] sm:text-[4rem] font-black uppercase leading-[0.85] tracking-tighter text-foreground">
                Why AI projects fail in the real world.
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: AlertTriangle,
                code: "ERR_01",
                title: "Data Security Flaw",
                desc: "The model summarizes the CEO's salary document for an intern. It ignored SharePoint permissions entirely. Public AI tools have no concept of your internal access controls.",
                accent: "border-rose-500",
                iconColor: "text-rose-600",
              },
              {
                icon: AlertCircle,
                code: "ERR_02",
                title: "Hallucination Risk",
                desc: "Without RAG grounding in your actual data, the model confidently answers questions about company policy — with completely fabricated information. No one notices until damage is done.",
                accent: "border-amber-500",
                iconColor: "text-amber-600",
              },
              {
                icon: Lock,
                code: "ERR_03",
                title: "Integration Failure",
                desc: "The AI sits in a standalone web app nobody checks. It's not where your teams work. It generates zero business value because it was never embedded into existing workflows.",
                accent: "border-foreground",
                iconColor: "text-foreground",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeIn}
                className={`border-[3px] ${item.accent} bg-background p-8 md:p-10 shadow-[10px_10px_0px_0px_hsl(var(--foreground)/0.1)] relative hover:-translate-y-1 transition-transform`}
              >
                <div className="absolute right-4 top-4 text-xs font-black uppercase tracking-widest text-muted-foreground">{item.code}</div>
                <item.icon className={`w-10 h-10 ${item.iconColor} mb-6`} strokeWidth={2} />
                <h3 className="text-xl font-black uppercase leading-[1.1] tracking-tight mb-4">{item.title}</h3>
                <p className="text-[1rem] font-semibold text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CAPABILITIES ────────────────────────────────────────────────────── */}
      <section className="relative z-30 bg-background py-12 lg:py-0 flex lg:min-h-[calc(100vh-80px)] items-center">
        <div className="container mx-auto px-6 max-w-[1400px] w-full">
          <div className="mb-10 lg:mb-12 text-center">
            <h2 className="mb-4 text-[10px] sm:text-xs font-black uppercase tracking-[0.4em] text-primary">What's Included</h2>
            <h3 className="text-[2.5rem] md:text-[3.5rem] font-black uppercase leading-[0.9] tracking-tighter text-foreground max-w-4xl mx-auto">
              Four pillars of enterprise AI engineering
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-6">
            {[
              {
                icon: Database,
                code: "ARCH_01",
                title: "Custom RAG Agents",
                tag: "ARCHITECTURE",
                desc: "Retrieval-Augmented Generation grounded in your proprietary data. Chat interfaces that source from internal documents without exposing data to public models.",
              },
              {
                icon: ShieldCheck,
                code: "SEC_01",
                title: "M365 Copilot Prep",
                tag: "SECURITY",
                desc: "We audit Entra ID and SharePoint permissions before enabling Copilot, preventing oversharing and securing sensitive data from unauthorized prompts.",
              },
              {
                icon: Cpu,
                code: "INFRA_01",
                title: "Azure AI Studio",
                tag: "INFRASTRUCTURE",
                desc: "Azure AI Search, Azure OpenAI, and Prompt Flow combined into scalable, enterprise-secured AI architectures deployed inside your private cloud.",
              },
              {
                icon: UserCheck,
                code: "ENB_01",
                title: "Adoption & Prompting",
                tag: "ENABLEMENT",
                desc: "We train your teams on effective prompts, build internal use case libraries, and drive the organizational change that makes AI actually stick.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
                className="bg-card flex flex-col group overflow-hidden border-[4px] border-foreground shadow-[10px_10px_0px_0px_hsl(var(--primary)/0.2)] hover:shadow-[15px_15px_0px_0px_hsl(var(--primary)/0.3)] transition-all duration-300 hover:-translate-y-2"
              >
                <div className="border-b-[4px] border-foreground bg-muted/30 p-3 lg:p-4 flex justify-between items-center">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">{item.code}</span>
                  <item.icon className="w-5 h-5 text-muted-foreground" />
                </div>
                <div className="p-6 lg:p-8 flex-1 flex flex-col">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-primary mb-4 bg-primary/10 w-max px-2 py-0.5 border border-primary/20">{item.tag}</div>
                  <h4 className="text-xl lg:text-2xl font-black uppercase leading-[1.1] tracking-tight mb-4">{item.title}</h4>
                  <p className="text-sm lg:text-[15px] font-semibold text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── METHODOLOGY (dark bg section) ──────────────────────────────────── */}
      <section className="relative py-12 lg:py-0 flex lg:min-h-[calc(100vh-80px)] items-center bg-foreground text-background border-y-[6px] border-foreground">
        <div className="container mx-auto px-6 max-w-[1400px] w-full">
          <div className="mb-10 lg:mb-12 md:flex justify-between items-end border-b-[4px] border-background pb-6">
            <div>
              <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.4em] text-primary block mb-3">Our Approach</span>
              <h2 className="text-[2.5rem] md:text-[3.5rem] font-black uppercase leading-[0.85] tracking-tighter">
                How we ship AI<br />to production.
              </h2>
            </div>
          </div>

          <div className="flex flex-col border-t-[3px] border-background/20">
            <PhaseSlice num="01" title="Secure the Foundation" desc="Before any AI model touches your data, we ensure strict access controls and permissions are in place. Entra ID security trimming, sensitivity labels, governance — configured first, not as an afterthought. We don't index what shouldn't be seen." />
            <PhaseSlice num="02" title="Ground in Reality" desc="We connect models to your actual enterprise data using Azure AI Search and RAG architecture. SharePoint, Confluence, legacy systems — semantically indexed and queried. This mathematically eliminates hallucinations on topics covered by your knowledge base." />
            <PhaseSlice num="03" title="Ship to Production" desc="We move past Jupyter notebooks. Scalable Azure Container Apps, Teams integrations, Prompt Flow monitoring, CI/CD pipelines — all documented and handed over. You get a live product, not a proof of concept that sits in staging forever." />
          </div>
        </div>
      </section>

      {/* ─── CASE STUDY ──────────────────────────────────────────────────────── */}
      <section className="relative py-12 lg:py-0 flex lg:min-h-[calc(100vh-80px)] items-center bg-card border-y-[6px] border-foreground">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

            {/* Left — numbers */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.4em] text-primary block mb-4 border border-primary/30 bg-primary/10 px-3 py-1 w-max">
                Case Study
              </span>
              <h2 className="text-[2.5rem] md:text-[3.5rem] font-black uppercase leading-[0.85] tracking-tighter text-foreground mb-8">
                Enterprise IT<br />Helpdesk AI.
              </h2>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { metric: "40%", label: "Ticket Deflection" },
                  { metric: "8s", label: "Avg Resolution" },
                  { metric: "0", label: "Data Leaks" },
                  { metric: "4h→8s", label: "Wait Time Drop" },
                ].map((stat, i) => (
                  <div key={i} className="border-[3px] border-foreground bg-background p-5 shadow-[6px_6px_0px_0px_hsl(var(--primary)/0.2)]">
                    <div className="text-3xl font-black text-primary leading-none mb-1">{stat.metric}</div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>

              <Link href="/contact?service=ai">
                <Button variant="hero" size="lg" className="h-14 w-fit rounded-none border-[3px] border-foreground bg-foreground px-8 text-background shadow-[6px_6px_0px_0px_hsl(var(--primary))] transition-all duration-300 hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none">
                  <span className="text-xs font-black uppercase tracking-[0.15em]">Discuss This Case</span>
                  <ChevronRight className="ml-3 h-4 w-4" />
                </Button>
              </Link>
            </div>

            {/* Right — execution log */}
            <div className="lg:col-span-7 border-[3px] border-foreground bg-background p-6 md:p-10 shadow-[10px_10px_0px_0px_hsl(var(--primary)/0.2)] relative flex flex-col justify-center">
              <div className="absolute top-0 right-0 border-b-[3px] border-l-[3px] border-foreground bg-primary/10 px-3 py-1">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">EXECUTION LOG</span>
              </div>

              <h3 className="font-mono text-sm font-black uppercase tracking-widest text-muted-foreground mb-8 border-b-[2px] border-border pb-4 mt-2">
                How we built it
              </h3>

              <ul className="space-y-6">
                {[
                  "Indexed SharePoint, Confluence, and legacy ticketing systems to create a unified, secure knowledge base inside Azure AI Search.",
                  "Built a custom RAG chatbot deployed natively inside Microsoft Teams — accessible where employees already work, requiring zero behavior change.",
                  "Implemented strict Entra ID security trimming so each user's context is mathematically limited to documents they're already permitted to read.",
                  "Set up Azure Monitor dashboards and Prompt Flow tracing so the IT team owns the system — no ongoing consultant dependency.",
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-5">
                    <div className="shrink-0 flex items-center justify-center mt-0.5">
                      <div className="flex h-7 w-7 items-center justify-center border-[2px] border-foreground bg-primary text-background">
                        <CheckCircle2 size={14} strokeWidth={3} />
                      </div>
                    </div>
                    <p className="text-base font-semibold text-foreground leading-relaxed">{text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─────────────────────────────────────────────────────────────── */}
      <section className="bg-foreground py-24 text-background lg:py-32 border-t-[8px] border-primary">
        <div className="container mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-8 text-[3rem] font-black uppercase leading-[0.9] tracking-tighter sm:text-[4rem] md:text-[5rem]">
            Stop building demos.<br />Ship production AI.
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-xl font-bold leading-relaxed text-background/70">
            Your competitors are deploying AI that works. Every week you spend in staging is a week they're ahead of you.
          </p>
          <Link href="/contact?service=ai" passHref>
            <Button
              variant="hero"
              size="lg"
              className="group h-16 rounded-none border-[3px] border-background bg-transparent px-10 text-background shadow-[8px_8px_0px_0px_hsl(var(--background))] transition-all hover:translate-x-[4px] hover:translate-y-[4px] hover:bg-background hover:text-foreground hover:shadow-none"
            >
              <span className="text-sm font-black uppercase tracking-[0.2em]">Connect With Our Engineers</span>
            </Button>
          </Link>
        </div>
      </section>

    </main>
  );
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function PhaseSlice({ num, title, desc }) {
  return (
    <motion.div
      initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
      className="group grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 border-b-[3px] border-background/20 py-6 lg:py-10 transition-colors hover:bg-background/5 px-2 lg:px-4"
    >
      <div className="lg:col-span-2 text-[3rem] font-black leading-[0.8] tracking-tighter text-primary/40 group-hover:text-primary transition-colors flex items-center">
        {num}
      </div>
      <div className="lg:col-span-3 flex items-center">
        <h3 className="text-xl lg:text-2xl font-black uppercase tracking-tight leading-[1] text-background">{title}</h3>
      </div>
      <div className="lg:col-span-7 flex items-center">
        <p className="text-sm lg:text-base font-medium text-background/70 leading-relaxed border-l-[3px] border-primary/30 pl-4 lg:pl-6 group-hover:border-primary transition-colors">
          {desc}
        </p>
      </div>
    </motion.div>
  );
}
