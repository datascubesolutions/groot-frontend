// @ts-nocheck
import { ArrowRight, Shield, TrendingUp, Zap } from "lucide-react";

const EnterpriseHeroSection = () => {
  return (
    <section className="bg-gradient-hero relative min-h-screen overflow-hidden pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute right-20 top-20 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-20 left-20 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="flex min-h-[calc(100vh-5rem)] flex-col items-center justify-between gap-12 py-20 md:py-24 lg:flex-row">
          {/* Content */}
          <div className="max-w-2xl flex-1">
            <div className="section-label animate-fade-in mb-6">
              Growth Solutions
            </div>

            <h1 className="heading-display animate-slide-up mb-6">
              Engineered for{" "}
              <span className="bg-gradient-to-r from-[hsl(168,76%,40%)] to-[hsl(142,71%,38%)] bg-clip-text text-transparent">
                Impact
              </span>
            </h1>

            <p
              className="body-large animate-slide-up mb-10"
              style={{ animationDelay: "0.1s" }}
            >
              We refuse to let complexity equate to slowness. We re-engineer
              supply chains, automate data pipelines, and orchestrate sub-second
              decision systems to secure your market leadership.
            </p>

            <div
              className="animate-slide-up mb-16 flex flex-col gap-4 sm:flex-row"
              style={{ animationDelay: "0.2s" }}
            >
              <button className="btn-primary">
                Schedule Consultation
                <ArrowRight className="h-5 w-5" />
              </button>
              <button className="btn-secondary">View Solutions</button>
            </div>

            {/* Trust Indicators */}
            <div
              className="animate-fade-in flex flex-wrap gap-8"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-mint">
                  <TrendingUp className="h-6 w-6 text-forest" />
                </div>
                <div>
                  <div className="font-serif text-2xl font-bold text-foreground">
                    10x
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Faster Insights
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-mint">
                  <Shield className="h-6 w-6 text-forest" />
                </div>
                <div>
                  <div className="font-serif text-2xl font-bold text-foreground">
                    Secure
                  </div>
                  <div className="text-sm text-muted-foreground">By Design</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-mint">
                  <Zap className="h-6 w-6 text-forest" />
                </div>
                <div>
                  <div className="font-serif text-2xl font-bold text-foreground">
                    Rapid
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Deployment
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div
            className="animate-scale-in w-full max-w-xl flex-1"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="relative">
              {/* Main Card */}
              <div className="card-corporate p-8">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent">
                    <TrendingUp className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-foreground">
                      Growth Analytics
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Live Dashboard
                    </div>
                  </div>
                </div>

                {/* Chart Placeholder */}
                <div className="mb-6 flex h-48 items-end justify-around gap-2 rounded-xl bg-mint p-4">
                  {[65, 45, 80, 55, 90, 70, 85].map((height, i) => (
                    <div
                      key={i}
                      className="w-full max-w-8 rounded-t-md bg-gradient-to-t from-forest to-primary transition-all duration-500"
                      style={{
                        height: `${height}%`,
                        animationDelay: `${i * 0.1}s`,
                      }}
                    />
                  ))}
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="rounded-lg bg-secondary p-3 text-center">
                    <div className="font-serif text-xl font-bold text-forest">
                      +300%
                    </div>
                    <div className="text-xs text-muted-foreground">Scale</div>
                  </div>
                  <div className="rounded-lg bg-secondary p-3 text-center">
                    <div className="font-serif text-xl font-bold text-accent">
                      -40%
                    </div>
                    <div className="text-xs text-muted-foreground">Costs</div>
                  </div>
                  <div className="rounded-lg bg-secondary p-3 text-center">
                    <div className="font-serif text-xl font-bold text-primary">
                      99.9%
                    </div>
                    <div className="text-xs text-muted-foreground">Uptime</div>
                  </div>
                </div>
              </div>

              {/* Floating Card */}
              <div className="card-corporate absolute -bottom-6 -left-6 max-w-xs p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/20">
                    <Shield className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">
                      Best Practices
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Industry Standards
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnterpriseHeroSection;
