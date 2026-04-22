// @ts-nocheck
"use client";

import { Button } from "@/components/ui/Button";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Database, Network, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const capabilities = [
  {
    id: "01",
    title: "Data Foundations",
    desc: "Microsoft Fabric implementations and Lakehouse architecture.",
    details:
      "We lay down robust foundations inside Microsoft Fabric. From Lakehouse implementations to sophisticated data pipelines and governance with Microsoft Purview.",
    icon: Database,
  },
  {
    id: "02",
    title: "Analytics & BI",
    desc: "Power BI semantic models and executive dashboards.",
    details:
      "We build governed semantic models, executive dashboards, and self-service enablement tailored for leaders. We make your reporting the undeniable source of truth.",
    icon: BarChart4,
  },
  {
    id: "03",
    title: "Integrations",
    desc: "Connecting enterprise systems to your data platform.",
    details:
      "Connecting disparate ERPs, CRMs, field service systems, and SaaS applications into a unified data ecosystem for frictionless reporting and centralized control.",
    icon: Network,
  },
  {
    id: "04",
    title: "Migrations",
    desc: "Moving from legacy systems to Fabric successfully.",
    details:
      "Moving seamlessly from legacy systems to Fabric. Whether it's SQL Server, Azure Analysis Services, or Synapse—we do it without breaking what's already working.",
    icon: Zap,
  },
];

function BarChart4(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 3v18h18" />
      <path d="M13 17V9" />
      <path d="M18 17V5" />
      <path d="M8 17v-3" />
    </svg>
  );
}

