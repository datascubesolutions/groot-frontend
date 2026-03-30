import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
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
  TrendingUp
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Industries We Serve | Groot Analytics",
  description: "Specialized analytics and AI solutions across Financial Services, Manufacturing, Healthcare, Retail, and Technology.",
};

const caseStudies = [
  {
    category: "Data Engineering",
    title: "Modernizing a Global Financial Data Lake",
    client: "Tier 1 Investment Bank",
    impact: "99.9% Pipeline Reliability",
    description: "Built a cloud-native data architecture on Azure Databricks processing 5TB+ daily for real-time risk assessment, ensuring absolute precision in high-frequency trading environments.",
    icon: Database,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
  },
  {
    category: "AI & Automation",
    title: "Intelligent Inventory Optimization AI",
    client: "Retail Conglomerate",
    impact: "18% Stockout Reduction",
    description: "Deployed custom XGBoost models on Azure ML to predict micro-market demand spikes and automate supply chain logistics across 200+ global locations.",
    icon: Brain,
    image: "https://images.unsplash.com/photo-1516110833967-0b5716ca1387?q=80&w=2070&auto=format&fit=crop"
  },
  {
    category: "Strategy & BI",
    title: "Decision Intelligence for PE Integration",
    client: "Leading Private Equity Firm",
    impact: "40% Faster Reporting",
    description: "Designed a unified semantic layer on Snowflake and executive Power BI dashboards during a complex, trillion-dollar merger of three major entities.",
    icon: TrendingUp,
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop"
  }
];

