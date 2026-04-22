// @ts-nocheck
"use client";

import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function FeaturedPost({ post }) {
  if (!post) return null;

  const href = `/blog/${post.slug}?id=${post.id}${post.host ? `&host=${post.host}` : ""}`;

  return (
    <section className="group relative w-full">
      <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
        {/* Image */}
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-muted shadow-2xl shadow-primary/5 lg:aspect-[4/3] lg:rounded-3xl">
          <Link href={href} className="block h-full w-full">
            {/* Featured post LCP image — load with priority */}
            <Image
              src={post.image || "/images/placeholder.jpg"}
              alt={post.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-all duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/10 transition-colors duration-500 group-hover:bg-transparent" />
          </Link>
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center space-y-6 lg:space-y-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-wider text-forest">
              <span>Featured Article</span>
              <span className="h-1 w-1 rounded-full bg-forest/70" />
              <span>{post.category}</span>
            </div>

            <h2 className="text-3xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              <Link
                href={href}
                className="block rounded transition-colors duration-300 hover:text-forest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/50 focus-visible:ring-offset-2"
              >
                {post.title}
              </Link>
            </h2>

            <p className="line-clamp-3 max-w-xl text-lg leading-relaxed text-muted-foreground">
              {post.excerpt}
            </p>
          </div>

          <div className="flex items-center gap-6 pt-2">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-muted ring-2 ring-background">
                {post.author.avatar ? (
                  <Image
                    src={post.author.avatar}
                    alt={post.author.name}
                    width={40}
                    height={40}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="h-full w-full bg-primary/10" />
                )}
              </div>
              <div className="flex flex-col text-sm">
                <span className="font-semibold text-foreground">
                  {post.author.name}
                </span>
                <span className="text-muted-foreground">{post.readTime}</span>
              </div>
            </div>

            <div className="h-8 w-px bg-border" />

            <Button
              asChild
              variant="link"
              className="group/btn h-auto p-0 font-semibold text-forest underline-offset-4 transition-colors duration-300 hover:text-forest/80 hover:underline"
            >
              <Link href={href} className="flex items-center gap-2">
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
