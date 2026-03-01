"use client";

import {
    ABOUT_LINKS,
    SERVICE_CATEGORIES,
    SOLUTION_CATEGORIES,
} from "@/lib/constants/navigation";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const MENU_CONFIG = {
  Services: { categories: SERVICE_CATEGORIES },
  Microsoft: { categories: SOLUTION_CATEGORIES },
  "About Us": { categories: null },
};

export function MegaMenu({ isOpen, onClose, menuType = "Services" }) {
  const config = MENU_CONFIG[menuType] || MENU_CONFIG.Services;
  const categories = config?.categories ?? SERVICE_CATEGORIES;
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const title = menuType === "Services" ? "Our Services" : menuType === "Microsoft" ? "Microsoft" : "About Us";
  const isCategoryMenu = menuType === "Services" || menuType === "Microsoft";

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.2 }}
      className="absolute top-full left-0 w-full bg-background shadow-2xl z-50"
      style={{ borderTop: "2.5px solid hsl(164, 58%, 28%)" }}
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
                      background: "hsl(164, 58%, 28%)",
                      boxShadow: "0 4px 14px hsl(164, 58%, 28%, 0.35)",
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
                <div className="mb-6 pb-3 border-b border-border/50">
                  <h3 className="text-xl font-bold text-foreground mb-1 flex items-center gap-2">
                    <activeCategory.icon size={22} style={{ color: "hsl(164, 58%, 28%)" }} />
                    {activeCategory.title}
                  </h3>
                  <p className="text-sm text-muted-foreground/80 line-clamp-1">{activeCategory.description}</p>
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
                        <div className="w-1.5 h-1.5 rounded-full shrink-0 transition-colors" style={{ background: "hsl(164, 58%, 28%, 0.5)" }} />
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
                  style={{ background: "hsl(164, 58%, 28%)" }}
                >
                  Schedule a Call
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row min-h-[320px]">
            {/* Left - About header area (same width as Services sidebar) */}
            <div className="w-full lg:w-1/4 border-r border-border py-4" style={{ background: "hsl(160, 25%, 96%)" }}>
              <div className="px-6">
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                  {title}
                </h3>
              </div>
            </div>

            {/* Middle - About links */}
            <div className="w-full lg:w-1/2 p-6 bg-background">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
                {ABOUT_LINKS.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    prefetch={true}
                    className="group flex items-center gap-3 py-2 px-3 rounded-lg hover:bg-muted/40 transition-colors border border-transparent hover:border-border/50"
                    onClick={onClose}
                  >
                    <div className="p-2 rounded-md text-white shrink-0 group-hover:shadow-md transition-all"
                      style={{ background: "hsl(164, 58%, 28%)" }}
                    >
                      <item.icon size={20} />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                        {item.title}
                      </div>
                      <p className="text-xs text-muted-foreground line-clamp-1">
                        {item.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Right - CTA Card (same as Services) */}
            <div className="w-full lg:w-1/4 p-6 border-l border-border flex flex-col" style={{ background: "linear-gradient(180deg, hsl(160, 25%, 96%) 0%, hsl(160, 20%, 98%) 100%)" }}>
              <div className="p-5 rounded-2xl bg-white border border-border/50 shadow-sm">
                <h4 className="text-sm font-bold text-foreground mb-2">Get Started</h4>
                <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
                  Ready to transform your data? Let's discuss how we can help.
                </p>
                <Link
                  href="/contact"
                  onClick={onClose}
                  className="flex items-center justify-center w-full py-2.5 px-4 rounded-lg text-white text-xs font-bold transition-all"
                  style={{ background: "hsl(164, 58%, 28%)" }}
                >
                  Book a Call
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}
