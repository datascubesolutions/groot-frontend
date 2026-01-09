"use client";

import {
  ABOUT_LINKS,
  ABOUT_STATS,
  SERVICE_CATEGORIES,
  SERVICE_STATS
} from "@/lib/constants/navigation";
import { motion } from "framer-motion";
import {
  ChevronRight,
  TrendingUp,
  Users
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function MegaMenu({ isOpen, onClose, menuType = "Services" }) {
  // Initialize with the first category from the constant
  const [activeCategory, setActiveCategory] = useState(SERVICE_CATEGORIES[0]);

  const stats = menuType === "Services" ? SERVICE_STATS : ABOUT_STATS;
  const title = menuType === "Services" ? "Our Services" : "About Us";

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.2 }}
      className="absolute top-full left-0 w-full bg-background border-t border-border shadow-2xl z-50"
      onMouseLeave={onClose}
    >
      <div className="container mx-auto">
        {menuType === "Services" ? (
          <div className="flex flex-col lg:flex-row min-h-[320px]">
            {/* Sidebar - Categories */}
            <div className="w-full lg:w-1/4 bg-muted/30 border-r border-border py-4">
              <div className="flex flex-col w-full px-3">
                {SERVICE_CATEGORIES.map((category) => (
                  <div
                    key={category.slug}
                    className={`flex items-center justify-between px-4 py-3 rounded-lg cursor-pointer transition-all duration-200 mb-1 ${activeCategory.slug === category.slug
                      ? "bg-primary text-primary-foreground shadow-md transform scale-[1.02]"
                      : "text-foreground/70 hover:text-foreground hover:bg-muted/50"
                      }`}
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

            {/* Middle - Sub-services */}
            <div className="w-full lg:w-1/2 p-6 bg-background">
              <div className="h-full flex flex-col">
                <div className="mb-6 pb-3 border-b border-border/50 flex justify-between items-end">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-1 flex items-center gap-2">
                      {/* Icon needs to be rendered as component */}
                      <activeCategory.icon size={22} className="text-primary" />
                      {activeCategory.title}
                    </h3>
                    <p className="text-sm text-muted-foreground/80 line-clamp-1">{activeCategory.description}</p>
                  </div>
                  <Link
                    href={activeCategory.href}
                    onClick={onClose}
                    className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-bold hover:bg-primary/90 transition-all shadow-sm ml-4 shrink-0"
                  >
                    View All <TrendingUp size={14} strokeWidth={2.5} />
                  </Link>
                </div>

                <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                  {activeCategory.subServices.map((sub) => (
                    <Link
                      key={sub.slug}
                      href={`${activeCategory.href}/${sub.slug}`}
                      onClick={onClose}
                      className="group flex items-center gap-3 py-2 px-3 rounded-lg hover:bg-muted/40 transition-colors border border-transparent hover:border-border/50"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors shrink-0" />
                      <span className="text-sm font-medium text-foreground/80 group-hover:text-primary transition-colors line-clamp-1">
                        {sub.title}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Right - Stats */}
            <div className="w-full lg:w-1/4 p-6 border-l border-border bg-muted/10 flex flex-col justify-center">
              <div className="space-y-6">
                {stats.map((stat) => (
                  <div key={stat.label} className="flex gap-4 items-center group">
                    <div className="p-2.5 bg-background shadow-sm rounded-xl text-primary border border-border group-hover:border-primary/50 transition-colors">
                      <stat.icon size={20} strokeWidth={2} />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-foreground leading-none tracking-tight">
                        {stat.value}
                      </div>
                      <div className="text-[11px] text-muted-foreground font-bold uppercase tracking-wider mt-1">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-background bg-muted flex items-center justify-center text-[10px] text-muted-foreground font-bold">
                        <Users size={12} />
                      </div>
                    ))}
                  </div>
                  <div className="text-xs text-muted-foreground font-medium">
                    <span className="font-bold text-foreground">Top-rated</span> support
                  </div>
                </div>
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
                      <div className="mt-1 p-2 rounded-md bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
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

              <div className="lg:w-1/3 border-t lg:border-t-0 lg:border-l border-border pt-8 lg:pt-0 lg:pl-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {stats.map((stat) => (
                    <div key={stat.label} className="flex flex-col items-center text-center sm:items-start sm:text-left">
                      <div className="mb-2 p-3 bg-primary/5 rounded-full text-primary">
                        <stat.icon size={24} />
                      </div>
                      <div className="text-3xl font-bold text-foreground mb-1">
                        {stat.value}
                      </div>
                      <div className="text-sm text-muted-foreground font-medium">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}
