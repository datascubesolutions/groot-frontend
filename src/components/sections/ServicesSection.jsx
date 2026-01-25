"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const cards = [
  {
    title: "Microsoft Azure",
    description:
      "The Backbone of Resilience. Enterprise-grade security and infinite scalability.",
    link: "/technologies",
  },
  {
    title: "Microsoft Fabric",
    description:
      "Shattering Data Silos. One unified estate for real-time truth.",
    link: "/services/data-engineering",
  },
  {
    title: "Azure Databricks",
    description:
      "Processing at the Speed of Thought. Engineering raw complexity into clarity.",
    link: "/services/data-engineering",
  },
  {
    title: "Microsoft AI Foundry",
    description:
      "Agentic Innovation. Deploying intelligent workflows that predict and adapt.",
    link: "/services/ai-automation",
  },
];

export function ServicesSection() {
  return (
    <section className="bg-background py-20 md:py-24 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-forest/10 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted border border-border/50">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Tech Stack
            </span>
          </div>
          <h2 className="heading-section">
            Built on a <span className="bg-gradient-to-tr from-[hsl(var(--burgundy))] via-[hsl(var(--forest))] to-[hsl(var(--primary))] bg-clip-text text-transparent font-extrabold drop-shadow-sm">Foundation</span> of Excellence
          </h2>
          <p className="body-large">
            We leverage the industry's most robust platforms to ensure your data is secure, scalable, and future-proof.
          </p>
        </div>

        {/*
          Content Row
          Scaled down on LG and XL screens to fit the wide 4-card layout (approx 1500px)
          while preserving the pixel-perfect SVG connections.
        */}
        <div className="w-full flex justify-center">
          <div className="relative transform transition-transform duration-300 lg:scale-[0.65] xl:scale-[0.80] 2xl:scale-100 lg:origin-top">
            <div className="flex flex-col lg:flex-row justify-center items-center mx-auto rounded-2xl p-4 lg:gap-0 gap-8 flex-nowrap">

              {/* Card 1 (Left) */}
              <div className="relative z-40 w-full max-w-[18rem] lg:w-[18rem] h-[28rem] rounded-lg lg:mr-[99px] p-5 bg-card/50 backdrop-blur-sm border-0 shadow-sm transition-all duration-300 hover:shadow-md group overflow-visible flex-shrink-0">
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
                  <div className="text-primary p-3 bg-primary/10 rounded-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-foreground text-center tracking-tight" style={{ margin: "10px 0px 0px" }}>
                    {cards[0].title.split(" & ").map((part, i, arr) => (
                      <React.Fragment key={i}>{part} {i < arr.length - 1 && "&"}{i < arr.length - 1 && <br />}</React.Fragment>
                    ))}
                  </h2>
                  <p className="max-w-sm text-center leading-relaxed text-muted-foreground">{cards[0].description}</p>
                  <Link href={cards[0].link || "#"}>
                    <button className="mt-2 text-white bg-forest hover:bg-forest/90 transition-colors duration-300 px-6 py-2.5 rounded-full shadow-lg hover:shadow-xl font-medium text-sm tracking-wide">
                      Explore Solution
                    </button>
                  </Link>
                </div>
              </div>

              {/* Card 2 (Middle 1) */}
              <div className="relative z-30 w-full max-w-[18rem] lg:w-[18rem] h-[28rem] rounded-lg lg:mr-[99px] p-5 bg-card/50 backdrop-blur-sm border-0 shadow-sm transition-all duration-300 hover:shadow-md overflow-visible flex-shrink-0">
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
                  <div className="text-primary p-3 bg-primary/10 rounded-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-foreground text-center tracking-tight" style={{ margin: "10px 0px 0px" }}>
                    {cards[1].title}
                  </h2>
                  <p className="max-w-sm text-center leading-relaxed text-muted-foreground">{cards[1].description}</p>
                  <Link href={cards[1].link || "#"}>
                    <button className="mt-2 text-white bg-forest hover:bg-forest/90 transition-colors duration-300 px-6 py-2.5 rounded-full shadow-lg hover:shadow-xl font-medium text-sm tracking-wide">
                      Explore Solution
                    </button>
                  </Link>
                </div>
              </div>

              {/* Card 3 (Middle 2) */}
              <div className="relative z-20 w-full max-w-[18rem] lg:w-[18rem] h-[28rem] rounded-lg lg:mr-[99px] p-5 bg-card/50 backdrop-blur-sm border-0 shadow-sm transition-all duration-300 hover:shadow-md overflow-visible flex-shrink-0">
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
                  <div className="text-primary p-3 bg-primary/10 rounded-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-foreground text-center tracking-tight" style={{ margin: "10px 0px 0px" }}>
                    {cards[2].title}
                  </h2>
                  <p className="max-w-sm text-center leading-relaxed text-muted-foreground">{cards[2].description}</p>
                  <Link href={cards[2].link || "#"}>
                    <button className="mt-2 text-white bg-forest hover:bg-forest/90 transition-colors duration-300 px-6 py-2.5 rounded-full shadow-lg hover:shadow-xl font-medium text-sm tracking-wide">
                      Explore Solution
                    </button>
                  </Link>
                </div>
              </div>

              {/* Card 4 (Right) */}
              <div className="relative z-10 w-full max-w-[18rem] lg:w-[18rem] h-[28rem] rounded-lg p-5 bg-card/50 backdrop-blur-sm border-0 shadow-sm transition-all duration-300 hover:shadow-md overflow-visible flex-shrink-0">
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
                  <div className="text-primary p-3 bg-primary/10 rounded-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-foreground text-center tracking-tight" style={{ margin: "10px 0px 0px" }}>
                    {cards[3].title}
                  </h2>
                  <p className="max-w-sm text-center leading-relaxed text-muted-foreground">{cards[3].description}</p>
                  <Link href={cards[3].link || "#"}>
                    <button className="mt-2 text-white bg-forest hover:bg-forest/90 transition-colors duration-300 px-6 py-2.5 rounded-full shadow-lg hover:shadow-xl font-medium text-sm tracking-wide">
                      Explore Solution
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
