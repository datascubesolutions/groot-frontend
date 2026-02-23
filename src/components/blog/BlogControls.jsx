"use client";

import { Input } from "@/components/ui/Input";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Search, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function BlogControls({ categories, selectedCategory, onSelectCategory, searchTerm, onSearchChange }) {
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const scrollContainerRef = useRef(null);
  const mobileScrollContainerRef = useRef(null);

  const [canScrollLeftDesktop, setCanScrollLeftDesktop] = useState(false);
  const [canScrollRightDesktop, setCanScrollRightDesktop] = useState(false);

  const [canScrollLeftMobile, setCanScrollLeftMobile] = useState(false);
  const [canScrollRightMobile, setCanScrollRightMobile] = useState(false);

  // Filter out "All" from categories if it exists to avoid duplication with the manual button
  const filteredCategories = categories.filter(c => c !== "All");

  const checkScrollDesktop = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeftDesktop(scrollLeft > 0);
      setCanScrollRightDesktop(Math.ceil(scrollLeft) < scrollWidth - clientWidth - 2);
    }
  };

  const checkScrollMobile = () => {
    if (mobileScrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = mobileScrollContainerRef.current;
      setCanScrollLeftMobile(scrollLeft > 0);
      setCanScrollRightMobile(Math.ceil(scrollLeft) < scrollWidth - clientWidth - 2);
    }
  };

  useEffect(() => {
    checkScrollDesktop();
    checkScrollMobile();

    const timeoutId = setTimeout(() => {
      checkScrollDesktop();
      checkScrollMobile();
    }, 150);

    const handleResize = () => {
      checkScrollDesktop();
      checkScrollMobile();
    };

    window.addEventListener('resize', handleResize);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', handleResize);
    };
  }, [categories]);

  const scrollDesktop = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -250 : 250;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollMobile = (direction) => {
    if (mobileScrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -200 : 200;
      mobileScrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="sticky top-20 z-40 w-full mb-8">
      <div className="w-full max-w-7xl mx-auto">
        <div className="bg-background/80 backdrop-blur-xl border border-border/60 rounded-2xl p-2 md:p-2.5 px-3 md:px-4 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row items-center gap-4">

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

          <div className="h-8 w-px bg-border/50 hidden md:block mx-1 md:mx-2 shrink-0" />

          {/* Desktop Categories - Scrollable container with arrows */}
          <div className="hidden md:flex flex-1 relative items-center min-w-0 pl-1">
            {/* Left arrow / fade */}
            <AnimatePresence>
              {canScrollLeftDesktop && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background via-background/90 to-transparent z-10 flex items-center justify-start pointer-events-none"
                >
                  <button
                    onClick={() => scrollDesktop('left')}
                    className="p-1.5 ml-1 rounded-full bg-background border border-border/50 text-foreground/80 hover:text-foreground hover:bg-muted shadow-md hover:shadow-lg pointer-events-auto transition-all"
                    aria-label="Scroll left"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            <div
              ref={scrollContainerRef}
              onScroll={checkScrollDesktop}
              className="flex items-center gap-2 overflow-x-auto no-scrollbar [&::-webkit-scrollbar]:hidden w-full flex-nowrap px-1"
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

              {/* Spacer so the last item isn't fully hidden by the right gradient */}
              <div className="w-6 shrink-0" />
            </div>

            {/* Right arrow / fade */}
            <AnimatePresence>
              {canScrollRightDesktop && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background via-background/90 to-transparent flex items-center justify-end pointer-events-none z-10"
                >
                  <button
                    onClick={() => scrollDesktop('right')}
                    className="p-1.5 mr-1 rounded-full bg-background border border-border/50 text-foreground/80 hover:text-foreground hover:bg-muted shadow-md hover:shadow-lg pointer-events-auto transition-all"
                    aria-label="Scroll right"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Mobile Categories - Scrollable container with arrows */}
          <div className="flex md:hidden w-full relative min-w-0">
            {/* Left arrow / fade */}
            <AnimatePresence>
              {canScrollLeftMobile && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background via-background/90 to-transparent z-10 flex items-center justify-start pointer-events-none pb-2"
                >
                  <button
                    onClick={() => scrollMobile('left')}
                    className="p-1.5 ml-1 rounded-full bg-background border border-border/50 text-foreground/80 hover:text-foreground hover:bg-muted shadow-sm pointer-events-auto transition-colors"
                    aria-label="Scroll left"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            <div
              ref={mobileScrollContainerRef}
              onScroll={checkScrollMobile}
              className="flex w-full overflow-x-auto pb-2 gap-2 px-1 [&::-webkit-scrollbar]:hidden flex-nowrap"
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

              {/* Spacer so the last item isn't fully hidden by the right gradient */}
              <div className="w-6 shrink-0" />
            </div>

            {/* Right arrow / fade */}
            <AnimatePresence>
              {canScrollRightMobile && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background via-background/90 to-transparent flex items-center justify-end pointer-events-none z-10 pb-2"
                >
                  <button
                    onClick={() => scrollMobile('right')}
                    className="p-1.5 mr-1 rounded-full bg-background border border-border/50 text-foreground/80 hover:text-foreground hover:bg-muted shadow-sm pointer-events-auto transition-colors"
                    aria-label="Scroll right"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
