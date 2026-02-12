"use client";

import { BlogCard } from "./BlogCard";

export function RelatedPosts({ posts }) {
    if (!posts || posts.length === 0) return null;

    return (
        <section className="border-t border-border pt-12 md:pt-14" aria-label="Related articles">
            <h2 className="mb-6 md:mb-8 text-2xl font-bold tracking-tight text-foreground">
                Related Articles
            </h2>
            <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {posts.map((post) => (
                    <BlogCard key={post.id} post={post} />
                ))}
            </div>
        </section>
    );
}
