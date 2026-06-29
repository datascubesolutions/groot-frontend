// @ts-nocheck
"use client";

import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { motion } from "framer-motion";
import {
  AlertCircle,
  CheckCircle2,
  ChevronRight,
  Users,
  ShieldCheck,
  Zap,
  BookOpen,
  Settings,
  DatabaseZap
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

export default function SelfServiceEnablement() {
  return (
    <main className="min-h-screen bg-[#fafafa] text-black font-sans selection:bg-black selection:text-white pt-24 overflow-x-hidden">
      
      {/* Decorative Grid Background */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-10 bg-[linear-gradient(to_right,#000_2px,transparent_2px),linear-gradient(to_bottom,#000_2px,transparent_2px)] bg-[size:3rem_3rem]"></div>

      {/* Hero Section */}
      <section className="relative z-10 px-6 max-w-7xl mx-auto min-h-[calc(100vh-96px)] flex items-center pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="flex flex-col gap-8">
            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-black uppercase leading-[0.9] tracking-tighter">
              Self-Service <br/> <span className="text-pink-400 stroke-black" style={{ WebkitTextStroke: "2px black" }}>Enablement</span>
            </motion.h1>
            <motion.p variants={fadeIn} className="text-xl md:text-2xl font-bold leading-relaxed max-w-lg">
              Enable your teams to build their own reports — without creating chaos. Governed self-service with certified datasets, Fabric workspace guardrails, and training.
            </motion.p>
            <motion.div variants={fadeIn}>
              <Link href="/contact?service=self-service" className={`inline-flex items-center justify-center bg-green-400 text-black px-8 py-4 text-xl font-black uppercase ${neoBorder} ${neoShadow} transition-all duration-200 ${neoShadowHover}`}>
                Schedule a Consultation
                <ChevronRight className="ml-2 w-6 h-6 border-2 border-black rounded-full bg-white" />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="relative h-[500px] w-full">
            <div className={`absolute inset-0 bg-yellow-400 ${neoBorder} ${neoShadow} rotate-2`}></div>
            <div className={`absolute inset-0 bg-white ${neoBorder} ${neoShadow} -rotate-2 overflow-hidden flex items-center justify-center p-4`}>
                <div className="relative w-full h-full border-2 border-black">
                  <Image src="/self_service_gov.png" alt="Self-Service Data Enablement Governance" fill className="object-cover" priority />
                </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="relative z-10 bg-[#f4f4f0] text-black py-16 lg:min-h-[calc(100vh-80px)] flex flex-col justify-center border-y-4 border-black">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter mb-4">The extremes of failure</h2>
            <div className="w-24 h-4 bg-green-400 border-2 border-black"></div>
            <p className="mt-4 text-lg lg:text-xl font-bold max-w-2xl">Without intentional governance, self-service BI creates more problems than it solves.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <ProblemCard 
              color="bg-purple-400" 
              icon={<ShieldCheck size={24} />} 
              title="The Report Factory" 
              desc="Your BI team spends 80% of time fulfilling ad-hoc requests. 'Can you add this filter?' No bandwidth for deeper analysis. Everything goes in a queue." 
            />
            <ProblemCard 
              color="bg-pink-400" 
              icon={<AlertCircle size={24} />} 
              title="Self-Service Chaos" 
              desc="You enabled Power BI for everyone. Now you have 400 reports across 50 workspaces. Nobody knows which to trust. IT lost control." 
            />
            <ProblemCard 
              color="bg-teal-400" 
              icon={<Users size={24} />} 
              title="Skills without Guardrails" 
              desc="They learned to build reports, but not where to find certified data, or what approval process to follow. Better-looking chaos." 
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
              title="Fabric Workspace Governance" 
              icon={<Settings size={32} />}
              desc="Workspace structure with clear rules: Production workspaces (certified only), Development workspaces, and Sandbox workspaces (learning)."
              bg="bg-white"
            />
            <DeliverableCard 
              title="Certified Dataset Foundation" 
              icon={<DatabaseZap size={32} />}
              desc="Certified Power BI semantic models that business users connect to. Clear, documented, trusted data sources."
              bg="bg-pink-300"
            />
            <DeliverableCard 
              title="Governance Documentation" 
              icon={<ShieldCheck size={32} />}
              desc="Clear policies: naming conventions, workspace rules, certification criteria, and escalation paths."
              bg="bg-green-300"
            />
            <DeliverableCard 
              title="Self-Service Training Program" 
              icon={<BookOpen size={32} />}
              desc="Training tailored to your environment: Where to find certified data, how to build on them, and approval workflows."
              bg="bg-white"
            />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative z-10 py-16 bg-green-400 border-y-4 border-black lg:min-h-[calc(100vh-80px)] flex flex-col justify-center overflow-hidden">
        <div className="absolute right-0 top-0 select-none pointer-events-none opacity-20">
          <span className="text-[12rem] lg:text-[16rem] font-black text-black leading-none -mr-10 -mt-10">04</span>
        </div>
        <div className="container relative z-10 mx-auto px-6 max-w-7xl">
          <h2 className="text-5xl lg:text-6xl font-black uppercase tracking-tighter mb-8 lg:mb-10">Our Process</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            <ProcessCard step="01" week="Week 1-2" title="State Assessment" desc="Audit existing Power BI content. Identify chaos. Understand user segments and skill levels." />
            <ProcessCard step="02" week="Week 3-4" title="Governance Design" desc="Design workspace structure, certification criteria, and policies. Balance control with enablement." />
            <ProcessCard step="03" week="Week 5-8" title="Foundation Implementation" desc="Implement workspace structure in Fabric. Configure certified datasets and deployment pipelines." />
            <ProcessCard step="04" week="Week 8-12" title="Training & Rollout" desc="Deliver training by user segment. Support initial attempts. Refine based on feedback." />
          </div>
        </div>
      </section>

      {/* Real Examples */}
      <section className="relative z-10 py-12 lg:min-h-[calc(100vh-80px)] flex flex-col justify-center bg-[#fafafa]">
        <div className="absolute inset-0 pointer-events-none opacity-10 bg-[linear-gradient(to_right,#000_2px,transparent_2px),linear-gradient(to_bottom,#000_2px,transparent_2px)] bg-[size:3rem_3rem]"></div>
        <div className="container relative z-10 mx-auto px-6 max-w-7xl flex flex-col gap-12">
          <CaseStudy 
            industry="Technology & SaaS"
            title='"15% increase in billable utilization through self-service resource visibility dashboards"'
            situation="A professional services firm lacked visibility into resource utilization. The BI team spent most of their time building one-off reports for different managers."
            solution={[
              "Certified Operations Dataset (utilization, timesheets)",
              "Workspace Governance (Prod vs Dev)",
              "4-hour custom workshop for managers"
            ]}
            stat1={{ val: "15%", label: "Billable Utilization Increase" }}
            stat2={{ val: "98%", label: "Timesheet Compliance" }}
            link="/industries/technology-saas"
            bg="bg-pink-400"
          />
        </div>
      </section>

      {/* FAQ & CTA */}
      <section className="relative z-10 py-16 bg-green-300 text-black border-t-4 border-black lg:min-h-[calc(100vh-80px)] flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,#fff_1px,transparent_1px)] bg-[size:40px_40px] opacity-30"></div>
        <div className="container relative z-10 mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5 flex flex-col">
              <div className="mb-6 self-start bg-white text-black px-6 py-3 border-4 border-black shadow-[8px_8px_0_0_#000] transform -rotate-2 hover:rotate-0 transition-transform">
                <h2 className="text-6xl md:text-7xl font-black uppercase tracking-tighter">FAQ</h2>
              </div>
              <p className="text-xl font-bold mb-12 max-w-md">Answers to common questions about governed self-service enablement.</p>
              
              <div className={`bg-white text-black p-8 md:p-10 ${neoBorder} ${neoShadow} transform rotate-1`}>
                <h3 className="text-3xl font-black uppercase leading-[0.9] tracking-tighter mb-6">Enable self-service without losing control.</h3>
                <Link href="/contact?service=self-service" className={`inline-flex bg-green-400 text-black px-6 py-4 text-lg font-black uppercase ${neoBorder} shadow-[4px_4px_0_0_#000] transition-all duration-200 hover:shadow-[2px_2px_0_0_#000] hover:translate-x-[2px] hover:translate-y-[2px]`}>
                  Schedule a Call
                </Link>
              </div>
            </div>
            
            <div className="lg:col-span-7 flex flex-col gap-4">
              <FAQItem q="How do we prevent self-service from creating chaos?" a="Workspace governance. Users can explore in designated workspaces. Production requires approval. Certified datasets ensure consistency." />
              <FAQItem q="What training is included?" a="Tailored to your environment. Not generic Power BI training — specific to your certified datasets, workspaces, and processes." />
              <FAQItem q="What if users need data that's not in certified datasets?" a="Clear escalation path. Request goes to data team. If valid, we add to the certified model. Users don't create shadow datasets." />
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
      <h3 className="text-2xl lg:text-3xl font-black uppercase leading-tight">{title}</h3>
      <p className="font-bold text-base lg:text-lg leading-snug">{desc}</p>
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
      <h4 className="text-xl lg:text-2xl font-black uppercase leading-tight group-hover:text-green-500 transition-colors">{title}</h4>
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
