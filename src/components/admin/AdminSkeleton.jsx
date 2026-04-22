// @ts-nocheck
"use client";

import { cn } from "@/lib/utils";

function PulseBlock({ className }) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-xl border border-white/5 bg-white/5",
        className
      )}
    />
  );
}

/**
 * A highly polished, dark-theme Skeleton Loader for Admin interfaces.
 *
 * @param {string} type - "dashboard" | "analytics" | "table" | "builder"
 */
export function AdminSkeleton({ type = "table", className }) {
  if (type === "dashboard") {
    return (
      <div
        className={cn("space-y-8 duration-500 animate-in fade-in", className)}
      >
        {/* Hero Welcome */}
        <PulseBlock className="h-40 rounded-3xl sm:h-48" />

        {/* KPI Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <PulseBlock key={i} className="h-32 rounded-2xl" />
          ))}
        </div>
      </div>
    );
  }

  if (type === "analytics") {
    return (
      <div
        className={cn("space-y-8 duration-500 animate-in fade-in", className)}
      >
        {/* Top KPI Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[1, 2, 3, 4].map((i) => (
            <PulseBlock key={i} className="h-28 rounded-2xl" />
          ))}
        </div>

        {/* Main Chart Area */}
        <PulseBlock className="h-[320px] w-full rounded-2xl" />

        {/* Bottom Metrics Grid */}
        <div className="grid gap-6 lg:grid-cols-3">
          <PulseBlock className="h-[280px] rounded-2xl" />
          <PulseBlock className="h-[280px] rounded-2xl" />
          <PulseBlock className="h-[280px] rounded-2xl" />
        </div>
      </div>
    );
  }

  if (type === "builder") {
    return (
      <div
        className={cn(
          "flex flex-col gap-6 duration-500 animate-in fade-in lg:flex-row",
          className
        )}
      >
        {/* Vertical Tabs Mock */}
        <div className="shrink-0 space-y-2 lg:w-64">
          {[1, 2, 3, 4].map((i) => (
            <PulseBlock key={i} className="h-12 w-full rounded-xl" />
          ))}
        </div>

        {/* Main Content Area */}
        <div className="flex-1 rounded-2xl border border-white/5 bg-white/[0.02] p-6 lg:p-8">
          <div className="space-y-8">
            <PulseBlock className="mb-8 h-10 w-1/3 rounded-lg" />

            {/* Sub form fields mock */}
            <div className="space-y-4">
              <PulseBlock className="h-12 w-full rounded-xl" />
              <PulseBlock className="h-24 w-full rounded-xl" />
              <PulseBlock className="h-12 w-full rounded-xl" />
            </div>

            <div className="mt-8 flex justify-end border-t border-white/10 pt-6">
              <PulseBlock className="h-10 w-32 rounded-xl bg-white/10" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Default: type === "table"
  return (
    <div className={cn("space-y-6 duration-500 animate-in fade-in", className)}>
      {/* Toolbar Mock */}
      <div className="flex items-end justify-between border-b border-white/5 pb-4">
        <div className="space-y-2">
          <PulseBlock className="h-8 w-40 rounded-lg" />
          <PulseBlock className="h-4 w-64 rounded-md" />
        </div>
        <div className="flex gap-3">
          <PulseBlock className="h-10 w-[200px] rounded-xl" />
          <PulseBlock className="h-10 w-32 rounded-xl" />
        </div>
      </div>

      {/* Optional Stats for tables */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <PulseBlock key={i} className="h-24 rounded-2xl" />
        ))}
      </div>

      {/* Table Body */}
      <div className="divide-y divide-white/5 overflow-hidden rounded-3xl border border-white/5 bg-[#111111]">
        {/* Header Row */}
        <div className="flex h-12 items-center bg-white/[0.02] px-6">
          <PulseBlock className="h-4 w-full rounded-md" />
        </div>
        {/* Data Rows */}
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="flex h-16 items-center gap-4 px-6">
            <PulseBlock className="h-10 w-10 shrink-0 rounded-full" />
            <div className="flex-1 space-y-2">
              <PulseBlock className="h-4 w-1/4 rounded-md" />
              <PulseBlock className="h-3 w-1/3 rounded-md bg-white/5" />
            </div>
            <PulseBlock className="h-6 w-20 rounded-full" />
          </div>
        ))}
      </div>
    </div>
  );
}
