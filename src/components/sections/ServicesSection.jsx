// @ts-nocheck
"use client";

import { domAnimation, LazyMotion, m } from "framer-motion";
import { Bot, Cpu, Database, TrendingUp } from "lucide-react";
import Link from "next/link";
import React from "react";

const cards = [
  {
    title: "FABRIC-READY FOUNDATION",
    subtitle: "Azure + Fabric + Purview",
    description: "We deploy your modern data platform — or fix what's broken.",
    link: "/microsoft/fabric",
    icon: Database,
    textGradient: "from-forest via-primary to-leaf",
  },
  {
    title: "DECISION INTELLIGENCE ENGINE",
    subtitle: "Power BI + Semantic Models",
    description: "We build dashboards your leadership actually trusts.",
    link: "/microsoft/power-bi",
    icon: TrendingUp,
    textGradient: "from-leaf to-primary",
  },
  {
    title: "PRODUCTION-GRADE AI FOUNDRY",
    subtitle: "Azure AI Foundry",
    description: "We architect AI on governed data so pilots actually ship.",
    link: "/microsoft/ai-foundry",
    icon: Cpu,
    textGradient: "from-primary to-leaf",
  },
  {
    title: "COPILOT DEPLOYMENT & AGENTS",
    subtitle: "Microsoft Copilot + Copilot Studio",
    description:
      "We deploy Copilot for adoption, not shelfware — with custom agents that work.",
    link: "/microsoft/copilot",
    icon: Bot,
    textGradient: "from-forest to-primary",
  },
];

