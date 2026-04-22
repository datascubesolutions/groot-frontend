// @ts-nocheck
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { generateBreadcrumbSchema, generateRouteMetadata } from "@/lib/seo";
import {
  ArrowRight,
  Brain,
  Building2,
  Cpu,
  Database,
  Factory,
  Globe2,
  Search,
  ShoppingCart,
  Stethoscope,
  TrendingUp,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  ...generateRouteMetadata("industries"),
};

const caseStudies = [
  {
    category: "Data Engineering",
    title: "Modernizing a Global Financial Data Lake",
    client: "Tier 1 Investment Bank",
    impact: "99.9% Pipeline Reliability",
    description:
      "Built a cloud-native data architecture on Azure Databricks processing 5TB+ daily for real-time risk assessment, ensuring absolute precision in high-frequency trading environments.",
    icon: Database,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
  },
  {
    category: "AI & Automation",
    title: "Intelligent Inventory Optimization AI",
    client: "Retail Conglomerate",
    impact: "18% Stockout Reduction",
    description:
      "Deployed custom XGBoost models on Azure ML to predict micro-market demand spikes and automate supply chain logistics across 200+ global locations.",
    icon: Brain,
    image:
      "https://images.unsplash.com/photo-1516110833967-0b5716ca1387?q=80&w=2070&auto=format&fit=crop",
  },
  {
    category: "Strategy & BI",
    title: "Decision Intelligence for PE Integration",
    client: "Leading Private Equity Firm",
    impact: "40% Faster Reporting",
    description:
      "Designed a unified semantic layer on Snowflake and executive Power BI dashboards during a complex, trillion-dollar merger of three major entities.",
    icon: TrendingUp,
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
  },
];

const industries = [
  {
    icon: Building2,
    title: "Financial Services",
    description:
      "Advanced risk modeling, algorithmic fraud detection, and steadfast regulatory compliance solutions tailored for banking and fintech innovators.",
    points: [
      "Real-time Risk Dashboards",
      "Fraud Detection Algorithms",
      "Customer Churn Prediction",
      "Portfolio Optimization Models",
    ],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
  },
  {
    icon: Factory,
    title: "Manufacturing & Supply",
    description:
      "Shatter operational bottlenecks with AI-driven predictive maintenance, dynamic demand forecasting, and complete inventory intelligence.",
    points: [
      "IoT Predictive Maintenance",
      "Demand Forecasting AI",
      "Supply Chain Observability",
      "Automated Quality Control",
    ],
    image:
      "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?q=80&w=2070&auto=format&fit=crop",
  },
  {
    icon: Stethoscope,
    title: "Healthcare & Life Sciences",
    description:
      "Elevating patient outcomes and streamlining clinical efficiency through HIPAA-compliant data lakes and advanced operational analytics.",
    points: [
      "Patient Outcome Analytics",
      "Revenue Cycle Intelligence",
      "Population Health AI",
      "Secure Clinical Data Lakes",
    ],
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop",
  },
  {
    icon: ShoppingCart,
    title: "Retail & E-commerce",
    description:
      "Hyper-personalize digital customer experiences and optimize dynamic pricing engines using sophisticated machine learning insights.",
    points: [
      "Hyper-Personalization Engines",
      "Dynamic Pricing Models",
      "Omnichannel Optimization",
      "Market Basket AI Analysis",
    ],
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop",
  },
  {
    icon: Globe2,
    title: "Logistics & Transport",
    description:
      "Architecting route optimization algorithms and global real-time tracking infrastructures to drive unparalleled efficiency.",
    points: [
      "Algorithmic Route Optimization",
      "Fleet Health Monitoring",
      "Dynamic ETA Systems",
      "Fuel & Cost Benchmarking",
    ],
    image:
      "https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=2070&auto=format&fit=crop",
  },
  {
    icon: Cpu,
    title: "Technology & SaaS",
    description:
      "Building scalable product usage pipelines and telemetry analytics platforms for modern software enterprises to drive explosive growth.",
    points: [
      "Telemetry & Usage Analytics",
      "SaaS KPI Frameworks",
      "Customer Success Scoring",
      "Growth Attribution Modeling",
    ],
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
  },
];

