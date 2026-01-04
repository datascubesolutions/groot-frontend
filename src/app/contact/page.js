import { Container } from "@/components/ui";
import { Breadcrumbs } from "@/components/seo";

export default function Page() {
  return (
    <div className="min-h-screen pt-20">
      <Container>
        <div className="py-8">
           <Breadcrumbs items={[{ name: "Page", path: "#" }]} />
        </div>
        <div className="py-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-6">Under Construction</h1>
          <p className="text-xl text-slate-600">This page is being built.</p>
        </div>
      </Container>
    </div>
  );
}
