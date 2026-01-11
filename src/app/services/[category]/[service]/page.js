import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { SERVICE_CATEGORIES } from "@/lib/constants/services";
import {
  ArrowRight,
  CheckCircle,
  ChevronRight,
  Clock,
  Shield,
  TrendingUp,
  Zap
} from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  const params = [];
  SERVICE_CATEGORIES.forEach((category) => {
    category.subServices.forEach((subService) => {
      params.push({
        category: category.slug,
        service: subService.slug,
      });
    });
  });
  return params;
}

export async function generateMetadata({ params }) {
  const { category, service } = await params;
  const categoryData = SERVICE_CATEGORIES.find((c) => c.slug === category);
  const serviceData = categoryData?.subServices.find((s) => s.slug === service);

  if (!serviceData) return { title: "Service Not Found" };

  return {
    title: `${serviceData.title} | ${categoryData.title}`,
    description: `Professional ${serviceData.title} services by Groot Analytics. Part of our comprehensive ${categoryData.title} solutions.`,
  };
}

export default async function SubServicePage({ params }) {
  const { category, service } = await params;

  const categoryData = SERVICE_CATEGORIES.find((c) => c.slug === category);
  if (!categoryData) return notFound();

  const serviceData = categoryData.subServices.find((s) => s.slug === service);
  if (!serviceData) return notFound();

  const relatedServices = categoryData.subServices.filter(s => s.slug !== service);

  return (
    <main className="pt-20">
      <Breadcrumb
        items={[
          { label: "Services", href: "/services" },
          { label: categoryData.title, href: categoryData.href },
          { label: serviceData.title, href: "#" }
        ]}
      />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-background border-b border-border overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            {categoryData.title}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-foreground">
            {serviceData.title}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
            Enterprise-grade solutions for {serviceData.title}. We combine deep industry expertise with cutting-edge technology to drive measurable results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              Get Started
            </Button>
            <Button variant="outline" size="lg">
              View Case Studies
            </Button>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Why {serviceData.title} Matters
              </h2>
              <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground mb-8">
                <p>
                  In a rapidly evolving digital landscape, <strong>{serviceData.title}</strong> is critical for maintaining a competitive edge.
                  Our approach goes beyond basic implementation; we align our technical strategies directly with your overarching business goals.
                </p>
                <p>
                  We leverage best-in-class frameworks and tools to ensure scalability, security, and performance. Whether you are looking to modernize legacy systems or build from scratch, our dedicated experts provide the guidance you need.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Industry Best Practices",
                  "Scalable Architecture",
                  "Dedicated Expert Team",
                  "Continuous Optimization"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="p-1 rounded-full bg-green-500/10 text-green-600">
                      <CheckCircle size={16} strokeWidth={3} />
                    </div>
                    <span className="font-medium text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:w-1/2 relative">
              <div className="aspect-square bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl border border-border relative overflow-hidden flex items-center justify-center">
                <categoryData.icon className="text-primary w-40 h-40 opacity-10" />
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />

                {/* Floating abstract cards */}
                <div className="absolute top-1/4 right-1/4 p-4 bg-background border border-border rounded-xl shadow-xl transform rotate-6 animate-pulse">
                  <TrendingUp className="text-primary w-8 h-8" />
                </div>
                <div className="absolute bottom-1/4 left-1/4 p-4 bg-background border border-border rounded-xl shadow-xl transform -rotate-3">
                  <Zap className="text-secondary w-8 h-8" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">The Groot Advantage</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              How our {serviceData.title} services drive value for your organization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <BenefitCard
              icon={Clock}
              title="Accelerated Time-to-Market"
              description="Rapid prototyping and agile delivery models ensure you realize value faster."
            />
            <BenefitCard
              icon={Shield}
              title="Enterprise Security"
              description="Security and compliance are baked into our processes from day one, not an afterthought."
            />
            <BenefitCard
              icon={TrendingUp}
              title="Metric-Driven Results"
              description="We strictly focus on initiatives that move the needle for your business KPIs."
            />
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">Related Services</h2>
              <p className="text-muted-foreground">More from {categoryData.title}</p>
            </div>
            <Link href={categoryData.href} className="text-primary font-semibold hover:underline flex items-center gap-1">
              View All <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedServices.slice(0, 3).map((s) => (
              <Link key={s.slug} href={`${categoryData.href}/${s.slug}`} className="group block">
                <div className="p-6 h-full rounded-xl bg-background border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                    <ChevronRight size={20} />
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    Advanced capabilities in {s.title} to complement your current stack.
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="bg-primary/5 border border-primary/10 rounded-3xl p-12 text-center md:text-left md:flex items-center justify-between">
            <div className="mb-8 md:mb-0 md:w-2/3">
              <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
              <p className="text-lg text-muted-foreground">
                Let's discuss how our {serviceData.title} solutions can help you achieve your goals.
              </p>
            </div>
            <div className="md:w-1/3 flex justify-center md:justify-end">
              <Button variant="hero" size="lg" className="px-8" asChild>
                <Link href="/contact">Schedule a Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function BenefitCard({ icon: Icon, title, description }) {
  return (
    <div className="p-8 bg-background rounded-2xl border border-border hover:border-primary/30 transition-colors">
      <div className="mb-5 p-3 bg-muted w-fit rounded-xl text-foreground">
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  )
}
