/**
 * SEO Utilities
 * Structured data and schema generation
 */

/**
 * Generate Organization schema
 * @param {Object} config - Organization configuration
 * @returns {Object} JSON-LD schema
 */
export const generateOrganizationSchema = (config = {}) => {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://grootanalytics.com';

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": config.name || "Groot Analytics",
    "url": baseUrl,
    "logo": `${baseUrl}/logo.png`,
    "description": config.description || "Modern data, analytics, and AI solutions for enterprise transformation",
    "foundingDate": "2005",
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "value": 250
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": config.city || "Global",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://linkedin.com/company/grootanalytics",
      "https://twitter.com/grootanalytics"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-123-4567",
      "contactType": "Customer Service",
      "email": "contact@grootanalytics.com",
      "availableLanguage": ["English"]
    }
  };
};

/**
 * Generate BreadcrumbList schema
 * @param {Array} items - Breadcrumb items [{name, url}]
 * @returns {Object} JSON-LD schema
 */
export const generateBreadcrumbSchema = (items) => {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://grootanalytics.com';

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `${baseUrl}${item.url}`
    }))
  };
};

/**
 * Generate Service schema
 * @param {Object} service - Service configuration
 * @returns {Object} JSON-LD schema
 */
export const generateServiceSchema = (service) => {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://grootanalytics.com';

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": service.serviceType,
    "provider": {
      "@type": "Organization",
      "name": "Groot Analytics",
      "url": baseUrl
    },
    "name": service.name,
    "description": service.description,
    "areaServed": "Global",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": service.name,
      "itemListElement": service.offerings?.map(offering => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": offering.name,
          "description": offering.description
        }
      })) || []
    }
  };
};

/**
 * Generate JobPosting schema
 * @param {Object} job - Job posting details
 * @returns {Object} JSON-LD schema
 */
export const generateJobPostingSchema = (job) => {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://grootanalytics.com';

  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": job.title,
    "description": job.description,
    "identifier": {
      "@type": "PropertyValue",
      "name": "Groot Analytics",
      "value": job.id
    },
    "datePosted": job.datePosted || new Date().toISOString(),
    "employmentType": job.employmentType || "FULL_TIME",
    "hiringOrganization": {
      "@type": "Organization",
      "name": "Groot Analytics",
      "sameAs": baseUrl,
      "logo": `${baseUrl}/logo.png`
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": job.location || "Remote",
        "addressCountry": "US"
      }
    },
    "baseSalary": job.salary ? {
      "@type": "MonetaryAmount",
      "currency": "USD",
      "value": {
        "@type": "QuantitativeValue",
        "value": job.salary,
        "unitText": "YEAR"
      }
    } : undefined
  };
};

/**
 * Generate WebSite schema with search action
 * @returns {Object} JSON-LD schema
 */
export const generateWebSiteSchema = () => {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://grootanalytics.com';

  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": baseUrl,
    "name": "Groot Analytics",
    "description": "Modern data, analytics, and AI solutions",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${baseUrl}/search?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };
};
