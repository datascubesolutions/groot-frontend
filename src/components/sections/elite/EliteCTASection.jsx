import { ArrowRight, Sparkles, TrendingUp, Zap } from "lucide-react";

const EliteCTASection = () => {
  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Ambient Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Split Layout */}
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-0 items-center">

            {/* Left - Content */}
            <div className="lg:col-span-3 lg:pr-12">
              {/* Floating Pills */}
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-forest/10 text-forest text-sm font-medium">
                  <Sparkles className="w-4 h-4" />
                  AI-Powered
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  <Zap className="w-4 h-4" />
                  Real-Time
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium">
                  <TrendingUp className="w-4 h-4" />
                  Scalable
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-foreground mb-6 tracking-tight leading-[1.1]">
                It's Time to{" "}
                <span className="text-gradient-primary relative">
                  Do the Math.
                  {/* Underline Decoration */}
                  <svg className="absolute -bottom-2 left-0 w-full h-3 text-primary/30" viewBox="0 0 200 12" preserveAspectRatio="none">
                    <path d="M0,8 Q50,0 100,8 T200,8" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                </span>
              </h2>

              <p className="text-lg lg:text-xl text-muted-foreground max-w-xl leading-relaxed mb-10">
                Let's turn your data, algorithms, and curiosity into decisions that move the markets.
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="btn-primary group text-base lg:text-lg py-5 px-10">
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </button>
                <button className="btn-secondary text-base lg:text-lg py-5 px-10">
                  Schedule a Demo
                </button>
              </div>
            </div>

            {/* Right - Visual Element */}
            <div className="lg:col-span-2 relative">
              <div className="relative aspect-square max-w-sm mx-auto lg:max-w-none">
                {/* Concentric Circles */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-full rounded-full border border-border/40 animate-pulse" style={{ animationDuration: '3s' }} />
                </div>
                <div className="absolute inset-8 flex items-center justify-center">
                  <div className="w-full h-full rounded-full border border-primary/30 animate-pulse" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }} />
                </div>
                <div className="absolute inset-16 flex items-center justify-center">
                  <div className="w-full h-full rounded-full border border-forest/40 animate-pulse" style={{ animationDuration: '2s', animationDelay: '1s' }} />
                </div>

                {/* Center Content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full bg-gradient-to-br from-forest to-primary flex items-center justify-center shadow-2xl shadow-forest/30">
                    <div className="text-center text-white">
                      <div className="text-3xl lg:text-4xl font-bold">∞</div>
                      <div className="text-xs lg:text-sm font-medium opacity-80">Possibilities</div>
                    </div>
                  </div>
                </div>

                {/* Floating Data Points */}
                <div className="absolute top-8 right-8 px-4 py-2 bg-white rounded-xl shadow-lg border border-border/50">
                  <div className="text-lg font-bold text-forest">+47%</div>
                  <div className="text-xs text-muted-foreground">Growth</div>
                </div>
                <div className="absolute bottom-12 left-4 px-4 py-2 bg-white rounded-xl shadow-lg border border-border/50">
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
