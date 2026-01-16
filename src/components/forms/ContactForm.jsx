"use client";

import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { AlertCircle, CheckCircle2, Loader2, Send } from "lucide-react";
import { useState } from "react";

const InputGroup = ({ label, name, type = "text", value, onChange, error, placeholder, required = false }) => (
  <div className="space-y-2">
    <label className="text-sm font-semibold text-muted-foreground ml-1">
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
          "w-full h-12 px-4 rounded-xl bg-background/50 border transition-all duration-300 outline-none",
          "placeholder:text-muted-foreground/50",
          "focus:bg-background focus:ring-2 focus:ring-primary/20",
          error
            ? "border-red-500/50 focus:border-red-500"
            : "border-white/10 focus:border-primary/50"
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
  <div className="space-y-2">
    <label className="text-sm font-semibold text-muted-foreground ml-1">
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
          "w-full p-4 rounded-xl bg-background/50 border transition-all duration-300 outline-none resize-none",
          "placeholder:text-muted-foreground/50",
          "focus:bg-background focus:ring-2 focus:ring-primary/20",
          error
            ? "border-red-500/50 focus:border-red-500"
            : "border-white/10 focus:border-primary/50"
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

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
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
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSuccess(true);
    setFormData({ name: "", email: "", company: "", message: "" });
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
    <form onSubmit={handleSubmit} className="p-8 md:p-10 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-md shadow-2xl space-y-6">
      <div className="space-y-2 mb-8">
        <h3 className="text-2xl font-bold text-foreground">Send a Message</h3>
        <p className="text-muted-foreground text-sm">
          Fill out the form below and we'll get back to you shortly.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InputGroup
          label="Full Name"
          name="name"
          placeholder="John Doe"
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
          required
        />
        <InputGroup
          label="Email Address"
          name="email"
          type="email"
          placeholder="john@company.com"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          required
        />
      </div>

      <InputGroup
        label="Company (Optional)"
        name="company"
        placeholder="Your Company Ltd."
        value={formData.company}
        onChange={handleChange}
      />

      <TextAreaGroup
        label="How can we help?"
        name="message"
        placeholder="Tell us about your project or data challenges..."
        value={formData.message}
        onChange={handleChange}
        error={errors.message}
        required
      />

      <Button
        type="submit"
        disabled={isSubmitting}
        className={cn(
          "w-full h-14 text-lg font-medium rounded-xl mt-4 transition-all",
          isSubmitting ? "opacity-80 cursor-wait" : "hover:scale-[1.02]"
        )}
        variant="hero" // Assuming 'hero' variant exists in your Button component, otherwise use 'default'
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Send Message
            <Send className="ml-2 h-5 w-5" />
          </>
        )}
      </Button>
    </form>
  );
}
