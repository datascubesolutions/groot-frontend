// @ts-nocheck
"use client";

import { DataTable } from "@/components/ui/DataTable";
import { AdminSkeleton } from "@/components/admin/AdminSkeleton";
import { useDebounce } from "@/hooks/useDebounce";
import { getStatusColor } from "@/lib/utils";
import {
  ArchiveX,
  Briefcase,
  Clock,
  Eye,
  Search,
  Star,
  Trash2,
  Users,
} from "lucide-react";
import Link from "next/link";
import { useMemo, useState, useEffect } from "react";
import { toast } from "sonner";

// Mock Data for Applications
const MOCK_APPLICATIONS = [
  {
    id: "app-1",
    firstName: "Shivam",
    lastName: "Chaudhary",
    email: "shivam@example.com",
    linkedin: "https://linkedin.com/in/shivam",
    role: "Senior Data Engineer",
    createdAt: "2026-05-08T10:30:00Z",
    status: "NEW",
  },
  {
    id: "app-2",
    firstName: "Alice",
    lastName: "Smith",
    email: "alice.smith@example.com",
    linkedin: "https://linkedin.com/in/alicesmith",
    role: "Power BI Architect",
    createdAt: "2026-05-07T14:15:00Z",
    status: "REVIEWING",
  },
  {
    id: "app-3",
    firstName: "Bob",
    lastName: "Jones",
    email: "bob.jones@example.com",
    linkedin: "https://linkedin.com/in/bobjones",
    role: "Senior Data Engineer",
    createdAt: "2026-05-05T09:00:00Z",
    status: "REJECTED",
  },
];

const getInitials = (first, last) => {
  return `${first?.[0] || ""}${last?.[0] || ""}`.toUpperCase();
};

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

