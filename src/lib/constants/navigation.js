// @ts-nocheck
import {
  Award,
  Briefcase,
  CheckCircle,
  Clock,
  Cpu,
  Database,
  Globe,
  Layers,
  TrendingUp,
  Users,
} from "lucide-react";
import { SERVICE_CATEGORIES, SERVICES_ENTRY_HREF } from "./services";

/** Categories for the Solutions mega menu (same structure as Services). */
export const SOLUTION_CATEGORIES = [
  {
    title: "Analytics & Governance",
    slug: "analytics-governance",
    href: "/microsoft/fabric",
    icon: Database,
    description: "Unify, visualize, and govern your entire data estate.",
    subServices: [
      { title: "Microsoft Fabric", slug: "" },
      { title: "Power BI", slug: "../power-bi" },
      { title: "Microsoft Purview", slug: "../purview" },
    ],
  },
  {
    title: "AI & Innovation",
    slug: "ai-innovation",
    href: "/microsoft/copilot",
    icon: Cpu,
    description: "Deploy production-ready AI agents and Copilot experiences.",
    subServices: [
      { title: "Microsoft Copilot", slug: "" },
      { title: "Azure AI Foundry", slug: "../ai-foundry" },
    ],
  },
  {
    title: "Infrastructure & Engineering",
    slug: "infrastructure",
    href: "/microsoft/azure",
    icon: Layers,
    description:
      "Secure, automated foundation for data and analytics workloads.",
    subServices: [
      { title: "Azure Infrastructure", slug: "" },
      { title: "Azure DevOps", slug: "../devops" },
    ],
  },
];

export const SOLUTION_STATS = [
  { label: "Years Of Experience", value: "19+", icon: Clock },
  { label: "Projects Completed", value: "1200+", icon: CheckCircle },
  { label: "Dynamic Individual", value: "200+", icon: Users },
  { label: "Retain Customers", value: "98%", icon: Award },
];

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: SERVICES_ENTRY_HREF, hasDropdown: true },
  { label: "Industries", href: "/industries" },
  {
    label: "Microsoft",
    href: "/microsoft/fabric",
    hasDropdown: true,
    subLinks: [
      { label: "Fabric", href: "/microsoft/fabric" },
      { label: "Power BI", href: "/microsoft/power-bi" },
      { label: "Copilot", href: "/microsoft/copilot" },
      { label: "AI Foundry", href: "/microsoft/ai-foundry" },
      { label: "Purview", href: "/microsoft/purview" },
      { label: "Azure", href: "/microsoft/azure" },
      { label: "DevOps", href: "/microsoft/devops" },
    ],
  },
  { label: "Blog", href: "/blog" },
  {
    label: "About Us",
    href: "/about",
    hasDropdown: true,
    subLinks: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/about/careers" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
];

export const ABOUT_LINKS = [
  {
    title: "About Us",
    href: "/about",
    icon: Users,
    description: "Our Story, Team & Approach",
  },
  {
    title: "Careers",
    href: "/about/careers",
    icon: Briefcase,
    description: "Open Positions & Opportunities",
  },
  {
    title: "Contact Us",
    href: "/contact",
    icon: Globe,
    description: "Get in Touch with Our Team",
  },
];

export const FOOTER_LINKS = {
  services: [
    { label: "Define Your Roadmap", href: "/services/define-your-roadmap" },
    { label: "Build Your Foundation", href: "/services/build-your-foundation" },
    { label: "Decision Intelligence", href: "/services/decision-intelligence" },
    { label: "AI That Ships", href: "/services/ai-that-ships" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Careers", href: "/about/careers" },
    { label: "Contact Us", href: "/contact" },
  ],
  resources: [
    { label: "Industries", href: "/industries" },
    { label: "Solutions", href: "/solutions" },
    { label: "Blog", href: "/blog" },
  ],
};

export const SERVICE_STATS = [
  { label: "Years Of Experience", value: "19+", icon: Clock },
  { label: "Projects Completed", value: "1200+", icon: CheckCircle },
  { label: "Dynamic Individual", value: "200+", icon: Users },
  { label: "Retain Customers", value: "98%", icon: Award },
];

export const ABOUT_STATS = [
  { label: "Global Offices", value: "5", icon: Globe },
  { label: "Team Members", value: "250+", icon: Users },
  { label: "Client Retention", value: "98%", icon: Award },
  { label: "Years Active", value: "19+", icon: Clock },
];

export { SERVICE_CATEGORIES };
