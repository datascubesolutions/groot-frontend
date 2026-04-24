// @ts-nocheck
import { siteConfig } from "@/config/site.config";

function JsonLd({ schema }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || siteConfig.url;

export function OrganizationSchema() {
  const logoUrl = `${baseUrl}${siteConfig.assets.logoPath}`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${baseUrl}/#organization`,
    name: siteConfig.name,
    url: baseUrl,
    logo: logoUrl,
    ...(siteConfig.alternateNames?.length > 0 && {
      alternateName: siteConfig.alternateNames,
    }),
    description:
      "Data engineering, analytics, and AI solutions for enterprise transformation.",
    email: "contact@grootanalytics.com",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: "contact@grootanalytics.com",
      availableLanguage: ["en"],
    },
  };

  return <JsonLd schema={schema} />;
}

export function WebsiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    name: siteConfig.name,
    url: baseUrl,
    publisher: {
      "@id": `${baseUrl}/#organization`,
    },
    inLanguage: "en",
    ...(siteConfig.alternateNames?.length > 0 && {
      alternateName: siteConfig.alternateNames,
    }),
  };

  return <JsonLd schema={schema} />;
}

export function ServiceSchema({ services = [] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Data Engineering, Analytics, and AI Consulting",
    provider: {
      "@id": `${baseUrl}/#organization`,
    },
    areaServed: {
      "@type": "Place",
      name: "Global",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Data and AI Services",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.name,
          description: service.description,
        },
      })),
    },
  };

  return <JsonLd schema={schema} />;
}

export function SiteNavigationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "SiteNavigationElement",
        "position": 1,
        "name": "About Us",
        "description": "Learn how Groot Analytics helps enterprises modernize data platforms.",
        "url": `${baseUrl}/about`
      },
      {
        "@type": "SiteNavigationElement",
        "position": 2,
        "name": "Services",
        "description": "Data engineering, analytics, and AI implementation services.",
        "url": `${baseUrl}/services`
      },
      {
        "@type": "SiteNavigationElement",
        "position": 3,
        "name": "Solutions",
        "description": "Microsoft Fabric, Power BI, and Copilot solutions.",
        "url": `${baseUrl}/solutions`
      },
      {
        "@type": "SiteNavigationElement",
        "position": 4,
        "name": "Industries",
        "description": "Domain-specific analytics solutions for your industry.",
        "url": `${baseUrl}/industries`
      },
      {
        "@type": "SiteNavigationElement",
        "position": 5,
        "name": "Blog",
        "description": "Expert insights on data stacks and AI implementation.",
        "url": `${baseUrl}/blog`
      },
      {
        "@type": "SiteNavigationElement",
        "position": 6,
        "name": "Contact",
        "description": "Get in touch with our data engineering experts.",
        "url": `${baseUrl}/contact`
      }
    ]
  };

  return <JsonLd schema={schema} />;
}
