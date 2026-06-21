// @ts-nocheck
"use client";

import { m, useReducedMotion } from "framer-motion";
import { Scale, ShieldAlert, ServerCog } from "lucide-react";

const STYLES = {
 section: "pt-10 pb-8 lg:pb-12 bg-background relative z-30",
 container: "container mx-auto px-6 max-w-7xl",
 layoutWrapper:
 "flex flex-col md:flex-row gap-8 lg:gap-10 lg:gap-24 items-start",
 leftColumn:
 "md:w-[35%] md:sticky top-32 z-40 flex flex-col gap-6 -mt-8 lg:mt-12 ml-0 md:ml-4",
 heroCard:
 "bg-card/95 backdrop-blur-xl p-8 lg:p-6 lg:p-8 border-l-[12px] border-y border-r border-cyan-500 shadow-[30px_30px_60px_-15px_rgba(6,182,212,0.15)] rounded-tr-[4rem] rounded-bl-[4rem]",
 badgeWrapper:
 "text-sm font-black uppercase tracking-[0.3em] text-cyan-600 mb-6 flex items-center gap-4",
 badgeLine: "w-12 h-1 bg-cyan-600",
 heading:
 "text-[3rem] md:text-[3.5rem] font-black leading-[0.85] tracking-tighter text-foreground mb-8 uppercase",
 paragraphMain: "text-xl text-foreground font-bold leading-relaxed mb-8",
 paragraphSecondary:
 "text-sm text-muted-foreground font-semibold leading-relaxed mb-0 bg-muted/50 p-4 border-l-2 border-cyan-500/50",
 graphicWrapper:
 "hidden md:flex flex-col relative w-full mt-8 mb-8 z-50 group",
 graphicBgOverlay:
 "absolute top-6 bottom-0 left-6 right-0 bg-cyan-500/20 transition-transform duration-700 group-hover:translate-x-2 group-hover:translate-y-2 -z-10",
 graphicCard:
 "relative border-2 border-border bg-card p-8 group-hover:-translate-y-2 group-hover:-translate-x-2 transition-transform duration-700 flex flex-col",
 graphicHeader:
 "flex items-center justify-between mb-8 pb-4 border-b border-border/60",
 graphicIcon: "text-cyan-500 w-10 h-10",
 graphicBadge:
 "text-[10px] font-black tracking-[0.2em] uppercase text-cyan-600 px-3 py-1 bg-cyan-500/10 border border-cyan-500/20",
 graphicTitle:
 "text-[1.8rem] font-black uppercase tracking-tight leading-[0.9] text-foreground mb-4",
 graphicAccent:
 "text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/30 stroke-text",
 graphicDesc: "text-sm font-bold text-muted-foreground leading-relaxed",
 rightColumn: "md:w-[65%] flex flex-col pt-10 lg:pt-0",
 pCardWrapper1:
 "relative bg-card border-2 border-border p-8 lg:p-6 lg:p-8 shadow-xl z-10 w-full md:w-[90%] hover:scale-[1.02] hover:border-cyan-500/30 transition-all duration-500 overflow-hidden group rounded-tl-[3rem] rounded-br-[3rem]",
 pCardBgText1:
 "absolute -top-10 -right-4 text-[6rem] sm:text-[10rem] font-black text-rose-500/5 leading-[0.75] select-none pointer-events-none group-hover:text-rose-500/10 transition-colors duration-500",
 pCardInner: "relative z-10",
 pCardHeaderWrapper1: "flex items-center gap-6 mb-8",
 pCardIconWrapper1:
 "w-14 h-14 bg-rose-500/10 border border-rose-500/30 text-rose-500 flex items-center justify-center -rotate-6",
 pCardBadge1:
 "text-sm font-black uppercase tracking-[0.2em] text-rose-500 bg-rose-500/10 px-3 py-1",
 pCardTitle1:
 "text-3xl font-black mb-6 tracking-tight uppercase leading-[0.9]",
 pCardDesc1: "text-lg text-foreground font-medium leading-relaxed",
 pCardWrapper2:
 "relative bg-foreground text-background p-8 lg:p-6 lg:p-8 shadow-[0_-20px_50px_-15px_rgba(0,0,0,0.5)] z-20 w-full md:w-[95%] self-end mt-6 sm:-mt-6 lg:-mt-12 hover:scale-[1.02] transition-transform duration-500 overflow-hidden group rounded-tr-[3rem] rounded-bl-[3rem]",
 pCardBgText2:
 "absolute -bottom-8 -left-6 text-[6rem] sm:text-[10rem] font-black text-background/10 leading-[0.75] select-none pointer-events-none group-hover:text-background/15 transition-colors duration-500",
 pCardHeaderWrapper2: "flex items-center gap-6 mb-8",
 pCardIconWrapper2:
 "w-14 h-14 bg-amber-500/20 border border-amber-500/40 text-amber-500 flex items-center justify-center rotate-3",
 pCardBadge2:
 "text-sm font-black uppercase tracking-[0.2em] text-amber-500 bg-amber-500/10 px-3 py-1 border border-amber-500/20",
 pCardTitle2:
 "text-3xl font-black mb-6 tracking-tight uppercase leading-[0.9] text-background",
 pCardDesc2: "text-lg text-background/80 font-medium leading-relaxed",
};

