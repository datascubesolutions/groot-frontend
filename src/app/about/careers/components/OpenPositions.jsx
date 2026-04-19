"use client";

import { ArrowRight } from "lucide-react";

export const JOBS = [
  {
    title: "Azure Data Engineer",
    experience: "3+ Years",
    type: "Full-Time",
    location: "Remote",
    desc: "Building data pipelines and infrastructure on Azure and Microsoft Fabric. Data Factory, Lakehouse implementation, source system integrations. 3+ years Azure experience. Strong SQL and Python.",
    subject: "Application: Azure Data Engineer"
  },
  {
    title: "Fabric Data Engineer",
    experience: "2+ Years",
    type: "Full-Time",
    location: "Remote",
    desc: "Microsoft Fabric implementations — Lakehouse, notebooks, pipelines, real-time analytics. 2+ years data engineering. Experience with Fabric, Databricks, or Spark environments.",
    subject: "Application: Fabric Data Engineer"
  },
  {
    title: "Analytics Engineer",
    experience: "3+ Years",
    type: "Full-Time",
    location: "Remote",
    desc: "The layer between raw data and business consumption. Gold layer datasets, transformation logic, data quality, semantic model design. 3+ years analytics engineering. Strong SQL.",
    subject: "Application: Analytics Engineer"
  },
  {
    title: "Power BI Developer",
    experience: "3+ Years",
    type: "Full-Time",
    location: "Remote",
    desc: "Semantic models, DAX, reports that executives actually use. 3+ years Power BI. Strong DAX and data modeling fundamentals. Experience building semantic models, not just reports.",
    subject: "Application: Power BI Developer"
  }
];

const STYLES = {
  section: "py-32 md:py-48 bg-background relative border-y border-border/50 overflow-hidden",
  bgTopRight: "absolute top-0 right-0 w-[1200px] h-[1200px] bg-[radial-gradient(ellipse_at_top_right,hsl(var(--primary)/0.08),transparent_60%)] pointer-events-none",
  bgBottomLeft: "absolute bottom-0 left-[-20%] w-[1000px] h-[1000px] bg-[radial-gradient(circle_at_bottom_left,hsl(var(--forest)/0.05),transparent_60%)] pointer-events-none",
  container: "container mx-auto container-padding max-w-[90rem] relative z-10",
  gridOuter: "grid lg:grid-cols-12 lg:gap-20 items-start relative",
  stickyColumn: "lg:col-span-5 lg:sticky top-40 mb-16 lg:mb-0 hidden lg:flex flex-col",
  stickyCard: "relative p-12 rounded-[3rem] bg-card border border-border shadow-2xl overflow-hidden aspect-square flex flex-col justify-center",
  spinnerBg: "absolute inset-0 z-0 opacity-10 flex items-center justify-center",
  spinner1: "w-[150%] h-[150%] border border-primary rounded-full animate-[spin_60s_linear_infinite]",
  spinner2: "absolute w-[120%] h-[120%] border border-foreground/50 rounded-full animate-[spin_40s_linear_infinite_reverse]",
  spinner3: "absolute w-[90%] h-[90%] border border-dashed border-primary/50 rounded-full animate-[spin_30s_linear_infinite]",
  stickyContent: "relative z-10",
  badgeWrapper: "inline-flex items-center gap-3 mb-8",
  badgeLine: "w-10 h-px bg-primary",
  badgeText: "text-primary font-bold uppercase tracking-[0.2em] text-sm",
  heading: "text-5xl lg:text-7xl font-black tracking-tighter mb-8 text-foreground leading-[1] text-balance drop-shadow-sm",
  headingAccent: "text-transparent bg-clip-text bg-gradient-to-br from-primary via-forest to-foreground",
  paragraph: "text-xl text-muted-foreground font-medium text-balance leading-relaxed mb-10",
  metricsWrapper: "flex items-center gap-6",
  metricNumber: "text-5xl font-black",
  metricDivider: "h-10 w-px bg-border flex-shrink-0",
  metricLabel: "text-sm font-bold text-muted-foreground uppercase tracking-widest",
  listColumn: "lg:col-span-7 flex flex-col gap-8 relative z-10",
  mobileHeader: "lg:hidden mb-12 text-center",
  mobileHeading: "text-5xl font-black tracking-tighter mb-4 text-foreground",
  mobileDesc: "text-lg text-muted-foreground font-medium",
  jobCard: "group block relative p-8 md:p-12 rounded-[2.5rem] bg-card/60 backdrop-blur-md border-[2px] border-border shadow-sm hover:shadow-[12px_12px_0_hsl(var(--forest))] transition-all duration-300 overflow-hidden hover:-translate-y-2 hover:border-forest hover:bg-card",
  jobCardHoverBg: "absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--forest)/0.05),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none",
  jobCardInner: "flex flex-col xl:flex-row xl:items-start justify-between gap-8 relative z-10",
  jobContent: "flex-1 w-full relative",
  pillsWrapper: "flex flex-wrap items-center gap-2 mb-8",
  pillType: "px-5 py-2 rounded-full bg-forest text-forest-foreground tracking-[0.1em] uppercase text-xs font-black shadow-sm",
  pillDefault: "px-5 py-2 rounded-full bg-background border border-border shadow-sm text-foreground tracking-[0.1em] uppercase text-xs font-bold",
  pillExperience: "px-5 py-2 rounded-full bg-background border border-border shadow-sm text-foreground tracking-[0.1em] uppercase text-xs font-bold flex items-center gap-2",
  pulseDot: "w-1.5 h-1.5 rounded-full bg-forest animate-pulse",
  jobTitle: "text-3xl md:text-4xl lg:text-5xl font-black mb-6 text-foreground group-hover:text-forest transition-colors duration-300 tracking-tight leading-[1.05]",
  jobDesc: "text-muted-foreground font-medium text-lg lg:text-xl leading-relaxed max-w-2xl relative z-10 group-hover:text-foreground/80 transition-colors duration-300",
  actionBlock: "relative z-10 shrink-0 mt-4 xl:mt-0 flex flex-row xl:flex-col items-center xl:items-end justify-between xl:justify-start w-full xl:w-auto border-t xl:border-t-0 xl:border-l border-border/50 pt-6 xl:pt-0 xl:pl-8",
  actionText: "text-sm font-black text-muted-foreground uppercase tracking-widest group-hover:text-forest transition-colors xl:mb-12",
  actionButton: "flex items-center justify-center w-16 h-16 rounded-full bg-background border-[2px] border-border text-foreground group-hover:bg-forest group-hover:border-forest group-hover:text-forest-foreground transition-all duration-300",
  actionIcon: "group-hover:translate-x-1 transition-transform"
};

