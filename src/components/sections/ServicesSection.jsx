"use client";

import { domAnimation, LazyMotion, m } from "framer-motion";
import { Bot, Cpu, Database, TrendingUp } from "lucide-react";
import Link from "next/link";
import React from "react";

const cards = [
  {
    title: "FABRIC-READY FOUNDATION",
    subtitle: "Azure + Fabric + Purview",
    description:
      "We deploy your modern data platform — or fix what's broken.",
    link: "/microsoft/fabric",
    icon: Database,
    textGradient: "from-forest via-primary to-leaf",
  },
  {
    title: "DECISION INTELLIGENCE ENGINE",
    subtitle: "Power BI + Semantic Models",
    description:
      "We build dashboards your leadership actually trusts.",
    link: "/microsoft/power-bi",
    icon: TrendingUp,
    textGradient: "from-leaf to-primary",
  },
  {
    title: "PRODUCTION-GRADE AI FOUNDRY",
    subtitle: "Azure AI Foundry",
    description:
      "We architect AI on governed data so pilots actually ship.",
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
      <section className="bg-background section-padding relative overflow-hidden">
        {/* Background Decor */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-30">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-forest/10 blur-[120px] rounded-full" />
        </div>

        <div className="container mx-auto container-padding relative z-10">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12 space-y-4">
            <h2 className="heading-section">
              Our <span className="text-foreground">Services</span>
            </h2>
          </div>

          {/*
          Content Row
          Scaled down on LG and XL screens to fit the wide layout
          while preserving the pixel-perfect SVG connections.
        */}
          <div className="w-full flex justify-center">
            <div className="relative transform transition-transform duration-300 lg:scale-[0.80] xl:scale-[0.90] 2xl:scale-100 lg:origin-top">
              <div className="flex flex-col lg:flex-row justify-center items-stretch mx-auto rounded-2xl p-6 md:p-8 gap-6 md:gap-8 lg:gap-0 flex-nowrap">

                {/* Card 1 (Left) */}
                <div className="relative z-40 w-full max-w-sm lg:max-w-[18rem] lg:w-[18rem] h-[28rem] rounded-lg lg:mr-[99px] p-6 bg-card md:bg-card/80 border-0 shadow-sm transition-all duration-300 hover:shadow-md group overflow-visible flex-shrink-0">
                  <div className="absolute inset-0 pointer-events-none z-0 hidden lg:block">
                    <svg className="w-full h-full overflow-visible" viewBox="0 0 288 448">
                      <defs>
                        <linearGradient id="techGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="1" />
                          <stop offset="100%" stopColor="hsl(var(--forest))" stopOpacity="1" />
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
                      <circle cx="288" cy="100" r="3" fill="hsl(var(--primary))" />
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
                  <div className="flex flex-col items-center h-full relative z-10">
                    {/* Icon */}
                    <div className="flex-shrink-0 p-4 bg-gradient-to-br from-primary/15 via-primary/10 to-forest/10 rounded-2xl ring-1 ring-primary/20">
                      {React.createElement(cards[0].icon, {
                        className: "w-10 h-10 sm:w-11 sm:h-11 text-forest stroke-[1.5]",
                        strokeWidth: 1.5,
                      })}
                    </div>

                    <div className="flex-shrink-0 text-center mt-5 sm:mt-6 w-full min-h-[5.5rem] flex flex-col justify-center">
                      <h2 className="text-xl md:text-2xl font-bold text-foreground tracking-tight uppercase line-clamp-2 leading-tight" style={{ margin: "0" }}>
                        {cards[0].title}
                      </h2>
                      <p className="text-sm font-semibold text-forest mt-2">
                        {cards[0].subtitle}
                      </p>
                    </div>

                    <div className="flex-1 min-h-[5.5rem] flex items-center justify-center mt-4 px-1">
                      <p className="max-w-sm text-center leading-relaxed text-neutral-600 font-medium text-sm line-clamp-3">{cards[0].description}</p>
                    </div>

                    <Link href={cards[0].link || "#"} className="flex-shrink-0 mt-4 w-full flex justify-center">
                      <button className="text-forest-foreground bg-forest hover:bg-forest/90 transition-colors duration-300 px-6 py-2.5 rounded-full shadow-md hover:shadow-lg font-medium text-sm tracking-wide">
                        Learn More
                      </button>
                    </Link>
                  </div>
                </div>

                {/* Card 2 (Middle) */}
                <div className="relative z-30 w-full max-w-sm lg:max-w-[18rem] lg:w-[18rem] h-[28rem] rounded-lg lg:mr-[99px] p-6 bg-card md:bg-card/80 border-0 shadow-sm transition-all duration-300 hover:shadow-md overflow-visible flex-shrink-0">
                  <div className="absolute inset-0 pointer-events-none z-0 hidden lg:block">
                    <svg className="w-full h-full overflow-visible" viewBox="0 0 288 448">
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
                        transition={{ duration: 1.5, delay: 1, ease: "easeInOut" }}
                      />
                      <circle cx="288" cy="100" r="3" fill="hsl(var(--primary))" />
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
                        transition={{ duration: 2.5, delay: 0.5, ease: "easeInOut" }}
                      />
                      <circle cx="0" cy="348" r="3" fill="hsl(var(--primary))" />
                    </svg>
                  </div>
                  <div className="flex flex-col items-center h-full relative z-10">
                    {/* Icon */}
                    <div className="flex-shrink-0 p-4 bg-gradient-to-br from-primary/15 via-primary/10 to-forest/10 rounded-2xl ring-1 ring-primary/20">
                      {React.createElement(cards[1].icon, {
                        className: "w-10 h-10 sm:w-11 sm:h-11 text-forest stroke-[1.5]",
                        strokeWidth: 1.5,
                      })}
                    </div>

                    <div className="flex-shrink-0 text-center mt-5 sm:mt-6 w-full min-h-[5.5rem] flex flex-col justify-center">
                      <h2 className="text-xl md:text-2xl font-bold text-foreground tracking-tight uppercase line-clamp-2 leading-tight" style={{ margin: "0" }}>
                        {cards[1].title}
                      </h2>
                      <p className="text-sm font-semibold text-forest mt-2">
                        {cards[1].subtitle}
                      </p>
                    </div>

                    <div className="flex-1 min-h-[5.5rem] flex items-center justify-center mt-4 px-1">
                      <p className="max-w-sm text-center leading-relaxed text-neutral-600 font-medium text-sm line-clamp-3">{cards[1].description}</p>
                    </div>

                    <Link href={cards[1].link || "#"} className="flex-shrink-0 mt-4 w-full flex justify-center">
                      <button className="text-forest-foreground bg-forest hover:bg-forest/90 transition-colors duration-300 px-6 py-2.5 rounded-full shadow-md hover:shadow-lg font-medium text-sm tracking-wide">
                        Learn More
                      </button>
                    </Link>
                  </div>
                </div>


                {/* Card 3 (AI Foundry) - Middle connector */}
                <div className="relative z-20 w-full max-w-sm lg:max-w-[18rem] lg:w-[18rem] h-[28rem] rounded-lg lg:mr-[99px] p-6 bg-card md:bg-card/80 border-0 shadow-sm transition-all duration-300 hover:shadow-md overflow-visible flex-shrink-0">
                  <div className="absolute inset-0 pointer-events-none z-0 hidden lg:block">
                    <svg className="w-full h-full overflow-visible" viewBox="0 0 288 448">
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
                        transition={{ duration: 1.5, delay: 1.5, ease: "easeInOut" }}
                      />
                      <circle cx="288" cy="100" r="3" fill="hsl(var(--primary))" />
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
                        transition={{ duration: 2.5, delay: 1, ease: "easeInOut" }}
                      />
                      <circle cx="0" cy="348" r="3" fill="hsl(var(--primary))" />
                    </svg>
                  </div>
                  <div className="flex flex-col items-center h-full relative z-10">
                    {/* Icon */}
                    <div className="flex-shrink-0 p-4 bg-gradient-to-br from-primary/15 via-primary/10 to-forest/10 rounded-2xl ring-1 ring-primary/20">
                      {React.createElement(cards[2].icon, {
                        className: "w-10 h-10 sm:w-11 sm:h-11 text-forest stroke-[1.5]",
                        strokeWidth: 1.5,
                      })}
                    </div>

                    <div className="flex-shrink-0 text-center mt-5 sm:mt-6 w-full min-h-[5.5rem] flex flex-col justify-center">
                      <h2 className="text-xl md:text-2xl font-bold text-foreground tracking-tight uppercase line-clamp-2 leading-tight" style={{ margin: "0" }}>
                        {cards[2].title}
                      </h2>
                      <p className="text-sm font-semibold text-forest mt-2">
                        {cards[2].subtitle}
                      </p>
                    </div>

                    <div className="flex-1 min-h-[5.5rem] flex items-center justify-center mt-4 px-1">
                      <p className="max-w-sm text-center leading-relaxed text-neutral-600 font-medium text-sm line-clamp-3">{cards[2].description}</p>
                    </div>

                    <Link href={cards[2].link || "#"} className="flex-shrink-0 mt-4 w-full flex justify-center">
                      <button className="text-forest-foreground bg-forest hover:bg-forest/90 transition-colors duration-300 px-6 py-2.5 rounded-full shadow-md hover:shadow-lg font-medium text-sm tracking-wide">
                        Learn More
                      </button>
                    </Link>
                  </div>
                </div>

                {/* Card 4 (Copilot) - Closing card */}
                <div className="relative z-10 w-full max-w-sm lg:max-w-[18rem] lg:w-[18rem] h-[28rem] rounded-lg p-6 bg-card md:bg-card/80 border-0 shadow-sm transition-all duration-300 hover:shadow-md overflow-visible flex-shrink-0">
                  <div className="absolute inset-0 pointer-events-none z-0 hidden lg:block">
                    <svg className="w-full h-full overflow-visible" viewBox="0 0 288 448">
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
                        transition={{ duration: 3, delay: 2, ease: "easeInOut" }}
                      />
                      <circle cx="0" cy="348" r="3" fill="hsl(var(--primary))" />
                    </svg>
                  </div>
                  <div className="flex flex-col items-center h-full relative z-10">
                    {/* Icon */}
                    <div className="flex-shrink-0 p-4 bg-gradient-to-br from-primary/15 via-primary/10 to-forest/10 rounded-2xl ring-1 ring-primary/20">
                      {React.createElement(cards[3].icon, {
                        className: "w-10 h-10 sm:w-11 sm:h-11 text-forest stroke-[1.5]",
                        strokeWidth: 1.5,
                      })}
                    </div>

                    <div className="flex-shrink-0 text-center mt-5 sm:mt-6 w-full min-h-[5.5rem] flex flex-col justify-center">
                      <h2 className="text-xl md:text-2xl font-bold text-foreground tracking-tight uppercase line-clamp-2 leading-tight" style={{ margin: "0" }}>
                        {cards[3].title}
                      </h2>
                      <p className="text-sm font-semibold text-forest mt-2">
                        {cards[3].subtitle}
                      </p>
                    </div>

                    <div className="flex-1 min-h-[5.5rem] flex items-center justify-center mt-4 px-1">
                      <p className="max-w-sm text-center leading-relaxed text-neutral-600 font-medium text-sm line-clamp-3">{cards[3].description}</p>
                    </div>

                    <Link href={cards[3].link || "#"} className="flex-shrink-0 mt-4 w-full flex justify-center">
                      <button className="text-forest-foreground bg-forest hover:bg-forest/90 transition-colors duration-300 px-6 py-2.5 rounded-full shadow-md hover:shadow-lg font-medium text-sm tracking-wide">
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