export function ServicesSection() {
  return (
    <LazyMotion features={domAnimation} strict>
      <section className="section-padding relative overflow-hidden bg-background">
        {/* Background Decor */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-full overflow-hidden opacity-30">
          <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px]" />
          <div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-forest/10 blur-[120px]" />
        </div>

        <div className="container-padding container relative z-10 mx-auto">
          {/* Section Header */}
          <div className="mx-auto mb-10 max-w-3xl space-y-4 text-center md:mb-12">
            <h2 className="heading-section">
              Our <span className="text-foreground">Services</span>
            </h2>
          </div>

          {/*
          Content Row
          Scaled down on LG and XL screens to fit the wide layout
          while preserving the pixel-perfect SVG connections.
        */}
          <div className="flex w-full justify-center">
            <div className="relative transform transition-transform duration-300 lg:origin-top lg:scale-[0.80] xl:scale-[0.90] 2xl:scale-100">
              <div className="relative mx-auto flex flex-col flex-nowrap items-center justify-center gap-8 rounded-2xl p-4 sm:p-6 md:gap-10 md:p-8 lg:flex-row lg:items-stretch lg:gap-0">
                {/* Mobile Vertical Connection Line */}
                <div className="absolute bottom-20 left-1/2 top-20 z-0 w-[2px] -translate-x-1/2 bg-gradient-to-b from-primary/0 via-primary/30 to-primary/0 lg:hidden" />
                {/* Card 1 (Left) */}
                <div className="group relative z-10 h-auto w-full max-w-sm flex-shrink-0 overflow-visible rounded-3xl border border-primary/10 bg-card/80 p-8 shadow-md backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 lg:z-40 lg:mr-[99px] lg:h-[28rem] lg:w-[18rem] lg:max-w-[18rem] lg:translate-y-0 lg:rounded-lg lg:border-0 lg:bg-card lg:p-6 lg:backdrop-blur-none lg:hover:shadow-md md:bg-card/80">
                  <div className="pointer-events-none absolute inset-0 z-0 hidden lg:block">
                    <svg
                      className="h-full w-full overflow-visible"
                      viewBox="0 0 288 448"
                    >
                      <defs>
                        <linearGradient
                          id="techGradient"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="100%"
                        >
                          <stop
                            offset="0%"
                            stopColor="hsl(var(--primary))"
                            stopOpacity="1"
                          />
                          <stop
                            offset="100%"
                            stopColor="hsl(var(--forest))"
                            stopOpacity="1"
                          />
                        </linearGradient>
                      </defs>
                      <m.path
                        d="M 0 0 H 288 V 100"
                        fill="none"
                        stroke="url(#techGradient)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                      />
                      <circle
                        cx="288"
                        cy="100"
                        r="3"
                        fill="hsl(var(--primary))"
                      />
                      <m.path
                        d="M 0 0 V 448 H 288 V 348 L 387 100 V 0"
                        fill="none"
                        stroke="url(#techGradient)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 2.5, ease: "easeInOut" }}
                      />
                    </svg>
                  </div>
                  <div className="relative z-10 flex h-full flex-col items-center">
                    {/* Icon */}
                    <div className="relative z-10 flex-shrink-0 rounded-2xl bg-card bg-gradient-to-br from-primary/15 via-primary/10 to-forest/10 p-4 ring-1 ring-primary/20 transition-transform duration-500 group-hover:scale-110 group-hover:shadow-md group-hover:shadow-primary/20">
                      {React.createElement(cards[0].icon, {
                        className:
                          "w-10 h-10 sm:w-11 sm:h-11 text-forest stroke-[1.5]",
                        strokeWidth: 1.5,
                      })}
                    </div>

                    <div className="mt-5 flex min-h-[5.5rem] w-full flex-shrink-0 flex-col justify-center text-center sm:mt-6">
                      <h2
                        className="line-clamp-2 text-xl font-bold uppercase leading-tight tracking-tight text-foreground md:text-2xl"
                        style={{ margin: "0" }}
                      >
                        {cards[0].title}
                      </h2>
                      <p className="mt-2 text-sm font-semibold text-forest">
                        {cards[0].subtitle}
                      </p>
                    </div>

                    <div className="mt-4 flex min-h-[5.5rem] flex-1 items-center justify-center px-1">
                      <p className="line-clamp-3 max-w-sm text-center text-sm font-medium leading-relaxed text-neutral-600">
                        {cards[0].description}
                      </p>
                    </div>

                    <Link
                      href={cards[0].link || "#"}
                      className="mt-4 flex w-full flex-shrink-0 justify-center"
                    >
                      <button className="w-full sm:w-auto rounded-full bg-forest px-6 py-2.5 text-sm font-medium tracking-wide text-forest-foreground shadow-md transition-all duration-300 hover:bg-forest/90 hover:shadow-lg group-hover:-translate-y-0.5 group-hover:shadow-lg">
                        Learn More
                      </button>
                    </Link>
                  </div>
                </div>

                {/* Card 2 (Middle) */}
                <div className="group relative z-10 h-auto w-full max-w-sm flex-shrink-0 overflow-visible rounded-3xl border border-primary/10 bg-card/80 p-8 shadow-md backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 lg:z-30 lg:mr-[99px] lg:h-[28rem] lg:w-[18rem] lg:max-w-[18rem] lg:translate-y-0 lg:rounded-lg lg:border-0 lg:bg-card lg:p-6 lg:backdrop-blur-none lg:hover:shadow-md md:bg-card/80">
                  <div className="pointer-events-none absolute inset-0 z-0 hidden lg:block">
                    <svg
                      className="h-full w-full overflow-visible"
                      viewBox="0 0 288 448"
                    >
                      <m.path
                        d="M 0 0 H 288 V 100"
                        fill="none"
                        stroke="url(#techGradient)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1.5,
                          delay: 1,
                          ease: "easeInOut",
                        }}
                      />
                      <circle
                        cx="288"
                        cy="100"
                        r="3"
                        fill="hsl(var(--primary))"
                      />
                      <m.path
                        d="M 0 348 V 448 H 288 V 348 L 387 100 V 0"
                        fill="none"
                        stroke="url(#techGradient)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 2.5,
                          delay: 0.5,
                          ease: "easeInOut",
                        }}
                      />
                      <circle
                        cx="0"
                        cy="348"
                        r="3"
                        fill="hsl(var(--primary))"
                      />
                    </svg>
                  </div>
                  <div className="relative z-10 flex h-full flex-col items-center">
                    {/* Icon */}
                    <div className="relative z-10 flex-shrink-0 rounded-2xl bg-card bg-gradient-to-br from-primary/15 via-primary/10 to-forest/10 p-4 ring-1 ring-primary/20 transition-transform duration-500 group-hover:scale-110 group-hover:shadow-md group-hover:shadow-primary/20">
                      {React.createElement(cards[1].icon, {
                        className:
                          "w-10 h-10 sm:w-11 sm:h-11 text-forest stroke-[1.5]",
                        strokeWidth: 1.5,
                      })}
                    </div>

                    <div className="mt-5 flex min-h-[5.5rem] w-full flex-shrink-0 flex-col justify-center text-center sm:mt-6">
                      <h2
                        className="line-clamp-2 text-xl font-bold uppercase leading-tight tracking-tight text-foreground md:text-2xl"
                        style={{ margin: "0" }}
                      >
                        {cards[1].title}
                      </h2>
                      <p className="mt-2 text-sm font-semibold text-forest">
                        {cards[1].subtitle}
                      </p>
                    </div>

                    <div className="mt-4 flex min-h-[5.5rem] flex-1 items-center justify-center px-1">
                      <p className="line-clamp-3 max-w-sm text-center text-sm font-medium leading-relaxed text-neutral-600">
                        {cards[1].description}
                      </p>
                    </div>

                    <Link
                      href={cards[1].link || "#"}
                      className="mt-4 flex w-full flex-shrink-0 justify-center"
                    >
                      <button className="w-full sm:w-auto rounded-full bg-forest px-6 py-2.5 text-sm font-medium tracking-wide text-forest-foreground shadow-md transition-all duration-300 hover:bg-forest/90 hover:shadow-lg group-hover:-translate-y-0.5 group-hover:shadow-lg">
                        Learn More
                      </button>
                    </Link>
                  </div>
                </div>

                {/* Card 3 (AI Foundry) - Middle connector */}
                <div className="group relative z-10 h-auto w-full max-w-sm flex-shrink-0 overflow-visible rounded-3xl border border-primary/10 bg-card/80 p-8 shadow-md backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 lg:z-20 lg:mr-[99px] lg:h-[28rem] lg:w-[18rem] lg:max-w-[18rem] lg:translate-y-0 lg:rounded-lg lg:border-0 lg:bg-card lg:p-6 lg:backdrop-blur-none lg:hover:shadow-md md:bg-card/80">
                  <div className="pointer-events-none absolute inset-0 z-0 hidden lg:block">
                    <svg
                      className="h-full w-full overflow-visible"
                      viewBox="0 0 288 448"
                    >
                      <m.path
                        d="M 0 0 H 288 V 100"
                        fill="none"
                        stroke="url(#techGradient)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1.5,
                          delay: 1.5,
                          ease: "easeInOut",
                        }}
                      />
                      <circle
                        cx="288"
                        cy="100"
                        r="3"
                        fill="hsl(var(--primary))"
                      />
                      <m.path
                        d="M 0 348 V 448 H 288 V 348 L 387 100 V 0"
                        fill="none"
                        stroke="url(#techGradient)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 2.5,
                          delay: 1,
                          ease: "easeInOut",
                        }}
                      />
                      <circle
                        cx="0"
                        cy="348"
                        r="3"
                        fill="hsl(var(--primary))"
                      />
                    </svg>
                  </div>
                  <div className="relative z-10 flex h-full flex-col items-center">
                    {/* Icon */}
                    <div className="relative z-10 flex-shrink-0 rounded-2xl bg-card bg-gradient-to-br from-primary/15 via-primary/10 to-forest/10 p-4 ring-1 ring-primary/20 transition-transform duration-500 group-hover:scale-110 group-hover:shadow-md group-hover:shadow-primary/20">
                      {React.createElement(cards[2].icon, {
                        className:
                          "w-10 h-10 sm:w-11 sm:h-11 text-forest stroke-[1.5]",
                        strokeWidth: 1.5,
                      })}
                    </div>

                    <div className="mt-5 flex min-h-[5.5rem] w-full flex-shrink-0 flex-col justify-center text-center sm:mt-6">
                      <h2
                        className="line-clamp-2 text-xl font-bold uppercase leading-tight tracking-tight text-foreground md:text-2xl"
                        style={{ margin: "0" }}
                      >
                        {cards[2].title}
                      </h2>
                      <p className="mt-2 text-sm font-semibold text-forest">
                        {cards[2].subtitle}
                      </p>
                    </div>

                    <div className="mt-4 flex min-h-[5.5rem] flex-1 items-center justify-center px-1">
                      <p className="line-clamp-3 max-w-sm text-center text-sm font-medium leading-relaxed text-neutral-600">
                        {cards[2].description}
                      </p>
                    </div>

                    <Link
                      href={cards[2].link || "#"}
                      className="mt-4 flex w-full flex-shrink-0 justify-center"
                    >
                      <button className="w-full sm:w-auto rounded-full bg-forest px-6 py-2.5 text-sm font-medium tracking-wide text-forest-foreground shadow-md transition-all duration-300 hover:bg-forest/90 hover:shadow-lg group-hover:-translate-y-0.5 group-hover:shadow-lg">
                        Learn More
                      </button>
                    </Link>
                  </div>
                </div>

                {/* Card 4 (Copilot) - Closing card */}
                <div className="group relative z-10 h-auto w-full max-w-sm flex-shrink-0 overflow-visible rounded-3xl border border-primary/10 bg-card/80 p-8 shadow-md backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 lg:h-[28rem] lg:w-[18rem] lg:max-w-[18rem] lg:translate-y-0 lg:rounded-lg lg:border-0 lg:bg-card lg:p-6 lg:backdrop-blur-none lg:hover:shadow-md md:bg-card/80">
                  <div className="pointer-events-none absolute inset-0 z-0 hidden lg:block">
                    <svg
                      className="h-full w-full overflow-visible"
                      viewBox="0 0 288 448"
                    >
                      <m.path
                        d="M 0 0 H 288 V 448 H 0 V 348"
                        fill="none"
                        stroke="url(#techGradient)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 3,
                          delay: 2,
                          ease: "easeInOut",
                        }}
                      />
                      <circle
                        cx="0"
                        cy="348"
                        r="3"
                        fill="hsl(var(--primary))"
                      />
                    </svg>
                  </div>
                  <div className="relative z-10 flex h-full flex-col items-center">
                    {/* Icon */}
                    <div className="relative z-10 flex-shrink-0 rounded-2xl bg-card bg-gradient-to-br from-primary/15 via-primary/10 to-forest/10 p-4 ring-1 ring-primary/20 transition-transform duration-500 group-hover:scale-110 group-hover:shadow-md group-hover:shadow-primary/20">
                      {React.createElement(cards[3].icon, {
                        className:
                          "w-10 h-10 sm:w-11 sm:h-11 text-forest stroke-[1.5]",
                        strokeWidth: 1.5,
                      })}
                    </div>

                    <div className="mt-5 flex min-h-[5.5rem] w-full flex-shrink-0 flex-col justify-center text-center sm:mt-6">
                      <h2
                        className="line-clamp-2 text-xl font-bold uppercase leading-tight tracking-tight text-foreground md:text-2xl"
                        style={{ margin: "0" }}
                      >
                        {cards[3].title}
                      </h2>
                      <p className="mt-2 text-sm font-semibold text-forest">
                        {cards[3].subtitle}
                      </p>
                    </div>

                    <div className="mt-4 flex min-h-[5.5rem] flex-1 items-center justify-center px-1">
                      <p className="line-clamp-3 max-w-sm text-center text-sm font-medium leading-relaxed text-neutral-600">
                        {cards[3].description}
                      </p>
                    </div>

                    <Link
                      href={cards[3].link || "#"}
                      className="mt-4 flex w-full flex-shrink-0 justify-center"
                    >
                      <button className="w-full sm:w-auto rounded-full bg-forest px-6 py-2.5 text-sm font-medium tracking-wide text-forest-foreground shadow-md transition-all duration-300 hover:bg-forest/90 hover:shadow-lg group-hover:-translate-y-0.5 group-hover:shadow-lg">
                        Learn More
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}

export default ServicesSection;
