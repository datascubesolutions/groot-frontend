// @ts-nocheck
"use client";

import {
  ArrowRight,
  ExternalLink,
  GraduationCap,
  Play,
  Users,
} from "lucide-react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Suspense, useEffect, useState } from "react"; // Added useState, useEffect, Suspense

// Lazy load Lottie component
const ClientLottie = dynamic(() => import("@/components/ui/ClientLottie"), {
  ssr: false,
});

const CultureSection = () => {
  const [assistantBotAnimation, setAssistantBotAnimation] = useState(null);

  useEffect(() => {
    fetch("/lottie/json/Assistant-Bot.json")
      .then((res) => res.json())
      .then((data) => setAssistantBotAnimation(data))
      .catch((err) => console.error("Failed to load animation:", err));
  }, []);

  return (
    <section className="relative overflow-hidden bg-mint/40 py-20 md:py-24">
      {/* Decorative Grid Pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute left-20 top-20 h-64 w-64 rounded-full border border-primary/20" />
        <div className="absolute left-32 top-32 h-40 w-40 rounded-full border border-primary/20" />
        <div className="absolute bottom-20 right-20 h-80 w-80 rounded-full border border-forest/10" />
      </div>

      <div className="container relative z-10 mx-auto px-6 lg:px-12">
        {/* Header Row */}
        <div className="mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="section-label mb-4 block">Careers & Culture</span>
            <h2 className="heading-section">
              Grow{" "}
              <span className="bg-gradient-to-r from-[hsl(168,76%,40%)] to-[hsl(142,71%,38%)] bg-clip-text text-transparent">
                With Us
              </span>
            </h2>
          </div>
          <Link
            href="/about/careers"
            className="btn-primary group inline-flex items-center gap-2 self-start lg:self-auto"
          >
            <span>See Open Roles</span>
            <ArrowRight
              className="h-5 w-5 transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
          {/* Large Featured Card - University */}
          <div className="group lg:col-span-7">
            <div className="relative h-full min-h-[400px] overflow-hidden rounded-3xl bg-gradient-to-br from-forest via-forest to-primary p-8 lg:min-h-[480px] lg:p-10">
              {/* Abstract Shapes */}
              <div className="absolute right-0 top-0 h-72 w-72 -translate-y-1/3 translate-x-1/3 rounded-full bg-white/5" />
              <div className="absolute bottom-0 left-0 h-48 w-48 -translate-x-1/4 translate-y-1/2 rounded-full bg-primary/20" />

              {/* Icon Badge */}
              <div className="relative z-10 mb-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>

              {/* Content */}
              <div className="relative z-10 mt-auto pt-24">
                <h3 className="mb-4 font-serif text-2xl font-semibold leading-tight text-white lg:text-3xl">
                  Groot Analytics
                </h3>
                <p className="mb-6 max-w-lg text-base leading-relaxed text-white/80 lg:text-lg">
                  A home for the curious, our Academy is a living university,
                  blending art, science, & business to grow explorers and
                  first-principle thinkers.
                </p>
                <Link
                  href="/about/careers"
                  className="group/link inline-flex items-center gap-2 font-semibold text-primary"
                >
                  <span>Explore</span>
                  <ArrowRight
                    className="h-5 w-5 transition-transform group-hover/link:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column - Stacked Cards */}
          <div className="flex flex-col gap-6 lg:col-span-5 lg:gap-8">
            {/* Video Card */}
            <div className="group relative overflow-hidden rounded-3xl border border-border/50 bg-card shadow-lg">
              <div className="relative h-56 overflow-hidden bg-gradient-to-br from-primary/20 via-mint to-accent/10">
                {/* Assistant Bot Animation */}
                <Suspense
                  fallback={
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="absolute left-1/4 top-1/2 h-32 w-32 rounded-full border border-forest/30" />
                      <div className="absolute right-1/4 top-1/2 h-24 w-24 rounded-full border border-forest/30" />
                    </div>
                  }
                >
                  <ClientLottie
                    animationData={assistantBotAnimation}
                    className="h-full w-full scale-125"
                    loop={true}
                    autoplay={true}
                  />
                </Suspense>

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/20 to-transparent">
                  <div className="relative">
                    <div
                      className="absolute inset-0 h-16 w-16 animate-ping rounded-full bg-forest/30"
                      style={{ animationDuration: "2s" }}
                      aria-hidden="true"
                    />
                    <button
                      className="relative flex h-16 w-16 items-center justify-center rounded-full bg-forest shadow-xl shadow-forest/30 transition-transform group-hover:scale-110"
                      aria-label="Play culture video"
                      type="button"
                    >
                      <Play
                        className="ml-1 h-6 w-6 text-white"
                        fill="currentColor"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="mb-2 font-serif text-lg font-semibold text-foreground">
                  Ontologies and Agentic AI
                </h3>
                <a
                  href="https://www.linkedin.com/company/groot-analytics"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link inline-flex items-center gap-2 text-sm font-semibold text-primary"
                >
                  <span>Watch On LinkedIn</span>
                  <ExternalLink
                    className="h-4 w-4 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>

            {/* Family Day Card */}
            <div className="group relative overflow-hidden rounded-3xl border border-border/50 bg-card p-6 shadow-lg transition-shadow hover:shadow-xl lg:p-8">
              <div className="flex items-start gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-accent/10">
                  <Users className="h-7 w-7 text-accent" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="mb-2 font-serif text-lg font-semibold text-foreground">
                    Family Day Program
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                    A day of learning, laughter, and togetherness where families
                    experience the curiosity and collaboration that define
                    Groot.
                  </p>
                  <Link
                    href="/about/careers"
                    className="group/link inline-flex items-center gap-2 text-sm font-semibold text-primary"
                  >
                    <span>Know More</span>
                    <ArrowRight
                      className="h-4 w-4 transition-transform group-hover/link:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats Row */}
        <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4 lg:gap-8">
          {[
            { value: "100%", label: "Dedicated" },
            { value: "Global", label: "Reach" },
            { value: "92%", label: "Retention Rate" },
            { value: "4.8", label: "Glassdoor Rating" },
          ].map((stat, index) => (
            <div
              key={index}
              className="rounded-2xl border border-border/30 bg-white/60 p-6 text-center backdrop-blur-sm"
            >
              <div className="mb-1 bg-gradient-to-r from-[hsl(168,76%,40%)] to-[hsl(142,71%,38%)] bg-clip-text text-3xl font-bold text-transparent lg:text-4xl">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CultureSection;