export default function IndustriesPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Industries", path: "/industries" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main className="min-h-screen bg-background font-sans selection:bg-primary/30 selection:text-forest">
        <div className="container mx-auto px-6 pt-24">
          <Breadcrumb items={[{ label: "Industries", href: "/industries" }]} />
        </div>

        {/* Hero Section */}
        <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden bg-background pb-20 pt-10">
          {/* Subtle Background Pattern matching other pages */}
          <div className="dot-pattern pointer-events-none absolute inset-0 z-0 opacity-40"></div>

          {/* Soft Glowing Orbs */}
          <div className="pointer-events-none absolute right-0 top-0 h-[600px] w-[600px] -translate-y-1/2 translate-x-1/3 rounded-full bg-primary/10 mix-blend-multiply blur-[140px]"></div>
          <div className="pointer-events-none absolute bottom-0 left-0 h-[700px] w-[700px] -translate-x-1/4 translate-y-1/3 rounded-full bg-forest/5 mix-blend-multiply blur-[160px]"></div>

          <div className="container relative z-10 mx-auto mt-16 flex flex-1 flex-col items-center justify-center px-6 text-center">
            <div className="glass group relative mb-12 inline-flex items-center gap-2 overflow-hidden rounded-full border border-border px-6 py-2.5 text-[11px] font-bold uppercase tracking-[0.2em] text-forest shadow-sm sm:text-xs">
              <div className="absolute inset-0 translate-y-[100%] bg-primary/10 transition-transform duration-300 group-hover:translate-y-0"></div>
            </div>
            <h1 className="mb-8 text-5xl font-extrabold leading-[1.05] tracking-tighter text-foreground md:text-7xl lg:text-[7.5rem]">
              Industries We
              <br className="hidden md:block" />{" "}
              <span className="bg-gradient-to-r from-primary to-forest bg-clip-text pr-2 font-serif font-medium italic text-transparent">
                Transform
              </span>
            </h1>

            <p className="mx-auto mb-16 max-w-4xl text-balance text-xl font-light leading-relaxed text-muted-foreground md:text-2xl lg:text-3xl">
              Deep domain expertise paired with{" "}
              <strong className="font-semibold text-foreground">
                advanced AI & analytics
              </strong>{" "}
              engineering to master the distinct complexities of your vertical.
            </p>

            <div className="flex w-full flex-col items-center justify-center gap-6 sm:flex-row">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="h-[4.5rem] transform rounded-full bg-forest px-12 text-lg font-bold text-white shadow-xl shadow-primary/15 transition-all duration-300 hover:-translate-y-1 hover:bg-forest/90"
                >
                  Consult Your Expert{" "}
                  <ArrowRight size={22} className="ml-3" aria-hidden="true" />
                </Button>
              </Link>
              <div className="group relative w-full sm:w-auto">
                <label htmlFor="industry-search" className="sr-only">
                  Search by industry
                </label>
                <input
                  id="industry-search"
                  type="search"
                  placeholder="Search by industry..."
                  aria-label="Search by industry"
                  className="h-[4.5rem] w-full rounded-full border border-border bg-card px-8 pr-16 text-lg font-medium text-foreground shadow-sm outline-none transition-all placeholder:text-muted-foreground hover:border-primary/50 focus:border-primary focus:ring-4 focus:ring-primary/10 sm:w-80 sm:group-focus-within:w-[28rem]"
                />
                <Search
                  className="absolute right-6 top-1/2 -translate-y-1/2 text-primary"
                  size={24}
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies - Our Work */}
        <section
          id="our-work"
          className="relative border-t border-border bg-background py-40"
        >
          <div className="container relative z-10 mx-auto px-6 xl:px-12">
            <div className="mb-32 flex flex-col items-end justify-between gap-8 border-b border-border/50 pb-12 md:flex-row">
              <div className="max-w-3xl">
                <h2 className="mb-8 text-5xl font-extrabold tracking-tight text-foreground md:text-6xl lg:text-7xl">
                  Proven Impact
                </h2>
                <p className="text-balance text-xl font-light leading-relaxed text-muted-foreground md:text-2xl">
                  Engineering intelligent systems that solve real-world industry
                  bottlenecks. Explore our empirical success stories.
                </p>
              </div>
              <Link href="/contact" className="hidden shrink-0 md:inline-flex">
                <Button
                  variant="outline"
                  size="lg"
                  className="h-[4.5rem] rounded-full border-2 border-border px-12 text-lg font-bold tracking-wide text-forest transition-all duration-300 hover:border-forest hover:bg-forest hover:text-white"
                >
                  Partner With Us
                </Button>
              </Link>
            </div>

            <div className="space-y-48">
              {caseStudies.map((study, index) => {
                const Icon = study.icon;
                const isEven = index % 2 === 0;
                return (
                  <div
                    key={index}
                    className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} group items-center gap-16 lg:gap-32`}
                  >
                    {/* Image Column */}
                    <div className="relative w-full lg:w-[55%]">
                      <div className="relative aspect-[4/3] transform overflow-hidden rounded-[2.5rem] shadow-2xl shadow-foreground/5 ring-1 ring-border transition-all duration-700 group-hover:-translate-y-4 group-hover:shadow-[0_40px_80px_-20px_rgba(20,184,166,0.15)]">
                        <div className="absolute inset-0 z-10 bg-forest/5 mix-blend-overlay transition-colors duration-500 group-hover:bg-transparent" />
                        <Image
                          src={study.image}
                          alt={study.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 55vw"
                          {...(index === 0 ? { priority: true } : {})}
                          className="object-cover transition-transform duration-1000 group-hover:scale-105"
                        />

                        {/* Floating Labels */}
                        <div className="absolute left-10 top-10 z-20 rounded-full border border-border bg-card/95 px-6 py-2.5 text-xs font-extrabold uppercase tracking-[0.15em] text-forest shadow-xl backdrop-blur-md">
                          {study.category}
                        </div>

                        <div className="absolute bottom-10 right-10 z-20 flex h-20 w-20 items-center justify-center rounded-[1.5rem] border border-border bg-card/95 shadow-2xl backdrop-blur-md transition-colors duration-500 group-hover:bg-forest">
                          <Icon
                            size={32}
                            className="text-primary transition-colors duration-500 group-hover:text-white"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Content Column */}
                    <div className="flex w-full flex-col justify-center lg:w-[45%]">
                      <h3 className="mb-8 text-4xl font-extrabold leading-tight tracking-tight text-foreground transition-colors duration-500 group-hover:text-forest lg:text-5xl">
                        {study.title}
                      </h3>
                      <p className="mb-14 text-xl font-light leading-relaxed text-muted-foreground">
                        {study.description}
                      </p>

                      <div className="mb-14 grid grid-cols-2 gap-10 rounded-[2rem] border border-border/50 bg-muted/30 p-10">
                        <div className="space-y-4">
                          <span className="text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground">
                            Client
                          </span>
                          <p className="text-xl font-bold leading-tight text-foreground">
                            {study.client}
                          </p>
                        </div>
                        <div className="space-y-4">
                          <span className="text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground">
                            Impact
                          </span>
                          <p className="inline-flex items-center text-2xl font-extrabold leading-tight text-forest">
                            {study.impact}
                          </p>
                        </div>
                      </div>

                      <div>
                        {/* Case study detail pages are not yet available — link removed to avoid dead navigation */}
                        <span
                          className="inline-flex cursor-default items-center gap-3 text-lg font-bold tracking-wide text-muted-foreground"
                          aria-label={`Case study: ${study.title} — coming soon`}
                        >
                          Read Case Study{" "}
                          <ArrowRight size={22} aria-hidden="true" />
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-32 text-center md:hidden">
              <Link href="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="h-16 w-full rounded-full border-2 border-border text-lg font-bold text-forest transition-all duration-300 hover:border-forest hover:bg-forest hover:text-white"
                >
                  Partner With Us
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Industry Grid */}
        <section className="relative overflow-hidden border-t border-border bg-background py-40">
          {/* Repeating dot pattern to match the whole site vibe without breaking contrast */}
          <div className="dot-pattern pointer-events-none absolute inset-0 z-0 opacity-20"></div>

          <div className="container relative z-10 mx-auto px-6 xl:px-12">
            <div className="mx-auto mb-32 max-w-4xl text-center">
              <h2 className="mb-8 text-5xl font-extrabold tracking-tight text-foreground md:text-6xl lg:text-7xl">
                Vertical Mastery
              </h2>
              <p className="text-balance text-xl font-light leading-relaxed text-muted-foreground md:text-2xl">
                Custom-architected data strategies engineered for the precise
                dynamics of your industry.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
              {industries.map((industry, index) => {
                const Icon = industry.icon;
                return (
                  <div
                    key={index}
                    className="group relative flex flex-col overflow-hidden rounded-[2.5rem] border border-border bg-card transition-all duration-500 hover:-translate-y-3 hover:border-primary/40 hover:shadow-[0_45px_100px_-20px_rgba(20,184,166,0.15)]"
                  >
                    {/* Card Header Image Snippet */}
                    <div className="relative h-64 w-full overflow-hidden">
                      <div className="absolute inset-0 z-10 bg-forest/5 mix-blend-multiply transition-colors duration-500 group-hover:bg-transparent"></div>
                      <Image
                        src={industry.image}
                        alt={industry.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                      />
                      {/* Floating icon */}
                      <div className="absolute -bottom-10 left-10 z-20 flex h-20 w-20 items-center justify-center rounded-[1.5rem] border border-border bg-card shadow-md transition-all duration-500 group-hover:scale-110 group-hover:bg-forest">
                        <Icon
                          size={32}
                          className="text-forest transition-colors duration-500 group-hover:text-white"
                        />
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col p-10 pt-20">
                      <h3 className="mb-6 text-3xl font-extrabold tracking-tight text-foreground transition-colors group-hover:text-forest">
                        {industry.title}
                      </h3>
                      <p className="mb-12 flex-1 text-lg font-light leading-relaxed text-muted-foreground">
                        {industry.description}
                      </p>

                      <ul className="mb-12 space-y-5">
                        {industry.points.map((point, pIdx) => (
                          <li
                            key={pIdx}
                            className="flex items-start gap-4 text-base font-semibold text-foreground/80"
                          >
                            <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary shadow-[0_0_8px_rgba(20,184,166,0.5)]" />
                            {point}
                          </li>
                        ))}
                      </ul>

                      <Link href="/services" className="mt-auto">
                        <Button
                          variant="ghost"
                          className="h-auto w-full justify-between rounded-none border-t border-border/50 px-0 pt-8 text-lg font-bold text-foreground hover:bg-transparent hover:text-forest group-hover:text-forest"
                        >
                          Explore Solutions{" "}
                          <ArrowRight
                            size={24}
                            className="text-primary transition-transform duration-300 group-hover:translate-x-2"
                            aria-hidden="true"
                          />
                        </Button>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative overflow-hidden border-t border-border bg-background py-40">
          {/* Match the Hero pattern EXACTLY */}
          <div className="dot-pattern pointer-events-none absolute inset-0 z-0 opacity-40"></div>

          <div className="pointer-events-none absolute right-0 top-0 h-[1000px] w-[1000px] -translate-y-1/2 translate-x-1/2 rounded-full bg-primary/10 blur-[200px]"></div>
          <div className="pointer-events-none absolute bottom-0 left-0 h-[800px] w-[800px] -translate-x-1/2 translate-y-1/2 rounded-full bg-emerald-300/10 blur-[200px]"></div>

          <div className="container relative z-10 mx-auto flex flex-col items-center px-6 text-center">
            <div className="mb-16 inline-flex h-32 w-32 items-center justify-center rounded-full border border-border bg-card text-primary shadow-xl backdrop-blur-sm">
              <Globe2 size={64} strokeWidth={1.5} />
            </div>
            <h2 className="mb-10 text-5xl font-extrabold leading-[1.05] tracking-tighter text-foreground md:text-6xl lg:text-[5.5rem]">
              Don&apos;t See Your Industry?
            </h2>
            <p className="mx-auto mb-16 max-w-4xl text-balance text-2xl font-light leading-relaxed text-muted-foreground md:text-3xl">
              Our data foundation transcends borders. Let&apos;s engineer a
              cohesive, intelligent strategy uniquely tuned to your specific
              market dynamics.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="group h-[5rem] rounded-full bg-forest px-14 text-xl font-extrabold text-white shadow-2xl shadow-forest/10 transition-all duration-300 hover:-translate-y-1 hover:bg-forest/90"
              >
                Start the Conversation
                <ArrowRight
                  size={26}
                  className="ml-4 transition-transform group-hover:translate-x-2"
                  aria-hidden="true"
                />
              </Button>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
