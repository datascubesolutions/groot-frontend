"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { isActiveRoute } from "@/lib/routes";

/**
 * ActiveLink Component
 * 
 * Enhanced Link component that automatically applies active styles
 * 
 * @example
 * <ActiveLink href={ROUTES.MARKETING.HOME} activeClassName="text-primary">
 *   Home
 * </ActiveLink>
 */
export default function ActiveLink({
  href,
  children,
  className = "",
  activeClassName = "text-primary font-semibold",
  exact = false,
  ...props
}) {
  const pathname = usePathname();
  const isActive = exact
    ? pathname === href
    : isActiveRoute(pathname, href);

  return (
    <Link
      href={href}
      className={`${className} ${isActive ? activeClassName : ""}`}
      {...props}
    >
      {children}
    </Link>
  );
}
