
"use client";

import { formatDate, getStatusColor } from "@/lib/utils";
import { contactService } from "@/services/contactService";
import { motion } from "framer-motion";
import {
  AlertCircle,
  ArrowLeft,
  Building,
  CheckCircle2,
  Clock,
  Edit,
  Globe,
  Loader2, Mail,
  MessageSquare,
  Phone,
  Save,
  User
} from "lucide-react";
import Link from "next/link";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ContactDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const searchParams = useSearchParams();
  const isEditMode = searchParams.get("mode") === "edit";

  const [contact, setContact] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);

  // Form State
  const [formData, setFormData] = useState({
    status: "",
    company: "",
    notes: ""
  });

  const statusOptions = ["PENDING", "CONTACTED", "QUALIFIED", "CONVERTED", "REJECTED", "SPAM"];

  useEffect(() => {
    const fetchContact = async () => {
      try {
        const result = await contactService.getById(params.id);

        // Check for nested contact object data structure
        if (result?.result?.data?.contact) {
          const data = result.result.data.contact;
          setContact(data);
          setFormData({
            status: data.status || "PENDING",
            company: data.company || "",
            notes: data.notes || ""
          });
        } else if (result?.result?.data) {
          // Fallback if data is not nested under contact
          const data = result.result.data;
          setContact(data);
          setFormData({
            status: data.status || "PENDING",
            company: data.company || "",
            notes: data.notes || ""
          });
        } else {
          setError("Contact not found");
        }
      } catch (err) {
        console.error(err);
        setError("Failed to load contact details");
      } finally {
        setLoading(false);
      }
    };

    if (params.id) {
      fetchContact();
    }
  }, [params.id]);

  const handleUpdate = async () => {
    setSaving(true);
    try {
      await contactService.update(params.id, {
        status: formData.status,
        company: formData.company,
      });

      router.push("/admin/contacts");
      router.refresh();
    } catch (err) {
      console.error(err);
      alert("Error updating contact");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[calc(100vh-200px)]">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (error || !contact) {
    return (
      <div className="flex flex-col items-center justify-center h-[calc(100vh-200px)] gap-4 text-center">
        <div className="p-4 rounded-full bg-destructive/10 text-destructive">
          <AlertCircle className="w-8 h-8" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-foreground">Contact Not Found</h2>
          <p className="text-muted-foreground mt-1">{error || "The requested contact could not be found."}</p>
        </div>
        <Link
          href="/admin/contacts"
          className="px-6 py-2 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors font-bold"
        >
          Return to List
        </Link>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8 max-w-6xl mx-auto pb-10"
    >
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-border/40 pb-6">
        <div className="flex items-start gap-4">
          <Link
            href="/admin/contacts"
            className="group p-3 rounded-xl bg-background border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
          >
            <ArrowLeft size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />
          </Link>
          <div className="space-y-1">
            <h1 className="text-3xl font-bold text-foreground tracking-tight flex items-center gap-3">
              {contact.name}
              <span className={`px-3 py-1 rounded-full text-xs font-bold tracking-wider border align-middle ${getStatusColor(contact.status)}`}>
                {contact.status}
              </span>
            </h1>
            <p className="text-muted-foreground flex items-center gap-2 text-sm">
              <span className="font-mono bg-muted/50 px-2 py-0.5 rounded text-xs">ID: {contact.id}</span>
              <span className="w-1 h-1 rounded-full bg-muted-foreground/30" />
              <span className="flex items-center gap-1.5">
                <Clock size={12} />
                {formatDate(contact.createdAt)}
              </span>
            </p>
          </div>
        </div>

        {isEditMode ? (
          <button
            onClick={handleUpdate}
            disabled={saving}
            className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-xl font-bold hover:bg-gray-200 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:-translate-y-0.5 active:translate-y-0 transition-all disabled:opacity-50 disabled:pointer-events-none"
          >
            {saving ? <Loader2 size={18} className="animate-spin" /> : <Save size={18} />}
            Save Changes
          </button>
        ) : (
          <Link href={`/admin/contacts/${params.id}?mode=edit`}>
            <button className="flex items-center gap-2 px-6 py-3 bg-white text-black border border-transparent rounded-xl font-bold hover:bg-gray-200 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all">
              <Edit size={18} />
              Edit Details
            </button>
          </Link>
        )}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">

        {/* Left Column: Main Content */}
        <div className="lg:col-span-2 space-y-8">

          {/* Inquiry Card */}
          <div className="rounded-2xl border border-border/50 bg-gradient-to-b from-card/80 to-card/40 backdrop-blur-sm overflow-hidden shadow-sm">
            <div className="px-6 py-4 border-b border-border/50 bg-muted/20 flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <MessageSquare size={18} />
              </div>
              <h3 className="font-semibold text-foreground">Inquiry Details</h3>
            </div>

            <div className="p-6 space-y-6">
              <div>
                <label className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-2 block">Subject</label>
                <div className="text-lg font-medium text-foreground">{contact.subject}</div>
              </div>

              <div>
                <label className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-3 block">Message</label>
                <div className="p-5 rounded-xl bg-muted/30 border border-border/50 text-foreground/90 leading-relaxed font-serif whitespace-pre-wrap">
                  {contact.message}
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="rounded-xl border border-border/50 bg-card/50 p-5 flex items-start gap-4 hover:border-border transition-colors">
              <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-500">
                <Globe size={20} />
              </div>
              <div>
                <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Source</label>
                <div className="text-lg font-semibold capitalize mt-0.5">{contact.source || 'Website'}</div>
              </div>
            </div>

            <div className="rounded-xl border border-border/50 bg-card/50 p-5 flex items-start gap-4 hover:border-border transition-colors">
              <div className="p-2.5 rounded-lg bg-purple-500/10 text-purple-500">
                <Clock size={20} />
              </div>
              <div>
                <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Response Time</label>
                <div className="text-lg font-semibold mt-0.5 text-muted-foreground text-sm py-1">Not yet replied</div>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column: Contact Info & Meta */}
        <div className="space-y-6">

          {/* Contact Info Card */}
          <div className="rounded-2xl border border-border/50 bg-card/60 backdrop-blur-sm overflow-hidden h-fit sticky top-6">
            <div className="px-6 py-4 border-b border-border/50 bg-muted/20 flex items-center gap-3">
              <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-500">
                <User size={18} />
              </div>
              <h3 className="font-semibold text-foreground">Contact Information</h3>
            </div>

            <div className="p-6 space-y-6">

              {/* Email */}
              <div className="space-y-1.5 group">
                <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Email Address</label>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-background/50 border border-transparent group-hover:border-border/60 transition-colors">
                  <div className="p-2 rounded-full bg-primary/10 text-primary shrink-0">
                    <Mail size={14} />
                  </div>
                  <a href={`mailto:${contact.email}`} className="text-sm font-medium hover:text-primary transition-colors text-foreground break-all">
                    {contact.email}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="space-y-1.5 group">
                <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Phone Number</label>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-background/50 border border-transparent group-hover:border-border/60 transition-colors">
                  <div className="p-2 rounded-full bg-primary/10 text-primary shrink-0">
                    <Phone size={14} />
                  </div>
                  <span className="text-sm font-medium text-foreground">
                    {contact.phone || 'N/A'}
                  </span>
                </div>
              </div>

              <div className="w-full h-px bg-border/50 my-6" />

              {/* Editable Fields */}
              <div className="space-y-5">
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-2">
                    <Building size={14} /> Company
                  </label>
                  {isEditMode ? (
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg bg-background border border-input focus:border-primary/50 focus:ring-2 focus:ring-primary/10 outline-none transition-all text-sm"
                      placeholder="Enter company name..."
                    />
                  ) : (
                    <div className="font-medium text-foreground pl-1">{contact.company || 'N/A'}</div>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-2">
                    <CheckCircle2 size={14} /> Status
                  </label>
                  {isEditMode ? (
                    <div className="relative">
                      <select
                        value={formData.status}
                        onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg bg-background border border-input focus:border-primary/50 focus:ring-2 focus:ring-primary/10 outline-none transition-all text-sm appearance-none cursor-pointer"
                      >
                        {statusOptions.map(opt => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground">
                        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      </div>
                    </div>
                  ) : (
                    <div className="pl-1">
                      {contact.status}
                    </div>
                  )}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
