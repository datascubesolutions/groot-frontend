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
  if (params.page && params.page > 1) searchParams.set("page", String(params.page));
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
    setLocalSearch(searchTerm ?? "");
  }, [searchTerm]);

  const updateParams = useCallback(
    (updates) => {
      const next = {
        category: updates.category ?? selectedCategory,
        q: updates.q ?? searchTerm,
        page: updates.page ?? (updates.category != null || updates.q != null ? 1 : currentPage),
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
          <div className="mx-auto h-16 w-16 mb-6 rounded-full bg-muted flex items-center justify-center text-muted-foreground">
            <span className="text-2xl">🔍</span>
          </div>
          <h3 className="text-xl font-semibold text-foreground">
            No articles found
          </h3>
          <p className="text-muted-foreground mt-2">
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
        <div className="mt-24 flex items-center justify-center gap-4">
          <Button
            variant="outline"
            size="icon"
            disabled={currentPage <= 1 || isPending}
            onClick={() =>
              updateParams({ page: Math.max(1, currentPage - 1) })
            }
            className="rounded-full w-10 h-10 border-foreground/20 text-foreground hover:border-primary hover:text-primary hover:bg-primary/5 disabled:opacity-30"
          >
            <span className="sr-only">Previous</span>
            &larr;
          </Button>

          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(
              (page) => (
                <Button
                  key={page}
                  variant={currentPage === page ? "default" : "outline"}
                  size="icon"
                  disabled={isPending}
                  onClick={() => updateParams({ page })}
                  className={`w-10 h-10 rounded-full font-semibold transition-all duration-300 ${currentPage === page
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25 hover:bg-primary/90 hover:-translate-y-0.5"
                    : "border-foreground/20 text-foreground hover:border-primary hover:text-primary hover:bg-primary/5"
                    }`}
                >
                  {page}
                </Button>
              )
            )}
          </div>

          <Button
            variant="outline"
            size="icon"
            disabled={currentPage >= totalPages || isPending}
            onClick={() =>
              updateParams({ page: Math.min(totalPages, currentPage + 1) })
            }
            className="rounded-full w-10 h-10 border-foreground/20 text-foreground hover:border-primary hover:text-primary hover:bg-primary/5 disabled:opacity-30"
          >
            <span className="sr-only">Next</span>
            &rarr;
          </Button>
        </div>
      )}
    </>
  );
}
