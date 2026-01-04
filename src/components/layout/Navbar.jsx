"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Solutions", href: "#solutions" },
  { label: "About", href: "#about" },
  { label: "Insights", href: "#insights" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <GrootLogo />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-foreground/80 hover:text-primary font-medium transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="hero" size="default">
              Work with Groot
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

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-border"
          >
            <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-foreground/80 hover:text-primary font-medium py-2 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <Button variant="hero" className="mt-4 w-full">
                Work with Groot
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
