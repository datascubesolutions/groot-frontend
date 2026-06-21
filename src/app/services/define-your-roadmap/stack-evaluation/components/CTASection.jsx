// @ts-nocheck
"use client";

import { m, useReducedMotion } from "framer-motion";
import { ArrowLeftRight, CheckCircle2, ChevronRight } from "lucide-react";
import Link from "next/link";

const ARCHITECTURE_STEPS = [
 {
 title: "Define constraints",
 desc: "We review your volume, latency, and integrations.",
 },
 {
 title: "Select candidate platforms",
 desc: "Determine if Fabric, Databricks, Snowflake, or others make sense to test.",
 },
 {
 title: "Scope PoC timeline",
 desc: "Build a roadmap for performing the hands-on evaluation.",
 },
];

const STYLES = {
 section:
 "py-16 lg:py-24 md:py-48 bg-background relative border-t border-border/50 overflow-hidden",
 bgGlow:
 "absolute top-0 right-0 w-[1000px] h-[1000px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3",
 container: "container mx-auto px-6 max-w-[85rem] relative z-10",
 gridOuter: "grid lg:grid-cols-2 gap-12 lg:gap-16 lg:gap-24 items-center",
 badgeWrapper: "inline-flex items-center gap-4 mb-8",
 badgeLine: "w-12 h-px bg-cyan-600/60",
 badgeText: "text-cyan-600 font-bold uppercase tracking-[0.2em] text-sm",
 heading:
 "text-6xl md:text-7xl lg:text-[5.5rem] font-black tracking-tighter mb-8 text-foreground leading-[1.05]",
 paragraph:
 "text-xl md:text-2xl text-muted-foreground mb-6 lg:mb-8 font-medium max-w-xl text-balance leading-relaxed",
 actionLink:
 "inline-flex items-center gap-6 group p-4 pr-10 rounded-[2.5rem] bg-card border border-border shadow-[0_10px_40px_-20px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_40px_-10px_rgba(6,182,212,0.2)] hover:border-cyan-500/30 transition-all duration-500",
 actionIconWrapper:
 "flex items-center justify-center w-16 h-16 rounded-full bg-cyan-500/10 border border-cyan-500/20 group-hover:bg-cyan-600 transition-all duration-500 shrink-0",
 actionIcon:
 "text-cyan-600 group-hover:text-white group-hover:translate-x-1 transition-all duration-500 w-6 h-6",
 actionTextWrapper: "flex flex-col",
 actionLabel:
 "text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1",
 actionTitle:
 "text-xl md:text-2xl font-bold text-foreground group-hover:text-cyan-600 transition-colors duration-300",
 rightColumnOuter: "w-full relative",
 cardOuter:
 "bg-card border border-border p-6 lg:p-8 md:p-6 lg:p-8 rounded-[3rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] relative overflow-hidden group hover:border-cyan-500/20 transition-all duration-700",
 cardBgGlow:
 "absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,0.08),transparent_70%)] opacity-50 pointer-events-none",
 cardHeaderWrapper: "flex items-center gap-5 mb-6 lg:mb-8 relative z-10",
 cardIconWrapper:
 "w-14 h-14 rounded-[1rem] bg-background border border-border flex items-center justify-center shrink-0 shadow-sm",
 cardIcon: "w-6 h-6 text-cyan-600",
 cardTitle: "text-2xl font-bold text-foreground tracking-tight mb-1",
 cardSubtitle:
 "text-sm text-muted-foreground font-semibold uppercase tracking-widest",
 listOuter: "space-y-8 relative z-10",
 listItem:
 "flex items-start gap-6 group/item pt-6 border-t border-border/50 first:border-0 first:pt-0",
 listItemIconWrapper:
 "mt-1 flex items-center justify-center w-8 h-8 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 shrink-0 group-hover/item:scale-110 group-hover/item:bg-cyan-600 group-hover/item:text-white group-hover/item:border-cyan-600 transition-all duration-300 shadow-sm",
 listItemTitle:
 "font-bold text-lg text-foreground tracking-tight mb-2 group-hover/item:text-cyan-600 transition-colors",
 listItemDesc:
 "text-muted-foreground text-sm font-medium leading-relaxed max-w-sm",
};

