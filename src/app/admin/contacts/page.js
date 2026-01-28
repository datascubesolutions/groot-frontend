"use client";

import { DataTable } from "@/components/ui/DataTable";
import { useDebounce } from "@/hooks/useDebounce";
import { getErrorMessage } from "@/lib/api/errors";
import { formatDate, getStatusColor } from "@/lib/utils";
import { contactService } from "@/services/contactService";
import { ArchiveX, Clock, Eye, FileText, PencilLine, Plus, Search, Star, Trash2, Users } from "lucide-react";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
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
    total: 0
  });
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearch = useDebounce(searchTerm, 300);

  // Fetch Data
  const fetchContacts = async (page = 1) => {
    setIsLoading(true);
    try {
      const result = await contactService.getAll({
        page,
        limit: pagination.limit
      });

      if (result?.result?.data?.contacts && Array.isArray(result.result.data.contacts)) {
        setData(result.result.data.contacts);
        setPagination(prev => ({
          ...prev,
          page,
          total: result.result.data.pagination?.total || 0,
          totalPages: result.result.data.pagination?.totalPages || Math.ceil((result.result.data.pagination?.total || 0) / prev.limit)
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
  };

  useEffect(() => {
    fetchContacts(1);
  }, []);

  const handlePageChange = (newPage) => {
    fetchContacts(newPage);
  };

  const handleDelete = (id) => {
    toast.custom((t) => (
      <div className="bg-[#1a1a1a] border border-white/10 p-4 rounded-xl shadow-2xl w-[350px] space-y-3 relative overflow-hidden">
        {/* Glow effect */}
        <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-red-500/10 blur-[40px] rounded-full" />

        <div className="flex items-start gap-3 relative z-10">
          <div className="p-2 bg-red-500/10 rounded-lg text-red-500 border border-red-500/10">
            <Trash2 size={18} />
          </div>
          <div>
            <h3 className="font-semibold text-white">Delete Contact?</h3>
            <p className="text-sm text-gray-400 mt-1">
              This action cannot be undone. This contact will be permanently removed.
            </p>
          </div>
        </div>
        <div className="flex justify-end gap-2 pt-2 relative z-10">
          <button
            onClick={() => toast.dismiss(t)}
            className="px-3 py-1.5 text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={async () => {
              toast.dismiss(t);
              try {
                const loadingToast = toast.loading('Deleting contact...');
                await contactService.delete(id);
                setData(prev => prev.filter(item => item.id !== id));
                toast.success('Contact deleted successfully', { id: loadingToast });
              } catch (error) {
                toast.error(getErrorMessage(error));
              }
            }}
            className="px-3 py-1.5 text-sm font-medium bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors shadow-sm"
          >
            Delete
          </button>
        </div>
      </div>
    ), { duration: Infinity });
  };

  // Column Definitions
  const columns = [
    {
      header: "CONTACT DETAILS",
      accessorKey: "name",
      cell: (row) => (
        <div className="flex items-center gap-4 py-1">
          <div className="h-11 w-11 rounded-full bg-gradient-to-br from-primary/20 to-emerald-500/5 border border-primary/20 flex items-center justify-center text-sm font-bold text-primary tracking-wider shadow-inner ring-1 ring-white/10">
            {getInitials(row.name)}
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-white text-[15px] leading-tight group-hover:text-primary transition-colors">{row.name}</span>
            <span className="text-sm text-gray-400 font-medium mt-0.5">{row.email}</span>
          </div>
        </div>
      )
    },
    {
      header: "ORGANIZATION",
      accessorKey: "company",
      cell: (row) => <span className="text-gray-300 font-medium text-sm">{row.company || "—"}</span>
    },
    {
      header: "INQUIRY",
      accessorKey: "subject",
      cell: (row) => <span className="text-gray-300 font-medium text-sm">{row.subject}</span>
    },
    {
      header: "DATE",
      accessorKey: "createdAt",
      className: "hidden md:table-cell",
      cell: (row) => <span className="text-gray-400 font-medium text-xs uppercase tracking-wide">{formatDate(row.createdAt)}</span>
    },
    {
      header: "STATUS",
      accessorKey: "status",
      cell: (row) => (
        <span className={`px-3 py-1 rounded-full text-[11px] uppercase tracking-wider font-bold border border-opacity-50 ${getStatusColor(row.status || 'PENDING')}`}>
          {row.status || 'PENDING'}
        </span>
      )
    },
  ];

  const filteredData = useMemo(() => {
    if (!debouncedSearch) return data;
    const lowerSearch = debouncedSearch.toLowerCase();
    return Array.isArray(data) ? data.filter(item =>
      item.name?.toLowerCase().includes(lowerSearch) ||
      item.email?.toLowerCase().includes(lowerSearch) ||
      item.company?.toLowerCase().includes(lowerSearch)
    ) : [];
  }, [data, debouncedSearch]);

  const stats = [
    { label: 'Total Contacts', value: pagination.total || filteredData.length, icon: Users, color: 'text-blue-400', bg: 'bg-blue-400/10' },
    { label: 'New (Today)', value: '0', icon: Star, color: 'text-amber-400', bg: 'bg-amber-400/10' },
    { label: 'Pending', value: filteredData.filter(d => d.status === 'NEW').length, icon: Clock, color: 'text-emerald-400', bg: 'bg-emerald-400/10' },
  ];

  return (
    <div className="space-y-4 animate-fade-in pb-2">
      {/* Header & Toolbar */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-white/5">
        <div className="space-y-1">
          <h1 className="text-2xl font-extrabold text-white tracking-tight">Contacts</h1>
          <p className="text-gray-400 font-medium text-sm">Manage and track your form submissions and inquiries.</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          {/* Search Bar */}
          <div className="relative group w-full md:w-[260px]">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-gray-400 group-focus-within:text-white transition-colors" />
            </div>
            <input
              type="text"
              placeholder="Search contacts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 bg-white/10 border border-white/5 rounded-xl text-sm placeholder:text-gray-400 text-white focus:border-white/20 focus:ring-1 focus:ring-white/10 transition-all outline-none hover:bg-white/[0.15]"
            />
          </div>

          <Link href="/admin/contacts/new">
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2 bg-white text-black text-xs font-bold rounded-xl hover:bg-gray-200 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.15)]">
              <Plus size={16} strokeWidth={2.5} />
              <span>Add Contact</span>
            </button>
          </Link>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-[#151515] border border-white/5 p-4 rounded-2xl flex flex-col items-center justify-center text-center gap-1 hover:border-white/20 transition-all hover:bg-[#1a1a1a] shadow-md">
          <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400 shadow-inner ring-1 ring-white/5">
            <Users size={18} />
          </div>
          <div>
            <p className="text-gray-400 text-[10px] uppercase font-bold tracking-widest mb-0.5">Total Contacts</p>
            <p className="text-2xl font-extrabold text-white tracking-tight">{pagination.total || data.length}</p>
          </div>
        </div>
        <div className="bg-[#151515] border border-white/5 p-4 rounded-2xl flex flex-col items-center justify-center text-center gap-1 hover:border-white/20 transition-all hover:bg-[#1a1a1a] shadow-md">
          <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 shadow-inner ring-1 ring-white/5">
            <FileText size={18} />
          </div>
          <div>
            <p className="text-gray-400 text-[10px] uppercase font-bold tracking-widest mb-0.5">Active Inquiries</p>
            <p className="text-2xl font-extrabold text-white tracking-tight">{data.filter(d => d.status !== 'ARCHIVED').length}</p>
          </div>
        </div>
        <div className="bg-[#151515] border border-white/5 p-4 rounded-2xl flex flex-col items-center justify-center text-center gap-1 hover:border-white/20 transition-all hover:bg-[#1a1a1a] shadow-md">
          <div className="p-2 rounded-xl bg-purple-500/10 text-purple-400 shadow-inner ring-1 ring-white/5">
            <ArchiveX size={18} />
          </div>
          <div>
            <p className="text-gray-400 text-[10px] uppercase font-bold tracking-widest mb-0.5">Archived</p>
            <p className="text-2xl font-extrabold text-white tracking-tight">{data.filter(d => d.status === 'ARCHIVED').length}</p>
          </div>
        </div>
      </div>

      <div className="bg-[#111111] border border-white/5 rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/5">
        <DataTable
          columns={columns}
          data={filteredData}
          isLoading={isLoading}
          pagination={{
            currentPage: pagination.page,
            totalPages: pagination.totalPages || 0,
            totalItems: pagination.total,
            itemsPerPage: pagination.limit,
            onPageChange: handlePageChange
          }}
          actions={(row) => (
            <div className="flex justify-end gap-3 px-2">
              <Link href={`/admin/contacts/${row.id}`} title="View Details">
                <button className="h-8 w-8 flex items-center justify-center rounded-lg text-blue-400 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/20 hover:border-blue-500/40 transition-all shadow-sm group">
                  <Eye size={16} className="group-hover:scale-110 transition-transform" />
                </button>
              </Link>
              <Link href={`/admin/contacts/${row.id}?mode=edit`} title="Edit">
                <button className="h-8 w-8 flex items-center justify-center rounded-lg text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/20 hover:border-emerald-500/40 transition-all shadow-sm">
                  <PencilLine size={16} />
                </button>
              </Link>
              <button
                onClick={() => handleDelete(row.id)}
                className="h-8 w-8 flex items-center justify-center rounded-lg text-rose-400 bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/20 hover:border-rose-500/40 transition-all shadow-sm"
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
