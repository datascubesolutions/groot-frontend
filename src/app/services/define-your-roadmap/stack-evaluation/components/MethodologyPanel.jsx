// @ts-nocheck
"use client";

import { m, useReducedMotion } from "framer-motion";

const EVALUATION_PANELS = [
 {
 step: 1,
 title: "Architectural Mapping",
 desc: "We map your current source systems, volume peaks, latency requirements, and team skillsets to form the baseline constraints.",
 },
 {
 step: 2,
 title: "Use Case Selection",
 desc: "Identifying the single hardest or most representative data pipeline to test—the one that usually breaks vendors.",
 },
 {
 step: 3,
 title: "Rapid Hands-On PoC",
 desc: "Executing a technical bake-off. We build the exact same pipeline across candidate tools to measure true latency and dev experience.",
 },
 {
 step: 4,
 title: "TCO & Recommendation",
 desc: "Analyzing the performance data, mapping it to your production scale, and projecting 3-year Total Cost of Ownership.",
 },
];

const STYLES = {
 panelCard:
 "flex-1 relative bg-card overflow-hidden group hover:-translate-y-2 hover:z-10 transition-transform duration-500 flex flex-col p-8 md:p-6 lg:p-8 min-h-[350px] border border-border",
 panelHoverLine:
 "absolute top-0 left-0 w-full h-1 bg-cyan-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left",
 panelNumberWrapper: "mb-8",
 panelNumberTop:
 "text-5xl font-black text-cyan-600/20 group-hover:text-cyan-600 transition-colors duration-500",
 panelTitle: "text-2xl font-black tracking-tight uppercase leading-[0.9] mb-6",
 panelDesc: "text-base text-muted-foreground font-bold leading-relaxed",
 panelNumberBottom:
 "absolute -bottom-8 -right-8 text-[12rem] font-black text-foreground/5 dark:text-foreground/10 leading-[0.7] select-none pointer-events-none group-hover:scale-110 transition-all duration-700",
 section: "py-16 lg:py-24 lg:py-16 lg:py-24 bg-muted/20 relative",
 ambientGrid:
 "absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]",
 container: "container mx-auto px-6 max-w-[1400px] relative z-10",
 headerWrapper:
 "mb-6 lg:mb-8 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b-4 border-cyan-600 pb-8",
 headerLeft: "max-w-4xl",
 methodologyBadge:
 "text-sm font-black uppercase tracking-[0.4em] text-cyan-600 mb-6 bg-cyan-600/10 inline-block px-4 py-2 border border-cyan-600/30",
 heading:
 "text-[2.5rem] md:text-[4.5rem] font-black tracking-tighter text-foreground uppercase leading-[0.85]",
 paragraph:
 "text-foreground/80 max-w-sm text-base font-bold leading-relaxed border-l-[3px] border-cyan-600 pl-6 bg-background/50 backdrop-blur-sm p-4",
 gridOuter:
 "flex flex-col lg:flex-row gap-[3px] border-[4px] border-foreground bg-foreground p-1 shadow-[8px_8px_0px_0px_rgba(6,182,212,0.3)] md:shadow-[20px_20px_0px_0px_rgba(6,182,212,0.3)]",
};

function EvaluationPanel({ step, title, desc }) {
 const shouldReduceMotion = useReducedMotion();
 const num = String(step).padStart(2, "0");

 const fadeIn = {
 hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
 visible: {
 opacity: 1,
 y: 0,
 transition: { duration: shouldReduceMotion ? 0.3 : 0.6, ease: "easeOut" },
 },
 };

 return (
 <m.div
 initial="hidden"
 whileInView="visible"
 viewport={{ once: true }}
 variants={fadeIn}
 className={STYLES.panelCard}
 >
 <div className={STYLES.panelHoverLine} aria-hidden="true" />
 <div className={STYLES.panelNumberWrapper} aria-hidden="true">
 <span className={STYLES.panelNumberTop}>{num}</span>
 </div>
 <h4 className={STYLES.panelTitle}>{title}</h4>
 <p className={STYLES.panelDesc}>{desc}</p>
 <div className={STYLES.panelNumberBottom} aria-hidden="true">
 {num}
 </div>
 </m.div>
 );
}

export default function MethodologyPanel() {
 return (
 <section className={STYLES.section}>
 <div className={STYLES.ambientGrid} aria-hidden="true" />

 <div className={STYLES.container}>
 <div className={STYLES.headerWrapper}>
 <div className={STYLES.headerLeft}>
 <h2 className={STYLES.methodologyBadge}>[ METHODOLOGY ]</h2>
 <h3 className={STYLES.heading}>
 Proof over
 <br aria-hidden="true" />
 promises.
 </h3>
 </div>
 <p className={STYLES.paragraph}>
 We execute a rapid, sprint-based approach to test your heaviest
 constraint on multiple platforms before making architecture
 recommendations.
 </p>
 </div>

 <div className={STYLES.gridOuter}>
 {EVALUATION_PANELS.map((panel, idx) => (
 <EvaluationPanel
 key={idx}
 step={panel.step}
 title={panel.title}
 desc={panel.desc}
 />
 ))}
 </div>
 </div>
 </section>
 );
}