export default function CTASection() {
 const shouldReduceMotion = useReducedMotion();

 return (
 <section className={STYLES.section}>
 <div className={STYLES.bgGlow} aria-hidden="true" />
 <div className={STYLES.container}>
 <div className={STYLES.gridOuter}>
 <div>
 <m.div
 initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: shouldReduceMotion ? 0.3 : 0.6 }}
 className={STYLES.badgeWrapper}
 >
 <span className={STYLES.badgeLine} aria-hidden="true" />
 <span className={STYLES.badgeText}>Make The Choice</span>
 </m.div>
 <m.h2
 initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{
 duration: shouldReduceMotion ? 0.3 : 0.6,
 delay: shouldReduceMotion ? 0 : 0.1,
 }}
 className={STYLES.heading}
 >
 Evaluate <br aria-hidden="true" /> With Evidence.
 </m.h2>
 <m.p
 initial={{ opacity: 0 }}
 whileInView={{ opacity: 1 }}
 viewport={{ once: true }}
 transition={{
 duration: shouldReduceMotion ? 0.3 : 0.8,
 delay: shouldReduceMotion ? 0 : 0.2,
 }}
 className={STYLES.paragraph}
 >
 Connect with our architecture team to scope an objective platform
 evaluation tailored to your data environment.
 </m.p>
 <m.div
 initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{
 duration: shouldReduceMotion ? 0.3 : 0.6,
 delay: shouldReduceMotion ? 0 : 0.3,
 }}
 >
 <Link
 href="/contact"
 className={STYLES.actionLink}
 aria-label="Navigate to contact page to talk to an architect"
 >
 <div className={STYLES.actionIconWrapper} aria-hidden="true">
 <ChevronRight
 className={STYLES.actionIcon}
 strokeWidth={2.5}
 />
 </div>
 <div className={STYLES.actionTextWrapper}>
 <span className={STYLES.actionLabel}>
 Book a consultation
 </span>
 <span className={STYLES.actionTitle}>
 Talk to an Architect
 </span>
 </div>
 </Link>
 </m.div>
 </div>

 <m.div
 initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 30 }}
 whileInView={{ opacity: 1, x: 0 }}
 viewport={{ once: true }}
 transition={{
 duration: shouldReduceMotion ? 0.4 : 0.8,
 delay: shouldReduceMotion ? 0 : 0.2,
 }}
 className={STYLES.rightColumnOuter}
 >
 <div className={STYLES.cardOuter}>
 <div className={STYLES.cardBgGlow} aria-hidden="true" />
 <div className={STYLES.cardHeaderWrapper}>
 <div className={STYLES.cardIconWrapper} aria-hidden="true">
 <ArrowLeftRight className={STYLES.cardIcon} />
 </div>
 <div>
 <h3 className={STYLES.cardTitle}>Architecture Review</h3>
 <p className={STYLES.cardSubtitle}>Initial Scoping Call</p>
 </div>
 </div>
 <ul
 className={STYLES.listOuter}
 aria-label="Review Process Steps"
 >
 {ARCHITECTURE_STEPS.map((item, i) => (
 <li key={i} className={STYLES.listItem}>
 <div
 className={STYLES.listItemIconWrapper}
 aria-hidden="true"
 >
 <CheckCircle2 size={16} strokeWidth={3} />
 </div>
 <div>
 <p className={STYLES.listItemTitle}>{item.title}</p>
 <p className={STYLES.listItemDesc}>{item.desc}</p>
 </div>
 </li>
 ))}
 </ul>
 </div>
 </m.div>
 </div>
 </div>
 </section>
 );
}
