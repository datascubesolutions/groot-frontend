// @ts-nocheck
"use client";

import { m, useReducedMotion } from "framer-motion";
import { ArrowRight, Sparkles, Briefcase, CheckCircle2 } from "lucide-react";

const APPLICATION_STEPS = [
  {
    title: "Resume or LinkedIn",
    desc: "So we can understand your technical background, skills, and past experience.",
  },
  {
    title: "Why Groot?",
    desc: "A few short sentences on why Groot interests you and what impact you want to make.",
  },
  {
    title: "A Data Project",
    desc: "A brief description of a data puzzle, pipeline, or model you built that you are proud of.",
  },
];

const STYLES = {
  section:
    "py-20 md:py-32 bg-background relative border-t border-border/50 overflow-hidden",
  glowRight:
    "absolute top-0 right-0 w-[1000px] h-[1000px] bg-primary/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3",
  glowLeft:
    "absolute bottom-0 left-0 w-[800px] h-[800px] bg-forest/5 rounded-full blur-[100px] pointer-events-none translate-y-1/3 -translate-x-1/3",
  container: "container mx-auto container-padding max-w-[85rem] relative z-10",
  grid: "grid lg:grid-cols-2 gap-16 lg:gap-24 items-center",
  badgeWrapper: "inline-flex items-center gap-4 mb-8",
  badgeLine: "w-12 h-px bg-primary/60",
  badgeText: "text-primary font-bold uppercase tracking-[0.2em] text-sm",
  heading:
    "text-6xl md:text-7xl lg:text-[5.5rem] font-black tracking-tighter mb-8 text-foreground leading-[1.05]",
  paragraph:
    "text-xl md:text-2xl text-muted-foreground mb-12 font-medium max-w-xl text-balance leading-relaxed",
  actionCard:
    "inline-flex items-center gap-6 group p-4 pr-10 rounded-[2.5rem] bg-card border border-border shadow-[0_10px_40px_-20px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_40px_-10px_hsl(var(--primary)/0.2)] hover:border-primary/30 transition-all duration-500",
  actionIconWrapper:
    "flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border border-primary/20 group-hover:bg-primary transition-all duration-500 shrink-0",
  actionIcon:
    "text-primary group-hover:text-primary-foreground group-hover:translate-x-1 transition-all duration-500 w-6 h-6",
  actionTextWrapper: "flex flex-col",
  actionLabel:
    "text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1",
  actionEmail:
    "text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 break-all",
  trustLine: "mt-16 pt-8 border-t border-border/60 flex items-center gap-6",
  trustIconWrapper:
    "w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center shrink-0 shadow-sm",
  trustIcon: "w-5 h-5 text-primary",
  trustText:
    "text-sm font-medium text-muted-foreground tracking-wide leading-relaxed",
  rightColumn: "w-full relative",
  requirementsCard:
    "bg-card border border-border p-10 md:p-14 rounded-[3rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] relative overflow-hidden group hover:border-primary/20 transition-all duration-700",
  requirementsGlow:
    "absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(circle_at_top_right,hsl(var(--primary)/0.08),transparent_70%)] opacity-50 pointer-events-none",
  requirementsHeader: "flex items-center gap-5 mb-12 relative z-10",
  requirementsIconWrapper:
    "w-14 h-14 rounded-[1rem] bg-background border border-border flex items-center justify-center shrink-0 shadow-sm",
  requirementsTitleIcon: "w-6 h-6 text-primary",
  requirementsHeading: "text-2xl font-bold text-foreground tracking-tight mb-1",
  requirementsSubheading:
    "text-sm text-muted-foreground font-semibold uppercase tracking-widest",
  stepsList: "space-y-8 relative z-10",
  stepItem:
    "flex items-start gap-6 group/item pt-6 border-t border-border/50 first:border-0 first:pt-0",
  stepIconWrapper:
    "mt-1 flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 border border-primary/20 text-primary shrink-0 group-hover/item:scale-110 group-hover/item:bg-primary group-hover/item:text-primary-foreground group-hover/item:border-primary transition-all duration-300 shadow-sm",
  stepTitle:
    "font-bold text-xl text-foreground tracking-tight mb-2 group-hover/item:text-primary transition-colors",
  stepDesc: "text-muted-foreground font-medium leading-relaxed max-w-sm",
};

export default function CTASection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className={STYLES.section}>
      <div className={STYLES.glowRight} aria-hidden="true" />
      <div className={STYLES.glowLeft} aria-hidden="true" />

      <div className={STYLES.container}>
        <div className={STYLES.grid}>
          <div>
            <m.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: shouldReduceMotion ? 0.3 : 0.6 }}
              className={STYLES.badgeWrapper}
            >
              <span className={STYLES.badgeLine} aria-hidden="true" />
              <span className={STYLES.badgeText}>Join The Mission</span>
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
              Ready to make <br aria-hidden="true" /> an impact?
            </m.h2>

            <m.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: shouldReduceMotion ? 0.3 : 0.6,
                delay: shouldReduceMotion ? 0 : 0.2,
              }}
              className={STYLES.paragraph}
            >
              We are always looking for exceptional data talent to join our
              specialized remote-first team.
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
              <a
                href="mailto:careers@grootanalytics.com"
                className={STYLES.actionCard}
                aria-label="Send an application email to careers@grootanalytics.com"
              >
                <div className={STYLES.actionIconWrapper} aria-hidden="true">
                  <ArrowRight className={STYLES.actionIcon} strokeWidth={2.5} />
                </div>
                <div className={STYLES.actionTextWrapper}>
                  <span className={STYLES.actionLabel}>Send Application</span>
                  <span className={STYLES.actionEmail}>
                    careers@grootanalytics.com
                  </span>
                </div>
              </a>
            </m.div>

            <m.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: shouldReduceMotion ? 0.3 : 0.8,
                delay: shouldReduceMotion ? 0 : 0.6,
              }}
              className={STYLES.trustLine}
            >
              <div className={STYLES.trustIconWrapper} aria-hidden="true">
                <Sparkles className={STYLES.trustIcon} />
              </div>
              <p className={STYLES.trustText}>
                Join our team building the future on Microsoft Fabric.
              </p>
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
            className={STYLES.rightColumn}
          >
            <div className={STYLES.requirementsCard}>
              <div className={STYLES.requirementsGlow} aria-hidden="true" />

              <div className={STYLES.requirementsHeader}>
                <div
                  className={STYLES.requirementsIconWrapper}
                  aria-hidden="true"
                >
                  <Briefcase className={STYLES.requirementsTitleIcon} />
                </div>
                <div>
                  <h3 className={STYLES.requirementsHeading}>How to Apply</h3>
                  <p className={STYLES.requirementsSubheading}>
                    Please include 3 items
                  </p>
                </div>
              </div>

              <ul
                className={STYLES.stepsList}
                aria-label="Application Requirements"
              >
                {APPLICATION_STEPS.map((item, i) => (
                  <li key={i} className={STYLES.stepItem}>
                    <div className={STYLES.stepIconWrapper} aria-hidden="true">
                      <CheckCircle2 size={16} strokeWidth={3} />
                    </div>
                    <div>
                      <p className={STYLES.stepTitle}>{item.title}</p>
                      <p className={STYLES.stepDesc}>{item.desc}</p>
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