export default function OpenPositions() {
  return (
    <section className={STYLES.section}>
      <div className={STYLES.bgTopRight} aria-hidden="true" />
      <div className={STYLES.bgBottomLeft} aria-hidden="true" />
      
      <div className={STYLES.container}>
        <div className={STYLES.gridOuter}>
          
          <div className={STYLES.stickyColumn}>
            <div className={STYLES.stickyCard}>
              {/* @media (prefers-reduced-motion: reduce) handles animation disable internally via tailwind logic usually, but here we just suppress visually if screen reader */}
              <div className={STYLES.spinnerBg} aria-hidden="true">
                <div className={STYLES.spinner1} />
                <div className={STYLES.spinner2} />
                <div className={STYLES.spinner3} />
              </div>

              <div className={STYLES.stickyContent}>
                <div className={STYLES.badgeWrapper}>
                  <span className={STYLES.badgeLine} aria-hidden="true" />
                  <span className={STYLES.badgeText}>Now Hiring</span>
                </div>
                <h2 className={STYLES.heading}>
                  Open <br aria-hidden="true" />
                  <span className={STYLES.headingAccent}>Positions.</span>
                </h2>
                <p className={STYLES.paragraph}>
                  Join an elite engineering culture building the world's most robust data platforms on the Microsoft stack.
                </p>
                
                <div className={STYLES.metricsWrapper}>
                  <div className="text-foreground">
                    <span className={STYLES.metricNumber}>{JOBS.length}</span>
                  </div>
                  <div className={STYLES.metricDivider} aria-hidden="true" />
                  <p className={STYLES.metricLabel}>Active Roles <br aria-hidden="true" /> Available Now</p>
                </div>
              </div>
            </div>
          </div>

          <div className={STYLES.listColumn}>
            <div className={STYLES.mobileHeader}>
              <h2 className={STYLES.mobileHeading}>Open Positions</h2>
              <p className={STYLES.mobileDesc}>Join an elite engineering culture.</p>
            </div>

            {JOBS.map((job, idx) => (
              <a 
                key={idx} 
                href={`mailto:careers@grootanalytics.com?subject=${job.subject}`}
                className={STYLES.jobCard}
                aria-label={`Apply for the ${job.title} position via email`}
              >
                <div className={STYLES.jobCardHoverBg} aria-hidden="true" />
                
                <div className={STYLES.jobCardInner}>
                  
                  <div className={STYLES.jobContent}>
                    <div className={STYLES.pillsWrapper}>
                      <span className={STYLES.pillType}>{job.type}</span>
                      <span className={STYLES.pillDefault}>{job.location}</span>
                      <span className={STYLES.pillExperience}>
                          <span className={STYLES.pulseDot} aria-hidden="true" /> {job.experience}
                      </span>
                    </div>
                    
                    <h3 className={STYLES.jobTitle}>
                      {job.title}
                    </h3>
                    
                    <p className={STYLES.jobDesc}>
                      {job.desc}
                    </p>
                  </div>
                  
                  <div className={STYLES.actionBlock}>
                    <span className={STYLES.actionText}>Apply Now</span>
                    
                    <div className={STYLES.actionButton} aria-hidden="true">
                      <ArrowRight size={24} strokeWidth={2.5} className={STYLES.actionIcon} />
                    </div>
                  </div>

                </div>
              </a>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