export default function AboutPage() {
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const teamIndex = [
    {
      num: "01",
      category: "Microsoft Fabric & Azure",
      tools: ["Lakehouse", "Data Factory", "Synapse", "Purview"],
    },
    {
      num: "02",
      category: "Power BI",
      tools: [
        "Semantic Modeling",
        "DAX",
        "Row-Level Security",
        "Performance Optimization",
      ],
    },
    {
      num: "03",
      category: "Data Engineering",
      tools: ["Python", "SQL", "PySpark", "API Integrations"],
    },
    {
      num: "04",
      category: "Industries",
      tools: [
        "Private Equity",
        "Medical Device",
        "Construction",
        "Financial Services",
        "SaaS",
      ],
    },
  ];

  return (
    <main className="min-h-screen overflow-x-clip bg-background pt-20 font-sans selection:bg-forest/30">
      {/* 1. The Monolith Hero (50/50 Split) */}
      <section className="relative flex min-h-[calc(100vh-60px)] flex-col border-b-[8px] border-foreground bg-[#0c1214] lg:flex-row">
        {/* Left - Engineering Core */}
        <div className="relative flex flex-col justify-center overflow-hidden px-8 py-32 text-white lg:w-1/2 lg:px-20">
          {/* Massive Watermark */}
          <div className="pointer-events-none absolute -right-[20%] top-1/2 origin-center -translate-y-1/2 rotate-90 transform select-none font-mono text-[10rem] font-black text-white/5 lg:rotate-0 lg:text-[18rem]">
            GRT
          </div>

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-xl"
          >
            <div className="mb-10 inline-flex items-center gap-4">
              <div className="h-1 w-12 bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.6)]"></div>
              <span className="text-sm font-black uppercase tracking-[0.4em] text-emerald-400">
                Identity
              </span>
            </div>

            <h1 className="mb-10 text-[3.5rem] font-black uppercase leading-[0.85] tracking-tighter drop-shadow-sm lg:text-[5rem] xl:text-[5.5rem]">
              We Build Data <br />
              <span className="bg-gradient-to-r from-white to-white/40 bg-clip-text text-transparent">
                Platforms
              </span>{" "}
              <br />
              That Work.
            </h1>

            <p className="border-l-[3px] border-emerald-400 pl-6 text-xl font-bold leading-relaxed text-white/70">
              Microsoft Fabric. Power BI. Azure. Helping companies unify their
              data and make better decisions.
            </p>
          </motion.div>
        </div>

        {/* Right - Architectural Vision */}
        <div className="relative flex min-h-[50vh] items-center justify-center bg-card lg:min-h-screen lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="group absolute inset-0 transform-gpu overflow-hidden outline outline-1 outline-border will-change-[opacity,transform]"
          >
            <Image
              src="/images/about/building_hq.png"
              alt="Groot Analytics Architecture"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
              className="duration-[2s] ease-[cubic-bezier(0.19,1,0.22,1)] transform-gpu object-cover contrast-125 grayscale-[80%] transition-all will-change-[filter,transform] group-hover:scale-105 group-hover:grayscale-[50%]"
            />
            <div className="absolute inset-0 bg-forest/10 mix-blend-multiply" />

            {/* Reticle Overlays */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 flex h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/20">
              <div className="absolute h-[1px] w-[400px] bg-white/20"></div>
              <div className="absolute h-[400px] w-[1px] bg-white/20"></div>
              <div className="h-4 w-4 rounded-full border border-white/60"></div>
            </div>

            <div className="absolute bottom-8 right-8 rounded-md border border-white/20 bg-black/60 px-4 py-2 backdrop-blur-md">
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-emerald-400">
                + SYSTEM ALIGNED
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. The Architectural Ledger (Origin Story) */}
      <section className="relative border-b border-border/50 bg-background py-32 lg:py-48">
        <div className="absolute right-10 top-0 h-full w-[1px] bg-border/50"></div>
        <div className="absolute right-20 top-0 hidden h-full w-[1px] bg-border/50 md:block"></div>

        <div className="container relative mx-auto max-w-[1400px] px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="grid grid-cols-1 items-start gap-16 lg:grid-cols-12 lg:gap-24"
          >
            <div className="lg:sticky lg:top-32 lg:col-span-5">
              <h2 className="mb-8 text-sm font-black uppercase tracking-[0.4em] text-forest">
                How We Got Here
              </h2>
              <div className="mb-12 hidden h-[4px] w-24 bg-forest lg:block"></div>

              <p className="mb-8 text-3xl font-black leading-[1.1] tracking-tighter text-foreground/90 md:text-4xl lg:text-5xl">
                Groot Analytics started with a pattern I kept seeing in{" "}
                <span className="bg-gradient-to-r from-foreground to-foreground/40 bg-clip-text text-transparent">
                  private equity.
                </span>
              </p>

              <p className="border-l-[3px] border-emerald-400 pl-6 text-xl font-bold leading-relaxed text-foreground/60 md:text-2xl">
                Why does every engagement start from scratch? <br />
                <span className="mt-2 inline-block font-black text-foreground">
                  That question became Groot Analytics.
                </span>
              </p>
            </div>

            <div className="lg:col-span-7">
              <p className="mb-10 text-xl font-bold leading-relaxed text-foreground/80 md:text-2xl lg:text-3xl">
                A PE firm acquires a company. Day one, the operating partners
                need visibility — consolidated revenue, margins, cash position,
                operational KPIs across the portfolio. Simple ask. But the
                acquired company&apos;s data is a mess. Different ERPs. No data
                warehouse. Finance runs on Excel. Operations tracks jobs in
                spreadsheets someone built three years ago.
              </p>
              <p className="mb-10 text-xl font-bold leading-relaxed text-foreground/80 md:text-2xl lg:text-3xl">
                So begins the six-month slog. Consultants get hired.
                Requirements get gathered. Platforms get evaluated. By the time
                the dashboards are live, the PE firm has been flying blind for
                two quarters.{" "}
                <span className="font-black text-foreground">
                  Decisions got made on gut feel and stale data.
                </span>
              </p>

              <div className="my-16 h-[2px] w-16 bg-border"></div>

              <p className="mb-10 text-xl font-bold leading-relaxed text-foreground/80 md:text-2xl lg:text-3xl">
                We start by building the PE firm&apos;s data foundation in
                Microsoft Fabric — a structure designed so that when the next
                acquisition closes, plugging in their data takes weeks, not
                months.{" "}
                <span className="inline-block -skew-x-6 bg-foreground px-2 py-0.5 leading-none text-background shadow-[4px_4px_0_hsl(var(--forest))]">
                  The first portfolio company is the hardest. The second is
                  faster. By the third, it&apos;s a repeatable process.
                </span>
              </p>
              <p className="mb-10 text-xl font-bold leading-relaxed text-foreground/80 md:text-2xl lg:text-3xl">
                We specialize in Microsoft Fabric, Power BI, and Azure because
                that&apos;s what most mid-market companies already have. They
                don&apos;t need another platform — they need someone who can
                make what they already own actually work.
              </p>
              <p className="text-xl font-bold leading-relaxed text-foreground/80 md:text-2xl lg:text-3xl">
                Today we work beyond PE: Medical device manufacturers.
                Construction companies. Financial services firms. The core
                problem is the same: data scattered across systems that needs to
                be unified, governed, and useful. We bring it together on the
                Microsoft stack, layer in AI where it adds value, and{" "}
                <span className="inline-block border-2 border-forest-foreground/20 bg-forest px-2 py-0.5 leading-none text-forest-foreground">
                  get it done faster than the typical consulting timeline.
                </span>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. The Expansion Bellows (Core Capabilities) */}
      <section className="bg-background pb-40 pt-32">
        <div className="container mx-auto max-w-[1400px] px-6">
          <div className="mb-20">
            <h2 className="mb-4 border-l-2 border-forest pl-4 font-mono text-xs font-bold uppercase tracking-[0.4em] text-foreground/50">
              The Short Version
            </h2>
            <h3 className="text-5xl font-black uppercase leading-[0.9] tracking-tighter md:text-7xl">
              What <br /> We Do.
            </h3>
            <p className="mt-6 max-w-2xl text-xl font-bold text-foreground/70 md:text-2xl">
              We build data platforms and analytics on the Microsoft stack.
            </p>
          </div>

          <div className="flex flex-col border-t-[3px] border-foreground">
            {capabilities.map((cap, index) => {
              const isActive = activeAccordion === index;
              return (
                <motion.div
                  key={index}
                  initial={false}
                  animate={{
                    backgroundColor: isActive
                      ? "hsl(var(--card))"
                      : "hsl(var(--background))",
                    borderColor: isActive
                      ? "hsl(var(--foreground))"
                      : "hsl(var(--border))",
                  }}
                  className={`group relative flex cursor-pointer flex-col justify-center overflow-hidden border-b-[3px] transition-colors duration-500`}
                  onMouseEnter={() => setActiveAccordion(index)}
                  onMouseLeave={() => setActiveAccordion(null)}
                >
                  {/* Subtle hover gradient tracker */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r from-forest/5 to-transparent opacity-0 transition-opacity duration-500 ${isActive ? "opacity-100" : ""}`}
                  />

                  <div className="relative z-10 flex w-full items-center justify-between px-6 py-10 lg:px-12">
                    <div className="flex w-full items-center gap-8 lg:w-2/3 lg:gap-16">
                      <span
                        className={`font-mono text-2xl font-black transition-colors duration-500 ${isActive ? "text-forest" : "text-muted-foreground"}`}
                      >
                        {cap.id}
                      </span>
                      <h4
                        className={`text-3xl font-black uppercase tracking-tight transition-colors duration-500 lg:text-5xl ${isActive ? "text-foreground" : "text-foreground/70"}`}
                      >
                        {cap.title}
                      </h4>
                    </div>
                    <div className="hidden w-1/3 items-center justify-end gap-6 lg:flex">
                      <p
                        className={`max-w-xs text-right text-lg font-bold transition-all duration-500 ${isActive ? "translate-x-0 text-foreground opacity-100" : "translate-x-4 text-muted-foreground opacity-0"}`}
                      >
                        {cap.desc}
                      </p>
                      <div
                        className={`flex h-12 w-12 items-center justify-center border-[2px] transition-all duration-500 ${isActive ? "scale-110 border-forest bg-forest text-forest-foreground" : "border-muted-foreground/30 bg-transparent text-muted-foreground"}`}
                      >
                        <cap.icon size={24} />
                      </div>
                    </div>
                  </div>

                  {/* Expanding the bellows body */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="relative z-10 w-full px-6 pb-10 lg:px-12"
                      >
                        <div className="w-full pl-[4rem] lg:w-2/3 lg:pl-[6.5rem]">
                          <div className="mb-6 h-[2px] w-16 bg-forest"></div>
                          <p className="max-w-2xl text-xl font-medium leading-relaxed text-muted-foreground">
                            {cap.details}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. The Swiss Index (The Experts) */}
      <section className="border-y-2 border-border/80 bg-muted/20 py-32">
        <div className="container mx-auto max-w-[1400px] px-6">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h2 className="mb-4 border-l-2 border-forest pl-4 font-mono text-xs font-bold uppercase tracking-[0.4em] text-foreground/50">
                Who Does The Work
              </h2>
              <h2 className="mb-8 mt-2 text-5xl font-black uppercase leading-[0.9] tracking-tighter text-foreground md:text-7xl">
                Our <br />
                <span className="stroke-text bg-gradient-to-r from-foreground to-foreground/30 bg-clip-text text-transparent">
                  Team.
                </span>
              </h2>
              <p className="max-w-md text-xl font-bold leading-relaxed text-foreground/80">
                Data Engineers, Data Architects, Analytics Engineers, and Power
                BI developers. People who&apos;ve built production systems and
                know what works beyond the vendor demo.
              </p>
            </div>

            <div className="flex flex-col lg:col-span-7">
              <div className="border-t-[3px] border-foreground">
                {teamIndex.map((row, idx) => (
                  <div
                    key={idx}
                    className="group relative flex cursor-crosshair flex-col justify-between gap-4 border-b border-border/80 py-6 md:flex-row md:items-center"
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    {/* Premium dark hover background */}
                    <div className="duration-400 pointer-events-none absolute inset-0 bg-[#0a1f14] opacity-0 transition-opacity group-hover:opacity-100" />

                    <div className="relative z-10 flex flex-shrink-0 items-center gap-6">
                      <span className="font-mono text-xs font-bold text-muted-foreground transition-colors duration-300 group-hover:text-emerald-400">
                        [{row.num}]
                      </span>
                      <h4 className="text-2xl font-black uppercase tracking-tight text-foreground transition-all duration-500 group-hover:translate-x-2 group-hover:text-white lg:text-3xl">
                        {row.category}
                      </h4>
                    </div>

                    <div className="relative z-10 flex flex-wrap gap-2 md:justify-end">
                      {row.tools.map((tool, i) => (
                        <span
                          key={i}
                          className="border border-border/50 bg-muted/50 px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-foreground/50 transition-all duration-500 group-hover:border-emerald-400/40 group-hover:bg-emerald-400/10 group-hover:text-emerald-400"
                          style={{
                            transform:
                              hoveredIndex === idx
                                ? "translateX(0)"
                                : "translateX(10px)",
                            opacity: hoveredIndex === idx ? 1 : 0.5,
                            transitionDelay: `${i * 0.04}s`,
                          }}
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. The Geometric Anchor (Extreme CTA) */}
      <section
        className="relative z-[50] overflow-hidden bg-background"
        style={{ paddingBottom: "60px" }}
      >
        <div className="relative flex flex-col items-center pt-4 lg:pt-6">
          {/* The Lens — circle is centered, bottom half clipped by section overflow:hidden */}
          <div className="group relative flex h-[560px] w-[560px] flex-col items-center justify-center text-forest-foreground md:h-[640px] md:w-[640px] lg:h-[720px] lg:w-[720px]">
            {/* GPU Background layer */}
            <div className="ease-[cubic-bezier(0.16,1,0.3,1)] absolute inset-0 z-0 transform-gpu rounded-full bg-forest shadow-[0_0_80px_rgba(34,197,94,0.12)] transition-transform duration-1000 will-change-transform group-hover:scale-[1.02]"></div>

            <div className="relative z-10 -mt-16 w-full px-8 text-center">
              <div className="mx-auto mb-6 h-[2px] w-16 bg-forest-foreground/50"></div>
              <h2 className="mb-6 text-4xl font-black uppercase leading-[0.95] tracking-tighter md:text-5xl lg:text-[4rem]">
                Let&apos;s <br /> Talk.
              </h2>
              <p className="mx-auto mb-8 max-w-sm text-base font-bold leading-relaxed text-forest-foreground/80 md:text-lg">
                Whether you&apos;re integrating an acquisition, replacing
                spreadsheets, or trying to get more from your Microsoft
                investment — we&apos;re happy to have a conversation.
              </p>

              <Link href="/contact" passHref>
                <Button
                  variant="hero"
                  size="lg"
                  className="rounded-none border-4 border-forest-foreground bg-forest-foreground px-8 py-6 text-lg font-black uppercase tracking-[0.2em] text-forest shadow-none transition-all duration-300 hover:bg-transparent hover:text-forest-foreground"
                >
                  Book a Conversation
                  <ArrowRight className="ml-3 h-5 w-5" />
                </Button>
              </Link>
            </div>

            {/* Decorative elements */}
            <div className="pointer-events-none absolute left-8 top-[30%] z-0 origin-left rotate-90 select-none font-mono text-[4rem] font-black text-forest-foreground/10 md:left-14 lg:text-[6rem]">
              ACT
            </div>
            <div className="pointer-events-none absolute right-8 top-[30%] z-0 origin-right -rotate-90 select-none font-mono text-[4rem] font-black text-forest-foreground/10 md:right-14 lg:text-[6rem]">
              NOW
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
