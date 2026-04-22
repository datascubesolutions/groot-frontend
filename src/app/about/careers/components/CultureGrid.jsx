// @ts-nocheck
"use client";

import { m, useReducedMotion } from "framer-motion";
import { Workflow, Cpu } from "lucide-react";

const STYLES = {
  section: "py-32 md:py-48 bg-background relative overflow-hidden",
  ambientLighting:
    "absolute top-1/2 right-0 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,hsl(152,76%,96%)_0%,transparent_60%)] pointer-events-none",
  container: "container mx-auto container-padding relative z-10",
  gridOuter: "grid lg:grid-cols-12 gap-16 lg:gap-24 items-center",
  leftColumn: "lg:col-span-5",
  heading:
    "text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-8 text-foreground leading-[1.05]",
  paragraphWrapper:
    "space-y-6 text-xl text-muted-foreground font-medium leading-relaxed max-w-lg",
  paragraphHighlight: "text-foreground font-black",
  divider: "h-px w-16 bg-primary/40 block my-8 origin-left",
  rightColumn: "lg:col-span-7 grid md:grid-cols-2 gap-8 relative",
  connectorLine:
    "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:block z-0 mix-blend-multiply opacity-50",
  card1:
    "p-10 lg:p-12 rounded-[2.5rem] bg-card border border-border shadow-[0_10px_40px_-20px_rgba(0,0,0,0.05)] relative z-10 hover:-translate-y-2 transition-transform duration-500 overflow-hidden group",
  card2:
    "p-10 lg:p-12 rounded-[2.5rem] bg-card border border-border shadow-[0_10px_40px_-20px_rgba(0,0,0,0.05)] relative z-10 hover:-translate-y-2 transition-transform duration-500 overflow-hidden group md:translate-y-16",
  cardIconWrapper:
    "w-16 h-16 rounded-2xl bg-muted text-primary flex items-center justify-center mb-8 border border-border/50 group-hover:bg-primary/5 group-hover:scale-110 transition-all duration-500",
  cardTitle: "text-2xl font-bold mb-4 text-foreground tracking-tight",
  cardDesc: "text-muted-foreground font-medium leading-relaxed",
};

export default function CultureGrid() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className={STYLES.section}>
      <div className={STYLES.ambientLighting} aria-hidden="true" />

      <div className={STYLES.container}>
        <div className={STYLES.gridOuter}>
          <div className={STYLES.leftColumn}>
            <m.h2
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: shouldReduceMotion ? 0.3 : 0.6 }}
              className={STYLES.heading}
            >
              The people who do well here
            </m.h2>
            <div className={STYLES.paragraphWrapper}>
              <m.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: shouldReduceMotion ? 0.3 : 0.8,
                  delay: shouldReduceMotion ? 0 : 0.2,
                }}
              >
                We&apos;re looking for people with an{" "}
                <strong className={STYLES.paragraphHighlight}>
                  ownership mindset
                </strong>
                . The kind who dig into the client&apos;s actual problem, not
                just the ticket they were handed. You&apos;ll work in
                partnership with clients, not as a hands-off developer waiting
                for specs.
              </m.p>
              <m.div
                initial={{
                  scaleX: shouldReduceMotion ? 1 : 0,
                  opacity: shouldReduceMotion ? 0 : 1,
                }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: shouldReduceMotion ? 0.3 : 0.8 }}
                className={STYLES.divider}
                aria-hidden="true"
              />
              <m.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: shouldReduceMotion ? 0.3 : 0.8,
                  delay: shouldReduceMotion ? 0 : 0.4,
                }}
              >
                If you&apos;re someone who sees a gap and fills it without being
                asked, who cares whether the solution actually works for the
                business, and who&apos;d rather understand why than just ship
                what — you&apos;ll fit here.
              </m.p>
            </div>
          </div>

          <div className={STYLES.rightColumn}>
            <div className={STYLES.connectorLine} aria-hidden="true">
              <svg
                width="300"
                height="150"
                fill="none"
                strokeDasharray="6 6"
                strokeWidth="2"
                stroke="hsl(var(--primary))"
              >
                <path d="M 0,150 C 150,150 150,0 300,0" />
              </svg>
            </div>

            <m.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: shouldReduceMotion ? 0.3 : 0.6 }}
              className={STYLES.card1}
            >
              <div className={STYLES.cardIconWrapper} aria-hidden="true">
                <Workflow size={32} strokeWidth={1.5} />
              </div>
              <h3 className={STYLES.cardTitle}>Partnership, Not Tickets</h3>
              <p className={STYLES.cardDesc}>
                You work in direct partnership with clients. No layers of PMs
                translating requirements.
              </p>
            </m.div>

            <m.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: shouldReduceMotion ? 0.3 : 0.6,
                delay: shouldReduceMotion ? 0 : 0.2,
              }}
              className={STYLES.card2}
            >
              <div className={STYLES.cardIconWrapper} aria-hidden="true">
                <Cpu size={32} strokeWidth={1.5} />
              </div>
              <h3 className={STYLES.cardTitle}>Flat & Remote</h3>
              <p className={STYLES.cardDesc}>
                We operate remote-first with direct access to senior team
                members and architects.
              </p>
            </m.div>
          </div>
        </div>
      </div>
    </section>
  );
}
