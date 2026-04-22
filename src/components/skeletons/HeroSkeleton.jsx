// @ts-nocheck

export function HeroSkeleton() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background pt-20">
      {/* Container */}
      <div className="container relative z-10 mx-auto px-6">
        <div className="mt-10 grid items-start gap-12 lg:grid-cols-2">
          {/* Left Column: Text Content Skeleton */}
          <div className="animate-pulse space-y-8 text-center lg:text-left">
            {/* Title Lines */}
            <div className="space-y-4">
              <div className="mx-auto h-12 w-3/4 rounded-lg bg-muted/40 md:h-16 lg:mx-0"></div>
              <div className="mx-auto h-12 w-full rounded-lg bg-muted/40 md:h-16 lg:mx-0"></div>
            </div>

            {/* Description Lines */}
            <div className="mx-auto max-w-xl space-y-3 lg:mx-0">
              <div className="h-6 w-full rounded bg-muted/30"></div>
              <div className="h-6 w-5/6 rounded bg-muted/30"></div>
              <div className="h-6 w-4/6 rounded bg-muted/30"></div>
            </div>

            {/* Button Placeholders */}
            <div className="flex flex-col justify-center gap-4 pt-4 sm:flex-row lg:justify-start">
              <div className="h-14 w-40 rounded-full bg-muted/40"></div>
              <div className="h-14 w-40 rounded-full bg-muted/40"></div>
            </div>

            {/* Badges/Logos Row */}
            <div className="flex flex-wrap items-center justify-center gap-6 pt-8 lg:justify-start">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-muted/40"></div>
                  <div className="h-4 w-24 rounded bg-muted/30"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Logo Placeholder */}
          <div className="hidden animate-pulse items-center justify-center lg:flex">
            {/* Approximate shape of the logo area */}
            <div className="relative h-80 w-full rounded-3xl bg-muted/20 md:h-96">
              {/* Inner hint of structure */}
              <div className="absolute inset-8 rounded-2xl bg-muted/10"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
