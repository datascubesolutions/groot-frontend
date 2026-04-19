import ContactAnimation from "@/components/contact/ContactAnimation";
import { ContactForm } from "@/components/forms/ContactForm";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Mail, MapPin, Phone } from "lucide-react";

export const metadata = {
  title: "Contact Groot Analytics | Microsoft Fabric & Power BI Consulting",
  description: "Contact Groot Analytics for Microsoft Fabric implementations, Power BI consulting, and Azure data platform projects.",
  keywords: "contact Microsoft Fabric consultant, Power BI consulting",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Groot Analytics | Microsoft Fabric & Power BI Consulting",
    description: "Contact Groot Analytics for Microsoft Fabric implementations, Power BI consulting, and Azure data platform projects.",
    url: "/contact",
  },
};

const ContactInfoItem = ({ icon: Icon, label, value, delay }) => (
  <div
    className="flex gap-5 items-start p-4 rounded-[2rem] hover:bg-white/5 transition-all duration-300 group cursor-default border border-transparent hover:border-emerald-500/20 shadow-sm hover:shadow-[0_0_20px_rgba(52,211,153,0.1)]"
  >
    <div className="p-4 rounded-xl bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500/20 transition-all duration-300 shadow-[0_0_20px_-5px_rgba(52,211,153,0.3)] group-hover:shadow-[0_0_30px_rgba(52,211,153,0.5)] ring-1 ring-emerald-500/30">
      <Icon size={24} />
    </div>
    <div className="space-y-1">
      <p className="text-xs font-semibold text-emerald-700 uppercase tracking-[0.18em]">{label}</p>
      <p className="text-lg md:text-xl font-bold text-foreground/95 group-hover:text-emerald-600 transition-colors">{value}</p>
    </div>
  </div>
);

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />
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
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-foreground">
              Let&apos;s <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">Talk</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
              Have a project in mind or just want to explore what&apos;s possible — reach out.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 relative z-10">
            {/* Contact Info Side */}
            <div className="lg:col-span-4 space-y-12">
              <div className="space-y-6">
                {/* Book a Call — using a real anchor; replace href with your Calendly/booking URL */}
                <a
                  href="https://calendly.com/grootanalytics"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <ContactInfoItem
                    icon={Phone}
                    label="Book a Call"
                    value="30 mins to see if we can help"
                  />
                </a>
                <ContactInfoItem
                  icon={Mail}
                  label="Email Directly"
                  value="hello@grootanalytics.com"
                />
              </div>

              {/* What Happens Next Card */}
              <div className="relative p-8 rounded-[2rem] bg-card/80 border border-border overflow-hidden group hover:border-emerald-500/30 transition-all duration-500 shadow-xl hover:shadow-[0_0_30px_rgba(52,211,153,0.15)] mt-12 backdrop-blur-sm">
                <div className="absolute inset-0 bg-emerald-500/5 blur-[80px] group-hover:bg-emerald-500/10 transition-all duration-700" />
                <h3 className="relative text-2xl font-bold text-foreground mb-6">What Happens Next</h3>
                <ol className="relative text-muted-foreground leading-relaxed font-medium space-y-4 list-decimal pl-5">
                  <li className="pl-2">We respond within one business day</li>
                  <li className="pl-2">We schedule a conversation if there&apos;s a potential fit</li>
                  <li className="pl-2">If we can help, we put together a clear proposal</li>
                  <li className="pl-2">If we&apos;re not the right fit, we&apos;ll tell you</li>
                </ol>
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
