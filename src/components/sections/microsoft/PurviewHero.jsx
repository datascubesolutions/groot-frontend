// @ts-nocheck
"use client";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { ArrowRight, Cloud, Database, FileText, Network, Search, Server, ShieldAlert } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export function PurviewHero() {
  return (
    <section className="relative w-full h-[calc(100vh-80px)] min-h-[700px] flex items-center bg-background border-b-[4px] border-foreground overflow-hidden pt-12 md:pt-16">

      {/* Heavy Neo-Brutalist Background Grid */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808020_2px,transparent_2px),linear-gradient(to_bottom,#80808020_2px,transparent_2px)] bg-[size:64px_64px] pointer-events-none" />
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808010_1px,transparent_1px),linear-gradient(to_bottom,#80808010_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 max-w-[1600px] relative z-10 flex flex-col justify-center h-full">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center h-full">

          {/* ── Left Text Column ── */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Badge */}
            <motion.div variants={fadeIn} className="mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#2B71C4]/10 border-[2px] border-[#2B71C4] shadow-[4px_4px_0_0_#2B71C4]">
                <div className="w-2 h-2 rounded-none bg-[#2B71C4] animate-pulse" />
                <span className="text-[11px] lg:text-xs font-black tracking-[0.2em] text-[#2B71C4] uppercase">
                  Data Governance &amp; Compliance
                </span>
              </div>
            </motion.div>

            {/* H1 */}
            <motion.h1
              variants={fadeIn}
              className="mb-6 text-[3.5rem] sm:text-[4.5rem] lg:text-[5.5rem] xl:text-[6.5rem] font-black tracking-tighter text-foreground leading-[0.9] uppercase"
            >
              Govern every<br />
              <span className="relative inline-block mt-2">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#2B71C4] to-[#2B71C4]/80">
                  data asset.
                </span>
                <span className="absolute bottom-1 left-0 w-full h-[30%] bg-[#2B71C4]/20 -z-10" />
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={fadeIn}
              className="max-w-xl mb-10 text-base lg:text-lg font-bold leading-relaxed text-slate-700 border-l-[4px] border-[#2B71C4] pl-5"
            >
              Data governance that gets used. Discovery, lineage, classification,
              and policy — across your entire data estate. Audit-ready by default.
            </motion.p>

            {/* CTA */}
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link href="/contact?service=purview-assessment">
                <Button className="h-14 rounded-none bg-foreground hover:bg-[#2B71C4] px-8 text-background font-black tracking-[0.15em] text-xs uppercase border-[3px] border-foreground shadow-[6px_6px_0_0_#2B71C4] hover:shadow-none hover:translate-x-[6px] hover:translate-y-[6px] transition-all">
                  Get Governance Assessment <ArrowRight className="ml-3 h-5 w-5" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* ── Right Visual Column — Governance Architecture Stack ── */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="lg:col-span-5 relative w-full h-[500px] lg:h-[600px] hidden md:flex flex-col items-center justify-center"
          >
            <div className="relative w-[90%] max-w-[400px] h-[500px] flex flex-col items-center justify-center group">

              {/* Layer 1: Compliance Reports (Top) */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[5%] w-full bg-[#2B71C4]/10 border-[3px] border-[#2B71C4] p-5 shadow-[12px_12px_0_0_#2B71C4] backdrop-blur-sm z-40 flex items-center justify-between transition-transform duration-500 group-hover:-translate-y-8"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white border-[2px] border-[#2B71C4] flex items-center justify-center p-2">
                    <ShieldAlert className="w-6 h-6 text-[#2B71C4]" strokeWidth={2.5} />
                  </div>
                  <div>
                    <h4 className="text-sm font-black uppercase tracking-widest text-[#2B71C4]">Compliance</h4>
                    <p className="text-[10px] font-bold text-slate-700 uppercase">Audit-Ready Reports</p>
                  </div>
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-emerald-600 border border-emerald-500 bg-emerald-50 px-2 py-1">✓ Ready</span>
              </motion.div>

              {/* Layer 2: Data Catalog (Middle High) */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-[32%] w-[95%] right-0 bg-slate-50 border-[3px] border-foreground p-5 shadow-[12px_12px_0_0_rgba(0,0,0,0.1)] backdrop-blur-sm z-30 flex items-center justify-between transition-transform duration-500 group-hover:-translate-y-2 group-hover:translate-x-4"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white border-[2px] border-foreground flex items-center justify-center p-2">
                    <Image src="/svg/microsoft-purview-seeklogo.svg" alt="Purview" width={28} height={28} />
                  </div>
                  <div>
                    <h4 className="text-sm font-black uppercase tracking-widest text-slate-900">Data Catalog</h4>
                    <p className="text-[10px] font-bold text-slate-600 uppercase">Discovery &amp; Lineage</p>
                  </div>
                </div>
              </motion.div>

              {/* Layer 3: Classification (Middle Low) */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-[57%] w-[105%] -left-4 bg-amber-50 border-[3px] border-amber-600 p-5 shadow-[12px_12px_0_0_rgba(217,119,6,0.4)] backdrop-blur-sm z-20 flex items-center justify-between transition-transform duration-500 group-hover:translate-y-4 group-hover:-translate-x-4"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white border-[2px] border-amber-600 flex items-center justify-center p-2">
                    <Search className="w-6 h-6 text-amber-600" strokeWidth={2.5} />
                  </div>
                  <div>
                    <h4 className="text-sm font-black uppercase tracking-widest text-amber-700">Classification</h4>
                    <p className="text-[10px] font-bold text-slate-700 uppercase">PII &amp; Sensitivity Labels</p>
                  </div>
                </div>
              </motion.div>

              {/* Layer 4: Data Sources (Bottom) */}
              <div className="absolute top-[82%] w-[85%] bg-slate-100 border-[3px] border-slate-800 p-5 shadow-[12px_12px_0_0_#1e293b] z-10 flex items-center justify-center gap-6 transition-transform duration-500 group-hover:translate-y-8">
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-800 absolute -top-3 bg-slate-100 px-2 border-[2px] border-slate-800">Data Sources</span>
                <Image src="/svg/azure-2.svg" alt="Azure" width={24} height={24} className="grayscale hover:grayscale-0 transition-all" />
                <div className="w-1.5 h-1.5 bg-slate-400 rounded-none" />
                <Database className="w-5 h-5 text-slate-600" strokeWidth={2} />
                <div className="w-1.5 h-1.5 bg-slate-400 rounded-none" />
                <Cloud className="w-5 h-5 text-slate-600" strokeWidth={2} />
              </div>

              {/* Connecting vertical line */}
              <div className="absolute top-[10%] bottom-[18%] w-[4px] bg-foreground/20 -z-10 group-hover:bg-[#2B71C4]/50 transition-colors duration-500" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
