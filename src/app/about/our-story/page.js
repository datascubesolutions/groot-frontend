import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { Award, Lightbulb, Rocket, Users } from "lucide-react";

export const metadata = {
  title: "Our Story | Groot Analytics",
  description: "The journey of Groot Analytics - from inception to becoming a trusted data partner.",
};

export default function OurStoryPage() {
  return (
    <main className="pt-20">
      <Breadcrumb
        items={[
          { label: "About Us", href: "/about" },
          { label: "Our Story", href: "/about/our-story" }
        ]}
      />

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h1>
            <p className="text-xl text-muted-foreground mb-16 leading-relaxed">
              Groot Analytics was founded on a simple belief: data should empower decisions, not create confusion.
            </p>

            <div className="prose prose-lg max-w-none space-y-8 mb-16">
              <div>
                <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                  <Rocket className="text-primary" size={32} />
                  The Beginning
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our founders came from the world of private equity and enterprise analytics, where they saw the same
                  problems repeated: organizations drowning in data but starving for insights. Expensive platforms that
                  nobody used. Consultants who delivered beautiful slide decks but no working systems. AI projects that
                  never made it to production.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  There had to be a better way.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                  <Lightbulb className="text-primary" size={32} />
                  The Insight
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  The problem wasn't technology—it was approach. Organizations didn't need more features. They needed
                  systems designed for their specific context, built by people who understood both the business and the tech.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  They needed partners, not vendors. Engineers, not PowerPoint consultants. Solutions that worked, not
                  proof-of-concepts that sat on a shelf.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                  <Users className="text-primary" size={32} />
                  Building the Team
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We assembled a team of data engineers, analytics specialists, and AI practitioners who shared this vision.
                  People who had built real systems at scale. Who understood the difference between a demo and production.
                  Who cared about business outcomes, not just technical elegance.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  We established offshore centers to provide cost-effective capacity without compromising quality. We built
                  partnerships with leading technology providers while maintaining our vendor-neutral stance. We created
                  frameworks and accelerators to deliver faster without cutting corners.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                  <Award className="text-primary" size={32} />
                  Today
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Today, Groot Analytics serves clients across industries—from startups to Fortune 500 companies. We've
                  delivered over 1,200 projects, built data platforms processing billions of records, deployed AI models
                  in production, and helped organizations make better decisions faster.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  But we're still guided by the same principles that started us: integrity, partnership, results. We're
                  still engineers who write code. We're still vendor-neutral. We're still obsessed with business value.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  And we're just getting started.
                </p>
              </div>
            </div>

            <div className="bg-primary/5 border border-primary/10 rounded-2xl p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Want to Be Part of Our Story?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Whether you're a client looking for a data partner or a talented professional looking for your next challenge,
                we'd love to hear from you.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Button variant="hero" size="lg">Work With Us</Button>
                <Button variant="outline" size="lg">Join Our Team</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
