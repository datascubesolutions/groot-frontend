"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const cards = [
  // First Row
  {
    title: "Microsoft Azure",
    description:
      "Comprehensive cloud infrastructure and services. From computing and networking to security and hybrid cloud management with Azure Arc.",
    link: "/technologies",
  },
  {
    title: "Microsoft Fabric",
    description:
      "Unified analytics platform that brings together data engineering, data science, real-time analytics, and business intelligence.",
    link: "/services/data-engineering",
  },
  {
    title: "Azure Databricks",
    description:
      "The world's first open and unified data intelligence platform. specific optimizations for storage, processing, and AI on Azure.",
    link: "/services/data-engineering",
  },
  // Second Row
  {
    title: "Microsoft AI Foundry",
    description:
      "Developing next-generation AI applications. Build, evaluate, and deploy generative AI models with ease and responsibility.",
    link: "/services/ai-automation",
  },
  {
    title: "Azure DevOps",
    description:
      "Plan smarter, collaborate better, and ship faster with a set of modern dev services. CI/CD, Boards, Repos, and Artifacts.",
    link: "/technologies",
  },
  {
    title: "Azure Governance",
    description:
      "Control and manage your cloud environment with policy-based management. Microsoft Purview for unified data governance.",
    link: "/services/strategy-advisory",
  },
];

