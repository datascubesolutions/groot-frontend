/**
 * Components Index
 *
 * @fileoverview Centralized export for all components
 * This is the main entry point for importing components throughout the application.
 *
 * @example
 * // Import from centralized location
 * import { Button, Card, HeroSection, ErrorBoundary } from '@/components';
 *
 * // Or import specific category
 * import { Button, Card } from '@/components/ui';
 * import { HeroSection } from '@/components/sections';
 *
 * @module components
 */

// ============================================================================
// UI Components (Primitives)
// ============================================================================
export {
    Button,
    buttonVariants
} from './ui/Button';

export {
    Input
} from './ui/Input';

export {
    Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle
} from './ui/Card';

export {
    Badge,
    badgeVariants
} from './ui/Badge';

export {
    Loading, LoadingDots, LoadingSpinner
} from './ui/Loading';

export {
    default as Container
} from './ui/Container';

// ============================================================================
// Layout Components
// ============================================================================
export * from './layout';

// ============================================================================
// Section Components (Page Sections)
// ============================================================================
export { AboutSection } from './sections/AboutSection';
export { CTASection } from './sections/CTASection';
export { Footer } from './sections/Footer';
export { HeroSection } from './sections/HeroSection';
export { ServicesSection } from './sections/ServicesSection';

// ============================================================================
// Error Components
// ============================================================================
export { default as ErrorBoundary } from './errors/ErrorBoundary';

// ============================================================================
// SEO Components
// ============================================================================
export {
    OrganizationSchema, ServiceSchema, WebsiteSchema
} from './seo/StructuredData';

export {
    Breadcrumbs,
    generateBreadcrumbsFromPath
} from './seo/Breadcrumbs';

// ============================================================================
// Animation Components
// ============================================================================
export * from './animations';

// ============================================================================
// Routing Components
// ============================================================================
export * from './routing';

// ============================================================================
// Feature Components
// ============================================================================
export * from './features';

// ============================================================================
// Icons (Re-exports from Lucide)
// ============================================================================
export * from './icons';
