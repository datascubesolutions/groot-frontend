"use client";

import { BlogCard } from "@/components/blog/BlogCard";
import { BlogControls } from "@/components/blog/BlogControls";
import { BlogPageHeader } from "@/components/blog/BlogPageHeader";
import { FeaturedPost } from "@/components/blog/FeaturedPost";
import { Button } from "@/components/ui/Button";
import { BLOG_POSTS, CATEGORIES } from "@/lib/blog-data";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";

export default function BlogListingPage() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 6;

    // Filter Logic
    const filteredPosts = useMemo(() => {
        return BLOG_POSTS.filter((post) => {
            const matchesCategory =
                selectedCategory === "All" || post.category === selectedCategory;
            const matchesSearch =
                post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
            return matchesCategory && matchesSearch;
        });
    }, [selectedCategory, searchTerm]);

    // Featured Post Logic
    const showFeatured =
        selectedCategory === "All" && searchTerm === "" && currentPage === 1;
    const featuredPost = showFeatured
        ? filteredPosts.find((p) => p.featured) || filteredPosts[0]
        : null;
    const listPosts = showFeatured
        ? filteredPosts.filter((p) => p.id !== featuredPost?.id)
        : filteredPosts;

    // Pagination Logic
    const totalPages = Math.ceil(listPosts.length / postsPerPage);
    const paginatedPosts = listPosts.slice(
        (currentPage - 1) * postsPerPage,
        currentPage * postsPerPage
    );

    return (
        <main className="min-h-screen bg-background pb-32" role="main" id="blog-content">
            <BlogPageHeader />

            <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-[1400px] relative z-10">

                {/* Controls - Floating & Clean */}
                <div className="mb-4">
                    <BlogControls
                        categories={CATEGORIES}
                        selectedCategory={selectedCategory}
                        onSelectCategory={(cat) => {
                            setSelectedCategory(cat);
                            setCurrentPage(1);
                        }}
                        searchTerm={searchTerm}
                        onSearchChange={(term) => {
                            setSearchTerm(term);
                            setCurrentPage(1);
                        }}
                    />
                </div>

                {/* Featured Post */}
                <AnimatePresence mode="wait">
                    {featuredPost && (
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

                {/* Grid Heading */}
                {(searchTerm || selectedCategory !== "All" || !showFeatured) && (
                    <div className="mb-10 flex items-baseline justify-between border-b border-border/40 pb-4">
                        <h2 className="text-2xl font-semibold tracking-tight">
                            {searchTerm ? `Search: "${searchTerm}"` : selectedCategory}
                        </h2>
                        <span className="text-sm text-muted-foreground">
                            {paginatedPosts.length} articles
                        </span>
                    </div>
                )}

                {/* Blog Grid */}
                <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
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

                {/* Empty State */}
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
                            onClick={() => {
                                setSelectedCategory("All");
                                setSearchTerm("");
                            }}
                        >
                            Clear filters
                        </Button>
                    </div>
                )}

                {/* Pagination Controls */}
                {totalPages > 1 && (
                    <div className="mt-24 flex items-center justify-center gap-4">
                        <Button
                            variant="outline"
                            disabled={currentPage === 1}
                            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                            className="rounded-full w-12 h-12 p-0"
                        >
                            &larr;
                        </Button>

                        <div className="flex items-center gap-2">
                            {Array.from({ length: totalPages }).map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrentPage(i + 1)}
                                    className={`h-2 w-2 rounded-full transition-all duration-300 ${currentPage === i + 1
                                        ? "bg-primary w-8"
                                        : "bg-muted-foreground/30 hover:bg-primary/50"
                                        }`}
                                    aria-label={`Page ${i + 1}`}
                                />
                            ))}
                        </div>

                        <Button
                            variant="outline"
                            disabled={currentPage === totalPages}
                            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                            className="rounded-full w-12 h-12 p-0"
                        >
                            &rarr;
                        </Button>
                    </div>
                )}
            </div>
        </main>
    );
}
