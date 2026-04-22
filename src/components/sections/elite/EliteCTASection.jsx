// @ts-nocheck
import { ArrowRight, Sparkles, TrendingUp, Zap } from "lucide-react";

const EliteCTASection = () => {
  return (
    <section className="relative overflow-hidden bg-background py-24 lg:py-32">
      {/* Ambient Background */}
      <div className="absolute inset-0">
        <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-6 lg:px-12">
        <div className="mx-auto max-w-6xl">
          {/* Split Layout */}
          <div className="grid items-center gap-8 lg:grid-cols-5 lg:gap-0">
            {/* Left - Content */}
            <div className="lg:col-span-3 lg:pr-12">
              {/* Floating Pills */}
              <div className="mb-8 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-forest/10 px-4 py-2 text-sm font-medium text-forest">
                  <Sparkles className="h-4 w-4" />
                  AI-Powered
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                  <Zap className="h-4 w-4" />
                  Real-Time
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-sm font-medium text-accent">
                  <TrendingUp className="h-4 w-4" />
                  Scalable
                </span>
              </div>

              <h2 className="mb-6 font-serif text-4xl font-semibold leading-[1.1] tracking-tight text-foreground md:text-5xl lg:text-6xl">
                It&apos;s Time to{" "}
                <span className="relative bg-gradient-to-r from-[hsl(168,76%,40%)] to-[hsl(142,71%,38%)] bg-clip-text text-transparent">
                  Do the Math.
                  {/* Underline Decoration */}
                  <svg
                    className="absolute -bottom-2 left-0 h-3 w-full text-primary/30"
                    viewBox="0 0 200 12"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0,8 Q50,0 100,8 T200,8"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h2>

              <p className="mb-10 max-w-xl text-lg leading-relaxed text-muted-foreground lg:text-xl">
                Let&apos;s turn your data, algorithms, and curiosity into
                decisions that move the markets.
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="btn-primary group px-10 py-5 text-base lg:text-lg">
                  <span>Get Started</span>
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </button>
                <button className="btn-secondary px-10 py-5 text-base lg:text-lg">
                  Schedule a Demo
                </button>
              </div>
            </div>

            {/* Right - Visual Element */}
            <div className="relative lg:col-span-2">
              <div className="relative mx-auto aspect-square max-w-sm lg:max-w-none">
                {/* Concentric Circles */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="h-full w-full animate-pulse rounded-full border border-border/40"
                    style={{ animationDuration: "3s" }}
                  />
                </div>
                <div className="absolute inset-8 flex items-center justify-center">
                  <div
                    className="h-full w-full animate-pulse rounded-full border border-primary/30"
                    style={{
                      animationDuration: "2.5s",
                      animationDelay: "0.5s",
                    }}
                  />
                </div>
                <div className="absolute inset-16 flex items-center justify-center">
                  <div
                    className="h-full w-full animate-pulse rounded-full border border-forest/40"
                    style={{ animationDuration: "2s", animationDelay: "1s" }}
                  />
                </div>

                {/* Center Content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-forest to-primary shadow-2xl shadow-forest/30 lg:h-40 lg:w-40">
                    <div className="text-center text-white">
                      <div className="text-3xl font-bold lg:text-4xl">∞</div>
                      <div className="text-xs font-medium opacity-80 lg:text-sm">
                        Possibilities
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Data Points */}
                <div className="absolute right-8 top-8 rounded-xl border border-border/50 bg-white px-4 py-2 shadow-lg">
                  <div className="text-lg font-bold text-forest">+47%</div>
                  <div className="text-xs text-muted-foreground">Growth</div>
                </div>
                <div className="absolute bottom-12 left-4 rounded-xl border border-border/50 bg-white px-4 py-2 shadow-lg">
                  <div className="text-lg font-bold text-primary">3.2x</div>
                  <div className="text-xs text-muted-foreground">ROI</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EliteCTASection;
