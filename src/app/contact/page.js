import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import {
  Globe,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter
} from "lucide-react";

export const metadata = {
  title: "Contact Us | Groot Analytics",
  description: "Get in touch with Groot Analytics. Let's discuss your data, AI, and automation challenges.",
};

export default function ContactPage() {
  return (
    <main className="pt-20">
      <Breadcrumb
        items={[
          { label: "Contact Us", href: "/contact" }
        ]}
      />

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16">

            {/* Contact Info Side */}
            <div className="lg:w-1/3">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Let's Connect</h1>
              <p className="text-xl text-muted-foreground mb-12">
                Have a project in mind? Looking for an analytics partner? Or just want to say hello? Drop us a message.
              </p>

              <div className="space-y-8">
                <ContactInfoItem
                  icon={Mail}
                  label="Email Us"
                  value="contact@grootanalytics.com"
                />
                <ContactInfoItem
                  icon={MapPin}
                  label="Our Global Hub"
                  value="Groot Analytics HQ, Tech Center Level 12"
                />
                <ContactInfoItem
                  icon={Phone}
                  label="Reach Out"
                  value="+1 (555) 123-4567"
                />
              </div>

              <div className="mt-16 pt-12 border-t border-border flex gap-6">
                <a href="#" className="p-3 rounded-full bg-muted hover:bg-primary/10 hover:text-primary transition-all"><Linkedin size={20} /></a>
                <a href="#" className="p-3 rounded-full bg-muted hover:bg-primary/10 hover:text-primary transition-all"><Twitter size={20} /></a>
                <a href="#" className="p-3 rounded-full bg-muted hover:bg-primary/10 hover:text-primary transition-all"><Globe size={20} /></a>
              </div>
            </div>

            {/* Form Side */}
            <div className="lg:w-2/3">
              <div className="p-10 md:p-16 rounded-[3rem] bg-muted/30 border border-border">
                <form className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <FormGroup label="Full Name" placeholder="John Doe" />
                    <FormGroup label="Email Address" type="email" placeholder="john@company.com" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <FormGroup label="Company" placeholder="Global Tech Inc." />
                    <FormGroup label="Industry" placeholder="Healthcare, Finance, etc." />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-foreground">Write Your Message</label>
                    <textarea
                      className="w-full bg-background border border-border rounded-2xl p-6 min-h-[200px] outline-none focus:ring-2 focus:ring-primary transition-all"
                      placeholder="Tell us about your data challenges..."
                    ></textarea>
                  </div>
                  <Button variant="hero" size="lg" className="w-full h-16 rounded-2xl flex items-center justify-center gap-3">
                    Send Message <Send size={18} />
                  </Button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[400px] w-full bg-muted relative overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <MapPin size={48} className="text-primary animate-bounce" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary/20 rounded-full blur-2xl animate-pulse" />
        </div>
        {/* In a real scenario, an iframe or Mapbox component would go here */}
      </section>

    </main>
  );
}

function ContactInfoItem({ icon: Icon, label, value }) {
  return (
    <div className="flex gap-4 items-start">
      <div className="p-3 rounded-xl bg-primary/10 text-primary">
        <Icon size={20} />
      </div>
      <div>
        <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1">{label}</p>
        <p className="text-lg font-medium text-foreground">{value}</p>
      </div>
    </div>
  )
}

function FormGroup({ label, type = "text", placeholder }) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-bold text-foreground">{label}</label>
      <input
        type={type}
        className="w-full bg-background border border-border rounded-xl h-14 px-6 outline-none focus:ring-2 focus:ring-primary transition-all"
        placeholder={placeholder}
      />
    </div>
  )
}
