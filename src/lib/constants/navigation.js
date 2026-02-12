import { Award, Briefcase, CheckCircle, Clock, Cpu, Database, Globe, Layers, TrendingUp, Users } from "lucide-react";
import { SERVICE_CATEGORIES } from "./services";

/** Categories for the Solutions mega menu (same structure as Services). */
export const SOLUTION_CATEGORIES = [
  {
    title: "Solutions Overview",
    slug: "overview",
    href: "/solutions",
    icon: Layers,
    description: "End-to-end data and AI solutions tailored to solve specific business problems.",
    subServices: [
      { title: "Overview", slug: "" },
      { title: "Data Analytics", slug: "data-analytics" },
      { title: "IoT Solutions", slug: "iot" },
      { title: "Mobile Apps", slug: "mobile" },
    ],
  },
  {
    title: "Technologies",
    slug: "technologies",
    href: "/technologies",
    icon: Cpu,
    description: "Platform-agnostic technology stack—cloud, data platforms, and AI tools we partner with.",
    subServices: [
      { title: "React / Next.js", slug: "react" },
      { title: "Node.js", slug: "node" },
      { title: "Python / AI", slug: "python" },
      { title: "Cloud (AWS/Azure)", slug: "cloud" },
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
  { label: "Services", href: "/services", hasDropdown: true },
  { label: "Industries", href: "/industries" },
  {
    label: "Solutions",
    href: "/solutions",
    hasDropdown: true,
    subLinks: [
      { label: "Overview", href: "/solutions" },
      { label: "Data Analytics", href: "/solutions/data-analytics" },
      { label: "IoT Solutions", href: "/solutions/iot" },
      { label: "Mobile Apps", href: "/solutions/mobile" },
      { label: "Technologies", href: "/technologies" },
    ],
  },
  { label: "Our Work", href: "/work" },
  { label: "Blog", href: "/blog" },
  {
    label: "About Us",
    href: "/about",
    hasDropdown: true,
    subLinks: [
      { label: "Who We Are", href: "/about/who-we-are" },
      { label: "What We Do", href: "/about/what-we-do" },
      { label: "How We Do It", href: "/about/how-we-do-it" },
      { label: "Our Story", href: "/about/our-story" },
      { label: "Why Join Us", href: "/about/why-join-us" },
      { label: "Careers", href: "/about/careers" },
      { label: "Contact Us", href: "/contact" },
    ]
  },
];

export const ABOUT_LINKS = [
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
    icon: Briefcase,
    description: "Open Positions & Opportunities"
  },
  {
    title: "Contact Us",
    href: "/contact",
    icon: Users,
    description: "Get in Touch with Our Team"
  }
];

export const FOOTER_LINKS = {
  services: [
    { label: "Data Engineering", href: "/services/data-engineering" },
    { label: "AI & Machine Learning", href: "/services/ai-automation" },
    { label: "Business Intelligence", href: "/services/business-intelligence" },
    { label: "Strategy & Advisory", href: "/services/strategy-advisory" },
  ],
  company: [
    { label: "About Us", href: "/about/who-we-are" },
    { label: "Our Story", href: "/about/our-story" },
    { label: "Careers", href: "/about/careers" },
    { label: "Contact", href: "/contact" },
  ],
  resources: [
    { label: "Our Work", href: "/work" },
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
