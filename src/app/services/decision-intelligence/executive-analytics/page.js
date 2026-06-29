// @ts-nocheck
"use client";

import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { motion } from "framer-motion";
import {
  AlertCircle,
  BarChart3,
  CheckCircle2,
  ChevronRight,
  Clock,
  Phone,
  RefreshCw,
  FileDown
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const neoShadow = "shadow-[8px_8px_0_0_#000000]";
const neoShadowHover = "hover:shadow-[4px_4px_0_0_#000000] hover:translate-x-[4px] hover:translate-y-[4px]";
const neoBorder = "border-4 border-black";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

export default function ExecutiveAnalytics() {
  return (
    <main className="min-h-screen bg-[#fafafa] text-black font-sans selection:bg-black selection:text-white pt-24 overflow-x-hidden">
      
      {/* Decorative Grid Background */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-10 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

      {/* Hero Section */}
      <section className="relative z-10 px-6 max-w-7xl mx-auto min-h-[calc(100vh-96px)] flex items-center pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="flex flex-col gap-8">
            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-black uppercase leading-[0.9] tracking-tighter">
              Executive <br/> Analytics & <br/> <span className="text-teal-400 stroke-black" style={{ WebkitTextStroke: "2px black" }}>Board Reporting</span>
            </motion.h1>
            <motion.p variants={fadeIn} className="text-xl md:text-2xl font-bold leading-relaxed max-w-lg">
              Power BI dashboards designed for executive decision-making. Performance at a glance. Drill-through when needed. Built for board meetings and mobile.
            </motion.p>
            <motion.div variants={fadeIn}>
              <Link href="/contact?service=executive-analytics" className={`inline-flex items-center justify-center bg-teal-400 text-black px-8 py-4 text-xl font-black uppercase ${neoBorder} ${neoShadow} transition-all duration-200 ${neoShadowHover}`}>
                Schedule a Conversation
                <ChevronRight className="ml-2 w-6 h-6 border-2 border-black rounded-full bg-white" />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="relative h-[500px] w-full">
            <div className={`absolute inset-0 bg-pink-400 ${neoBorder} ${neoShadow} rotate-3`}></div>
            <div className={`absolute inset-0 bg-white ${neoBorder} ${neoShadow} -rotate-1 overflow-hidden flex items-center justify-center p-4`}>
                <div className="relative w-full h-full border-2 border-black">
                  <Image src="/exec_analytics_dash.png" alt="Executive Dashboard" fill className="object-cover" priority />
                </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="relative z-10 bg-[#f4f4f0] text-black py-16 lg:min-h-[calc(100vh-80px)] flex flex-col justify-center border-y-4 border-black">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter mb-4">Why executive Power BI fails</h2>
            <div className="w-24 h-4 bg-yellow-400 border-2 border-black"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <ProblemCard 
              color="bg-pink-400" 
              icon={<BarChart3 size={24} />} 
              title="The 47-Metric Dashboard" 
              desc="The Power BI report shows every metric the team could think of. Scroll, scroll, scroll. The CEO wants three numbers: revenue, margin, cash. Every meeting starts with 'can you filter to just my region?'" 
            />
            <ProblemCard 
              color="bg-yellow-400" 
              icon={<Clock size={24} />} 
              title="Stale Board Deck" 
              desc="The board deck gets built on the 5th using data from the 3rd. By the meeting on the 15th, numbers are two weeks old. Decisions made on dated information." 
            />
            <ProblemCard 
              color="bg-teal-400" 
              icon={<AlertCircle size={24} />} 
              title='"Why Is This Different?"' 
              desc="Revenue in the dashboard doesn't match the quarterly board deck. Someone investigates. Different handling of a large contract. Nobody's wrong, but nobody trusts the semantic model." 
            />
          </div>
        </div>
      </section>

      {/* Deliverables Section */}
      <section className="relative z-10 py-16 lg:min-h-[calc(100vh-80px)] flex flex-col justify-center overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none z-0">
          <span className="text-[8rem] lg:text-[12rem] font-black uppercase text-gray-200 whitespace-nowrap opacity-50">Deliverables</span>
        </div>
        <div className="container relative z-10 mx-auto px-6 max-w-7xl">
          <h2 className="text-5xl lg:text-6xl font-black uppercase tracking-tighter text-center mb-8 lg:mb-12">Deliverables</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <DeliverableCard 
              title="Executive Power BI Suite" 
              icon={<Phone size={28} />}
              desc="Dashboards for executive consumption: Overall performance, Financial summary, Operational KPIs, and Trend analysis. Designed mobile-first for executives."
              bg="bg-white"
            />
            <DeliverableCard 
              title="Drill-Through Capability" 
              icon={<ChevronRight size={28} />}
              desc="Click any number to understand drivers. Revenue down? Click to see by region. Region looks odd? Click to see by customer. Without leaving Power BI."
              bg="bg-purple-300"
            />
            <DeliverableCard 
              title="Automated Daily Refresh" 
              icon={<RefreshCw size={28} />}
              desc="Data refreshes daily from Fabric Lakehouse. Executives see current numbers, not last month's close."
              bg="bg-blue-300"
            />
            <DeliverableCard 
              title="Board Export Package" 
              icon={<FileDown size={28} />}
              desc="One-click PowerPoint export with consistent formatting. Board deck is always current because it pulls from the same semantic model."
              bg="bg-white"
            />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative z-10 py-16 bg-yellow-400 border-y-4 border-black lg:min-h-[calc(100vh-80px)] flex flex-col justify-center overflow-hidden">
        <div className="absolute right-0 top-0 select-none pointer-events-none opacity-20">
          <span className="text-[12rem] lg:text-[16rem] font-black text-black leading-none -mr-10 -mt-10">04</span>
        </div>
        <div className="container relative z-10 mx-auto px-6 max-w-7xl">
          <h2 className="text-5xl lg:text-6xl font-black uppercase tracking-tighter mb-8 lg:mb-10">Our Process</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            <ProcessCard step="01" week="Week 1-2" title="Decision Discovery" desc="Interview executives to understand decision needs. What questions do they ask most? What numbers drive decisions?" />
            <ProcessCard step="02" week="Week 3-4" title="Design & Mockup" desc="Design layouts, define metrics, confirm data sources. Executives review mockups before we build." />
            <ProcessCard step="03" week="Week 5-8" title="Build & Integrate" desc="Develop in Power BI Desktop on top of semantic model. Implement drill-through, RLS, and mobile optimization." />
            <ProcessCard step="04" week="Week 8-10" title="Refinement & Adoption" desc="Deploy, gather feedback, refine. Plan for 2-3 rounds of iteration to ensure perfect fit." />
          </div>
        </div>
      </section>

      {/* Real Examples */}
      <section className="relative z-10 py-12 lg:min-h-[calc(100vh-80px)] flex flex-col justify-center bg-[#fafafa]">
        <div className="absolute inset-0 pointer-events-none opacity-10 bg-[linear-gradient(to_right,#000_2px,transparent_2px),linear-gradient(to_bottom,#000_2px,transparent_2px)] bg-[size:3rem_3rem]"></div>
        <div className="container relative z-10 mx-auto px-6 max-w-7xl flex flex-col gap-12">
          <CaseStudy 
            industry="Construction & Fleet"
            title='"40% reduction in rental overruns through real-time equipment utilization tracking"'
            situation="A construction company didn't know how efficiently their equipment and fleet vehicles were being used. Rental equipment often sat idle, or exceeded contracted hours resulting in overage fees."
            solution={[
              "Samsara API Integration to Fabric Lakehouse",
              "Utilization Analytics vs rented hours",
              "Executive Dashboard with safety rankings"
            ]}
            stat1={{ val: "40%", label: "Reduction in overruns" }}
            stat2={{ val: "$180K", label: "Saved on purchases" }}
            link="/industries/construction-fleet"
            bg="bg-teal-400"
          />

          <CaseStudy 
            industry="Private Equity & M&A"
            title='"Board prep time reduced from 4 hours to 30 minutes with automated executive dashboards"'
            situation="A PE portfolio CFO spent 4+ hours before every board meeting compiling performance data from three acquired companies into PowerPoint with different ERPs."
            solution={[
              "Single executive Power BI dashboard",
              "Drill-through by portfolio company (P&L)",
              "One-click PowerPoint export"
            ]}
            stat1={{ val: "30 Min", label: "Board prep time" }}
            stat2={{ val: "24h", label: "Max data latency" }}
            link="/industries/private-equity-ma"
            bg="bg-pink-400"
          />
        </div>
      </section>

      {/* FAQ & CTA */}
      <section className="relative z-10 py-16 bg-teal-300 text-black border-t-4 border-black lg:min-h-[calc(100vh-80px)] flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,#fff_1px,transparent_1px)] bg-[size:40px_40px] opacity-30"></div>
        <div className="container relative z-10 mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5 flex flex-col">
              <div className="mb-6 self-start bg-white text-black px-6 py-3 border-4 border-black shadow-[8px_8px_0_0_#000] transform -rotate-2 hover:rotate-0 transition-transform">
                <h2 className="text-6xl md:text-7xl font-black uppercase tracking-tighter">FAQ</h2>
              </div>
              <p className="text-xl font-bold mb-12 max-w-md">Common questions about executive analytics, answered straight.</p>
              
              <div className={`bg-white text-black p-8 md:p-10 ${neoBorder} ${neoShadow} transform rotate-1`}>
                <h3 className="text-3xl font-black uppercase leading-[0.9] tracking-tighter mb-6">Power BI reports that executives actually use.</h3>
                <Link href="/contact?service=executive-analytics" className={`inline-flex bg-yellow-400 text-black px-6 py-4 text-lg font-black uppercase ${neoBorder} shadow-[4px_4px_0_0_#000] transition-all duration-200 hover:shadow-[2px_2px_0_0_#000] hover:translate-x-[2px] hover:translate-y-[2px]`}>
                  Schedule a Call
                </Link>
              </div>
            </div>
            
            <div className="lg:col-span-7 flex flex-col gap-4">
              <FAQItem q="What metrics should be on an executive dashboard?" a="We work with executives to identify the 5-10 metrics that actually drive decisions. Less is more. Everything else is one drill-through click away." />
              <FAQItem q="Can different executives see different data?" a="Yes. Row-level security controls what each user sees. Regional GMs see their region. Board members see everything." />
              <FAQItem q="What if we don't have a semantic model yet?" a="We can build executive dashboards and semantic model in parallel (8-12 weeks instead of 6-10)." />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function ProblemCard({ color, icon, title, desc }) {
  return (
    <div className={`${color} text-black p-6 lg:p-8 ${neoBorder} ${neoShadow} flex flex-col gap-4 lg:gap-6`}>
      <div className="w-12 h-12 lg:w-14 lg:h-14 bg-white border-2 border-black flex items-center justify-center rounded-full shrink-0">
        {icon}
      </div>
      <h3 className="text-xl lg:text-2xl font-black uppercase leading-tight">{title}</h3>
      <p className="font-bold text-sm lg:text-base leading-snug">{desc}</p>
    </div>
  );
}

function DeliverableCard({ title, icon, desc, bg }) {
  return (
    <div className={`${bg} p-6 lg:p-8 ${neoBorder} ${neoShadow} flex flex-col gap-4 lg:gap-6 hover:-translate-y-2 transition-transform duration-300`}>
      <div className="w-12 h-12 lg:w-16 lg:h-16 bg-black text-white flex items-center justify-center border-4 border-black shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="text-2xl lg:text-3xl font-black uppercase leading-tight mb-2">{title}</h3>
        <p className="font-bold text-base lg:text-lg leading-snug">{desc}</p>
      </div>
    </div>
  );
}

function ProcessCard({ step, week, title, desc }) {
  return (
    <div className={`bg-white p-5 lg:p-6 ${neoBorder} ${neoShadow} flex flex-col gap-3 relative overflow-hidden group`}>
      <div className="absolute top-0 right-0 bg-black text-white px-2 py-1 lg:px-3 lg:py-1 border-b-4 border-l-4 border-black font-black text-lg lg:text-xl">
        {step}
      </div>
      <span className="text-xs lg:text-sm font-black uppercase tracking-widest text-gray-500">{week}</span>
      <h4 className="text-xl lg:text-2xl font-black uppercase leading-tight group-hover:text-teal-500 transition-colors">{title}</h4>
      <p className="font-bold text-sm lg:text-base text-gray-700 leading-snug">{desc}</p>
    </div>
  );
}

function CaseStudy({ industry, title, situation, solution, stat1, stat2, link, bg }) {
  return (
    <div className={`${bg} p-8 md:p-16 ${neoBorder} ${neoShadow}`}>
      <div className="inline-block bg-white px-4 py-2 border-2 border-black font-black uppercase text-sm mb-8">
        Case Study: {industry}
      </div>
      <h3 className="text-3xl md:text-5xl font-black uppercase leading-tight mb-12 border-b-4 border-black pb-8">
        {title}
      </h3>
      <div className="grid md:grid-cols-2 gap-12 mb-12">
        <div>
          <h4 className="text-2xl font-black uppercase mb-4 bg-black text-white inline-block px-2">The Situation</h4>
          <p className="font-bold text-xl leading-relaxed">{situation}</p>
        </div>
        <div>
          <h4 className="text-2xl font-black uppercase mb-4 bg-black text-white inline-block px-2">What We Built</h4>
          <ul className="flex flex-col gap-3 font-bold text-lg">
            {solution.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="shrink-0 mt-1" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-12 md:items-center justify-between bg-white p-8 border-4 border-black">
        <div className="flex gap-12">
          <div>
            <div className="text-5xl font-black">{stat1.val}</div>
            <div className="font-bold uppercase text-sm mt-1">{stat1.label}</div>
          </div>
          <div>
            <div className="text-5xl font-black">{stat2.val}</div>
            <div className="font-bold uppercase text-sm mt-1">{stat2.label}</div>
          </div>
        </div>
        <Link href={link} className="flex items-center gap-2 font-black uppercase hover:underline text-xl">
          See Work <ChevronRight className="bg-black text-white rounded-full p-1 w-8 h-8" />
        </Link>
      </div>
    </div>
  );
}

function FAQItem({ q, a }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`bg-white text-black ${neoBorder} transition-all duration-200 ${isOpen ? neoShadow : ''}`}>
      <button onClick={() => setIsOpen(!isOpen)} className="w-full text-left p-6 flex justify-between items-center font-black text-xl md:text-2xl uppercase">
        {q}
        <ChevronRight className={`transition-transform duration-300 w-8 h-8 ${isOpen ? 'rotate-90' : ''}`} />
      </button>
      {isOpen && (
        <div className="p-6 pt-0 font-bold text-lg leading-relaxed border-t-4 border-black">
          {a}
        </div>
      )}
    </div>
  );
}
