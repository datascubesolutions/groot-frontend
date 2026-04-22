// @ts-nocheck
"use client";

import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    client: "InnovateX",
    quote:
      "Groot Analytics modernized our entire stack on Azure Databricks. We now process TBs of data in real-time with zero downtime.",
    industry: "Technology",
    role: "Head of Data Engineering",
    metric: "3.2x",
    metricLabel: "Faster Processing",
  },
  {
    id: 2,
    client: "Summit Brands",
    quote:
      "The unified semantic layer they built on Snowflake finally gave us a single source of truth across 40+ global markets.",
    industry: "CPG",
    role: "Director, Analytics",
    metric: "47%",
    metricLabel: "Cost Reduction",
  },
  {
    id: 3,
    client: "MediaForce",
    quote:
      "Their GenAI solution on Azure OpenAI automated our campaign tagging, saving us thousands of manual hours every month.",
    industry: "Advertising",
    role: "VP, Marketing Tech",
    metric: "89%",
    metricLabel: "Automation Rate",
  },
  {
    id: 4,
    client: "FinStream",
    quote:
      "Groot's platform-agnostic approach was refreshing. They optimized our AWS Glue pipelines without forcing a vendor lock-in.",
    industry: "Financial Services",
    role: "Chief Data Officer",
    metric: "40%",
    metricLabel: "Efficiency Gain",
  },
  {
    id: 5,
    client: "Wellness Plus",
    quote:
      "We went from messy spreadsheets to a governed Power BI ecosystem in 12 weeks. The clarity we have now is game-changing.",
    industry: "Healthcare",
    role: "CTO",
    metric: "100%",
    metricLabel: "Data Trust",
  },
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleChange = (newIndex) => {
    if (isAnimating || newIndex === activeIndex) return;
    setIsAnimating(true);
    setActiveIndex(newIndex);
    setTimeout(() => setIsAnimating(false), 400);
  };

  const activeTestimonial = testimonials[activeIndex];

  return (
    <section className="relative overflow-hidden bg-background py-24 lg:py-32">
      {/* Abstract Background Shapes */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-mint/50 to-transparent" />
      <div className="absolute bottom-0 left-0 h-96 w-96 -translate-x-1/2 translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />

      <div className="container relative z-10 mx-auto px-6 lg:px-12">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column - Large Featured Quote */}
          <div className="relative lg:col-span-7">
            {/* Floating Label */}
            <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-forest/10 px-4 py-2">
              <Sparkles className="h-4 w-4 text-forest" />
              <span className="text-sm font-semibold tracking-wide text-forest">
                Client Success Stories
              </span>
            </div>

            {/* Main Quote Card */}
            <div
              className={`duration-400 relative transition-all ${isAnimating ? "translate-y-4 opacity-0" : "translate-y-0 opacity-100"}`}
            >
              {/* Decorative Quote Mark */}
              <div className="pointer-events-none absolute -left-2 -top-4 select-none font-serif text-[120px] leading-none text-primary/15">
                &quot;
              </div>

              <blockquote className="relative z-10 pr-8 font-serif text-2xl leading-snug text-foreground md:text-3xl lg:text-4xl">
                {activeTestimonial.quote}
              </blockquote>

              {/* Author & Metric Row */}
              <div className="mt-10 flex flex-wrap items-end justify-between gap-6">
                <div className="space-y-1">
                  <div className="text-2xl font-bold text-foreground">
                    {activeTestimonial.client}
                  </div>
                  <div className="font-medium text-primary">
                    {activeTestimonial.role}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {activeTestimonial.industry}
                  </div>
                </div>

                {activeTestimonial.metric && (
                  <div className="text-right">
                    <div className="text-gradient-primary text-4xl font-bold lg:text-5xl">
                      {activeTestimonial.metric}
                    </div>
                    <div className="text-sm uppercase tracking-wider text-muted-foreground">
                      {activeTestimonial.metricLabel}
                    </div>
                  </div>
                )}
              </div>

              {/* Progress Line */}
              <div className="mt-10 h-1 overflow-hidden rounded-full bg-border/50">
                <div
                  className="duration-400 h-full rounded-full bg-gradient-to-r from-forest to-primary transition-all"
                  style={{
                    width: `${((activeIndex + 1) / testimonials.length) * 100}%`,
                  }}
                />
              </div>
            </div>
          </div>

          {/* Right Column - Testimonial Navigator */}
          <div className="lg:col-span-5 lg:pl-8">
            <div className="sticky top-8">
              {/* Mini Cards Stack */}
              <div className="space-y-3">
                {testimonials.map((testimonial, index) => (
                  <button
                    key={testimonial.id}
                    onClick={() => handleChange(index)}
                    className={`group w-full rounded-2xl border p-5 text-left transition-all duration-300 ${
                      index === activeIndex
                        ? "border-forest bg-forest text-white shadow-lg shadow-forest/20"
                        : "border-border/60 bg-card hover:border-primary/40 hover:bg-mint/30"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="min-w-0 flex-1">
                        <div
                          className={`truncate font-semibold ${
                            index === activeIndex
                              ? "text-white"
                              : "text-foreground"
                          }`}
                        >
                          {testimonial.client}
                        </div>
                        <div
                          className={`truncate text-sm ${
                            index === activeIndex
                              ? "text-primary-foreground/70"
                              : "text-muted-foreground"
                          }`}
                        >
                          {testimonial.role}
                        </div>
                      </div>

                      {testimonial.metric && (
                        <div
                          className={`shrink-0 text-xl font-bold ${
                            index === activeIndex
                              ? "text-primary"
                              : "text-primary"
                          }`}
                        >
                          {testimonial.metric}
                        </div>
                      )}
                    </div>
                  </button>
                ))}
              </div>

              {/* Navigation Arrows */}
              <div className="mt-6 flex items-center gap-3">
                <button
                  onClick={() => handleChange(Math.max(0, activeIndex - 1))}
                  disabled={activeIndex === 0}
                  className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-border transition-all hover:border-forest hover:text-forest disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={() =>
                    handleChange(
                      Math.min(testimonials.length - 1, activeIndex + 1)
                    )
                  }
                  disabled={activeIndex === testimonials.length - 1}
                  className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-border transition-all hover:border-forest hover:text-forest disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
                <span className="ml-auto text-sm text-muted-foreground">
                  {String(activeIndex + 1).padStart(2, "0")} /{" "}
                  {String(testimonials.length).padStart(2, "0")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
