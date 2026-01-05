import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { Briefcase, Heart, Lightbulb, Shield, Target, TrendingUp, Users } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "About Us | Groot Analytics",
  description: "Learn about Groot Analytics - who we are, what we believe, and how we help organizations transform data into decisions.",
};

export default function AboutPage() {
  return (
    <main className="pt-20">
      <Breadcrumb items={[{ label: "About Us", href: "/about" }]} />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-background border-b border-border overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            About Groot Analytics
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
            We transform data into decisions that matter. Not just dashboards. Not just pipelines. Real business impact.
          </p>
          <div className="flex gap-4 justify-center">
            <Button variant="hero" size="lg">Our Story</Button>
            <Button variant="outline" size="lg">Join Our Team</Button>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <QuickLinkCard
              icon={Users}
              title="Who We Are"
              description="Our team, values, and what makes us different"
              href="/about/who-we-are"
            />
            <QuickLinkCard
              icon={Target}
              title="What We Do"
              description="Our services and how we help businesses"
              href="/about/what-we-do"
            />
            <QuickLinkCard
              icon={Lightbulb}
              title="How We Do It"
              description="Our methodology and approach"
              href="/about/how-we-do-it"
            />
            <QuickLinkCard
              icon={Heart}
              title="Our Story"
              description="The journey that brought us here"
              href="/about/our-story"
            />
            <QuickLinkCard
              icon={TrendingUp}
              title="Why Join Us"
              description="Learn about our culture and opportunities"
              href="/about/why-join-us"
            />
            <QuickLinkCard
              icon={Briefcase}
              title="Careers"
              description="View open positions and join our team"
              href="/about/careers"
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6">
                <Target className="text-primary" size={32} />
              </div>
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To empower organizations with data systems that don't just store information, but drive intelligent decisions,
                automate processes, and create measurable business value.
              </p>
            </div>
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6">
                <TrendingUp className="text-primary" size={32} />
              </div>
              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A world where every business decision is informed by reliable data, where analytics is accessible to everyone,
                and where AI augments human intelligence rather than replacing it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ValueCard
              icon={Shield}
              title="Integrity First"
              description="We're honest about what works and what doesn't. No overselling, no vendor lock-in, no hidden agendas."
            />
            <ValueCard
              icon={Users}
              title="Client Partnership"
              description="We're not just vendors—we're partners invested in your long-term success."
            />
            <ValueCard
              icon={Lightbulb}
              title="Innovation with Purpose"
              description="We embrace new technology, but only when it solves real business problems."
            />
            <ValueCard
              icon={Target}
              title="Results-Driven"
              description="Every project must deliver measurable business value. Period."
            />
            <ValueCard
              icon={Heart}
              title="People-Centric"
              description="Technology serves people, not the other way around. We design for humans."
            />
            <ValueCard
              icon={TrendingUp}
              title="Continuous Learning"
              description="The data landscape evolves rapidly. We stay ahead so you don't fall behind."
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCard value="19+" label="Years of Experience" />
            <StatCard value="1200+" label="Projects Completed" />
            <StatCard value="250+" label="Team Members" />
            <StatCard value="98%" label="Client Retention" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary/5">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Want to Learn More?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Explore our story, meet our team, or get in touch to discuss your data challenges.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button variant="hero" size="lg">Read Our Story</Button>
            <Button variant="outline" size="lg">Contact Us</Button>
          </div>
        </div>
      </section>
    </main>
  );
}

function QuickLinkCard({ icon: Icon, title, description, href }) {
  return (
    <Link href={href} prefetch={true} className="group">
      <div className="p-6 bg-background rounded-xl border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 h-full">
        <Icon className="text-primary mb-4 group-hover:scale-110 transition-transform" size={32} />
        <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </Link>
  );
}

function ValueCard({ icon: Icon, title, description }) {
  return (
    <div className="p-6 bg-background rounded-xl border border-border">
      <Icon className="text-primary mb-4" size={28} />
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}

function StatCard({ value, label }) {
  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{value}</div>
      <div className="text-sm text-muted-foreground font-medium">{label}</div>
    </div>
  );
}
