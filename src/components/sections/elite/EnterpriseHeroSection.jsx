import { ArrowRight, Shield, TrendingUp, Zap } from "lucide-react";

const EnterpriseHeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero pt-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[calc(100vh-5rem)] py-16 gap-12">
          {/* Content */}
          <div className="flex-1 max-w-2xl">
            <div className="section-label mb-6 animate-fade-in">
              Enterprise Solutions
            </div>

            <h1 className="heading-display mb-6 animate-slide-up">
              Transform Your Business with{" "}
              <span className="text-gradient-primary">Data-Driven</span>{" "}
              Intelligence
            </h1>

            <p className="body-large mb-10 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              We partner with Fortune 500 companies to unlock actionable insights,
              optimize operations, and drive sustainable growth through advanced
              analytics and strategic consulting.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <button className="btn-primary">
                Schedule Consultation
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="btn-secondary">
                View Case Studies
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-mint flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-forest" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground font-serif">$2.4B+</div>
                  <div className="text-sm text-muted-foreground">Revenue Generated</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-mint flex items-center justify-center">
                  <Shield className="w-6 h-6 text-forest" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground font-serif">500+</div>
                  <div className="text-sm text-muted-foreground">Enterprise Clients</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-mint flex items-center justify-center">
                  <Zap className="w-6 h-6 text-forest" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground font-serif">98%</div>
                  <div className="text-sm text-muted-foreground">Client Retention</div>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="flex-1 max-w-xl w-full animate-scale-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              {/* Main Card */}
              <div className="card-corporate p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <TrendingUp className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-foreground">Real-Time Analytics</div>
                    <div className="text-sm text-muted-foreground">Live Dashboard</div>
                  </div>
                </div>

                {/* Chart Placeholder */}
                <div className="h-48 bg-mint rounded-xl mb-6 flex items-end justify-around p-4 gap-2">
                  {[65, 45, 80, 55, 90, 70, 85].map((height, i) => (
                    <div
                      key={i}
                      className="w-full max-w-8 bg-gradient-to-t from-forest to-primary rounded-t-md transition-all duration-500"
                      style={{ height: `${height}%`, animationDelay: `${i * 0.1}s` }}
                    />
                  ))}
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-3 bg-secondary rounded-lg">
                    <div className="text-xl font-bold text-forest font-serif">+34%</div>
                    <div className="text-xs text-muted-foreground">Growth</div>
                  </div>
                  <div className="text-center p-3 bg-secondary rounded-lg">
                    <div className="text-xl font-bold text-accent font-serif">$1.2M</div>
                    <div className="text-xs text-muted-foreground">Savings</div>
                  </div>
                  <div className="text-center p-3 bg-secondary rounded-lg">
                    <div className="text-xl font-bold text-primary font-serif">98.5%</div>
                    <div className="text-xs text-muted-foreground">Accuracy</div>
                  </div>
                </div>
              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 card-corporate p-4 max-w-xs">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">ISO 27001 Certified</div>
                    <div className="text-xs text-muted-foreground">Enterprise Security</div>
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
