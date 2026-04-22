// @ts-nocheck
"use client";

import { BlogCard } from "@/components/blog/BlogCard";
import { BlogControls } from "@/components/blog/BlogControls";
import { FeaturedPost } from "@/components/blog/FeaturedPost";
import { Button } from "@/components/ui/Button";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState, useTransition } from "react";

const SEARCH_DEBOUNCE_MS = 400;

function buildBlogQuery(params) {
  const searchParams = new URLSearchParams();
  if (params.category && params.category !== "All")
    searchParams.set("category", params.category);
  if (params.q) searchParams.set("q", params.q);
  if (params.page && params.page > 1)
    searchParams.set("page", String(params.page));
  const qs = searchParams.toString();
  return qs ? `?${qs}` : "";
}

export function BlogListingClient({
  allCategories,
  selectedCategory,
  searchTerm,
  currentPage,
  totalPages,
  totalFilteredCount,
  featuredPost,
  paginatedPosts,
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const [localSearch, setLocalSearch] = useState(searchTerm ?? "");
  const debounceRef = useRef(null);

  useEffect(() => {
    startTransition(() => setLocalSearch(searchTerm ?? ""));
  }, [searchTerm]);

  const updateParams = useCallback(
    (updates) => {
      const next = {
        category: updates.category ?? selectedCategory,
        q: updates.q ?? searchTerm,
        page:
          updates.page ??
          (updates.category != null || updates.q != null ? 1 : currentPage),
      };
      startTransition(() => {
        router.push(pathname + buildBlogQuery(next));
      });
    },
    [pathname, router, selectedCategory, searchTerm, currentPage]
  );

  const onSearchChange = useCallback(
    (term) => {
      setLocalSearch(term);
      if (debounceRef.current) clearTimeout(debounceRef.current);
      debounceRef.current = setTimeout(() => {
        debounceRef.current = null;
        // When search is cleared, also reset category to "All" so the user
        // doesn't have to manually clear the category filter.
        const updates = term
          ? { q: term, page: 1 }
          : { q: undefined, category: "All", page: 1 };
        updateParams(updates);
      }, SEARCH_DEBOUNCE_MS);
    },
    [updateParams]
  );

  const showFeatured =
    selectedCategory === "All" &&
    !searchTerm &&
    currentPage === 1 &&
    featuredPost;

  return (
    <>
      <div className="mb-4">
        <BlogControls
          categories={allCategories}
          selectedCategory={selectedCategory}
          onSelectCategory={(cat) => updateParams({ category: cat })}
          searchTerm={localSearch}
          onSearchChange={onSearchChange}
        />
      </div>

      <AnimatePresence mode="wait">
        {showFeatured && (
          <motion.div
            key="featured"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="mb-12 border-b border-border/40 pb-12"
          >
            <FeaturedPost post={featuredPost} />
          </motion.div>
        )}
      </AnimatePresence>

      {(searchTerm || selectedCategory !== "All" || !showFeatured) && (
        <div className="mb-10 flex items-baseline justify-between border-b border-border/40 pb-4">
          <h2 className="text-2xl font-semibold tracking-tight">
            {searchTerm ? `Search: "${searchTerm}"` : selectedCategory}
          </h2>
          <span className="text-sm text-muted-foreground">
            {totalFilteredCount} articles
          </span>
        </div>
      )}

      <div
        className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3"
        aria-busy={isPending}
      >
        <AnimatePresence mode="popLayout">
          {paginatedPosts.map((post, index) => (
            <motion.div
              key={post.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <BlogCard post={post} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {paginatedPosts.length === 0 && (
        <div className="py-32 text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-muted text-muted-foreground">
            <span className="text-2xl">🔍</span>
          </div>
          <h3 className="text-xl font-semibold text-foreground">
            No articles found
          </h3>
          <p className="mt-2 text-muted-foreground">
            Adjust your search or filters to find what you&apos;re looking for.
          </p>
          <Button
            variant="outline"
            className="mt-6"
            onClick={() => updateParams({ category: "All", q: "" })}
          >
            Clear filters
          </Button>
        </div>
      )}

      {totalPages > 1 && (
        <div className="mt-24 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-2xl border border-border/80 bg-card/60 px-3 py-3 shadow-sm backdrop-blur-md sm:gap-3 sm:px-4 sm:py-4">
            <button
              disabled={currentPage <= 1 || isPending}
              onClick={() =>
                updateParams({ page: Math.max(1, currentPage - 1) })
              }
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border/60 bg-background text-muted-foreground shadow-sm transition-all duration-300 hover:border-forest/40 hover:text-forest hover:shadow disabled:opacity-40 sm:h-12 sm:w-12"
            >
              <span className="sr-only">Previous</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                disabled={isPending}
                onClick={() => updateParams({ page })}
                className={`flex h-10 w-10 items-center justify-center rounded-full text-base font-medium shadow-sm transition-all duration-300 sm:h-12 sm:w-12 sm:text-lg ${
                  currentPage === page
                    ? "scale-[1.02] border-transparent bg-forest text-forest-foreground shadow-[0_6px_20px_hsl(var(--forest)/0.4)]"
                    : "border border-border/60 bg-background text-foreground hover:border-forest/40 hover:bg-forest/5 hover:text-forest hover:shadow"
                }`}
              >
                {page}
              </button>
            ))}

            <button
              disabled={currentPage >= totalPages || isPending}
              onClick={() =>
                updateParams({ page: Math.min(totalPages, currentPage + 1) })
              }
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border/60 bg-background text-muted-foreground shadow-sm transition-all duration-300 hover:border-forest/40 hover:text-forest hover:shadow disabled:opacity-40 sm:h-12 sm:w-12"
            >
              <span className="sr-only">Next</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