export default function ApplicationsPage() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearch = useDebounce(searchTerm, 300);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setData(MOCK_APPLICATIONS);
      setIsLoading(false);
    }, 800);
  }, []);

  const handleDelete = (id) => {
    toast.custom(
      (t) => (
        <div className="relative w-[350px] space-y-3 overflow-hidden rounded-xl border border-white/10 bg-[#1a1a1a] p-4 shadow-2xl">
          <div className="absolute right-0 top-0 -mr-4 -mt-4 h-24 w-24 rounded-full bg-red-500/10 blur-[40px]" />
          <div className="relative z-10 flex items-start gap-3">
            <div className="rounded-lg border border-red-500/10 bg-red-500/10 p-2 text-red-500">
              <Trash2 size={18} />
            </div>
            <div>
              <h3 className="font-semibold text-white">Delete Application?</h3>
              <p className="mt-1 text-sm text-gray-400">
                This action cannot be undone. This application will be permanently
                removed.
              </p>
            </div>
          </div>
          <div className="relative z-10 flex justify-end gap-2 pt-2">
            <button
              onClick={() => toast.dismiss(t)}
              className="rounded-lg px-3 py-1.5 text-sm font-medium text-gray-400 transition-colors hover:bg-white/5 hover:text-white"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                toast.dismiss(t);
                setData((prev) => prev.filter((item) => item.id !== id));
                toast.success("Application deleted successfully");
              }}
              className="rounded-lg bg-red-500 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        </div>
      ),
      { duration: Infinity }
    );
  };

  const columns = [
    {
      header: "CANDIDATE",
      accessorKey: "name",
      cell: (row) => (
        <div className="flex items-center gap-4 py-1">
          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-primary/20 bg-gradient-to-br from-primary/20 to-emerald-500/5 text-sm font-bold tracking-wider text-primary shadow-inner ring-1 ring-white/10">
            {getInitials(row.firstName, row.lastName)}
          </div>
          <div className="flex flex-col">
            <span className="text-[15px] font-bold leading-tight text-white transition-colors group-hover:text-primary">
              {row.firstName} {row.lastName}
            </span>
            <span className="mt-0.5 text-sm font-medium text-gray-400">
              {row.email}
            </span>
          </div>
        </div>
      ),
    },
    {
      header: "ROLE",
      accessorKey: "role",
      cell: (row) => (
        <span className="text-sm font-medium text-gray-300">
          {row.role}
        </span>
      ),
    },
    {
      header: "DATE",
      accessorKey: "createdAt",
      className: "hidden md:table-cell",
      cell: (row) => (
        <span className="text-xs font-medium uppercase tracking-wide text-gray-400">
          {formatDate(row.createdAt)}
        </span>
      ),
    },
    {
      header: "STATUS",
      accessorKey: "status",
      cell: (row) => (
        <span
          className={`rounded-full border border-opacity-50 px-3 py-1 text-[11px] font-bold uppercase tracking-wider ${
            row.status === "NEW" ? "border-amber-500/50 text-amber-400 bg-amber-500/10" :
            row.status === "REVIEWING" ? "border-blue-500/50 text-blue-400 bg-blue-500/10" :
            row.status === "HIRED" ? "border-emerald-500/50 text-emerald-400 bg-emerald-500/10" :
            "border-gray-500/50 text-gray-400 bg-gray-500/10"
          }`}
        >
          {row.status}
        </span>
      ),
    },
  ];

  const filteredData = useMemo(() => {
    if (!debouncedSearch) return data;
    const lowerSearch = debouncedSearch.toLowerCase();
    return data.filter(
      (item) =>
        item.firstName.toLowerCase().includes(lowerSearch) ||
        item.lastName.toLowerCase().includes(lowerSearch) ||
        item.email.toLowerCase().includes(lowerSearch) ||
        item.role.toLowerCase().includes(lowerSearch)
    );
  }, [data, debouncedSearch]);

  if (isLoading && data.length === 0) {
    return <AdminSkeleton type="table" />;
  }

  return (
    <div className="animate-fade-in space-y-4 pb-2">
      {/* Header & Toolbar */}
      <div className="flex flex-col justify-between gap-4 border-b border-white/5 pb-4 md:flex-row md:items-end">
        <div className="space-y-1">
          <h1 className="text-2xl font-extrabold tracking-tight text-white">
            Job Applications
          </h1>
          <p className="text-sm font-medium text-gray-400">
            Review and manage candidate applications.
          </p>
        </div>

        <div className="flex w-full flex-col gap-3 sm:flex-row md:w-auto">
          {/* Search Bar */}
          <div className="group relative w-full md:w-[260px]">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <Search className="h-4 w-4 text-gray-400 transition-colors group-focus-within:text-white" />
            </div>
            <input
              type="text"
              placeholder="Search candidates..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full rounded-xl border border-white/5 bg-white/10 py-2 pl-10 pr-3 text-sm text-white outline-none transition-all placeholder:text-gray-400 hover:bg-white/[0.15] focus:border-white/20 focus:ring-1 focus:ring-white/10"
            />
          </div>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="flex flex-col items-center justify-center gap-1 rounded-2xl border border-white/5 bg-[#151515] p-4 text-center shadow-md transition-all hover:border-white/20 hover:bg-[#1a1a1a]">
          <div className="rounded-xl bg-blue-500/10 p-2 text-blue-400 shadow-inner ring-1 ring-white/5">
            <Users size={18} />
          </div>
          <div>
            <p className="mb-0.5 text-[10px] font-bold uppercase tracking-widest text-gray-400">
              Total Applicants
            </p>
            <p className="text-2xl font-extrabold tracking-tight text-white">
              {data.length}
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-1 rounded-2xl border border-white/5 bg-[#151515] p-4 text-center shadow-md transition-all hover:border-white/20 hover:bg-[#1a1a1a]">
          <div className="rounded-xl bg-amber-500/10 p-2 text-amber-400 shadow-inner ring-1 ring-white/5">
            <Star size={18} />
          </div>
          <div>
            <p className="mb-0.5 text-[10px] font-bold uppercase tracking-widest text-gray-400">
              New (Needs Review)
            </p>
            <p className="text-2xl font-extrabold tracking-tight text-white">
              {data.filter((d) => d.status === "NEW").length}
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-1 rounded-2xl border border-white/5 bg-[#151515] p-4 text-center shadow-md transition-all hover:border-white/20 hover:bg-[#1a1a1a]">
          <div className="rounded-xl bg-purple-500/10 p-2 text-purple-400 shadow-inner ring-1 ring-white/5">
            <Briefcase size={18} />
          </div>
          <div>
            <p className="mb-0.5 text-[10px] font-bold uppercase tracking-widest text-gray-400">
              In Progress
            </p>
            <p className="text-2xl font-extrabold tracking-tight text-white">
              {data.filter((d) => d.status === "REVIEWING").length}
            </p>
          </div>
        </div>
      </div>

      <div className="overflow-hidden rounded-3xl border border-white/5 bg-[#111111] shadow-2xl ring-1 ring-white/5">
        <DataTable
          columns={columns}
          data={filteredData}
          isLoading={isLoading}
          actions={(row) => (
            <div className="flex justify-end gap-3 px-2">
              <Link href={`/admin/applications/${row.id}`} title="View Details">
                <button className="group flex h-8 w-8 items-center justify-center rounded-lg border border-blue-500/20 bg-blue-500/10 text-blue-400 shadow-sm transition-all hover:border-blue-500/40 hover:bg-blue-500/20">
                  <Eye
                    size={16}
                    className="transition-transform group-hover:scale-110"
                  />
                </button>
              </Link>
              <button
                onClick={() => handleDelete(row.id)}
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-rose-500/20 bg-rose-500/10 text-rose-400 shadow-sm transition-all hover:border-rose-500/40 hover:bg-rose-500/20"
                title="Archive"
              >
                <Trash2 size={16} />
              </button>
            </div>
          )}
        />
      </div>
    </div>
  );
}
