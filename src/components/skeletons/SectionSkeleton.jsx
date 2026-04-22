// @ts-nocheck
export function SectionSkeleton({ className = "min-h-[400px]" }) {
  return (
    <div className={`w-full animate-pulse bg-background py-20 ${className}`}>
      <div className="container mx-auto px-6">
        {/* Section Header Skeleton */}
        <div className="mx-auto mb-16 max-w-2xl space-y-4 text-center">
          <div className="mx-auto h-4 w-32 rounded-full bg-muted/40"></div>
          <div className="mx-auto h-10 w-2/3 rounded-lg bg-muted/40"></div>
          <div className="mx-auto mt-4 h-4 w-1/2 rounded bg-muted/30"></div>
        </div>

        {/* Content Blocks Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="flex h-64 flex-col space-y-4 rounded-2xl bg-muted/10 p-6"
            >
              <div className="h-12 w-12 rounded-xl bg-muted/30"></div>
              <div className="h-6 w-3/4 rounded bg-muted/30"></div>
              <div className="flex-1 space-y-2">
                <div className="h-4 w-full rounded bg-muted/20"></div>
                <div className="h-4 w-full rounded bg-muted/20"></div>
                <div className="h-4 w-2/3 rounded bg-muted/20"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
