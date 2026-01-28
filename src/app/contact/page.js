import ContactAnimation from "@/components/contact/ContactAnimation";
import { ContactForm } from "@/components/forms/ContactForm";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Mail, MapPin, Phone } from "lucide-react";

export const metadata = {
  title: "Contact Us | Groot Analytics",
  description: "Get in touch with Groot Analytics. Let's discuss your data, AI, and automation challenges.",
};

const ContactInfoItem = ({ icon: Icon, label, value, delay }) => (
  <div
    className="flex gap-5 items-start p-4 rounded-2xl hover:bg-white/5 transition-colors group cursor-default"
  >
    <div className="p-4 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(34,197,94,0.15)] group-hover:shadow-[0_0_30px_rgba(34,197,94,0.4)]">
      <Icon size={24} />
    </div>
    <div className="space-y-1">
      <p className="text-sm font-bold text-muted-foreground uppercase tracking-wider">{label}</p>
      <p className="text-xl font-medium text-foreground group-hover:text-gradient-primary transition-all">{value}</p>
    </div>
  </div>
);

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808020_1px,transparent_1px),linear-gradient(to_bottom,#80808020_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative pt-24 pb-20">
        <div className="container mx-auto px-6 relative">
          {/* Animation - Absolute Top Right for Desktop */}
          <div className="hidden lg:flex absolute top-12 right-12 z-0 pointer-events-none select-none justify-center w-[550px]">
            <ContactAnimation className="w-full" />
          </div>

          <Breadcrumb
            items={[
              { label: "Contact Us", href: "/contact" }
            ]}
          />

          <div className="mt-12 mb-20 relative z-10">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
              Let's build the <br />
              <span className="text-gradient-primary">future together</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
              Ready to modernize your data stack? Schedule a technical consultation to discuss your architecture, tooling, and roadmap.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 relative z-10">
            {/* Contact Info Side */}
            <div className="lg:col-span-4 space-y-12">
              <div className="space-y-6">
                <ContactInfoItem
                  icon={Mail}
                  label="Email Us"
                  value="contact@grootanalytics.com"
                />
                <ContactInfoItem
                  icon={Phone}
                  label="Call Us"
                  value="+1 (555) 123-4567"
                />
                <ContactInfoItem
                  icon={MapPin}
                  label="Visit HQ"
                  value="Tech Center Level 12, Innovation City"
                />
              </div>

              {/* Global Presence Card */}
              <div className="relative p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 overflow-hidden group">
                <div className="absolute inset-0 bg-primary/10 blur-3xl group-hover:bg-primary/20 transition-all duration-700" />
                <h3 className="relative text-xl font-bold text-foreground mb-4">Global Presence</h3>
                <p className="relative text-muted-foreground mb-6">
                  Serving clients across North America, Europe, and Asia Pacific.
                </p>
                <div className="relative h-2 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="absolute top-0 left-0 h-full w-1/3 bg-primary animate-shine" />
                </div>
              </div>
            </div>

            {/* Form Side */}
            <div className="lg:col-span-8">
              {/* Animation - Visible only on Mobile */}
              <div className="w-full flex lg:hidden relative justify-center mb-8 pointer-events-none select-none">
                <ContactAnimation className="w-full max-w-[400px]" />
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
