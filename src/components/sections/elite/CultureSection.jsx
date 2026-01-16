import { ArrowRight, ExternalLink, GraduationCap, Play, Users } from "lucide-react";

const CultureSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-mint/40 relative overflow-hidden">
      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 border border-primary/20 rounded-full" />
        <div className="absolute top-32 left-32 w-40 h-40 border border-primary/20 rounded-full" />
        <div className="absolute bottom-20 right-20 w-80 h-80 border border-forest/10 rounded-full" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header Row */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="section-label mb-4 block">Careers & Culture</span>
            <h2 className="heading-section">
              Grow <span className="text-gradient-primary">With Us</span>
            </h2>
          </div>
          <button className="btn-primary group self-start lg:self-auto">
            <span>See Open Roles</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">

          {/* Large Featured Card - University */}
          <div className="lg:col-span-7 group">
            <div className="relative h-full min-h-[400px] lg:min-h-[480px] rounded-3xl overflow-hidden bg-gradient-to-br from-forest via-forest to-primary p-8 lg:p-10">
              {/* Abstract Shapes */}
              <div className="absolute top-0 right-0 w-72 h-72 bg-white/5 rounded-full -translate-y-1/3 translate-x-1/3" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/20 rounded-full translate-y-1/2 -translate-x-1/4" />

              {/* Icon Badge */}
              <div className="relative z-10 w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mb-auto">
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>

              {/* Content */}
              <div className="relative z-10 mt-auto pt-24">
                <h3 className="text-2xl lg:text-3xl font-serif font-semibold text-white mb-4 leading-tight">
                  Groot Analytics Academy
                </h3>
                <p className="text-white/80 text-base lg:text-lg leading-relaxed mb-6 max-w-lg">
                  A home for the curious, our Academy is a living university, blending art, science, & business to grow explorers and first-principle thinkers.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-primary font-semibold group/link"
                >
                  <span>Explore Academy</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover/link:translate-x-1" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Stacked Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6 lg:gap-8">

            {/* Video Card */}
            <div className="group relative rounded-3xl overflow-hidden bg-card border border-border/50 shadow-lg">
              <div className="relative h-56 bg-gradient-to-br from-primary/20 via-mint to-accent/10">
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 w-16 h-16 rounded-full bg-forest/30 animate-ping" style={{ animationDuration: '2s' }} />
                    <button className="relative w-16 h-16 rounded-full bg-forest flex items-center justify-center shadow-xl shadow-forest/30 group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 text-white ml-1" fill="currentColor" />
                    </button>
                  </div>
                </div>

                {/* Overlay Pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-1/2 left-1/4 w-32 h-32 border border-forest/30 rounded-full" />
                  <div className="absolute top-1/2 right-1/4 w-24 h-24 border border-forest/30 rounded-full" />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-serif font-semibold text-foreground mb-2">
                  Ontologies and Agentic AI
                </h3>
                <a href="#" className="inline-flex items-center gap-2 text-primary font-semibold text-sm group/link">
                  <span>Watch On LinkedIn</span>
                  <ExternalLink className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </a>
              </div>
            </div>

            {/* Family Day Card */}
            <div className="group relative rounded-3xl overflow-hidden bg-card border border-border/50 shadow-lg hover:shadow-xl transition-shadow p-6 lg:p-8">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center shrink-0">
                  <Users className="w-7 h-7 text-accent" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-serif font-semibold text-foreground mb-2">
                    Family Day Program
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    A day of learning, laughter, and togetherness where families experience the curiosity and collaboration that define Groot.
                  </p>
                  <a href="#" className="inline-flex items-center gap-2 text-primary font-semibold text-sm group/link">
                    <span>Know More</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats Row */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {[
            { value: "200+", label: "Team Members" },
            { value: "15+", label: "Countries" },
            { value: "92%", label: "Retention Rate" },
            { value: "4.8", label: "Glassdoor Rating" },
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-border/30">
              <div className="text-3xl lg:text-4xl font-bold text-gradient-primary mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CultureSection;
