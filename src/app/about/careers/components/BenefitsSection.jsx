// @ts-nocheck
"use client";

import { m, useReducedMotion } from "framer-motion";
import {
  HeartHandshake,
  MonitorSmartphone,
  GraduationCap,
  Sparkles,
} from "lucide-react";

const BENEFITS = [
  {
    icon: HeartHandshake,
    title: "Competitive Comp",
    desc: "Competitive compensation with performance bonus.",
  },
  {
    icon: MonitorSmartphone,
    title: "Remote Flexibility",
    desc: "Remote flexibility. Equipment provided.",
  },
  {
    icon: GraduationCap,
    title: "Professional Growth",
    desc: "Professional development including certifications and training.",
  },
  {
    icon: Sparkles,
    title: "No Burnout Culture",
    desc: "Reasonable hours — deadlines are real, but we don't celebrate burnout.",
  },
];

const STYLES = {
  section: "py-32 md:py-48 bg-background relative overflow-hidden",
  ambientLight:
    "absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none",
  container: "container mx-auto container-padding",
  headerWrapper: "text-center mb-20 max-w-3xl mx-auto align-middle",
  badgeWrapper: "inline-flex items-center gap-3 mb-8 mx-auto",
  badgeText: "text-primary font-bold uppercase tracking-[0.2em] text-sm",
  badgeLine: "w-12 h-px bg-primary/60",
  heading:
    "text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-6 text-foreground",
  subheading: "text-xl text-muted-foreground font-medium",
  grid: "grid md:grid-cols-2 lg:gap-12 gap-8 max-w-5xl mx-auto",
  card: "p-10 lg:p-14 rounded-[2.5rem] bg-card border border-border shadow-[0_10px_40px_-20px_rgba(0,0,0,0.05)] hover:-translate-y-1 transition-transform duration-500 flex flex-col items-center text-center group",
  iconWrapper:
    "w-20 h-20 rounded-2xl bg-background border border-border/80 flex items-center justify-center text-primary mb-8 shadow-sm group-hover:scale-110 group-hover:bg-primary/5 group-hover:border-primary/30 transition-all duration-500",
  cardTitle:
    "font-bold text-2xl lg:text-3xl mb-4 text-foreground tracking-tight",
  cardDesc: "text-muted-foreground font-medium leading-relaxed text-lg",
};

export default function BenefitsSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className={STYLES.section}>
      <div className={STYLES.ambientLight} aria-hidden="true" />

      <div className={STYLES.container}>
        <div className={STYLES.headerWrapper}>
          <div className={STYLES.badgeWrapper}>
            <span className={STYLES.badgeText}>Our Commitments</span>
            <span className={STYLES.badgeLine} aria-hidden="true" />
          </div>
          <h2 className={STYLES.heading}>What We Offer</h2>
          <p className={STYLES.subheading}>
            Equipping our team to deliver the highest tier of engineering
            without the burnout.
          </p>
        </div>

        <div className={STYLES.grid}>
          {BENEFITS.map((benefit, idx) => (
            <m.div
              initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: shouldReduceMotion ? 0 : idx * 0.1,
                duration: shouldReduceMotion ? 0.3 : 0.5,
              }}
              key={idx}
              className={STYLES.card}
            >
              <div className={STYLES.iconWrapper} aria-hidden="true">
                <benefit.icon size={36} strokeWidth={1.5} />
              </div>
              <h4 className={STYLES.cardTitle}>{benefit.title}</h4>
              <p className={STYLES.cardDesc}>{benefit.desc}</p>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
