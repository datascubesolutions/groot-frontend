import { Breadcrumbs, generateBreadcrumbsFromPath } from "@/components/seo";
import { Container } from "@/components/ui";

export async function generateMetadata({ params }) {
  const { service } = await params;
  const title = service.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return {
    title: `${title} | Biztech Services`,
  };
}

export default async function ServiceDetailPage({ params }) {
  const resolvedParams = await params;
  const { category, service } = resolvedParams;
  const title = service.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  const breadcrumbs = generateBreadcrumbsFromPath(`/services/${category}/${service}`);

  return (
    <div className="min-h-screen pt-20">
      <Container>
        <div className="py-8">
          <Breadcrumbs items={breadcrumbs} />
        </div>

        <div className="py-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-6">
            {title}
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mb-8">
            Detailed information about our {title} service in the {category.replace(/-/g, ' ')} domain.
          </p>

          <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100">
            <h2 className="text-2xl font-semibold mb-4">Service Overview</h2>
            <p className="text-slate-600 mb-4">
              Our expert team delivers high-quality results for {title}, ensuring your specific requirements are met with precision and excellence.
            </p>
            <button className="bg-orange-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-orange-700 transition-colors">
              Get Started with {title}
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
}
