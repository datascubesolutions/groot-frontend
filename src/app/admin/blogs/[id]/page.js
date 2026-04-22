// @ts-nocheck
"use client";

import MarkdownEditor from "@/components/admin/MarkdownEditor";
import { Skeleton } from "@/components/ui/Skeleton";
import { getErrorMessage } from "@/lib/api/errors";
import { blogService } from "@/services/blogService";
import {
  ArrowLeft,
  Calendar,
  Clock,
  FileText,
  ImagePlus,
  Loader2,
  PencilLine,
  Plus,
  Save,
  Star,
  Tag,
  Trash2,
  User,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

const STATUS_COLORS = {
  PUBLISHED: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  DRAFT: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  ARCHIVED: "bg-gray-500/10 text-gray-400 border-gray-500/20",
};

const CATEGORIES = [
  "ENGINEERING",
  "DATA_SCIENCE",
  "AI",
  "BUSINESS",
  "CLOUD",
  "ANALYTICS",
];

const STATUSES = ["PUBLISHED", "DRAFT"];

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

export default function BlogDetailPage() {
  const { id } = useParams();
  const searchParams = useSearchParams();
  const router = useRouter();
  const isEditMode = searchParams.get("mode") === "edit";

  const [blog, setBlog] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Edit form state
  const [form, setForm] = useState({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    category: "ENGINEERING",
    readTime: "5 min read",
    isFeatured: false,
    status: "DRAFT",
  });
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");
  const [author, setAuthor] = useState({ name: "", designation: "" });
  const [coverImage, setCoverImage] = useState(null);
  const [coverPreview, setCoverPreview] = useState(null);
  const [authorAvatar, setAuthorAvatar] = useState(null);
  const [authorAvatarPreview, setAuthorAvatarPreview] = useState(null);
  const [stages, setStages] = useState([]);
  const coverImageRef = useRef(null);
  const authorAvatarRef = useRef(null);

  useEffect(() => {
    const fetchBlog = async () => {
      setIsLoading(true);
      try {
        const result = await blogService.getById(id);
        const blogData =
          result?.result?.blog ||
          result?.result?.data?.blog ||
          result?.blog ||
          null;
        setBlog(blogData);

        if (blogData) {
          setForm({
            title: blogData.title || "",
            slug: blogData.slug || "",
            excerpt: blogData.excerpt || "",
            content: blogData.content || "",
            category: blogData.category || "ENGINEERING",
            readTime: blogData.readTime || "5 min read",
            isFeatured:
              String(blogData.isFeatured) === "true" ||
              blogData.isFeatured === true,
            status: blogData.status || "DRAFT",
          });
          setTags(blogData.tags || []);
          setAuthor({
            name: blogData.author?.name || "",
            designation: blogData.author?.designation || "",
          });
          if (blogData.coverImage) setCoverPreview(blogData.coverImage);
          if (blogData.author?.avatar)
            setAuthorAvatarPreview(blogData.author.avatar);
          if (blogData.stages) {
            setStages(
              blogData.stages.map((s) => ({
                ...s,
                image: null,
                imagePreview: s.image || null,
              }))
            );
          }
        }
      } catch (error) {
        console.error("Failed to fetch blog:", error);
        toast.error(getErrorMessage(error));
      } finally {
        setIsLoading(false);
      }
    };

    if (id) fetchBlog();
  }, [id]);

  const handleChange = (field, value) => {
    setForm((prev) => {
      const updated = { ...prev, [field]: value };
      if (field === "title") updated.slug = slugify(value);
      return updated;
    });
  };

  const handleAddTag = () => {
    const tag = tagInput.trim().toLowerCase();
    if (tag && !tags.includes(tag)) setTags((prev) => [...prev, tag]);
    setTagInput("");
  };

  const handleRemoveTag = (t) => setTags((prev) => prev.filter((x) => x !== t));

  const handleCoverImage = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setCoverImage(file);
      setCoverPreview(URL.createObjectURL(file));
    }
  };

  const handleAuthorAvatar = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setAuthorAvatar(file);
      setAuthorAvatarPreview(URL.createObjectURL(file));
    }
  };

  const addStage = () => {
    setStages((prev) => [
      ...prev,
      {
        title: "",
        content: "",
        order: prev.length + 1,
        image: null,
        imagePreview: null,
      },
    ]);
  };

  const updateStage = (index, field, value) => {
    setStages((prev) =>
      prev.map((s, i) => (i === index ? { ...s, [field]: value } : s))
    );
  };

  const handleStageImage = (index, e) => {
    const file = e.target.files?.[0];
    if (file) {
      updateStage(index, "image", file);
      updateStage(index, "imagePreview", URL.createObjectURL(file));
    }
  };

  const removeStage = (index) => {
    setStages((prev) =>
      prev.filter((_, i) => i !== index).map((s, i) => ({ ...s, order: i + 1 }))
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.title.trim()) return toast.error("Please enter a title");
    if (!form.content.trim()) return toast.error("Please enter content");

    setIsSubmitting(true);
    const toastId = toast.loading("Saving blog post...");

    try {
      const formData = new FormData();
      formData.append("title", form.title);
      formData.append("slug", form.slug);
      formData.append("excerpt", form.excerpt);
      formData.append("content", form.content);
      formData.append("category", form.category);
      formData.append("readTime", form.readTime);
      formData.append("isFeatured", form.isFeatured);
      formData.append("status", form.status);

      tags.forEach((tag, i) => formData.append(`tags[${i}]`, tag));

      formData.append("author.name", author.name);
      formData.append("author.designation", author.designation);
      if (authorAvatar) formData.append("author.avatar", authorAvatar);
      if (coverImage) formData.append("coverImage", coverImage);

      stages.forEach((stage, i) => {
        formData.append(`stages[${i}].title`, stage.title);
        formData.append(`stages[${i}].content`, stage.content);
        formData.append(`stages[${i}].order`, stage.order);
        if (stage.image) formData.append(`stages[${i}].image`, stage.image);
      });

      await blogService.update(id, formData);

      toast.success("Blog post saved successfully!", { id: toastId });
      setTimeout(() => router.push("/admin/blogs"), 500);
    } catch (err) {
      console.error("Save blog error:", err);
      toast.error(err?.message || "Failed to save blog post", { id: toastId });
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatDate = (dateValue) => {
    if (!dateValue) return "—";
    try {
      const date = dateValue._seconds
        ? new Date(dateValue._seconds * 1000)
        : new Date(dateValue);
      if (isNaN(date.getTime())) return "—";
      return date.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      });
    } catch {
      return "—";
    }
  };

  // ===== LOADING STATE =====
  if (isLoading) {
    return (
      <div className="animate-pulse space-y-6 pb-8">
        {/* Header Skeleton */}
        <div className="flex items-center justify-between border-b border-white/5 pb-4">
          <div className="flex items-center gap-4">
            <Skeleton className="h-10 w-10 rounded-xl bg-white/5" />
            <div className="space-y-2">
              <Skeleton className="h-8 w-48 rounded-lg bg-white/5" />
              <Skeleton className="h-4 w-32 bg-white/5" />
            </div>
          </div>
          <Skeleton className="h-10 w-32 rounded-xl bg-white/5" />
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Left Column */}
          <div className="space-y-6 lg:col-span-2">
            <Skeleton className="h-[120px] w-full rounded-2xl bg-white/5" />
            <Skeleton className="h-[400px] w-full rounded-2xl bg-white/5" />
            <Skeleton className="h-[200px] w-full rounded-2xl bg-white/5" />
          </div>
          {/* Right Column */}
          <div className="space-y-6">
            <Skeleton className="h-[300px] w-full rounded-2xl bg-white/5" />
            <Skeleton className="h-[200px] w-full rounded-2xl bg-white/5" />
          </div>
        </div>
      </div>
    );
  }

  // ===== NOT FOUND STATE =====
  if (!blog) {
    return (
      <div className="flex min-h-[400px] flex-col items-center justify-center gap-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/5 text-gray-500">
          <FileText size={28} />
        </div>
        <h3 className="text-xl font-bold text-white">Blog post not found</h3>
        <p className="text-sm text-gray-400">
          The post you&apos;re looking for doesn&apos;t exist or has been
          removed.
        </p>
        <Link href="/admin/blogs">
          <button className="rounded-xl bg-white px-5 py-2 text-xs font-bold text-black transition-all hover:bg-gray-200">
            ← Back to Blogs
          </button>
        </Link>
      </div>
    );
  }

  // ===== EDIT MODE =====
  if (isEditMode) {
    return (
      <div className="animate-fade-in space-y-6 pb-8">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/5 pb-4">
          <div className="flex items-center gap-4">
            <Link href={`/admin/blogs/${id}`}>
              <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-400 transition-all hover:border-white/20 hover:text-white">
                <ArrowLeft size={18} />
              </button>
            </Link>
            <div>
              <h1 className="text-2xl font-extrabold tracking-tight text-white">
                Edit Blog Post
              </h1>
              <p className="text-sm font-medium text-gray-400">
                Modify and update this article
              </p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {/* Left Column — Main Form */}
            <div className="space-y-6 lg:col-span-2">
              {/* Title & Slug */}
              <div className="space-y-5 rounded-2xl border border-white/5 bg-[#111111] p-6">
                <h2 className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-gray-300">
                  <FileText size={16} className="text-primary" />
                  Post Details
                </h2>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="admin-blog-edit-title"
                      className="text-sm font-medium text-gray-300"
                    >
                      Title <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="admin-blog-edit-title"
                      type="text"
                      value={form.title}
                      onChange={(e) => handleChange("title", e.target.value)}
                      placeholder="Enter an engaging title..."
                      className="block w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-lg font-semibold text-white outline-none transition-all placeholder:text-gray-500 focus:border-primary/50 focus:ring-1 focus:ring-primary/20"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="admin-blog-edit-slug"
                      className="text-sm font-medium text-gray-300"
                    >
                      Slug
                    </label>
                    <input
                      id="admin-blog-edit-slug"
                      type="text"
                      value={form.slug}
                      onChange={(e) => handleChange("slug", e.target.value)}
                      className="block w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 font-mono text-sm text-gray-400 outline-none transition-all placeholder:text-gray-600 focus:border-white/20 focus:ring-1 focus:ring-white/10"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="admin-blog-edit-excerpt"
                      className="text-sm font-medium text-gray-300"
                    >
                      Excerpt
                    </label>
                    <textarea
                      id="admin-blog-edit-excerpt"
                      value={form.excerpt}
                      onChange={(e) => handleChange("excerpt", e.target.value)}
                      placeholder="A brief summary..."
                      rows={3}
                      className="block w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-white outline-none transition-all placeholder:text-gray-500 focus:border-white/20 focus:ring-1 focus:ring-white/10"
                    />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4 rounded-2xl border border-white/5 bg-[#111111] p-6">
                <h2 className="text-sm font-bold uppercase tracking-widest text-gray-300">
                  Content <span className="text-red-400">*</span>
                </h2>
                <p className="text-xs text-gray-500">
                  Supports Markdown formatting
                </p>
                <MarkdownEditor
                  value={form.content}
                  onChange={(value) => handleChange("content", value)}
                  placeholder="Write your blog content..."
                  rows={16}
                  required
                />
              </div>

              {/* Cover Image */}
              <div className="space-y-4 rounded-2xl border border-white/5 bg-[#111111] p-6">
                <h2 className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-gray-300">
                  <ImagePlus size={16} className="text-primary" />
                  Cover Image
                </h2>
                <input
                  ref={coverImageRef}
                  type="file"
                  accept="image/*"
                  onChange={handleCoverImage}
                  className="hidden"
                />
                {coverPreview ? (
                  <div className="group relative h-48 w-full">
                    <Image
                      src={coverPreview}
                      alt="Cover preview"
                      fill
                      unoptimized
                      className="rounded-xl border border-white/10 object-cover"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        setCoverImage(null);
                        setCoverPreview(null);
                      }}
                      className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-lg bg-black/60 text-white transition-colors hover:bg-red-500"
                    >
                      <X size={16} />
                    </button>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => coverImageRef.current?.click()}
                    className="flex h-40 w-full flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-white/10 text-gray-400 transition-all hover:border-primary/30 hover:bg-primary/5 hover:text-primary"
                  >
                    <ImagePlus size={28} />
                    <span className="text-sm font-medium">
                      Click to upload cover image
                    </span>
                  </button>
                )}
              </div>

              {/* Stages */}
              <div className="space-y-4 rounded-2xl border border-white/5 bg-[#111111] p-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-sm font-bold uppercase tracking-widest text-gray-300">
                    Content Stages
                  </h2>
                  <button
                    type="button"
                    onClick={addStage}
                    className="flex items-center gap-1.5 rounded-lg border border-primary/20 bg-primary/10 px-3 py-1.5 text-xs font-bold text-primary transition-all hover:bg-primary/20"
                  >
                    <Plus size={14} />
                    Add Stage
                  </button>
                </div>
                {stages.length === 0 && (
                  <p className="py-6 text-center text-sm text-gray-500">
                    No stages added yet.
                  </p>
                )}
                <div className="space-y-4">
                  {stages.map((stage, i) => (
                    <div
                      key={i}
                      className="relative space-y-3 rounded-xl border border-white/5 bg-white/[0.03] p-4"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold uppercase tracking-widest text-gray-400">
                          Stage {stage.order}
                        </span>
                        <button
                          type="button"
                          onClick={() => removeStage(i)}
                          className="flex h-7 w-7 items-center justify-center rounded-lg bg-rose-500/10 text-rose-400 transition-all hover:bg-rose-500/20"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                      <input
                        type="text"
                        value={stage.title}
                        onChange={(e) =>
                          updateStage(i, "title", e.target.value)
                        }
                        placeholder="Stage title..."
                        className="block w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white outline-none transition-all placeholder:text-gray-500 focus:border-white/20"
                      />
                      <textarea
                        value={stage.content}
                        onChange={(e) =>
                          updateStage(i, "content", e.target.value)
                        }
                        placeholder="Stage content..."
                        rows={3}
                        className="block w-full resize-none rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white outline-none transition-all placeholder:text-gray-500 focus:border-white/20"
                      />
                      <div>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => handleStageImage(i, e)}
                          className="hidden"
                          id={`edit-stage-image-${i}`}
                        />
                        {stage.imagePreview ? (
                          <div className="relative h-24 w-full">
                            <Image
                              src={stage.imagePreview}
                              alt={`Stage ${i + 1}`}
                              fill
                              unoptimized
                              className="rounded-lg border border-white/10 object-cover"
                            />
                            <button
                              type="button"
                              onClick={() => {
                                updateStage(i, "image", null);
                                updateStage(i, "imagePreview", null);
                              }}
                              className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded bg-black/60 text-white transition-colors hover:bg-red-500"
                            >
                              <X size={12} />
                            </button>
                          </div>
                        ) : (
                          <label
                            htmlFor={`edit-stage-image-${i}`}
                            className="flex cursor-pointer items-center gap-2 rounded-lg border border-dashed border-white/10 px-3 py-2 text-sm text-gray-500 transition-all hover:border-primary/30 hover:text-primary"
                          >
                            <ImagePlus size={14} />
                            Upload stage image
                          </label>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column — Sidebar */}
            <div className="space-y-6">
              {/* Publish Settings */}
              <div className="sticky top-8 space-y-5 rounded-2xl border border-white/5 bg-[#111111] p-6">
                <h2 className="text-sm font-bold uppercase tracking-widest text-gray-300">
                  Publish Settings
                </h2>

                {/* Status */}
                <fieldset className="space-y-2 border-0 p-0">
                  <legend className="text-sm font-medium text-gray-300">
                    Status
                  </legend>
                  <div className="flex gap-2">
                    {STATUSES.map((status) => (
                      <button
                        key={status}
                        type="button"
                        onClick={() => handleChange("status", status)}
                        className={`flex-1 rounded-lg border py-2 text-xs font-bold uppercase tracking-wider transition-all ${
                          form.status === status
                            ? status === "PUBLISHED"
                              ? "border-emerald-500/40 bg-emerald-500/20 text-emerald-400"
                              : "border-amber-500/40 bg-amber-500/20 text-amber-400"
                            : "border-white/10 bg-white/5 text-gray-400 hover:bg-white/10"
                        }`}
                      >
                        {status}
                      </button>
                    ))}
                  </div>
                </fieldset>

                {/* Category */}
                <div className="space-y-2">
                  <label
                    htmlFor="admin-blog-edit-category"
                    className="text-sm font-medium text-gray-300"
                  >
                    Category
                  </label>
                  <select
                    id="admin-blog-edit-category"
                    value={form.category}
                    onChange={(e) => handleChange("category", e.target.value)}
                    className="block w-full cursor-pointer appearance-none rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white outline-none transition-all focus:border-white/20 focus:ring-1 focus:ring-white/10"
                  >
                    {CATEGORIES.map((cat) => (
                      <option key={cat} value={cat} className="bg-[#1a1a1a]">
                        {cat.replace("_", " ")}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Read Time */}
                <div className="space-y-2">
                  <label
                    htmlFor="admin-blog-edit-read-time"
                    className="text-sm font-medium text-gray-300"
                  >
                    Read Time
                  </label>
                  <input
                    id="admin-blog-edit-read-time"
                    type="text"
                    value={form.readTime}
                    onChange={(e) => handleChange("readTime", e.target.value)}
                    className="block w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white outline-none transition-all placeholder:text-gray-500 focus:border-white/20 focus:ring-1 focus:ring-white/10"
                  />
                </div>

                {/* Featured Toggle */}
                <button
                  type="button"
                  onClick={() => handleChange("isFeatured", !form.isFeatured)}
                  className={`flex w-full items-center justify-between rounded-xl border px-4 py-3 transition-all ${
                    form.isFeatured
                      ? "border-amber-500/30 bg-amber-500/10 text-amber-400"
                      : "border-white/10 bg-white/5 text-gray-400 hover:bg-white/10"
                  }`}
                >
                  <span className="flex items-center gap-2 text-sm font-semibold">
                    <Star
                      size={16}
                      className={form.isFeatured ? "fill-amber-400" : ""}
                    />
                    Featured Post
                  </span>
                  <div
                    className={`relative h-5 w-10 rounded-full transition-colors ${
                      form.isFeatured ? "bg-amber-500" : "bg-white/20"
                    }`}
                  >
                    <div
                      className={`absolute top-0.5 h-4 w-4 rounded-full bg-white shadow-md transition-transform ${
                        form.isFeatured ? "translate-x-5" : "translate-x-0.5"
                      }`}
                    />
                  </div>
                </button>

                {/* Tags */}
                <div className="space-y-2">
                  <label
                    htmlFor="admin-blog-edit-tags"
                    className="text-sm font-medium text-gray-300"
                  >
                    Tags
                  </label>
                  <div className="flex gap-2">
                    <input
                      id="admin-blog-edit-tags"
                      type="text"
                      value={tagInput}
                      onChange={(e) => setTagInput(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault();
                          handleAddTag();
                        }
                      }}
                      placeholder="Add tag..."
                      className="flex-1 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white outline-none transition-all placeholder:text-gray-500 focus:border-white/20"
                    />
                    <button
                      type="button"
                      onClick={handleAddTag}
                      className="rounded-lg border border-primary/20 bg-primary/10 px-3 py-2 text-sm font-bold text-primary transition-all hover:bg-primary/20"
                    >
                      Add
                    </button>
                  </div>
                  {tags.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-2">
                      {tags.map((tag) => (
                        <span
                          key={tag}
                          className="flex items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-gray-300"
                        >
                          {tag}
                          <button
                            type="button"
                            onClick={() => handleRemoveTag(tag)}
                            className="text-gray-500 transition-colors hover:text-red-400"
                          >
                            <X size={12} />
                          </button>
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Author */}
              <div className="space-y-4 rounded-2xl border border-white/5 bg-[#111111] p-6">
                <h2 className="text-sm font-bold uppercase tracking-widest text-gray-300">
                  Author
                </h2>
                <div className="flex items-center gap-4">
                  <input
                    ref={authorAvatarRef}
                    type="file"
                    accept="image/*"
                    onChange={handleAuthorAvatar}
                    className="hidden"
                  />
                  <button
                    type="button"
                    onClick={() => authorAvatarRef.current?.click()}
                    className="flex h-14 w-14 flex-shrink-0 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/5 transition-all hover:border-primary/30"
                  >
                    {authorAvatarPreview ? (
                      <Image
                        src={authorAvatarPreview}
                        alt="Author"
                        width={56}
                        height={56}
                        unoptimized
                        className="object-cover"
                      />
                    ) : (
                      <ImagePlus size={18} className="text-gray-500" />
                    )}
                  </button>
                  <div className="flex-1 space-y-2">
                    <input
                      type="text"
                      value={author.name}
                      onChange={(e) =>
                        setAuthor((prev) => ({
                          ...prev,
                          name: e.target.value,
                        }))
                      }
                      placeholder="Author name"
                      className="block w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white outline-none transition-all placeholder:text-gray-500 focus:border-white/20"
                    />
                    <input
                      type="text"
                      value={author.designation}
                      onChange={(e) =>
                        setAuthor((prev) => ({
                          ...prev,
                          designation: e.target.value,
                        }))
                      }
                      placeholder="Designation"
                      className="block w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white outline-none transition-all placeholder:text-gray-500 focus:border-white/20"
                    />
                  </div>
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-black shadow-[0_0_30px_rgba(255,255,255,0.15)] transition-all duration-300 hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Saving...
                  </>
                ) : (
                  <>
                    <Save size={18} />
                    Save Changes
                  </>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }

  // ===== VIEW MODE =====
  return (
    <div className="animate-fade-in space-y-6 pb-8">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/5 pb-4">
        <div className="flex items-center gap-4">
          <Link href="/admin/blogs">
            <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-400 transition-all hover:border-white/20 hover:text-white">
              <ArrowLeft size={18} />
            </button>
          </Link>
          <div>
            <h1 className="text-2xl font-extrabold tracking-tight text-white">
              Blog Post Detail
            </h1>
            <p className="text-sm font-medium text-gray-400">
              View and manage this blog post
            </p>
          </div>
        </div>
        <Link href={`/admin/blogs/${id}?mode=edit`}>
          <button className="flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-xs font-bold text-black shadow-[0_0_20px_rgba(255,255,255,0.15)] transition-all duration-300 hover:bg-gray-200">
            <PencilLine size={16} />
            Edit Post
          </button>
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Main Content */}
        <div className="space-y-6 lg:col-span-2">
          {/* Cover Image */}
          {blog.coverImage && (
            <div className="relative h-64 w-full overflow-hidden rounded-2xl border border-white/10">
              <Image
                src={blog.coverImage}
                alt={blog.title}
                fill
                unoptimized
                className="object-cover"
              />
            </div>
          )}

          {/* Title & Excerpt */}
          <div className="space-y-4 rounded-2xl border border-white/5 bg-[#111111] p-6">
            <div className="flex flex-wrap items-center gap-3">
              <span
                className={`rounded-full border px-3 py-1 text-[11px] font-bold uppercase tracking-wider ${STATUS_COLORS[blog.status] || STATUS_COLORS.DRAFT}`}
              >
                {blog.status || "DRAFT"}
              </span>
              {blog.isFeatured && (
                <span className="flex items-center gap-1 rounded-full border border-amber-500/20 bg-amber-500/10 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-amber-400">
                  <Star size={12} className="fill-amber-400" />
                  Featured
                </span>
              )}
              {blog.category && (
                <span className="rounded-lg border border-primary/20 bg-primary/10 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-primary">
                  {blog.category}
                </span>
              )}
            </div>

            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-white">
              {blog.title}
            </h2>

            {blog.excerpt && (
              <p className="text-base leading-relaxed text-gray-400">
                {blog.excerpt}
              </p>
            )}

            <div className="flex items-center gap-4 border-t border-white/5 pt-2 text-xs text-gray-500">
              <span className="flex items-center gap-1.5">
                <Calendar size={13} />
                {formatDate(blog.createdAt)}
              </span>
              {blog.readTime && (
                <span className="flex items-center gap-1.5">
                  <Clock size={13} />
                  {blog.readTime}
                </span>
              )}
              {blog.slug && (
                <span className="font-mono text-gray-500">/{blog.slug}</span>
              )}
            </div>
          </div>

          {/* Content */}
          <div className="space-y-3 rounded-2xl border border-white/5 bg-[#111111] p-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-300">
              Content
            </h3>
            <div className="prose prose-invert max-w-none whitespace-pre-wrap text-sm leading-relaxed text-gray-300">
              {blog.content}
            </div>
          </div>

          {/* Stages */}
          {blog.stages && blog.stages.length > 0 && (
            <div className="space-y-4 rounded-2xl border border-white/5 bg-[#111111] p-6">
              <h3 className="text-sm font-bold uppercase tracking-widest text-gray-300">
                Stages ({blog.stages.length})
              </h3>
              <div className="space-y-4">
                {blog.stages
                  .sort((a, b) => a.order - b.order)
                  .map((stage, i) => (
                    <div
                      key={i}
                      className="space-y-2 rounded-xl border border-white/5 bg-white/[0.03] p-4"
                    >
                      <div className="flex items-center gap-2">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                          {stage.order}
                        </span>
                        <h4 className="text-sm font-semibold text-white">
                          {stage.title}
                        </h4>
                      </div>
                      <p className="text-sm leading-relaxed text-gray-400">
                        {stage.content}
                      </p>
                      {stage.image && (
                        <div className="relative mt-2 h-32 w-full">
                          <Image
                            src={stage.image}
                            alt={stage.title}
                            fill
                            unoptimized
                            className="rounded-lg border border-white/10 object-cover"
                          />
                        </div>
                      )}
                    </div>
                  ))}
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Author Card */}
          {blog.author && (
            <div className="space-y-4 rounded-2xl border border-white/5 bg-[#111111] p-6">
              <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-gray-300">
                <User size={14} className="text-primary" />
                Author
              </h3>
              <div className="flex items-center gap-4">
                {blog.author.avatar ? (
                  <Image
                    src={blog.author.avatar}
                    alt={blog.author.name}
                    width={48}
                    height={48}
                    unoptimized
                    className="rounded-full border border-white/10 object-cover"
                  />
                ) : (
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/20 bg-gradient-to-br from-primary/20 to-emerald-500/5 text-sm font-bold text-primary">
                    {blog.author.name
                      ?.split(" ")
                      .map((n) => n[0])
                      .join("")
                      .toUpperCase()
                      .slice(0, 2)}
                  </div>
                )}
                <div>
                  <p className="text-sm font-bold text-white">
                    {blog.author.name}
                  </p>
                  {blog.author.designation && (
                    <p className="text-xs text-gray-400">
                      {blog.author.designation}
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Tags */}
          {blog.tags && blog.tags.length > 0 && (
            <div className="space-y-3 rounded-2xl border border-white/5 bg-[#111111] p-6">
              <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-gray-300">
                <Tag size={14} className="text-primary" />
                Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {blog.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Quick Info */}
          <div className="space-y-3 rounded-2xl border border-white/5 bg-[#111111] p-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-300">
              Quick Info
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between border-b border-white/5 py-2">
                <span className="text-gray-400">ID</span>
                <span className="max-w-[180px] truncate font-mono text-xs text-white">
                  {blog.id}
                </span>
              </div>
              <div className="flex items-center justify-between border-b border-white/5 py-2">
                <span className="text-gray-400">Created</span>
                <span className="text-xs text-white">
                  {formatDate(blog.createdAt)}
                </span>
              </div>
              {blog.updatedAt && (
                <div className="flex items-center justify-between border-b border-white/5 py-2">
                  <span className="text-gray-400">Updated</span>
                  <span className="text-xs text-white">
                    {formatDate(blog.updatedAt)}
                  </span>
                </div>
              )}
              {blog.viewCount !== undefined && (
                <div className="flex items-center justify-between py-2">
                  <span className="text-gray-400">Views</span>
                  <span className="font-bold text-white">{blog.viewCount}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
