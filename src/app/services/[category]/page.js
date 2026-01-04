import { Breadcrumbs, generateBreadcrumbsFromPath } from "@/components/seo";
import { Container } from "@/components/ui";

// This would typically fetch data based on the slug
export async function generateMetadata({ params }) {
  const { category } = await params;
  const title = category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return {
    title: `${title} | Biztech`,
    description: `Explore our ${title} services.`,
  };
}

export default async function ServiceCategoryPage({ params }) {
  const { category } = await params;
  const title = category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  const breadcrumbs = generateBreadcrumbsFromPath(`/services/${category}`);

  return (
    <div className="min-h-screen pt-20">
      <Container>
        <div className="py-8">
          <Breadcrumbs items={breadcrumbs} />
        </div>

        <div className="py-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent mb-6">
            {title}
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl">
            We offer specialized solutions in {title} to help your business innovate and grow.
          </p>
        </div>
      </Container>
    </div>
  );
}
