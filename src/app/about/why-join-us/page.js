import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import {
  ArrowRight,
  BookOpen,
  DollarSign,
  Globe,
  Rocket,
  Scale,
  Users
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Why Join Us | Groot Analytics",
  description: "Work on cutting-edge projects, learn continuously, and build your career with a team that values excellence and growth.",
};

export default function WhyJoinUsPage() {
  return (
    <main className="pt-20">
      <Breadcrumb
        items={[
          { label: "About Us", href: "/about" },
          { label: "Why Join Us", href: "/about/why-join-us" }
        ]}
      />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-background border-b border-border overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Why Join Groot Analytics
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
            Work on cutting-edge projects, learn continuously, and build your career with a team that values excellence and growth.
          </p>
          <div className="flex gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link href="/about/careers" prefetch={true}>View Open Positions</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Build Your Career Here</h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
              At Groot, you won't be stuck maintaining legacy systems or working on projects that don't matter.
              You'll work on modern data platforms, deploy production AI systems, and solve complex problems
              for organizations that depend on your expertise.
            </p>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We're small enough that you matter, but connected enough to work on enterprise-scale challenges.
              Your work will have impact from day one.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">What We Offer</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <BenefitCard
              icon={Rocket}
              title="Cutting-Edge Projects"
              description="Work with modern tools and technologies—Azure, AWS, Databricks, Snowflake, Power BI, Python, AI/ML frameworks. No legacy maintenance."
            />
            <BenefitCard
              icon={BookOpen}
              title="Continuous Learning"
              description="Certifications, training budget, conference attendance, and dedicated learning time. We invest in your growth."
            />
            <BenefitCard
              icon={Globe}
              title="Remote-First Culture"
              description="Work from anywhere. We have team members across the US, UK, Australia, Canada, and Russia. Flexibility is built in."
            />
            <BenefitCard
              icon={DollarSign}
              title="Competitive Compensation"
              description="Market-rate salaries, performance bonuses, and equity options for senior roles. We pay for talent."
            />
            <BenefitCard
              icon={Users}
              title="Collaborative Team"
              description="Work with experienced practitioners who've built systems at scale. Learn from the best, contribute your ideas."
            />
            <BenefitCard
              icon={Scale}
              title="Work-Life Balance"
              description="Flexible hours, unlimited PTO, and a culture that respects boundaries. We value output, not hours logged."
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">By the Numbers</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center p-8 bg-background rounded-2xl border border-border shadow-sm">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">$5K</div>
              <div className="text-sm text-muted-foreground font-medium">Annual Learning Budget</div>
            </div>
            <div className="text-center p-8 bg-background rounded-2xl border border-border shadow-sm">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground font-medium">Remote Flexibility</div>
            </div>
            <div className="text-center p-8 bg-background rounded-2xl border border-border shadow-sm">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">5</div>
              <div className="text-sm text-muted-foreground font-medium">Countries Represented</div>
            </div>
            <div className="text-center p-8 bg-background rounded-2xl border border-border shadow-sm">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">∞</div>
              <div className="text-sm text-muted-foreground font-medium">PTO Days</div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Looking For */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Who We're Looking For</h2>

            <div className="space-y-8">
              <RoleSection
                title="Data Engineers"
                description="Build modern data platforms with cloud technologies, orchestrate complex pipelines, design scalable architectures."
              />
              <RoleSection
                title="Analytics Engineers"
                description="Create semantic models, build BI solutions, design data marts, enable self-service analytics."
              />
              <RoleSection
                title="AI/ML Engineers"
                description="Deploy production ML systems, build MLOps pipelines, develop NLP solutions, create intelligent automation."
              />
              <RoleSection
                title="Consultants & Strategists"
                description="Define data roadmaps, advise on platform selection, lead digital transformation initiatives."
              />
            </div>

            <div className="mt-12 p-8 bg-primary/5 rounded-2xl border border-primary/10 text-center">
              <p className="text-lg text-muted-foreground italic">
                "What matters most: intellectual curiosity, problem-solving ability, willingness to learn, and a drive to deliver quality work."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join Us?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Explore open positions and see if Groot Analytics is the right fit for your career.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link href="/about/careers" prefetch={true}>
              View Open Positions <ArrowRight size={20} className="ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}

function BenefitCard({ icon: Icon, title, description }) {
  return (
    <div className="p-8 bg-background rounded-2xl border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 h-full group">
      <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
        <Icon size={32} />
      </div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}

function RoleSection({ title, description }) {
  return (
    <div className="p-6 bg-background rounded-xl border border-border">
      <h3 className="text-xl font-bold text-primary mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  )
}
