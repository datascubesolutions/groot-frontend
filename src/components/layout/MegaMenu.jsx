"use client";

import {
    ABOUT_LINKS,
    SERVICE_CATEGORIES,
    SOLUTION_CATEGORIES,
} from "@/lib/constants/navigation";
import { motion } from "framer-motion";
import {
    ArrowRight,
    ChevronRight,
    TrendingUp
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const MENU_CONFIG = {
  Services: { categories: SERVICE_CATEGORIES },
  Solutions: { categories: SOLUTION_CATEGORIES },
  "About Us": { categories: null },
};

export function MegaMenu({ isOpen, onClose, menuType = "Services" }) {
  const config = MENU_CONFIG[menuType] || MENU_CONFIG.Services;
  const categories = config?.categories ?? SERVICE_CATEGORIES;
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const title = menuType === "Services" ? "Our Services" : menuType === "Solutions" ? "Our Solutions" : "About Us";
  const isCategoryMenu = menuType === "Services" || menuType === "Solutions";

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.2 }}
      className="absolute top-full left-0 w-full bg-background shadow-2xl z-50"
      style={{ borderTop: "2.5px solid hsl(168, 76%, 48%)" }}
      onMouseLeave={onClose}
    >
      <div className="container mx-auto">
        {isCategoryMenu ? (
          <div className="flex flex-col lg:flex-row min-h-[320px]">
            {/* Sidebar - Categories */}
            <div className="w-full lg:w-1/4 border-r border-border py-4" style={{ background: "hsl(160, 25%, 96%)" }}>
              <div className="flex flex-col w-full px-3">
                {categories.map((category) => (
                  <div
                    key={category.slug}
                    className={`flex items-center justify-between px-4 py-3 rounded-lg cursor-pointer transition-all duration-200 mb-1 ${activeCategory.slug === category.slug
                      ? "text-white shadow-md transform scale-[1.02]"
                      : "text-foreground hover:text-foreground hover:bg-white/60"
                      }`}
                    style={activeCategory.slug === category.slug ? {
                      background: "linear-gradient(135deg, hsl(168, 76%, 46%), hsl(162, 82%, 18%))",
                      boxShadow: "0 4px 14px hsl(168, 76%, 46%, 0.35)",
                    } : {}}
                    onMouseEnter={() => setActiveCategory(category)}
                  >
                    <span className={`text-sm ${activeCategory.slug === category.slug ? "font-bold" : "font-semibold"}`}>
                      {category.title}
                    </span>
                    <ChevronRight
                      size={16}
                      className={`transition-all duration-200 ${activeCategory.slug === category.slug ? "opacity-100" : "opacity-50 group-hover:opacity-100"
                        }`}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Middle - Sub-items */}
            <div className="w-full lg:w-1/2 p-6 bg-background">
              <div className="h-full flex flex-col">
                <div className="mb-6 pb-3 border-b border-border/50 flex justify-between items-end">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-1 flex items-center gap-2">
                      <activeCategory.icon size={22} style={{ color: "hsl(168, 76%, 44%)" }} />
                      {activeCategory.title}
                    </h3>
                    <p className="text-sm text-muted-foreground/80 line-clamp-1">{activeCategory.description}</p>
                  </div>
                  <Link
                    href={activeCategory.href}
                    onClick={onClose}
                    className="flex items-center gap-2 px-4 py-2 rounded-full text-white text-xs font-bold transition-all shadow-md ml-4 shrink-0"
                    style={{ background: "linear-gradient(135deg, hsl(168, 76%, 42%), hsl(162, 82%, 28%))" }}
                  >
                    View All <TrendingUp size={14} strokeWidth={2.5} />
                  </Link>
                </div>

                <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                  {activeCategory.subServices.map((sub) => {
                    const subHref = sub.slug ? `${activeCategory.href}/${sub.slug}` : activeCategory.href;
                    return (
                      <Link
                        key={sub.slug || sub.title}
                        href={subHref}
                        onClick={onClose}
                        className="group flex items-center gap-3 py-2 px-3 rounded-lg hover:bg-muted/40 transition-colors border border-transparent hover:border-border/50"
                      >
                        <div className="w-1.5 h-1.5 rounded-full shrink-0 transition-colors" style={{ background: "hsl(168, 76%, 48%, 0.45)" }} />
                        <span className="text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors line-clamp-1" style={{ '--tw-text-opacity': 1 }}>
                          {sub.title}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right - Value Proposition Panel */}
            <div className="w-full lg:w-1/4 p-6 border-l border-border flex flex-col" style={{ background: "linear-gradient(180deg, hsl(160, 25%, 96%) 0%, hsl(160, 20%, 98%) 100%)" }}>
              {/* CTA Card */}
              <div className="mb-6 p-5 rounded-2xl bg-white border border-border/50 shadow-sm">
                <h4 className="text-sm font-bold text-foreground mb-2">Free Consultation</h4>
                <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
                  Book a 30-minute strategy call. We'll assess your needs and recommend the right approach.
                </p>
                <Link
                  href="/contact"
                  onClick={onClose}
                  className="flex items-center justify-center w-full py-2.5 px-4 rounded-lg text-white text-xs font-bold transition-all"
                  style={{ background: "linear-gradient(135deg, hsl(168, 76%, 42%), hsl(162, 82%, 28%))" }}
                >
                  Schedule a Call
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="container mx-auto py-8 px-6">
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-6">
                  {title}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                  {ABOUT_LINKS.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      prefetch={true}
                      className="group flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                      onClick={onClose}
                    >
                      <div className="mt-1 p-2 rounded-md text-white group-hover:shadow-md transition-all"
                        style={{ background: "linear-gradient(135deg, hsl(168, 76%, 46%), hsl(162, 82%, 20%))" }}
                      >
                        <item.icon size={20} />
                      </div>
                      <div>
                        <div className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {item.title}
                        </div>
                        <p className="text-sm text-muted-foreground line-clamp-1">
                          {item.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="lg:w-1/3 border-t lg:border-t-0 lg:border-l border-border pt-8 lg:pt-0 lg:pl-12 flex flex-col">
                {/* CTA Card */}
                <div className="p-5 rounded-2xl bg-gradient-to-br from-muted/50 to-background border border-border/50 mb-6">
                  <h4 className="text-sm font-bold text-foreground mb-2">Get Started</h4>
                  <p className="text-xs text-muted-foreground mb-4">
                    Ready to transform your data? Let's discuss how we can help.
                  </p>
                  <Link
                    href="/contact"
                    onClick={onClose}
                    className="flex items-center justify-center w-full py-2.5 px-4 rounded-lg text-white text-xs font-bold transition-all"
                    style={{ background: "linear-gradient(135deg, hsl(168, 76%, 42%), hsl(162, 82%, 28%))" }}
                  >
                    Book a Call
                  </Link>
                </div>

                {/* Quick Links */}
                <div className="flex-1">
                  <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3">Quick Links</h4>
                  <div className="space-y-2">
                    {[
                      { label: "Our Work", href: "/work", desc: "View case studies" },
                      { label: "Industries", href: "/industries", desc: "Solutions by sector" },
                      { label: "Contact Us", href: "/contact", desc: "Get in touch" },
                    ].map((link) => (
                      <Link
                        key={link.label}
                        href={link.href}
                        onClick={onClose}
                        className="group flex items-center justify-between p-2.5 rounded-lg hover:bg-muted/50 transition-colors"
                      >
                        <div>
                          <div className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                            {link.label}
                          </div>
                          <div className="text-[10px] text-muted-foreground">{link.desc}</div>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-0.5" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}
