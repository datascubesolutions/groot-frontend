"use client";

import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function FeaturedPost({ post }) {
    if (!post) return null;

    return (
        <section className="group relative w-full">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                {/* Image Side - Bleeding/Large */}
                <div className="relative aspect-[16/10] lg:aspect-[4/3] w-full overflow-hidden rounded-2xl lg:rounded-3xl bg-muted shadow-2xl shadow-primary/5">
                    <Link href={`/blog/${post.slug}?id=${post.id}`} className="block h-full w-full">
                        <img
                            src={post.image || "/images/placeholder.jpg"}
                            alt={post.title}
                            className="h-full w-full object-cover transition-all duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/10 transition-colors duration-500 group-hover:bg-transparent" />
                    </Link>
                </div>

                {/* Content Side */}
                <div className="flex flex-col justify-center space-y-6 lg:space-y-8">
                    <div className="space-y-4">
                        <div className="flex items-center gap-3 text-sm font-semibold tracking-wider text-forest uppercase">
                            <span>Featured Article</span>
                            <span className="h-1 w-1 rounded-full bg-forest/70" />
                            <span>{post.category}</span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.1]">
                            <Link
                                href={`/blog/${post.slug}?id=${post.id}`}
                                className="block hover:text-forest transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/50 focus-visible:ring-offset-2 rounded"
                            >
                                {post.title}
                            </Link>
                        </h2>

                        <p className="text-lg text-muted-foreground leading-relaxed max-w-xl line-clamp-3">
                            {post.excerpt}
                        </p>
                    </div>

                    <div className="flex items-center gap-6 pt-2">
                        <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-full bg-muted overflow-hidden ring-2 ring-background flex items-center justify-center">
                                {post.author.avatar ? (
                                    <img
                                        src={post.author.avatar}
                                        alt={post.author.name}
                                        className="h-full w-full object-cover"
                                    />
                                ) : (
                                    <div className="h-full w-full bg-primary/10" />
                                )}
                            </div>
                            <div className="flex flex-col text-sm">
                                <span className="font-semibold text-foreground">{post.author.name}</span>
                                <span className="text-muted-foreground">{post.readTime}</span>
                            </div>
                        </div>

                        <div className="h-8 w-px bg-border" />

                        <Button
                            asChild
                            variant="link"
                            className="p-0 h-auto font-semibold text-forest hover:text-forest/80 hover:underline underline-offset-4 group/btn transition-colors duration-300"
                        >
                            <Link href={`/blog/${post.slug}?id=${post.id}`} className="flex items-center gap-2">
                                Read Article
                                <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
