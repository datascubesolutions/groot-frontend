// @ts-nocheck
"use client";

import { Skeleton } from "@/components/ui/Skeleton";

export function BlogSkeleton() {
  return (
    <div className="min-h-screen bg-background pb-32">
      {/* Header Skeleton */}
      <div className="mb-12 border-b border-border/40 bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl space-y-4">
            <Skeleton className="h-6 w-24 rounded-full bg-foreground/15" />
            <Skeleton className="h-14 w-3/4 rounded-lg bg-foreground/15" />
            <Skeleton className="h-6 w-1/2 rounded-lg bg-foreground/10" />
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
        {/* Controls Skeleton */}
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="flex w-full gap-2 overflow-hidden md:w-auto">
            {[...Array(5)].map((_, i) => (
              <Skeleton
                key={i}
                className="h-10 w-28 flex-shrink-0 rounded-full border border-foreground/5 bg-foreground/10"
              />
            ))}
          </div>
          <Skeleton className="h-10 w-full rounded-full border border-foreground/5 bg-foreground/10 md:w-64" />
        </div>

        {/* Featured Post Skeleton */}
        <div className="mb-12 border-b border-border/40 pb-12">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <Skeleton className="h-[300px] w-full rounded-2xl bg-foreground/15 lg:h-[400px]" />
            <div className="space-y-6">
              <div className="flex gap-3">
                <Skeleton className="h-6 w-24 rounded-full bg-foreground/15" />
                <Skeleton className="h-6 w-20 rounded-full bg-foreground/15" />
              </div>
              <Skeleton className="h-12 w-full rounded-lg bg-foreground/15" />
              <Skeleton className="h-12 w-3/4 rounded-lg bg-foreground/15" />
              <div className="space-y-3 pt-2">
                <Skeleton className="h-4 w-full bg-foreground/10" />
                <Skeleton className="h-4 w-full bg-foreground/10" />
                <Skeleton className="h-4 w-2/3 bg-foreground/10" />
              </div>
              <div className="flex items-center gap-3 pt-4">
                <Skeleton className="h-10 w-10 rounded-full bg-foreground/15" />
                <div className="space-y-2">
                  <Skeleton className="h-3 w-24 bg-foreground/15" />
                  <Skeleton className="h-3 w-16 bg-foreground/10" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Grid Skeleton */}
        <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex flex-col gap-4">
              {/* Image Skeleton */}
              <Skeleton className="aspect-[3/2] w-full rounded-2xl bg-foreground/15" />

              <div className="space-y-4 pt-2">
                {/* Meta */}
                <div className="flex gap-2">
                  <Skeleton className="h-4 w-20 rounded-full bg-foreground/15" />
                  <Skeleton className="h-4 w-16 rounded-full bg-foreground/10" />
                </div>

                {/* Title */}
                <div className="space-y-2">
                  <Skeleton className="h-7 w-full rounded-md bg-foreground/15" />
                  <Skeleton className="h-7 w-3/4 rounded-md bg-foreground/15" />
                </div>

                {/* Excerpt */}
                <div className="space-y-2">
                  <Skeleton className="h-4 w-full bg-foreground/10" />
                  <Skeleton className="h-4 w-5/6 bg-foreground/10" />
                </div>

                {/* Author */}
                <div className="flex items-center justify-between pt-4">
                  <div className="flex items-center gap-3">
                    <Skeleton className="h-8 w-8 rounded-full bg-foreground/15" />
                    <Skeleton className="h-4 w-24 bg-foreground/15" />
                  </div>
                  <Skeleton className="h-8 w-8 rounded-full bg-foreground/10" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
