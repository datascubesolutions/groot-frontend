// @ts-nocheck
"use client";

import { m, useReducedMotion } from "framer-motion";
import {
  HeartHandshake,
  MonitorSmartphone,
  GraduationCap,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

const BENEFITS = [
  {
    icon: HeartHandshake,
    title: "Top-Tier Compensation",
    desc: "We offer highly competitive base salaries and performance-based bonuses. We believe in rewarding elite talent with elite compensation packages.",
    perks: [
      "Competitive Base Salary",
      "Annual Performance Bonuses",
      "Transparent Pay Scales",
    ],
  },
  {
    icon: MonitorSmartphone,
    title: "Remote-First Environment",
    desc: "Work from anywhere in the world. We provide a comprehensive home office stipend, top-of-the-line equipment, and flexible hours to suit your lifestyle.",
    perks: [
      "Home Office Stipend",
      "Flexible Working Hours",
      "Top-Tier Hardware Provided",
    ],
  },
  {
    icon: GraduationCap,
    title: "Continuous Learning",
    desc: "Your growth is our growth. Enjoy an annual learning budget, Microsoft certification sponsorships, and dedicated time for skill development.",
    perks: [
      "Annual Learning Budget",
      "Paid Certifications",
      "Dedicated R&D Time",
    ],
  },
  {
    icon: Sparkles,
    title: "Sustainable Engineering",
    desc: "We do hard work, but we don't celebrate burnout. We enforce generous PTO, respect offline hours, and scope projects realistically.",
    perks: [
      "Generous Paid Time Off",
      "Respected Offline Hours",
      "Realistic Project Scoping",
    ],
  },
];

const STYLES = {
  section: "py-20 md:py-32 bg-background relative overflow-hidden",
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
  grid: "grid md:grid-cols-2 lg:gap-10 gap-8 max-w-6xl mx-auto",
  card: "p-8 lg:p-12 rounded-[2.5rem] bg-card border border-border shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-primary/30 transition-all duration-500 flex flex-col group relative overflow-hidden text-left",
  cardHoverBg:
    "absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none",
  cardHeader: "flex flex-col md:flex-row md:items-center gap-6 mb-8",
  iconWrapper:
    "w-16 h-16 shrink-0 rounded-2xl bg-background border border-border/80 flex items-center justify-center text-primary shadow-sm group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-500 z-10 relative",
  cardTitle:
    "font-bold text-2xl lg:text-3xl text-foreground tracking-tight group-hover:text-primary transition-colors",
  cardDesc:
    "text-muted-foreground font-medium leading-relaxed text-lg mb-8 relative z-10 flex-grow",
  perksList: "space-y-4 relative z-10 mt-auto pt-8 border-t border-border/50",
  perkItem: "flex items-start gap-3 text-foreground/80 font-medium",
  perkIcon: "w-5 h-5 text-forest shrink-0 mt-0.5",
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
              <div className={STYLES.cardHoverBg} aria-hidden="true" />

              <div className={STYLES.cardHeader}>
                <div className={STYLES.iconWrapper} aria-hidden="true">
                  <benefit.icon size={32} strokeWidth={1.5} />
                </div>
                <h4 className={STYLES.cardTitle}>{benefit.title}</h4>
              </div>

              <p className={STYLES.cardDesc}>{benefit.desc}</p>

              <div className={STYLES.perksList}>
                {benefit.perks.map((perk, i) => (
                  <div key={i} className={STYLES.perkItem}>
                    <CheckCircle2 className={STYLES.perkIcon} />
                    <span>{perk}</span>
                  </div>
                ))}
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}

