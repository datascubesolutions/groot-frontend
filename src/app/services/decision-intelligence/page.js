"use client";

import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { motion, useScroll, useTransform } from "framer-motion";
import { BarChart3, ChevronRight, DatabaseZap, LayoutDashboard, LineChart, PieChart, RefreshCw, Target, Users } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function DecisionIntelligence() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.5]);

  return (
    <main className="pt-20 min-h-screen bg-background selection:bg-primary/20">
      <div className="container mx-auto px-6 py-4">
        <Breadcrumb
          items={[
            { label: "Services", href: "/services/define-your-roadmap/maturity-assessment" },
            { label: "Decision Intelligence", href: "/services/decision-intelligence" },
          ]}
        />
      </div>

      {/* Hero Section - Split Layout */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-background">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(var(--primary)/0.1),transparent_50%)]" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="max-w-2xl"
            >
              <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-[1.1]">
                Decision <br />
                <span className="text-[hsl(var(--secondary))]">
                  Intelligence
                </span>
              </motion.h1>
              <motion.p variants={fadeIn} className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed font-light">
                Turn scattered data into a clear strategic advantage. We design executive analytics, standardized semantic models, and self-service enablement that allow leaders to trust the numbers and make decisions faster.
              </motion.p>
              <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact?service=decision-intelligence" passHref className="w-full sm:w-auto">
                  <Button variant="hero" size="lg" className="w-full sm:w-auto shadow-primary/25 shadow-xl hover:shadow-primary/40 transition-all duration-300">
                    Discuss Analytics Strategy
                  </Button>
                </Link>
                <Link href="#situation" passHref className="w-full sm:w-auto">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto bg-background/50 backdrop-blur-sm border-border">
                    Explore Problem
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative w-full aspect-square max-w-lg mx-auto transform-gpu overflow-hidden rounded-3xl shadow-2xl shadow-[hsl(var(--primary))/0.15]">
                <Image
                  src="/decision_intelligence_hero.png"
                  alt="Decision Intelligence and Executive Analytics Dashboard"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sticky Scroll Section - Situation & Solution */}
      <section id="situation" className="py-32 bg-muted/20 relative" ref={targetRef}>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

            {/* Sticky Sidebar */}
            <div className="lg:col-span-4 pl-0 lg:pl-4">
              <div className="sticky top-32">
                <motion.p style={{ opacity }} className="text-sm font-bold uppercase tracking-widest text-primary mb-4">
                  The Problem
                </motion.p>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                  You have data, but you don't have answers.
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  You deployed Power BI, but you are still arguing in board meetings about which dashboard is correct because Finance and Sales define "Revenue" differently.
                </p>
              </div>
            </div>

            {/* Scrollable Content */}
            <div className="lg:col-span-8 flex flex-col gap-8">
              <motion.div
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn}
                className="bg-background/80 backdrop-blur-md p-10 rounded-[2rem] border border-border shadow-sm hover:shadow-glow transition-shadow duration-500"
              >
                <div className="h-16 w-16 bg-red-500/10 text-red-500 rounded-2xl flex items-center justify-center mb-6">
                  <Target size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Conflicting Numbers</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">Different departments pull from different spreadsheets. Nobody knows which number is the "official" metric, leading to distrust in the data platform as a whole.</p>
              </motion.div>

              <motion.div
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn}
                className="bg-background/80 backdrop-blur-md p-10 rounded-[2rem] border border-border shadow-sm hover:shadow-glow transition-shadow duration-500"
              >
                <div className="h-16 w-16 bg-amber-500/10 text-amber-500 rounded-2xl flex items-center justify-center mb-6">
                  <RefreshCw size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Slow Time-to-Insight</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">When an executive asks a new question, it takes the data team three weeks to build a dashboard to answer it. The opportunity window closes before the data arrives.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included (Bento Grid) */}
      <section className="py-32 bg-background relative border-y border-border/50">
        <div className="absolute inset-0 dot-pattern opacity-30" />
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">What's Included</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A comprehensive approach to building an intelligence layer your entire organization can trust.
            </p>
          </div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <SubServiceCard
              href="/services/decision-intelligence/executive-analytics"
              title="Executive Analytics"
              desc="High-level, actionable dashboards designed for C-level and VP leaders. We focus on the KPIs that drive the business, not just creating pretty charts."
              icon={<LayoutDashboard size={32} />}
              featured
            />
            <SubServiceCard
              href="/services/decision-intelligence/semantic-modeling"
              title="Semantic Modeling"
              desc="The invisible foundation of good BI. We build enterprise-grade Power BI datasets that define business logic centrally so every report tells the same truth."
              icon={<DatabaseZap size={32} />}
            />
            <SubServiceCard
              href="/services/decision-intelligence/self-service-enablement"
              title="Self-Service Enablement"
              desc="Training and governance frameworks that empower business users to build their own reports safely, using certified data models."
              icon={<Users size={32} />}
            />
          </motion.div>
        </div>
      </section>

      {/* Our Approach (cards) */}
      <section className="py-32 bg-secondary/30 relative">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-4 text-center">Methodology</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-16 tracking-tight text-center text-foreground">Our Approach</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ApproachCard
              step="01"
              title="Measure What Matters"
              desc="We don't build generic reports. We align every visual and KPI directly to your strategic goals, ignoring vanity metrics."
            />
            <ApproachCard
              step="02"
              title="Single Version of Truth"
              desc="By centralizing business logic in semantic models, we eliminate the 'spreadsheet wars' between departments."
            />
            <ApproachCard
              step="03"
              title="Adoption Focused"
              desc="A dashboard is useless if nobody looks at it. We prioritize user experience, performance, and comprehensive training."
            />
          </div>
        </div>
      </section>

      {/* Who This Is For & Starting Point combined */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-10 tracking-tight">Who This Is For</h2>
              <div className="space-y-6">
                <ScenarioItem text="Organizations struggling with 'multiple versions of the truth'." />
                <ScenarioItem text="Companies with conflicting departmental reports where metrics don't align." />
                <ScenarioItem text="Teams experiencing slow time-to-insight when business questions arise." />
                <ScenarioItem text="Leaders who want to transition from gut-feel decisions to data-backed strategy." />
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-card glass border border-border p-10 md:p-12 rounded-[2.5rem] text-center relative overflow-hidden shadow-xl"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -z-10" />
              <h2 className="text-2xl font-bold mb-6 uppercase tracking-wider text-muted-foreground/80">Starting Point</h2>
              <p className="text-2xl italic text-foreground leading-relaxed mb-6">
                "We have Power BI but nobody uses it or trusts the data."
              </p>
              <p className="text-muted-foreground mb-10 text-lg">
                If this sounds familiar, it's time to rethink your intelligence layer.
              </p>

              <Link href="/services/decision-intelligence/executive-analytics" className="inline-flex items-center gap-2 group text-primary font-bold text-lg hover:text-primary/80 transition-colors">
                Explore Executive Analytics
                <div className="bg-primary/10 p-2 rounded-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden bg-background">
        <div className="absolute inset-0 bg-primary/10" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="border border-primary/20 bg-background/50 backdrop-blur-sm rounded-[3rem] p-12 md:p-20 text-center max-w-5xl mx-auto shadow-sm">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground tracking-tight">Ready to trust your numbers?</h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Stop arguing over data accuracy and start making informed decisions. Let's design an intelligence layer that your business actually uses.
            </p>
            <Link href="/contact?service=decision-intelligence" passHref>
              <Button size="lg" className="text-lg px-10 h-14 rounded-full font-bold shadow-xl">
                Discuss Your Analytics Strategy
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function SubServiceCard({ href, title, desc, icon, featured = false }) {
  return (
    <motion.div variants={fadeIn} className="h-full">
      <Link href={href} className="group flex flex-col h-full bg-background/50 backdrop-blur-sm border border-border/60 rounded-[2rem] p-8 md:p-10 hover:border-primary/50 transition-all duration-500 shadow-sm hover:shadow-glow relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className={`
          mb-8 w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500
          ${featured ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20' : 'bg-muted/50 text-primary group-hover:bg-primary/10'}
        `}>
          {icon}
        </div>

        <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300 tracking-tight z-10">{title}</h3>
        <p className="text-muted-foreground mb-10 leading-relaxed flex-grow text-lg z-10">{desc}</p>

        <div className="mt-auto flex items-center font-semibold text-foreground/70 group-hover:text-primary transition-colors z-10">
          Explore Detail
          <ChevronRight className="ml-1 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </div>
      </Link>
    </motion.div>
  );
}

function ApproachCard({ step, title, desc }) {
  return (
    <motion.div
      initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
      className="bg-background/60 backdrop-blur-sm border border-border/50 p-10 rounded-[2rem] h-full hover:border-border transition-colors hover:shadow-sm"
    >
      <div className="text-5xl font-black text-muted/30 mb-6 font-mono -ml-2">{step}</div>
      <h3 className="text-2xl font-bold mb-4 text-foreground tracking-tight">{title}</h3>
      <p className="text-muted-foreground leading-relaxed text-lg">{desc}</p>
    </motion.div>
  );
}

function ScenarioItem({ text }) {
  return (
    <div className="flex gap-6 p-6 rounded-2xl bg-secondary/20 hover:bg-secondary/40 transition-colors">
      <div className="w-10 h-10 bg-background shadow-sm border border-border text-primary rounded-full flex items-center justify-center shrink-0">
        <ChevronRight size={20} className="ml-0.5" />
      </div>
      <div className="text-lg text-foreground/80 leading-relaxed flex-1 mt-1 font-medium">{text}</div>
    </div>
  );
}
