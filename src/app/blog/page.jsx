// @ts-nocheck
import { BlogListingClient } from "@/components/blog/BlogListingClient";
import { BlogPageHeader } from "@/components/blog/BlogPageHeader";
import { BlogSkeleton } from "@/components/skeletons/BlogSkeleton";
import { BLOG_POSTS, CATEGORIES } from "@/lib/blog-data";
import { fetchInternalBlogList } from "@/lib/blog-server";
import { fetchHashnodePosts } from "@/lib/hashnode";
import { generateBreadcrumbSchema, generateRouteMetadata } from "@/lib/seo";
import { isEnglish } from "@/lib/utils/language";
import { Suspense } from "react";

const POSTS_PER_PAGE = 6;

export const metadata = {
  ...generateRouteMetadata("blog"),
};

// Revalidate the page every 5 minutes so new posts appear without a full redeploy
export const revalidate = 300;

export default async function BlogListingPage({ searchParams }) {
  const { category, q, page } = await searchParams;

  const selectedCategory = category || "All";
  const searchTerm = q || "";
  const currentPage = Math.max(1, parseInt(page, 10) || 1);

  // ── Fetch all post sources in parallel ──────────────────────────────────
  const [internalPosts, hashnodePosts] = await Promise.all([
    fetchInternalBlogList(),
    fetchHashnodePosts(15),
  ]);

  // ── Merge & deduplicate by id ────────────────────────────────────────────
  const seenIds = new Set();
  const allPosts = [];

  for (const post of [...internalPosts, ...BLOG_POSTS, ...hashnodePosts]) {
    if (!seenIds.has(post.id)) {
      seenIds.add(post.id);
      allPosts.push(post);
    }
  }

  // Sort newest first (publishedAt is a ms timestamp; fall back to date string)
  allPosts.sort((a, b) => {
    const ta =
      a.publishedAt ?? new Date(a.date === "Recently" ? 0 : a.date).getTime();
    const tb =
      b.publishedAt ?? new Date(b.date === "Recently" ? 0 : b.date).getTime();
    return tb - ta;
  });

  // ── Build category list ──────────────────────────────────────────────────
  const categorySet = new Set(CATEGORIES);
  for (const post of allPosts) {
    if (post.category) categorySet.add(post.category);
  }
  const allCategories = Array.from(categorySet);

  // ── Filter ───────────────────────────────────────────────────────────────
  const normalize = (s) => (s ?? "").toLowerCase().trim();

  /**
   * Returns true only if the image is hosted on a known, trusted CDN.
   * Rejects unknown domains even if the URL ends in a valid image extension.
   */
  function isValidImageUrl(url) {
    if (!url) return false;
    try {
      const { hostname } = new URL(url);
      const trustedDomains = [
        "cdn.hashnode.com",
        "res.cloudinary.com",
        "images.unsplash.com",
        "miro.medium.com",
        "substackcdn.com",
        "dev-to-uploads.s3.amazonaws.com",
        "media.dev.to",
        "s3.amazonaws.com",
        "storage.googleapis.com",
        "raw.githubusercontent.com",
        "user-images.githubusercontent.com",
        "imgur.com",
        "i.imgur.com",
      ];
      return trustedDomains.some(
        (d) => hostname === d || hostname.endsWith(`.${d}`)
      );
    } catch {
      return false;
    }
  }

  const filteredPosts = allPosts.filter((post) => {
    // Must have a valid, loadable image URL
    if (!isValidImageUrl(post.image)) return false;

    // Must be in English (check title + excerpt)
    if (!isEnglish(`${post.title} ${post.excerpt}`)) return false;

    const matchesCategory =
      selectedCategory === "All" ||
      normalize(post.category) === normalize(selectedCategory);
    const matchesSearch =
      !searchTerm ||
      normalize(post.title).includes(normalize(searchTerm)) ||
      normalize(post.excerpt).includes(normalize(searchTerm));
    return matchesCategory && matchesSearch;
  });

  // ── Featured post (first page, no filters) ───────────────────────────────
  const showFeatured =
    selectedCategory === "All" && !searchTerm && currentPage === 1;
  const featuredPost = showFeatured
    ? (filteredPosts.find((p) => p.featured) ?? filteredPosts[0] ?? null)
    : null;

  const listPosts = featuredPost
    ? filteredPosts.filter((p) => p.id !== featuredPost.id)
    : filteredPosts;

  // ── Pagination ───────────────────────────────────────────────────────────
  const totalPages = Math.max(1, Math.ceil(listPosts.length / POSTS_PER_PAGE));
  const safePage = Math.min(currentPage, totalPages);
  const paginatedPosts = listPosts.slice(
    (safePage - 1) * POSTS_PER_PAGE,
    safePage * POSTS_PER_PAGE
  );
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main
        className="min-h-screen bg-background pb-32"
        role="main"
        id="blog-content"
      >
        <BlogPageHeader />

        <div className="container relative z-10 mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
          <Suspense fallback={<BlogSkeleton />}>
            <BlogListingClient
              allCategories={allCategories}
              selectedCategory={selectedCategory}
              searchTerm={searchTerm}
              currentPage={safePage}
              totalPages={totalPages}
              totalFilteredCount={filteredPosts.length}
              featuredPost={featuredPost}
              paginatedPosts={paginatedPosts}
            />
          </Suspense>
        </div>
      </main>
    </>
  );
}
