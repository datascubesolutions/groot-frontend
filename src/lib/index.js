/**
 * Library Index
 * 
 * @fileoverview Main entry point for all library utilities
 * 
 * @example
 * import { cn, ROUTES, env, generateMetadata } from '@/lib';
 * 
 * @module lib
 */

// Utilities
export { cn } from './utils';

// Routes
export { ROUTES, getRoute, isActiveRoute } from './routes';

// Constants
export { METADATA, CONTAINER_MAX_WIDTH } from './constants';

// Environment
export { env } from './env';

// SEO
export { generateMetadata } from './seo';

// Performance
export {
    measurePerformance,
    lazyLoadImages,
    preloadResource,
    prefetchResource,
    debounce,
    throttle,
    getWebVitals,
} from './performance';

// Error Tracking
export {
    initErrorTracking,
    captureException,
    captureMessage,
    setUser,
    setContext,
    trackPerformance,
} from './error-tracking';

// API
export * from './api';

// Validators
export * from './validators';
