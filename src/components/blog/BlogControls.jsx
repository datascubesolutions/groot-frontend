"use client";

import { Input } from "@/components/ui/Input";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Search, X } from "lucide-react";
import { useState } from "react";

export function BlogControls({ categories, selectedCategory, onSelectCategory, searchTerm, onSearchChange }) {
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  // Filter out "All" from categories if it exists to avoid duplication with the manual button
  const filteredCategories = categories.filter(c => c !== "All");

  return (
    <div className="sticky top-20 z-40 w-full mb-8">
      <div className="w-full max-w-7xl mx-auto">
        <div className="bg-background/80 backdrop-blur-xl border border-border/60 rounded-2xl p-2 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row items-center gap-4">

          {/* Search Bar - Expanded visuals on focus */}
          <div className={cn(
            "relative w-full transition-all duration-300 ease-out",
            isSearchFocused ? "md:flex-[0.4]" : "md:flex-[0.3]"
          )}>
            <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
              <Search className={cn("h-4 w-4 transition-colors duration-200", isSearchFocused ? "text-forest" : "text-foreground/70")} />
            </div>
            <Input
              type="text"
              placeholder="Search..."
              className="pl-10 h-11 w-full rounded-xl border-border/50 bg-muted/40 hover:bg-muted/60 focus-visible:bg-background focus-visible:ring-2 focus-visible:ring-forest/30 focus-visible:border-forest/50 placeholder:text-foreground/60 text-foreground text-sm transition-all shadow-sm"
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
            />
            {searchTerm && (
              <button
                onClick={() => onSearchChange("")}
                className="absolute inset-y-0 right-3 flex items-center text-foreground/60 hover:text-forest transition-colors duration-200"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          <div className="h-8 w-px bg-border/60 hidden md:block mx-1" />

          {/* Desktop Categories - Scrollable container with gradient masks */}
          <div
            className="hidden md:flex flex-1 items-center gap-2 overflow-x-auto no-scrollbar mask-linear-fade [&::-webkit-scrollbar]:hidden"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {/* Manual "All" Button */}
            <button
              key="All"
              onClick={() => onSelectCategory("All")}
              className={cn(
                "relative px-4 py-2.5 text-sm font-medium transition-all duration-200 rounded-xl whitespace-nowrap select-none ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/40 focus-visible:ring-offset-2 shrink-0",
                selectedCategory === "All"
                  ? "text-forest-foreground"
                  : "text-foreground hover:text-forest hover:bg-forest/10"
              )}
            >
              {selectedCategory === "All" && (
                <motion.div
                  layoutId="activeCategory"
                  className="absolute inset-0 bg-forest rounded-xl shadow-md cursor-default"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  style={{ zIndex: -1 }}
                />
              )}
              All
            </button>

            <AnimatePresence mode="popLayout">
              {filteredCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => onSelectCategory(category)}
                  className={cn(
                    "relative px-4 py-2.5 text-sm font-medium transition-all duration-200 rounded-xl whitespace-nowrap select-none ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/40 focus-visible:ring-offset-2 shrink-0",
                    selectedCategory === category
                      ? "text-forest-foreground"
                      : "text-foreground hover:text-forest hover:bg-forest/10"
                  )}
                >
                  {selectedCategory === category && (
                    <motion.div
                      layoutId="activeCategory"
                      className="absolute inset-0 bg-forest rounded-xl shadow-md cursor-default"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      style={{ zIndex: -1 }}
                    />
                  )}
                  {category}
                </button>
              ))}
            </AnimatePresence>
          </div>

          {/* Mobile Category Trigger / View */}
          <div
            className="flex md:hidden w-full overflow-x-auto pb-2 gap-2 mask-linear-fade no-scrollbar [&::-webkit-scrollbar]:hidden"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <button
              key="All"
              onClick={() => onSelectCategory("All")}
              className={cn(
                "whitespace-nowrap px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-200 border shadow-sm shrink-0",
                selectedCategory === "All"
                  ? "bg-forest text-forest-foreground border-forest shadow-md transform scale-105"
                  : "bg-background text-foreground border-border/60 hover:border-forest/50 hover:text-forest hover:bg-forest/5"
              )}
            >
              All
            </button>
            {filteredCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => onSelectCategory(cat)}
                className={cn(
                  "whitespace-nowrap px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-200 border shadow-sm shrink-0",
                  selectedCategory === cat
                    ? "bg-forest text-forest-foreground border-forest shadow-md transform scale-105"
                    : "bg-background text-foreground border-border/60 hover:border-forest/50 hover:text-forest hover:bg-forest/5"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
