// @ts-nocheck
"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[80px] w-full rounded-xl border border-white/60 bg-white/40 backdrop-blur-xl px-4 py-3 text-sm text-foreground transition-all duration-300 placeholder:text-muted-foreground hover:bg-white/60 focus-visible:border-primary focus-visible:bg-white/80 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/10 disabled:cursor-not-allowed disabled:opacity-50 resize-y shadow-[0_2px_10px_-3px_rgba(0,0,0,0.05)]",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
export default Textarea;
