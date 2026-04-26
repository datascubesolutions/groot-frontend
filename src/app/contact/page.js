// @ts-nocheck
import ContactAnimation from "@/components/contact/ContactAnimation";
import { ContactForm } from "@/components/forms/ContactForm";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Mail, MapPin, Phone } from "lucide-react";

export const metadata = {
  title: "Contact Groot Analytics | Microsoft Fabric & Power BI Consulting",
  description:
    "Contact Groot Analytics for Microsoft Fabric implementations, Power BI consulting, and Azure data platform projects.",
  keywords: "contact Microsoft Fabric consultant, Power BI consulting",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Groot Analytics | Microsoft Fabric & Power BI Consulting",
    description:
      "Contact Groot Analytics for Microsoft Fabric implementations, Power BI consulting, and Azure data platform projects.",
    url: "/contact",
  },
};

const ContactInfoItem = ({ icon: Icon, label, value, delay }) => (
  <div className="group flex cursor-default items-start gap-4 rounded-3xl border border-transparent p-3 shadow-sm transition-all duration-300 hover:border-emerald-500/20 hover:bg-white/5 hover:shadow-[0_0_20px_rgba(52,211,153,0.1)] sm:gap-5 sm:rounded-[2rem] sm:p-4">
    <div className="rounded-xl bg-emerald-500/10 p-4 text-emerald-400 shadow-[0_0_20px_-5px_rgba(52,211,153,0.3)] ring-1 ring-emerald-500/30 transition-all duration-300 group-hover:bg-emerald-500/20 group-hover:shadow-[0_0_30px_rgba(52,211,153,0.5)]">
      <Icon size={24} />
    </div>
    <div className="space-y-1">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
        {label}
      </p>
      <p className="text-lg font-bold text-foreground/95 transition-colors group-hover:text-emerald-600 md:text-xl">
        {value}
      </p>
    </div>
  </div>
);

export default function ContactPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      {/* Background Decor */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-0 h-[800px] w-[800px] -translate-y-1/2 translate-x-1/2 animate-pulse rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[600px] w-[600px] -translate-x-1/3 translate-y-1/2 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808020_1px,transparent_1px),linear-gradient(to_bottom,#80808020_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative pb-20 pt-24">
        <div className="container relative mx-auto px-6">
          {/* Animation - Absolute Top Right for Desktop */}
          <div className="pointer-events-none absolute right-12 top-12 z-0 hidden w-[550px] select-none justify-center lg:flex">
            <ContactAnimation className="w-full" />
          </div>

          <Breadcrumb items={[{ label: "Contact Us", href: "/contact" }]} />

          <div className="relative z-10 mb-20 mt-12">
            <h1 className="mb-6 text-[3.5rem] font-black uppercase leading-[0.9] tracking-tighter text-foreground sm:mb-8 sm:text-5xl md:text-[5rem] lg:text-[7rem]">
              Let&apos;s{" "}
              <span className="bg-gradient-to-r from-forest to-forest/60 bg-clip-text text-transparent">
                Talk
              </span>
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl md:text-2xl">
              Have a project in mind or just want to explore what&apos;s
              possible — reach out.
            </p>
          </div>

          <div className="relative z-10 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-24">
            {/* Contact Info Side */}
            <div className="space-y-12 lg:col-span-4">
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
              <div className="group relative mt-12 overflow-hidden rounded-[2rem] border border-border bg-card/80 p-6 shadow-xl backdrop-blur-sm transition-all duration-500 hover:border-emerald-500/30 hover:shadow-[0_0_30px_rgba(52,211,153,0.15)] sm:p-8">
                <div className="absolute inset-0 bg-emerald-500/5 blur-[80px] transition-all duration-700 group-hover:bg-emerald-500/10" />
                <h3 className="relative mb-6 text-2xl font-bold text-foreground">
                  What Happens Next
                </h3>
                <ol className="relative list-decimal space-y-4 pl-5 font-medium leading-relaxed text-muted-foreground">
                  <li className="pl-2">We respond within one business day</li>
                  <li className="pl-2">
                    We schedule a conversation if there&apos;s a potential fit
                  </li>
                  <li className="pl-2">
                    If we can help, we put together a clear proposal
                  </li>
                  <li className="pl-2">
                    If we&apos;re not the right fit, we&apos;ll tell you
                  </li>
                </ol>
              </div>
            </div>

            {/* Form Side */}
            <div className="lg:col-span-8">
              {/* Animation - Visible only on Mobile */}
              <div className="pointer-events-none relative mb-8 flex w-full select-none justify-center lg:hidden">
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
