"use client";

import { Linkedin, Twitter, Mail } from "lucide-react";

const footerLinks = {
  services: [
    { label: "Data Engineering", href: "#services" },
    { label: "AI & Machine Learning", href: "#services" },
    { label: "Advanced Analytics", href: "#services" },
    { label: "Consulting", href: "#services" },
  ],
  company: [
    { label: "About", href: "#about" },
    { label: "Careers", href: "#" },
    { label: "Insights", href: "#insights" },
    { label: "Contact", href: "#" },
  ],
  resources: [
    { label: "Case Studies", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Documentation", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-charcoal text-birch py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <GrootLogoLight />
            </div>
            <p className="text-birch/70 mb-6 max-w-sm">
              Turning messy data into intelligent decisions. Modern data
              platforms, advanced analytics, and AI-powered solutions.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-birch/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-birch/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-birch/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-birch/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-birch/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-birch/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-birch/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-birch/50 text-sm">
            © {new Date().getFullYear()} Groot Analytics. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-birch/50">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

const GrootLogoLight = () => (
  <svg
    width="80"
    height="28"
    viewBox="0 0 100 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Groot Analytics Logo"
  >
    <g fill="currentColor" className="text-birch">
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

export default Footer;
