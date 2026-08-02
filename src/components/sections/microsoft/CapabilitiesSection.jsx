// src/components/sections/microsoft/CapabilitiesSection.jsx
"use client";
import { motion } from "framer-motion";
import { Layers, Database, Shield, GitMerge, FileSpreadsheet, Box, ArrowRight, Lock } from "lucide-react";

export function CapabilitiesSection({
  title = "What We Deliver",
  subtitle = "End-to-end Microsoft Fabric implementation from architecture blueprinting to governance.",
  capabilities = [],
}) {
  if (!capabilities || capabilities.length === 0) return null;

  return (
    <section className="relative z-20 bg-slate-50 font-sans overflow-hidden min-h-[calc(100vh-80px)] w-full flex flex-col justify-center border-t border-slate-200/60 py-6 lg:py-8">
      
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-[1400px] h-full flex flex-col justify-center relative z-10 w-full">
        
        {/* Header Block */}
        <div className="mb-6 lg:mb-8 max-w-4xl text-center mx-auto shrink-0">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0F172A] leading-[1.1] mb-3">
            {title}
          </h2>
          {subtitle && (
            <p className="text-sm lg:text-base text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>

        {/* 2x2 SYMMETRICAL GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6 flex-1 min-h-0">
          
          {/* Card 1: Workspace Architecture */}
          <div className="bg-white rounded-3xl p-6 lg:p-7 border border-slate-200 shadow-sm hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] transition-all flex flex-col group relative overflow-hidden">
            <div className="flex items-center gap-3.5 mb-3">
              <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center border border-indigo-100 shrink-0">
                <Box className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">{capabilities[0]?.title || "Workspace Architecture"}</h3>
                <p className="text-slate-600 text-[15px] mt-2 font-medium leading-relaxed line-clamp-2">{capabilities[0]?.description || "A foundation that grows with you."}</p>
              </div>
            </div>
            {/* Flat UI Graphic */}
            <div className="mt-auto bg-slate-900 rounded-xl p-4 flex flex-col gap-2.5 relative z-10">
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-2 text-center text-[12px] font-bold text-slate-300">Fabric Tenant</div>
              <div className="flex gap-3 h-20">
                <div className="flex-1 border-2 border-dashed border-indigo-500/30 rounded-xl flex flex-col items-center justify-center bg-indigo-500/5">
                  <span className="text-indigo-500 text-[11px] font-bold uppercase tracking-widest mb-1.5">PROD (F64)</span>
                  <div className="w-3/4 h-2.5 bg-indigo-500/40 rounded-full mb-1.5"></div>
                  <div className="w-1/2 h-2.5 bg-indigo-500/20 rounded-full"></div>
                </div>
                <div className="flex-1 border-2 border-dashed border-emerald-500/30 rounded-xl flex flex-col items-center justify-center bg-emerald-500/5">
                  <span className="text-emerald-500 text-[11px] font-bold uppercase tracking-widest mb-1.5">DEV (F32)</span>
                  <div className="w-3/4 h-2.5 bg-emerald-500/40 rounded-full mb-1.5"></div>
                  <div className="w-1/2 h-2.5 bg-emerald-500/20 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Medallion Architecture */}
          <div className="bg-white rounded-3xl p-6 lg:p-7 border border-slate-200 shadow-sm hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] transition-all flex flex-col group relative overflow-hidden">
            <div className="flex items-center gap-3.5 mb-3">
              <div className="w-10 h-10 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center border border-amber-100 shrink-0">
                <Database className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">{capabilities[1]?.title || "Lakehouse with Medallion"}</h3>
                <p className="text-slate-600 text-[15px] mt-2 font-medium leading-relaxed line-clamp-2">{capabilities[1]?.description || "From chaos to clarity."}</p>
              </div>
            </div>
            {/* Flat UI Graphic */}
            <div className="mt-auto bg-slate-50 rounded-xl p-4 border border-slate-200 flex flex-col gap-2 relative z-10">
              <div className="bg-white border-l-4 border-[#B87333] shadow-sm rounded-lg p-3 flex justify-between items-center group-hover:translate-x-1.5 transition-transform">
                <span className="text-[13px] font-extrabold text-slate-800">Bronze Layer</span>
                <span className="text-[11px] text-slate-600 bg-slate-100 border border-slate-200 px-2.5 py-1 rounded font-bold uppercase tracking-wider">Raw Data</span>
              </div>
              <div className="bg-white border-l-4 border-slate-400 shadow-sm rounded-lg p-3.5 flex justify-between items-center group-hover:translate-x-2 transition-transform delay-75">
                <span className="text-[13px] font-extrabold text-slate-800">Silver Layer</span>
                <span className="text-[11px] text-slate-600 bg-slate-100 border border-slate-200 px-2.5 py-1 rounded font-bold uppercase tracking-wider">Cleaned</span>
              </div>
              <div className="bg-white border-l-4 border-emerald-500 shadow-sm rounded-lg p-3.5 flex justify-between items-center group-hover:translate-x-2 transition-transform delay-150">
                <span className="text-[13px] font-extrabold text-slate-800">Gold Layer</span>
                <span className="text-[11px] text-emerald-700 bg-emerald-50 border border-emerald-100 px-2.5 py-1 rounded uppercase tracking-wider font-bold">Business Ready</span>
              </div>
            </div>
          </div>

          {/* Card 3: Pipelines That Run */}
          <div className="bg-white rounded-3xl p-6 lg:p-7 border border-slate-200 shadow-sm hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] transition-all flex flex-col group relative overflow-hidden">
            <div className="flex items-center gap-3.5 mb-3">
              <div className="w-10 h-10 bg-blue-50 text-[#0067B8] rounded-xl flex items-center justify-center border border-blue-100 shrink-0">
                <GitMerge className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">{capabilities[2]?.title || "Pipelines That Run"}</h3>
                <p className="text-slate-600 text-[15px] mt-2 font-medium leading-relaxed line-clamp-2">{capabilities[2]?.description || "Data that arrives on time."}</p>
              </div>
            </div>
            {/* Flat UI Graphic */}
            <div className="mt-auto bg-slate-900 rounded-xl p-5 border border-slate-800 flex items-center justify-between relative z-10 shadow-inner">
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 bg-slate-800 rounded-full border-2 border-slate-600 flex items-center justify-center">
                  <Database className="w-5 h-5 text-slate-400" />
                </div>
                <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-slate-400">Source</span>
              </div>
              
              <div className="flex-1 flex flex-col items-center px-4">
                <motion.div 
                  className="w-full h-1 bg-slate-700 relative flex items-center justify-center rounded-full"
                >
                  <motion.div 
                    animate={{ x: [-40, 40] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "linear", repeatType: "reverse" }}
                    className="w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.9)]"
                  />
                </motion.div>
              </div>

              <div className="flex flex-col items-center gap-2.5">
                <div className="w-12 h-12 bg-emerald-900/30 rounded-full border-2 border-emerald-500/50 flex items-center justify-center">
                  <Layers className="w-5 h-5 text-emerald-400" />
                </div>
                <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-emerald-400">Lakehouse</span>
              </div>
            </div>
          </div>

          {/* Card 4: Purview Configuration */}
          <div className="bg-white rounded-3xl p-6 lg:p-7 border border-slate-200 shadow-sm hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] transition-all flex flex-col group relative overflow-hidden">
            <div className="flex items-center gap-3.5 mb-3">
              <div className="w-10 h-10 bg-rose-50 text-rose-600 rounded-xl flex items-center justify-center border border-rose-100 shrink-0">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">{capabilities[3]?.title || "Purview Configuration"}</h3>
                <p className="text-slate-600 text-[15px] mt-2 font-medium leading-relaxed line-clamp-2">{capabilities[3]?.description || "Governance from day one."}</p>
              </div>
            </div>
            {/* Flat UI Graphic */}
            <div className="mt-auto bg-slate-50 rounded-xl p-4 border border-slate-200 flex flex-col gap-2.5 relative z-10">
              <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">Asset Name</span>
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">Sensitivity</span>
              </div>
              <div className="flex items-center justify-between py-1.5">
                <span className="text-[13px] font-bold text-slate-800 flex items-center gap-2.5"><Lock className="w-4 h-4 text-slate-500"/> Customer_PII</span>
                <span className="text-[10px] uppercase tracking-widest text-rose-700 bg-rose-100 border border-rose-200 px-2.5 py-1 rounded font-extrabold">Highly Confidential</span>
              </div>
              <div className="flex items-center justify-between py-1.5">
                <span className="text-[13px] font-bold text-slate-800 flex items-center gap-2.5"><Lock className="w-4 h-4 text-slate-500"/> Q3_Financials</span>
                <span className="text-[10px] uppercase tracking-widest text-amber-700 bg-amber-100 border border-amber-200 px-2.5 py-1 rounded font-extrabold">Confidential</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
