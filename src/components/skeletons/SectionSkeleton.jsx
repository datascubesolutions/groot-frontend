export function SectionSkeleton({ className = "min-h-[400px]" }) {
  return (
    <div className={`w-full bg-background py-20 animate-pulse ${className}`}>
      <div className="container mx-auto px-6">
        {/* Section Header Skeleton */}
        <div className="max-w-2xl mx-auto mb-16 text-center space-y-4">
          <div className="h-4 w-32 bg-muted/40 rounded-full mx-auto"></div>
          <div className="h-10 w-2/3 bg-muted/40 rounded-lg mx-auto"></div>
          <div className="h-4 w-1/2 bg-muted/30 rounded mx-auto mt-4"></div>
        </div>

        {/* Content Blocks Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="rounded-2xl bg-muted/10 p-6 h-64 flex flex-col space-y-4">
              <div className="w-12 h-12 rounded-xl bg-muted/30"></div>
              <div className="h-6 w-3/4 bg-muted/30 rounded"></div>
              <div className="flex-1 space-y-2">
                <div className="h-4 w-full bg-muted/20 rounded"></div>
                <div className="h-4 w-full bg-muted/20 rounded"></div>
                <div className="h-4 w-2/3 bg-muted/20 rounded"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
