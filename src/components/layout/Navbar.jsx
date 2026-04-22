// @ts-nocheck
"use client";

import { Button } from "@/components/ui/Button";
import { NAV_LINKS, SERVICE_CATEGORIES } from "@/lib/constants/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MegaMenu } from "./MegaMenu";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (label) => {
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled || activeDropdown ? "glass shadow-md" : "bg-transparent"
      }`}
      onMouseLeave={handleMouseLeave}
    >
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <nav className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="z-50 -ml-2 flex items-center gap-2">
            <GrootLogo />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden h-full items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <div
                key={link.label}
                className="relative flex h-full items-center"
                onMouseEnter={() => handleMouseEnter(link.label)}
              >
                <Link
                  href={link.href}
                  className={`group relative flex items-center gap-1 py-2 text-sm font-medium transition-colors duration-200 ${activeDropdown === link.label ? "text-forest" : "text-foreground/80 hover:text-forest"}`}
                >
                  {link.label}
                  {link.hasDropdown && (
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 ${
                        activeDropdown === link.label ? "rotate-180" : ""
                      }`}
                    />
                  )}
                  <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-forest transition-all duration-300 group-hover:w-full" />
                </Link>

                {/* Regular Dropdown for non-MegaMenu links (Microsoft uses MegaMenu like Services) */}
                {link.hasDropdown &&
                  link.label !== "Services" &&
                  link.label !== "About Us" &&
                  link.label !== "Microsoft" &&
                  activeDropdown === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 top-full z-50 w-64 rounded-xl border border-border bg-background py-4 shadow-xl"
                    >
                      {link.subLinks?.map((sub) => (
                        <Link
                          key={sub.label}
                          href={sub.href}
                          className="block px-6 py-2.5 text-sm text-foreground/70 transition-all hover:bg-primary/5 hover:text-primary"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden items-center gap-4 md:flex">
            <Link href="/contact">
              <Button variant="hero" size="default">
                Let&apos;s Connect
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-foreground md:hidden"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mega Menu Dropdown (Services, Microsoft, About Us) */}
      <AnimatePresence>
        {(activeDropdown === "Services" ||
          activeDropdown === "Microsoft" ||
          activeDropdown === "About Us") && (
          <MegaMenu
            isOpen={true}
            onClose={() => setActiveDropdown(null)}
            menuType={activeDropdown}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="glass max-h-[80vh] overflow-hidden overflow-y-auto border-t border-border md:hidden"
          >
            <div className="container mx-auto flex flex-col gap-4 px-6 py-6">
              {NAV_LINKS.map((link) => (
                <div key={link.label} className="flex flex-col">
                  <Link
                    href={link.href}
                    onClick={() =>
                      !link.hasDropdown && setIsMobileMenuOpen(false)
                    }
                    className="flex items-center justify-between py-2 font-medium text-foreground/80 transition-colors hover:text-primary"
                  >
                    {link.label}
                    {link.hasDropdown && <ChevronDown size={16} />}
                  </Link>
                  {link.hasDropdown && (
                    <div className="mb-2 mt-1 flex flex-col gap-2 border-l border-border pl-4">
                      {/* Simplified Services for mobile if needed, or just iterate sublinks */}
                      {/* The original code had a special check for Services to list sub-services differently.
                           However, NAV_LINKS doesn't have subLinks for Services (it has SERVICE_CATEGORIES which are more complex).
                           Navbar currently just shows categories.
                           Wait, NAV_LINKS for 'Services' does NOT have 'subLinks' in my definition?
                           Let's check navigation.js.
                        */}

                      {link.label === "Services" ? (
                        /* Fetching categories from somewhere? No, we should probably add them to NAV_LINKS or handle it here */
                        /* In my previous Navbar code, it hardcoded the list.
                           I should import SERVICE_CATEGORIES here if I want to iterate them,
                           OR rely on subLinks being present if I added them.
                           I did NOT add subLinks to 'Services' in NAV_LINKS in navigation.js.
                           So I need to import SERVICE_CATEGORIES to iterate.
                        */
                        // We will fix this by importing SERVICE_CATEGORIES from constants and iterating
                        <ServicesMobileMenu
                          setIsMobileMenuOpen={setIsMobileMenuOpen}
                        />
                      ) : (
                        link.subLinks?.map((sub) => (
                          <Link
                            key={sub.label}
                            href={sub.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="py-1 text-sm text-foreground/60"
                          >
                            {sub.label}
                          </Link>
                        ))
                      )}
                    </div>
                  )}
                </div>
              ))}
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                <Button variant="hero" className="mt-4 w-full">
                  Let&apos;s Connect
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

// Helper for mobile services to keep main component clean

const ServicesMobileMenu = ({ setIsMobileMenuOpen }) => {
  return (
    <>
      {SERVICE_CATEGORIES.map((category) => (
        <Link
          key={category.slug}
          href={category.href}
          onClick={() => setIsMobileMenuOpen(false)}
          className="py-1 text-sm text-foreground/60"
        >
          {category.title}
        </Link>
      ))}
    </>
  );
};

const GrootLogo = () => (
  <div className="relative h-40 w-auto">
    <Image
      src="/svg/logo.svg"
      alt="Groot Analytics Logo"
      width={500}
      height={180}
      className="h-40 w-auto"
      priority
    />
  </div>
);

export default Navbar;
