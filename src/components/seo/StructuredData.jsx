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
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${baseUrl}/#organization`,
    name: siteConfig.name,
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
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
