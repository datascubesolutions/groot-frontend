// @ts-nocheck
"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function BlogCard({ post }) {
  const [imgError, setImgError] = useState(false);
  const showPlaceholder = !post.image || imgError;

  return (
    <Link
      href={`/blog/${post.slug}?id=${post.id}${post.host ? `&host=${post.host}` : ""}`}
      className="group block h-full outline-none"
      aria-label={`Read article: ${post.title}`}
    >
      <article className="flex h-full flex-col gap-4">
        {/* Image Container */}
        <div className="relative aspect-[3/2] w-full overflow-hidden rounded-2xl bg-muted">
          {!showPlaceholder ? (
            <Image
              src={post.image}
              alt={post.title}
              fill
              unoptimized
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              onError={() => setImgError(true)}
            />
          ) : (
            /* Gradient placeholder for missing or broken images */
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/20 via-[hsl(var(--forest))]/10 to-muted">
              <span className="select-none text-4xl font-black uppercase tracking-widest text-primary/30">
                {post.category?.charAt(0) || "G"}
              </span>
            </div>
          )}

          {/* Subtle Overlay on Hover */}
          <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />

          {/* Floating Category Badge */}
          <div className="absolute left-4 top-4">
            <span className="inline-flex items-center rounded-full bg-background/90 px-3 py-1 text-xs font-medium text-foreground shadow-sm backdrop-blur-md">
              {post.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col space-y-3">
          {/* Date & Read Time */}
          <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
            <span>{post.date}</span>
            <span className="h-0.5 w-0.5 rounded-full bg-muted-foreground" />
            <span>{post.readTime}</span>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold leading-snug tracking-tight text-foreground transition-colors duration-300 group-hover:text-forest">
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground/80">
            {post.excerpt}
          </p>

          {/* Author */}
          <div className="mt-auto flex items-center justify-between pt-4">
            <div className="flex items-center gap-2.5">
              <div className="flex h-6 w-6 items-center justify-center overflow-hidden rounded-full bg-muted">
                {post.author.avatar ? (
                  <Image
                    src={post.author.avatar}
                    alt={post.author.name}
                    width={24}
                    height={24}
                    unoptimized
                    className="object-cover"
                  />
                ) : (
                  <div className="h-full w-full bg-primary/20" />
                )}
              </div>
              <span className="text-xs font-medium text-foreground/80">
                {post.author.name}
              </span>
            </div>

            <div className="flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition-all duration-300 group-hover:rotate-45 group-hover:bg-forest/10 group-hover:text-forest">
              <ArrowUpRight className="h-4 w-4" />
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
