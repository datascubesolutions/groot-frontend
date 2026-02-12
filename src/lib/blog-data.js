export const BLOG_POSTS = [
    {
        id: "1",
        slug: "future-of-ai-analytics-2024",
        title: "The Future of AI in Enterprise Analytics: 2026 Outlook",
        excerpt: "Discover how generative AI is reshaping the landscape of business intelligence and potential pitfalls to avoid in your adoption strategy.",
        content: `
      <h2>The Generative Shift</h2>
      <p>Artificial Intelligence is no longer just a buzzword; it's the backbone of modern enterprise analytics. As we move into 2024, the integration of Large Language Models (LLMs) with traditional BI tools is creating a new paradigm of "Conversational Analytics".</p>

      <blockquote>
        "The ability to ask your data questions in plain English is democratizing data access across the entire organization."
      </blockquote>

      <h3>Key Trends to Watch</h3>
      <ul>
        <li><strong>Automated Insights:</strong> AI agents that proactively find anomalies.</li>
        <li><strong>Synthetic Data:</strong> Using AI to generate training data for privacy preservation.</li>
        <li><strong>Governance First:</strong> Security and compliance taking center stage in AI deployments.</li>
      </ul>

      <p>In this landscape, companies like Groot are leading the charge by offering a unified platform that combines the robustness of traditional data engineering with the agility of modern AI.</p>
    `,
        category: "Technology",
        author: {
            name: "Dr. Sarah Chen",
            role: "Chief Data Scientist",
            avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop"
        },
        date: "Oct 24, 2023",
        readTime: "5 min read",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2600&auto=format&fit=crop", // Futuristic Robot/AI
        featured: true,
    },
    {
        id: "2",
        slug: "data-maturity-guide",
        title: "A Comprehensive Guide to Assessing Your Data Maturity",
        excerpt: "Is your organization truly data-driven? Learn how to evaluate your current state and build a roadmap for data excellence.",
        content: `
      <p>Data maturity is not just about having a data warehouse; it's about how effectively your organization uses data to drive decision-making.</p>

      <h3>The 5 Stages of Data Maturity</h3>
      <ol>
        <li><strong>Ad-hoc:</strong> Data is siloed and used sporadically.</li>
        <li><strong>Descriptive:</strong> You know what happened (Standard Reporting).</li>
        <li><strong>Diagnostic:</strong> You know why it happened.</li>
        <li><strong>Predictive:</strong> You know what will happen.</li>
        <li><strong>Prescriptive:</strong> You know how to make it happen.</li>
      </ol>

      <p>Moving from one stage to the next requires a strategic mix of technology, people, and process changes.</p>
    `,
        category: "Strategy",
        author: {
            name: "Michael Ross",
            role: "VP of Engineering",
            avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop"
        },
        date: "Oct 18, 2023",
        readTime: "8 min read",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop", // Charts/Data
        featured: false,
    },
    {
        id: "3",
        slug: "optimizing-cloud-costs",
        title: "Optimizing Cloud Data Costs Without Sacrificing Performance",
        excerpt: "Practical strategies for managing your cloud spend while maintaining high-speed query performance for your analytics dashboards.",
        content: "<p>Cloud costs can spiral out of control if not managed properly...</p>",
        category: "Engineering",
        author: {
            name: "David Kim",
            role: "Cloud Architect",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop"
        },
        date: "Oct 12, 2023",
        readTime: "6 min read",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop", // Cloud/Network
        featured: false,
    },
    {
        id: "4",
        slug: "retail-analytics-case-study",
        title: "Case Study: How Retail Giants Predict Consumer Trends",
        excerpt: "An in-depth look at the predictive models used by top retail brands to forecast demand and optimize inventory.",
        content: "<p>In the fast-paced world of retail, anticipating customer needs is everything...</p>",
        category: "Case Studies",
        author: {
            name: "Emily White",
            role: "Product Manager",
            avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop"
        },
        date: "Oct 05, 2023",
        readTime: "4 min read",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2670&auto=format&fit=crop", // Retail Store
        featured: false,
    },
    {
        id: "5",
        slug: "secure-data-sharing",
        title: "Secure Data Sharing in the Age of Privacy Regulations",
        excerpt: "Navigating GDPR, CCPA, and data sharing protocols in a global enterprise environment.",
        content: "<p>Privacy is paramount...</p>",
        category: "Security",
        author: {
            name: "Marcus Johnson",
            role: "Security Officer",
            avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=200&auto=format&fit=crop"
        },
        date: "Sep 28, 2023",
        readTime: "7 min read",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2670&auto=format&fit=crop", // Security/Lock
        featured: false,
    },
    {
        id: "6",
        slug: "real-time-dashboards",
        title: "Building Real-Time Dashboards: Websockets vs Polling",
        excerpt: "Technical deep dive into the pros and cons of different real-time data fetching strategies for frontend applications.",
        content: "<p>When speed matters...</p>",
        category: "Engineering",
        author: {
            name: "Sarah Chen",
            role: "Chief Data Scientist",
            avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop"
        },
        date: "Sep 20, 2023",
        readTime: "9 min read",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop", // Dashboard/Code
        featured: false,
    },
    {
        id: "7",
        slug: "data-governance-essentials",
        title: "Data Governance Essentials for the Modern Enterprise",
        excerpt: "Why data governance is the unsung hero of successful AI implementation and how to establish a framework that works.",
        content: "<p>Data governance is often overlooked...</p>",
        category: "Strategy",
        author: {
            name: "Michael Ross",
            role: "VP of Engineering",
            avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop"
        },
        date: "Sep 15, 2023",
        readTime: "6 min read",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop", // Using a placeholder reuse or similar
        featured: false,
    }
];

export const CATEGORIES = [
    "All",
    "Technology",
    "Strategy",
    "Engineering",
    "Case Studies",
    "Security"
];
