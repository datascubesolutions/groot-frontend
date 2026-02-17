"use client";

import { DataTable } from "@/components/ui/DataTable";
import { useDebounce } from "@/hooks/useDebounce";
import { getErrorMessage } from "@/lib/api/errors";
import { blogService } from "@/services/blogService";
import {
  BookOpen,
  Eye,
  FileText,
  Filter,
  PencilLine,
  Plus,
  Search,
  Star,
  Trash2,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const STATUS_COLORS = {
  PUBLISHED: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  DRAFT: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  ARCHIVED: "bg-gray-500/10 text-gray-400 border-gray-500/20",
};

const CATEGORIES = [
  "All",
  "ENGINEERING",
  "DATA_SCIENCE",
  "AI",
  "BUSINESS",
  "CLOUD",
  "ANALYTICS",
];

export default function BlogListPage() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const debouncedSearch = useDebounce(searchTerm, 300);

  const fetchBlogs = async () => {
    setIsLoading(true);
    try {
      const result = await blogService.list({
        limit: 50,
        category: categoryFilter === "All" ? "" : categoryFilter,
        search: debouncedSearch,
      });

      const blogs = result?.result?.blogs || result?.result?.data?.blogs || result?.blogs || [];
      setData(Array.isArray(blogs) ? blogs : []);
    } catch (error) {
      console.error("Failed to fetch blogs:", error);
      toast.error(getErrorMessage(error));
      setData([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, [debouncedSearch, categoryFilter]);

  const handleDelete = (id) => {
    toast.custom(
      (t) => (
        <div className="bg-[#1a1a1a] border border-white/10 p-4 rounded-xl shadow-2xl w-[350px] space-y-3 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-red-500/10 blur-[40px] rounded-full" />
          <div className="flex items-start gap-3 relative z-10">
            <div className="p-2 bg-red-500/10 rounded-lg text-red-500 border border-red-500/10">
              <Trash2 size={18} />
            </div>
            <div>
              <h3 className="font-semibold text-white">Delete Blog Post?</h3>
              <p className="text-sm text-gray-400 mt-1">
                This action cannot be undone. This blog post will be permanently
                removed.
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
                toast.success("Delete functionality coming soon");
              }}
              className="px-3 py-1.5 text-sm font-medium bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors shadow-sm"
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
      header: "POST",
      accessorKey: "title",
      cell: (row) => (
        <div className="flex items-center gap-4 py-1">
          <div className="h-14 w-20 rounded-xl bg-white/5 border border-white/10 overflow-hidden flex-shrink-0">
            {row.coverImage ? (
              <Image
                src={row.coverImage}
                alt={row.title}
                width={80}
                height={56}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="h-full w-full flex items-center justify-center text-gray-500">
                <FileText size={18} />
              </div>
            )}
          </div>
          <div className="flex flex-col min-w-0">
            <span className="font-bold text-white text-[15px] leading-tight truncate">
              {row.title}
            </span>
            <span className="text-sm text-gray-400 font-medium mt-0.5 truncate max-w-[300px]">
              {row.excerpt || "No excerpt"}
            </span>
          </div>
        </div>
      ),
    },
    {
      header: "CATEGORY",
      accessorKey: "category",
      cell: (row) => (
        <span className="px-2.5 py-1 rounded-lg text-[11px] uppercase tracking-wider font-bold bg-primary/10 text-primary border border-primary/20">
          {row.category || "—"}
        </span>
      ),
    },
    {
      header: "AUTHOR",
      accessorKey: "author",
      cell: (row) => (
        <span className="text-gray-300 font-medium text-sm">
          {row.author?.name || "—"}
        </span>
      ),
    },
    {
      header: "STATUS",
      accessorKey: "status",
      cell: (row) => (
        <span
          className={`px-3 py-1 rounded-full text-[11px] uppercase tracking-wider font-bold border ${STATUS_COLORS[row.status] || STATUS_COLORS.DRAFT}`}
        >
          {row.status || "DRAFT"}
        </span>
      ),
    },
    {
      header: "DATE",
      accessorKey: "createdAt",
      className: "hidden md:table-cell",
      cell: (row) => (
        <span className="text-gray-400 font-medium text-xs uppercase tracking-wide">
          {row.createdAt
            ? new Date(
              row.createdAt._seconds
                ? row.createdAt._seconds * 1000
                : row.createdAt
            ).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })
            : "—"}
        </span>
      ),
    },
  ];

  const publishedCount = data.filter((d) => d.status === "PUBLISHED").length;
  const draftCount = data.filter((d) => d.status === "DRAFT").length;
  const featuredCount = data.filter((d) => d.isFeatured).length;

  return (
    <div className="space-y-4 animate-fade-in pb-2">
      {/* Header & Toolbar */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-white/5">
        <div className="space-y-1">
          <h1 className="text-2xl font-extrabold text-white tracking-tight">
            Blog Management
          </h1>
          <p className="text-gray-400 font-medium text-sm">
            Create, edit, and manage your blog posts.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          {/* Search Bar */}
          <div className="relative group w-full md:w-[260px]">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-gray-400 group-focus-within:text-white transition-colors" />
            </div>
            <input
              type="text"
              placeholder="Search posts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 bg-white/10 border border-white/5 rounded-xl text-sm placeholder:text-gray-400 text-white focus:border-white/20 focus:ring-1 focus:ring-white/10 transition-all outline-none hover:bg-white/[0.15]"
            />
          </div>

          {/* Category Filter */}
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Filter className="h-4 w-4 text-gray-400" />
            </div>
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="pl-10 pr-8 py-2 bg-white/10 border border-white/5 rounded-xl text-sm text-white focus:border-white/20 focus:ring-1 focus:ring-white/10 transition-all outline-none hover:bg-white/[0.15] appearance-none cursor-pointer"
            >
              {CATEGORIES.map((cat) => (
                <option key={cat} value={cat} className="bg-[#1a1a1a]">
                  {cat === "All" ? "All Categories" : cat.replace("_", " ")}
                </option>
              ))}
            </select>
          </div>

          <Link href="/admin/blogs/new">
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2 bg-white text-black text-xs font-bold rounded-xl hover:bg-gray-200 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.15)]">
              <Plus size={16} strokeWidth={2.5} />
              <span>New Post</span>
            </button>
          </Link>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-[#151515] border border-white/5 p-4 rounded-2xl flex flex-col items-center justify-center text-center gap-1 hover:border-white/20 transition-all hover:bg-[#1a1a1a] shadow-md">
          <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400 shadow-inner ring-1 ring-white/5">
            <BookOpen size={18} />
          </div>
          <div>
            <p className="text-gray-400 text-[10px] uppercase font-bold tracking-widest mb-0.5">
              Total Posts
            </p>
            <p className="text-2xl font-extrabold text-white tracking-tight">
              {data.length}
            </p>
          </div>
        </div>
        <div className="bg-[#151515] border border-white/5 p-4 rounded-2xl flex flex-col items-center justify-center text-center gap-1 hover:border-white/20 transition-all hover:bg-[#1a1a1a] shadow-md">
          <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 shadow-inner ring-1 ring-white/5">
            <FileText size={18} />
          </div>
          <div>
            <p className="text-gray-400 text-[10px] uppercase font-bold tracking-widest mb-0.5">
              Published
            </p>
            <p className="text-2xl font-extrabold text-white tracking-tight">
              {publishedCount}
            </p>
          </div>
        </div>
        <div className="bg-[#151515] border border-white/5 p-4 rounded-2xl flex flex-col items-center justify-center text-center gap-1 hover:border-white/20 transition-all hover:bg-[#1a1a1a] shadow-md">
          <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400 shadow-inner ring-1 ring-white/5">
            <PencilLine size={18} />
          </div>
          <div>
            <p className="text-gray-400 text-[10px] uppercase font-bold tracking-widest mb-0.5">
              Drafts
            </p>
            <p className="text-2xl font-extrabold text-white tracking-tight">
              {draftCount}
            </p>
          </div>
        </div>
        <div className="bg-[#151515] border border-white/5 p-4 rounded-2xl flex flex-col items-center justify-center text-center gap-1 hover:border-white/20 transition-all hover:bg-[#1a1a1a] shadow-md">
          <div className="p-2 rounded-xl bg-purple-500/10 text-purple-400 shadow-inner ring-1 ring-white/5">
            <Star size={18} />
          </div>
          <div>
            <p className="text-gray-400 text-[10px] uppercase font-bold tracking-widest mb-0.5">
              Featured
            </p>
            <p className="text-2xl font-extrabold text-white tracking-tight">
              {featuredCount}
            </p>
          </div>
        </div>
      </div>

      {/* Data Table */}
      <div className="bg-[#111111] border border-white/5 rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/5">
        <DataTable
          columns={columns}
          data={data}
          isLoading={isLoading}
          actions={(row) => (
            <div className="flex justify-end gap-3 px-2">
              <Link
                href={`/admin/blogs/${row.id}`}
                title="View Details"
              >
                <button className="h-8 w-8 flex items-center justify-center rounded-lg text-blue-400 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/20 hover:border-blue-500/40 transition-all shadow-sm group">
                  <Eye
                    size={16}
                    className="group-hover:scale-110 transition-transform"
                  />
                </button>
              </Link>
              <Link
                href={`/admin/blogs/${row.id}?mode=edit`}
                title="Edit"
              >
                <button className="h-8 w-8 flex items-center justify-center rounded-lg text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/20 hover:border-emerald-500/40 transition-all shadow-sm">
                  <PencilLine size={16} />
                </button>
              </Link>
              <button
                onClick={() => handleDelete(row.id)}
                className="h-8 w-8 flex items-center justify-center rounded-lg text-rose-400 bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/20 hover:border-rose-500/40 transition-all shadow-sm"
                title="Delete"
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