const industries = [
  {
    icon: Building2,
    title: "Financial Services",
    description: "Advanced risk modeling, algorithmic fraud detection, and steadfast regulatory compliance solutions tailored for banking and fintech innovators.",
    points: ["Real-time Risk Dashboards", "Fraud Detection Algorithms", "Customer Churn Prediction", "Portfolio Optimization Models"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
  },
  {
    icon: Factory,
    title: "Manufacturing & Supply",
    description: "Shatter operational bottlenecks with AI-driven predictive maintenance, dynamic demand forecasting, and complete inventory intelligence.",
    points: ["IoT Predictive Maintenance", "Demand Forecasting AI", "Supply Chain Observability", "Automated Quality Control"],
    image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?q=80&w=2070&auto=format&fit=crop"
  },
  {
    icon: Stethoscope,
    title: "Healthcare & Life Sciences",
    description: "Elevating patient outcomes and streamlining clinical efficiency through HIPAA-compliant data lakes and advanced operational analytics.",
    points: ["Patient Outcome Analytics", "Revenue Cycle Intelligence", "Population Health AI", "Secure Clinical Data Lakes"],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop"
  },
  {
    icon: ShoppingCart,
    title: "Retail & E-commerce",
    description: "Hyper-personalize digital customer experiences and optimize dynamic pricing engines using sophisticated machine learning insights.",
    points: ["Hyper-Personalization Engines", "Dynamic Pricing Models", "Omnichannel Optimization", "Market Basket AI Analysis"],
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop"
  },
  {
    icon: Globe2,
    title: "Logistics & Transport",
    description: "Architecting route optimization algorithms and global real-time tracking infrastructures to drive unparalleled efficiency.",
    points: ["Algorithmic Route Optimization", "Fleet Health Monitoring", "Dynamic ETA Systems", "Fuel & Cost Benchmarking"],
    image: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=2070&auto=format&fit=crop"
  },
  {
    icon: Cpu,
    title: "Technology & SaaS",
    description: "Building scalable product usage pipelines and telemetry analytics platforms for modern software enterprises to drive explosive growth.",
    points: ["Telemetry & Usage Analytics", "SaaS KPI Frameworks", "Customer Success Scoring", "Growth Attribution Modeling"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop"
  }
];

export default function IndustriesPage() {
  return (
    <main className="bg-background min-h-screen font-sans selection:bg-primary/30 selection:text-forest">
      <div className="pt-24 px-6 container mx-auto">
        <Breadcrumb
          items={[
            { label: "Industries", href: "/industries" }
          ]}
        />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-background pt-10 pb-20">
        {/* Subtle Background Pattern matching other pages */}
        <div className="absolute inset-0 dot-pattern opacity-40 z-0 pointer-events-none"></div>

        {/* Soft Glowing Orbs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[140px] -translate-y-1/2 translate-x-1/3 pointer-events-none mix-blend-multiply"></div>
        <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-forest/5 rounded-full blur-[160px] translate-y-1/3 -translate-x-1/4 pointer-events-none mix-blend-multiply"></div>

        <div className="container mx-auto px-6 z-10 relative mt-16 text-center flex-1 flex flex-col justify-center items-center">
          <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full glass border border-border shadow-sm text-forest text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] mb-12 overflow-hidden relative group">
            <div className="absolute inset-0 bg-primary/10 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300"></div>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-[7.5rem] font-extrabold mb-8 tracking-tighter text-foreground leading-[1.05]">
            Industries We<br className="hidden md:block" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-forest italic font-serif font-medium pr-2">Transform</span>
          </h1>

          <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto mb-16 text-balance font-light leading-relaxed">
            Deep domain expertise paired with <strong className="font-semibold text-foreground">advanced AI & analytics</strong> engineering to master the distinct complexities of your vertical.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6 items-center w-full">
            <Button size="lg" className="h-[4.5rem] px-12 text-lg shadow-xl shadow-primary/15 font-bold rounded-full bg-forest text-white hover:bg-forest/90 transition-all duration-300 transform hover:-translate-y-1">
              Consult Your Expert <ArrowRight size={22} className="ml-3" />
            </Button>
            <div className="relative group w-full sm:w-auto">
              <input type="text" placeholder="Search by industry..." className="h-[4.5rem] px-8 pr-16 rounded-full border border-border bg-card hover:border-primary/50 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all w-full sm:w-80 sm:group-focus-within:w-[28rem] shadow-sm text-foreground font-medium placeholder:text-muted-foreground text-lg" />
              <Search className="absolute right-6 top-1/2 -translate-y-1/2 text-primary" size={24} />
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies - Our Work */}
      <section id="our-work" className="py-40 relative bg-background border-t border-border">
        <div className="container mx-auto px-6 xl:px-12 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-8 border-b border-border/50 pb-12">
            <div className="max-w-3xl">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8 tracking-tight text-foreground">Proven Impact</h2>
              <p className="text-xl md:text-2xl text-muted-foreground text-balance leading-relaxed font-light">
                Engineering intelligent systems that solve real-world industry bottlenecks. Explore our empirical success stories.
              </p>
            </div>
            <Link href="/contact" className="hidden md:inline-flex shrink-0">
              <Button variant="outline" size="lg" className="h-[4.5rem] px-12 rounded-full border-2 border-border text-forest hover:bg-forest hover:text-white hover:border-forest transition-all duration-300 font-bold tracking-wide text-lg">
                Partner With Us
              </Button>
            </Link>
          </div>

          <div className="space-y-48">
            {caseStudies.map((study, index) => {
              const Icon = study.icon;
              const isEven = index % 2 === 0;
              return (
                <div key={index} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 lg:gap-32 items-center group`}>

                  {/* Image Column */}
                  <div className="w-full lg:w-[55%] relative">
                    <div className="aspect-[4/3] rounded-[2.5rem] overflow-hidden relative shadow-2xl shadow-foreground/5 ring-1 ring-border group-hover:shadow-[0_40px_80px_-20px_rgba(20,184,166,0.15)] transition-all duration-700 transform group-hover:-translate-y-4">
                      <div className="absolute inset-0 bg-forest/5 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-500" />
                      <img src={study.image} alt={study.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />

                      {/* Floating Labels */}
                      <div className="absolute top-10 left-10 px-6 py-2.5 rounded-full bg-card/95 backdrop-blur-md border border-border text-xs font-extrabold text-forest z-20 tracking-[0.15em] shadow-xl uppercase">
                        {study.category}
                      </div>

                      <div className="absolute bottom-10 right-10 z-20 flex items-center justify-center w-20 h-20 rounded-[1.5rem] bg-card/95 backdrop-blur-md border border-border shadow-2xl group-hover:bg-forest transition-colors duration-500">
                        <Icon size={32} className="text-primary group-hover:text-white transition-colors duration-500" />
                      </div>
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className="w-full lg:w-[45%] flex flex-col justify-center">
                    <h3 className="text-4xl lg:text-5xl font-extrabold mb-8 tracking-tight text-foreground group-hover:text-forest transition-colors duration-500 leading-tight">{study.title}</h3>
                    <p className="text-xl text-muted-foreground leading-relaxed mb-14 font-light">{study.description}</p>

                    <div className="grid grid-cols-2 gap-10 mb-14 bg-muted/30 p-10 rounded-[2rem] border border-border/50">
                      <div className="space-y-4">
                        <span className="text-sm font-bold text-muted-foreground uppercase tracking-[0.2em]">Client</span>
                        <p className="text-foreground font-bold text-xl leading-tight">{study.client}</p>
                      </div>
                      <div className="space-y-4">
                        <span className="text-sm font-bold text-muted-foreground uppercase tracking-[0.2em]">Impact</span>
                        <p className="inline-flex items-center text-forest font-extrabold text-2xl leading-tight">{study.impact}</p>
                      </div>
                    </div>

                    <div>
                      <Link href="#" className="inline-flex items-center gap-3 text-lg font-bold text-foreground group-hover:text-forest transition-colors tracking-wide relative after:absolute after:-bottom-1.5 after:left-0 after:h-[2px] after:w-0 after:bg-forest after:transition-all group-hover:after:w-full">
                        Read Case Study <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform duration-300" />
                      </Link>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

          <div className="text-center mt-32 md:hidden">
            <Link href="/contact">
              <Button variant="outline" size="lg" className="rounded-full w-full h-16 font-bold border-2 border-border text-forest hover:bg-forest hover:text-white hover:border-forest transition-all duration-300 text-lg">Partner With Us</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Industry Grid */}
      <section className="py-40 relative overflow-hidden bg-background border-t border-border">
        {/* Repeating dot pattern to match the whole site vibe without breaking contrast */}
        <div className="absolute inset-0 dot-pattern opacity-20 z-0 pointer-events-none"></div>

        <div className="container mx-auto px-6 xl:px-12 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-32">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-foreground tracking-tight mb-8">Vertical Mastery</h2>
            <p className="text-xl md:text-2xl text-muted-foreground text-balance font-light leading-relaxed">Custom-architected data strategies engineered for the precise dynamics of your industry.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <div key={index} className="group relative bg-card rounded-[2.5rem] border border-border hover:border-primary/40 transition-all duration-500 flex flex-col overflow-hidden hover:shadow-[0_45px_100px_-20px_rgba(20,184,166,0.15)] hover:-translate-y-3">

                  {/* Card Header Image Snippet */}
                  <div className="h-64 w-full relative overflow-hidden">
                    <div className="absolute inset-0 bg-forest/5 mix-blend-multiply z-10 transition-colors duration-500 group-hover:bg-transparent"></div>
                    <img src={industry.image} alt={industry.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                    {/* Floating icon */}
                    <div className="absolute -bottom-10 left-10 z-20 flex items-center justify-center w-20 h-20 rounded-[1.5rem] bg-card border border-border shadow-md group-hover:scale-110 group-hover:bg-forest transition-all duration-500">
                      <Icon size={32} className="text-forest group-hover:text-white transition-colors duration-500" />
                    </div>
                  </div>

                  <div className="p-10 pt-20 flex-1 flex flex-col">
                    <h3 className="text-3xl font-extrabold tracking-tight text-foreground mb-6 transition-colors group-hover:text-forest">{industry.title}</h3>
                    <p className="text-muted-foreground mb-12 text-lg leading-relaxed flex-1 font-light">{industry.description}</p>

                    <ul className="space-y-5 mb-12">
                      {industry.points.map((point, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-4 text-base font-semibold text-foreground/80">
                          <div className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2 shadow-[0_0_8px_rgba(20,184,166,0.5)]" />
                          {point}
                        </li>
                      ))}
                    </ul>

                    <Button variant="ghost" className="w-full justify-between px-0 hover:bg-transparent hover:text-forest group-hover:text-forest font-bold text-foreground border-t border-border/50 pt-8 rounded-none h-auto text-lg">
                      Explore Solutions <ArrowRight size={24} className="text-primary group-hover:translate-x-2 transition-transform duration-300" />
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 relative overflow-hidden bg-background border-t border-border">
        {/* Match the Hero pattern EXACTLY */}
        <div className="absolute inset-0 dot-pattern opacity-40 z-0 pointer-events-none"></div>

        <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-primary/10 rounded-full blur-[200px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-emerald-300/10 rounded-full blur-[200px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

        <div className="container mx-auto px-6 text-center relative z-10 flex flex-col items-center">
          <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-card border border-border text-primary mb-16 shadow-xl backdrop-blur-sm">
            <Globe2 size={64} strokeWidth={1.5} />
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-[5.5rem] font-extrabold mb-10 tracking-tighter text-foreground leading-[1.05]">Don't See Your Industry?</h2>
          <p className="text-2xl md:text-3xl text-muted-foreground mb-16 max-w-4xl mx-auto text-balance font-light leading-relaxed">
            Our data foundation transcends borders. Let's engineer a cohesive, intelligent strategy uniquely tuned to your specific market dynamics.
          </p>
          <Button size="lg" className="h-[5rem] px-14 text-xl shadow-2xl shadow-forest/10 rounded-full font-extrabold bg-forest text-white hover:bg-forest/90 hover:-translate-y-1 transition-all duration-300 group">
            Start the Conversation
            <ArrowRight size={26} className="ml-4 group-hover:translate-x-2 transition-transform" />
          </Button>
        </div>
      </section>
    </main>
  );
}
