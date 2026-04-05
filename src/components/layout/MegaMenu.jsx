"use client";

import {
    ABOUT_LINKS,
    SERVICE_CATEGORIES,
    SOLUTION_CATEGORIES,
} from "@/lib/constants/navigation";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const MENU_CONFIG = {
  Services: { categories: SERVICE_CATEGORIES },
  Microsoft: { categories: SOLUTION_CATEGORIES },
  "About Us": { categories: null },
};

export function MegaMenu({ isOpen, onClose, menuType = "Services" }) {
  const config = MENU_CONFIG[menuType] || MENU_CONFIG.Services;
  const categories = config?.categories ?? SERVICE_CATEGORIES;
  
  // Bug fix: use a slug instead of the entire object, 
  // and dynamically resolve activeCategory so we never bleed state across menus.
  const [selectedSlug, setSelectedSlug] = useState(null);
  
  const activeCategory = categories?.find(c => c.slug === selectedSlug) || categories?.[0];

  const title = menuType === "Services" ? "Our Services" : menuType === "Microsoft" ? "Microsoft" : "About Us";
  const isCategoryMenu = menuType === "Services" || menuType === "Microsoft";

  return (
    <motion.div
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="absolute top-full left-0 w-full bg-background shadow-2xl z-50 border-t-[2.5px] border-forest"
      onMouseLeave={onClose}
    >
      <div className="container mx-auto">
        {isCategoryMenu ? (
          <div className="flex flex-col lg:flex-row min-h-[280px]">
            {/* Sidebar - Categories */}
            <div className="w-full lg:w-1/4 border-r border-border py-4 bg-muted/20">
              <div className="flex flex-col w-full px-3">
                {categories.map((category) => {
                  const isActive = activeCategory.slug === category.slug;
                  return (
                    <div
                      key={category.slug}
                      className={`group flex items-center justify-between px-3 py-2.5 rounded-xl cursor-pointer transition-all duration-300 mb-0.5 ${
                        isActive
                          ? "bg-forest text-forest-foreground shadow-[0_6px_20px_hsl(var(--forest)/0.25)] scale-[1.02]"
                          : "text-foreground/80 hover:text-foreground hover:bg-foreground/5"
                      }`}
                      onMouseEnter={() => setSelectedSlug(category.slug)}
                    >
                      <span className={`text-sm ${isActive ? "font-bold" : "font-medium"}`}>
                        {category.title}
                      </span>
                      <ChevronRight
                        size={16}
                        className={`transition-all duration-200 ${isActive ? "opacity-100" : "opacity-0 -translate-x-2 group-hover:opacity-50 group-hover:translate-x-0"}`}
                      />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Middle - Sub-items */}
            <div className="w-full lg:w-1/2 p-6 bg-background flex flex-col">
              <div className="mb-5 pb-3 border-b border-border/50">
                <h3 className="text-lg font-extrabold text-foreground mb-1 flex items-center gap-2">
                  <activeCategory.icon size={20} className="text-forest shrink-0" />
                  {activeCategory.title}
                </h3>
                <p className="text-xs text-muted-foreground/80 line-clamp-1">{activeCategory.description}</p>
              </div>

              <div className="flex-1 flex flex-col">
                {activeCategory.subServices && activeCategory.subServices.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                    {activeCategory.subServices.map((sub) => {
                      const subHref = sub.slug ? `${activeCategory.href}/${sub.slug}` : activeCategory.href;
                      return (
                        <Link
                          key={sub.slug || sub.title}
                          href={subHref}
                          onClick={onClose}
                          className="group flex flex-col gap-1 py-3 px-3.5 rounded-xl hover:bg-muted/40 transition-colors border border-transparent hover:border-border/50 relative overflow-hidden"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-[3px] shrink-0 bg-forest/20 transition-all duration-300 group-hover:bg-forest group-hover:rotate-45" />
                            <span className="text-sm font-bold text-foreground/80 group-hover:text-foreground transition-colors line-clamp-1">
                              {sub.title}
                            </span>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                ) : (
                  <div className="flex flex-col items-start justify-center h-full pb-4">
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed max-w-sm">
                      Discover our comprehensive suite of solutions and frameworks built specifically for {activeCategory.title}.
                    </p>
                    <Link
                      href={activeCategory.href}
                      onClick={onClose}
                      className="text-sm font-bold text-forest flex items-center gap-2 group bg-forest/5 hover:bg-forest/10 px-4 py-2 rounded-lg transition-colors"
                    >
                      Explore {activeCategory.title} <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                )}
              </div>

              {/* View all link bridging the empty bottom space */}
              {activeCategory.subServices && activeCategory.subServices.length > 0 && (
                <div className="mt-auto pt-6">
                  <Link
                    href={activeCategory.href}
                    onClick={onClose}
                    className="inline-flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-widest text-forest hover:text-forest/80 transition-colors group"
                  >
                    Explore all {activeCategory.title}
                    <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              )}
            </div>

            {/* Right - Value Proposition Panel */}
            <div className="w-full lg:w-1/4 p-6 border-l border-border flex flex-col bg-gradient-to-b from-muted/20 to-muted/10 h-full">
              {/* CTA Card */}
              <div className="mb-4 p-5 rounded-2xl bg-card border border-border/60 shadow-sm transition-shadow hover:shadow-md my-auto flex flex-col justify-center">
                <h4 className="text-sm font-extrabold text-foreground mb-2">Free Consultation</h4>
                <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
                  Book a 30-minute strategy call. We'll assess your needs and recommend the right approach.
                </p>
                <Link
                  href="/contact"
                  onClick={onClose}
                  className="flex items-center justify-center w-full py-2.5 px-4 rounded-xl bg-forest text-forest-foreground text-xs font-bold transition-all hover:bg-forest/90 hover:shadow-lg hover:-translate-y-0.5"
                >
                  Schedule a Call
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row min-h-[280px]">
            {/* Left - About header area (same width as Services sidebar) */}
            <div className="w-full lg:w-1/4 border-r border-border py-4 bg-muted/20 flex flex-col justify-center">
              <div className="px-6 flex flex-col justify-center items-center text-center h-full">
                <div className="relative w-full h-32 lg:h-40 mb-4 flex items-center justify-center">
                  <Image 
                    src="/svg/Groot%20final%20logo.png" 
                    alt="Groot Analytics" 
                    fill
                    className="object-contain scale-[2.2] brightness-0 opacity-80 dark:invert-0 drop-shadow-md"
                  />
                </div>
                <h3 className="text-[10px] font-bold text-forest uppercase tracking-[0.2em] mb-2 w-full text-left">
                  {title}
                </h3>
                <p className="text-xs font-semibold text-muted-foreground leading-relaxed w-full text-left">
                  Learn about our mission, vision, and the experts driving data excellence.
                </p>
              </div>
            </div>

            {/* Middle - About links */}
            <div className="w-full lg:w-1/2 p-6 bg-background flex flex-col justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
                {ABOUT_LINKS.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    prefetch={true}
                    className="group flex items-start gap-3 py-2.5 px-3 rounded-xl hover:bg-muted/40 transition-colors border border-transparent hover:border-border/50"
                    onClick={onClose}
                  >
                    <div className="p-2 rounded-lg bg-forest text-forest-foreground shrink-0 shadow-sm group-hover:shadow-md transition-all group-hover:-translate-y-0.5 mt-0.5">
                      <item.icon size={18} />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-foreground group-hover:text-forest transition-colors mb-0.5">
                        {item.title}
                      </div>
                      <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Right - CTA Card (same as Services) */}
            <div className="w-full lg:w-1/4 p-6 border-l border-border flex flex-col bg-gradient-to-b from-muted/20 to-muted/10 h-full">
              <div className="p-5 rounded-2xl bg-card border border-border/60 shadow-sm transition-shadow hover:shadow-md my-auto flex flex-col justify-center">
                <h4 className="text-sm font-extrabold text-foreground mb-2">Get Started</h4>
                <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
                  Ready to transform your data workflow? Let's discuss how we can help.
                </p>
                <Link
                  href="/contact"
                  onClick={onClose}
                  className="flex items-center justify-center w-full py-2.5 px-4 rounded-xl bg-forest text-forest-foreground text-xs font-bold transition-all hover:bg-forest/90 hover:shadow-lg hover:-translate-y-0.5"
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
