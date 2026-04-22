// @ts-nocheck
"use client";

import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import {
  AlertCircle,
  CheckCircle2,
  ChevronRight,
  Users,
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

export default function SelfServiceEnablement() {
  return (
    <main className="pt-20 min-h-screen relative bg-background">
      <Breadcrumb
        items={[
          {
            label: "Services",
            href: "/services/define-your-roadmap/maturity-assessment",
          },
          {
            label: "Decision Intelligence",
            href: "/services/decision-intelligence",
          },
          {
            label: "Self-Service Enablement",
            href: "/services/decision-intelligence/self-service-enablement",
          },
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
              <motion.h1
                variants={fadeIn}
                className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 tracking-tight leading-[1.1] text-foreground"
              >
                Self-Service <br />
                <span className="text-[hsl(var(--secondary))]">Enablement</span>
              </motion.h1>
              <motion.p
                variants={fadeIn}
                className="text-xl md:text-2xl text-foreground/90 mb-10 leading-relaxed font-light"
              >
                Enable your teams to build their own reports — without creating
                chaos. We build Centers of Excellence with governed
                self-service, certified models, and Fabric guardrails.
              </motion.p>

              <motion.div
                variants={fadeIn}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link href="/contact?service=self-service" passHref>
                  <Button
                    variant="hero"
                    size="lg"
                    className="px-8 shadow-primary/25 shadow-xl group"
                  >
                    Schedule a CoE Consultation
                    <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Visual (Abstract CoE Network) */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 relative hidden lg:block"
            >
              <div className="relative w-full aspect-square max-w-lg mx-auto transform-gpu overflow-hidden rounded-3xl shadow-2xl shadow-[hsl(var(--primary))/0.15]">
                <Image
                  src="/self_service_enablement.png"
                  alt="Self-Service Data Enablement Governance"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  priority
                />
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
                <h2 className="text-sm font-bold uppercase tracking-widest text-emerald-400 mb-4 drop-shadow-[0_0_10px_rgba(52,211,153,0.2)]">
                  The Extremes
                </h2>
                <h3 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-foreground">
                  The two paths of failure.
                </h3>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                  Organizations generally fail at Power BI adoption in one of
                  two ways. Finding the governed middle ground is the defining
                  characteristic of a mature data culture.
                </p>
              </div>
            </div>

            {/* Scrollable Content */}
            <div className="lg:col-span-7 flex flex-col gap-8 pt-10">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
                className="bg-background/80 backdrop-blur-md p-6 md:p-10 rounded-[2rem] border border-border/60 hover:border-red-500/40 shadow-sm hover:shadow-glow transition-all duration-500 group"
              >
                <div className="w-14 h-14 bg-red-500/10 text-red-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <AlertCircle size={28} />
                </div>
                <h4 className="text-2xl font-bold mb-4 text-foreground">
                  The Wild West (Ungoverned)
                </h4>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  You turned Power BI on for everyone. Now you have 4,000
                  workspaces, 12,000 abandoned reports, and 40 different
                  definitions of &quot;Gross Margin.&quot;
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    ❌ Duplicate data consuming costly capacity
                  </li>
                  <li className="flex items-center gap-2">
                    ❌ No way to know which reports are accurate
                  </li>
                  <li className="flex items-center gap-2">
                    ❌ Security risks from unmanaged sharing
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
                className="bg-background/80 backdrop-blur-md p-6 md:p-10 rounded-[2rem] border border-border/60 hover:border-amber-500/40 shadow-sm hover:shadow-glow transition-all duration-500 group"
              >
                <div className="w-14 h-14 bg-amber-500/10 text-amber-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <ShieldCheck size={28} />
                </div>
                <h4 className="text-2xl font-bold mb-4 text-foreground">
                  The IT Bottleneck (Over-governed)
                </h4>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  IT locked everything down. Every new visual requires a Jira
                  ticket. Every new column requires a two-week sprint cycle. The
                  BI team is drowning in ad-hoc requests.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    ❌ BI team burned out acting as a report factory
                  </li>
                  <li className="flex items-center gap-2">
                    ❌ Business users wait weeks for simple answers
                  </li>
                  <li className="flex items-center gap-2">
                    ❌ Shadow IT thrives as users export to Excel anyway
                  </li>
                </ul>
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
            <h2 className="text-sm font-bold uppercase tracking-widest text-emerald-400 mb-4 drop-shadow-[0_0_10px_rgba(52,211,153,0.2)]">
              Center of Excellence
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              Governed self-service.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-fr">
            {/* Large Feature 1 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="md:col-span-8 bg-muted/20 backdrop-blur-sm border border-border/60 rounded-[2rem] p-6 md:p-10 hover:border-primary/40 transition-colors shadow-sm relative overflow-hidden flex flex-col justify-end min-h-[300px]"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[80px] rounded-full" />
              <div className="relative z-10">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/30 shadow-[0_0_20px_-5px_rgba(52,211,153,0.3)] group-hover:bg-emerald-500/20 transition-all duration-300">
                  <ShieldCheck className="w-7 h-7" strokeWidth={1.5} />
                </div>
                <h4 className="text-3xl font-bold mb-4 text-foreground">
                  Workspace Architecture & Guardrails
                </h4>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                  Fabric workspace design separating data layers (medallion
                  architecture) from reporting layers. We implement strict
                  naming conventions, access policies via security groups, and
                  governed app deployment strategies.
                </p>
              </div>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="md:col-span-4 bg-muted/20 backdrop-blur-sm border border-border/60 rounded-[2rem] p-6 md:p-10 hover:border-blue-500/40 transition-colors shadow-sm relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400 ring-1 ring-blue-500/30 shadow-[0_0_20px_-5px_rgba(59,130,246,0.3)] group-hover:bg-blue-500/20 transition-all duration-300">
                  <CheckCircle2 className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <h4 className="text-2xl font-bold mb-4 text-foreground">
                  Endorsement Framework
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  Clear, enforced processes for how a report graduates from
                  personal workspace sandbox ➔ Promoted team report ➔ Certified
                  enterprise dashboard.
                </p>
              </div>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="md:col-span-4 bg-muted/20 backdrop-blur-sm border border-border/60 rounded-[2rem] p-6 md:p-10 hover:border-emerald-500/40 transition-colors shadow-sm relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/30 shadow-[0_0_20px_-5px_rgba(52,211,153,0.3)] group-hover:bg-emerald-500/20 transition-all duration-300">
                  <Users className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <h4 className="text-2xl font-bold mb-4 text-foreground">
                  CoE Charter Definition
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  Defined roles (Data Owners, Stewards, Creators), established
                  support escalation paths, and defined monthly governance
                  review routines.
                </p>
              </div>
            </motion.div>

            {/* Large Feature 4 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="md:col-span-8 bg-muted/20 backdrop-blur-sm border border-border/60 rounded-[2rem] p-6 md:p-10 hover:border-indigo-500/40 transition-colors shadow-sm relative overflow-hidden flex flex-col justify-end min-h-[300px]"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-[80px] rounded-full" />
              <div className="relative z-10">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-400 ring-1 ring-indigo-500/30 shadow-[0_0_20px_-5px_rgba(99,102,241,0.3)] group-hover:bg-indigo-500/20 transition-all duration-300">
                  <BookOpen className="w-7 h-7" strokeWidth={1.5} />
                </div>
                <h4 className="text-3xl font-bold mb-4 text-foreground">
                  Analyst Enablement Program
                </h4>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                  Custom curriculum and hands-on training for your business
                  users. We don&apos;t teach generic Power BI tutorials; we
                  teach &apos;How to build reports connecting to OUR certified
                  semantic models&apos; using your actual data.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Methodology - Bento Grid */}
      <section className="py-16 md:py-24 lg:py-32 bg-muted/20 relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold uppercase tracking-widest text-emerald-400 mb-4 drop-shadow-[0_0_10px_rgba(52,211,153,0.2)]">
              Methodology
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
              How we deploy a CoE
            </h3>
            <p className="text-foreground/80 max-w-2xl mx-auto text-lg leading-relaxed">
              Audit, governance design, baseline models, and team enablement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <MethodCard
              step={1}
              week="Phase 1"
              title="Tenant Audit & Cleanup"
              desc="We analyze current Fabric/Power BI usage via Admin APIs. Identify abandoned workspaces, unused datasets, shadow IT clusters, and immediate security risks."
            />
            <MethodCard
              step={2}
              week="Phase 2"
              title="Governance Design"
              desc="Define workspace architecture, access roles (Viewer, Contributor, Member, Admin), and endorsement criteria tailored to your culture's tolerance for rigidity."
            />
            <MethodCard
              step={3}
              week="Phase 3"
              title="Base Semantic Models"
              desc="Develop and publish 1-3 core, certified semantic models (e.g., Enterprise Sales) specifically designed for users to connect to for primary analysis."
            />
            <MethodCard
              step={4}
              week="Phase 4"
              title="Rollout & Enablement"
              desc="Migrate logic to new workspace structure. Train pilot group of key business analysts. Launch the Center of Excellence portal and Teams channels."
            />
          </div>
        </div>
      </section>

      {/* Real Example - Premium Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-background relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="bg-primary/5 text-foreground rounded-[3rem] p-6 md:p-10 lg:p-16 relative overflow-hidden shadow-sm border border-primary/20">
            {/* Decorative background glow */}
            <div className="absolute top-0 right-0 w-[500px] max-w-full h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative z-10">
              <div className="mb-8 inline-flex border border-primary/30 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-bold uppercase tracking-wider">
                Case Study: Global Manufacturing
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-12 max-w-3xl leading-tight text-foreground">
                70% reduction in IT reporting backlog through governed
                self-service.
              </h2>

              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-primary">
                    The Situation
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    A global manufacturer had a 6-month backlog for new
                    reporting requests. The core BI team of 4 people spent all
                    their time tweaking visual formatting or adding single
                    columns to existing reports. Meanwhile, business analysts
                    were frustrated and reverting to manual Excel dumps to
                    bypass IT entirely.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4 text-primary">
                    What We Delivered
                  </h3>
                  <ul className="space-y-3 text-muted-foreground text-lg">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                      &quot;Hub & Spoke&quot; Architecture allowing users to
                      build reports (Spokes) connected live to certified
                      datasets (Hubs).
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                      &quot;Dashboard in a Day&quot; Custom Training utilizing
                      the manufacturer&apos;s actual production data.
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                      Established a CoE Teams Channel for peer-to-peer tier-1
                      support.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-16 pt-10 border-t border-primary/20 grid grid-cols-1 sm:grid-cols-3 gap-8">
                <div>
                  <p className="text-5xl font-black text-primary mb-2">150+</p>
                  <p className="text-muted-foreground font-medium">
                    Analysts empowered
                  </p>
                </div>
                <div>
                  <p className="text-4xl font-black text-primary mb-2 mt-1">
                    70%
                  </p>
                  <p className="text-muted-foreground font-medium">
                    Reduction in IT Backlog
                  </p>
                </div>
                <div className="flex flex-col justify-end">
                  <Link
                    href="/industries/manufacturing"
                    className="text-primary hover:text-primary/80 transition-colors font-bold flex items-center gap-2 group text-lg"
                  >
                    See Manufacturing Work
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-muted/20">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-4">
            <FAQItem
              q="Does self-service require Fabric/Premium capacity?"
              a="No, you can do governed self-service on Power BI Pro. However, Fabric/Premium capacities offer better controls, Git integration, and deployment pipelines that make enterprise governance much smoother."
            />
            <FAQItem
              q="Who handles support when self-service reports break?"
              a="We implement a tiered support model. Best practice: The creator owns the report. If the visual breaks, it's their responsibility to fix or ask the internal community (Tier 1). If the underlying semantic model is incorrect, it escalates to central IT (Tier 2)."
            />
            <FAQItem
              q="We already let everyone create workspaces. Is it too late?"
              a="Never too late. Migration is messy but necessary. We've led tenant cleanups consolidating 1,000+ rogue workspaces into a governed 30-workspace architecture."
            />
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold mb-10 text-center">
            Related Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/services/decision-intelligence/semantic-modeling"
              className="group"
            >
              <div className="p-8 bg-muted/20 backdrop-blur-sm rounded-[2rem] border border-border/60 hover:border-primary/40 transition-all duration-300 shadow-sm hover:shadow-md h-full flex flex-col justify-between">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors tracking-tight">
                  Semantic Modeling
                </h3>
                <span className="text-primary font-bold flex items-center gap-2 text-sm mt-4 uppercase tracking-wider">
                  Learn more{" "}
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
            <Link
              href="/services/define-your-roadmap/enterprise-data-strategy"
              className="group"
            >
              <div className="p-8 bg-muted/20 backdrop-blur-sm rounded-[2rem] border border-border/60 hover:border-primary/40 transition-all duration-300 shadow-sm hover:shadow-md h-full flex flex-col justify-between">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors tracking-tight">
                  Enterprise Data Strategy
                </h3>
                <span className="text-primary font-bold flex items-center gap-2 text-sm mt-4 uppercase tracking-wider">
                  Learn more{" "}
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
            <Link
              href="/services/build-your-foundation/data-integration"
              className="group"
            >
              <div className="p-8 bg-muted/20 backdrop-blur-sm rounded-[2rem] border border-border/60 hover:border-primary/40 transition-all duration-300 shadow-sm hover:shadow-md h-full flex flex-col justify-between">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors tracking-tight">
                  Data Integration
                </h3>
                <span className="text-primary font-bold flex items-center gap-2 text-sm mt-4 uppercase tracking-wider">
                  Learn more{" "}
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-background border-t border-border">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="bg-primary/5 border border-primary/20 rounded-[3rem] p-12 md:p-10 lg:p-16 text-center shadow-lg shadow-primary/5">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Empower analysts, protect data.
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              Stop being the IT bottleneck. Let&apos;s build a Center of
              Excellence that scales analytics securely across your
              organization.
            </p>
            <Link href="/contact?service=self-service" passHref>
              <Button
                variant="hero"
                size="lg"
                className="px-10 text-lg h-14 rounded-full"
              >
                Schedule a CoE Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

/**
 * @param {{ step: number|string, week: string, title: string, desc: string }} props
 */
function MethodCard({ step, week, title, desc }) {
  const num = String(step).padStart(2, "0");
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={fadeIn}
      className="group relative bg-background border border-border/60 rounded-[1.75rem] p-8 shadow-sm hover:shadow-lg hover:border-emerald-500/25 transition-all duration-300 overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-emerald-500/10 transition-colors duration-300" />
      <div className="relative flex flex-col h-full">
        <div className="flex items-center gap-4 mb-5">
          <span className="text-[2.5rem] font-black text-foreground tabular-nums leading-none tracking-tight">
            {num}
          </span>
          <span className="text-[0.72rem] font-bold uppercase tracking-widest text-emerald-500 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 shadow-[0_0_15px_-3px_rgba(52,211,153,0.3)]">
            {week}
          </span>
        </div>
        <h4 className="text-xl font-bold tracking-tight text-foreground mb-3">
          {title}
        </h4>
        <p className="text-foreground/90 leading-relaxed flex-1">{desc}</p>
      </div>
    </motion.div>
  );
}

/**
 * @param {{ q: string, a: import("react").ReactNode }} props
 */
function FAQItem({ q, a }) {
  return (
    <details className="group bg-background p-8 rounded-[2rem] border border-border/60 hover:border-primary/30 transition-all duration-300 shadow-sm [&_summary::-webkit-details-marker]:hidden cursor-pointer">
      <summary className="flex justify-between items-center text-xl font-bold outline-none select-none">
        {q}
        <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 group-open:rotate-90 transition-transform duration-300">
          <ChevronRight className="w-5 h-5" />
        </div>
      </summary>
      <div className="mt-6 text-lg text-muted-foreground leading-relaxed border-t border-border pt-6 animate-in fade-in slide-in-from-top-4 duration-300">
        {a}
      </div>
    </details>
  );
}
