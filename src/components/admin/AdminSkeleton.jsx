"use client";

import { cn } from "@/lib/utils";

/**
 * A highly polished, dark-theme Skeleton Loader for Admin interfaces.
 * 
 * @param {string} type - "dashboard" | "analytics" | "table" | "builder"
 */
export function AdminSkeleton({ type = "table", className }) {
  
  // Repeated generic pulsing row
  const PulseBlock = ({ className }) => (
    <div className={cn("animate-pulse bg-white/5 border border-white/5 rounded-xl", className)} />
  );

  if (type === "dashboard") {
    return (
      <div className={cn("space-y-8 animate-in fade-in duration-500", className)}>
        {/* Hero Welcome */}
        <PulseBlock className="h-40 sm:h-48 rounded-3xl" />
        
        {/* KPI Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <PulseBlock key={i} className="h-32 rounded-2xl" />
          ))}
        </div>
      </div>
    );
  }

  if (type === "analytics") {
    return (
      <div className={cn("space-y-8 animate-in fade-in duration-500", className)}>
        {/* Top KPI Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[1, 2, 3, 4].map((i) => (
            <PulseBlock key={i} className="h-28 rounded-2xl" />
          ))}
        </div>
        
        {/* Main Chart Area */}
        <PulseBlock className="h-[320px] rounded-2xl w-full" />
        
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
      <div className={cn("flex flex-col lg:flex-row gap-6 animate-in fade-in duration-500", className)}>
        {/* Vertical Tabs Mock */}
        <div className="lg:w-64 shrink-0 space-y-2">
           {[1, 2, 3, 4].map((i) => (
              <PulseBlock key={i} className="h-12 w-full rounded-xl" />
           ))}
        </div>
        
        {/* Main Content Area */}
        <div className="flex-1 bg-white/[0.02] border border-white/5 rounded-2xl p-6 lg:p-8">
           <div className="space-y-8">
             <PulseBlock className="h-10 w-1/3 rounded-lg mb-8" />
             
             {/* Sub form fields mock */}
             <div className="space-y-4">
               <PulseBlock className="h-12 w-full rounded-xl" />
               <PulseBlock className="h-24 w-full rounded-xl" />
               <PulseBlock className="h-12 w-full rounded-xl" />
             </div>
             
             <div className="pt-6 mt-8 border-t border-white/10 flex justify-end">
               <PulseBlock className="h-10 w-32 rounded-xl bg-white/10" />
             </div>
           </div>
        </div>
      </div>
    );
  }

  // Default: type === "table"
  return (
    <div className={cn("space-y-6 animate-in fade-in duration-500", className)}>
       {/* Toolbar Mock */}
       <div className="flex justify-between items-end pb-4 border-b border-white/5">
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
       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
         {[1, 2, 3].map((i) => (
            <PulseBlock key={i} className="h-24 rounded-2xl" />
         ))}
       </div>

       {/* Table Body */}
       <div className="bg-[#111111] border border-white/5 rounded-3xl overflow-hidden divide-y divide-white/5">
          {/* Header Row */}
          <div className="h-12 bg-white/[0.02] flex items-center px-6">
             <PulseBlock className="h-4 w-full rounded-md" />
          </div>
          {/* Data Rows */}
          {[1, 2, 3, 4, 5].map((i) => (
             <div key={i} className="h-16 flex items-center px-6 gap-4">
               <PulseBlock className="h-10 w-10 rounded-full shrink-0" />
               <div className="space-y-2 flex-1">
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
