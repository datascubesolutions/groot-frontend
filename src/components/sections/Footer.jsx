// @ts-nocheck
"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { FOOTER_LINKS } from "@/lib/constants/navigation";
import { Linkedin, Mail, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-charcoal py-12 text-birch md:py-16">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mb-12 grid gap-12 md:mb-16 md:grid-cols-2 md:gap-16 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <ScrollReveal>
              <div className="mb-4 flex items-center gap-2">
                <GrootLogoLight />
              </div>
              <p className="mb-6 max-w-sm text-birch/70 md:mb-8">
                Turning messy data into intelligent decisions. Modern data
                platforms, advanced analytics, and AI-powered solutions.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/company/groot-analytics"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-birch/10 transition-colors hover:bg-primary/20"
                  aria-label="Follow Groot Analytics on LinkedIn"
                >
                  <Linkedin className="h-5 w-5" aria-hidden="true" />
                </a>
                <a
                  href="https://twitter.com/grootanalytics"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-birch/10 transition-colors hover:bg-primary/20"
                  aria-label="Follow Groot Analytics on Twitter / X"
                >
                  <Twitter className="h-5 w-5" aria-hidden="true" />
                </a>
                <a
                  href="mailto:hello@grootanalytics.com"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-birch/10 transition-colors hover:bg-primary/20"
                  aria-label="Email Groot Analytics at hello@grootanalytics.com"
                >
                  <Mail className="h-5 w-5" aria-hidden="true" />
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Links */}
          <div>
            <ScrollReveal delay={0.1}>
              <h4 className="mb-4 font-semibold md:mb-5">Services</h4>
              <ul className="space-y-3">
                {FOOTER_LINKS.services.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-birch/70 transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>

          <div>
            <ScrollReveal delay={0.2}>
              <h4 className="mb-4 font-semibold md:mb-5">Company</h4>
              <ul className="space-y-3">
                {FOOTER_LINKS.company.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-birch/70 transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>

          <div>
            <ScrollReveal delay={0.3}>
              <h4 className="mb-4 font-semibold md:mb-5">Resources</h4>
              <ul className="space-y-3">
                {FOOTER_LINKS.resources.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-birch/70 transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>

        {/* Bottom */}
        <ScrollReveal delay={0.4}>
          <div className="flex flex-col items-center justify-between gap-4 border-t border-birch/10 pt-8 md:flex-row md:gap-6 md:pt-10">
            <p className="text-sm text-birch/50">
              © <span suppressHydrationWarning>{new Date().getFullYear()}</span>{" "}
              Groot Analytics. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-birch/50">
              <Link
                href="/privacy"
                className="transition-colors hover:text-primary"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="transition-colors hover:text-primary"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}

const GrootLogoLight = () => (
  <div className="relative h-12 w-auto">
    <Image
      src="/svg/logo.svg"
      alt="Groot Analytics Logo"
      width={180}
      height={48}
      className="h-12 w-auto opacity-100 brightness-0 invert"
    />
  </div>
);

export default Footer;
