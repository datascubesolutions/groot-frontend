"use client";

import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { Activity, AlertCircle, CheckCircle2, ChevronRight, PieChart, ShieldCheck, Target } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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

export default function MaturityAssessment() {
  return (
    <main className="pt-20 min-h-screen relative bg-background">
      <Breadcrumb
        items={[
          { label: "Services", href: "/services" },
          { label: "Define Your Roadmap", href: "/services/define-your-roadmap" },
          { label: "Maturity Assessment", href: "/services/define-your-roadmap/maturity-assessment" },
        ]}
      />

      {/* Hero Section - Split Layout */}
      <section className="relative py-24 lg:py-32 overflow-hidden bg-background">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--primary)/0.15),transparent_50%)]" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

            {/* Left Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="lg:col-span-7 max-w-2xl"
            >
              <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-[1.1]">
                <span className="text-foreground">Data &amp; Analytics </span>
                <br />
                <span className="text-[hsl(var(--secondary))]">
                  Maturity Assessment
                </span>
              </motion.h1>
              <motion.p variants={fadeIn} className="text-xl md:text-2xl text-foreground/90 mb-4 leading-relaxed font-light">
                Before you can close the gap, you need to know where the gap is. We assess your current data capabilities across six dimensions and show you exactly where you stand — with evidence, not assumptions.
              </motion.p>
              <motion.p variants={fadeIn} className="text-base text-foreground/80 mb-10 leading-relaxed max-w-xl">
                Evidence-based scoring, gap analysis, and prioritized recommendations so you can invest in Fabric and Azure with confidence — no guesswork, no vendor bias.
              </motion.p>

              <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact?service=maturity-assessment" passHref>
                  <Button variant="hero" size="lg" className="px-8 shadow-primary/25 shadow-xl group">
                    Schedule an Assessment
                    <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Visual (High-Quality Abstract Image) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 relative hidden lg:block"
            >
              <div className="relative w-full aspect-square max-w-lg mx-auto rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_80px_-20px_rgba(16,185,129,0.3)]">
                <Image
                  src="/images/maturity/live_radar.png"
                  alt="Data Professionals Analyzing Digital Radar"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Problem - Sticky Scroll */}
      <section className="py-24 bg-muted/20 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

            {/* Sticky Sidebar */}
            <div className="lg:col-span-5 pl-0 lg:pl-4">
              <div className="sticky top-32">
                <h2 className="text-sm font-bold uppercase tracking-widest text-emerald-500 mb-4">What we see in the field</h2>
                <h3 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-foreground">The cost of assuming readiness.</h3>
                <p className="text-xl text-foreground/90 leading-relaxed mb-4">
                  Most organizations drastically overestimate their data maturity. When you build advanced analytics on a fractured foundation, the results are predictably chaotic.
                </p>
                <p className="text-foreground/80 leading-relaxed text-sm mb-8">
                  These patterns show up in every industry we assess — from pipeline failures and master-data chaos to conflicting definitions that block trust in numbers.
                </p>
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-border/50 shadow-lg">
                  <Image
                    src="/images/maturity/live_data_chaos.png"
                    alt="Frustrated IT Team in Disorganized Server Room"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Scrollable Content */}
            <div className="lg:col-span-7 flex flex-col gap-8 pt-10">
              <motion.div
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn}
                className="bg-background/80 backdrop-blur-md p-10 rounded-[2rem] border border-border/60 hover:border-primary/40 shadow-sm hover:shadow-glow transition-all duration-500 group"
              >
                <div className="w-14 h-14 bg-emerald-500/10 text-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Activity size={28} />
                </div>
                <h4 className="text-2xl font-bold mb-2">The Pipeline That Fails Every Monday</h4>
                <p className="text-sm text-foreground/80 mb-4">Infrastructure &amp; reliability</p>
                <p className="text-lg text-foreground/90 leading-relaxed">Your Data Factory pipeline fails again. The error says &quot;null reference in CustomerID transformation.&quot; Someone added a new customer type in the source ERP that your pipeline doesn&apos;t handle. This is the third time this month. There&apos;s no schema drift detection, no data quality rules, no proactive alerting. You find out when Finance calls asking why the Power BI dashboard is blank.</p>
              </motion.div>

              <motion.div
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn}
                className="bg-background/80 backdrop-blur-md p-10 rounded-[2rem] border border-border/60 hover:border-primary/40 shadow-sm hover:shadow-glow transition-all duration-500 group"
              >
                <div className="w-14 h-14 bg-cyan-500/10 text-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <AlertCircle size={28} />
                </div>
                <h4 className="text-2xl font-bold mb-2">Six Customer IDs, Zero Master Data</h4>
                <p className="text-sm text-foreground/80 mb-4">Data management &amp; identity</p>
                <p className="text-lg text-foreground/90 leading-relaxed">You need to join customers from Salesforce with orders from your ERP. Simple, right? Except Salesforce uses &quot;AccountID,&quot; the ERP uses &quot;CustomerNumber,&quot; and there&apos;s no master data management. The same customer appears 47 different ways across systems. Your Data Engineer spent three days building a fuzzy match that&apos;s 85% accurate. Everyone pretends that&apos;s good enough.</p>
              </motion.div>

              <motion.div
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn}
                className="bg-background/80 backdrop-blur-md p-10 rounded-[2rem] border border-border/60 hover:border-primary/40 shadow-sm hover:shadow-glow transition-all duration-500 group"
              >
                <div className="w-14 h-14 bg-blue-500/10 text-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Target size={28} />
                </div>
                <h4 className="text-2xl font-bold mb-2">Nobody Knows Where the Number Came From</h4>
                <p className="text-sm text-foreground/80 mb-4">Semantic layer &amp; governance</p>
                <p className="text-lg text-foreground/90 leading-relaxed">Finance asks why the revenue number in the executive Power BI dashboard doesn&apos;t match the revenue in the sales report. Both are technically &quot;correct.&quot; The executive dashboard excludes returns that haven&apos;t been processed. The sales report includes pending orders. Neither is wrong, but there&apos;s no canonical definition documented anywhere in your semantic model.</p>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* Deliverables - Bento Grid */}
      <section className="py-32 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,hsl(var(--primary)/0.05),transparent_40%)]" />
        <div className="container mx-auto px-6 relative z-10 max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-sm font-bold uppercase tracking-widest text-emerald-500 mb-4 drop-shadow-[0_0_10px_rgba(52,211,153,0.25)]">Deliverables</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">Clarity over assumptions.</h3>
            <p className="text-foreground/80 max-w-2xl mx-auto text-lg leading-relaxed">
              Every assessment produces the same high-quality artifacts — no shortcuts, no templated scores. You get evidence, priorities, and a path forward.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-fr">
            {/* Large Feature 1 */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
              className="md:col-span-8 bg-muted/20 backdrop-blur-sm border border-border/60 rounded-[2rem] p-10 hover:border-primary/40 transition-colors shadow-sm relative overflow-hidden flex flex-col justify-end min-h-[300px]"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[80px] rounded-full" />
              <div className="relative z-10">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/40 shadow-[0_0_20px_-5px_rgba(52,211,153,0.4)] group-hover:bg-emerald-500/20 transition-all duration-300">
                  <PieChart className="w-7 h-7" strokeWidth={1.5} />
                </div>
                <h4 className="text-3xl font-bold mb-2 text-foreground">Maturity Scorecard</h4>
                <p className="text-sm text-foreground/80 mb-4">Six dimensions, evidence-based scores</p>
                <p className="text-lg text-foreground/90 leading-relaxed max-w-2xl">
                  A scored assessment across Data Management, Analytics Capability, Governance, Technology, Organization, and Culture. Each dimension is rated with clear evidence from stakeholder interviews and technical review — not gut feel. Scores are defensible and repeatable.
                </p>
              </div>
            </motion.div>

            {/* Feature 2: Added Image representation */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
              className="md:col-span-12 bg-muted/20 backdrop-blur-sm border border-border/60 rounded-[2rem] p-0 hover:border-primary/40 transition-colors shadow-sm relative overflow-hidden flex flex-col md:flex-row items-center min-h-[300px]"
            >
              <div className="w-full md:w-1/2 p-10 flex flex-col justify-center h-full relative z-10">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400 ring-1 ring-cyan-500/40 shadow-[0_0_20px_-5px_rgba(6,182,212,0.4)] group-hover:bg-cyan-500/20 transition-all duration-300">
                  <Target className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <h4 className="text-2xl font-bold mb-2 text-foreground">Gap Analysis & Strategy</h4>
                <p className="text-sm text-foreground/80 mb-4">Current state vs. target state architecture</p>
                <p className="text-foreground/90 leading-relaxed max-w-lg">
                  For each dimension we document where you are today vs. where you need to be. Gaps are prioritized by business impact and dependency order — not ease of implementation — so your roadmap is actionable and backed by a solid architectural plan.
                </p>
              </div>
              <div className="w-full md:w-1/2 relative h-[300px] md:h-full min-h-[300px]">
                <Image
                  src="/images/maturity/live_strategic_architecture.png"
                  alt="Senior Tech Professionals Sketching Data Architecture"
                  fill
                  className="object-cover object-left"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent md:bg-gradient-to-r md:from-background md:via-transparent md:to-transparent" />
              </div>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
              className="md:col-span-4 bg-muted/20 backdrop-blur-sm border border-border/60 rounded-[2rem] p-10 hover:border-primary/40 transition-colors shadow-sm relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400 ring-1 ring-blue-500/40 shadow-[0_0_20px_-5px_rgba(59,130,246,0.4)] group-hover:bg-blue-500/20 transition-all duration-300">
                  <ShieldCheck className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <h4 className="text-2xl font-bold mb-2 text-foreground">Technical Findings</h4>
                <p className="text-sm text-foreground/80 mb-4">Architecture &amp; platform review</p>
                <p className="text-foreground/90 leading-relaxed">
                  Concrete observations from our review: Fabric/Azure configuration, pipeline reliability and monitoring, semantic model design, Purview adoption, and security and access controls — with specific improvement opportunities.
                </p>
              </div>
            </motion.div>

            {/* Large Feature 4 */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
              className="md:col-span-8 bg-muted/20 backdrop-blur-sm border border-border/60 rounded-[2rem] p-10 hover:border-primary/40 transition-colors shadow-sm relative overflow-hidden flex flex-col justify-end min-h-[300px]"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[80px] rounded-full" />
              <div className="relative z-10">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-400 ring-1 ring-indigo-500/40 shadow-[0_0_20px_-5px_rgba(99,102,241,0.4)] group-hover:bg-indigo-500/20 transition-all duration-300">
                  <CheckCircle2 className="w-7 h-7" strokeWidth={1.5} />
                </div>
                <h4 className="text-3xl font-bold mb-2 text-foreground">Prioritized Recommendations &amp; Exec Summary</h4>
                <p className="text-sm text-foreground/80 mb-4">Roadmap and one-pager for leadership</p>
                <p className="text-lg text-foreground/90 leading-relaxed max-w-2xl">
                  A prioritized set of recommendations with rationale and rough effort estimates. We explain why and in what order. Delivered alongside a one-page executive summary so leadership can make decisions — not just get informed.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Methodology - Bento grid (no vertical timeline) */}
      <section className="py-32 bg-muted/20 relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold uppercase tracking-widest text-emerald-500 mb-4 drop-shadow-[0_0_10px_rgba(52,211,153,0.25)]">Methodology</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">How we evaluate completely.</h3>
            <p className="text-foreground/80 max-w-2xl mx-auto text-lg leading-relaxed">
              Interviews, technical review, and evidence-based scoring — typically 3–4 weeks from kickoff to final presentation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <MethodCard
              step={1}
              week="Week 1–2"
              title="Stakeholder interviews"
              desc="We interview 8–12 stakeholders across business and technology to surface gaps between what teams believe about your data capabilities and what’s actually happening on the ground."
            />
            <MethodCard
              step={2}
              week="Week 2–3"
              title="Technical review"
              desc="We review your architecture: Azure/Fabric setup, Data Factory pipelines, Lakehouse, Power BI semantic models, Purview catalog, and security. We compare what’s documented with what’s implemented."
            />
            <MethodCard
              step={3}
              week="Week 3"
              title="Analysis & scoring"
              desc="Findings are synthesized into a scored assessment. Each dimension is rated with specific evidence and concrete examples from your environment — no generic checklists."
            />
            <MethodCard
              step={4}
              week="Week 3–4"
              title="Presentation & alignment"
              desc="We present to leadership and facilitate discussion. The goal is clear alignment on priorities and next steps — no sugar-coating, no buried findings."
            />
          </div>
        </div>
      </section>

      {/* Real Example - Premium Section */}
      <section className="py-32 bg-background relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="rounded-[3rem] border border-border bg-card p-10 md:p-16 shadow-[0_8px_40px_rgba(0,0,0,0.04)] dark:shadow-[0_40px_80px_rgba(0,0,0,0.65)] overflow-hidden relative">
            {/* Subtle background glow */}
            <div className="pointer-events-none absolute inset-0 opacity-10 [background-image:radial-gradient(circle_at_top_left,hsl(var(--primary)),transparent_40%)] dark:opacity-20" />

            <div className="relative z-10 grid gap-12 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-start">
              {/* Left: story + metrics */}
              <div className="space-y-10">
                <div className="flex items-center gap-4">
                  <div className="inline-flex rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-600 dark:text-emerald-400">
                    Case Study · Technology &amp; SaaS
                  </div>
                  <div className="hidden md:block h-px flex-1 bg-gradient-to-r from-emerald-500/40 to-transparent" />
                </div>

                <div className="space-y-4">
                  <p className="text-sm font-semibold tracking-[0.24em] uppercase text-emerald-600 dark:text-emerald-400">
                    Maturity Assessment in Practice
                  </p>
                  <h2 className="text-3xl md:text-[2.9rem] md:leading-[1.08] font-semibold tracking-tight text-foreground">
                    How we helped a PE portfolio company realize their data maturity gap.
                  </h2>
                </div>

                <p className="text-base md:text-lg text-foreground/80 leading-relaxed max-w-2xl">
                  A PE-backed software company had invested in Azure Analysis Services (AAS) for enterprise data modeling.
                  Leadership believed they were <span className="font-semibold text-foreground">“data mature.”</span> But refresh failures were
                  increasing, autoscaling wasn&apos;t working, and the BI team was frustrated with operating AAS and Power BI as two
                  separate platforms.
                </p>

                <div className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden border border-border/60 shadow-sm mt-6">
                  <Image
                    src="/images/maturity/live_enterprise_alignment.png"
                    alt="Executive Team Discussing Data Strategy"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/5 dark:bg-black/20" />
                </div>

                <div className="grid gap-8 sm:grid-cols-3 max-w-xl mt-8">
                  <div>
                    <p className="text-4xl md:text-5xl font-black text-emerald-500 mb-1">3x</p>
                    <p className="text-sm font-medium text-foreground/70">Faster refresh after remediation</p>
                  </div>
                  <div>
                    <p className="text-3xl md:text-4xl font-black text-emerald-500 mb-1">8 Weeks</p>
                    <p className="text-sm font-medium text-foreground/70">To complete the Fabric migration</p>
                  </div>
                  <div className="flex flex-col justify-end">
                    <Link
                      href="/industries/technology-saas"
                      className="inline-flex items-center gap-2 text-sm font-bold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors uppercase tracking-wider group"
                    >
                      See more SaaS work
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Right: findings card */}
              <div className="relative mt-4 lg:mt-0">
                <div className="absolute -inset-0.5 rounded-[2.25rem] bg-gradient-to-br from-emerald-500/20 via-cyan-500/10 to-transparent blur-xl opacity-60 dark:from-emerald-400/30 dark:opacity-40" />
                <div className="relative rounded-[2rem] border border-border bg-card px-7 py-8 md:px-8 md:py-9 shadow-lg backdrop-blur-xl">
                  <p className="text-xs font-semibold uppercase tracking-[0.26em] text-emerald-600 dark:text-emerald-400 mb-5">
                    What We Found
                  </p>
                  <ul className="space-y-4 text-sm md:text-[0.95rem] text-foreground/80 leading-relaxed">
                    <li className="flex gap-3">
                      <span className="mt-[6px] inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0" />
                      <span>
                        <span className="font-semibold text-foreground">Technology.</span> AAS models were solid, but the platform was
                        hitting scale limits. Refreshes were coordinated through brittle, manual runbooks.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-[6px] inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0" />
                      <span>
                        <span className="font-semibold text-foreground">Governance.</span> No Purview integration, lineage, or sensitivity
                        labelling — making impact analysis on schema changes almost impossible.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-[6px] inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0" />
                      <span>
                        <span className="font-semibold text-foreground">Organization.</span> One senior developer owned the entire stack.
                        Knowledge was not documented or shared, creating a single point of failure.
                      </span>
                    </li>
                  </ul>

                  <div className="mt-6 pt-6 border-t border-border/60 text-xs text-muted-foreground">
                    This is the kind of gap pattern we see repeatedly in “mature” teams — strong individual effort on top of a fragile
                    operating model.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            <FAQItem
              q="How is this different from a Microsoft assessment?"
              a="Microsoft's assessments focus on Azure adoption. We evaluate your organization's capabilities independent of tool vendor. We'll tell you if Fabric isn't the right choice — Microsoft won't."
            />
            <FAQItem
              q="Who should be involved from our side?"
              a="Typically 8-12 stakeholders: CDO or equivalent, IT leadership, business unit leaders, and 3-4 key data practitioners (your Data Engineers, Power BI developers, analysts)."
            />
            <FAQItem
              q="What if we already know our gaps?"
              a="You might know some. But assessments consistently reveal blind spots — capabilities teams assume exist but don't, or problems that look technical but are actually organizational."
            />
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-24 bg-background relative overflow-hidden">
        {/* Decorative Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary)/0.04)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.04)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-foreground">Continue Your Journey</h2>
            <p className="text-foreground/80 text-lg max-w-2xl mx-auto">Explore related services to help you define and execute your data strategy.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/services/define-your-roadmap/enterprise-data-strategy" className="group block h-full">
              <div className="bg-muted/20 backdrop-blur-md rounded-[2rem] p-8 border border-border/60 hover:border-emerald-500/50 transition-all duration-500 shadow-sm hover:shadow-[0_10px_40px_-5px_rgba(16,185,129,0.15)] h-full flex flex-col relative overflow-hidden">
                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl group-hover:bg-emerald-500/20 group-hover:scale-150 transition-all duration-700" />
                <div className="relative z-10 flex-1">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-8 border border-emerald-500/20 group-hover:bg-emerald-500/20 group-hover:scale-110 transition-transform duration-500">
                    <Target size={24} strokeWidth={2} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground tracking-tight group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">Enterprise Data Strategy</h3>
                  <p className="text-foreground/80 text-[0.95rem] leading-relaxed mb-8">Align your data initiatives with business outcomes and build a comprehensive roadmap.</p>
                </div>
                <div className="pt-6 border-t border-border/50 relative z-10 mt-auto">
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-2 text-[0.85rem] uppercase tracking-widest group-hover:text-emerald-700 dark:group-hover:text-emerald-300 transition-colors">
                    LEARN MORE <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </div>
              </div>
            </Link>

            <Link href="/services/define-your-roadmap/stack-evaluation" className="group block h-full">
              <div className="bg-muted/20 backdrop-blur-md rounded-[2rem] p-8 border border-border/60 hover:border-emerald-500/50 transition-all duration-500 shadow-sm hover:shadow-[0_10px_40px_-5px_rgba(16,185,129,0.15)] h-full flex flex-col relative overflow-hidden">
                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl group-hover:bg-emerald-500/20 group-hover:scale-150 transition-all duration-700" />
                <div className="relative z-10 flex-1">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-8 border border-emerald-500/20 group-hover:bg-emerald-500/20 group-hover:scale-110 transition-transform duration-500">
                    <PieChart size={24} strokeWidth={2} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground tracking-tight group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">Platform Evaluation</h3>
                  <p className="text-foreground/80 text-[0.95rem] leading-relaxed mb-8">Objective analysis to select the right tools and architecture for your specific needs.</p>
                </div>
                <div className="pt-6 border-t border-border/50 relative z-10 mt-auto">
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-2 text-[0.85rem] uppercase tracking-widest group-hover:text-emerald-700 dark:group-hover:text-emerald-300 transition-colors">
                    LEARN MORE <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </div>
              </div>
            </Link>

            <Link href="/services/build-your-foundation/foundation-build" className="group block h-full">
              <div className="bg-muted/20 backdrop-blur-md rounded-[2rem] p-8 border border-border/60 hover:border-emerald-500/50 transition-all duration-500 shadow-sm hover:shadow-[0_10px_40px_-5px_rgba(16,185,129,0.15)] h-full flex flex-col relative overflow-hidden">
                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl group-hover:bg-emerald-500/20 group-hover:scale-150 transition-all duration-700" />
                <div className="relative z-10 flex-1">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-8 border border-emerald-500/20 group-hover:bg-emerald-500/20 group-hover:scale-110 transition-transform duration-500">
                    <CheckCircle2 size={24} strokeWidth={2} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground tracking-tight group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">Foundation Build</h3>
                  <p className="text-foreground/80 text-[0.95rem] leading-relaxed mb-8">Implement a robust, scalable data architecture that serves as the bedrock for analytics.</p>
                </div>
                <div className="pt-6 border-t border-border/50 relative z-10 mt-auto">
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-2 text-[0.85rem] uppercase tracking-widest group-hover:text-emerald-700 dark:group-hover:text-emerald-300 transition-colors">
                    LEARN MORE <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background border-t border-border">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="bg-primary/5 border border-primary/20 rounded-[3rem] p-12 md:p-16 text-center shadow-lg shadow-primary/5">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-foreground">Know where you stand.</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-4 leading-relaxed">
              A maturity assessment gives you the baseline you need to make confident Microsoft Fabric and Azure investments.
            </p>
            <p className="text-muted-foreground/90 max-w-2xl mx-auto mb-10 leading-relaxed">
              Evidence-based scores, gap analysis, and prioritized recommendations — no vendor bias, no guesswork. Let&apos;s find your gaps before they find you.
            </p>
            <Link href="/contact?service=maturity-assessment" passHref>
              <Button variant="hero" size="lg" className="px-10 text-lg h-14 rounded-full">
                Schedule an Assessment
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function MethodCard({ step, week, title, desc }) {
  const num = String(step).padStart(2, "0");
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={fadeIn}
      className="group relative bg-background border border-border/60 rounded-[1.75rem] p-8 shadow-sm hover:shadow-lg hover:border-primary/25 transition-all duration-300 overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors duration-300" />
      <div className="relative flex flex-col h-full">
        <div className="flex items-center gap-4 mb-5">
          <span className="text-[2.5rem] font-black text-foreground tabular-nums leading-none tracking-tight">{num}</span>
          <span className="text-[0.72rem] font-bold uppercase tracking-widest text-emerald-500 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 shadow-[0_0_15px_-3px_rgba(52,211,153,0.3)]">
            {week}
          </span>
        </div>
        <h4 className="text-xl font-bold tracking-tight text-foreground mb-3">{title}</h4>
        <p className="text-foreground/90 leading-relaxed flex-1">{desc}</p>
      </div>
    </motion.div>
  );
}

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
