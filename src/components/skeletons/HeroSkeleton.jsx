
export function HeroSkeleton() {
  return (
    <div className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden bg-background">
      {/* Container */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start mt-10">
          {/* Left Column: Text Content Skeleton */}
          <div className="text-center lg:text-left space-y-8 animate-pulse">
            {/* Title Lines */}
            <div className="space-y-4">
              <div className="h-12 md:h-16 bg-muted/40 rounded-lg w-3/4 mx-auto lg:mx-0"></div>
              <div className="h-12 md:h-16 bg-muted/40 rounded-lg w-full mx-auto lg:mx-0"></div>
            </div>

            {/* Description Lines */}
            <div className="space-y-3 max-w-xl mx-auto lg:mx-0">
              <div className="h-6 bg-muted/30 rounded w-full"></div>
              <div className="h-6 bg-muted/30 rounded w-5/6"></div>
              <div className="h-6 bg-muted/30 rounded w-4/6"></div>
            </div>

            {/* Button Placeholders */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <div className="h-14 w-40 bg-muted/40 rounded-full"></div>
              <div className="h-14 w-40 bg-muted/40 rounded-full"></div>
            </div>

            {/* Badges/Logos Row */}
            <div className="pt-8 flex flex-wrap gap-6 items-center justify-center lg:justify-start">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-muted/40"></div>
                  <div className="w-24 h-4 bg-muted/30 rounded"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Logo Placeholder */}
          <div className="hidden lg:flex items-center justify-center animate-pulse">
            {/* Approximate shape of the logo area */}
            <div className="w-full h-80 md:h-96 rounded-3xl bg-muted/20 relative">
              {/* Inner hint of structure */}
              <div className="absolute inset-8 rounded-2xl bg-muted/10"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
