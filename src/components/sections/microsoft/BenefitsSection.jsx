// src/components/sections/microsoft/BenefitsSection.jsx
"use client";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Sparkles, Database, ShieldCheck, Link2, Search, Bot, BarChart3, Lock, LineChart, Terminal, MessageSquare } from "lucide-react";
import { useState } from "react";

export function BenefitsSection({
  title = "Why Leading Teams Choose Fabric",
  subtitle = "Eliminate data silos, lower licensing costs, and empower executive teams with one source of truth.",
  benefits = [],
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!benefits || benefits.length === 0) return null;

  // Real CSS-based UI visualizer (Light Theme)
  const renderDashboardUI = (index) => {
    switch (index) {
      case 0: // One Lake, One Truth (Unified Data)
        return (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col h-full gap-4">
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-slate-800 font-semibold text-sm flex items-center gap-2"><Database className="w-4 h-4 text-[#0067B8]" /> OneLake Storage</h4>
              <span className="text-[#0067B8] text-xs font-mono bg-blue-50 px-2 py-1 rounded-md border border-blue-100">Sync: Active</span>
            </div>
            <div className="flex gap-4 h-24">
              <div className="flex-1 bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col items-center justify-center transition-shadow hover:shadow-md">
                <span className="text-slate-500 text-[10px] font-bold tracking-widest uppercase mb-1">AWS S3</span>
                <span className="text-slate-800 font-mono text-lg font-bold">24.5 TB</span>
              </div>
              <div className="flex-1 bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col items-center justify-center transition-shadow hover:shadow-md">
                <span className="text-slate-500 text-[10px] font-bold tracking-widest uppercase mb-1">Azure Blob</span>
                <span className="text-slate-800 font-mono text-lg font-bold">18.2 TB</span>
              </div>
              <div className="flex-1 bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col items-center justify-center transition-shadow hover:shadow-md">
                <span className="text-slate-500 text-[10px] font-bold tracking-widest uppercase mb-1">GCS</span>
                <span className="text-slate-800 font-mono text-lg font-bold">9.4 TB</span>
              </div>
            </div>
            <div className="flex-1 bg-gradient-to-tr from-emerald-50 to-white rounded-xl border border-emerald-100 shadow-sm flex flex-col items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b9811a_1px,transparent_1px),linear-gradient(to_bottom,#10b9811a_1px,transparent_1px)] bg-[size:14px_14px]" />
              <span className="text-emerald-700 text-[11px] font-bold tracking-[0.2em] uppercase mb-2 relative z-10 bg-white/60 px-2 py-0.5 rounded backdrop-blur-sm">Unified Fabric Workspace</span>
              <span className="text-emerald-950 font-mono text-4xl font-extrabold relative z-10">52.1 TB</span>
            </div>
          </motion.div>
        );
      case 1: // Governance (Security Table)
        return (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col h-full gap-4">
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-slate-800 font-semibold text-sm flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-[#0067B8]" /> Access Governance</h4>
              <span className="text-slate-500 text-xs font-mono">Real-time Audit Log</span>
            </div>
            <div className="flex-1 bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
              <div className="grid grid-cols-4 gap-4 px-4 py-2.5 bg-slate-50 border-b border-slate-200 text-[10px] font-bold tracking-widest text-slate-500 uppercase">
                <div>User</div><div>Resource</div><div>Policy</div><div>Status</div>
              </div>
              <div className="flex-1 p-2 space-y-1.5">
                {[
                  { user: "j.smith@corp", res: "Finance_Q3", pol: "Confidential", stat: "Granted", color: "text-emerald-600 bg-emerald-50" },
                  { user: "service_acct", res: "HR_Records", pol: "Highly Restricted", stat: "Blocked", color: "text-red-600 bg-red-50" },
                  { user: "a.davis@corp", res: "Marketing_Lake", pol: "Internal", stat: "Granted", color: "text-emerald-600 bg-emerald-50" },
                ].map((row, i) => (
                  <div key={i} className="grid grid-cols-4 gap-4 px-2 py-2 rounded-lg border border-transparent hover:border-slate-100 hover:bg-slate-50 text-xs items-center transition-colors">
                    <div className="text-slate-700 font-medium truncate">{row.user}</div>
                    <div className="text-slate-600 font-mono text-[11px] truncate">{row.res}</div>
                    <div><span className="bg-slate-100 text-slate-600 border border-slate-200 px-2 py-1 rounded text-[10px] font-medium">{row.pol}</span></div>
                    <div><span className={`px-2 py-1 rounded text-[10px] font-bold ${row.color}`}>{row.stat}</span></div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        );
      case 2: // One Bill (Cost Trends)
        return (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col h-full gap-4">
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-slate-800 font-semibold text-sm flex items-center gap-2"><BarChart3 className="w-4 h-4 text-[#0067B8]" /> Compute Consumption</h4>
              <span className="text-emerald-700 text-xs font-bold font-mono bg-emerald-50 border border-emerald-200 px-2 py-1 rounded-md">-32% YoY</span>
            </div>
            <div className="flex gap-4 h-20">
              <div className="flex-1 bg-white rounded-xl border border-slate-200 shadow-sm p-4 flex flex-col justify-center">
                <span className="text-slate-500 text-[10px] font-bold tracking-widest uppercase mb-1">Total Capacity Units</span>
                <span className="text-slate-800 font-mono text-2xl font-bold">1,024 CU</span>
              </div>
              <div className="flex-1 bg-white rounded-xl border border-slate-200 shadow-sm p-4 flex flex-col justify-center">
                <span className="text-slate-500 text-[10px] font-bold tracking-widest uppercase mb-1">Estimated Cost</span>
                <span className="text-emerald-600 font-mono text-2xl font-bold">$4,250</span>
              </div>
            </div>
            <div className="flex-1 bg-white rounded-xl border border-slate-200 shadow-sm p-4 flex flex-col justify-end relative overflow-hidden">
              <div className="absolute inset-0 opacity-40">
                {/* CSS Line Chart Representation */}
                <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full stroke-[#0067B8] fill-blue-50">
                  <path d="M0,100 L0,50 L20,60 L40,40 L60,55 L80,20 L100,30 L100,100 Z" strokeWidth="2.5" vectorEffect="non-scaling-stroke" />
                </svg>
              </div>
              <div className="relative z-10 flex justify-between w-full text-slate-500 text-[10px] font-mono font-semibold">
                <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
              </div>
            </div>
          </motion.div>
        );
      case 3: // Query Without Copying (Terminal)
        return (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col h-full gap-4">
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-slate-800 font-semibold text-sm flex items-center gap-2"><Terminal className="w-4 h-4 text-[#0067B8]" /> DirectLake Query</h4>
              <span className="text-[#0067B8] text-xs font-mono bg-blue-50 border border-blue-100 px-2 py-1 rounded-md">Execution: 0.04s</span>
            </div>
            {/* Keeping terminal dark for contrast and realism */}
            <div className="flex-1 bg-[#0F172A] rounded-xl border border-slate-800 shadow-lg p-4 flex flex-col overflow-hidden font-mono text-[13px] relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-[#0067B8]" />
              <div className="text-slate-300 mb-4 leading-relaxed mt-2">
                <span className="text-pink-400 font-bold">SELECT</span> c.CustomerName, <br/>
                <span className="text-pink-400 font-bold">SUM</span>(s.TotalAmount) <span className="text-pink-400 font-bold">AS</span> Revenue<br/>
                <span className="text-pink-400 font-bold">FROM</span> UnifiedLake.Sales s<br/>
                <span className="text-pink-400 font-bold">JOIN</span> DeltaShare.Customers c <span className="text-pink-400 font-bold">ON</span> s.CustID = c.ID<br/>
                <span className="text-pink-400 font-bold">GROUP BY</span> c.CustomerName;
              </div>
              <div className="mt-auto border-t border-slate-800 pt-3">
                <div className="text-emerald-400 text-xs mb-2 flex items-center gap-1"><CheckCircle2 className="w-3 h-3"/> Query succeeded. 0 rows copied.</div>
                <div className="flex gap-4 text-[10px] text-slate-500 uppercase tracking-wider font-semibold">
                  <span>Engine: Polaris</span>
                  <span>Data Moved: 0 Bytes</span>
                </div>
              </div>
            </div>
          </motion.div>
        );
      case 4: // AI-Ready (Copilot Chat)
        return (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col h-full gap-4">
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-slate-800 font-semibold text-sm flex items-center gap-2"><Bot className="w-4 h-4 text-[#0067B8]" /> Copilot for Fabric</h4>
              <span className="flex items-center gap-1 bg-emerald-50 border border-emerald-100 px-2 py-1 rounded-md"><span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span> <span className="text-emerald-700 text-[10px] font-bold uppercase tracking-wider">Online</span></span>
            </div>
            <div className="flex-1 bg-white rounded-xl border border-slate-200 shadow-sm p-5 flex flex-col gap-4 overflow-hidden relative">
              <div className="absolute inset-0 bg-slate-50/50 pointer-events-none" />
              
              <div className="self-end bg-[#0067B8] text-white text-sm px-4 py-2.5 rounded-t-2xl rounded-bl-2xl max-w-[85%] shadow-md relative z-10 font-medium">
                Summarize Q3 revenue anomalies.
              </div>
              
              <div className="self-start bg-white border border-slate-200 shadow-lg text-slate-700 text-[13px] px-5 py-4 rounded-t-2xl rounded-br-2xl max-w-[95%] relative z-10 leading-relaxed">
                <div className="flex gap-2 items-center mb-3 pb-2 border-b border-slate-100">
                  <Sparkles className="w-4 h-4 text-[#0067B8]" /> <span className="text-[11px] text-[#0067B8] font-bold uppercase tracking-widest">Generated Insight</span>
                </div>
                Revenue dropped <span className="font-bold text-red-500">14%</span> in EU region during August due to supply chain delays. I've automatically created a PowerBI report with the filtered data.
                <button className="mt-4 w-full bg-blue-50 hover:bg-[#0067B8] hover:text-white border border-blue-100 hover:border-[#0067B8] text-[#0067B8] font-semibold py-2 rounded-lg text-xs transition-colors flex items-center justify-center gap-2">
                  <BarChart3 className="w-3.5 h-3.5" /> Open Generated Report
                </button>
              </div>
            </div>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="relative z-30 bg-slate-50 font-sans overflow-hidden min-h-[calc(100vh-80px)] w-full flex flex-col justify-center border-t border-slate-200/60 py-6 lg:py-10">
      <div className="container mx-auto px-6 max-w-[1400px] flex flex-col justify-center relative z-10 w-full h-full">
        
        {/* Header Block */}
        <div className="mb-6 lg:mb-8 max-w-4xl text-center mx-auto shrink-0">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 border border-blue-200 text-[#0067B8] mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="text-[11px] font-bold tracking-[0.15em] uppercase">Core Benefits</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0F172A] leading-[1.1] mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-sm lg:text-lg text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>

        {/* Spatial Grid: Left Dynamic Feature Card, Right Interactive Tabs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch flex-1 min-h-0">
          
          {/* Left Feature Card - Light Theme */}
          <div className="lg:col-span-7 bg-white rounded-[2rem] p-6 lg:p-8 text-slate-900 flex flex-col justify-between relative overflow-hidden group shadow-[0_8px_40px_rgb(0,0,0,0.06)] h-full border border-slate-200">
            {/* Subtle background glow */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-50/50 rounded-full blur-[80px] pointer-events-none transition-transform duration-700 group-hover:scale-110" />
            
            <AnimatePresence mode="wait">
              <motion.div 
                key={`text-${activeIndex}`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="relative z-10 mb-4 max-w-xl shrink-0"
              >
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0067B8] bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100 inline-block mb-3 shadow-sm">
                  Fabric Advantage
                </span>
                <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-2 leading-tight tracking-tight">
                  {benefits[activeIndex].title}
                </h3>
                <p className="text-slate-600 text-[14px] lg:text-[15px] font-medium leading-relaxed">
                  {benefits[activeIndex].description}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* REAL UI MOCKUP WINDOW (Light Theme) */}
            <div className="relative z-10 w-full flex-1 rounded-2xl overflow-hidden border border-slate-200/80 shadow-2xl bg-white flex flex-col min-h-[240px] lg:min-h-[260px] ring-1 ring-slate-900/5 mt-4">
              {/* macOS Style Window Header - Light */}
              <div className="h-10 bg-slate-50 border-b border-slate-200 flex items-center px-4 gap-2 shrink-0">
                <div className="w-3 h-3 rounded-full bg-slate-300 hover:bg-red-400 transition-colors" />
                <div className="w-3 h-3 rounded-full bg-slate-300 hover:bg-amber-400 transition-colors" />
                <div className="w-3 h-3 rounded-full bg-slate-300 hover:bg-emerald-400 transition-colors" />
                <div className="ml-4 flex-1 text-center pr-12">
                  <div className="inline-flex items-center gap-2 bg-white border border-slate-200 px-3 py-0.5 rounded-md shadow-sm">
                    <Lock className="w-3 h-3 text-emerald-600" />
                    <span className="text-[10px] text-slate-500 font-mono font-medium">fabric-workspace.microsoft.com</span>
                  </div>
                </div>
              </div>
              
              {/* Main Content Area - Light */}
              <div className="flex-1 p-5 lg:p-6 overflow-hidden bg-slate-50/50">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`ui-${activeIndex}`}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.4 }}
                    className="h-full w-full"
                  >
                    {renderDashboardUI(activeIndex)}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Right Benefits Column - Interactive Side Tabs */}
          <div className="lg:col-span-5 flex flex-col gap-2 lg:gap-3 h-full">
            {benefits.map((benefit, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`text-left w-full rounded-2xl p-3 lg:p-4 transition-all duration-300 border flex items-center gap-3 lg:gap-4 group flex-1 ${
                    isActive 
                      ? "bg-white border-blue-200 shadow-[0_12px_40px_rgb(0,0,0,0.06)] scale-[1.02] z-10" 
                      : "bg-white border-slate-200/80 hover:border-slate-300 hover:shadow-md hover:scale-[1.01]"
                  }`}
                >
                  <div className={`w-12 h-12 shrink-0 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-sm ${
                    isActive 
                      ? "bg-gradient-to-br from-[#0067B8] to-[#005DA6] text-white shadow-blue-500/20" 
                      : "bg-slate-50 text-[#0067B8] border border-slate-100 group-hover:bg-blue-50"
                  }`}>
                    {benefit.icon || <CheckCircle2 className="w-6 h-6" />}
                  </div>
                  <div className="flex-1">
                    <h4 className={`text-base font-bold tracking-tight mb-1 transition-colors ${isActive ? "text-[#0067B8]" : "text-[#0F172A]"}`}>
                      {benefit.title}
                    </h4>
                    {benefit.outcome && (
                      <div className="flex items-center gap-1.5 text-[12px] font-semibold text-slate-500">
                        <CheckCircle2 className={`w-4 h-4 ${isActive ? "text-emerald-500" : "text-slate-400"}`} />
                        <span>{benefit.outcome}</span>
                      </div>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