export function ServicesSection() {
  const renderRow = (rowCards, rowIndex) => (
    <div className={`flex flex-col lg:flex-row justify-center items-center mx-auto rounded-2xl p-4 gap-8 lg:gap-0 ${rowIndex === 1 ? "-mt-8 lg:-mt-0" : ""}`}>
      {/* Card 1 (Left) */}
      <div className="relative z-30 w-full max-w-[18rem] lg:w-[18rem] h-[28rem] rounded-lg lg:mr-[99px] p-5 bg-card/50 backdrop-blur-sm border-0 shadow-sm transition-all duration-300 hover:shadow-md group overflow-visible">
        <div className="absolute inset-0 pointer-events-none z-0">
          <svg className="w-full h-full overflow-visible" viewBox="0 0 288 448">
            <defs>
              <linearGradient id="techGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="1" />
                <stop offset="100%" stopColor="hsl(var(--forest))" stopOpacity="1" />
              </linearGradient>
            </defs>
            {/* Top Part: Top-Left -> Top-Right -> Down Stub */}
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
            {/* Dot at Top Break */}
            <circle cx="288" cy="100" r="3" fill="hsl(var(--primary))" />

            {/* Bottom Part: Top-Left -> Down -> Right -> Up Stub -> Diagonal to Next Card */}
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <h2
            className="text-2xl font-bold text-foreground text-center tracking-tight"
            style={{ margin: "10px 0px 0px" }}
          >
            {rowCards[0]?.title && rowCards[0].title.split(" & ").map((part, i, arr) => (
              <React.Fragment key={i}>
                {part} {i < arr.length - 1 && "&"}
                {i < arr.length - 1 && <br />}
              </React.Fragment>
            ))}
          </h2>
          <p className="max-w-sm text-center leading-relaxed text-muted-foreground">
            {rowCards[0]?.description}
          </p>
          <Link href={rowCards[0]?.link || "#"}>
            <button className="mt-2 text-white bg-forest hover:bg-forest/90 transition-colors duration-300 px-6 py-2.5 rounded-full shadow-lg hover:shadow-xl font-medium text-sm tracking-wide">
              Explore Solution
            </button>
          </Link>
        </div>
      </div>

      {/* Card 2 (Middle) */}
      <div className="relative z-20 w-full max-w-[18rem] lg:w-[18rem] h-[28rem] rounded-lg lg:mr-[99px] p-5 bg-card/50 backdrop-blur-sm border-0 shadow-sm transition-all duration-300 hover:shadow-md overflow-visible">
        <div className="absolute inset-0 pointer-events-none z-0">
          <svg className="w-full h-full overflow-visible" viewBox="0 0 288 448">
            {/* Top Part: Incoming Diag -> Up Stub -> Top -> Down Stub */}
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
            {/* Dot at Top Break */}
            <circle cx="288" cy="100" r="3" fill="hsl(var(--primary))" />

            {/* Bottom Part: Dot -> Down Stub -> Right -> Up Stub -> Diag to Next */}
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
            {/* Dot at Bottom Break */}
            <circle cx="0" cy="348" r="3" fill="hsl(var(--primary))" />
          </svg>
        </div>

        <div className="flex flex-col items-center space-y-6 h-full justify-center relative z-10">
          <div className="text-primary p-3 bg-primary/10 rounded-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              ></path>
            </svg>
          </div>
          <h2
            className="text-2xl font-bold text-foreground text-center tracking-tight"
            style={{ margin: "10px 0px 0px" }}
          >
            {rowCards[1]?.title && rowCards[1].title.split(" & ").map((part, i, arr) => (
              <React.Fragment key={i}>
                {part} {i < arr.length - 1 && "&"}
                {i < arr.length - 1 && <br />}
              </React.Fragment>
            ))}
          </h2>
          <p className="max-w-sm text-center leading-relaxed text-muted-foreground">
            {rowCards[1]?.description}
          </p>
          <Link href={rowCards[1]?.link || "#"}>
            <button className="mt-2 text-white bg-forest hover:bg-forest/90 transition-colors duration-300 px-6 py-2.5 rounded-full shadow-lg hover:shadow-xl font-medium text-sm tracking-wide">
              Explore Solution
            </button>
          </Link>
        </div>
      </div>

      {/* Card 3 (Right) */}
      <div className="relative z-10 w-full max-w-[18rem] lg:w-[18rem] h-[28rem] rounded-lg p-5 bg-card/50 backdrop-blur-sm border-0 shadow-sm transition-all duration-300 hover:shadow-md overflow-visible">
        <div className="absolute inset-0 pointer-events-none z-0">
          <svg className="w-full h-full overflow-visible" viewBox="0 0 288 448">
            {/* Full Enclosure from Input Diag */}
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
            {/* Dot at Bottom Break */}
            <circle cx="0" cy="348" r="3" fill="hsl(var(--primary))" />
          </svg>
        </div>

        <div className="flex flex-col items-center space-y-6 h-full justify-center relative z-10">
          <div className="text-primary p-3 bg-primary/10 rounded-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </div>
          <h2
            className="text-2xl font-bold text-foreground text-center tracking-tight"
            style={{ margin: "10px 0px 0px" }}
          >
            {rowCards[2]?.title && rowCards[2].title.split(" & ").map((part, i, arr) => (
              <React.Fragment key={i}>
                {part} {i < arr.length - 1 && "&"}
                {i < arr.length - 1 && <br />}
              </React.Fragment>
            ))}
          </h2>
          <p className="max-w-sm text-center leading-relaxed text-muted-foreground">
            {rowCards[2]?.description}
          </p>
          <Link href={rowCards[2]?.link || "#"}>
            <button className="mt-2 text-white bg-forest hover:bg-forest/90 transition-colors duration-300 px-6 py-2.5 rounded-full shadow-lg hover:shadow-xl font-medium text-sm tracking-wide">
              Explore Solution
            </button>
          </Link>
        </div>
      </div>
    </div>
  );


  return (
    <section className="bg-background py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted border border-border/50">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Tech Stack
            </span>
          </div>
          <h2 className="heading-section">
            Integrated <span className="bg-gradient-to-tr from-[hsl(var(--burgundy))] via-[hsl(var(--forest))] to-[hsl(var(--primary))] bg-clip-text text-transparent font-extrabold drop-shadow-sm">Technology</span> Ecosystem
          </h2>
          <p className="body-large">
            Leveraging best-in-class platforms and tools to build scalable, high-performance data solutions.
          </p>
        </div>

        {/* Content Rows */}
        <div className="flex flex-col gap-12 lg:gap-16">
          {renderRow(cards.slice(0, 3), 0)}
          {renderRow(cards.slice(3, 6), 1)}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
