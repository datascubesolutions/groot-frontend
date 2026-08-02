// @ts-nocheck
"use client";

import { motion } from "framer-motion";
import { ArrowRight, Cloud, ShieldCheck, TrendingUp, Snowflake, Factory, Database, Layers, Cpu, Activity, PieChart } from "lucide-react";
import Link from "next/link";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export function FabricHero() {
  return (
    <section className="relative w-full min-h-screen lg:h-[calc(100vh-80px)] flex flex-col justify-center bg-[#F8FAFC] overflow-hidden pt-12 md:pt-16 pb-12 font-sans">
      
      {/* Soft Background Gradients */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-50/50 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />
      
      {/* Optional faint dot grid to match subtle texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 max-w-[1400px] relative z-10 flex flex-col justify-center flex-1 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center h-full">
          
          {/* ── Left Text Column ── */}
          <motion.div initial="hidden" animate="visible" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }} className="lg:col-span-6 flex flex-col justify-center">
            
            <motion.div variants={fadeIn} className="mb-4">
              <span className="text-[#0067B8] font-bold text-[11px] tracking-[0.2em] uppercase">
                Enterprise Data Modernization
              </span>
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="mb-6 text-[3rem] sm:text-[4rem] lg:text-[4.5rem] font-bold tracking-tight text-[#0F172A] leading-[1.1]">
              Unify your data.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0067B8] to-[#5C2D91]">
                Unlock real impact.
              </span>
            </motion.h1>

            <motion.p variants={fadeIn} className="max-w-lg mb-10 text-[15px] lg:text-lg text-slate-600 font-medium leading-relaxed">
              Move from data silos to a unified, secure, and intelligent foundation with Microsoft Fabric.
            </motion.p>

            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link href="/contact?service=fabric-assessment">
                <button className="h-12 w-full sm:w-auto rounded-lg bg-[#0067B8] hover:bg-[#005DA6] px-6 text-white font-semibold transition-all duration-300 shadow-md flex items-center justify-center">
                  Get Readiness Assessment <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </Link>
              <Link href="/services/microsoft/fabric">
                <button className="h-12 w-full sm:w-auto rounded-lg bg-transparent border-[1.5px] border-[#0067B8] text-[#0067B8] hover:bg-blue-50 px-6 font-semibold transition-all duration-300 flex items-center justify-center">
                  Explore Microsoft Fabric
                </button>
              </Link>
            </motion.div>

            {/* Three Features */}
            <motion.div variants={fadeIn} className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 pt-8 border-t border-slate-200 max-w-2xl">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-7 h-7 text-[#0067B8] shrink-0" strokeWidth={1.5} />
                <span className="text-[13px] font-semibold text-slate-700 leading-snug pt-1">Enterprise-grade<br/>security & governance</span>
              </div>
              <div className="flex items-start gap-3">
                <TrendingUp className="w-7 h-7 text-[#0067B8] shrink-0" strokeWidth={1.5} />
                <span className="text-[13px] font-semibold text-slate-700 leading-snug pt-1">Faster insights with<br/>AI-powered analytics</span>
              </div>
              <div className="flex items-start gap-3">
                <Cloud className="w-7 h-7 text-[#0067B8] shrink-0" strokeWidth={1.5} />
                <span className="text-[13px] font-semibold text-slate-700 leading-snug pt-1">Scalable. Flexible.<br/>Future-ready.</span>
              </div>
            </motion.div>

          </motion.div>

          {/* ── Right Visual Column (Isometric Thick 3D Stack) ── */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="lg:col-span-6 relative w-full h-[500px] lg:h-[600px] hidden md:flex flex-col items-center justify-center"
          >
            {/* The Stack Container */}
            <div className="relative w-full max-w-[600px] h-full flex flex-col items-center justify-center -translate-y-4 z-10">
              
              {/* Connecting glowing dashed elevator shafts behind */}
              <div className="absolute top-[10%] bottom-[15%] left-[calc(50%-135px)] md:left-[calc(50%-158px)] w-px bg-gradient-to-b from-transparent via-slate-300 to-transparent z-0" />
              <div className="absolute top-[10%] bottom-[15%] left-[calc(50%+135px)] md:left-[calc(50%+158px)] w-px bg-gradient-to-b from-transparent via-slate-300 to-transparent z-0" />
              <div className="absolute top-[5%] bottom-[10%] left-1/2 w-px bg-gradient-to-b from-transparent via-slate-400/50 to-transparent z-0" />

              {/* Layer 1: Top (Gold) */}
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative z-30 flex items-center justify-center w-full"
              >
                <div style={{ perspective: '1200px' }} className="relative w-48 h-48 md:w-56 md:h-56 flex justify-center items-center group">
                  <div style={{ transformStyle: 'preserve-3d', transform: 'rotateX(60deg) rotateZ(-45deg)' }} className="relative w-full h-full transition-transform duration-500 group-hover:translate-z-4">
                    {/* Shadow underneath */}
                    <div className="absolute inset-0 rounded-[2rem] blur-[16px] bg-[#B45309]/50" style={{ transform: 'translateZ(-30px)' }} />
                    {/* True CSS 3D Thickness (Darker for Contrast) */}
                    {[...Array(12)].map((_, i) => (
                      <div key={i} className="absolute inset-0 rounded-[2rem] bg-[#B45309]" style={{ transform: `translateZ(-${i * 2}px)` }} />
                    ))}
                    <div className="absolute inset-0 rounded-[2rem] bg-[#92400E]" style={{ transform: `translateZ(-24px)` }} /> {/* Bottom Plate */}
                    
                    {/* Top Glowing Surface - MORE SATURATED */}
                    <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-[#FBBF24] to-[#D97706] border-[1px] border-slate-300/80 overflow-hidden shadow-inner" style={{ transform: 'translateZ(0px)' }}>
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/30" />
                      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/20 to-transparent" />
                    </div>
                    
                    {/* True 3D Extruded Bar Chart on the surface */}
                    <div className="absolute inset-0 flex items-center justify-center gap-[12px] md:gap-[16px] pointer-events-none" style={{ transform: 'translateZ(1px)', transformStyle: 'preserve-3d' }}>
                      {/* Bar 1 */}
                      <div className="relative w-5 h-5 md:w-7 md:h-7 rounded-full bg-[#78350F]" style={{ transformStyle: 'preserve-3d' }}>
                        {[...Array(20)].map((_, i) => <div key={i} className="absolute inset-0 rounded-full bg-[#92400E]" style={{ transform: `translateZ(${i}px)` }} />)}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#F59E0B] to-[#B45309] border-[1px] border-slate-300/60" style={{ transform: 'translateZ(20px)' }} />
                      </div>
                      {/* Bar 2 */}
                      <div className="relative w-5 h-5 md:w-7 md:h-7 rounded-full bg-[#78350F]" style={{ transformStyle: 'preserve-3d' }}>
                        {[...Array(35)].map((_, i) => <div key={i} className="absolute inset-0 rounded-full bg-[#92400E]" style={{ transform: `translateZ(${i}px)` }} />)}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#F59E0B] to-[#B45309] border-[1px] border-slate-300/60" style={{ transform: 'translateZ(35px)' }} />
                      </div>
                      {/* Bar 3 */}
                      <div className="relative w-5 h-5 md:w-7 md:h-7 rounded-full bg-[#78350F]" style={{ transformStyle: 'preserve-3d' }}>
                        {[...Array(50)].map((_, i) => <div key={i} className="absolute inset-0 rounded-full bg-[#92400E]" style={{ transform: `translateZ(${i}px)` }} />)}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#F59E0B] to-[#B45309] border-[1px] border-slate-300/60" style={{ transform: 'translateZ(50px)' }} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-1/2 -translate-y-1/2 left-[calc(50%+160px)] md:left-[calc(50%+190px)] w-48 pointer-events-none">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-[3px] h-4 bg-[#D97706]" />
                    <h4 className="text-[13px] font-bold tracking-widest uppercase" style={{ color: '#D97706' }}>Gold Layer</h4>
                  </div>
                  <p className="text-[13px] text-slate-600 font-medium">Board-ready analytics</p>
                </div>
              </motion.div>

              {/* Layer 2: Middle (Blue) */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative z-20 flex items-center justify-center w-full -mt-2 md:-mt-4"
              >
                <div style={{ perspective: '1200px' }} className="relative w-48 h-48 md:w-56 md:h-56 flex justify-center items-center group">
                  <div style={{ transformStyle: 'preserve-3d', transform: 'rotateX(60deg) rotateZ(-45deg)' }} className="relative w-full h-full transition-transform duration-500 group-hover:translate-z-4">
                    <div className="absolute inset-0 rounded-[2rem] blur-[16px] bg-[#1E3A8A]/50" style={{ transform: 'translateZ(-30px)' }} />
                    {[...Array(12)].map((_, i) => (
                      <div key={i} className="absolute inset-0 rounded-[2rem] bg-[#1E3A8A]" style={{ transform: `translateZ(-${i * 2}px)` }} />
                    ))}
                    <div className="absolute inset-0 rounded-[2rem] bg-[#172554]" style={{ transform: `translateZ(-24px)` }} />
                    
                    {/* Top Glowing Surface - MORE SATURATED */}
                    <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-[#3B82F6] to-[#1D4ED8] border-[1px] border-slate-300/80 overflow-hidden shadow-inner" style={{ transform: 'translateZ(0px)' }}>
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/30" />
                      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/20 to-transparent" />
                    </div>

                    {/* True 3D Upright Extruded Shield */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ transform: 'translateZ(42px)', transformStyle: 'preserve-3d' }}>
                      <div className="relative w-20 h-20 md:w-24 md:h-24" style={{ transformStyle: 'preserve-3d', transform: 'rotateZ(45deg) rotateX(-60deg)' }}>
                        <div className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-16 h-4 bg-black/50 blur-[6px] rounded-full" style={{ transform: 'rotateX(60deg) rotateZ(-45deg)' }} />
                        {[...Array(16)].map((_, i) => (
                          <ShieldCheck key={i} className="absolute inset-0 w-full h-full text-[#172554]" strokeWidth={0} fill="currentColor" style={{ transform: `translateZ(${-i*1.5}px)` }} />
                        ))}
                        <ShieldCheck className="absolute inset-0 w-full h-full text-white" strokeWidth={1.5} fill="#2563EB" style={{ transform: 'translateZ(1px)' }} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-1/2 -translate-y-1/2 left-[calc(50%+160px)] md:left-[calc(50%+190px)] w-56 pointer-events-none">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-[3px] h-4 bg-[#2563EB]" />
                    <h4 className="text-[13px] font-bold tracking-widest uppercase" style={{ color: '#2563EB' }}>Governance</h4>
                  </div>
                  <p className="text-[13px] text-slate-600 font-medium">Security, lineage & compliance</p>
                </div>
              </motion.div>

              {/* Layer 3: Bottom (Green) */}
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="relative z-10 flex items-center justify-center w-full -mt-2 md:-mt-4"
              >
                <div style={{ perspective: '1200px' }} className="relative w-48 h-48 md:w-56 md:h-56 flex justify-center items-center group">
                  <div style={{ transformStyle: 'preserve-3d', transform: 'rotateX(60deg) rotateZ(-45deg)' }} className="relative w-full h-full transition-transform duration-500 group-hover:translate-z-4">
                    <div className="absolute inset-0 rounded-[2rem] blur-[16px] bg-[#064E3B]/40" style={{ transform: 'translateZ(-30px)' }} />
                    {[...Array(12)].map((_, i) => (
                      <div key={i} className="absolute inset-0 rounded-[2rem] bg-[#064E3B]" style={{ transform: `translateZ(-${i * 2}px)` }} />
                    ))}
                    <div className="absolute inset-0 rounded-[2rem] bg-[#022C22]" style={{ transform: `translateZ(-24px)` }} />
                    
                    {/* Top Glowing Surface - MORE SATURATED */}
                    <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-[#10B981] to-[#047857] border-[1px] border-slate-300/80 overflow-hidden shadow-inner" style={{ transform: 'translateZ(0px)' }}>
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/30" />
                      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/20 to-transparent" />
                    </div>

                    {/* True 3D Extruded Cylinder (Database) */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ transform: 'translateZ(1px)', transformStyle: 'preserve-3d' }}>
                      <div className="absolute w-16 h-16 md:w-20 md:h-20 bg-black/40 blur-[8px] rounded-full" style={{ transform: 'translate(4px, 4px)' }} />
                      <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#022C22]" style={{ transformStyle: 'preserve-3d' }}>
                        {[...Array(48)].map((_, i) => (
                          <div key={i} className="absolute inset-0 rounded-full bg-[#064E3B]" style={{ transform: `translateZ(${i}px)` }} />
                        ))}
                        <div className="absolute inset-0 rounded-full border-t-[1.5px] border-white/30" style={{ transform: 'translateZ(16px)' }} />
                        <div className="absolute inset-0 rounded-full border-t-[1.5px] border-white/30" style={{ transform: 'translateZ(32px)' }} />
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#10B981] to-[#047857] border-[1px] border-slate-300/80" style={{ transform: 'translateZ(48px)' }} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-1/2 -translate-y-1/2 left-[calc(50%+160px)] md:left-[calc(50%+190px)] w-48 pointer-events-none">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-[3px] h-4 bg-[#059669]" />
                    <h4 className="text-[13px] font-bold tracking-widest uppercase" style={{ color: '#059669' }}>OneLake</h4>
                  </div>
                  <p className="text-[13px] text-slate-600 font-medium">Unified data foundation</p>
                </div>
              </motion.div>

              {/* Data Sources Pill (Centered, internal text) */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="absolute bottom-[-90px] md:bottom-[-120px] left-1/2 -translate-x-1/2 z-40 bg-white/95 backdrop-blur-xl rounded-[2rem] px-8 md:px-12 py-4 shadow-[0_12px_40px_-10px_rgba(0,0,0,0.15)] border border-slate-200 flex flex-col items-center gap-3 min-w-max"
              >
                <div className="text-[9px] font-bold text-[#0067B8] tracking-[0.15em] uppercase leading-relaxed whitespace-nowrap mt-1">
                  Data Sources
                </div>
                <div className="flex items-center gap-6 md:gap-8 mb-1">
                  {/* Azure */}
                  <div className="flex items-center justify-center">
                    <span className="font-black text-[#0067B8] text-2xl leading-none">A</span>
                  </div>
                  <div className="w-px h-5 bg-slate-200" />
                  {/* SAP */}
                  <div className="font-bold text-slate-800 text-[15px]">SAP</div>
                  <div className="w-px h-5 bg-slate-200" />
                  {/* Snowflake */}
                  <div className="flex items-center justify-center">
                    <Snowflake className="w-6 h-6 text-[#0067B8]" strokeWidth={2} />
                  </div>
                  <div className="w-px h-5 bg-slate-200" />
                  {/* SFDC */}
                  <div className="font-bold text-slate-800 text-[15px]">SFDC</div>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>

      {/* Fabric Workloads */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="w-full max-w-6xl mx-auto mt-32 lg:mt-auto lg:pt-32 px-6 relative z-10 hidden lg:block"
      >
        <div className="bg-white/60 backdrop-blur-xl rounded-[24px] shadow-[0_8px_32px_rgba(0,0,0,0.04)] border border-white/80 p-6 flex flex-col items-center">
          <h5 className="text-[11px] font-bold text-[#0067B8] tracking-[0.2em] uppercase mb-5">Unified Fabric Workloads</h5>
          <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-3">
            
            <div className="flex items-center gap-3 px-4 py-2.5 rounded-xl hover:bg-white/80 hover:shadow-sm transition-all duration-300 cursor-pointer group">
              <div className="w-9 h-9 rounded-full bg-blue-50/80 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 group-hover:bg-[#0067B8] group-hover:shadow-md">
                <Factory className="w-4 h-4 text-[#0067B8] group-hover:text-white transition-colors" strokeWidth={2} />
              </div>
              <span className="font-semibold text-[13.5px] text-slate-700 group-hover:text-[#0067B8] transition-colors">Data Factory</span>
            </div>

            <div className="flex items-center gap-3 px-4 py-2.5 rounded-xl hover:bg-white/80 hover:shadow-sm transition-all duration-300 cursor-pointer group">
              <div className="w-9 h-9 rounded-full bg-purple-50/80 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 group-hover:bg-[#5C2D91] group-hover:shadow-md">
                <Layers className="w-4 h-4 text-[#5C2D91] group-hover:text-white transition-colors" strokeWidth={2} />
              </div>
              <span className="font-semibold text-[13.5px] text-slate-700 group-hover:text-[#5C2D91] transition-colors">Data Engineering</span>
            </div>

            <div className="flex items-center gap-3 px-4 py-2.5 rounded-xl hover:bg-white/80 hover:shadow-sm transition-all duration-300 cursor-pointer group">
              <div className="w-9 h-9 rounded-full bg-emerald-50/80 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 group-hover:bg-[#059669] group-hover:shadow-md">
                <Database className="w-4 h-4 text-[#059669] group-hover:text-white transition-colors" strokeWidth={2} />
              </div>
              <span className="font-semibold text-[13.5px] text-slate-700 group-hover:text-[#059669] transition-colors">Data Warehouse</span>
            </div>

            <div className="flex items-center gap-3 px-4 py-2.5 rounded-xl hover:bg-white/80 hover:shadow-sm transition-all duration-300 cursor-pointer group">
              <div className="w-9 h-9 rounded-full bg-rose-50/80 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 group-hover:bg-[#E11D48] group-hover:shadow-md">
                <Cpu className="w-4 h-4 text-[#E11D48] group-hover:text-white transition-colors" strokeWidth={2} />
              </div>
              <span className="font-semibold text-[13.5px] text-slate-700 group-hover:text-[#E11D48] transition-colors">Data Science</span>
            </div>

            <div className="flex items-center gap-3 px-4 py-2.5 rounded-xl hover:bg-white/80 hover:shadow-sm transition-all duration-300 cursor-pointer group">
              <div className="w-9 h-9 rounded-full bg-amber-50/80 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 group-hover:bg-[#D97706] group-hover:shadow-md">
                <Activity className="w-4 h-4 text-[#D97706] group-hover:text-white transition-colors" strokeWidth={2} />
              </div>
              <span className="font-semibold text-[13.5px] text-slate-700 group-hover:text-[#D97706] transition-colors">Real-Time Analytics</span>
            </div>

            <div className="flex items-center gap-3 px-4 py-2.5 rounded-xl hover:bg-white/80 hover:shadow-sm transition-all duration-300 cursor-pointer group">
              <div className="w-9 h-9 rounded-full bg-yellow-50/80 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 group-hover:bg-[#F2C811] group-hover:shadow-md">
                <PieChart className="w-4 h-4 text-[#B49200] group-hover:text-white transition-colors" strokeWidth={2} />
              </div>
              <span className="font-semibold text-[13.5px] text-slate-700 group-hover:text-[#B49200] transition-colors">Power BI</span>
            </div>

          </div>
        </div>
      </motion.div>
    </section>
  );
}
