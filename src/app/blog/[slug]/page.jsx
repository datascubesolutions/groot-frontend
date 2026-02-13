import { BlogDetailContent } from "@/components/blog/BlogDetailContent";
import { BLOG_POSTS } from "@/lib/blog-data";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const post = BLOG_POSTS.find((p) => p.slug === slug);
    if (!post) return { title: "Post Not Found" };

    return {
        title: post.title,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            images: [{ url: post.image, width: 1200, height: 630 }],
            type: "article",
            publishedTime: post.date,
            authors: [post.author.name],
        },
    };
}

export default async function BlogDetailPage({ params }) {
    const { slug } = await params;
    const post = BLOG_POSTS.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    const relatedPosts = BLOG_POSTS.filter(
        (p) => p.category === post.category && p.id !== post.id
    ).slice(0, 3);

    return <BlogDetailContent post={post} relatedPosts={relatedPosts} />;
}
