# Dev.to Integration — Implementation Plan (Blog)

Production-safe, server-side Dev.to integration with source-aware routing and deterministic behavior.

---

## 1. Overview

- **Internal posts** → `/blog/[slug]` (no query params)
- **Dev.to posts** → `/blog/devto/[slug]` (slug format: `{id}--{article-slug}`)
- **Dev.to fetching** is server-side only; Next.js `fetch` caching with `revalidate: 1800`
- **Category mapping** is centralized in `src/lib/mappers/devto.js`
- **Slug collision** avoided by prefixing Dev.to slugs as `devto-${article.slug}` in merged data; detail URL uses `{id}--{slug}` for resolution

---

## 2. Routing

| Source   | URL pattern           | Example                    |
|----------|------------------------|----------------------------|
| Internal | `/blog/[slug]`         | `/blog/future-of-ai-analytics-2024` |
| Dev.to   | `/blog/devto/[slug]`   | `/blog/devto/12345--my-article`     |

- **No** `?id=` or `?source=devto`; routing is fully path-based.
- Dev.to detail page derives numeric id from the first segment before `--` in `[slug]`.

---

## 3. Server-side Dev.to API

**File:** `src/lib/devto.js`

- `fetchDevtoArticles(tag, perPage = 5)` — list by tag, returns `[]` on failure.
- `fetchDevtoArticleById(id)` — single article by numeric id, returns `null` on failure.
- Both use `fetch(..., { next: { revalidate: 1800 } })`.

---

## 4. Centralized mapper

**File:** `src/lib/mappers/devto.js`

- **`DEVTO_TAG_TO_CATEGORY`** — single source for tag → category.
- **`mapDevtoArticleToListPost(article)`** — list view:
  - Slug: `devto-${article.slug}` (collision-safe).
  - `devtoUrlSlug`: `{id}--{article.slug}` for detail links.
  - Defensive fallbacks: `image`, `readTime`, `author.avatar`, dates, etc.
  - Includes `source: "devto"`, `devtoUrl`, `reactionsCount`, `commentsCount`.
- **`mapDevtoArticleToDetailPost(article)`** — detail view (adds `content` from `body_html`).

---

## 5. Blog listing (server component)

**File:** `src/app/blog/page.jsx`

1. **Parallel fetch (server):**
   - `fetchInternalBlogList()`
   - Static `BLOG_POSTS` (normalized with `normalizeStaticPost`)
   - `fetchDevtoArticles("dataengineering", 5)` then `mapDevtoArticleToListPost`, filter out “tutorial” titles
2. **Merge** → **sort by `publishedAt` DESC** → **filter** by `searchParams.category` and `searchParams.q` → **paginate** (6 per page).
3. **Render** `BlogListingClient` with:
   - `allCategories`, `selectedCategory`, `searchTerm`, `currentPage`, `totalPages`, `totalFilteredCount`, `featuredPost`, `paginatedPosts`.

Filters and pagination are URL-driven (`?category=&q=&page=`); no client-side fetch, so counts and list are deterministic and stable.

---

## 6. Blog listing client

**File:** `src/components/blog/BlogListingClient.jsx`

- Receives server-computed state; **no client-side fetching**.
- **BlogControls**: category/search updates trigger `router.push` (search debounced).
- Pagination uses same URL params → server re-renders with new page.
- Avoids hydration mismatch and layout shift.

---

## 7. Dev.to detail page

**File:** `src/app/blog/devto/[slug]/page.jsx`

- Parse id: `slug.split('--')[0]`.
- `fetchDevtoArticleById(id)` (cached).
- `mapDevtoArticleToDetailPost(article)`.
- **Sanitize:** `DOMPurify.sanitize(post.content)` (isomorphic-dompurify).
- Render `<DevtoArticleView post={postWithSanitizedContent} />` (uses shared `BlogDetailView`).

---

## 8. Internal blog detail

**File:** `src/app/blog/[slug]/page.jsx`

- Resolve post on **server**: static `BLOG_POSTS` by slug, else `fetchInternalBlogList()` → find by slug → `fetchInternalBlogById(id)`.
- Markdown content parsed with `marked` for API posts.
- Pass `post` and `relatedPosts` to `<BlogDetailContent post={post} relatedPosts={relatedPosts} />`.
- **No** query params; **no** client-side resolution.

**File:** `src/components/blog/BlogDetailContent.jsx`

- Accepts only `post` and `relatedPosts` (data resolved upstream).
- Renders `BlogDetailView` or “Post not found”; no fetch/useEffect for resolution.

---

## 9. Cards and links

- **BlogCard** / **FeaturedPost**:
  - `post.source === "devto"` → `href={/blog/devto/${post.devtoUrlSlug}}`
  - Else → `href={/blog/${post.slug}}`
- Dev.to badge shown when `post.source === "devto"`.

---

## 10. Error handling

- Dev.to API failure → listing still shows internal + static posts (`[]` from `fetchDevtoArticles`).
- Dev.to detail fetch failure → “Post not found” + Back to Blog.
- Internal API failure → `fetchInternalBlogList` / `fetchInternalBlogById` return `[]` / `null`; no throw.

---

## 11. File summary

| File | Role |
|------|------|
| `src/lib/devto.js` | Server-only Dev.to fetch with caching |
| `src/lib/mappers/devto.js` | Tag→category map + defensive list/detail mappers |
| `src/lib/blog-server.js` | Server-only internal list/get + normalizers |
| `src/app/blog/page.jsx` | Async server listing: fetch, merge, sort, filter, paginate |
| `src/app/blog/[slug]/page.jsx` | Internal detail: server resolve, then BlogDetailContent |
| `src/app/blog/devto/[slug]/page.jsx` | Dev.to detail: fetch by id, sanitize, DevtoArticleView |
| `src/components/blog/BlogListingClient.jsx` | Client: controls + grid from server state, URL-driven |
| `src/components/blog/BlogCard.jsx` | Source-aware href + Dev.to badge |
| `src/components/blog/FeaturedPost.jsx` | Source-aware href + Dev.to label |
| `src/components/blog/DevtoArticleView.jsx` | Client wrapper for Dev.to detail (BlogDetailView) |
| `src/components/blog/BlogDetailContent.jsx` | Internal only; presentational with post + relatedPosts |

---

## 12. Stability and UX

- **No client-side Dev.to fetch** — all Dev.to data from server.
- **Stable sort** — by `publishedAt` after merge.
- **Deterministic pagination** — same searchParams ⇒ same page and count.
- **No hydration mismatch** — list and detail content come from server.
- **Slug collision** — Dev.to slugs prefixed in merged list; detail URL uses `id--slug` for unambiguous id extraction.
