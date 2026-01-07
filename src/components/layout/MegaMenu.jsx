
import { motion } from "framer-motion";
import {
  Award,
  BarChart,
  Brain,
  Briefcase,
  CheckCircle,
  Clock,
  Database,
  Globe,
  TrendingUp,
  Users
} from "lucide-react";
import Link from "next/link";

const servicesData = [
  {
    title: "Strategy & Advisory",
    href: "/services/strategy-advisory",
    icon: TrendingUp,
    description: "Analytics Roadmap, Data Strategy & Digital Transformation"
  },
  {
    title: "Data Engineering",
    href: "/services/data-engineering",
    icon: Database,
    description: "Cloud Architecture, Pipelines & Data Warehousing"
  },
  {
    title: "Business Intelligence",
    href: "/services/business-intelligence",
    icon: BarChart,
    description: "Dashboards, Visualization & Decision Intelligence"
  },
  {
    title: "AI & Automation",
    href: "/services/ai-automation",
    icon: Brain,
    description: "Machine Learning, NLP & Intelligent Automation"
  },
  {
    title: "Dedicated Resources",
    href: "/services/dedicated-resources",
    icon: Users,
    description: "Staff Augmentation & Offshore Analytics Teams"
  }
];

const aboutData = [
  {
    title: "Who We Are",
    href: "/about/who-we-are",
    icon: Users,
    description: "Our Team, Background & Engineering Philosophy"
  },
  {
    title: "What We Do",
    href: "/about/what-we-do",
    icon: Database,
    description: "End-to-End Analytics & Engineering Services"
  },
  {
    title: "How We Do It",
    href: "/about/how-we-do-it",
    icon: CheckCircle,
    description: "Our Proven Methodology & Delivery Framework"
  },
  {
    title: "Our Story",
    href: "/about/our-story",
    icon: Award,
    description: "From Private Equity Roots to Global Analytics"
  },
  {
    title: "Why Join Us",
    href: "/about/why-join-us",
    icon: TrendingUp,
    description: "Culture, Benefits & Career Growth"
  },
  {
    title: "Careers",
    href: "/about/careers",
    icon: Briefcase, // Note: Need to import Briefcase
    description: "Open Positions & Opportunities"
  }
];

const serviceStats = [
  { label: "Years Of Experience", value: "19+", icon: Clock },
  { label: "Projects Completed", value: "1200+", icon: CheckCircle },
  { label: "Dynamic Individual", value: "250+", icon: Users },
  { label: "Retain Customers", value: "98%", icon: Award },
];

const aboutStats = [
  { label: "Global Offices", value: "5", icon: Globe }, // Need import Globe
  { label: "Team Members", value: "250+", icon: Users },
  { label: "Client Retention", value: "98%", icon: Award },
  { label: "Years Active", value: "19+", icon: Clock },
];

export function MegaMenu({ isOpen, onClose, menuType = "Services" }) {
  const items = menuType === "Services" ? servicesData : aboutData;
  const stats = menuType === "Services" ? serviceStats : aboutStats;
  const title = menuType === "Services" ? "Our Services" : "About Us";

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.2 }}
      className="absolute top-full left-0 w-full bg-background border-t border-border shadow-lg"
      onMouseLeave={onClose}
    >
      <div className="container mx-auto py-8 px-6">
        <div className="flex flex-col lg:flex-row gap-12">

          {/* Items List */}
          <div className="flex-1">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-6">
              {title}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
              {items.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  prefetch={true}
                  className="group flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                  onClick={onClose}
                >
                  <div className="mt-1 p-2 rounded-md bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {item.title}
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-1">
                      {item.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="lg:w-1/3 border-t lg:border-t-0 lg:border-l border-border pt-8 lg:pt-0 lg:pl-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col items-center text-center sm:items-start sm:text-left">
                  <div className="mb-2 p-3 bg-primary/5 rounded-full text-primary">
                    <stat.icon size={24} />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
