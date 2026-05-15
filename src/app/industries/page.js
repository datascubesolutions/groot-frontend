// @ts-nocheck
"use client";

import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { generateBreadcrumbSchema } from "@/lib/seo";
import { motion } from "framer-motion";
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
  ChevronRight,
  Activity
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const caseStudies = [
  {
    category: "Private Equity & M&A",
    title: "3 ERPs to 1 Truth: Monthly Close from 10 Days to 3 Days",
    client: "PE-Backed Portfolio Company",
    impact: "10 Days → 3 Days",
    description: "Groot built a Microsoft Fabric Lakehouse with unified chart of accounts across SAP, NetSuite, and QuickBooks. Automated daily pipelines with full Purview lineage tracking.",
    icon: Database,
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
    code: "CS-01"
  },
  {
    category: "Construction & Fleet",
    title: "15% Reduction in Safety Incidents Through Real-Time Driver Analytics",
    client: "PE-Backed Construction Company",
    impact: "15% Less Incidents",
    description: "Implemented a safety dashboard powered by Microsoft Fabric, Azure Data Factory, and Power BI. Tracked harsh braking and speeding in real-time, enabling proactive driver coaching.",
    icon: Activity,
    image: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=2070&auto=format&fit=crop",
    code: "CS-02"
  },
  {
    category: "Construction & Fleet",
    title: "40% Reduction in Rental Overruns — $180K Prevented in First Quarter",
    client: "Construction Company with Large Fleet",
    impact: "$180K Prevented",
    description: "Implemented a fleet management system on Microsoft Fabric to monitor equipment utilization in real-time. Alerts triggered when equipment approached rental thresholds.",
    icon: TrendingUp,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
    code: "CS-03"
  },
  {
    category: "Construction & Fleet",
    title: "Real-Time Inventory Visibility Across 12 Job Sites — 25% Waste Reduction",
    client: "Construction Company",
    impact: "25% Waste Redux",
    description: "Implemented an asset registry and inventory tracking system using Microsoft Fabric and Power BI. Real-time dashboards showed asset location and maintenance schedules.",
    icon: Search,
    image: "https://images.unsplash.com/photo-1586528116311-ad8ed7c406b9?q=80&w=2070&auto=format&fit=crop",
    code: "CS-04"
  },
  {
    category: "Financial Services",
    title: "Scalable Reporting for 200+ QuickBooks Clients from Single Semantic Model",
    client: "Financial Services Firm",
    impact: "Zero Manual Effort",
    description: "Built a parameterized Power BI semantic model that connects to all 200+ QBO accounts through Microsoft Fabric. Single report template serves all clients with dynamic filtering.",
    icon: Database,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    code: "CS-05"
  },
  {
    category: "Financial Services / Construction",
    title: "Unified Vendor Spend Visibility with Automated Categorization",
    client: "PE-Backed Portfolio Company",
    impact: "90%+ Automated",
    description: "Implemented vendor spend categorization using Microsoft Fabric Notebooks for automated classification. Power BI dashboards showing consolidation opportunities.",
    icon: Search,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    code: "CS-06"
  },
  {
    category: "Financial Services",
    title: "Cash Flow Visibility Through Automated AR Aging Dashboards",
    client: "Construction Company",
    impact: "Proactive Collections",
    description: "Implemented AR Aging Reports using Power BI connected to Microsoft Fabric. Dashboards show outstanding payments by age bucket, customer trends, and priorities.",
    icon: TrendingUp,
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2070&auto=format&fit=crop",
    code: "CS-07"
  },
  {
    category: "Financial Services",
    title: "Sales Strategy Optimized by Identifying Most Profitable Customers",
    client: "Financial Services Firm",
    impact: "Improved Margin",
    description: "Implemented Customer Profitability Reports using Microsoft Fabric and Power BI. Year-to-date contribution margin by customer and segmentation showing high-value accounts.",
    icon: Brain,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    code: "CS-08"
  }
];

