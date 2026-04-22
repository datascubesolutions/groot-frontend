// @ts-nocheck
"use client";

import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import {
  AlertCircle,
  ChevronRight,
  BrainCircuit,
  Lock,
  Bot,
  Lightbulb,
  PlaySquare,
  ShieldCheck,
  Zap,
  BookOpen,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

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

export default function AIThatShips() {
  return (
    <main className="relative min-h-screen bg-background pt-20">
      <Breadcrumb
        items={[
          {
            label: "Services",
            href: "/services/define-your-roadmap/maturity-assessment",
          },
          { label: "AI That Ships", href: "/services/ai-that-ships" },
        ]}
      />

      {/* Hero Section - Split Layout */}
      <section className="relative overflow-hidden bg-background py-16 md:py-24 lg:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--primary)/0.15),transparent_50%)]" />
        <div className="container relative z-10 mx-auto px-6">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
            {/* Left Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="max-w-2xl lg:col-span-7"
            >
              <motion.h1
                variants={fadeIn}
                className="mb-6 text-4xl font-bold leading-[1.1] tracking-tight text-foreground md:text-5xl lg:text-7xl"
              >
                AI That <br />
                <span className="text-[hsl(var(--secondary))]">Ships</span>
              </motion.h1>
              <motion.p
                variants={fadeIn}
                className="mb-10 text-xl font-light leading-relaxed text-foreground/90 md:text-2xl"
              >
                Theoretical AI is a cost center. We build practical AI
                applications — from Copilot implementations to custom RAG agents
                — that solve specific business problems and get into the hands
                of your users.
              </motion.p>

              <motion.div
                variants={fadeIn}
                className="flex flex-col gap-4 sm:flex-row"
              >
                <Link href="/contact?service=ai" passHref>
                  <Button
                    variant="hero"
                    size="lg"
                    className="group px-8 shadow-xl shadow-primary/25"
                  >
                    Discuss Your AI Strategy
                    <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Visual */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:col-span-5 lg:block"
            >
              <div className="relative mx-auto aspect-square w-full max-w-lg transform-gpu overflow-hidden rounded-3xl shadow-2xl shadow-[hsl(var(--primary))/0.15]">
                <div className="absolute inset-0 flex items-center justify-center rounded-3xl border border-primary/20 bg-primary/5 backdrop-blur-sm">
                  <div className="absolute h-48 w-48 rounded-full bg-primary/10 blur-3xl" />
                  <BrainCircuit
                    className="h-32 w-32 text-primary opacity-80"
                    strokeWidth={1}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Problem - Sticky Scroll */}
      <section className="relative bg-muted/20 py-16 lg:py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
            {/* Sticky Sidebar */}
            <div className="pl-0 lg:col-span-5 lg:pl-4">
              <div className="sticky top-32">
                <h2 className="mb-4 text-sm font-bold uppercase tracking-widest text-emerald-400 drop-shadow-[0_0_10px_rgba(52,211,153,0.2)]">
                  The Challenge
                </h2>
                <h3 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                  The reality of enterprise AI.
                </h3>
                <p className="mb-8 text-xl leading-relaxed text-muted-foreground">
                  Taking AI from a slick technology demonstration to a secure,
                  enterprise-grade application running in production is an
                  entirely different discipline.
                </p>
              </div>
            </div>

            {/* Scrollable Content */}
            <div className="flex flex-col gap-8 pt-10 lg:col-span-7">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
                className="hover:shadow-glow group rounded-[2rem] border border-border/60 bg-background/80 p-6 shadow-sm backdrop-blur-md transition-all duration-500 hover:border-red-500/40 md:p-10"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-500/10 text-red-500 transition-transform group-hover:scale-110">
                  <PlaySquare size={28} />
                </div>
                <h4 className="mb-4 text-2xl font-bold text-foreground">
                  Endless Proof of Concepts
                </h4>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Great ideas that never make it to production. You have Jupyter
                  notebooks in a repository that successfully demonstrated an AI
                  capability. But because it wasn&apos;t integrated into a user
                  workflow or deployed securely, it hasn&apos;t generated a
                  single dollar of business value.alue.
                </p>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
                className="hover:shadow-glow group rounded-[2rem] border border-border/60 bg-background/80 p-6 shadow-sm backdrop-blur-md transition-all duration-500 hover:border-amber-500/40 md:p-10"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-500 transition-transform group-hover:scale-110">
                  <AlertCircle size={28} />
                </div>
                <h4 className="mb-4 text-2xl font-bold text-foreground">
                  The Hallucination Problem
                </h4>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  ChatGPT doesn&apos;t know your business context. Business
                  users tried using public language models for work, but they
                  confidently gave the wrong answers about internal policies.
                  Without grounding in your own operational data, AI is just a
                  confident guesser.
                </p>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
                className="hover:shadow-glow group rounded-[2rem] border border-border/60 bg-background/80 p-6 shadow-sm backdrop-blur-md transition-all duration-500 hover:border-indigo-500/40 md:p-10"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-500 transition-transform group-hover:scale-110">
                  <Lock size={28} />
                </div>
                <h4 className="mb-4 text-2xl font-bold text-foreground">
                  Data Security Fears
                </h4>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  You&apos;re afraid to index data because of poor internal
                  permissions. If you point an AI search at SharePoint, how do
                  you mathematically guarantee an intern can&apos;t ask the bot
                  for the CEO&apos;s salary document or unreleased financial
                  projections?ions?ions?ions?
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables - Bento Grid */}
      <section className="relative overflow-hidden bg-background py-16 md:py-24 lg:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,hsl(var(--primary)/0.05),transparent_40%)]" />
        <div className="container relative z-10 mx-auto max-w-7xl px-6">
          <div className="mb-20 text-center">
            <h2 className="mb-4 text-sm font-bold uppercase tracking-widest text-emerald-400 drop-shadow-[0_0_10px_rgba(52,211,153,0.2)]">
              Deliverables
            </h2>
            <h3 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Moving from hype to production.
            </h3>
          </div>

          <div className="grid auto-rows-fr grid-cols-1 gap-6 md:grid-cols-12">
            {/* Large Feature 1 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="relative flex min-h-[300px] flex-col justify-end overflow-hidden rounded-[2rem] border border-border/60 bg-muted/20 p-6 shadow-sm backdrop-blur-sm transition-colors hover:border-primary/40 md:col-span-8 md:p-10"
            >
              <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-primary/10 blur-[80px]" />
              <div className="relative z-10">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-400 shadow-[0_0_20px_-5px_rgba(52,211,153,0.3)] ring-1 ring-emerald-500/30 transition-all duration-300 group-hover:bg-emerald-500/20">
                  <Bot className="h-7 w-7" strokeWidth={1.5} />
                </div>
                <h4 className="mb-4 text-3xl font-bold text-foreground">
                  Custom RAG Agents on Azure
                </h4>
                <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
                  Retrieval-Augmented Generation systems securely grounded in
                  your proprietary company data. We build chat interfaces that
                  securely source knowledge from your internal documents,
                  databases, and APIs without exposing data to public models.
                </p>
              </div>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="relative overflow-hidden rounded-[2rem] border border-border/60 bg-muted/20 p-6 shadow-sm backdrop-blur-sm transition-colors hover:border-blue-500/40 md:col-span-4 md:p-10"
            >
              <div className="relative z-10">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400 shadow-[0_0_20px_-5px_rgba(59,130,246,0.3)] ring-1 ring-blue-500/30 transition-all duration-300 group-hover:bg-blue-500/20">
                  <ShieldCheck className="h-6 w-6" strokeWidth={1.5} />
                </div>
                <h4 className="mb-4 text-2xl font-bold text-foreground">
                  Microsoft 365 Copilot Readiness
                </h4>
                <p className="leading-relaxed text-muted-foreground">
                  Before you turn on M365 Copilot, we audit your Entra ID and
                  SharePoint permissions, preventing oversharing and securing
                  sensitive corporate data.
                </p>
              </div>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="relative overflow-hidden rounded-[2rem] border border-border/60 bg-muted/20 p-6 shadow-sm backdrop-blur-sm transition-colors hover:border-emerald-500/40 md:col-span-4 md:p-10"
            >
              <div className="relative z-10">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-400 shadow-[0_0_20px_-5px_rgba(52,211,153,0.3)] ring-1 ring-emerald-500/30 transition-all duration-300 group-hover:bg-emerald-500/20">
                  <Zap className="h-6 w-6" strokeWidth={1.5} />
                </div>
                <h4 className="mb-4 text-2xl font-bold text-foreground">
                  Azure AI Studio Integration
                </h4>
                <p className="leading-relaxed text-muted-foreground">
                  Leveraging Azure AI Search, Azure OpenAI, and Prompt Flow to
                  build highly scalable, enterprise-secured AI architectures
                  natively in your cloud.
                </p>
              </div>
            </motion.div>

            {/* Large Feature 4 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="relative flex min-h-[300px] flex-col justify-end overflow-hidden rounded-[2rem] border border-border/60 bg-muted/20 p-6 shadow-sm backdrop-blur-sm transition-colors hover:border-indigo-500/40 md:col-span-8 md:p-10"
            >
              <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-indigo-500/10 blur-[80px]" />
              <div className="relative z-10">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-400 shadow-[0_0_20px_-5px_rgba(99,102,241,0.3)] ring-1 ring-indigo-500/30 transition-all duration-300 group-hover:bg-indigo-500/20">
                  <BookOpen className="h-7 w-7" strokeWidth={1.5} />
                </div>
                <h4 className="mb-4 text-3xl font-bold text-foreground">
                  Prompt Engineering & Adoption
                </h4>
                <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
                  Technology is only half the battle. We train your teams on how
                  to write effective prompts, build internal libraries of use
                  cases, and drive organization-wide adoption of new AI tools.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Case Study - Premium Section */}
      <section className="relative overflow-hidden border-t border-border/50 bg-background py-16 md:py-24 lg:py-32">
        <div className="container relative z-10 mx-auto max-w-6xl px-6">
          <div className="relative overflow-hidden rounded-[3rem] border border-primary/20 bg-primary/5 p-6 text-foreground shadow-sm md:p-10 lg:p-16">
            {/* Decorative background glow */}
            <div className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] max-w-full rounded-full bg-primary/10 blur-[120px]" />

            <div className="relative z-10">
              <div className="mb-8 inline-flex rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-bold uppercase tracking-wider text-primary">
                Case Study: Enterprise IT
              </div>
              <h2 className="mb-12 max-w-3xl text-3xl font-bold leading-tight text-foreground md:text-5xl">
                Deflecting 40% of Tier 1 IT Helpdesk Tickets
              </h2>

              <div className="grid gap-12 md:grid-cols-2">
                <div>
                  <h3 className="mb-4 text-xl font-bold text-primary">
                    The Situation
                  </h3>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    A 2,000-employee company was struggling with escalating IT
                    support costs. Wait times were averaging 4 hours for simple
                    issues like VPN connections, password resets, and software
                    access requests. The helpdesk team was burning out handling
                    repetitive questions instead of complex infrastructure
                    problems.
                  </p>
                </div>
                <div>
                  <h3 className="mb-4 text-xl font-bold text-primary">
                    What We Built
                  </h3>
                  <ul className="space-y-3 text-lg text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <div className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      Indexed SharePoint, Confluence, and legacy ticketing
                      systems using Azure AI Search to create a unified
                      knowledge base.
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      Built a custom RAG (Retrieval-Augmented Generation)
                      chatbot accessible directly within Microsoft Teams.
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      Implemented strict Entra ID security trimming to ensure
                      users only accessed documents they had network permissions
                      for.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-16 grid grid-cols-1 gap-8 border-t border-primary/20 pt-10 sm:grid-cols-3">
                <div>
                  <p className="mb-2 text-5xl font-black text-primary">40%</p>
                  <p className="font-medium text-muted-foreground">
                    Ticket deflection in Month 2
                  </p>
                </div>
                <div>
                  <p className="mb-2 mt-1 text-4xl font-black text-primary">
                    8 Seconds
                  </p>
                  <p className="font-medium text-muted-foreground">
                    Average resolution time
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border bg-background py-16 lg:py-24">
        <div className="container mx-auto max-w-5xl px-6">
          <div className="rounded-[3rem] border border-primary/20 bg-primary/5 p-12 text-center shadow-lg shadow-primary/5 md:p-10 lg:p-16">
            <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
              Don&apos;t settle for theoretical AI.
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-xl leading-relaxed text-muted-foreground">
              Stop building proofs of concept that never leave the staging
              environment. Let&apos;s architect a secure, practical AI
              application that drives real business value.
            </p>
            <Link href="/contact?service=ai" passHref>
              <Button
                variant="hero"
                size="lg"
                className="h-14 rounded-full px-10 text-lg"
              >
                Discuss Your AI Strategy
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
