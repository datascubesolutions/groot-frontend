// @ts-nocheck
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

  const activeCategory =
    categories?.find((c) => c.slug === selectedSlug) || categories?.[0];

  const title =
    menuType === "Services"
      ? "Our Services"
      : menuType === "Microsoft"
        ? "Microsoft"
        : "About Us";
  const isCategoryMenu = menuType === "Services" || menuType === "Microsoft";

  return (
    <motion.div
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="absolute left-0 top-full z-50 w-full border-t-[2.5px] border-forest bg-background shadow-2xl"
      onMouseLeave={onClose}
    >
      <div className="container mx-auto">
        {isCategoryMenu ? (
          <div className="flex min-h-[280px] flex-col lg:flex-row">
            {/* Sidebar - Categories */}
            <div className="w-full border-r border-border bg-muted/20 py-4 lg:w-1/4">
              <div className="flex w-full flex-col px-3">
                {categories.map((category) => {
                  const isActive = activeCategory.slug === category.slug;
                  return (
                    <div
                      key={category.slug}
                      className={`group mb-0.5 flex cursor-pointer items-center justify-between rounded-xl px-3 py-2.5 transition-all duration-300 ${
                        isActive
                          ? "scale-[1.02] bg-forest text-forest-foreground shadow-[0_6px_20px_hsl(var(--forest)/0.25)]"
                          : "text-foreground/80 hover:bg-foreground/5 hover:text-foreground"
                      }`}
                      onMouseEnter={() => setSelectedSlug(category.slug)}
                    >
                      <span
                        className={`text-sm ${isActive ? "font-bold" : "font-medium"}`}
                      >
                        {category.title}
                      </span>
                      <ChevronRight
                        size={16}
                        className={`transition-all duration-200 ${isActive ? "opacity-100" : "-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-50"}`}
                      />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Middle - Sub-items */}
            <div className="flex w-full flex-col bg-background p-6 lg:w-1/2">
              <div className="mb-5 border-b border-border/50 pb-3">
                <h3 className="mb-1 flex items-center gap-2 text-lg font-extrabold text-foreground">
                  <activeCategory.icon
                    size={20}
                    className="shrink-0 text-forest"
                  />
                  {activeCategory.title}
                </h3>
                <p className="line-clamp-1 text-xs text-muted-foreground/80">
                  {activeCategory.description}
                </p>
              </div>

              <div className="flex flex-1 flex-col">
                {activeCategory.subServices &&
                activeCategory.subServices.length > 0 ? (
                  <div className="grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-2">
                    {activeCategory.subServices.map((sub) => {
                      const subHref = sub.slug
                        ? `${activeCategory.href}/${sub.slug}`
                        : activeCategory.href;
                      return (
                        <Link
                          key={sub.slug || sub.title}
                          href={subHref}
                          onClick={onClose}
                          className="group relative flex flex-col gap-1 overflow-hidden rounded-xl border border-transparent px-3.5 py-3 transition-colors hover:border-border/50 hover:bg-muted/40"
                        >
                          <div className="flex items-center gap-3">
                            <div className="h-2 w-2 shrink-0 rounded-[3px] bg-forest/20 transition-all duration-300 group-hover:rotate-45 group-hover:bg-forest" />
                            <span className="line-clamp-1 text-sm font-bold text-foreground/80 transition-colors group-hover:text-foreground">
                              {sub.title}
                            </span>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                ) : (
                  <div className="flex h-full flex-col items-start justify-center pb-4">
                    <p className="mb-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
                      Discover our comprehensive suite of solutions and
                      frameworks built specifically for {activeCategory.title}.
                    </p>
                    <Link
                      href={activeCategory.href}
                      onClick={onClose}
                      className="group flex items-center gap-2 rounded-lg bg-forest/5 px-4 py-2 text-sm font-bold text-forest transition-colors hover:bg-forest/10"
                    >
                      Explore {activeCategory.title}{" "}
                      <ChevronRight
                        size={16}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </Link>
                  </div>
                )}
              </div>

              {/* View all link bridging the empty bottom space */}
              {activeCategory.subServices &&
                activeCategory.subServices.length > 0 && (
                  <div className="mt-auto pt-6">
                    <Link
                      href={activeCategory.href}
                      onClick={onClose}
                      className="group inline-flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-widest text-forest transition-colors hover:text-forest/80"
                    >
                      Explore all {activeCategory.title}
                      <ChevronRight
                        size={14}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </Link>
                  </div>
                )}
            </div>

            {/* Right - Value Proposition Panel */}
            <div className="flex h-full w-full flex-col border-l border-border bg-gradient-to-b from-muted/20 to-muted/10 p-6 lg:w-1/4">
              {/* CTA Card */}
              <div className="my-auto mb-4 flex flex-col justify-center rounded-2xl border border-border/60 bg-card p-5 shadow-sm transition-shadow hover:shadow-md">
                <h4 className="mb-2 text-sm font-extrabold text-foreground">
                  Free Consultation
                </h4>
                <p className="mb-4 text-xs leading-relaxed text-muted-foreground">
                  Book a 30-minute strategy call. We&apos;ll assess your needs
                  and recommend the right approach.
                </p>
                <Link
                  href="/contact"
                  onClick={onClose}
                  className="flex w-full items-center justify-center rounded-xl bg-forest px-4 py-2.5 text-xs font-bold text-forest-foreground transition-all hover:-translate-y-0.5 hover:bg-forest/90 hover:shadow-lg"
                >
                  Schedule a Call
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex min-h-[280px] flex-col lg:flex-row">
            {/* Left - About header area (same width as Services sidebar) */}
            <div className="flex w-full flex-col justify-center overflow-hidden border-r border-border bg-muted/20 py-4 lg:w-1/4">
              <div className="flex h-full flex-col items-center justify-center px-6 text-center">
                <div className="relative mb-4 flex h-32 w-full items-center justify-center overflow-hidden lg:h-40">
                  <Image
                    src="/svg/Groot%20final%20logo.png"
                    alt="Groot Analytics"
                    fill
                    className="pointer-events-none scale-[2.2] object-contain opacity-80 brightness-0 drop-shadow-md dark:invert-0"
                  />
                </div>
                <h3 className="mb-2 w-full text-left text-[10px] font-bold uppercase tracking-[0.2em] text-forest">
                  {title}
                </h3>
                <p className="w-full text-left text-xs font-semibold leading-relaxed text-muted-foreground">
                  Learn about our mission, vision, and the experts driving data
                  excellence.
                </p>
              </div>
            </div>

            {/* Middle - About links (z-10: stay above any scaled logo bleed from the left column) */}
            <div className="relative z-10 flex w-full flex-col justify-center bg-background p-6 lg:w-1/2">
              <div className="grid grid-cols-1 gap-x-6 gap-y-3 md:grid-cols-2">
                {ABOUT_LINKS.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    prefetch={true}
                    className="group flex items-start gap-3 rounded-xl border border-transparent px-3 py-2.5 transition-colors hover:border-border/50 hover:bg-muted/40"
                    onClick={onClose}
                  >
                    <div className="mt-0.5 shrink-0 rounded-lg bg-forest p-2 text-forest-foreground shadow-sm transition-all group-hover:-translate-y-0.5 group-hover:shadow-md">
                      <item.icon size={18} />
                    </div>
                    <div>
                      <div className="mb-0.5 text-sm font-bold text-foreground transition-colors group-hover:text-forest">
                        {item.title}
                      </div>
                      <p className="line-clamp-2 text-xs leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Right - CTA Card (same as Services) */}
            <div className="flex h-full w-full flex-col border-l border-border bg-gradient-to-b from-muted/20 to-muted/10 p-6 lg:w-1/4">
              <div className="my-auto flex flex-col justify-center rounded-2xl border border-border/60 bg-card p-5 shadow-sm transition-shadow hover:shadow-md">
                <h4 className="mb-2 text-sm font-extrabold text-foreground">
                  Get Started
                </h4>
                <p className="mb-4 text-xs leading-relaxed text-muted-foreground">
                  Ready to transform your data workflow? Let&apos;s discuss how
                  we can help.
                </p>
                <Link
                  href="/contact"
                  onClick={onClose}
                  className="flex w-full items-center justify-center rounded-xl bg-forest px-4 py-2.5 text-xs font-bold text-forest-foreground transition-all hover:-translate-y-0.5 hover:bg-forest/90 hover:shadow-lg"
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
