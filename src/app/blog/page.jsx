"use client";

import { BlogCard } from "@/components/blog/BlogCard";
import { BlogControls } from "@/components/blog/BlogControls";
import { BlogPageHeader } from "@/components/blog/BlogPageHeader";
import { FeaturedPost } from "@/components/blog/FeaturedPost";
import { BlogSkeleton } from "@/components/skeletons/BlogSkeleton";
import { Button } from "@/components/ui/Button";
import { BLOG_POSTS, CATEGORIES } from "@/lib/blog-data";
import { blogService } from "@/services/blogService";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

export default function BlogListingPage() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [apiPosts, setApiPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const postsPerPage = 6;

    // Fetch API Posts
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await blogService.list({ limit: 100 });
                // Handle nested structure: response.result.data.blogs
                const posts = response?.result?.data?.blogs || response?.result?.blogs || response?.blogs || [];

                // Map API posts to match static data structure
                const mappedPosts = posts.map(post => ({
                    id: post.id,
                    slug: post.slug,
                    title: post.title,
                    excerpt: post.excerpt,
                    content: post.content,
                    category: post.category ?
                        post.category.charAt(0).toUpperCase() + post.category.slice(1).toLowerCase()
                        : "General",
                    author: {
                        name: post.author?.name || "Groot Team",
                        role: post.author?.designation || "Contributor",
                        avatar: post.author?.avatar || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop"
                    },
                    date: post.createdAt?._seconds
                        ? new Date(post.createdAt._seconds * 1000).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
                        : "Recently",
                    readTime: post.readTime || "5 min read",
                    image: post.coverImage || "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2600&auto=format&fit=crop",
                    featured: post.isFeatured || false
                }));

                setApiPosts(mappedPosts);
            } catch (error) {
                console.error("Failed to fetch blog posts:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchPosts();
    }, []);

    // Helper to normalize text for comparison
    const normalize = (text) => text?.toLowerCase().trim() || "";

    // Combine Static & API Posts
    const allPosts = useMemo(() => {
        // Filter out published posts only if API returns status (assuming API returns all)
        // For now, we just merge all. In a real app, we'd filter by status === 'PUBLISHED'
        return [...apiPosts, ...BLOG_POSTS];
    }, [apiPosts]);

    // Derived Categories
    const allCategories = useMemo(() => {
        const cats = new Set(CATEGORIES);
        apiPosts.forEach(post => {
            if (post.category) cats.add(post.category);
        });
        return Array.from(cats);
    }, [apiPosts]);

    // Filter Logic
    const filteredPosts = useMemo(() => {
        return allPosts.filter((post) => {
            const matchesCategory =
                selectedCategory === "All" || normalize(post.category) === normalize(selectedCategory);
            const matchesSearch =
                normalize(post.title).includes(normalize(searchTerm)) ||
                normalize(post.excerpt).includes(normalize(searchTerm));
            return matchesCategory && matchesSearch;
        });
    }, [selectedCategory, searchTerm, allPosts]);

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

    if (isLoading) {
        return <BlogSkeleton />;
    }

    return (
        <main className="min-h-screen bg-background pb-32" role="main" id="blog-content">
            <BlogPageHeader />

            <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-[1400px] relative z-10">

                {/* Controls - Floating & Clean */}
                <div className="mb-4">
                    <BlogControls
                        categories={allCategories}
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
                            size="icon"
                            disabled={currentPage === 1}
                            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                            className="rounded-full w-10 h-10 border-foreground/20 text-foreground hover:border-primary hover:text-primary hover:bg-primary/5 disabled:opacity-30"
                        >
                            <span className="sr-only">Previous</span>
                            &larr;
                        </Button>

                        <div className="flex items-center gap-2">
                            {Array.from({ length: totalPages }).map((_, i) => (
                                <Button
                                    key={i}
                                    variant={currentPage === i + 1 ? "default" : "outline"}
                                    size="icon"
                                    onClick={() => setCurrentPage(i + 1)}
                                    className={`w-10 h-10 rounded-full font-semibold transition-all duration-300 ${currentPage === i + 1
                                        ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25 hover:bg-primary/90 hover:-translate-y-0.5"
                                        : "border-foreground/20 text-foreground hover:border-primary hover:text-primary hover:bg-primary/5"
                                        }`}
                                >
                                    {i + 1}
                                </Button>
                            ))}
                        </div>

                        <Button
                            variant="outline"
                            size="icon"
                            disabled={currentPage === totalPages}
                            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                            className="rounded-full w-10 h-10 border-foreground/20 text-foreground hover:border-primary hover:text-primary hover:bg-primary/5 disabled:opacity-30"
                        >
                            <span className="sr-only">Next</span>
                            &rarr;
                        </Button>
                    </div>
                )}
            </div>
        </main>
    );
}
