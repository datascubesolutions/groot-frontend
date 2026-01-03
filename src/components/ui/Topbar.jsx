"use client";

/**
 * Topbar Component
 * 
 * @fileoverview Professional navigation topbar with Home, About, Services, and Contact Us links
 * @module components/ui/Topbar
 */

import { memo } from "react";
import { ROUTES } from "@/lib/routes";
import ActiveLink from "@/components/routing/ActiveLink";
import Container from "@/components/ui/Container";
import { cn } from "@/lib/utils";

/**
 * @typedef {Object} TopbarProps
 * @property {string} [className] - Additional CSS classes
 */

function Topbar({ className = "" }) {
  const baseStyles = "sticky top-0 z-50 w-full bg-white dark:bg-gray-950 backdrop-blur-lg border-b-2 border-gray-200 dark:border-gray-800 shadow-lg";

  const navLinkBaseStyles = "relative inline-flex items-center justify-center px-5 py-2.5 text-base font-semibold text-gray-800 dark:text-gray-100 transition-all duration-300 rounded-lg hover:text-[#22c55e] dark:hover:text-[#22c55e] hover:bg-gray-50 dark:hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-[#22c55e] focus:ring-offset-2 whitespace-nowrap";

  return (
    <header className={cn(baseStyles, className)}>
      <Container className="px-8 sm:px-12 lg:px-16 max-w-[1400px]">
        <nav className="flex items-center justify-between h-20 w-full py-0">
          {/* Logo/Brand Section */}
          <div className="flex items-center shrink-0">
            <ActiveLink
              href={ROUTES.MARKETING.HOME}
              className="group relative flex items-center py-2"
              aria-label="Groot Home"
            >
              <span className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-[#22c55e] via-[#16a34a] to-[#15803d] bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 whitespace-nowrap">
                Groot
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-[#22c55e] to-[#16a34a] group-hover:w-full transition-all duration-300 ease-out rounded-full"></span>
            </ActiveLink>
          </div>

          {/* Navigation Links Section */}
          <div className="hidden md:flex items-center gap-8 shrink-0">
            <ActiveLink
              href={ROUTES.MARKETING.HOME}
              className={navLinkBaseStyles}
              activeClassName="text-[#22c55e] dark:text-[#22c55e] font-semibold bg-[#22c55e]/10 dark:bg-[#22c55e]/20"
            >
              Home
            </ActiveLink>
            <ActiveLink
              href={ROUTES.MARKETING.ABOUT}
              className={navLinkBaseStyles}
              activeClassName="text-[#22c55e] dark:text-[#22c55e] font-semibold bg-[#22c55e]/10 dark:bg-[#22c55e]/20"
            >
              About
            </ActiveLink>
            <ActiveLink
              href={ROUTES.MARKETING.SERVICES}
              className={navLinkBaseStyles}
              activeClassName="text-[#22c55e] dark:text-[#22c55e] font-semibold bg-[#22c55e]/10 dark:bg-[#22c55e]/20"
            >
              Services
            </ActiveLink>
            <ActiveLink
              href={ROUTES.MARKETING.CONTACT}
              className="relative inline-flex items-center justify-center px-8 py-3 text-base font-bold text-white bg-gradient-to-r from-[#22c55e] to-[#16a34a] rounded-xl hover:from-[#16a34a] hover:to-[#15803d] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#22c55e] focus:ring-offset-2 whitespace-nowrap"
            >
              Contact Us
            </ActiveLink>
          </div>

          {/* Mobile Menu Button (for future mobile menu) */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-200 hover:text-[#22c55e] hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-[#22c55e] focus:ring-offset-2 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </nav>
      </Container>
    </header>
  );
}

export default memo(Topbar);

