// @ts-nocheck
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export const metadata = {
  title: "Terms of Service | Groot Analytics",
  description: "Terms of Service for Groot Analytics.",
};

export default function TermsPage() {
  return (
    <main className="pt-20">
      <Breadcrumb items={[{ label: "Terms of Service", href: "/terms" }]} />

      <section className="py-24">
        <div className="container mx-auto max-w-4xl px-6">
          <h1 className="mb-8 text-4xl font-bold">Terms of Service</h1>
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="mb-4">
              Last Updated: {new Date().toLocaleDateString()}
            </p>

            <h2 className="mb-4 mt-8 text-2xl font-bold text-foreground">
              1. Agreement to Terms
            </h2>
            <p>
              These Terms of Service constitute a legally binding agreement made
              between you, whether personally or on behalf of an entity
              (&quot;you&quot;) and Groot Analytics (&quot;we,&quot;
              &quot;us&quot; or &quot;our&quot;), concerning your access to and
              use of our website.
            </p>

            <h2 className="mb-4 mt-8 text-2xl font-bold text-foreground">
              2. Intellectual Property Rights
            </h2>
            <p>
              Unless otherwise indicated, the Site is our proprietary property
              and all source code, databases, functionality, software, website
              designs, audio, video, text, photographs, and graphics on the Site
              (collectively, the &quot;Content&quot;) and the trademarks,
              service marks, and logos contained therein (the &quot;Marks&quot;)
              are owned or controlled by us or licensed to us, and are protected
              by copyright and trademark laws.
            </p>

            <h2 className="mb-4 mt-8 text-2xl font-bold text-foreground">
              3. User Representations
            </h2>
            <p>
              By using the Site, you represent and warrant that: (1) all
              registration information you submit will be true, accurate,
              current, and complete; (2) you will maintain the accuracy of such
              information and promptly update such registration information as
              necessary; (3) you have the legal capacity and you agree to comply
              with these Terms of Service.
            </p>

            <h2 className="mb-4 mt-8 text-2xl font-bold text-foreground">
              4. Prohibited Activities
            </h2>
            <p>
              You may not access or use the Site for any purpose other than that
              for which we make the Site available. The Site may not be used in
              connection with any commercial endeavors except those that are
              specifically endorsed or approved by us.
            </p>

            <h2 className="mb-4 mt-8 text-2xl font-bold text-foreground">
              5. Limitation of Liability
            </h2>
            <p>
              In no event will we or our directors, employees, or agents be
              liable to you or any third party for any direct, indirect,
              consequential, exemplary, incidental, special, or punitive
              damages, including lost profit, lost revenue, loss of data, or
              other damages arising from your use of the site, even if we have
              been advised of the possibility of such damages.
            </p>

            <h2 className="mb-4 mt-8 text-2xl font-bold text-foreground">
              6. Contact Us
            </h2>
            <p>
              In order to resolve a complaint regarding the Site or to receive
              further information regarding use of the Site, please contact us
              at:{" "}
              <a
                href="mailto:legal@grootanalytics.com"
                className="text-primary hover:underline"
              >
                legal@grootanalytics.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
