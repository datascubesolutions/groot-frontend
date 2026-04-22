// @ts-nocheck
"use client";

import { getErrorMessage } from "@/lib/api/errors";
import { contactService } from "@/services/contactService";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Building,
  Loader2,
  MessageSquare,
  Save,
  User,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export default function CreateContactPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "General Inquiry",
    message: "",
    status: "PENDING",
  });

  const handleCreate = async () => {
    // Prevent multiple submissions
    if (isSubmitting) return;

    // Basic Validation
    if (!formData.name || !formData.email) {
      toast.error("Name and Email are required");
      return;
    }

    setIsSubmitting(true);
    try {
      await contactService.create({
        ...formData,
        source: "admin_dashboard",
      });

      toast.success("Contact created successfully");
      router.push("/admin/contacts");
      router.refresh();
    } catch (error) {
      console.error("Failed to create contact:", error);
      toast.error(getErrorMessage(error));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mx-auto max-w-4xl space-y-8 pb-10"
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border/40 pb-6">
        <div className="flex items-center gap-4">
          <Link
            href="/admin/contacts"
            className="group rounded-xl border border-border/50 bg-background p-3 transition-all duration-300 hover:border-primary/50 hover:bg-primary/5"
          >
            <ArrowLeft
              size={20}
              className="text-muted-foreground transition-colors group-hover:text-primary"
            />
          </Link>
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground">
              Create New Contact
            </h1>
            <p className="text-sm text-muted-foreground">
              Add a new entry to your contact list
            </p>
          </div>
        </div>

        <button
          onClick={handleCreate}
          disabled={isSubmitting}
          className="flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-bold text-black transition-all hover:-translate-y-0.5 hover:bg-gray-200 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] active:translate-y-0 disabled:pointer-events-none disabled:opacity-50"
        >
          {isSubmitting ? (
            <Loader2 size={18} className="animate-spin" />
          ) : (
            <Save size={18} />
          )}
          Save Contact
        </button>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Contact Details Column */}
        <div className="space-y-6">
          <div className="space-y-6 rounded-2xl border border-border/50 bg-card/60 p-6 shadow-sm backdrop-blur-sm">
            <div className="mb-2 flex items-center gap-2 border-b border-border/50 pb-3 font-semibold text-primary">
              <User size={18} />
              <h3>Basic Information</h3>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <label
                  htmlFor="admin-contact-new-name"
                  className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                >
                  Full Name *
                </label>
                <input
                  id="admin-contact-new-name"
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none transition-all focus:border-primary/50 focus:ring-2 focus:ring-primary/10"
                  placeholder="e.g. Amit Yadav"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="admin-contact-new-email"
                  className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                >
                  Email Address *
                </label>
                <input
                  id="admin-contact-new-email"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none transition-all focus:border-primary/50 focus:ring-2 focus:ring-primary/10"
                  placeholder="e.g. amity@gmail.com"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="admin-contact-new-phone"
                  className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                >
                  Phone
                </label>
                <input
                  id="admin-contact-new-phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none transition-all focus:border-primary/50 focus:ring-2 focus:ring-primary/10"
                  placeholder="e.g. +1 234 567 890"
                />
              </div>
            </div>
          </div>

          <div className="space-y-4 rounded-2xl border border-border/50 bg-card/60 p-6 shadow-sm backdrop-blur-sm">
            <div className="mb-2 flex items-center gap-2 border-b border-border/50 pb-3 font-semibold text-primary">
              <Building size={18} />
              <h3>Organization</h3>
            </div>
            <div className="space-y-2">
              <label
                htmlFor="admin-contact-new-company"
                className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
              >
                Company
              </label>
              <input
                id="admin-contact-new-company"
                type="text"
                value={formData.company}
                onChange={(e) =>
                  setFormData({ ...formData, company: e.target.value })
                }
                className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none transition-all focus:border-primary/50 focus:ring-2 focus:ring-primary/10"
                placeholder="e.g. Groot Analytics"
              />
            </div>
          </div>
        </div>

        {/* Message Column */}
        <div className="space-y-6">
          <div className="h-full space-y-6 rounded-2xl border border-border/50 bg-card/60 p-6 shadow-sm backdrop-blur-sm">
            <div className="mb-2 flex items-center gap-2 border-b border-border/50 pb-3 font-semibold text-primary">
              <MessageSquare size={18} />
              <h3>Inquiry Details</h3>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <label
                  htmlFor="admin-contact-new-subject"
                  className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                >
                  Subject
                </label>
                <select
                  id="admin-contact-new-subject"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  className="w-full cursor-pointer appearance-none rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none transition-all focus:border-primary/50 focus:ring-2 focus:ring-primary/10"
                >
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Sales">Sales</option>
                  <option value="Support">Support</option>
                  <option value="Partnership">Partnership</option>
                </select>
              </div>

              <div className="h-full space-y-2">
                <label
                  htmlFor="admin-contact-new-message"
                  className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                >
                  Message
                </label>
                <textarea
                  id="admin-contact-new-message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="h-48 w-full resize-none rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none transition-all focus:border-primary/50 focus:ring-2 focus:ring-primary/10"
                  placeholder="Enter the message or notes here..."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
