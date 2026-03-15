"use client";

import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { motion } from "framer-motion";
import { Activity, ArrowRight, Brain, Building2, ChevronRight, Map, Sparkles, Users } from "lucide-react";
import Link from "next/link";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
};

export default function ServicesPage() {
  return (
    <main className="pt-20 min-h-screen relative overflow-hidden bg-background">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 inset-x-0 h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute top-[20%] right-[-5%] w-[30%] h-[50%] rounded-full bg-forest/5 blur-[120px]" />
        <div className="absolute inset-0 dot-pattern opacity-50 mask-image-gradient-b" />
      </div>

      <Breadcrumb items={[{ label: "Services", href: "/services" }]} />

      <section className="py-24 relative z-10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-4xl mx-auto text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6 border border-primary/20">
              <Sparkles size={16} /> Data & AI Capabilities
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-foreground to-foreground/70">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              We provide end-to-end data capabilities on <span className="text-primary font-medium">Microsoft Fabric</span> and Azure, from strategy to execution.
            </p>
          </motion.div>

          {/* Bento Grid layout */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {/* Wide Card 1 */}
            <ServiceCard
              icon={Building2}
              title="Build Your Foundation"
              description="Construct robust data platforms, modern lakehouses, seamless integration, and reliable pipelines directly on Microsoft Fabric. Lay the groundwork for the future of your AI capabilities."
              href="/services/build-your-foundation"
              className="md:col-span-2 lg:col-span-2 bg-gradient-to-br from-background to-secondary/30"
              featured
            />

            {/* Standard Card */}
            <ServiceCard
              icon={Map}
              title="Define Your Roadmap"
              description="Understand where you are, where you need to go, and exactly what it takes to get there before investing in Fabric or Power BI."
              href="/services/define-your-roadmap"
              className="lg:col-span-1"
            />

            {/* Wide Card 2 */}
            <ServiceCard
              icon={Activity}
              title="Decision Intelligence"
              description="Transform scattered data into strategic advantage. We design executive analytics, semantic modeling, and governed self-service that empower leaders."
              href="/services/decision-intelligence"
              className="md:col-span-2 lg:col-span-2 bg-gradient-to-br from-background to-primary/5"
              featured
            />

            {/* Standard Card - Coming Soon */}
            <ServiceCard
              icon={Brain}
              title="AI That Ships"
              description="Deploy production-grade Copilot solutions, machine learning, and intelligent automation across your entire business."
              href="#"
              comingSoon={true}
            />

            {/* Standard Card - Coming Soon */}
            <ServiceCard
              icon={Users}
              title="Scale Your Team"
              description="Extend your capabilities with dedicated Microsoft Fabric engineers and high-performing offshore talent centers."
              href="#"
              comingSoon={true}
              className="md:col-span-2 lg:col-span-1"
            />
          </motion.div>
        </div>
      </section>
    </main>
  );
}

function ServiceCard({ icon: Icon, title, description, href, comingSoon, className = "", featured = false }) {
  return (
    <motion.div variants={itemVariants} className={`h-full ${className}`}>
      <Link href={href} prefetch={!comingSoon} className={`group block h-full ${comingSoon ? "cursor-default" : ""}`}>
        <div className={`
          relative h-full overflow-hidden rounded-[2rem] border border-border/50 bg-background/50 backdrop-blur-sm
          transition-all duration-500 hover:border-primary/30 flex flex-col p-8 sm:p-10
          ${comingSoon ? "opacity-70 grayscale" : "hover:shadow-glow hover:-translate-y-1"}
        `}>
          {/* Subtle hover gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {comingSoon && (
            <div className="absolute top-6 right-6 bg-muted border border-border/50 text-muted-foreground text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider backdrop-blur-md">
              Coming Soon
            </div>
          )}

          <div className={`
            w-14 h-14 rounded-2xl flex items-center justify-center mb-8 shrink-0
            transition-all duration-500 group-hover:scale-110 shadow-sm
            ${featured ? "bg-primary text-primary-foreground shadow-primary/20" : "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground"}
          `}>
            <Icon size={28} strokeWidth={featured ? 2.5 : 2} />
          </div>

          <div className="relative z-10 flex-grow flex flex-col">
            <h3 className={`font-bold mb-4 group-hover:text-primary transition-colors duration-300 tracking-tight ${featured ? 'text-3xl' : 'text-2xl'}`}>
              {title}
            </h3>
            <p className="text-muted-foreground leading-relaxed flex-grow text-lg mb-8">
              {description}
            </p>

            {!comingSoon && (
              <div className="mt-auto flex items-center font-semibold text-primary/80 group-hover:text-primary transition-all duration-300">
                <span className="relative overflow-hidden flex items-center gap-2">
                  Explore Service
                  <ArrowRight size={18} className="transform -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 absolute -left-6" />
                  <ChevronRight size={18} className="transform group-hover:translate-x-2 group-hover:opacity-0 transition-all duration-300" />
                </span>
              </div>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
