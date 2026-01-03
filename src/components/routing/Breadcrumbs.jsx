"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ROUTES } from "@/lib/routes";

/**
 * Breadcrumbs Component
 * 
 * Automatically generates breadcrumbs based on current route
 * 
 * @example
 * <Breadcrumbs />
 */
export default function Breadcrumbs() {
  const pathname = usePathname();
  
  const segments = pathname
    .split("/")
    .filter(Boolean)
    .map((segment, index, array) => {
      const path = "/" + array.slice(0, index + 1).join("/");
      return {
        label: segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, " "),
        path,
        isLast: index === array.length - 1,
      };
    });

  if (segments.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className="mb-4">
      <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
        <li>
          <Link href={ROUTES.MARKETING.HOME} className="hover:text-foreground">
            Home
          </Link>
        </li>
        {segments.map((segment, index) => (
          <li key={segment.path} className="flex items-center">
            <span className="mx-2">/</span>
            {segment.isLast ? (
              <span className="text-foreground font-medium">{segment.label}</span>
            ) : (
              <Link href={segment.path} className="hover:text-foreground">
                {segment.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