const industries = [
  {
    icon: Building2,
    title: "Private Equity & M&A",
    description: "Post-acquisition data integration, portfolio company consolidation, and unified reporting across multiple ERPs. We build Microsoft Fabric foundations designed for rapid onboarding of new acquisitions — first company in 10-12 weeks, subsequent acquisitions in 2-3 weeks.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
    code: "IND-PE",
    url: "/industries/private-equity-ma"
  },
  {
    icon: Factory,
    title: "Construction & Fleet",
    description: "Fleet analytics, equipment utilization tracking, job site inventory management, and safety dashboards. Real-time visibility into assets, fuel consumption, rental costs, and driver behavior on Microsoft Fabric and Power BI.",
    image: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=2070&auto=format&fit=crop",
    code: "IND-CST",
    url: "/industries/construction-fleet"
  },
  {
    icon: TrendingUp,
    title: "Financial Services",
    description: "Multi-client reporting platforms, customer profitability analysis, AR/AP aging dashboards, and vendor spend analytics. Scalable Power BI semantic models that serve hundreds of clients from a single data foundation.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    code: "IND-FS",
    url: "/industries/financial-services"
  },
  {
    icon: Stethoscope,
    title: "Medical Device Manufacturing",
    description: "Production analytics, quality compliance tracking, and supply chain visibility. Real-time monitoring with Azure AI Foundry for anomaly detection and predictive maintenance.",
    image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?q=80&w=2070&auto=format&fit=crop",
    code: "IND-MDM",
    url: "/industries/medical-device"
  },
  {
    icon: Cpu,
    title: "Technology & SaaS",
    description: "Product usage analytics, customer health scoring, and operational dashboards. Microsoft Fabric migrations from Azure Analysis Services and legacy platforms with improved refresh times and governance.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
    code: "IND-TEC",
    url: "/industries/technology-saas"
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

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
      <main className="min-h-screen bg-background pt-20 selection:bg-emerald-500/30">
        <div className="container mx-auto px-6 py-4 relative z-20">
          <Breadcrumb items={[{ label: "Industries", href: "/industries" }]} />
        </div>

        {/* Blueprint Canvas Background */}
        <div className="fixed inset-0 pointer-events-none z-0 opacity-40">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--foreground)/0.08)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--foreground)/0.08)_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>

        {/* Dense Editorial Hero */}
        <section className="relative z-10 pt-10 pb-20">
          <div className="container mx-auto px-6 max-w-[1400px]">
            <div className="border-[4px] border-foreground bg-card shadow-[20px_20px_0px_0px_hsl(var(--emerald-600)/0.2)]">
               <div className="grid grid-cols-1 lg:grid-cols-12 divide-y-[4px] lg:divide-y-0 lg:divide-x-[4px] divide-foreground">
                 
                 {/* Left Text Content */}
                 <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="lg:col-span-8 p-8 md:p-16 relative overflow-hidden bg-background">
                    <div className="absolute right-[-10%] top-0 text-[12rem] font-black leading-none text-muted-foreground/5 select-none pointer-events-none">IND</div>
                    
                    <motion.div variants={fadeIn} className="mb-6">
                      <span className="text-xs font-black uppercase tracking-[0.4em] text-emerald-600 bg-emerald-600/10 px-3 py-1 border border-emerald-600/30">
                        Sector Matrix
                      </span>
                    </motion.div>
                    
                    <motion.h1 variants={fadeIn} className="mb-8 text-[3.5rem] font-black uppercase leading-[0.85] tracking-tighter text-foreground sm:text-[4.5rem] md:text-[6.5rem]">
                      Industries We <span className="text-emerald-600 block">Transform.</span>
                    </motion.h1>

                    <motion.p variants={fadeIn} className="max-w-2xl mb-12 text-xl font-bold leading-relaxed text-muted-foreground border-l-[4px] border-emerald-600 pl-6">
                      Deep domain expertise paired with advanced AI & analytics engineering to master the distinct complexities of your vertical.
                    </motion.p>

                    <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 relative z-10">
                      <div className="relative w-full sm:w-[400px]">
                        <input
                          type="search"
                          placeholder="Search sector protocols..."
                          className="h-16 w-full border-[3px] border-foreground bg-background px-6 pr-16 text-sm font-black uppercase tracking-widest text-foreground outline-none transition-all placeholder:text-muted-foreground/50 focus:border-emerald-600 focus:ring-0"
                        />
                        <div className="absolute right-0 top-0 bottom-0 w-16 border-l-[3px] border-foreground flex items-center justify-center bg-muted/50">
                          <Search size={20} className="text-foreground" />
                        </div>
                      </div>
                    </motion.div>
                 </motion.div>

                 {/* Right Data Grid */}
                 <div className="lg:col-span-4 bg-muted/30 grid grid-cols-2 divide-x-[4px] divide-y-[4px] divide-foreground">
                    <div className="col-span-2 border-b-[4px] border-foreground bg-emerald-600/10 p-6 flex flex-col justify-center items-center text-center">
                       <Activity className="w-12 h-12 text-emerald-600 mb-4" />
                       <span className="text-sm font-black uppercase tracking-widest text-foreground">Global Operations</span>
                       <span className="text-xs font-bold text-muted-foreground mt-2">Active Telemetry</span>
                    </div>
                    
                    {industries.slice(0,4).map((ind, i) => (
                      <div key={i} className={`p-6 flex flex-col items-center justify-center text-center ${i < 2 ? '' : 'border-t-[4px] border-foreground'}`}>
                         <ind.icon className="w-8 h-8 text-foreground/50 mb-3" />
                         <span className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground">{ind.title.split(' ')[0]}</span>
                      </div>
                    ))}
                 </div>
               </div>
            </div>
          </div>
        </section>

        {/* Proven Impact - Dense Blueprint Matrix */}
        <section className="relative z-20 py-20 border-y-[6px] border-foreground bg-foreground">
          <div className="container mx-auto px-6 max-w-[1400px]">
            <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b-[4px] border-background/20 pb-8">
              <div className="max-w-2xl">
                <span className="text-xs font-black uppercase tracking-[0.4em] text-emerald-400 block mb-4">Empirical Results</span>
                <h2 className="text-[3rem] sm:text-[4.5rem] font-black uppercase leading-[0.85] tracking-tighter text-background">
                  Proven Impact.
                </h2>
              </div>
              <p className="max-w-md font-bold text-lg text-background/70 border-l-[3px] border-emerald-400 pl-6">
                Engineering intelligent systems that solve real-world industry bottlenecks.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-[4px] border-[4px] border-background bg-background shadow-[15px_15px_0px_0px_rgba(0,0,0,0.5)]">
               {caseStudies.map((study, idx) => {
                 const Icon = study.icon;
                 // Asymmetric Brutalist layout: first item spans full width and uses flex-row on desktop
                 const isFeatured = idx === 0;
                 return (
                   <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
                     key={idx} className={`bg-card flex flex-col relative group overflow-hidden ${isFeatured ? 'md:col-span-2 lg:flex-row' : ''}`}
                   >
                     {/* Image Header */}
                     <div className={`relative border-foreground bg-black overflow-hidden ${isFeatured ? 'h-64 lg:h-auto lg:w-1/2 lg:border-r-[4px] lg:border-b-0 border-b-[4px]' : 'h-48 sm:h-56 border-b-[4px]'}`}>
                       <Image src={study.image} alt={study.title} fill className="object-cover group-hover:scale-105 transition-all duration-700" />
                       <div className="absolute top-4 left-4 bg-background border-[2px] border-foreground px-3 py-1 text-[10px] font-black uppercase tracking-[0.3em] z-10">
                         {study.code}
                       </div>
                       <div className="absolute bottom-4 right-4 bg-emerald-600 text-white w-12 h-12 flex items-center justify-center border-[2px] border-foreground z-10">
                         <Icon size={20} />
                       </div>
                     </div>
                     {/* Content */}
                     <div className={`p-8 flex flex-col ${isFeatured ? 'lg:w-1/2 justify-center' : 'flex-1'}`}>
                        <span className="text-xs font-black uppercase tracking-widest text-emerald-600 mb-4">{study.category}</span>
                        <h3 className="text-2xl sm:text-4xl font-black uppercase leading-[0.9] tracking-tight mb-6">{study.title}</h3>
                        <p className="text-muted-foreground font-bold leading-relaxed mb-8 text-lg">{study.description}</p>
                        
                        <div className="mt-auto grid grid-cols-2 gap-4 border-t-[3px] border-foreground/10 pt-6">
                           <div>
                             <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground block mb-1">Client</span>
                             <span className="text-sm font-bold text-foreground">{study.client}</span>
                           </div>
                           <div>
                             <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground block mb-1">Impact</span>
                             <span className="text-sm font-black text-emerald-600">{study.impact}</span>
                           </div>
                        </div>
                     </div>
                   </motion.div>
                 );
               })}
            </div>
          </div>
        </section>

        {/* Industry Matrix - Dense Tile Grid */}
        <section className="relative z-30 py-24 bg-background">
          <div className="container mx-auto px-6 max-w-[1400px]">
            <div className="mb-16 text-center max-w-3xl mx-auto border-b-[4px] border-foreground pb-8">
              <span className="text-xs font-black uppercase tracking-[0.4em] text-emerald-600 block mb-4">Vertical Mastery</span>
              <h2 className="text-[3.5rem] md:text-[5rem] font-black uppercase leading-[0.85] tracking-tighter text-foreground mb-6">
                Sector Matrix.
              </h2>
              <p className="font-bold text-lg text-muted-foreground">
                Custom-architected data strategies engineered for the precise dynamics of your industry.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-6 gap-[4px] border-[4px] border-foreground bg-foreground shadow-[20px_20px_0px_0px_hsl(var(--emerald-600)/0.2)]">
               {industries.map((industry, index) => {
                 const Icon = industry.icon;
                 
                 // Neo-Brutalist Bento Sizing - perfectly spans 4 cols on md/lg and 6 cols on xl
                 let spanClass = "col-span-1 md:col-span-2 lg:col-span-2 xl:col-span-2"; // default square-ish
                 if (index === 0) spanClass = "col-span-1 md:col-span-4 lg:col-span-4 xl:col-span-4"; // Wide featured
                 else if (index === 3) spanClass = "col-span-1 md:col-span-4 lg:col-span-4 xl:col-span-4"; // wide featured row 2
                 else if (index === 4) spanClass = "col-span-1 md:col-span-4 lg:col-span-4 xl:col-span-6"; // wide featured row 3
                 
                 return (
                   <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
                     key={index} className={`bg-card flex flex-col group relative overflow-hidden ${spanClass}`}
                   >
                     {/* Top ID bar */}
                     <div className="flex justify-between items-center border-b-[4px] border-foreground bg-muted/40 p-4">
                       <span className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-600">{industry.code}</span>
                       <Icon size={16} className="text-muted-foreground group-hover:text-emerald-600 transition-colors" />
                     </div>

                     {/* Image Header explicitly visible without grayscale */}
                     <div className="relative h-48 sm:h-56 border-b-[4px] border-foreground bg-black overflow-hidden">
                       <Image src={industry.image} alt={industry.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                     </div>

                     {/* Content block */}
                     <div className="relative p-8 pb-12 flex-1 flex flex-col justify-center min-h-[200px]">
                        <div className="relative z-10">
                          <h3 className="text-3xl font-black uppercase tracking-tight leading-[0.9] text-foreground mb-6 group-hover:text-emerald-600 transition-colors">
                            {industry.title}
                          </h3>
                          <p className="text-base font-bold leading-relaxed text-muted-foreground">
                            {industry.description}
                          </p>
                        </div>
                        
                        {/* Hover reveal button */}
                        <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-20 bg-gradient-to-t from-card via-card to-transparent pt-16">
                           <Link href={industry.url} className="inline-flex items-center text-xs font-black uppercase tracking-widest text-emerald-600 border-b-2 border-emerald-600 pb-1">
                              Deploy Protocol <ChevronRight size={14} className="ml-1" />
                           </Link>
                        </div>
                     </div>
                   </motion.div>
                 );
               })}
            </div>
          </div>
        </section>

        {/* Brutalist CTA */}
        <section className="bg-foreground py-24 text-background lg:py-32 border-t-[6px] border-emerald-600 relative overflow-hidden">
          <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 text-[20rem] font-black text-background/5 select-none pointer-events-none">X</div>
          <div className="container mx-auto max-w-5xl px-6 text-center relative z-10">
            <div className="mb-12 inline-flex h-24 w-24 items-center justify-center border-[4px] border-background bg-transparent text-emerald-400">
              <Globe2 size={40} />
            </div>
            <h2 className="mb-8 text-[3rem] font-black uppercase leading-[0.9] tracking-tighter sm:text-[4rem] md:text-[5.5rem]">
              Beyond The Grid.
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-xl font-bold leading-relaxed text-background/80">
              Don't see your sector? Our foundational architectures transcend borders. Let's engineer a bespoke strategy tuned to your domain.
            </p>
            <Link href="/contact">
              <Button
                variant="hero"
                size="lg"
                className="group h-16 rounded-none border-[3px] border-background bg-transparent px-10 text-background shadow-[8px_8px_0px_0px_hsl(var(--background))] transition-all hover:translate-x-[4px] hover:translate-y-[4px] hover:bg-background hover:text-foreground hover:shadow-none"
              >
                <span className="text-sm font-black uppercase tracking-[0.2em]">
                  Initialize Contact
                </span>
              </Button>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
