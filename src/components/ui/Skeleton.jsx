// @ts-nocheck
"use client";

import { cn } from "@/lib/utils";

function Skeleton({ className, ...props }) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-foreground/10", className)}
      {...props}
    />
  );
}

function HeroSkeleton() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20">
      <div className="container mx-auto px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <Skeleton className="h-16 w-3/4 rounded-lg md:w-full" />
            <Skeleton className="h-16 w-1/2 rounded-lg md:w-2/3" />
            <div className="space-y-3 pt-4">
              <Skeleton className="h-4 w-full max-w-md" />
              <Skeleton className="h-4 w-5/6 max-w-md" />
            </div>
            <div className="flex gap-4 pt-4">
              <Skeleton className="h-12 w-40 rounded-full" />
              <Skeleton className="h-12 w-40 rounded-full" />
            </div>
          </div>
          <div className="hidden lg:block">
            <Skeleton className="h-96 w-full rounded-2xl opacity-50" />
          </div>
        </div>
      </div>
    </div>
  );
}

function ServicesSkeleton() {
  return (
    <div className="container mx-auto px-6 py-24">
      <div className="mx-auto mb-16 max-w-3xl space-y-4 text-center">
        <Skeleton className="mx-auto h-4 w-32" />
        <Skeleton className="mx-auto h-12 w-3/4" />
        <Skeleton className="mx-auto h-4 w-2/3" />
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="space-y-4 rounded-2xl border border-border/50 p-8"
          >
            <Skeleton className="h-14 w-14 rounded-xl" />
            <Skeleton className="h-6 w-1/2" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
            </div>
            <div className="flex gap-2 pt-2">
              <Skeleton className="h-6 w-20 rounded-full" />
              <Skeleton className="h-6 w-20 rounded-full" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProcessSkeleton() {
  return (
    <div className="container mx-auto space-y-12 px-6 py-20">
      <div className="mb-16 space-y-4 text-center">
        <Skeleton className="mx-auto h-8 w-48 rounded-full" />
        <Skeleton className="mx-auto h-12 w-2/3" />
      </div>
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className={`flex items-center gap-8 ${i % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
        >
          <div className="w-1/2 p-6">
            <div className="h-64 space-y-4 rounded-2xl border border-border/50 p-6">
              <Skeleton className="h-12 w-12 rounded-lg" />
              <Skeleton className="h-8 w-1/3" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
            </div>
          </div>
          <div className="hidden w-1/2 md:block" />
        </div>
      ))}
    </div>
  );
}

function GridSkeleton() {
  return (
    <div className="container mx-auto px-6 py-24">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {[...Array(3)].map((_, i) => (
          <Skeleton key={i} className="h-80 w-full rounded-2xl" />
        ))}
      </div>
    </div>
  );
}

export {
  GridSkeleton,
  HeroSkeleton,
  ProcessSkeleton,
  ServicesSkeleton,
  Skeleton,
};
