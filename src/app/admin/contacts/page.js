"use client";

import { DataTable } from "@/components/ui/DataTable";
import { useDebounce } from "@/hooks/useDebounce";
import { formatDate, getStatusColor } from "@/lib/utils";
import { contactService } from "@/services/contactService";
import { Edit, Eye, Plus, Search, Trash2 } from "lucide-react";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

export default function ContactsPage() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearch = useDebounce(searchTerm, 300);

  // Fetch Data
  const fetchContacts = async () => {
    setIsLoading(true);
    try {
      const result = await contactService.getAll();

      // Correctly access nested contacts array based on API response structure
      if (result?.result?.data?.contacts && Array.isArray(result.result.data.contacts)) {
        setData(result.result.data.contacts);
      } else {
        console.warn("Unexpected API response structure:", result);
        setData([]);
      }
    } catch (error) {
      console.error("Failed to fetch contacts:", error);
      setData([]); // Fallback on error
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const handleDelete = async (id) => {
    if (confirm("Are you sure you want to delete this contact?")) {
      try {
        await contactService.delete(id);
        setData(prev => prev.filter(item => item.id !== id));
      } catch (error) {
        console.error("Delete error:", error);
        alert("An error occurred while deleting");
      }
    }
  };

  const columns = [
    {
      header: "Name", accessorKey: "name", cell: (row) => (
        <div>
          <div className="font-semibold text-foreground">{row.name}</div>
          <div className="text-xs text-muted-foreground">{row.email}</div>
        </div>
      )
    },
    { header: "Company", accessorKey: "company" },
    { header: "Subject", accessorKey: "subject" },
    {
      header: "Date",
      accessorKey: "createdAt",
      className: "hidden md:table-cell",
      cell: (row) => formatDate(row.createdAt)
    },
    {
      header: "Status", accessorKey: "status", cell: (row) => (
        <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(row.status || 'NEW')}`}>
          {row.status || 'NEW'}
        </span>
      )
    },
  ];

  const filteredData = useMemo(() => {
    if (!debouncedSearch) return data;
    const lowerSearch = debouncedSearch.toLowerCase();
    // Ensure data is array before filtering
    return Array.isArray(data) ? data.filter(item =>
      item.name?.toLowerCase().includes(lowerSearch) ||
      item.email?.toLowerCase().includes(lowerSearch) ||
      item.company?.toLowerCase().includes(lowerSearch)
    ) : [];
  }, [data, debouncedSearch]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Contacts</h1>
          <p className="text-muted-foreground mt-1">Manage and track your form submissions.</p>
        </div>
        <Link href="/admin/contacts/new">
          <button className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors shadow-sm">
            <Plus size={18} />
            Add Contact
          </button>
        </Link>
      </div>

      <div className="flex items-center gap-4 bg-background border border-border p-4 rounded-xl shadow-sm transition-all focus-within:ring-1 focus-within:ring-primary">
        <Search className="text-muted-foreground w-5 h-5" />
        <input
          type="text"
          placeholder="Search contacts by name, email, or company..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 bg-transparent outline-none text-foreground placeholder:text-muted-foreground"
        />
      </div>

      <DataTable
        columns={columns}
        data={filteredData}
        isLoading={isLoading}
        actions={(row) => (
          <div className="flex justify-end gap-2">
            <Link href={`/admin/contacts/${row.id}`}>
              <button className="p-2 hover:bg-white/10 rounded-lg text-muted-foreground hover:text-blue-400 transition-colors" title="View Details">
                <Eye size={18} />
              </button>
            </Link>
            <Link href={`/admin/contacts/${row.id}?mode=edit`}>
              <button className="p-2 hover:bg-white/10 rounded-lg text-muted-foreground hover:text-green-400 transition-colors" title="Edit">
                <Edit size={18} />
              </button>
            </Link>
            <button
              onClick={() => handleDelete(row.id)}
              className="p-2 hover:bg-white/10 rounded-lg text-muted-foreground hover:text-red-400 transition-colors"
              title="Delete"
            >
              <Trash2 size={18} />
            </button>
          </div>
        )}
      />
    </div>
  );
}
