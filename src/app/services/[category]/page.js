
import { SERVICE_CATEGORIES } from "@/lib/constants/services";
import { ArrowLeft, ArrowRight, ChevronRight } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return SERVICE_CATEGORIES.map((category) => ({
    category: category.slug,
  }));
}

export default async function ServiceCategoryPage({ params }) {
  const { category } = await params;

  const categoryData = SERVICE_CATEGORIES.find((c) => c.slug === category);
  if (!categoryData) return notFound();

  const Icon = categoryData.icon;

  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6">
        {/* Breadcrumb / Back Link */}
        <div className="mb-8">
          <Link
            href="/services" // Assuming a main services page exists, or home
            className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to All Services
          </Link>
        </div>

        {/* Header */}
        <div className="flex flex-col md:flex-row gap-8 items-start mb-16 border-b border-border pb-12">
          <div className="p-4 bg-primary/10 rounded-xl text-primary shrink-0">
            <Icon size={48} />
          </div>
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {categoryData.title}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              {categoryData.description}. Explore our specialized solutions designed to transform your data capabilities.
            </p>
          </div>
        </div>

        {/* Sub-Services Grid */}
        <h2 className="text-2xl font-bold mb-8">Service Capabilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryData.subServices.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${categoryData.slug}/${service.slug}`}
              className="group block p-6 border border-border rounded-xl hover:border-primary/50 hover:bg-muted/30 transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/5 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <ArrowRight size={20} className="-rotate-45 group-hover:rotate-0 transition-transform" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                Learn more about our {service.title} solutions <ChevronRight size={14} className="inline-block" />
              </p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
