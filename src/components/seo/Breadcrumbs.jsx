"use client";

/**
 * Breadcrumbs Component
 * 
 * @fileoverview Navigation breadcrumbs with structured data support
 * @module components/seo/Breadcrumbs
 */

import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { cn } from '@/lib/utils';
import { generateBreadcrumbSchema } from '@/lib/seo';

/**
 * @typedef {Object} BreadcrumbItem
 * @property {string} name - Display name
 * @property {string} path - URL path
 */

/**
 * @typedef {Object} BreadcrumbsProps
 * @property {BreadcrumbItem[]} items - Breadcrumb items
 * @property {boolean} [showHome=true] - Show home link
 * @property {string} [className] - Additional CSS classes
 * @property {boolean} [includeSchema=true] - Include JSON-LD schema
 */

/**
 * Breadcrumbs navigation component
 * 
 * @param {BreadcrumbsProps} props
 * 
 * @example
 * ```jsx
 * <Breadcrumbs
 *   items={[
 *     { name: 'Services', path: '/services' },
 *     { name: 'Data Engineering', path: '/services/data-engineering' }
 *   ]}
 * />
 * ```
 */
export function Breadcrumbs({
    items,
    showHome = true,
    className,
    includeSchema = true,
}) {
    // Build full breadcrumb list with home
    const breadcrumbItems = showHome
        ? [{ name: 'Home', path: '/' }, ...items]
        : items;

    // Generate schema
    const schema = includeSchema ? generateBreadcrumbSchema(breadcrumbItems) : null;

    return (
        <>
            {/* Structured Data */}
            {schema && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            )}

            {/* Breadcrumb Navigation */}
            <nav
                aria-label="Breadcrumb"
                className={cn('flex items-center space-x-1 text-sm text-muted-foreground', className)}
            >
                <ol className="flex items-center space-x-1">
                    {breadcrumbItems.map((item, index) => {
                        const isLast = index === breadcrumbItems.length - 1;
                        const isFirst = index === 0;

                        return (
                            <li key={item.path} className="flex items-center">
                                {/* Separator */}
                                {!isFirst && (
                                    <ChevronRight className="mx-2 h-4 w-4 flex-shrink-0" aria-hidden="true" />
                                )}

                                {/* Link or Current Page */}
                                {isLast ? (
                                    <span
                                        className="font-medium text-foreground"
                                        aria-current="page"
                                    >
                                        {item.name}
                                    </span>
                                ) : (
                                    <Link
                                        href={item.path}
                                        className={cn(
                                            'flex items-center hover:text-foreground transition-colors',
                                            isFirst && 'text-primary'
                                        )}
                                    >
                                        {isFirst && showHome && (
                                            <Home className="mr-1 h-4 w-4" aria-hidden="true" />
                                        )}
                                        <span>{item.name}</span>
                                    </Link>
                                )}
                            </li>
                        );
                    })}
                </ol>
            </nav>
        </>
    );
}

/**
 * Generate breadcrumb items from pathname
 * 
 * @param {string} pathname - Current pathname (e.g., '/services/data-engineering')
 * @param {Object<string, string>} [labels] - Custom labels for paths
 * @returns {BreadcrumbItem[]}
 * 
 * @example
 * ```jsx
 * const items = generateBreadcrumbsFromPath('/services/data-engineering', {
 *   'data-engineering': 'Data Engineering'
 * });
 * // [{ name: 'Services', path: '/services' }, { name: 'Data Engineering', path: '/services/data-engineering' }]
 * ```
 */
export function generateBreadcrumbsFromPath(pathname, labels = {}) {
    const segments = pathname.split('/').filter(Boolean);
    const items = [];

    segments.forEach((segment, index) => {
        const path = '/' + segments.slice(0, index + 1).join('/');

        // Use custom label or capitalize segment
        const name = labels[segment] || segment
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');

        items.push({ name, path });
    });

    return items;
}

export default Breadcrumbs;
