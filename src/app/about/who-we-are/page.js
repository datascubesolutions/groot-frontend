import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { Award, Globe, Shield, Users } from "lucide-react";

export const metadata = {
  title: "Who We Are | Groot Analytics",
  description: "Meet the team behind Groot Analytics and learn about our values and culture.",
};

export default function WhoWeArePage() {
  return (
    <main className="pt-20">
      <Breadcrumb
        items={[
          { label: "About Us", href: "/about" },
          { label: "Who We Are", href: "/about/who-we-are" }
        ]}
      />

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Who We Are</h1>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              We're a team of data engineers, analytics specialists, and AI practitioners who believe data should empower people, not confuse them.
            </p>

            <div className="prose prose-lg max-w-none mb-16">
              <h2 className="text-3xl font-bold mb-4">Our Background</h2>
              <p className="text-muted-foreground mb-6">
                Groot Analytics was born from a simple observation: most organizations struggle not because they lack data,
                but because they lack the right systems, strategy, and expertise to turn that data into action.
              </p>
              <p className="text-muted-foreground mb-6">
                We've worked across industries—from private equity firms managing complex M&A integrations to manufacturers
                optimizing supply chains, from healthcare providers improving patient outcomes to financial services firms
                building real-time risk models.
              </p>
              <p className="text-muted-foreground mb-6">
                What unites us isn't just technical skill—it's a shared belief that analytics should drive action,
                not just look pretty. That AI should solve real problems, not chase hype. And that the best solutions
                are built in partnership with clients, not imposed on them.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="p-8 bg-muted/30 rounded-2xl">
                <Users className="text-primary mb-4" size={40} />
                <h3 className="text-2xl font-bold mb-3">True Multi-Cloud Independence</h3>
                <p className="text-muted-foreground">
                  We are not tied to a single vendor. Whether your stack is on Azure, AWS, GCP, or multi-cloud, we optimize for *your* cost and performance needs, not a vendor's roadmap.
                </p>
              </div>

              <div className="p-8 bg-muted/30 rounded-2xl">
                <Shield className="text-primary mb-4" size={40} />
                <h3 className="text-2xl font-bold mb-3">Governance & Quality First</h3>
                <p className="text-muted-foreground">
                  Data without trust is noise. We build governance, quality, and observability into everything we do,
                  so you can make decisions with confidence.
                </p>
              </div>

              <div className="p-8 bg-muted/30 rounded-2xl">
                <Award className="text-primary mb-4" size={40} />
                <h3 className="text-2xl font-bold mb-3">Decision-Centric Design</h3>
                <p className="text-muted-foreground">
                  Analytics that don't drive action are just dashboards. We design systems that help people make better
                  decisions, faster, with less friction.
                </p>
              </div>

              <div className="p-8 bg-muted/30 rounded-2xl">
                <Globe className="text-primary mb-4" size={40} />
                <h3 className="text-2xl font-bold mb-3">Built to Scale</h3>
                <p className="text-muted-foreground">
                  Whether you're a growing startup or a global enterprise, we build solutions that scale with you—from
                  architecture to team capabilities.
                </p>
              </div>
            </div>

            <div className="bg-primary/5 border border-primary/10 rounded-2xl p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Want to Join Us?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                We're always looking for talented individuals who share our values and passion for data-driven innovation.
              </p>
              <Button variant="hero" size="lg">View Open Positions</Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
