import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import {
  Activity,
  AlertCircle,
  BarChart3,
  CheckCircle2,
  ChevronRight,
  Database,
  FileQuestion,
  Lightbulb,
  Network,
  PieChart,
  ShieldCheck,
  Target,
  Users
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import HeroSection from "./components/HeroSection";
import NextStepsSection from "./components/NextStepsSection";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const slideAndPop = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 15, duration: 0.6 },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

export default function MaturityAssessment() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background pt-20 selection:bg-forest/30">
      <HeroSection />

      {/* NEW PROBLEM SECTION REPLACEMENT */}
      <section className="relative z-30 bg-[#FAFAFA] py-16 lg:py-24">
        <div className="container mx-auto max-w-[1200px] px-6 flex flex-col gap-6">

          {/* Row 1: The Cost of Assuming Readiness */}
          <div className="flex flex-col lg:flex-row w-full bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden relative">
            {/* Thick left border */}
            <div className="w-3 bg-[#0A2518] absolute left-0 top-0 bottom-0 z-10"></div>
            
            {/* Left Content */}
            <div className="w-full lg:w-[40%] p-10 pl-14 flex flex-col justify-center">
              <h2 className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#0A2518] mb-6">
                <span className="h-px w-6 bg-[#0A2518]"></span>
                What we see in the field
              </h2>
              <h3 className="font-serif text-[3.5rem] leading-[1.05] tracking-tight text-[#0A2518] mb-6">
                The Cost of<br />Assuming<br />Readiness.
              </h3>
              <div className="w-12 h-px bg-yellow-500 mb-6"></div>
              <p className="text-[13px] leading-relaxed text-gray-700 font-medium max-w-[90%]">
                Most organizations drastically overestimate their data maturity. When you build advanced analytics on a fractured foundation, the results are predictably chaotic.
              </p>
            </div>

            {/* Right Content */}
            <div className="w-full lg:w-[60%] p-6 lg:p-8 bg-white flex items-center justify-center">
              <div className="w-full h-full bg-[#FEF6F6] rounded-xl border border-rose-100 p-8 relative overflow-hidden flex flex-col justify-center">
                
                <div className="flex items-center gap-4 mb-6 relative z-10">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-rose-500 text-white shadow-sm">
                    <Activity size={20} strokeWidth={2.5} />
                  </div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-rose-500 bg-rose-50 px-3 py-1 rounded-full border border-rose-100">
                    Infrastructure Risk
                  </p>
                </div>
                
                <h4 className="text-xl font-bold uppercase tracking-tight text-gray-900 mb-4 relative z-10">
                  The Pipeline That Fails Every Monday
                </h4>
                
                <p className="text-[13px] leading-relaxed text-gray-700 mb-6 max-w-[85%] relative z-10">
                  Your Data Factory pipeline fails again. The error says &quot;null reference in CustomerID transformation.&quot; Someone added a new customer type in the source ERP that your pipeline doesn&apos;t handle. This is the third time this month. There&apos;s no schema drift detection, no data quality rules, no proactive alerting.
                </p>
                
                <div className="flex items-start gap-3 bg-white/60 border-l-2 border-rose-500 py-3 px-4 rounded-r-lg relative z-10 max-w-[85%]">
                  <AlertCircle size={16} className="text-rose-500 shrink-0 mt-0.5" />
                  <p className="text-[12px] font-bold text-rose-600 leading-snug">
                    You find out when Finance calls asking why the Power BI dashboard is blank.
                  </p>
                </div>

                {/* Faint Illustration background */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-20 pointer-events-none pr-8">
                   <svg width="120" height="180" viewBox="0 0 120 180" fill="none" stroke="currentColor" className="text-rose-500" strokeWidth="1.5">
                      {/* Database */}
                      <ellipse cx="60" cy="30" rx="25" ry="8" />
                      <path d="M35 30v20c0 4.4 11.2 8 25 8s25-3.6 25-8V30" />
                      <path d="M35 50v20c0 4.4 11.2 8 25 8s25-3.6 25-8V50" />
                      <path d="M60 85v20" strokeDasharray="3 3" />
                      {/* Warning Triangle */}
                      <path d="M60 110l-20 35h40z" fill="#fff" />
                      <path d="M60 110l-20 35h40z" />
                      <path d="M60 120v15M60 140v2" strokeWidth="2" strokeLinecap="round" />
                      {/* Dashboard Card */}
                      <rect x="20" y="160" width="80" height="50" rx="4" />
                      <path d="M20 170h80" />
                      <circle cx="30" cy="165" r="1.5" />
                      <circle cx="35" cy="165" r="1.5" />
                      <circle cx="40" cy="165" r="1.5" />
                      {/* Bar chart inside */}
                      <rect x="30" y="185" width="8" height="15" />
                      <rect x="45" y="175" width="8" height="25" />
                      <rect x="60" y="190" width="8" height="10" />
                   </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Row 2: Baseline Disconnect Telemetry */}
          <div className="w-full bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col xl:flex-row gap-6 lg:items-center">
            <div className="flex-1 flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-8">
              <div className="flex items-center gap-4 shrink-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0A2518] text-white">
                  <BarChart3 size={20} />
                </div>
                <h4 className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#0A2518]">
                  Baseline Disconnect<br/>Telemetry
                </h4>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-0 flex-1">
                {/* Metric 1 */}
                <div className="flex flex-col gap-2 md:pr-4 md:border-r border-gray-100">
                  <span className="text-[9px] font-bold uppercase text-gray-500">Perceived Tech Readiness</span>
                  <span className="text-3xl font-bold text-[#0A2518]">85%</span>
                  <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-[#0A2518] w-[85%] rounded-full"></div>
                  </div>
                </div>
                {/* Metric 2 */}
                <div className="flex flex-col gap-2 md:px-4 md:border-r border-gray-100">
                  <span className="text-[9px] font-bold uppercase text-gray-500">Actual Tech Readiness</span>
                  <span className="text-3xl font-bold text-rose-600">32%</span>
                  <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-rose-500 w-[32%] rounded-full"></div>
                  </div>
                </div>
                {/* Metric 3 */}
                <div className="flex flex-col gap-2 md:px-4 md:border-r border-gray-100">
                  <span className="text-[9px] font-bold uppercase text-gray-500">Perceived Data Trust</span>
                  <span className="text-3xl font-bold text-[#2E4049]">70%</span>
                  <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-[#2E4049] w-[70%] rounded-full"></div>
                  </div>
                </div>
                {/* Metric 4 */}
                <div className="flex flex-col gap-2 md:px-4 md:border-r border-gray-100">
                  <span className="text-[9px] font-bold uppercase text-gray-500">Actual Data Quality</span>
                  <span className="text-3xl font-bold text-amber-500">28%</span>
                  <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-amber-500 w-[28%] rounded-full"></div>
                  </div>
                </div>
                {/* Metric 5 */}
                <div className="flex flex-col gap-2 md:pl-4">
                  <span className="text-[9px] font-bold uppercase text-gray-500">Governance Coverage</span>
                  <span className="text-3xl font-bold text-[#0A2518]">15%</span>
                  <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-[#0A2518] w-[15%] rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Insight Box */}
            <div className="w-full xl:w-[280px] bg-[#F5F9F7] rounded-xl p-5 flex items-start gap-4 shrink-0 xl:self-stretch border border-green-50">
              <div className="p-2 bg-white rounded-full text-[#0A2518] shadow-sm shrink-0">
                <Lightbulb size={18} />
              </div>
              <div className="flex flex-col gap-1 mt-0.5">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#0A2518]">Insight</span>
                <p className="text-[11px] font-medium leading-relaxed text-gray-700">
                  Organizations consistently rate their readiness 2-3x higher than reality before objective assessment.
                </p>
              </div>
            </div>
          </div>

          {/* Row 3: Data Management & Semantic Governance */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Card 02: Data Management */}
            <div className="bg-[#0A2518] rounded-2xl p-8 relative overflow-hidden flex flex-col justify-between h-full">
              {/* Subtle dot pattern background */}
              <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
              <div className="absolute bottom-0 right-0 w-[80%] h-[80%] bg-[radial-gradient(ellipse_at_bottom_right,rgba(255,255,255,0.08),transparent_60%)] pointer-events-none"></div>
              
              <div className="relative z-10 flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500 text-[#0A2518]">
                    <Database size={20} strokeWidth={2.5} />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-amber-500 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                    Data Management
                  </span>
                </div>
                
                <h4 className="text-xl font-bold uppercase tracking-tight text-white mt-2">
                  Six Customer IDs, Zero Master Data
                </h4>
                
                <p className="text-[13px] leading-relaxed text-white/80">
                  You need to join customers from Salesforce with orders from your ERP. Simple, right? Except Salesforce uses &quot;AccountID,&quot; the ERP uses &quot;CustomerNumber,&quot; and there&apos;s no master data management.
                </p>
              </div>
              
              <div className="relative z-10 mt-10 border border-amber-500/30 bg-amber-500/5 p-4 rounded-xl flex items-start gap-4">
                <div className="p-2 bg-amber-500/20 text-amber-500 rounded-lg shrink-0 mt-0.5">
                  <Users size={18} />
                </div>
                <p className="text-[12px] font-medium leading-relaxed text-amber-400">
                  The same customer appears 47 different ways across systems. Your Data Engineer spent three days building a fuzzy match that&apos;s 85% accurate. Everyone pretends that&apos;s good enough.
                </p>
              </div>
            </div>

            {/* Card 03: Semantic Governance */}
            <div className="bg-white border border-gray-100 shadow-sm rounded-2xl p-8 relative overflow-hidden flex flex-col justify-between h-full">
              <div className="relative z-10 flex flex-col gap-6 w-full lg:w-[75%]">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500 text-white shadow-sm">
                    <Network size={20} strokeWidth={2.5} />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-purple-600 bg-purple-50 px-3 py-1 rounded-full border border-purple-100">
                    Semantic Governance
                  </span>
                </div>
                
                <h4 className="text-xl font-bold uppercase tracking-tight text-gray-900 mt-2">
                  Nobody Knows Where the Number Came From
                </h4>
                
                <p className="text-[13px] leading-relaxed text-gray-700">
                  Finance asks why the revenue number in the executive Power BI dashboard doesn&apos;t match the revenue in the sales report. Both are technically &quot;correct.&quot; The executive dashboard excludes returns that haven&apos;t been processed. The sales report includes pending orders.
                </p>
              </div>
              
              <div className="relative z-10 mt-10 bg-[#FAF5FF] py-3 px-4 rounded-xl flex items-start gap-3 w-full lg:w-[85%] border border-purple-100">
                <FileQuestion size={16} className="text-purple-500 shrink-0 mt-0.5" />
                <p className="text-[12px] font-medium text-purple-700 leading-snug">
                  Neither is wrong, but there&apos;s no canonical definition documented anywhere in your semantic model.
                </p>
              </div>

              {/* Faint Illustration background */}
              <div className="absolute right-0 bottom-0 opacity-20 pointer-events-none p-6">
                 <svg width="120" height="150" viewBox="0 0 120 150" fill="none" stroke="currentColor" className="text-purple-500" strokeWidth="1.5">
                    {/* Question mark node */}
                    <circle cx="60" cy="30" r="20" fill="#fff" />
                    <circle cx="60" cy="30" r="20" />
                    <path d="M55 25c0-3 10-5 10 0 0 3-5 5-5 8v2" />
                    <circle cx="60" cy="40" r="1.5" fill="currentColor" />
                    
                    {/* Lines down */}
                    <path d="M60 50v15" strokeDasharray="3 3" />
                    <path d="M40 80v-5h40v5" strokeDasharray="3 3" />
                    <path d="M40 80v10" strokeDasharray="3 3" />
                    <path d="M80 80v10" strokeDasharray="3 3" />
                    
                    {/* Left node - Dollar sign */}
                    <rect x="25" y="90" width="30" height="30" rx="4" fill="#fff" />
                    <rect x="25" y="90" width="30" height="30" rx="4" />
                    <path d="M40 100v10M36 102c0-2 8-2 8 0s-8 4-8 6 8 2 8 0" />
                    
                    {/* Right node - Bar chart */}
                    <rect x="65" y="90" width="30" height="30" rx="4" fill="#fff" />
                    <rect x="65" y="90" width="30" height="30" rx="4" />
                    <rect x="72" y="105" width="4" height="10" />
                    <rect x="78" y="100" width="4" height="15" />
                    <rect x="84" y="95" width="4" height="20" />
                 </svg>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Deliverables Section - Balanced Compact Grid */}
