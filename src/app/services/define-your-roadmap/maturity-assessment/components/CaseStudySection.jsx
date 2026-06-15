"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  BarChart2,
  BarChart3,
  CheckCircle2,
  Database,
  FileSearch,
  Lightbulb,
  RefreshCcw,
  Shield,
  TrendingUp,
  Users
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CaseStudySection() {
  return (
    <section className="bg-background flex flex-col w-full py-10 lg:py-8 lg:min-h-[calc(100vh-80px)] overflow-hidden font-sans text-foreground">
      <div className="container mx-auto max-w-[1440px] px-4 sm:px-6 lg:h-full flex flex-col lg:my-auto">
        {/* Main Grid Wrapper */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-3 lg:h-full lg:max-h-[850px] lg:min-h-[700px]">
          {/* LEFT SIDE: 8 Cols */}
          <div className="lg:col-span-8 flex flex-col gap-3 lg:h-full">
            {/* Top Row: Image & Text */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 flex-1">
              {/* Image */}
              <div className="relative w-full h-full overflow-hidden rounded-[20px] shadow-sm min-h-[180px]">
                <Image
                  src="/images/maturity/live_enterprise_alignment.png"
                  alt="Enterprise Alignment"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Text Card */}
              <div className="flex flex-col justify-center rounded-[20px] bg-card p-5 lg:p-6 border border-border shadow-sm lg:h-full">
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <div className="flex items-center gap-2">
                    <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#0A2518]">
                      <BarChart2 className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-[11px] font-bold tracking-widest text-[#0A2518] uppercase">
                      Technology & SaaS
                    </span>
                  </div>
                  <span className="text-slate-300 mx-1 hidden sm:block">•</span>
                  <span className="text-[11px] font-bold tracking-widest text-slate-500 uppercase">
                    Use Case Reference: UC4 — Fabric Migration Assessment
                  </span>
                </div>
                <h2 className="mb-3 text-[1.5rem] lg:text-[1.85rem] font-bold leading-[1.15] tracking-tight text-slate-900">
                  How We Helped a PE Portfolio Company Find Their Gaps.
                </h2>
                <p className="text-sm leading-relaxed text-slate-700 font-medium">
                  A PE-backed software company had invested in Azure Analysis
                  Services (AAS) for enterprise data modeling. Leadership
                  believed they were &quot;data mature.&quot; But refresh
                  failures were increasing, autoscaling wasn&apos;t working, and
                  the BI team was frustrated with the complexity of managing AAS
                  alongside Power BI.
                </p>
              </div>
            </div>

            {/* ROI Card */}
            <div className="flex flex-col justify-center rounded-[20px] bg-card p-5 lg:p-7 border border-border shadow-sm shrink-0">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2 mt-0.5">
                  <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-emerald-50">
                    <BarChart3 className="h-3 w-3 text-[#0A2518]" />
                  </div>
                  <span className="text-[11px] font-bold tracking-widest text-[#0A2518] uppercase">
                    The ROI of Reality
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-slate-600 font-medium max-w-[65%] hidden md:block">
                  A maturity assessment isn&apos;t about pointing fingers.
                  It&apos;s about eliminating{" "}
                  <strong className="font-semibold text-slate-800">
                    technical debt constraints
                  </strong>{" "}
                  so you can stop wrestling with fractured pipelines and start
                  scaling securely.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: 4 Cols */}
          <div className="lg:col-span-4 flex flex-col rounded-[20px] bg-card p-5 lg:p-6 border border-border shadow-sm lg:h-full">
            {/* Top Stats */}
            <div className="grid grid-cols-2 gap-3 mb-5">
              <div className="flex flex-col justify-center rounded-[16px] border border-border bg-muted/50 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-50">
                    <RefreshCcw
                      className="h-3 w-3 text-[#0A2518]"
                      strokeWidth={2}
                    />
                  </div>
                  <span className="text-[2rem] font-bold tracking-tight text-[#0A2518] leading-none">
                    3x
                  </span>
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-600 leading-[1.3] mt-1">
                  Faster Refresh
                  <br />
                  After Remediation
                </span>
              </div>
              <div className="flex flex-col justify-center rounded-[16px] border border-border bg-muted/50 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-50">
                    <Database
                      className="h-3 w-3 text-[#0A2518]"
                      strokeWidth={2}
                    />
                  </div>
                  <span className="text-[2rem] font-bold tracking-tight text-[#0A2518] leading-none">
                    8w
                  </span>
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-600 leading-[1.3] mt-1">
                  To Complete
                  <br />
                  Fabric Migration
                </span>
              </div>
            </div>
            {/* closes grid grid-cols-2 */}

            {/* Divider */}
            <div className="h-[1px] w-full bg-slate-100 mb-4"></div>

            {/* Findings List */}
            <div className="flex flex-col gap-4 flex-1 overflow-y-auto pr-1">
              {/* Finding 1 */}
              <div className="flex gap-3 relative">
                <div className="absolute left-[11px] top-[30px] bottom-[-20px] w-[1px] bg-slate-100"></div>
                <div className="flex h-[24px] w-[24px] shrink-0 items-center justify-center rounded-full bg-card border border-border z-10 mt-0.5">
                  <Lightbulb className="h-[10px] w-[10px] text-slate-400" />
                </div>
                <div className="flex flex-col pb-2">
                  <span className="text-[11px] font-bold tracking-widest text-slate-600 uppercase mb-0.5">
                    Tech
                  </span>
                  <p className="text-sm leading-relaxed text-slate-700 font-medium">
                    AAS models were well-designed, but the platform was reaching
                    its limits. No autoscaling. XMLA endpoints weren&apos;t
                    properly configured.
                  </p>
                </div>
              </div>

              {/* Finding 2 */}
              <div className="flex gap-3 relative">
                <div className="absolute left-[11px] top-[30px] bottom-[-20px] w-[1px] bg-slate-100"></div>
                <div className="flex h-[24px] w-[24px] shrink-0 items-center justify-center rounded-full bg-card border border-border z-10 mt-0.5">
                  <TrendingUp className="h-[10px] w-[10px] text-slate-400" />
                </div>
                <div className="flex flex-col pb-2">
                  <span className="text-[11px] font-bold tracking-widest text-slate-600 uppercase mb-0.5">
                    Analytics
                  </span>
                  <p className="text-sm leading-relaxed text-slate-700 font-medium">
                    Good DAX measures, but models were disconnected from modern
                    Power BI Premium features (dataflows).
                  </p>
                </div>
              </div>

              {/* Finding 3 */}
              <div className="flex gap-3 relative">
                <div className="absolute left-[11px] top-[30px] bottom-[-20px] w-[1px] bg-slate-100"></div>
                <div className="flex h-[24px] w-[24px] shrink-0 items-center justify-center rounded-full bg-card border border-border z-10 mt-0.5">
                  <Shield className="h-[10px] w-[10px] text-slate-400" />
                </div>
                <div className="flex flex-col pb-2">
                  <span className="text-[11px] font-bold tracking-widest text-slate-600 uppercase mb-0.5">
                    Gov
                  </span>
                  <p className="text-sm leading-relaxed text-slate-700 font-medium">
                    No Purview integration. No lineage tracking. Sensitive data
                    without classification.
                  </p>
                </div>
              </div>

              {/* Finding 4 */}
              <div className="flex gap-3 relative">
                <div className="absolute left-[11px] top-[30px] bottom-[-20px] w-[1px] bg-slate-100"></div>
                <div className="flex h-[24px] w-[24px] shrink-0 items-center justify-center rounded-full bg-card border border-border z-10 mt-0.5">
                  <Users className="h-[10px] w-[10px] text-slate-400" />
                </div>
                <div className="flex flex-col pb-2">
                  <span className="text-[11px] font-bold tracking-widest text-slate-600 uppercase mb-0.5">
                    Org
                  </span>
                  <p className="text-sm leading-relaxed text-slate-700 font-medium">
                    One senior developer maintained everything. No
                    documentation. Knowledge trapped in one head.
                  </p>
                </div>
              </div>

              {/* Finding 5 (Final) */}
              <div className="flex gap-3 relative">
                <div className="flex h-[24px] w-[24px] shrink-0 items-center justify-center rounded-full bg-emerald-50 border border-emerald-100 z-10 mt-0.5">
                  <CheckCircle2 className="h-[10px] w-[10px] text-[#0A2518]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] font-bold tracking-widest text-[#0A2518] uppercase mb-0.5">
                    Recommendation
                  </span>
                  <p className="text-sm leading-relaxed text-slate-700 font-medium">
                    Migrate from AAS to Microsoft Fabric. The assessment
                    revealed 80% of pain points would be solved.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* BOTTOM ROW */}
          <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-12 gap-4 h-auto lg:h-full lg:max-h-[180px]">
            {/* Laptop Card (5 cols) */}
            <div className="md:col-span-5 flex flex-col sm:flex-row rounded-[24px] bg-card border border-border shadow-sm overflow-hidden h-full">
              <div className="relative w-full sm:w-[40%] bg-slate-50 flex items-center justify-center overflow-hidden">
                <div
                  className="absolute inset-0 opacity-40"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 2px 2px, #cbd5e1 1px, transparent 0)",
                    backgroundSize: "16px 16px",
                  }}
                ></div>
                <div className="relative w-[120%] h-[120%] -ml-[10%] mt-[10%]">
                  <Image
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop"
                    alt="Analytics Platform"
                    fill
                    className="object-cover object-left-top rounded-lg shadow-xl"
                  />
                </div>
              </div>
              <div className="w-full sm:w-[60%] p-5 flex flex-col justify-center bg-card z-10">
                <div className="mb-2 flex items-center gap-2.5">
                  <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
                  <span className="text-[11px] font-bold tracking-widest text-slate-800 uppercase">
                    Velocity Optimized
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-slate-700 font-medium">
                  After addressing platform limits and modernizing the
                  architecture, the company saw measurable impact across cost
                  and productivity. BI team now self-sufficient without dependency on the legacy AAS admin.
                </p>
              </div>
            </div>

            {/* Bottom Stats Card (3 cols) */}
            <div className="md:col-span-3 flex flex-col justify-center rounded-[24px] bg-card border border-border shadow-sm px-6 py-4 h-full gap-3">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-rose-50 text-rose-500">
                  <ArrowDown className="h-4 w-4" strokeWidth={2.5} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[1.25rem] font-bold text-rose-500 tracking-tight leading-none">
                    -$1.2M
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    Tech Debt Avoided
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                  <TrendingUp className="h-4 w-4" strokeWidth={2.5} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[1.25rem] font-bold text-emerald-600 tracking-tight leading-none">
                    +40%
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    Velocity Lift
                  </span>
                </div>
              </div>
            </div>

            {/* CTA Card (4 cols) */}
            <div className="md:col-span-4 relative flex flex-col justify-center items-center rounded-[24px] bg-[#0A2518] p-6 overflow-hidden text-center shadow-lg h-full">
              <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 400 300"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M-50,350 C100,100 250,50 450,-50"
                    stroke="white"
                    strokeWidth="1"
                  />
                  <path
                    d="M-50,380 C120,120 270,70 450,-20"
                    stroke="white"
                    strokeWidth="1"
                  />
                  <path
                    d="M-50,410 C140,140 290,90 450,10"
                    stroke="white"
                    strokeWidth="1"
                  />
                </svg>
              </div>

              <div className="relative z-10 flex flex-col items-center w-full">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white bg-white/5 backdrop-blur-sm">
                  <FileSearch className="h-4 w-4" strokeWidth={1.5} />
                </div>
                <h3 className="mb-4 text-[1.1rem] font-semibold leading-[1.2] text-white max-w-[200px]">
                  See how we work with technology companies
                </h3>
                <Link
                  href="/industries/technology-saas"
                  className="group flex w-full max-w-[200px] items-center justify-between rounded-full border border-white/30 px-5 py-3 text-[11px] font-bold uppercase tracking-widest text-white transition-all hover:bg-white hover:text-[#0A2518]"
                >
                  Explore Solutions
                  <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * @param {{
 *   icon: import("lucide-react").LucideIcon;
 *   label: string;
 *   value: string;
 *   color: string;
 *   lightColor: string;
 *   iconColor: string;
 * }} props
 */
