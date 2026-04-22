// @ts-nocheck
"use client";

import MarkdownEditor from "@/components/admin/MarkdownEditor";
import { blogService } from "@/services/blogService";
import {
  ArrowLeft,
  FileText,
  ImagePlus,
  Loader2,
  Plus,
  Save,
  Star,
  Trash2,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useRef, useState } from "react";
import { toast } from "sonner";

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

export default function CreateBlogPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const coverImageRef = useRef(null);
  const authorAvatarRef = useRef(null);

  // Form state
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

  // Tags
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");

  // Author
  const [author, setAuthor] = useState({
    name: "",
    designation: "",
  });

  // Files
  const [coverImage, setCoverImage] = useState(null);
  const [coverPreview, setCoverPreview] = useState(null);
  const [authorAvatar, setAuthorAvatar] = useState(null);
  const [authorAvatarPreview, setAuthorAvatarPreview] = useState(null);

  // Stages
  const [stages, setStages] = useState([]);

  const handleChange = useCallback((field, value) => {
    setForm((prev) => {
      const updated = { ...prev, [field]: value };
      if (field === "title") {
        updated.slug = slugify(value);
      }
      return updated;
    });
  }, []);

  const handleAddTag = () => {
    const tag = tagInput.trim().toLowerCase();
    if (tag && !tags.includes(tag)) {
      setTags((prev) => [...prev, tag]);
    }
    setTagInput("");
  };

  const handleRemoveTag = (tagToRemove) => {
    setTags((prev) => prev.filter((t) => t !== tagToRemove));
  };

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

    if (!form.title.trim()) {
      toast.error("Please enter a title");
      return;
    }
    if (!form.content.trim()) {
      toast.error("Please enter content");
      return;
    }

    setIsSubmitting(true);
    const toastId = toast.loading("Creating blog post...");

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

      // Tags
      tags.forEach((tag, i) => {
        formData.append(`tags[${i}]`, tag);
      });

      // Author
      formData.append("author.name", author.name);
      formData.append("author.designation", author.designation);
      if (authorAvatar) {
        formData.append("author.avatar", authorAvatar);
      }

      // Cover Image
      if (coverImage) {
        formData.append("coverImage", coverImage);
      }

      // Stages
      stages.forEach((stage, i) => {
        formData.append(`stages[${i}].title`, stage.title);
        formData.append(`stages[${i}].content`, stage.content);
        formData.append(`stages[${i}].order`, stage.order);
        if (stage.image) {
          formData.append(`stages[${i}].image`, stage.image);
        }
      });

      await blogService.create(formData);

      toast.success("Blog post created successfully!", { id: toastId });
      setTimeout(() => router.push("/admin/blogs"), 500);
    } catch (err) {
      console.error("Create blog error:", err);
      toast.error(err?.message || "Failed to create blog post", {
        id: toastId,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
              Create Blog Post
            </h1>
            <p className="text-sm font-medium text-gray-400">
              Write and publish a new article
            </p>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Main Content Grid */}
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
                    htmlFor="admin-blog-new-title"
                    className="text-sm font-medium text-gray-300"
                  >
                    Title <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="admin-blog-new-title"
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
                    htmlFor="admin-blog-new-slug"
                    className="text-sm font-medium text-gray-300"
                  >
                    Slug
                  </label>
                  <input
                    id="admin-blog-new-slug"
                    type="text"
                    value={form.slug}
                    onChange={(e) => handleChange("slug", e.target.value)}
                    placeholder="auto-generated-from-title"
                    className="block w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 font-mono text-sm text-gray-400 outline-none transition-all placeholder:text-gray-600 focus:border-white/20 focus:ring-1 focus:ring-white/10"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="admin-blog-new-excerpt"
                    className="text-sm font-medium text-gray-300"
                  >
                    Excerpt
                  </label>
                  <textarea
                    id="admin-blog-new-excerpt"
                    value={form.excerpt}
                    onChange={(e) => handleChange("excerpt", e.target.value)}
                    placeholder="A brief summary of the post..."
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
                placeholder="Write your blog content in Markdown..."
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
                <div className="group relative">
                  <Image
                    src={coverPreview}
                    alt="Cover preview"
                    width={800}
                    height={400}
                    className="h-48 w-full rounded-xl border border-white/10 object-cover"
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
                  No stages added yet. Stages are optional sections of your blog
                  post.
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
                      onChange={(e) => updateStage(i, "title", e.target.value)}
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
                        id={`stage-image-${i}`}
                      />
                      {stage.imagePreview ? (
                        <div className="relative">
                          <Image
                            src={stage.imagePreview}
                            alt={`Stage ${i + 1}`}
                            width={400}
                            height={200}
                            className="h-24 w-full rounded-lg border border-white/10 object-cover"
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
                          htmlFor={`stage-image-${i}`}
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
                  htmlFor="admin-blog-new-category"
                  className="text-sm font-medium text-gray-300"
                >
                  Category
                </label>
                <select
                  id="admin-blog-new-category"
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
                  htmlFor="admin-blog-new-read-time"
                  className="text-sm font-medium text-gray-300"
                >
                  Read Time
                </label>
                <input
                  id="admin-blog-new-read-time"
                  type="text"
                  value={form.readTime}
                  onChange={(e) => handleChange("readTime", e.target.value)}
                  placeholder="5 min read"
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
                  htmlFor="admin-blog-new-tags"
                  className="text-sm font-medium text-gray-300"
                >
                  Tags
                </label>
                <div className="flex gap-2">
                  <input
                    id="admin-blog-new-tags"
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

              {/* Avatar */}
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
                      setAuthor((prev) => ({ ...prev, name: e.target.value }))
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
                  Creating...
                </>
              ) : (
                <>
                  <Save size={18} />
                  Create Post
                </>
              )}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
