// @ts-nocheck
/**
 * Standardized analytics methods for Google Analytics 4 mapping natively
 * to Enterprise and BigQuery requirements.
 */

// Log the pageview with their URL
export const pageview = (url) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("config", process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
};

// Push standard GA4 custom events
export const trackEvent = (eventName, params = {}) => {
  if (typeof window !== "undefined" && window.dataLayer) {
    window.dataLayer.push({
      event: eventName,
      ...params,
    });
  }
};

// Funnel and general conversion tracking
export const trackConversion = (stepName, params = {}) => {
  if (typeof window !== "undefined" && window.dataLayer) {
    window.dataLayer.push({
      event: "conversion_event",
      step: stepName,
      ...params,
    });
    // Optional standard GA tag (generate_lead, etc.)
    window.gtag?.("event", stepName, params);
  }
};

// Set User Properties
export const setUserProperties = (properties) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("set", "user_properties", properties);
  }
};

// Form submit helper capturing common properties
export const trackFormSubmit = (formType, additionalParams = {}) => {
  trackEvent(`form_submit_${formType}`, additionalParams);
};

// CTA click helper
export const trackCtaClick = (ctaType, location, additionalParams = {}) => {
  trackEvent(`cta_click_${ctaType}`, {
    button_location: location,
    ...additionalParams,
  });
};

// Track specific content views or interactions
export const trackEngagement = (type, params = {}) => {
  trackEvent(type, params);
};
