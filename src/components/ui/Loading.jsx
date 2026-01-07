"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

const Loading = ({ className, size = "default", ...props }) => {
  const sizeClasses = {
    sm: "h-4 w-4",
    default: "h-8 w-8",
    lg: "h-12 w-12",
  };

  return (
    <div
      className={cn("flex items-center justify-center", className)}
      {...props}
    >
      <div
        className={cn(
          "animate-spin rounded-full border-2 border-current border-t-transparent",
          sizeClasses[size]
        )}
        role="status"
        aria-label="Loading"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

const LoadingSpinner = ({ className, ...props }) => (
  <Loading className={className} {...props} />
);

const LoadingDots = ({ className, ...props }) => {
  return (
    <div className={cn("flex items-center gap-1", className)} {...props}>
      <div className="h-2 w-2 animate-bounce rounded-full bg-current [animation-delay:-0.3s]" />
      <div className="h-2 w-2 animate-bounce rounded-full bg-current [animation-delay:-0.15s]" />
      <div className="h-2 w-2 animate-bounce rounded-full bg-current" />
    </div>
  );
};

export { Loading, LoadingSpinner, LoadingDots };
export default Loading;
