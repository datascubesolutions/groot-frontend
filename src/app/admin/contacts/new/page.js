"use client";

import { contactService } from "@/services/contactService";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Building,
  Loader2,
  MessageSquare,
  Save,
  User
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreateContactPage() {
  const router = useRouter();
  const [saving, setSaving] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "General Inquiry",
    message: "",
    status: "NEW"
  });

  const handleCreate = async () => {
    // Basic Validation
    if (!formData.name || !formData.email) {
      alert("Name and Email are required");
      return;
    }

    setSaving(true);
    try {
      await contactService.create({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        subject: formData.subject,
        message: formData.message,
        status: formData.status,
        source: "admin_dashboard"
      });

      router.push("/admin/contacts");
      router.refresh();
    } catch (err) {
      console.error(err);
      alert("Error creating contact");
    } finally {
      setSaving(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8 max-w-4xl mx-auto pb-10"
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border/40 pb-6">
        <div className="flex items-center gap-4">
          <Link
            href="/admin/contacts"
            className="group p-3 rounded-xl bg-background border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
          >
            <ArrowLeft size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-foreground tracking-tight">Create New Contact</h1>
            <p className="text-muted-foreground text-sm">Add a new entry to your contact list</p>
          </div>
        </div>

        <button
          onClick={handleCreate}
          disabled={saving}
          className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5 active:translate-y-0 transition-all disabled:opacity-50 disabled:pointer-events-none"
        >
          {saving ? <Loader2 size={18} className="animate-spin" /> : <Save size={18} />}
          Save Contact
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-8">

        {/* Contact Details Column */}
        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-card/60 border border-border/50 backdrop-blur-sm shadow-sm space-y-6">
            <div className="flex items-center gap-2 text-primary font-semibold border-b border-border/50 pb-3 mb-2">
              <User size={18} />
              <h3>Basic Information</h3>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Full Name *</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg bg-background border border-input focus:border-primary/50 focus:ring-2 focus:ring-primary/10 outline-none transition-all text-sm"
                  placeholder="e.g. John Doe"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Email Address *</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg bg-background border border-input focus:border-primary/50 focus:ring-2 focus:ring-primary/10 outline-none transition-all text-sm"
                  placeholder="e.g. john@example.com"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Phone</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg bg-background border border-input focus:border-primary/50 focus:ring-2 focus:ring-primary/10 outline-none transition-all text-sm"
                  placeholder="e.g. +1 234 567 890"
                />
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-card/60 border border-border/50 backdrop-blur-sm shadow-sm space-y-4">
            <div className="flex items-center gap-2 text-primary font-semibold border-b border-border/50 pb-3 mb-2">
              <Building size={18} />
              <h3>Organization</h3>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Company</label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg bg-background border border-input focus:border-primary/50 focus:ring-2 focus:ring-primary/10 outline-none transition-all text-sm"
                placeholder="e.g. Acme Corp"
              />
            </div>
          </div>
        </div>

        {/* Message Column */}
        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-card/60 border border-border/50 backdrop-blur-sm shadow-sm space-y-6 h-full">
            <div className="flex items-center gap-2 text-primary font-semibold border-b border-border/50 pb-3 mb-2">
              <MessageSquare size={18} />
              <h3>Inquiry Details</h3>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Subject</label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg bg-background border border-input focus:border-primary/50 focus:ring-2 focus:ring-primary/10 outline-none transition-all text-sm appearance-none cursor-pointer"
                >
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Sales">Sales</option>
                  <option value="Support">Support</option>
                  <option value="Partnership">Partnership</option>
                </select>
              </div>

              <div className="space-y-2 h-full">
                <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full h-48 px-4 py-3 rounded-lg bg-background border border-input focus:border-primary/50 focus:ring-2 focus:ring-primary/10 outline-none transition-all text-sm resize-none"
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
