import { BlogDetailContent } from "@/components/blog/BlogDetailContent";
import { BLOG_POSTS } from "@/lib/blog-data";
import { blogService } from "@/services/blogService";
import { notFound } from "next/navigation";

async function getPostBySlug(slug) {
    // 1. Check static posts
    let post = BLOG_POSTS.find((p) => p.slug === slug);
    if (post) return post;

    // 2. Fetch from API
    try {
        const response = await blogService.list({ limit: 100 });
        // Handle nested structure: response.result.data.blogs
        const apiPosts = response?.result?.data?.blogs || response?.result?.blogs || response?.blogs || [];
        const apiPost = apiPosts.find((p) => p.slug === slug);

        if (apiPost) {
            return {
                id: apiPost.id,
                slug: apiPost.slug,
                title: apiPost.title,
                excerpt: apiPost.excerpt,
                content: apiPost.content,
                category: apiPost.category
                    ? apiPost.category.charAt(0).toUpperCase() + apiPost.category.slice(1).toLowerCase()
                    : "General",
                author: {
                    name: apiPost.author?.name || "Groot Team",
                    role: apiPost.author?.designation || "Contributor",
                    avatar: apiPost.author?.avatar,
                },
                date: apiPost.createdAt?._seconds
                    ? new Date(apiPost.createdAt._seconds * 1000).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
                    : "Recently",
                readTime: apiPost.readTime || "5 min read",
                image: apiPost.coverImage,
                featured: apiPost.isFeatured || false,
            };
        }
    } catch (error) {
        console.error("Failed to fetch post by slug:", error);
    }

    return null;
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const post = await getPostBySlug(slug);
    if (!post) return { title: "Post Not Found" };

    return {
        title: post.title,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            images: post.image ? [{ url: post.image, width: 1200, height: 630 }] : [],
            type: "article",
            publishedTime: post.date,
            authors: [post.author.name],
        },
    };
}

export default async function BlogDetailPage({ params }) {
    const { slug } = await params;
    const post = await getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    const relatedPosts = BLOG_POSTS.filter(
        (p) => p.category === post.category && p.id !== post.id
    ).slice(0, 3);

    return <BlogDetailContent post={post} relatedPosts={relatedPosts} />;
}
