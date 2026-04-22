// @ts-nocheck

"use client";

import { Skeleton } from "@/components/ui/Skeleton";
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
  Loader2,
  Mail,
  MessageSquare,
  Phone,
  Save,
  User,
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
    notes: "",
  });

  const statusOptions = [
    "PENDING",
    "CONTACTED",
    "QUALIFIED",
    "CONVERTED",
    "REJECTED",
    "SPAM",
  ];

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
            notes: data.notes || "",
          });
        } else if (result?.result?.data) {
          // Fallback if data is not nested under contact
          const data = result.result.data;
          setContact(data);
          setFormData({
            status: data.status || "PENDING",
            company: data.company || "",
            notes: data.notes || "",
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
      <div className="mx-auto max-w-6xl animate-pulse space-y-8 pb-10">
        {/* Header Skeleton */}
        <div className="flex flex-col justify-between gap-6 border-b border-white/5 pb-6 md:flex-row md:items-center">
          <div className="flex w-full items-start gap-4">
            <Skeleton className="h-12 w-12 rounded-xl" />
            <div className="w-full max-w-md space-y-2">
              <div className="flex items-center gap-3">
                <Skeleton className="h-8 w-48 rounded-lg" />
                <Skeleton className="h-6 w-24 rounded-full" />
              </div>
              <div className="flex gap-4">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-4 w-32" />
              </div>
            </div>
          </div>
          <Skeleton className="h-12 w-40 rounded-xl" />
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Left Column Skeleton */}
          <div className="space-y-8 lg:col-span-2">
            {/* Inquiry Card Skeleton */}
            <div className="h-64 space-y-6 overflow-hidden rounded-2xl border border-white/5 bg-white/5 p-6">
              <div className="mb-6 flex items-center gap-3">
                <Skeleton className="h-10 w-10 rounded-lg" />
                <Skeleton className="h-6 w-40" />
              </div>
              <div className="space-y-2">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-6 w-3/4" />
              </div>
              <div className="space-y-2 pt-4">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-2/3" />
              </div>
            </div>

            {/* Stats Grid Skeleton */}
            <div className="grid gap-4 sm:grid-cols-2">
              <Skeleton className="h-24 w-full rounded-xl" />
              <Skeleton className="h-24 w-full rounded-xl" />
            </div>
          </div>

          {/* Right Column Skeleton */}
          <div className="space-y-6">
            <div className="space-y-6 rounded-2xl border border-white/5 bg-white/5 p-6">
              <div className="mb-6 flex items-center gap-3">
                <Skeleton className="h-10 w-10 rounded-lg" />
                <Skeleton className="h-6 w-48" />
              </div>
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="space-y-2">
                  <Skeleton className="h-3 w-24" />
                  <Skeleton className="h-10 w-full rounded-lg" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !contact) {
    return (
      <div className="flex h-[calc(100vh-200px)] flex-col items-center justify-center gap-4 text-center">
        <div className="rounded-full bg-destructive/10 p-4 text-destructive">
          <AlertCircle className="h-8 w-8" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-foreground">
            Contact Not Found
          </h2>
          <p className="mt-1 text-muted-foreground">
            {error || "The requested contact could not be found."}
          </p>
        </div>
        <Link
          href="/admin/contacts"
          className="rounded-lg bg-white px-6 py-2 font-bold text-black transition-colors hover:bg-gray-200"
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
      className="mx-auto max-w-6xl space-y-8 pb-10"
    >
      {/* Header Section */}
      <div className="flex flex-col justify-between gap-6 border-b border-border/40 pb-6 md:flex-row md:items-center">
        <div className="flex items-start gap-4">
          <Link
            href="/admin/contacts"
            className="group rounded-xl border border-border/50 bg-background p-3 transition-all duration-300 hover:border-primary/50 hover:bg-primary/5"
          >
            <ArrowLeft
              size={20}
              className="text-muted-foreground transition-colors group-hover:text-primary"
            />
          </Link>
          <div className="space-y-1">
            <h1 className="flex items-center gap-3 text-3xl font-bold tracking-tight text-foreground">
              {contact.name}
              <span
                className={`rounded-full border px-3 py-1 align-middle text-xs font-bold tracking-wider ${getStatusColor(contact.status)}`}
              >
                {contact.status}
              </span>
            </h1>
            <p className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="rounded bg-muted/50 px-2 py-0.5 font-mono text-xs">
                ID: {contact.id}
              </span>
              <span className="h-1 w-1 rounded-full bg-muted-foreground/30" />
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
            className="flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-bold text-black transition-all hover:-translate-y-0.5 hover:bg-gray-200 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] active:translate-y-0 disabled:pointer-events-none disabled:opacity-50"
          >
            {saving ? (
              <Loader2 size={18} className="animate-spin" />
            ) : (
              <Save size={18} />
            )}
            Save Changes
          </button>
        ) : (
          <Link href={`/admin/contacts/${params.id}?mode=edit`}>
            <button className="flex items-center gap-2 rounded-xl border border-transparent bg-white px-6 py-3 font-bold text-black transition-all hover:bg-gray-200 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]">
              <Edit size={18} />
              Edit Details
            </button>
          </Link>
        )}
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Left Column: Main Content */}
        <div className="space-y-8 lg:col-span-2">
          {/* Inquiry Card */}
          <div className="overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-b from-card/80 to-card/40 shadow-sm backdrop-blur-sm">
            <div className="flex items-center gap-3 border-b border-border/50 bg-muted/20 px-6 py-4">
              <div className="rounded-lg bg-primary/10 p-2 text-primary">
                <MessageSquare size={18} />
              </div>
              <h3 className="font-semibold text-foreground">Inquiry Details</h3>
            </div>

            <div className="space-y-6 p-6">
              <div>
                <p className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Subject
                </p>
                <div className="text-lg font-medium text-foreground">
                  {contact.subject}
                </div>
              </div>

              <div>
                <p className="mb-3 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Message
                </p>
                <div className="whitespace-pre-wrap rounded-xl border border-border/50 bg-muted/30 p-5 font-serif leading-relaxed text-foreground/90">
                  {contact.message}
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex items-start gap-4 rounded-xl border border-border/50 bg-card/50 p-5 transition-colors hover:border-border">
              <div className="rounded-lg bg-blue-500/10 p-2.5 text-blue-500">
                <Globe size={20} />
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  Source
                </p>
                <div className="mt-0.5 text-lg font-semibold capitalize">
                  {contact.source || "Website"}
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-xl border border-border/50 bg-card/50 p-5 transition-colors hover:border-border">
              <div className="rounded-lg bg-purple-500/10 p-2.5 text-purple-500">
                <Clock size={20} />
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  Response Time
                </p>
                <div className="mt-0.5 py-1 text-lg text-sm font-semibold text-muted-foreground">
                  Not yet replied
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Info & Meta */}
        <div className="space-y-6">
          {/* Contact Info Card */}
          <div className="sticky top-6 h-fit overflow-hidden rounded-2xl border border-border/50 bg-card/60 backdrop-blur-sm">
            <div className="flex items-center gap-3 border-b border-border/50 bg-muted/20 px-6 py-4">
              <div className="rounded-lg bg-emerald-500/10 p-2 text-emerald-500">
                <User size={18} />
              </div>
              <h3 className="font-semibold text-foreground">
                Contact Information
              </h3>
            </div>

            <div className="space-y-6 p-6">
              {/* Email */}
              <div className="group space-y-1.5">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Email Address
                </p>
                <div className="flex items-center gap-3 rounded-lg border border-transparent bg-background/50 p-3 transition-colors group-hover:border-border/60">
                  <div className="shrink-0 rounded-full bg-primary/10 p-2 text-primary">
                    <Mail size={14} />
                  </div>
                  <a
                    href={`mailto:${contact.email}`}
                    className="break-all text-sm font-medium text-foreground transition-colors hover:text-primary"
                  >
                    {contact.email}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="group space-y-1.5">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Phone Number
                </p>
                <div className="flex items-center gap-3 rounded-lg border border-transparent bg-background/50 p-3 transition-colors group-hover:border-border/60">
                  <div className="shrink-0 rounded-full bg-primary/10 p-2 text-primary">
                    <Phone size={14} />
                  </div>
                  <span className="text-sm font-medium text-foreground">
                    {contact.phone || "N/A"}
                  </span>
                </div>
              </div>

              <div className="my-6 h-px w-full bg-border/50" />

              {/* Editable Fields */}
              <div className="space-y-5">
                <div className="space-y-2">
                  {isEditMode ? (
                    <>
                      <label
                        htmlFor="admin-contact-detail-company"
                        className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                      >
                        <Building size={14} /> Company
                      </label>
                      <input
                        id="admin-contact-detail-company"
                        type="text"
                        value={formData.company}
                        onChange={(e) =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                        className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none transition-all focus:border-primary/50 focus:ring-2 focus:ring-primary/10"
                        placeholder="Enter company name..."
                      />
                    </>
                  ) : (
                    <>
                      <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        <Building size={14} /> Company
                      </p>
                      <div className="pl-1 font-medium text-foreground">
                        {contact.company || "N/A"}
                      </div>
                    </>
                  )}
                </div>

                <div className="space-y-2">
                  {isEditMode ? (
                    <>
                      <label
                        htmlFor="admin-contact-detail-status"
                        className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                      >
                        <CheckCircle2 size={14} /> Status
                      </label>
                      <div className="relative">
                        <select
                          id="admin-contact-detail-status"
                          value={formData.status}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              status: e.target.value,
                            })
                          }
                          className="w-full cursor-pointer appearance-none rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none transition-all focus:border-primary/50 focus:ring-2 focus:ring-primary/10"
                        >
                          {statusOptions.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                        <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                          <svg
                            width="10"
                            height="6"
                            viewBox="0 0 10 6"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1 1L5 5L9 1"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        <CheckCircle2 size={14} /> Status
                      </p>
                      <div className="pl-1">{contact.status}</div>
                    </>
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
