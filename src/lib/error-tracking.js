/**
 * Error Tracking Utility
 * Centralized error tracking with Sentry integration
 */

// Fallback error tracker (always available)
const fallbackTracker = {
  captureException: (error, context = {}) => {
    if (typeof window !== "undefined") {
      console.error("Error:", error, context);
    }
  },
  captureMessage: (message, level = "info") => {
    if (typeof window !== "undefined") {
      const logMethod = console[level] || console.error;
      logMethod(message);
    }
  },
  setUser: (user) => {
    if (typeof window !== "undefined") {
      console.log("Set user:", user);
    }
  },
  setContext: (key, context) => {
    if (typeof window !== "undefined") {
      console.log(`Context [${key}]:`, context);
    }
  },
  metrics: {
    distribution: (name, value, options) => {
      if (typeof window !== "undefined") {
        console.log(`Metric [${name}]:`, value, options);
      }
    },
  },
};

let errorTracker = fallbackTracker;
let isInitialized = false;

/**
 * Initialize error tracking (client-side only)
 */
export function initErrorTracking() {
  // Only run on client side
  if (typeof window === "undefined" || isInitialized) {
    return;
  }

  isInitialized = true;

  // Check if Sentry should be enabled
  const sentryDsn = process.env.NEXT_PUBLIC_SENTRY_DSN;
  const environment = process.env.NEXT_PUBLIC_ENV || "development";

  if (sentryDsn && environment !== "development") {
    // Dynamic import for Sentry (optional dependency)
    // Use Function constructor with string concatenation to prevent webpack static analysis
    // This ensures webpack doesn't try to resolve the module at build time
    const loadSentry = async () => {
      try {
        // Build module name at runtime using string concatenation
        // This prevents webpack from statically analyzing the import path
        const sentryPrefix = "@";
        const sentryPackage = "sentry/nextjs";
        const fullModuleName = sentryPrefix + sentryPackage;
        
        // Use Function constructor to create a truly dynamic import
        // Webpack cannot statically analyze this pattern
        const dynamicImport = new Function(
          "modulePath",
          "return import(modulePath)"
        );
        
        const SentryModule = await dynamicImport(fullModuleName).catch(() => null);
        
        if (!SentryModule) {
          throw new Error("Sentry module not available");
        }
        
        // @sentry/nextjs exports both named exports and default
        const Sentry = SentryModule.default || SentryModule;
        
        if (typeof Sentry.init !== "function") {
          throw new Error("Sentry.init is not a function");
        }
        
        Sentry.init({
          dsn: sentryDsn,
          environment,
          tracesSampleRate: environment === "production" ? 0.1 : 1.0,
          integrations: [
            new Sentry.BrowserTracing(),
            new Sentry.Replay({
              maskAllText: true,
              blockAllMedia: true,
            }),
          ],
          beforeSend(event, hint) {
            // Filter out non-production errors in development
            if (environment === "development") {
              console.log("Error tracked:", event);
              return null;
            }
            return event;
          },
        });
        errorTracker = Sentry;
      } catch (error) {
        // Sentry package not installed or failed to load
        // This is expected if Sentry is not installed - fallback to console logging
        if (process.env.NODE_ENV === "development") {
          console.debug("Sentry not available (optional dependency):", error.message || error);
        }
        errorTracker = fallbackTracker;
      }
    };
    
    // Load Sentry asynchronously without blocking
    loadSentry().catch(() => {
      errorTracker = fallbackTracker;
    });
  } else {
    // Use fallback in development or when Sentry DSN is not configured
    errorTracker = fallbackTracker;
  }
}

/**
 * Capture an exception
 */
export function captureException(error, context = {}) {
  try {
    if (errorTracker && typeof errorTracker.captureException === "function") {
      errorTracker.captureException(error, {
        contexts: {
          custom: context,
        },
      });
    } else {
      fallbackTracker.captureException(error, context);
    }
  } catch (e) {
    // Fail silently if error tracking itself fails
    console.error("Error tracking failed:", e);
  }
}

/**
 * Capture a message
 */
export function captureMessage(message, level = "info") {
  try {
    if (errorTracker && typeof errorTracker.captureMessage === "function") {
      errorTracker.captureMessage(message, level);
    } else {
      fallbackTracker.captureMessage(message, level);
    }
  } catch (e) {
    console.error("Error tracking failed:", e);
  }
}

/**
 * Set user context
 */
export function setUser(user) {
  try {
    if (errorTracker && typeof errorTracker.setUser === "function") {
      errorTracker.setUser(user);
    } else {
      fallbackTracker.setUser(user);
    }
  } catch (e) {
    console.error("Error tracking failed:", e);
  }
}

/**
 * Set additional context
 */
export function setContext(key, context) {
  try {
    if (errorTracker && typeof errorTracker.setContext === "function") {
      errorTracker.setContext(key, context);
    } else {
      fallbackTracker.setContext(key, context);
    }
  } catch (e) {
    console.error("Error tracking failed:", e);
  }
}

/**
 * Performance monitoring
 */
export function trackPerformance(name, value, unit = "ms") {
  try {
    if (
      errorTracker &&
      errorTracker.metrics &&
      typeof errorTracker.metrics.distribution === "function"
    ) {
      errorTracker.metrics.distribution(name, value, { unit });
    } else if (fallbackTracker.metrics) {
      fallbackTracker.metrics.distribution(name, value, { unit });
    }
  } catch (e) {
    console.error("Performance tracking failed:", e);
  }
}

// Auto-initialize on client side only
if (typeof window !== "undefined") {
  // Use setTimeout to ensure this runs after module is fully loaded
  if (typeof window.requestIdleCallback !== "undefined") {
    window.requestIdleCallback(() => {
      initErrorTracking();
    });
  } else {
    setTimeout(() => {
      initErrorTracking();
    }, 0);
  }
}
