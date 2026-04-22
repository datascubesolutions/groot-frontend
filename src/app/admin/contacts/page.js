// @ts-nocheck
"use client";

import { DataTable } from "@/components/ui/DataTable";
import { AdminSkeleton } from "@/components/admin/AdminSkeleton";
import { useDebounce } from "@/hooks/useDebounce";
import { getErrorMessage } from "@/lib/api/errors";
import { formatDate, getStatusColor } from "@/lib/utils";
import { contactService } from "@/services/contactService";
import {
  ArchiveX,
  Clock,
  Eye,
  FileText,
  PencilLine,
  Plus,
  Search,
  Star,
  Trash2,
  Users,
} from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import { toast } from "sonner";

// Helper for Initials
const getInitials = (name) => {
  return name
    ?.split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
};

export default function ContactsPage() {
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    total: 0,
  });
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearch = useDebounce(searchTerm, 300);

  // Fetch Data
  const fetchContacts = useCallback(
    async (page = 1) => {
      setIsLoading(true);
      try {
        const result = await contactService.getAll({
          page,
          limit: pagination.limit,
        });

        if (
          result?.result?.data?.contacts &&
          Array.isArray(result.result.data.contacts)
        ) {
          setData(result.result.data.contacts);
          setPagination((prev) => ({
            ...prev,
            page,
            total: result.result.data.pagination?.total || 0,
            totalPages:
              result.result.data.pagination?.totalPages ||
              Math.ceil(
                (result.result.data.pagination?.total || 0) / prev.limit
              ),
          }));
        } else {
          console.warn("Unexpected API response structure:", result);
          setData([]);
        }
      } catch (error) {
        console.error("Failed to fetch contacts:", error);
        toast.error(getErrorMessage(error));
        setData([]);
      } finally {
        setIsLoading(false);
      }
    },
    [pagination.limit]
  );

  useEffect(() => {
    void fetchContacts(1);
  }, [fetchContacts]);

  const handlePageChange = (newPage) => {
    fetchContacts(newPage);
  };

  const handleDelete = (id) => {
    toast.custom(
      (t) => (
        <div className="relative w-[350px] space-y-3 overflow-hidden rounded-xl border border-white/10 bg-[#1a1a1a] p-4 shadow-2xl">
          {/* Glow effect */}
          <div className="absolute right-0 top-0 -mr-4 -mt-4 h-24 w-24 rounded-full bg-red-500/10 blur-[40px]" />

          <div className="relative z-10 flex items-start gap-3">
            <div className="rounded-lg border border-red-500/10 bg-red-500/10 p-2 text-red-500">
              <Trash2 size={18} />
            </div>
            <div>
              <h3 className="font-semibold text-white">Delete Contact?</h3>
              <p className="mt-1 text-sm text-gray-400">
                This action cannot be undone. This contact will be permanently
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
              onClick={async () => {
                toast.dismiss(t);
                try {
                  const loadingToast = toast.loading("Deleting contact...");
                  await contactService.delete(id);
                  setData((prev) => prev.filter((item) => item.id !== id));
                  toast.success("Contact deleted successfully", {
                    id: loadingToast,
                  });
                } catch (error) {
                  toast.error(getErrorMessage(error));
                }
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

  // Column Definitions
  const columns = [
    {
      header: "CONTACT DETAILS",
      accessorKey: "name",
      cell: (row) => (
        <div className="flex items-center gap-4 py-1">
          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-primary/20 bg-gradient-to-br from-primary/20 to-emerald-500/5 text-sm font-bold tracking-wider text-primary shadow-inner ring-1 ring-white/10">
            {getInitials(row.name)}
          </div>
          <div className="flex flex-col">
            <span className="text-[15px] font-bold leading-tight text-white transition-colors group-hover:text-primary">
              {row.name}
            </span>
            <span className="mt-0.5 text-sm font-medium text-gray-400">
              {row.email}
            </span>
          </div>
        </div>
      ),
    },
    {
      header: "ORGANIZATION",
      accessorKey: "company",
      cell: (row) => (
        <span className="text-sm font-medium text-gray-300">
          {row.company || "—"}
        </span>
      ),
    },
    {
      header: "INQUIRY",
      accessorKey: "subject",
      cell: (row) => (
        <span className="text-sm font-medium text-gray-300">{row.subject}</span>
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
          className={`rounded-full border border-opacity-50 px-3 py-1 text-[11px] font-bold uppercase tracking-wider ${getStatusColor(row.status || "PENDING")}`}
        >
          {row.status || "PENDING"}
        </span>
      ),
    },
  ];

  const filteredData = useMemo(() => {
    if (!debouncedSearch) return data;
    const lowerSearch = debouncedSearch.toLowerCase();
    return Array.isArray(data)
      ? data.filter(
          (item) =>
            item.name?.toLowerCase().includes(lowerSearch) ||
            item.email?.toLowerCase().includes(lowerSearch) ||
            item.company?.toLowerCase().includes(lowerSearch)
        )
      : [];
  }, [data, debouncedSearch]);

  const stats = [
    {
      label: "Total Contacts",
      value: pagination.total || filteredData.length,
      icon: Users,
      color: "text-blue-400",
      bg: "bg-blue-400/10",
    },
    {
      label: "New (Today)",
      value: "0",
      icon: Star,
      color: "text-amber-400",
      bg: "bg-amber-400/10",
    },
    {
      label: "Pending",
      value: filteredData.filter((d) => d.status === "NEW").length,
      icon: Clock,
      color: "text-emerald-400",
      bg: "bg-emerald-400/10",
    },
  ];

  if (isLoading && data.length === 0) {
    return <AdminSkeleton type="table" />;
  }

  return (
    <div className="animate-fade-in space-y-4 pb-2">
      {/* Header & Toolbar */}
      <div className="flex flex-col justify-between gap-4 border-b border-white/5 pb-4 md:flex-row md:items-end">
        <div className="space-y-1">
          <h1 className="text-2xl font-extrabold tracking-tight text-white">
            Contacts
          </h1>
          <p className="text-sm font-medium text-gray-400">
            Manage and track your form submissions and inquiries.
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
              placeholder="Search contacts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full rounded-xl border border-white/5 bg-white/10 py-2 pl-10 pr-3 text-sm text-white outline-none transition-all placeholder:text-gray-400 hover:bg-white/[0.15] focus:border-white/20 focus:ring-1 focus:ring-white/10"
            />
          </div>

          <Link href="/admin/contacts/new">
            <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-2 text-xs font-bold text-black shadow-[0_0_20px_rgba(255,255,255,0.15)] transition-all duration-300 hover:bg-gray-200 sm:w-auto">
              <Plus size={16} strokeWidth={2.5} />
              <span>Add Contact</span>
            </button>
          </Link>
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
              Total Contacts
            </p>
            <p className="text-2xl font-extrabold tracking-tight text-white">
              {pagination.total || data.length}
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-1 rounded-2xl border border-white/5 bg-[#151515] p-4 text-center shadow-md transition-all hover:border-white/20 hover:bg-[#1a1a1a]">
          <div className="rounded-xl bg-emerald-500/10 p-2 text-emerald-400 shadow-inner ring-1 ring-white/5">
            <FileText size={18} />
          </div>
          <div>
            <p className="mb-0.5 text-[10px] font-bold uppercase tracking-widest text-gray-400">
              Active Inquiries
            </p>
            <p className="text-2xl font-extrabold tracking-tight text-white">
              {data.filter((d) => d.status !== "ARCHIVED").length}
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-1 rounded-2xl border border-white/5 bg-[#151515] p-4 text-center shadow-md transition-all hover:border-white/20 hover:bg-[#1a1a1a]">
          <div className="rounded-xl bg-purple-500/10 p-2 text-purple-400 shadow-inner ring-1 ring-white/5">
            <ArchiveX size={18} />
          </div>
          <div>
            <p className="mb-0.5 text-[10px] font-bold uppercase tracking-widest text-gray-400">
              Archived
            </p>
            <p className="text-2xl font-extrabold tracking-tight text-white">
              {data.filter((d) => d.status === "ARCHIVED").length}
            </p>
          </div>
        </div>
      </div>

      <div className="overflow-hidden rounded-3xl border border-white/5 bg-[#111111] shadow-2xl ring-1 ring-white/5">
        <DataTable
          columns={columns}
          data={filteredData}
          isLoading={isLoading}
          pagination={{
            currentPage: pagination.page,
            totalPages: pagination.totalPages || 0,
            totalItems: pagination.total,
            itemsPerPage: pagination.limit,
            onPageChange: handlePageChange,
          }}
          actions={(row) => (
            <div className="flex justify-end gap-3 px-2">
              <Link href={`/admin/contacts/${row.id}`} title="View Details">
                <button className="group flex h-8 w-8 items-center justify-center rounded-lg border border-blue-500/20 bg-blue-500/10 text-blue-400 shadow-sm transition-all hover:border-blue-500/40 hover:bg-blue-500/20">
                  <Eye
                    size={16}
                    className="transition-transform group-hover:scale-110"
                  />
                </button>
              </Link>
              <Link href={`/admin/contacts/${row.id}?mode=edit`} title="Edit">
                <button className="flex h-8 w-8 items-center justify-center rounded-lg border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 shadow-sm transition-all hover:border-emerald-500/40 hover:bg-emerald-500/20">
                  <PencilLine size={16} />
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
