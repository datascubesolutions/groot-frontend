"use client";

import MarkdownEditor from "@/components/admin/MarkdownEditor";
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
            isFeatured: blogData.isFeatured || false,
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
      prev
        .filter((_, i) => i !== index)
        .map((s, i) => ({ ...s, order: i + 1 }))
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

      const token = localStorage.getItem("authToken") || "";
      await blogService.create(formData, token);

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
    const date = dateValue._seconds
      ? new Date(dateValue._seconds * 1000)
      : new Date(dateValue);
    return date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  // ===== LOADING STATE =====
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <p className="text-gray-400 text-sm font-medium">
            Loading blog post...
          </p>
        </div>
      </div>
    );
  }

  // ===== NOT FOUND STATE =====
  if (!blog) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] gap-4">
        <div className="h-16 w-16 rounded-full bg-white/5 flex items-center justify-center text-gray-500">
          <FileText size={28} />
        </div>
        <h3 className="text-xl font-bold text-white">Blog post not found</h3>
        <p className="text-gray-400 text-sm">
          The post you&apos;re looking for doesn&apos;t exist or has been
          removed.
        </p>
        <Link href="/admin/blogs">
          <button className="px-5 py-2 bg-white text-black text-xs font-bold rounded-xl hover:bg-gray-200 transition-all">
            ← Back to Blogs
          </button>
        </Link>
      </div>
    );
  }

  // ===== EDIT MODE =====
  if (isEditMode) {
    return (
      <div className="space-y-6 animate-fade-in pb-8">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/5">
          <div className="flex items-center gap-4">
            <Link href={`/admin/blogs/${id}`}>
              <button className="h-10 w-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-white/20 transition-all">
                <ArrowLeft size={18} />
              </button>
            </Link>
            <div>
              <h1 className="text-2xl font-extrabold text-white tracking-tight">
                Edit Blog Post
              </h1>
              <p className="text-gray-400 font-medium text-sm">
                Modify and update this article
              </p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column — Main Form */}
            <div className="lg:col-span-2 space-y-6">
              {/* Title & Slug */}
              <div className="bg-[#111111] border border-white/5 rounded-2xl p-6 space-y-5">
                <h2 className="text-sm font-bold text-gray-300 uppercase tracking-widest flex items-center gap-2">
                  <FileText size={16} className="text-primary" />
                  Post Details
                </h2>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">
                      Title <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      value={form.title}
                      onChange={(e) => handleChange("title", e.target.value)}
                      placeholder="Enter an engaging title..."
                      className="block w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all outline-none text-lg font-semibold"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">
                      Slug
                    </label>
                    <input
                      type="text"
                      value={form.slug}
                      onChange={(e) => handleChange("slug", e.target.value)}
                      className="block w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-gray-400 placeholder:text-gray-600 focus:border-white/20 focus:ring-1 focus:ring-white/10 transition-all outline-none text-sm font-mono"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">
                      Excerpt
                    </label>
                    <textarea
                      value={form.excerpt}
                      onChange={(e) => handleChange("excerpt", e.target.value)}
                      placeholder="A brief summary..."
                      rows={3}
                      className="block w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:border-white/20 focus:ring-1 focus:ring-white/10 transition-all outline-none resize-none"
                    />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="bg-[#111111] border border-white/5 rounded-2xl p-6 space-y-4">
                <h2 className="text-sm font-bold text-gray-300 uppercase tracking-widest">
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
              <div className="bg-[#111111] border border-white/5 rounded-2xl p-6 space-y-4">
                <h2 className="text-sm font-bold text-gray-300 uppercase tracking-widest flex items-center gap-2">
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
                  <div className="relative group">
                    <img
                      src={coverPreview}
                      alt="Cover preview"
                      className="w-full h-48 object-cover rounded-xl border border-white/10"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        setCoverImage(null);
                        setCoverPreview(null);
                      }}
                      className="absolute top-3 right-3 h-8 w-8 flex items-center justify-center rounded-lg bg-black/60 text-white hover:bg-red-500 transition-colors"
                    >
                      <X size={16} />
                    </button>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => coverImageRef.current?.click()}
                    className="w-full h-40 flex flex-col items-center justify-center gap-2 border-2 border-dashed border-white/10 rounded-xl hover:border-primary/30 hover:bg-primary/5 transition-all text-gray-400 hover:text-primary"
                  >
                    <ImagePlus size={28} />
                    <span className="text-sm font-medium">
                      Click to upload cover image
                    </span>
                  </button>
                )}
              </div>

              {/* Stages */}
              <div className="bg-[#111111] border border-white/5 rounded-2xl p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-sm font-bold text-gray-300 uppercase tracking-widest">
                    Content Stages
                  </h2>
                  <button
                    type="button"
                    onClick={addStage}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-primary bg-primary/10 border border-primary/20 rounded-lg hover:bg-primary/20 transition-all"
                  >
                    <Plus size={14} />
                    Add Stage
                  </button>
                </div>
                {stages.length === 0 && (
                  <p className="text-sm text-gray-500 text-center py-6">
                    No stages added yet.
                  </p>
                )}
                <div className="space-y-4">
                  {stages.map((stage, i) => (
                    <div
                      key={i}
                      className="bg-white/[0.03] border border-white/5 rounded-xl p-4 space-y-3 relative"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                          Stage {stage.order}
                        </span>
                        <button
                          type="button"
                          onClick={() => removeStage(i)}
                          className="h-7 w-7 flex items-center justify-center rounded-lg text-rose-400 bg-rose-500/10 hover:bg-rose-500/20 transition-all"
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
                        className="block w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-gray-500 text-sm focus:border-white/20 outline-none transition-all"
                      />
                      <textarea
                        value={stage.content}
                        onChange={(e) =>
                          updateStage(i, "content", e.target.value)
                        }
                        placeholder="Stage content..."
                        rows={3}
                        className="block w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-gray-500 text-sm focus:border-white/20 outline-none transition-all resize-none"
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
                          <div className="relative">
                            <img
                              src={stage.imagePreview}
                              alt={`Stage ${i + 1}`}
                              className="w-full h-24 object-cover rounded-lg border border-white/10"
                            />
                            <button
                              type="button"
                              onClick={() => {
                                updateStage(i, "image", null);
                                updateStage(i, "imagePreview", null);
                              }}
                              className="absolute top-2 right-2 h-6 w-6 flex items-center justify-center rounded bg-black/60 text-white hover:bg-red-500 transition-colors"
                            >
                              <X size={12} />
                            </button>
                          </div>
                        ) : (
                          <label
                            htmlFor={`edit-stage-image-${i}`}
                            className="flex items-center gap-2 px-3 py-2 border border-dashed border-white/10 rounded-lg text-gray-500 hover:text-primary hover:border-primary/30 transition-all cursor-pointer text-sm"
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
              <div className="bg-[#111111] border border-white/5 rounded-2xl p-6 space-y-5 sticky top-8">
                <h2 className="text-sm font-bold text-gray-300 uppercase tracking-widest">
                  Publish Settings
                </h2>

                {/* Status */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">
                    Status
                  </label>
                  <div className="flex gap-2">
                    {STATUSES.map((status) => (
                      <button
                        key={status}
                        type="button"
                        onClick={() => handleChange("status", status)}
                        className={`flex-1 py-2 text-xs font-bold uppercase tracking-wider rounded-lg border transition-all ${form.status === status
                          ? status === "PUBLISHED"
                            ? "bg-emerald-500/20 border-emerald-500/40 text-emerald-400"
                            : "bg-amber-500/20 border-amber-500/40 text-amber-400"
                          : "bg-white/5 border-white/10 text-gray-400 hover:bg-white/10"
                          }`}
                      >
                        {status}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Category */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">
                    Category
                  </label>
                  <select
                    value={form.category}
                    onChange={(e) => handleChange("category", e.target.value)}
                    className="block w-full px-3 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white focus:border-white/20 focus:ring-1 focus:ring-white/10 transition-all outline-none appearance-none cursor-pointer text-sm"
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
                  <label className="text-sm font-medium text-gray-300">
                    Read Time
                  </label>
                  <input
                    type="text"
                    value={form.readTime}
                    onChange={(e) => handleChange("readTime", e.target.value)}
                    className="block w-full px-3 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:border-white/20 focus:ring-1 focus:ring-white/10 transition-all outline-none text-sm"
                  />
                </div>

                {/* Featured Toggle */}
                <button
                  type="button"
                  onClick={() =>
                    handleChange("isFeatured", !form.isFeatured)
                  }
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl border transition-all ${form.isFeatured
                    ? "bg-amber-500/10 border-amber-500/30 text-amber-400"
                    : "bg-white/5 border-white/10 text-gray-400 hover:bg-white/10"
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
                    className={`w-10 h-5 rounded-full relative transition-colors ${form.isFeatured ? "bg-amber-500" : "bg-white/20"
                      }`}
                  >
                    <div
                      className={`absolute top-0.5 w-4 h-4 bg-white rounded-full shadow-md transition-transform ${form.isFeatured
                        ? "translate-x-5"
                        : "translate-x-0.5"
                        }`}
                    />
                  </div>
                </button>

                {/* Tags */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">
                    Tags
                  </label>
                  <div className="flex gap-2">
                    <input
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
                      className="flex-1 px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-gray-500 text-sm focus:border-white/20 outline-none transition-all"
                    />
                    <button
                      type="button"
                      onClick={handleAddTag}
                      className="px-3 py-2 bg-primary/10 text-primary text-sm font-bold rounded-lg border border-primary/20 hover:bg-primary/20 transition-all"
                    >
                      Add
                    </button>
                  </div>
                  {tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {tags.map((tag) => (
                        <span
                          key={tag}
                          className="flex items-center gap-1 px-2.5 py-1 bg-white/5 border border-white/10 rounded-lg text-xs font-medium text-gray-300"
                        >
                          {tag}
                          <button
                            type="button"
                            onClick={() => handleRemoveTag(tag)}
                            className="text-gray-500 hover:text-red-400 transition-colors"
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
              <div className="bg-[#111111] border border-white/5 rounded-2xl p-6 space-y-4">
                <h2 className="text-sm font-bold text-gray-300 uppercase tracking-widest">
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
                    className="h-14 w-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden hover:border-primary/30 transition-all flex-shrink-0"
                  >
                    {authorAvatarPreview ? (
                      <img
                        src={authorAvatarPreview}
                        alt="Author"
                        className="h-full w-full object-cover"
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
                      className="block w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-gray-500 text-sm focus:border-white/20 outline-none transition-all"
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
                      className="block w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-gray-500 text-sm focus:border-white/20 outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-black text-sm font-bold rounded-xl hover:bg-gray-200 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.15)] disabled:opacity-50 disabled:cursor-not-allowed"
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
    <div className="space-y-6 animate-fade-in pb-8">
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-white/5">
        <div className="flex items-center gap-4">
          <Link href="/admin/blogs">
            <button className="h-10 w-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-white/20 transition-all">
              <ArrowLeft size={18} />
            </button>
          </Link>
          <div>
            <h1 className="text-2xl font-extrabold text-white tracking-tight">
              Blog Post Detail
            </h1>
            <p className="text-gray-400 font-medium text-sm">
              View and manage this blog post
            </p>
          </div>
        </div>
        <Link href={`/admin/blogs/${id}?mode=edit`}>
          <button className="flex items-center gap-2 px-5 py-2.5 bg-white text-black text-xs font-bold rounded-xl hover:bg-gray-200 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.15)]">
            <PencilLine size={16} />
            Edit Post
          </button>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Cover Image */}
          {blog.coverImage && (
            <div className="rounded-2xl overflow-hidden border border-white/10">
              <img
                src={blog.coverImage}
                alt={blog.title}
                className="w-full h-64 object-cover"
              />
            </div>
          )}

          {/* Title & Excerpt */}
          <div className="bg-[#111111] border border-white/5 rounded-2xl p-6 space-y-4">
            <div className="flex items-center gap-3 flex-wrap">
              <span
                className={`px-3 py-1 rounded-full text-[11px] uppercase tracking-wider font-bold border ${STATUS_COLORS[blog.status] || STATUS_COLORS.DRAFT}`}
              >
                {blog.status || "DRAFT"}
              </span>
              {blog.isFeatured && (
                <span className="flex items-center gap-1 px-2.5 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full text-[11px] uppercase tracking-wider font-bold text-amber-400">
                  <Star size={12} className="fill-amber-400" />
                  Featured
                </span>
              )}
              {blog.category && (
                <span className="px-2.5 py-1 rounded-lg text-[11px] uppercase tracking-wider font-bold bg-primary/10 text-primary border border-primary/20">
                  {blog.category}
                </span>
              )}
            </div>

            <h2 className="text-3xl font-extrabold text-white tracking-tight leading-tight">
              {blog.title}
            </h2>

            {blog.excerpt && (
              <p className="text-gray-400 text-base leading-relaxed">
                {blog.excerpt}
              </p>
            )}

            <div className="flex items-center gap-4 pt-2 border-t border-white/5 text-xs text-gray-500">
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
          <div className="bg-[#111111] border border-white/5 rounded-2xl p-6 space-y-3">
            <h3 className="text-sm font-bold text-gray-300 uppercase tracking-widest">
              Content
            </h3>
            <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed whitespace-pre-wrap text-sm">
              {blog.content}
            </div>
          </div>

          {/* Stages */}
          {blog.stages && blog.stages.length > 0 && (
            <div className="bg-[#111111] border border-white/5 rounded-2xl p-6 space-y-4">
              <h3 className="text-sm font-bold text-gray-300 uppercase tracking-widest">
                Stages ({blog.stages.length})
              </h3>
              <div className="space-y-4">
                {blog.stages
                  .sort((a, b) => a.order - b.order)
                  .map((stage, i) => (
                    <div
                      key={i}
                      className="bg-white/[0.03] border border-white/5 rounded-xl p-4 space-y-2"
                    >
                      <div className="flex items-center gap-2">
                        <span className="h-6 w-6 flex items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-bold">
                          {stage.order}
                        </span>
                        <h4 className="text-white font-semibold text-sm">
                          {stage.title}
                        </h4>
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {stage.content}
                      </p>
                      {stage.image && (
                        <img
                          src={stage.image}
                          alt={stage.title}
                          className="w-full h-32 object-cover rounded-lg border border-white/10 mt-2"
                        />
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
            <div className="bg-[#111111] border border-white/5 rounded-2xl p-6 space-y-4">
              <h3 className="text-sm font-bold text-gray-300 uppercase tracking-widest flex items-center gap-2">
                <User size={14} className="text-primary" />
                Author
              </h3>
              <div className="flex items-center gap-4">
                {blog.author.avatar ? (
                  <img
                    src={blog.author.avatar}
                    alt={blog.author.name}
                    className="h-12 w-12 rounded-full object-cover border border-white/10"
                  />
                ) : (
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary/20 to-emerald-500/5 border border-primary/20 flex items-center justify-center text-sm font-bold text-primary">
                    {blog.author.name
                      ?.split(" ")
                      .map((n) => n[0])
                      .join("")
                      .toUpperCase()
                      .slice(0, 2)}
                  </div>
                )}
                <div>
                  <p className="text-white font-bold text-sm">
                    {blog.author.name}
                  </p>
                  {blog.author.designation && (
                    <p className="text-gray-400 text-xs">
                      {blog.author.designation}
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Tags */}
          {blog.tags && blog.tags.length > 0 && (
            <div className="bg-[#111111] border border-white/5 rounded-2xl p-6 space-y-3">
              <h3 className="text-sm font-bold text-gray-300 uppercase tracking-widest flex items-center gap-2">
                <Tag size={14} className="text-primary" />
                Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {blog.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs font-medium text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Quick Info */}
          <div className="bg-[#111111] border border-white/5 rounded-2xl p-6 space-y-3">
            <h3 className="text-sm font-bold text-gray-300 uppercase tracking-widest">
              Quick Info
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between py-2 border-b border-white/5">
                <span className="text-gray-400">ID</span>
                <span className="text-white font-mono text-xs truncate max-w-[180px]">
                  {blog.id}
                </span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-white/5">
                <span className="text-gray-400">Created</span>
                <span className="text-white text-xs">
                  {formatDate(blog.createdAt)}
                </span>
              </div>
              {blog.updatedAt && (
                <div className="flex items-center justify-between py-2 border-b border-white/5">
                  <span className="text-gray-400">Updated</span>
                  <span className="text-white text-xs">
                    {formatDate(blog.updatedAt)}
                  </span>
                </div>
              )}
              {blog.viewCount !== undefined && (
                <div className="flex items-center justify-between py-2">
                  <span className="text-gray-400">Views</span>
                  <span className="text-white font-bold">
                    {blog.viewCount}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
