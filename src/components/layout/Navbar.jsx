"use client";

import { Button } from "@/components/ui/Button";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MegaMenu } from "./MegaMenu";

const navLinks = [
  { label: "Services", href: "/services", hasDropdown: true },
  { label: "Industries", href: "/industries" },
  { label: "Solutions", href: "/solutions" },
  { label: "Technologies", href: "/technologies" },
  { label: "Our Work", href: "/work" },
  {
    label: "About Us",
    href: "/about",
    hasDropdown: true,
    subLinks: [
      { label: "Who We Are", href: "/about/who-we-are" },
      { label: "What We Do", href: "/about/what-we-do" },
      { label: "How We Do It", href: "/about/how-we-do-it" },
      { label: "Our Story", href: "/about/our-story" },
      { label: "Why Join Us", href: "/about/why-join-us" },
      { label: "Careers", href: "/about/careers" },
    ]
  },
];

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
          <Link href="/" prefetch={true} className="flex items-center gap-2 z-50">
            <GrootLogo />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 h-full">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative h-full flex items-center"
                onMouseEnter={() => handleMouseEnter(link.label)}
              >
                <Link
                  href={link.href}
                  prefetch={true}
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
                        prefetch={true}
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
            <Button variant="hero" size="default">
              Let's Connect
            </Button>
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
              {navLinks.map((link) => (
                <div key={link.label} className="flex flex-col">
                  <Link
                    href={link.href}
                    prefetch={true}
                    onClick={() => !link.hasDropdown && setIsMobileMenuOpen(false)}
                    className="text-foreground/80 hover:text-primary font-medium py-2 transition-colors flex items-center justify-between"
                  >
                    {link.label}
                    {link.hasDropdown && <ChevronDown size={16} />}
                  </Link>
                  {link.hasDropdown && (
                    <div className="pl-4 flex flex-col gap-2 border-l border-border mt-1 mb-2">
                      {link.label === "Services" ? (
                        // Simplified Services for mobile
                        ['Strategy & Advisory', 'Data Engineering', 'Business Intelligence', 'AI & Automation', 'Dedicated Resources'].map(s => (
                          <Link
                            key={s}
                            href={`/services/${s.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
                            prefetch={true}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-sm text-foreground/60 py-1"
                          >
                            {s}
                          </Link>
                        ))
                      ) : (
                        link.subLinks?.map((sub) => (
                          <Link
                            key={sub.label}
                            href={sub.href}
                            prefetch={true}
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
              <Button variant="hero" className="mt-4 w-full">
                Let's Connect
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

const GrootLogo = () => (
  <svg
    width="100"
    height="32"
    viewBox="0 0 100 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Groot Analytics Logo"
  >
    {/* Dots forming 'groot' */}
    <g className="text-charcoal" fill="currentColor">
      {/* g */}
      <circle cx="6" cy="10" r="2" />
      <circle cx="12" cy="8" r="2" />
      <circle cx="16" cy="12" r="2" />
      <circle cx="14" cy="18" r="2" />
      <circle cx="8" cy="20" r="2" />
      <circle cx="4" cy="16" r="2" />
      <circle cx="16" cy="24" r="2" />
      <circle cx="10" cy="26" r="2" />

      {/* r */}
      <circle cx="24" cy="12" r="2" />
      <circle cx="24" cy="18" r="2" />
      <circle cx="24" cy="24" r="2" />
      <circle cx="30" cy="10" r="2" />
      <circle cx="34" cy="14" r="2" />

      {/* o */}
      <circle cx="44" cy="10" r="2" />
      <circle cx="50" cy="12" r="2" />
      <circle cx="52" cy="18" r="2" />
      <circle cx="48" cy="24" r="2" />
      <circle cx="42" cy="22" r="2" />
      <circle cx="40" cy="16" r="2" />

      {/* o */}
      <circle cx="62" cy="10" r="2" />
      <circle cx="68" cy="12" r="2" />
      <circle cx="70" cy="18" r="2" />
      <circle cx="66" cy="24" r="2" />
      <circle cx="60" cy="22" r="2" />
      <circle cx="58" cy="16" r="2" />

      {/* t */}
      <circle cx="80" cy="8" r="2" />
      <circle cx="86" cy="8" r="2" />
      <circle cx="83" cy="14" r="2" />
      <circle cx="83" cy="20" r="2" />
      <circle cx="86" cy="26" r="2" />
      <circle cx="90" cy="24" r="2" />
    </g>
  </svg>
);

export default Navbar;
