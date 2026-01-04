import { Breadcrumbs } from "@/components/seo";
import { Container } from "@/components/ui";

export const metadata = {
  title: "Services",
  description: "Explore our comprehensive software development and data engineering services.",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-20"> {/* Add padding for fixed header */}
      <Container>
        <div className="py-8">
          <Breadcrumbs items={[{ name: "Services", path: "/services" }]} />
        </div>

        <div className="py-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-6">
            Our Services
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl">
            We deliver cutting-edge solutions across the entire digital spectrum, from product strategy to cloud operations.
          </p>
        </div>
      </Container>

      {/* Placeholder content - In real app, this would be sections */}
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">
          {['Software Product Development', 'AI-Powered Solutions', 'Enterprise Applications', 'Custom Software', 'Ecommerce', 'CloudOps'].map((service) => (
            <div key={service} className="p-6 rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center mb-4">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{service}</h3>
              <p className="text-slate-500">Comprehensive solutions tailored to your business needs ensuring scalability and performance.</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
