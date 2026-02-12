"use client";

import { motion } from "framer-motion";
import { Cpu, Database, TrendingUp } from "lucide-react";
import Link from "next/link";
import React from "react";

const cards = [
  {
    title: "FABRIC-READY FOUNDATION",
    subtitle: "Azure + Fabric + Purview",
    description:
      "We deploy your modern data platform — or fix what's broken.",
    link: "/services/data-engineering",
    icon: Database,
    textGradient: "from-forest via-primary to-leaf",
  },
  {
    title: "DECISION INTELLIGENCE ENGINE",
    subtitle: "Power BI + Semantic Models",
    description:
      "We build dashboards your leadership actually trusts.",
    link: "/services/analytics",
    icon: TrendingUp,
    textGradient: "from-leaf to-primary",
  },
  {
    title: "PRODUCTION-GRADE AI FOUNDRY",
    subtitle: "AI Foundry + Copilot",
    description:
      "We architect AI on governed data so pilots actually ship.",
    link: "/services/ai-automation",
    icon: Cpu,
    textGradient: "from-primary to-leaf",
  },
];

export function ServicesSection() {
  return (
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
            <div className="flex flex-col lg:flex-row justify-center items-center mx-auto rounded-2xl p-6 md:p-8 gap-8 lg:gap-0 flex-nowrap">

              {/* Card 1 (Left) */}
              <div className="relative z-40 w-full max-w-[18rem] lg:w-[18rem] h-[28rem] rounded-lg lg:mr-[99px] p-6 bg-card/50 backdrop-blur-sm border-0 shadow-sm transition-all duration-300 hover:shadow-md group overflow-visible flex-shrink-0">
                <div className="absolute inset-0 pointer-events-none z-0">
                  <svg className="w-full h-full overflow-visible" viewBox="0 0 288 448">
                    <defs>
                      <linearGradient id="techGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="1" />
                        <stop offset="100%" stopColor="hsl(var(--forest))" stopOpacity="1" />
                      </linearGradient>
                    </defs>
                    <motion.path
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
                    <motion.path
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
                <div className="flex flex-col items-center space-y-6 h-full justify-center relative z-10">
                  {/* Icon */}
                  <div className="p-3 bg-primary/10 rounded-xl">
                    {React.createElement(cards[0].icon, { className: `w-8 h-8 bg-gradient-to-br ${cards[0].textGradient} bg-clip-text text-primary` })}
                  </div>

                  <div className="text-center">
                    <h2 className="text-xl md:text-2xl font-bold text-foreground tracking-tight uppercase" style={{ margin: "0" }}>
                      {cards[0].title}
                    </h2>
                    <p className="text-sm font-semibold text-primary mt-2">
                      {cards[0].subtitle}
                    </p>
                  </div>

                  <p className="max-w-sm text-center leading-relaxed text-muted-foreground text-sm">{cards[0].description}</p>
                  <Link href={cards[0].link || "#"}>
                    <button className="mt-2 text-forest-foreground bg-forest hover:bg-forest/90 transition-colors duration-300 px-6 py-2.5 rounded-full shadow-lg hover:shadow-xl font-medium text-sm tracking-wide">
                      Learn More
                    </button>
                  </Link>
                </div>
              </div>

              {/* Card 2 (Middle) */}
              <div className="relative z-30 w-full max-w-[18rem] lg:w-[18rem] h-[28rem] rounded-lg lg:mr-[99px] p-6 bg-card/50 backdrop-blur-sm border-0 shadow-sm transition-all duration-300 hover:shadow-md overflow-visible flex-shrink-0">
                <div className="absolute inset-0 pointer-events-none z-0">
                  <svg className="w-full h-full overflow-visible" viewBox="0 0 288 448">
                    <motion.path
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
                    <motion.path
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
                <div className="flex flex-col items-center space-y-6 h-full justify-center relative z-10">
                  {/* Icon */}
                  <div className="p-3 bg-primary/10 rounded-xl">
                    {React.createElement(cards[1].icon, { className: `w-8 h-8 bg-gradient-to-br ${cards[1].textGradient} bg-clip-text text-primary` })}
                  </div>

                  <div className="text-center">
                    <h2 className="text-xl md:text-2xl font-bold text-foreground tracking-tight uppercase" style={{ margin: "0" }}>
                      {cards[1].title}
                    </h2>
                    <p className="text-sm font-semibold text-primary mt-2">
                      {cards[1].subtitle}
                    </p>
                  </div>
                  <p className="max-w-sm text-center leading-relaxed text-muted-foreground text-sm">{cards[1].description}</p>
                  <Link href={cards[1].link || "#"}>
                    <button className="mt-2 text-forest-foreground bg-forest hover:bg-forest/90 transition-colors duration-300 px-6 py-2.5 rounded-full shadow-lg hover:shadow-xl font-medium text-sm tracking-wide">
                      Learn More
                    </button>
                  </Link>
                </div>
              </div>


              {/* Card 3 (Right) - Using the "Closing" SVG style */}
              <div className="relative z-10 w-full max-w-[18rem] lg:w-[18rem] h-[28rem] rounded-lg p-6 bg-card/50 backdrop-blur-sm border-0 shadow-sm transition-all duration-300 hover:shadow-md overflow-visible flex-shrink-0">
                <div className="absolute inset-0 pointer-events-none z-0">
                  <svg className="w-full h-full overflow-visible" viewBox="0 0 288 448">
                    <motion.path
                      d="M 0 0 H 288 V 448 H 0 V 348"
                      fill="none"
                      stroke="url(#techGradient)"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 3, delay: 1.5, ease: "easeInOut" }}
                    />
                    <circle cx="0" cy="348" r="3" fill="hsl(var(--primary))" />
                  </svg>
                </div>
                <div className="flex flex-col items-center space-y-6 h-full justify-center relative z-10">
                  {/* Icon */}
                  <div className="p-3 bg-primary/10 rounded-xl">
                    {React.createElement(cards[2].icon, { className: `w-8 h-8 bg-gradient-to-br ${cards[2].textGradient} bg-clip-text text-primary` })}
                  </div>

                  <div className="text-center">
                    <h2 className="text-xl md:text-2xl font-bold text-foreground tracking-tight uppercase" style={{ margin: "0" }}>
                      {cards[2].title}
                    </h2>
                    <p className="text-sm font-semibold text-primary mt-2">
                      {cards[2].subtitle}
                    </p>
                  </div>
                  <p className="max-w-sm text-center leading-relaxed text-muted-foreground text-sm">{cards[2].description}</p>
                  <Link href={cards[2].link || "#"}>
                    <button className="mt-2 text-forest-foreground bg-forest hover:bg-forest/90 transition-colors duration-300 px-6 py-2.5 rounded-full shadow-lg hover:shadow-xl font-medium text-sm tracking-wide">
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
  );
}

export default ServicesSection;
