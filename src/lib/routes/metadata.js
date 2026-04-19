/**
 * Route metadata map for SEO tags and sitemap generation.
 */
export const ROUTE_METADATA = {
  home: {
    title: "Groot Analytics - Data Engineering & AI Solutions",
    description:
      "Turn messy data into intelligent decisions with modern data engineering, analytics, and AI implementation services.",
    path: "/",
    image: "/og-image.jpg",
    keywords: ["data engineering", "analytics consulting", "enterprise AI"],
    indexable: true,
    priority: 1.0,
    changeFrequency: "weekly",
  },
  about: {
    title: "About Groot Analytics",
    description:
      "Learn how Groot Analytics helps enterprises modernize data platforms and deliver measurable business outcomes with AI.",
    path: "/about",
    image: "/og-image.jpg",
    keywords: ["about groot analytics", "data and ai consulting company"],
    indexable: true,
    priority: 0.8,
    changeFrequency: "monthly",
  },
  careers: {
    title: "Careers at Groot Analytics",
    description:
      "Join Groot Analytics and work on modern data, analytics, and AI projects that power enterprise transformation.",
    path: "/about/careers",
    image: "/og-image.jpg",
    keywords: ["data engineering jobs", "ai consulting careers"],
    indexable: true,
    priority: 0.7,
    changeFrequency: "weekly",
  },
  contact: {
    title: "Contact Groot Analytics",
    description:
      "Talk to Groot Analytics about your data engineering, BI, or AI initiatives and get an expert implementation plan.",
    path: "/contact",
    image: "/og-image.jpg",
    keywords: ["contact analytics consultant", "data engineering consultation"],
    indexable: true,
    priority: 0.8,
    changeFrequency: "monthly",
  },
  services: {
    title: "Data, Analytics, and AI Services",
    description:
      "Explore Groot Analytics services spanning strategy, data foundation, decision intelligence, and AI delivery.",
    path: "/services",
    image: "/og-image.jpg",
    keywords: ["data services", "analytics services", "ai services"],
    indexable: true,
    priority: 0.9,
    changeFrequency: "weekly",
  },
  stackEvaluation: {
    title: "Stack Evaluation Service | Groot Analytics",
    description:
      "Assess your current data stack, uncover architecture gaps, and define a practical modernization roadmap with Groot Analytics.",
    path: "/services/define-your-roadmap/stack-evaluation",
    image: "/og-image.jpg",
    keywords: ["data stack evaluation", "modern data architecture assessment", "analytics modernization roadmap"],
    indexable: true,
    priority: 0.8,
    changeFrequency: "monthly",
  },
  industries: {
    title: "Industry Analytics Solutions",
    description:
      "See how Groot Analytics delivers domain-specific analytics and AI solutions across financial services, healthcare, retail, and more.",
    path: "/industries",
    image: "/og-image.jpg",
    keywords: ["industry analytics solutions", "vertical ai solutions"],
    indexable: true,
    priority: 0.9,
    changeFrequency: "monthly",
  },
  blog: {
    title: "Groot Analytics Blog",
    description:
      "Expert insights on modern data stacks, analytics engineering, and enterprise AI implementation.",
    path: "/blog",
    image: "/og-image.jpg",
    keywords: ["analytics blog", "data engineering insights", "ai strategy"],
    indexable: true,
    priority: 0.8,
    changeFrequency: "daily",
  },
  solutions: {
    title: "Microsoft Data and AI Solutions",
    description:
      "Implement Microsoft Fabric, Power BI, Copilot, and Azure solutions with enterprise-grade architecture and delivery support.",
    path: "/solutions",
    image: "/og-image.jpg",
    keywords: ["microsoft fabric consulting", "power bi consulting"],
    indexable: true,
    priority: 0.8,
    changeFrequency: "monthly",
  },
  technologies: {
    title: "Technologies We Work With",
    description:
      "Discover the cloud, analytics, and AI technologies we use to build scalable data platforms and decision systems.",
    path: "/technologies",
    image: "/og-image.jpg",
    keywords: ["analytics technologies", "cloud data platforms"],
    indexable: true,
    priority: 0.7,
    changeFrequency: "monthly",
  },
  platform: {
    title: "Decision Intelligence Platform | Groot Analytics",
    description:
      "Explore the Groot Analytics decision intelligence platform for faster insight delivery and enterprise-grade analytics outcomes.",
    path: "/platform",
    image: "/og-image.jpg",
    keywords: ["decision intelligence platform", "analytics platform"],
    indexable: true,
    priority: 0.7,
    changeFrequency: "monthly",
  },
  privacy: {
    title: "Privacy Policy | Groot Analytics",
    description:
      "Review how Groot Analytics collects, uses, and protects data across our website and services.",
    path: "/privacy",
    image: "/og-image.jpg",
    keywords: ["privacy policy", "data privacy"],
    indexable: true,
    priority: 0.3,
    changeFrequency: "yearly",
  },
  terms: {
    title: "Terms of Service | Groot Analytics",
    description:
      "Read the terms and conditions governing your use of Groot Analytics website and services.",
    path: "/terms",
    image: "/og-image.jpg",
    keywords: ["terms of service", "website terms"],
    indexable: true,
    priority: 0.3,
    changeFrequency: "yearly",
  },
};

export const getIndexableRoutes = () =>
  Object.values(ROUTE_METADATA)
    .filter((route) => route.indexable)
    .map(({ path, priority, changeFrequency }) => ({
      path,
      priority,
      changeFrequency,
    }));

/**
 * Get route by path
 * @param {string} path - Route path
 * @returns {object|null} Route metadata or null
 */
export const getRouteMetadata = (path) => {
  return Object.values(ROUTE_METADATA).find((route) => route.path === path) || null;
};

/**
 * Check if route should be indexed
 * @param {string} path - Route path
 * @returns {boolean}
 */
export const isIndexable = (path) => {
  return getIndexableRoutes().some((route) => route.path === path);
};