export default function ProblemSection() {
 const shouldReduceMotion = useReducedMotion();

 const fadeIn = {
 hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
 visible: {
 opacity: 1,
 y: 0,
 transition: { duration: shouldReduceMotion ? 0.3 : 0.6, ease: "easeOut" },
 },
 };

 return (
 <section className={STYLES.section}>
 <div className={STYLES.container}>
 <div className={STYLES.layoutWrapper}>
 <div className={STYLES.leftColumn}>
 <div className={STYLES.heroCard}>
 <h2 className={STYLES.badgeWrapper}>
 <span className={STYLES.badgeLine} aria-hidden="true"></span>
 The Problem
 </h2>
 <h3 className={STYLES.heading}>The Cost of Vendor Noise.</h3>
 <p className={STYLES.paragraphMain}>
 Microsoft says Fabric does everything. Databricks says they
 handle all workloads. Snowflake claims they scale infinitely.
 </p>
 <p className={STYLES.paragraphSecondary}>
 Organizations burn millions migrating to platforms that looked
 perfect in the sales demo but immediately hit performance
 scaling issues in production due to their unique pipeline
 architectures.
 </p>
 </div>

 <m.div
 initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 40 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-100px" }}
 transition={{
 duration: shouldReduceMotion ? 0.4 : 0.8,
 ease: [0.16, 1, 0.3, 1],
 }}
 className={STYLES.graphicWrapper}
 aria-hidden="true"
 >
 <div className={STYLES.graphicBgOverlay} />
 <div className={STYLES.graphicCard}>
 <div className={STYLES.graphicHeader}>
 <Scale className={STYLES.graphicIcon} />
 <span className={STYLES.graphicBadge}>Decision Matrix</span>
 </div>
 <p className={STYLES.graphicTitle}>
 Objectivity{" "}
 <span className={STYLES.graphicAccent}>Is Essential</span>.
 </p>
 <p className={STYLES.graphicDesc}>
 If you&apos;re trusting the architectural integrity of your
 enterprise data to the person trying to sell you compute
 credits, you are already losing.
 </p>
 </div>
 </m.div>
 </div>

 <div className={STYLES.rightColumn}>
 <m.div
 initial="hidden"
 whileInView="visible"
 viewport={{ once: true, margin: "-100px" }}
 variants={fadeIn}
 className={STYLES.pCardWrapper1}
 >
 <div className={STYLES.pCardBgText1} aria-hidden="true">
 P1
 </div>
 <div className={STYLES.pCardInner}>
 <div className={STYLES.pCardHeaderWrapper1}>
 <div className={STYLES.pCardIconWrapper1} aria-hidden="true">
 <ShieldAlert size={28} />
 </div>
 <p className={STYLES.pCardBadge1}>Missing Proof</p>
 </div>
 <h4 className={STYLES.pCardTitle1}>
 The &quot;Hello World&quot; Demo
 </h4>
 <p className={STYLES.pCardDesc1}>
 Vendor demos use perfectly clean CSVs to show how fast their
 pipeline engine runs. Your real data comes from an on-premise
 ERP heavily nested in XML with schema drift and duplicate
 keys.
 </p>
 </div>
 </m.div>

 <m.div
 initial="hidden"
 whileInView="visible"
 viewport={{ once: true, margin: "-100px" }}
 variants={fadeIn}
 className={STYLES.pCardWrapper2}
 >
 <div className={STYLES.pCardBgText2} aria-hidden="true">
 P2
 </div>
 <div className={STYLES.pCardInner}>
 <div className={STYLES.pCardHeaderWrapper2}>
 <div className={STYLES.pCardIconWrapper2} aria-hidden="true">
 <ServerCog size={28} />
 </div>
 <p className={STYLES.pCardBadge2}>Cost Opaqueness</p>
 </div>
 <h4 className={STYLES.pCardTitle2}>Unpredictable TCO</h4>
 <p className={STYLES.pCardDesc2}>
 Compute curves are intentionally complicated. It&apos;s nearly
 impossible to map your expected daily data processing volume
 to actual dollars without standing up the architecture and
 running your specific workloads.
 </p>
 </div>
 </m.div>
 </div>
 </div>
 </div>
 </section>
 );
}
