import { BlogDetailContent } from "@/components/blog/BlogDetailContent";
import { BLOG_POSTS } from "@/lib/blog-data";

export async function generateMetadata({ params }) {
    const { slug } = await params;
    // Try to find in static data first
    const post = BLOG_POSTS.find((p) => p.slug === slug);

    if (post) {
        return {
            title: post.title,
            description: post.excerpt,
        };
    }

    // Fallback metadata for dynamic posts (to avoid blocking server fetch)
    const title = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

    return {
        title: `${title} | Groot Analytics`,
        description: "Read our latest article on Groot Analytics.",
    };
}

export default async function BlogDetailPage({ params, searchParams }) {
    const { slug } = await params;
    const { id: blogId } = await searchParams || {};

    // Pass blogId if available (from listing page click) to skip redundant list call
    return <BlogDetailContent slug={slug} blogId={blogId || null} post={null} relatedPosts={null} />;
}
