// @ts-nocheck
"use client";

import { Input } from "@/components/ui/Input";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Search, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function BlogControls({
  categories,
  selectedCategory,
  onSelectCategory,
  searchTerm,
  onSearchChange,
}) {
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const scrollContainerRef = useRef(null);
  const mobileScrollContainerRef = useRef(null);

  const [canScrollLeftDesktop, setCanScrollLeftDesktop] = useState(false);
  const [canScrollRightDesktop, setCanScrollRightDesktop] = useState(false);

  const [canScrollLeftMobile, setCanScrollLeftMobile] = useState(false);
  const [canScrollRightMobile, setCanScrollRightMobile] = useState(false);

  // Filter out "All" from categories if it exists to avoid duplication with the manual button
  const filteredCategories = categories.filter((c) => c !== "All");

  const checkScrollDesktop = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setCanScrollLeftDesktop(scrollLeft > 0);
      setCanScrollRightDesktop(
        Math.ceil(scrollLeft) < scrollWidth - clientWidth - 2
      );
    }
  };

  const checkScrollMobile = () => {
    if (mobileScrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        mobileScrollContainerRef.current;
      setCanScrollLeftMobile(scrollLeft > 0);
      setCanScrollRightMobile(
        Math.ceil(scrollLeft) < scrollWidth - clientWidth - 2
      );
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

    window.addEventListener("resize", handleResize);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", handleResize);
    };
  }, [categories]);

  const scrollDesktop = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -250 : 250;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const scrollMobile = (direction) => {
    if (mobileScrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -200 : 200;
      mobileScrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="sticky top-20 z-40 mb-8 w-full">
      <div className="mx-auto w-full max-w-7xl">
        <div className="flex flex-col items-center gap-4 rounded-2xl border border-border/60 bg-background/80 p-2 px-3 shadow-lg backdrop-blur-xl transition-all duration-300 hover:shadow-xl md:flex-row md:p-2.5 md:px-4">
          {/* Search Bar - Expanded visuals on focus */}
          <div
            className={cn(
              "relative w-full transition-all duration-300 ease-out",
              isSearchFocused ? "md:flex-[0.4]" : "md:flex-[0.3]"
            )}
          >
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5">
              <Search
                className={cn(
                  "h-4 w-4 transition-colors duration-200",
                  isSearchFocused ? "text-forest" : "text-foreground/70"
                )}
              />
            </div>
            <Input
              type="text"
              placeholder="Search..."
              className="h-11 w-full rounded-xl border-border/50 bg-muted/40 pl-10 text-sm text-foreground shadow-sm transition-all placeholder:text-foreground/60 hover:bg-muted/60 focus-visible:border-forest/50 focus-visible:bg-background focus-visible:ring-2 focus-visible:ring-forest/30"
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
            />
            {searchTerm && (
              <button
                onClick={() => onSearchChange("")}
                className="absolute inset-y-0 right-3 flex items-center text-foreground/60 transition-colors duration-200 hover:text-forest"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          <div className="mx-1 hidden h-8 w-px shrink-0 bg-border/50 md:mx-2 md:block" />

          {/* Desktop Categories - Scrollable container with arrows */}
          <div className="relative hidden min-w-0 flex-1 items-center pl-1 md:flex">
            {/* Left arrow / fade */}
            <AnimatePresence>
              {canScrollLeftDesktop && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 flex w-24 items-center justify-start bg-gradient-to-r from-background via-background/90 to-transparent"
                >
                  <button
                    onClick={() => scrollDesktop("left")}
                    className="pointer-events-auto ml-1 rounded-full border border-border/50 bg-background p-1.5 text-foreground/80 shadow-md transition-all hover:bg-muted hover:text-foreground hover:shadow-lg"
                    aria-label="Scroll left"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            <div
              ref={scrollContainerRef}
              onScroll={checkScrollDesktop}
              className="no-scrollbar flex w-full flex-nowrap items-center gap-2 overflow-x-auto px-1 [&::-webkit-scrollbar]:hidden"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {/* Manual "All" Button */}
              <button
                key="All"
                onClick={() => onSelectCategory("All")}
                className={cn(
                  "relative shrink-0 select-none whitespace-nowrap rounded-xl px-4 py-2.5 text-sm font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/40 focus-visible:ring-offset-2",
                  selectedCategory === "All"
                    ? "text-forest-foreground"
                    : "text-foreground hover:bg-forest/10 hover:text-forest"
                )}
              >
                {selectedCategory === "All" && (
                  <motion.div
                    layoutId="activeCategory"
                    className="absolute inset-0 cursor-default rounded-xl bg-forest shadow-md"
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
                      "relative shrink-0 select-none whitespace-nowrap rounded-xl px-4 py-2.5 text-sm font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/40 focus-visible:ring-offset-2",
                      selectedCategory === category
                        ? "text-forest-foreground"
                        : "text-foreground hover:bg-forest/10 hover:text-forest"
                    )}
                  >
                    {selectedCategory === category && (
                      <motion.div
                        layoutId="activeCategory"
                        className="absolute inset-0 cursor-default rounded-xl bg-forest shadow-md"
                        transition={{
                          type: "spring",
                          bounce: 0.2,
                          duration: 0.6,
                        }}
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
                  className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 flex w-24 items-center justify-end bg-gradient-to-l from-background via-background/90 to-transparent"
                >
                  <button
                    onClick={() => scrollDesktop("right")}
                    className="pointer-events-auto mr-1 rounded-full border border-border/50 bg-background p-1.5 text-foreground/80 shadow-md transition-all hover:bg-muted hover:text-foreground hover:shadow-lg"
                    aria-label="Scroll right"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Mobile Categories - Scrollable container with arrows */}
          <div className="relative flex w-full min-w-0 md:hidden">
            {/* Left arrow / fade */}
            <AnimatePresence>
              {canScrollLeftMobile && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 flex w-20 items-center justify-start bg-gradient-to-r from-background via-background/90 to-transparent pb-2"
                >
                  <button
                    onClick={() => scrollMobile("left")}
                    className="pointer-events-auto ml-1 rounded-full border border-border/50 bg-background p-1.5 text-foreground/80 shadow-sm transition-colors hover:bg-muted hover:text-foreground"
                    aria-label="Scroll left"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            <div
              ref={mobileScrollContainerRef}
              onScroll={checkScrollMobile}
              className="flex w-full flex-nowrap gap-2 overflow-x-auto px-1 pb-2 [&::-webkit-scrollbar]:hidden"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              <button
                key="All"
                onClick={() => onSelectCategory("All")}
                className={cn(
                  "shrink-0 whitespace-nowrap rounded-full border px-4 py-2.5 text-sm font-medium shadow-sm transition-all duration-200",
                  selectedCategory === "All"
                    ? "scale-105 transform border-forest bg-forest text-forest-foreground shadow-md"
                    : "border-border/60 bg-background text-foreground hover:border-forest/50 hover:bg-forest/5 hover:text-forest"
                )}
              >
                All
              </button>
              {filteredCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => onSelectCategory(cat)}
                  className={cn(
                    "shrink-0 whitespace-nowrap rounded-full border px-4 py-2.5 text-sm font-medium shadow-sm transition-all duration-200",
                    selectedCategory === cat
                      ? "scale-105 transform border-forest bg-forest text-forest-foreground shadow-md"
                      : "border-border/60 bg-background text-foreground hover:border-forest/50 hover:bg-forest/5 hover:text-forest"
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
                  className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 flex w-24 items-center justify-end bg-gradient-to-l from-background via-background/90 to-transparent pb-2"
                >
                  <button
                    onClick={() => scrollMobile("right")}
                    className="pointer-events-auto mr-1 rounded-full border border-border/50 bg-background p-1.5 text-foreground/80 shadow-sm transition-colors hover:bg-muted hover:text-foreground"
                    aria-label="Scroll right"
                  >
                    <ChevronRight className="h-4 w-4" />
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
