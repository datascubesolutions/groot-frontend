// @ts-nocheck
"use client";

import { use, useEffect, useState } from "react";
import { AdminSkeleton } from "@/components/admin/AdminSkeleton";
import { getStatusColor } from "@/lib/utils";
import {
  ArrowLeft,
  Briefcase,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Download,
  FileText,
  Mail,
  MessageSquare,
  User,
} from "lucide-react";
import Link from "next/link";

// Mock details (would normally be fetched by ID)
const MOCK_DETAIL = {
  id: "app-1",
  firstName: "Shivam",
  lastName: "Chaudhary",
  email: "shivam@example.com",
  linkedin: "https://linkedin.com/in/shivam",
  role: "Senior Data Engineer",
  createdAt: "2026-05-08T10:30:00Z",
  status: "NEW",
  whyGroot:
    "I am extremely passionate about data infrastructure and Groot Analytics' focus on scalable Microsoft-stack solutions perfectly aligns with my background in Azure and Databricks.",
  dataProject:
    "I built a real-time streaming pipeline using Kafka and Azure Stream Analytics that processed over 10M events per day for a logistics client, reducing their reporting latency from 24 hours to 5 minutes.",
  resumeFile: "shivam_chaudhary_resume.pdf",
};

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
};

export default function ApplicationDetailPage({ params }) {
  // Use React.use() to unwrap params
  const unwrappedParams = use(params);
  const id = unwrappedParams.id;
  
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate fetch
    setTimeout(() => {
      setData(MOCK_DETAIL);
      setIsLoading(false);
    }, 600);
  }, [id]);

  if (isLoading) {
    return <AdminSkeleton type="detail" />;
  }

  if (!data) return null;

  return (
    <div className="animate-fade-in space-y-6 pb-6">
      {/* Breadcrumb & Header */}
      <div className="flex flex-col gap-4 border-b border-white/5 pb-6 md:flex-row md:items-center md:justify-between">
        <div className="space-y-1">
          <div className="mb-2 flex items-center text-sm font-medium text-gray-500">
            <Link
              href="/admin/applications"
              className="flex items-center transition-colors hover:text-white"
            >
              <ArrowLeft size={14} className="mr-1.5" />
              Applications
            </Link>
            <ChevronRight size={14} className="mx-2" />
            <span className="text-gray-300">Application #{id.split("-")[1]}</span>
          </div>
          <h1 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
            {data.firstName} {data.lastName}
          </h1>
          <div className="flex items-center gap-3 pt-1">
            <span
              className={`rounded-full border border-opacity-50 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
                data.status === "NEW" ? "border-amber-500/50 text-amber-400 bg-amber-500/10" :
                data.status === "REVIEWING" ? "border-blue-500/50 text-blue-400 bg-blue-500/10" :
                data.status === "HIRED" ? "border-emerald-500/50 text-emerald-400 bg-emerald-500/10" :
                "border-gray-500/50 text-gray-400 bg-gray-500/10"
              }`}
            >
              {data.status}
            </span>
            <span className="flex items-center text-xs font-medium text-gray-400">
              <Calendar size={12} className="mr-1.5" />
              Applied {formatDate(data.createdAt)}
            </span>
          </div>
        </div>

        <div className="flex gap-3">
          <button className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-white/10">
            <CheckCircle2 size={16} className="text-emerald-400" />
            Mark Reviewed
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Left Column: Details */}
        <div className="space-y-6 lg:col-span-2">
          {/* Main Q&A Block */}
          <div className="overflow-hidden rounded-2xl border border-white/5 bg-[#111111] shadow-xl">
            <div className="border-b border-white/5 bg-white/[0.02] px-6 py-4">
              <h2 className="flex items-center font-bold text-white">
                <MessageSquare size={18} className="mr-2 text-primary" />
                Candidate Responses
              </h2>
            </div>
            <div className="p-6 space-y-8">
              <div className="space-y-3">
                <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500">
                  Why Groot Analytics?
                </h3>
                <div className="rounded-xl border border-white/5 bg-white/[0.02] p-5">
                  <p className="text-sm leading-relaxed text-gray-300">
                    {data.whyGroot}
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500">
                  A Data Project You're Proud Of
                </h3>
                <div className="rounded-xl border border-white/5 bg-white/[0.02] p-5">
                  <p className="text-sm leading-relaxed text-gray-300">
                    {data.dataProject}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Profile & Resume */}
        <div className="space-y-6">
          <div className="overflow-hidden rounded-2xl border border-white/5 bg-[#111111] shadow-xl">
            <div className="border-b border-white/5 bg-white/[0.02] px-6 py-4">
              <h2 className="flex items-center font-bold text-white">
                <User size={18} className="mr-2 text-primary" />
                Profile Info
              </h2>
            </div>
            <div className="p-6 space-y-5">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-gray-500">
                  Role Applied For
                </p>
                <p className="mt-1 flex items-center font-semibold text-white">
                  <Briefcase size={14} className="mr-2 text-primary/70" />
                  {data.role}
                </p>
              </div>
              <div className="h-px w-full bg-white/5" />
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-gray-500">
                  Email Address
                </p>
                <a
                  href={`mailto:${data.email}`}
                  className="mt-1 flex items-center font-semibold text-white transition-colors hover:text-primary"
                >
                  <Mail size={14} className="mr-2 text-primary/70" />
                  {data.email}
                </a>
              </div>
              <div className="h-px w-full bg-white/5" />
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-gray-500">
                  LinkedIn Profile
                </p>
                <a
                  href={data.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block truncate font-semibold text-blue-400 transition-colors hover:text-blue-300 underline underline-offset-4"
                >
                  {data.linkedin}
                </a>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/5 bg-[#111111] shadow-xl">
            <div className="border-b border-white/5 bg-white/[0.02] px-6 py-4">
              <h2 className="flex items-center font-bold text-white">
                <FileText size={18} className="mr-2 text-primary" />
                Resume Attachment
              </h2>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-4 rounded-xl border border-primary/20 bg-primary/5 p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/20 text-primary">
                  <FileText size={20} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-bold text-white">
                    {data.resumeFile}
                  </p>
                  <p className="text-xs font-medium text-gray-400">PDF Document</p>
                </div>
                <button className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/10 text-white transition-colors hover:bg-white/20">
                  <Download size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
