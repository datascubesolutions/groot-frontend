"use client";

import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { AlertCircle, ChevronRight, BrainCircuit, Lock, Bot, Lightbulb, PlaySquare, ShieldCheck, Zap, BookOpen } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function AIThatShips() {
  return (
    <main className="pt-20 min-h-screen relative bg-background">
      <Breadcrumb
        items={[
          { label: "Services", href: "/services/define-your-roadmap/maturity-assessment" },
          { label: "AI That Ships", href: "/services/ai-that-ships" },
        ]}
      />

      {/* Hero Section - Split Layout */}
      <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden bg-background">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--primary)/0.15),transparent_50%)]" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            {/* Left Content */}
            <motion.div 
              initial="hidden" 
              animate="visible" 
              variants={staggerContainer}
              className="lg:col-span-7 max-w-2xl"
            >
              <motion.h1 variants={fadeIn} className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 tracking-tight leading-[1.1] text-foreground">
                AI That <br />
                <span className="text-[hsl(var(--secondary))]">
                  Ships
                </span>
              </motion.h1>
              <motion.p variants={fadeIn} className="text-xl md:text-2xl text-foreground/90 mb-10 leading-relaxed font-light">
                Theoretical AI is a cost center. We build practical AI applications — from Copilot implementations to custom RAG agents — that solve specific business problems and get into the hands of your users.
              </motion.p>
              
              <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact?service=ai" passHref>
                  <Button variant="hero" size="lg" className="px-8 shadow-primary/25 shadow-xl group">
                    Discuss Your AI Strategy
                    <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Visual */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 relative hidden lg:block"
            >
              <div className="relative w-full aspect-square max-w-lg mx-auto transform-gpu overflow-hidden rounded-3xl shadow-2xl shadow-[hsl(var(--primary))/0.15]">
                <div className="absolute inset-0 bg-primary/5 border border-primary/20 backdrop-blur-sm rounded-3xl flex items-center justify-center">
                  <div className="w-48 h-48 bg-primary/10 rounded-full blur-3xl absolute" />
                  <BrainCircuit className="w-32 h-32 text-primary opacity-80" strokeWidth={1} />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Problem - Sticky Scroll */}
      <section className="py-16 lg:py-24 bg-muted/20 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            
            {/* Sticky Sidebar */}
            <div className="lg:col-span-5 pl-0 lg:pl-4">
              <div className="sticky top-32">
                <h2 className="text-sm font-bold uppercase tracking-widest text-emerald-400 mb-4 drop-shadow-[0_0_10px_rgba(52,211,153,0.2)]">The Challenge</h2>
                <h3 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-foreground">The reality of enterprise AI.</h3>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                  Taking AI from a slick technology demonstration to a secure, enterprise-grade application running in production is an entirely different discipline.
                </p>
              </div>
            </div>

            {/* Scrollable Content */}
            <div className="lg:col-span-7 flex flex-col gap-8 pt-10">
              <motion.div 
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn}
                className="bg-background/80 backdrop-blur-md p-6 md:p-10 rounded-[2rem] border border-border/60 hover:border-red-500/40 shadow-sm hover:shadow-glow transition-all duration-500 group"
              >
                <div className="w-14 h-14 bg-red-500/10 text-red-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <PlaySquare size={28} />
                </div>
                <h4 className="text-2xl font-bold mb-4 text-foreground">Endless Proof of Concepts</h4>
                <p className="text-lg text-muted-foreground leading-relaxed">Great ideas that never make it to production. You have Jupyter notebooks in a repository that successfully demonstrated an AI capability. But because it wasn't integrated into a user workflow or deployed securely, it hasn't generated a single dollar of business value.</p>
              </motion.div>

              <motion.div 
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn}
                className="bg-background/80 backdrop-blur-md p-6 md:p-10 rounded-[2rem] border border-border/60 hover:border-amber-500/40 shadow-sm hover:shadow-glow transition-all duration-500 group"
              >
                <div className="w-14 h-14 bg-amber-500/10 text-amber-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <AlertCircle size={28} />
                </div>
                <h4 className="text-2xl font-bold mb-4 text-foreground">The Hallucination Problem</h4>
                <p className="text-lg text-muted-foreground leading-relaxed">ChatGPT doesn't know your business context. Business users tried using public language models for work, but they confidently gave the wrong answers about internal policies. Without grounding in your own operational data, AI is just a confident guesser.</p>
              </motion.div>

              <motion.div 
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn}
                className="bg-background/80 backdrop-blur-md p-6 md:p-10 rounded-[2rem] border border-border/60 hover:border-indigo-500/40 shadow-sm hover:shadow-glow transition-all duration-500 group"
              >
                <div className="w-14 h-14 bg-indigo-500/10 text-indigo-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Lock size={28} />
                </div>
                <h4 className="text-2xl font-bold mb-4 text-foreground">Data Security Fears</h4>
                <p className="text-lg text-muted-foreground leading-relaxed">You're afraid to index data because of poor internal permissions. If you point an AI search at SharePoint, how do you mathematically guarantee an intern can't ask the bot for the CEO's salary document or unreleased financial projections?</p>
              </motion.div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Deliverables - Bento Grid */}
      <section className="py-16 md:py-24 lg:py-32 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,hsl(var(--primary)/0.05),transparent_40%)]" />
        <div className="container mx-auto px-6 relative z-10 max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-sm font-bold uppercase tracking-widest text-emerald-400 mb-4 drop-shadow-[0_0_10px_rgba(52,211,153,0.2)]">Deliverables</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">Moving from hype to production.</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-fr">
            {/* Large Feature 1 */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
              className="md:col-span-8 bg-muted/20 backdrop-blur-sm border border-border/60 rounded-[2rem] p-6 md:p-10 hover:border-primary/40 transition-colors shadow-sm relative overflow-hidden flex flex-col justify-end min-h-[300px]"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[80px] rounded-full" />
              <div className="relative z-10">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/30 shadow-[0_0_20px_-5px_rgba(52,211,153,0.3)] group-hover:bg-emerald-500/20 transition-all duration-300">
                  <Bot className="w-7 h-7" strokeWidth={1.5} />
                </div>
                <h4 className="text-3xl font-bold mb-4 text-foreground">Custom RAG Agents on Azure</h4>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                  Retrieval-Augmented Generation systems securely grounded in your proprietary company data. We build chat interfaces that securely source knowledge from your internal documents, databases, and APIs without exposing data to public models.
                </p>
              </div>
            </motion.div>

            {/* Feature 2 */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
              className="md:col-span-4 bg-muted/20 backdrop-blur-sm border border-border/60 rounded-[2rem] p-6 md:p-10 hover:border-blue-500/40 transition-colors shadow-sm relative overflow-hidden"
            >
               <div className="relative z-10">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400 ring-1 ring-blue-500/30 shadow-[0_0_20px_-5px_rgba(59,130,246,0.3)] group-hover:bg-blue-500/20 transition-all duration-300">
                  <ShieldCheck className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <h4 className="text-2xl font-bold mb-4 text-foreground">Microsoft 365 Copilot Readiness</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Before you turn on M365 Copilot, we audit your Entra ID and SharePoint permissions, preventing oversharing and securing sensitive corporate data.
                </p>
              </div>
            </motion.div>

            {/* Feature 3 */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
              className="md:col-span-4 bg-muted/20 backdrop-blur-sm border border-border/60 rounded-[2rem] p-6 md:p-10 hover:border-emerald-500/40 transition-colors shadow-sm relative overflow-hidden"
            >
               <div className="relative z-10">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/30 shadow-[0_0_20px_-5px_rgba(52,211,153,0.3)] group-hover:bg-emerald-500/20 transition-all duration-300">
                  <Zap className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <h4 className="text-2xl font-bold mb-4 text-foreground">Azure AI Studio Integration</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Leveraging Azure AI Search, Azure OpenAI, and Prompt Flow to build highly scalable, enterprise-secured AI architectures natively in your cloud.
                </p>
              </div>
            </motion.div>

            {/* Large Feature 4 */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
              className="md:col-span-8 bg-muted/20 backdrop-blur-sm border border-border/60 rounded-[2rem] p-6 md:p-10 hover:border-indigo-500/40 transition-colors shadow-sm relative overflow-hidden flex flex-col justify-end min-h-[300px]"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-[80px] rounded-full" />
              <div className="relative z-10">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-400 ring-1 ring-indigo-500/30 shadow-[0_0_20px_-5px_rgba(99,102,241,0.3)] group-hover:bg-indigo-500/20 transition-all duration-300">
                  <BookOpen className="w-7 h-7" strokeWidth={1.5} />
                </div>
                <h4 className="text-3xl font-bold mb-4 text-foreground">Prompt Engineering & Adoption</h4>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                  Technology is only half the battle. We train your teams on how to write effective prompts, build internal libraries of use cases, and drive organization-wide adoption of new AI tools.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Case Study - Premium Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-background relative overflow-hidden border-t border-border/50">
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="bg-primary/5 text-foreground rounded-[3rem] p-6 md:p-10 lg:p-16 relative overflow-hidden shadow-sm border border-primary/20">
            {/* Decorative background glow */}
            <div className="absolute top-0 right-0 w-[500px] max-w-full h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
            
            <div className="relative z-10">
              <div className="mb-8 inline-flex border border-primary/30 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-bold uppercase tracking-wider">
                Case Study: Enterprise IT
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-12 max-w-3xl leading-tight text-foreground">
                Deflecting 40% of Tier 1 IT Helpdesk Tickets
              </h2>

              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-primary">The Situation</h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    A 2,000-employee company was struggling with escalating IT support costs. Wait times were averaging 4 hours for simple issues like VPN connections, password resets, and software access requests. The helpdesk team was burning out handling repetitive questions instead of complex infrastructure problems.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4 text-primary">What We Built</h3>
                  <ul className="space-y-3 text-muted-foreground text-lg">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                      Indexed SharePoint, Confluence, and legacy ticketing systems using Azure AI Search to create a unified knowledge base.
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                      Built a custom RAG (Retrieval-Augmented Generation) chatbot accessible directly within Microsoft Teams.
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                      Implemented strict Entra ID security trimming to ensure users only accessed documents they had network permissions for.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-16 pt-10 border-t border-primary/20 grid grid-cols-1 sm:grid-cols-3 gap-8">
                <div>
                  <p className="text-5xl font-black text-primary mb-2">40%</p>
                  <p className="text-muted-foreground font-medium">Ticket deflection in Month 2</p>
                </div>
                <div>
                  <p className="text-4xl font-black text-primary mb-2 mt-1">8 Seconds</p>
                  <p className="text-muted-foreground font-medium">Average resolution time</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-background border-t border-border">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="bg-primary/5 border border-primary/20 rounded-[3rem] p-12 md:p-10 lg:p-16 text-center shadow-lg shadow-primary/5">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Don't settle for theoretical AI.</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              Stop building proofs of concept that never leave the staging environment. Let's architect a secure, practical AI application that drives real business value.
            </p>
            <Link href="/contact?service=ai" passHref>
              <Button variant="hero" size="lg" className="px-10 text-lg h-14 rounded-full">
                Discuss Your AI Strategy
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
