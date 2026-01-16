"use client";

import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    client: "InnovateX",
    quote: "Groot Analytics modernized our entire stack on Azure Databricks. We now process TBs of data in real-time with zero downtime.",
    industry: "Technology",
    role: "Head of Data Engineering",
    metric: "3.2x",
    metricLabel: "Faster Processing",
  },
  {
    id: 2,
    client: "Summit Brands",
    quote: "The unified semantic layer they built on Snowflake finally gave us a single source of truth across 40+ global markets.",
    industry: "CPG",
    role: "Director, Analytics",
    metric: "47%",
    metricLabel: "Cost Reduction",
  },
  {
    id: 3,
    client: "MediaForce",
    quote: "Their GenAI solution on Azure OpenAI automated our campaign tagging, saving us thousands of manual hours every month.",
    industry: "Advertising",
    role: "VP, Marketing Tech",
    metric: "89%",
    metricLabel: "Automation Rate",
  },
  {
    id: 4,
    client: "FinStream",
    quote: "Groot's platform-agnostic approach was refreshing. They optimized our AWS Glue pipelines without forcing a vendor lock-in.",
    industry: "Financial Services",
    role: "Chief Data Officer",
    metric: "40%",
    metricLabel: "Efficiency Gain",
  },
  {
    id: 5,
    client: "Wellness Plus",
    quote: "We went from messy spreadsheets to a governed Power BI ecosystem in 12 weeks. The clarity we have now is game-changing.",
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
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-mint/50 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-start">

          {/* Left Column - Large Featured Quote */}
          <div className="lg:col-span-7 relative">
            {/* Floating Label */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-forest/10 rounded-full mb-8">
              <Sparkles className="w-4 h-4 text-forest" />
              <span className="text-sm font-semibold text-forest tracking-wide">Client Success Stories</span>
            </div>

            {/* Main Quote Card */}
            <div
              className={`relative transition-all duration-400 ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}
            >
              {/* Decorative Quote Mark */}
              <div className="absolute -top-4 -left-2 text-[120px] leading-none font-serif text-primary/15 select-none pointer-events-none">
                "
              </div>

              <blockquote className="text-2xl md:text-3xl lg:text-4xl font-serif text-foreground leading-snug relative z-10 pr-8">
                {activeTestimonial.quote}
              </blockquote>

              {/* Author & Metric Row */}
              <div className="mt-10 flex flex-wrap items-end justify-between gap-6">
                <div className="space-y-1">
                  <div className="text-2xl font-bold text-foreground">{activeTestimonial.client}</div>
                  <div className="text-primary font-medium">{activeTestimonial.role}</div>
                  <div className="text-sm text-muted-foreground">{activeTestimonial.industry}</div>
                </div>

                {activeTestimonial.metric && (
                  <div className="text-right">
                    <div className="text-4xl lg:text-5xl font-bold text-gradient-primary">{activeTestimonial.metric}</div>
                    <div className="text-sm text-muted-foreground uppercase tracking-wider">{activeTestimonial.metricLabel}</div>
                  </div>
                )}
              </div>

              {/* Progress Line */}
              <div className="mt-10 h-1 bg-border/50 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-forest to-primary rounded-full transition-all duration-400"
                  style={{ width: `${((activeIndex + 1) / testimonials.length) * 100}%` }}
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
                    className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 group ${index === activeIndex
                      ? "bg-forest text-white border-forest shadow-lg shadow-forest/20"
                      : "bg-card border-border/60 hover:border-primary/40 hover:bg-mint/30"
                      }`}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <div className={`font-semibold truncate ${index === activeIndex ? "text-white" : "text-foreground"
                          }`}>
                          {testimonial.client}
                        </div>
                        <div className={`text-sm truncate ${index === activeIndex ? "text-primary-foreground/70" : "text-muted-foreground"
                          }`}>
                          {testimonial.role}
                        </div>
                      </div>

                      {testimonial.metric && (
                        <div className={`text-xl font-bold shrink-0 ${index === activeIndex ? "text-primary" : "text-primary"
                          }`}>
                          {testimonial.metric}
                        </div>
                      )}
                    </div>
                  </button>
                ))}
              </div>

              {/* Navigation Arrows */}
              <div className="flex items-center gap-3 mt-6">
                <button
                  onClick={() => handleChange(Math.max(0, activeIndex - 1))}
                  disabled={activeIndex === 0}
                  className="w-12 h-12 rounded-full border-2 border-border flex items-center justify-center transition-all disabled:opacity-40 disabled:cursor-not-allowed hover:border-forest hover:text-forest"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => handleChange(Math.min(testimonials.length - 1, activeIndex + 1))}
                  disabled={activeIndex === testimonials.length - 1}
                  className="w-12 h-12 rounded-full border-2 border-border flex items-center justify-center transition-all disabled:opacity-40 disabled:cursor-not-allowed hover:border-forest hover:text-forest"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
                <span className="ml-auto text-sm text-muted-foreground">
                  {String(activeIndex + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
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
