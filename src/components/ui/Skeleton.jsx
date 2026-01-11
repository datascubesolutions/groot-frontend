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
    <div className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Skeleton className="h-16 w-3/4 md:w-full rounded-lg" />
            <Skeleton className="h-16 w-1/2 md:w-2/3 rounded-lg" />
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
    <div className="py-24 container mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <Skeleton className="h-4 w-32 mx-auto" />
        <Skeleton className="h-12 w-3/4 mx-auto" />
        <Skeleton className="h-4 w-2/3 mx-auto" />
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="p-8 rounded-2xl border border-border/50 space-y-4">
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
    <div className="py-20 container mx-auto px-6 space-y-12">
      <div className="text-center space-y-4 mb-16">
        <Skeleton className="h-8 w-48 mx-auto rounded-full" />
        <Skeleton className="h-12 w-2/3 mx-auto" />
      </div>
      {[...Array(3)].map((_, i) => (
        <div key={i} className={`flex gap-8 items-center ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
          <div className="w-1/2 p-6">
            <div className="h-64 rounded-2xl border border-border/50 p-6 space-y-4">
              <Skeleton className="h-12 w-12 rounded-lg" />
              <Skeleton className="h-8 w-1/3" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
            </div>
          </div>
          <div className="w-1/2 hidden md:block" />
        </div>
      ))}
    </div>
  );
}

function GridSkeleton() {
  return (
    <div className="py-24 container mx-auto px-6">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(3)].map((_, i) => (
          <Skeleton key={i} className="h-80 w-full rounded-2xl" />
        ))}
      </div>
    </div>
  )
}

export { GridSkeleton, HeroSkeleton, ProcessSkeleton, ServicesSkeleton, Skeleton };