function GaugeItem({
  icon: IconComponent,
  label,
  value,
  color,
  lightColor,
  iconColor,
}) {
  const words = label.split(" ");
  const firstWord = words[0];
  const restWords = words.slice(1).join(" ");

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2 mb-2">
        <div
          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${lightColor}`}
        >
          <IconComponent className={`h-3.5 w-3.5 ${iconColor}`} />
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] lg:text-[11px] font-bold uppercase tracking-wider text-slate-700 leading-[1.2] whitespace-nowrap">
            {firstWord}
            <br />
            {restWords}
          </span>
        </div>
      </div>
      <div className="pl-0 mt-auto">
        <div
          className={`text-[1.5rem] lg:text-[1.8rem] font-bold mb-2 ${iconColor} leading-none tracking-tight`}
        >
          {value}
        </div>
        <div className="h-2 w-full rounded-full bg-slate-100 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: value }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className={`h-full rounded-full ${color}`}
          />
        </div>
      </div>
    </div>
  );
}

/**
 * @param {{
 *   icon: import("lucide-react").LucideIcon;
 *   label: string;
 *   text: string;
 * }} props
 */
function ListItem({ icon: IconComponent, label, text }) {
  return (
    <div className="relative flex gap-4 z-10 items-start">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-50 border-[1.5px] border-slate-200 text-[#0A2518] shadow-sm z-10 mt-0.5">
        <IconComponent className="h-4 w-4" strokeWidth={1.5} />
      </div>
      <div className="pb-1.5">
        <span className="mb-2 inline-block rounded bg-slate-100 px-2 py-0.5 text-[11px] font-bold uppercase tracking-wider text-slate-700">
          {label}
        </span>
        <p className="text-sm leading-[1.6] text-slate-500 font-medium pr-2">
          {text}
        </p>
      </div>
    </div>
  );
}
