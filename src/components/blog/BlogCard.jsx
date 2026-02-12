"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function BlogCard({ post }) {
    return (
        <Link
            href={`/blog/${post.slug}`}
            className="group block h-full outline-none"
            aria-label={`Read article: ${post.title}`}
        >
            <article className="h-full flex flex-col gap-4">
                {/* Image Container - Clean & Rounded */}
                <div className="relative aspect-[3/2] w-full overflow-hidden rounded-2xl bg-muted">
                    <Image
                        src={post.image || "/images/placeholder.jpg"}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    {/* Subtle Overlay on Hover */}
                    <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />

                    {/* Floating Category Badge */}
                    <div className="absolute top-4 left-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-background/90 text-foreground shadow-sm backdrop-blur-md">
                            {post.category}
                        </span>
                    </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 space-y-3">
                    {/* Date & Read Time */}
                    <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                        <span>{post.date}</span>
                        <span className="h-0.5 w-0.5 rounded-full bg-muted-foreground" />
                        <span>{post.readTime}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold tracking-tight text-foreground leading-snug group-hover:text-forest transition-colors duration-300">
                        {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-sm text-muted-foreground/80 leading-relaxed line-clamp-2">
                        {post.excerpt}
                    </p>

                    {/* Author - Minimal */}
                    <div className="mt-auto pt-4 flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                            <div className="h-6 w-6 rounded-full bg-muted overflow-hidden">
                                {post.author.avatar ? (
                                    <Image
                                        src={post.author.avatar}
                                        alt={post.author.name}
                                        width={24}
                                        height={24}
                                        className="h-full w-full object-cover"
                                    />
                                ) : (
                                    <div className="h-full w-full bg-primary/20" />
                                )}
                            </div>
                            <span className="text-xs font-medium text-foreground/80">
                                {post.author.name}
                            </span>
                        </div>

                        {/* Subtle Arrow Interaction */}
                        <div className="h-8 w-8 rounded-full flex items-center justify-center text-muted-foreground transition-all duration-300 group-hover:bg-forest/10 group-hover:text-forest group-hover:rotate-45">
                            <ArrowUpRight className="h-4 w-4" />
                        </div>
                    </div>
                </div>
            </article>
        </Link>
    );
}
