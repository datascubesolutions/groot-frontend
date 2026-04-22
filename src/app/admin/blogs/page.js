// @ts-nocheck
"use client";

import { DataTable } from "@/components/ui/DataTable";
import { AdminSkeleton } from "@/components/admin/AdminSkeleton";
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
import { useCallback, useEffect, useState } from "react";
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

  const fetchBlogs = useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await blogService.list({
        limit: 50,
        category: categoryFilter === "All" ? "" : categoryFilter,
        search: debouncedSearch,
      });

      const blogs =
        result?.result?.blogs ||
        result?.result?.data?.blogs ||
        result?.blogs ||
        [];
      setData(Array.isArray(blogs) ? blogs : []);
    } catch (error) {
      console.error("Failed to fetch blogs:", error);
      toast.error(getErrorMessage(error));
      setData([]);
    } finally {
      setIsLoading(false);
    }
  }, [debouncedSearch, categoryFilter]);

  useEffect(() => {
    void fetchBlogs();
  }, [fetchBlogs]);

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
              <h3 className="font-semibold text-white">Delete Blog Post?</h3>
              <p className="mt-1 text-sm text-gray-400">
                This action cannot be undone. This blog post will be permanently
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
                const deleteToastId = toast.loading("Deleting post...");
                try {
                  await blogService.delete(id);
                  toast.success("Blog post deleted successfully", {
                    id: deleteToastId,
                  });
                  fetchBlogs();
                } catch (err) {
                  toast.error(err?.message || "Failed to delete blog post", {
                    id: deleteToastId,
                  });
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

  const columns = [
    {
      header: "POST",
      accessorKey: "title",
      cell: (row) => (
        <div className="flex items-center gap-4 py-1">
          <div className="h-14 w-20 flex-shrink-0 overflow-hidden rounded-xl border border-white/10 bg-white/5">
            {row.coverImage ? (
              <Image
                src={row.coverImage}
                alt={row.title}
                width={80}
                height={56}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center text-gray-500">
                <FileText size={18} />
              </div>
            )}
          </div>
          <div className="flex min-w-0 flex-col">
            <span className="truncate text-[15px] font-bold leading-tight text-white">
              {row.title}
            </span>
            <span className="mt-0.5 max-w-[300px] truncate text-sm font-medium text-gray-400">
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
        <span className="rounded-lg border border-primary/20 bg-primary/10 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-primary">
          {row.category || "—"}
        </span>
      ),
    },
    {
      header: "AUTHOR",
      accessorKey: "author",
      cell: (row) => (
        <span className="text-sm font-medium text-gray-300">
          {row.author?.name || "—"}
        </span>
      ),
    },
    {
      header: "STATUS",
      accessorKey: "status",
      cell: (row) => (
        <span
          className={`rounded-full border px-3 py-1 text-[11px] font-bold uppercase tracking-wider ${STATUS_COLORS[row.status] || STATUS_COLORS.DRAFT}`}
        >
          {row.status || "DRAFT"}
        </span>
      ),
    },
    {
      header: "DATE",
      accessorKey: "createdAt",
      className: "hidden md:table-cell",
      cell: (row) => {
        const dateVal = row.publishedAt || row.createdAt;
        let dateStr = "—";
        if (dateVal?._seconds) {
          dateStr = new Date(dateVal._seconds * 1000).toLocaleDateString(
            "en-US",
            { month: "short", day: "numeric", year: "numeric" }
          );
        } else if (dateVal) {
          try {
            dateStr = new Date(dateVal).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            });
          } catch {
            /* keep default */
          }
        }
        return (
          <span className="text-xs font-medium uppercase tracking-wide text-gray-400">
            {dateStr}
          </span>
        );
      },
    },
  ];

  const publishedCount = data.filter((d) => d.status === "PUBLISHED").length;
  const draftCount = data.filter((d) => d.status === "DRAFT").length;
  const featuredCount = data.filter(
    (d) => String(d.isFeatured) === "true" || d.isFeatured === true
  ).length;

  if (isLoading && data.length === 0) {
    return <AdminSkeleton type="table" />;
  }

  return (
    <div className="animate-fade-in space-y-4 pb-2">
      {/* Header & Toolbar */}
      <div className="flex flex-col justify-between gap-4 border-b border-white/5 pb-4 md:flex-row md:items-end">
        <div className="space-y-1">
          <h1 className="text-2xl font-extrabold tracking-tight text-white">
            Blog Management
          </h1>
          <p className="text-sm font-medium text-gray-400">
            Create, edit, and manage your blog posts.
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
              placeholder="Search posts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full rounded-xl border border-white/5 bg-white/10 py-2 pl-10 pr-3 text-sm text-white outline-none transition-all placeholder:text-gray-400 hover:bg-white/[0.15] focus:border-white/20 focus:ring-1 focus:ring-white/10"
            />
          </div>

          {/* Category Filter */}
          <div className="group relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <Filter className="h-4 w-4 text-gray-400" />
            </div>
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="cursor-pointer appearance-none rounded-xl border border-white/5 bg-white/10 py-2 pl-10 pr-8 text-sm text-white outline-none transition-all hover:bg-white/[0.15] focus:border-white/20 focus:ring-1 focus:ring-white/10"
            >
              {CATEGORIES.map((cat) => (
                <option key={cat} value={cat} className="bg-[#1a1a1a]">
                  {cat === "All" ? "All Categories" : cat.replace("_", " ")}
                </option>
              ))}
            </select>
          </div>

          <Link href="/admin/blogs/new">
            <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-2 text-xs font-bold text-black shadow-[0_0_20px_rgba(255,255,255,0.15)] transition-all duration-300 hover:bg-gray-200 sm:w-auto">
              <Plus size={16} strokeWidth={2.5} />
              <span>New Post</span>
            </button>
          </Link>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        <div className="flex flex-col items-center justify-center gap-1 rounded-2xl border border-white/5 bg-[#151515] p-4 text-center shadow-md transition-all hover:border-white/20 hover:bg-[#1a1a1a]">
          <div className="rounded-xl bg-blue-500/10 p-2 text-blue-400 shadow-inner ring-1 ring-white/5">
            <BookOpen size={18} />
          </div>
          <div>
            <p className="mb-0.5 text-[10px] font-bold uppercase tracking-widest text-gray-400">
              Total Posts
            </p>
            <p className="text-2xl font-extrabold tracking-tight text-white">
              {data.length}
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-1 rounded-2xl border border-white/5 bg-[#151515] p-4 text-center shadow-md transition-all hover:border-white/20 hover:bg-[#1a1a1a]">
          <div className="rounded-xl bg-emerald-500/10 p-2 text-emerald-400 shadow-inner ring-1 ring-white/5">
            <FileText size={18} />
          </div>
          <div>
            <p className="mb-0.5 text-[10px] font-bold uppercase tracking-widest text-gray-400">
              Published
            </p>
            <p className="text-2xl font-extrabold tracking-tight text-white">
              {publishedCount}
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-1 rounded-2xl border border-white/5 bg-[#151515] p-4 text-center shadow-md transition-all hover:border-white/20 hover:bg-[#1a1a1a]">
          <div className="rounded-xl bg-amber-500/10 p-2 text-amber-400 shadow-inner ring-1 ring-white/5">
            <PencilLine size={18} />
          </div>
          <div>
            <p className="mb-0.5 text-[10px] font-bold uppercase tracking-widest text-gray-400">
              Drafts
            </p>
            <p className="text-2xl font-extrabold tracking-tight text-white">
              {draftCount}
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-1 rounded-2xl border border-white/5 bg-[#151515] p-4 text-center shadow-md transition-all hover:border-white/20 hover:bg-[#1a1a1a]">
          <div className="rounded-xl bg-purple-500/10 p-2 text-purple-400 shadow-inner ring-1 ring-white/5">
            <Star size={18} />
          </div>
          <div>
            <p className="mb-0.5 text-[10px] font-bold uppercase tracking-widest text-gray-400">
              Featured
            </p>
            <p className="text-2xl font-extrabold tracking-tight text-white">
              {featuredCount}
            </p>
          </div>
        </div>
      </div>

      {/* Data Table */}
      <div className="overflow-hidden rounded-3xl border border-white/5 bg-[#111111] shadow-2xl ring-1 ring-white/5">
        <DataTable
          columns={columns}
          data={data}
          isLoading={isLoading}
          actions={(row) => (
            <div className="flex justify-end gap-3 px-2">
              <Link href={`/admin/blogs/${row.id}`} title="View Details">
                <button className="group flex h-8 w-8 items-center justify-center rounded-lg border border-blue-500/20 bg-blue-500/10 text-blue-400 shadow-sm transition-all hover:border-blue-500/40 hover:bg-blue-500/20">
                  <Eye
                    size={16}
                    className="transition-transform group-hover:scale-110"
                  />
                </button>
              </Link>
              <Link href={`/admin/blogs/${row.id}?mode=edit`} title="Edit">
                <button className="flex h-8 w-8 items-center justify-center rounded-lg border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 shadow-sm transition-all hover:border-emerald-500/40 hover:bg-emerald-500/20">
                  <PencilLine size={16} />
                </button>
              </Link>
              <button
                onClick={() => handleDelete(row.id)}
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-rose-500/20 bg-rose-500/10 text-rose-400 shadow-sm transition-all hover:border-rose-500/40 hover:bg-rose-500/20"
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
