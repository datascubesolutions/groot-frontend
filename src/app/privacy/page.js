// @ts-nocheck
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export const metadata = {
  title: "Privacy Policy | Groot Analytics",
  description: "Privacy Policy for Groot Analytics.",
};

export default function PrivacyPage() {
  return (
    <main className="pt-20">
      <Breadcrumb items={[{ label: "Privacy Policy", href: "/privacy" }]} />

      <section className="py-24">
        <div className="container mx-auto max-w-4xl px-6">
          <h1 className="mb-8 text-4xl font-bold">Privacy Policy</h1>
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="mb-4">
              Last Updated: {new Date().toLocaleDateString()}
            </p>

            <h2 className="mb-4 mt-8 text-2xl font-bold text-foreground">
              1. Introduction
            </h2>
            <p>
              Groot Analytics (&quot;we,&quot; &quot;our,&quot; or
              &quot;us&quot;) respects your privacy and is committed to
              protecting your personal data. This privacy policy will inform you
              as to how we look after your personal data when you visit our
              website and tell you about your privacy rights and how the law
              protects you.
            </p>

            <h2 className="mb-4 mt-8 text-2xl font-bold text-foreground">
              2. Data We Collect
            </h2>
            <p>
              We may collect, use, store and transfer different kinds of
              personal data about you which we have grouped together as follows:
            </p>
            <ul className="mb-4 list-disc space-y-2 pl-6">
              <li>
                <strong>Identity Data</strong> includes first name, last name,
                username or similar identifier.
              </li>
              <li>
                <strong>Contact Data</strong> includes email address and
                telephone number.
              </li>
              <li>
                <strong>Technical Data</strong> includes internet protocol (IP)
                address, browser type and version, time zone setting and
                location, browser plug-in types and versions, operating system
                and platform, and other technology on the devices you use to
                access this website.
              </li>
              <li>
                <strong>Usage Data</strong> includes information about how you
                use our website, products and services.
              </li>
            </ul>

            <h2 className="mb-4 mt-8 text-2xl font-bold text-foreground">
              3. How We Use Your Data
            </h2>
            <p>
              We will only use your personal data when the law allows us to.
              Most commonly, we will use your personal data in the following
              circumstances:
            </p>
            <ul className="mb-4 list-disc space-y-2 pl-6">
              <li>
                Where we need to perform the contract we are about to enter into
                or have entered into with you.
              </li>
              <li>
                Where it is necessary for our legitimate interests (or those of
                a third party) and your interests and fundamental rights do not
                override those interests.
              </li>
              <li>Where we need to comply with a legal obligation.</li>
            </ul>

            <h2 className="mb-4 mt-8 text-2xl font-bold text-foreground">
              4. Data Security
            </h2>
            <p>
              We have put in place appropriate security measures to prevent your
              personal data from being accidentally lost, used or accessed in an
              unauthorized way, altered or disclosed.
            </p>

            <h2 className="mb-4 mt-8 text-2xl font-bold text-foreground">
              5. Contact Us
            </h2>
            <p>
              If you have any questions about this privacy policy or our privacy
              practices, please contact us at:{" "}
              <a
                href="mailto:privacy@grootanalytics.com"
                className="text-primary hover:underline"
              >
                privacy@grootanalytics.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
