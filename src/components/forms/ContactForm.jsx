"use client";

import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { AlertCircle, CheckCircle2, Loader2, Send } from "lucide-react";
import { useState } from "react";

const InputGroup = ({ label, name, type = "text", value, onChange, error, placeholder, required = false }) => (
  <div className="space-y-1.5 group">
    <label className="text-xs font-semibold text-muted-foreground ml-1 uppercase tracking-wider group-focus-within:text-primary transition-colors">
      {label} {required && <span className="text-primary">*</span>}
    </label>
    <div className="relative">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={cn(
          "w-full h-12 px-4 rounded-xl bg-white/40 border-2 transition-all duration-300 outline-none text-foreground font-medium",
          "placeholder:text-muted-foreground/80",
          "hover:bg-white/60 hover:border-primary/30",
          "focus:bg-white focus:border-primary focus:shadow-[0_0_20px_rgba(34,197,94,0.1)]",
          error
            ? "border-red-500/50 bg-red-50/50"
            : "border-gray-200"
        )}
      />
      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            className="absolute right-3 top-3 text-red-500"
          >
            <AlertCircle size={18} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
    {error && (
      <motion.p
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: "auto" }}
        className="text-xs text-red-500 ml-1"
      >
        {error}
      </motion.p>
    )}
  </div>
);

const TextAreaGroup = ({ label, name, value, onChange, error, placeholder, required = false }) => (
  <div className="space-y-1.5 group">
    <label className="text-xs font-semibold text-muted-foreground ml-1 uppercase tracking-wider group-focus-within:text-primary transition-colors">
      {label} {required && <span className="text-primary">*</span>}
    </label>
    <div className="relative">
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={5}
        className={cn(
          "w-full p-4 rounded-xl bg-white/40 border-2 transition-all duration-300 outline-none resize-none text-foreground font-medium",
          "placeholder:text-muted-foreground/80",
          "hover:bg-white/60 hover:border-primary/30",
          "focus:bg-white focus:border-primary focus:shadow-[0_0_20px_rgba(34,197,94,0.1)]",
          error
            ? "border-red-500/50 bg-red-50/50"
            : "border-gray-200"
        )}
      />
    </div>
    {error && (
      <motion.p
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: "auto" }}
        className="text-xs text-red-500 ml-1"
      >
        {error}
      </motion.p>
    )}
  </div>
);

const SelectGroup = ({ label, name, value, onChange, options, required = false }) => (
  <div className="space-y-1.5 group">
    <label className="text-xs font-semibold text-muted-foreground ml-1 uppercase tracking-wider group-focus-within:text-primary transition-colors">
      {label} {required && <span className="text-primary">*</span>}
    </label>
    <div className="relative">
      <select
        name={name}
        value={value}
        onChange={onChange}
        className={cn(
          "w-full h-12 px-4 rounded-xl bg-white/40 border-2 border-gray-200 transition-all duration-300 outline-none text-foreground font-medium appearance-none",
          "hover:bg-white/60 hover:border-primary/30",
          "focus:bg-white focus:border-primary focus:shadow-[0_0_20px_rgba(34,197,94,0.1)]"
        )}
      >
        {options.map((opt) => (
          <option key={opt} value={opt} className="bg-white text-foreground">
            {opt}
          </option>
        ))}
      </select>
      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none group-focus-within:text-primary transition-colors">
        <svg className="w-4 h-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
      </div>
    </div>
  </div>
);

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    jobTitle: "",
    serviceInterest: "Strategy & Advisory",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const payload = {
        data: {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          subject: formData.serviceInterest,
          message: `Job Title: ${formData.jobTitle}\n\n${formData.message}`,
          source: "website"
        }
      };

      const response = await fetch("https://us-central1-datascube-2b74e.cloudfunctions.net/contact_create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setIsSuccess(true);
      setFormData({ name: "", email: "", phone: "", company: "", jobTitle: "", serviceInterest: "Strategy & Advisory", message: "" });
    } catch (error) {
      console.error("Submission error:", error);
      // Optionally set a general error state here to show to user
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full h-[500px] flex flex-col items-center justify-center text-center p-8 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-md"
      >
        <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-6">
          <CheckCircle2 className="w-8 h-8 text-green-500" />
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-2">Message Sent!</h3>
        <p className="text-muted-foreground mb-8 max-w-sm">
          Thank you for reaching out. Our team will get back to you within 24 hours.
        </p>
        <Button
          onClick={() => setIsSuccess(false)}
          variant="outline"
          className="rounded-full"
        >
          Send Another Message
        </Button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="p-6 md:p-8 bg-white/5 border border-white/20 rounded-3xl backdrop-blur-xl shadow-[0_0_50px_rgba(0,0,0,0.3)] space-y-5">
      <div className="space-y-2 mb-6">
        <h3 className="text-2xl font-bold text-foreground">Send a Message</h3>
        <p className="text-muted-foreground text-sm">
          Fill out the form below and we'll get back to you shortly.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <InputGroup
          label="Full Name"
          name="name"
          placeholder="Groot Analytics"
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
          required
        />
        <InputGroup
          label="Email Address"
          name="email"
          type="email"
          placeholder="grootanalytics@gmail.com"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <InputGroup
          label="Phone Number"
          name="phone"
          type="tel"
          placeholder="+1 (555) 000-0000"
          value={formData.phone}
          onChange={handleChange}
          error={errors.phone}
          required
        />
        <InputGroup
          label="Company Name"
          name="company"
          placeholder="Your Company Ltd."
          value={formData.company}
          onChange={handleChange}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <InputGroup
          label="Job Title"
          name="jobTitle"
          placeholder="e.g. CTO, Product Manager"
          value={formData.jobTitle}
          onChange={handleChange}
        />
        <SelectGroup
          label="Service of Interest"
          name="serviceInterest"
          value={formData.serviceInterest}
          onChange={handleChange}
          options={[
            "Strategy & Advisory",
            "Data Engineering",
            "AI & Machine Learning",
            "Cloud Infrastructure",
            "Other"
          ]}
        />
      </div>

      <TextAreaGroup
        label="How can we help?"
        name="message"
        placeholder="Tell us about your project or data challenges..."
        value={formData.message}
        onChange={handleChange}
        error={errors.message}
        required
      />

      <div className="flex justify-end pt-2">
        <Button
          type="submit"
          disabled={isSubmitting}
          className={cn(
            "w-full md:w-auto px-8 h-12 text-base font-medium rounded-xl transition-all shadow-lg shadow-primary/20",
            isSubmitting ? "opacity-80 cursor-wait" : "hover:scale-[1.02] hover:shadow-primary/30"
          )}
          variant="hero"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              Send Message
              <Send className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>
      </div>
    </form>
  );
}
