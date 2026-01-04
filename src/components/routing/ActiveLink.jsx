"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { isActiveRoute } from "@/lib/routes";

/**
 * ActiveLink Component
 * 
 * Enhanced Link component that automatically applies active styles
 * Optimized for performance with memoization and prefetching
 * 
 * @example
 * <ActiveLink href={ROUTES.PUBLIC.HOME} activeClassName="text-primary">
 *   Home
 * </ActiveLink>
 */
export default function ActiveLink({
  href,
  children,
  className = "",
  activeClassName = "text-primary font-semibold",
  exact = false,
  prefetch = true, // Enable prefetching by default for better performance
  ...props
}) {
  const pathname = usePathname();
  
  // Memoize active state calculation to prevent unnecessary re-renders
  const isActive = useMemo(() => {
    return exact
      ? pathname === href
      : isActiveRoute(pathname, href);
  }, [pathname, href, exact]);

  // Memoize className to prevent unnecessary recalculations
  const linkClassName = useMemo(() => {
    return `${className} ${isActive ? activeClassName : ""}`.trim();
  }, [className, isActive, activeClassName]);

  return (
    <Link
      href={href}
      className={linkClassName}
      prefetch={prefetch}
      {...props}
    >
      {children}
    </Link>
  );
}
