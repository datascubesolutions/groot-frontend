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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || activeDropdown ? "glass shadow-md" : "bg-transparent"
        }`}
      onMouseLeave={handleMouseLeave}
    >
      <div className="container mx-auto px-6">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 z-50 -ml-2">
            <GrootLogo />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 h-full">
            {NAV_LINKS.map((link) => (
              <div
                key={link.label}
                className="relative h-full flex items-center"
                onMouseEnter={() => handleMouseEnter(link.label)}
              >
                <Link
                  href={link.href}
                  className={`flex items-center gap-1 text-sm font-medium transition-colors duration-200 relative group py-2
                    ${activeDropdown === link.label ? "text-primary" : "text-foreground/80 hover:text-primary"}`}
                >
                  {link.label}
                  {link.hasDropdown && (
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 ${activeDropdown === link.label ? "rotate-180" : ""
                        }`}
                    />
                  )}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </Link>

                {/* Regular Dropdown for non-MegaMenu links */}
                {link.hasDropdown && link.label !== "Services" && link.label !== "About Us" && activeDropdown === link.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 w-64 bg-background border border-border shadow-xl rounded-xl py-4 z-50"
                  >
                    {link.subLinks?.map((sub) => (
                      <Link
                        key={sub.label}
                        href={sub.href}
                        className="block px-6 py-2.5 text-sm text-foreground/70 hover:text-primary hover:bg-primary/5 transition-all"
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
          <div className="hidden md:flex items-center gap-4">
            <Link href="/contact">
              <Button variant="hero" size="default">
                Let's Connect
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mega Menu Dropdown */}
      <AnimatePresence>
        {(activeDropdown === "Services" || activeDropdown === "About Us") && (
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
            className="md:hidden glass border-t border-border overflow-hidden max-h-[80vh] overflow-y-auto"
          >
            <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <div key={link.label} className="flex flex-col">
                  <Link
                    href={link.href}
                    onClick={() => !link.hasDropdown && setIsMobileMenuOpen(false)}
                    className="text-foreground/80 hover:text-primary font-medium py-2 transition-colors flex items-center justify-between"
                  >
                    {link.label}
                    {link.hasDropdown && <ChevronDown size={16} />}
                  </Link>
                  {link.hasDropdown && (
                    <div className="pl-4 flex flex-col gap-2 border-l border-border mt-1 mb-2">
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
                        <ServicesMobileMenu setIsMobileMenuOpen={setIsMobileMenuOpen} />
                      ) : (
                        link.subLinks?.map((sub) => (
                          <Link
                            key={sub.label}
                            href={sub.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-sm text-foreground/60 py-1"
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
                  Let's Connect
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
      {SERVICE_CATEGORIES.map(category => (
        <Link
          key={category.slug}
          href={category.href}
          onClick={() => setIsMobileMenuOpen(false)}
          className="text-sm text-foreground/60 py-1"
        >
          {category.title}
        </Link>
      ))}
    </>
  )
}

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
