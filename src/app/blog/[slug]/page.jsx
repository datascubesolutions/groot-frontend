"use client";

import { RelatedPosts } from "@/components/blog/RelatedPosts";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { BLOG_POSTS } from "@/lib/blog-data";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, FacebookIcon, LinkedinIcon, TwitterIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function BlogDetailPage({ params }) {
    const post = BLOG_POSTS.find((p) => p.slug === params.slug);

    if (!post) {
        notFound();
    }

    // Find related posts (same category, exclude current)
    const relatedPosts = BLOG_POSTS.filter(
        (p) => p.category === post.category && p.id !== post.id
    ).slice(0, 3);

    return (
        <article className="min-h-screen bg-muted/25 pb-20 pt-20 relative overflow-x-hidden">
            {/* Ambient background - theme tokens */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[500px] bg-primary/10 rounded-full blur-[100px] opacity-60" />
                <div className="absolute top-[10%] right-[-10%] w-[40%] h-[500px] bg-secondary/10 rounded-full blur-[80px] opacity-60" />
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03]" />
            </div>

            <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-4xl">
                {/* Back Button */}
                <div className="mb-8 md:mb-10">
                    <Link
                        href="/blog"
                        className="group inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                    >
                        <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center transition-colors group-hover:bg-primary/20">
                            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                        </div>
                        Back to Articles
                    </Link>
                </div>

                {/* Header */}
                <div className="space-y-6 md:space-y-8 text-center max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Badge variant="outline" className="border-primary/30 text-primary mb-5 px-3 py-1 text-sm font-semibold tracking-wide uppercase bg-primary/5">
                            {post.category}
                        </Badge>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-foreground leading-[1.15] mb-6">
                            {post.title}
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="flex items-center justify-center gap-6 md:gap-8 text-sm text-muted-foreground border-y border-border py-5 md:py-6"
                    >
                        <div className="flex items-center gap-3">
                            <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary to-secondary p-[2px]">
                                <div className="h-full w-full rounded-full bg-card overflow-hidden relative flex items-center justify-center">
                                    {post.author.avatar ? (
                                        <Image
                                            src={post.author.avatar}
                                            alt={post.author.name}
                                            fill
                                            className="object-cover"
                                        />
                                    ) : (
                                        <span className="font-bold text-foreground text-lg">{post.author.name.charAt(0)}</span>
                                    )}
                                </div>
                            </div>
                            <div className="text-left">
                                <p className="font-bold text-foreground text-base">{post.author.name}</p>
                                <p className="text-xs opacity-80">{post.author.role}</p>
                            </div>
                        </div>

                        <div className="hidden sm:block h-8 w-px bg-border" />

                        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
                            <div className="flex items-center gap-2">
                                <Calendar className="h-4 w-4 text-primary" />
                                <span className="font-medium">{post.date}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="h-4 w-4 text-primary" />
                                <span className="font-medium">{post.readTime}</span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Featured Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="relative aspect-[21/9] w-full my-12 md:my-16 overflow-hidden rounded-2xl shadow-lg border border-border"
                >
                    <div className="absolute inset-0 bg-muted" />
                    <Image
                        src={post.image || "/images/placeholder.jpg"}
                        alt={post.title}
                        fill
                        className="object-cover brightness-[0.93] contrast-[1.08]"
                        priority
                    />
                    {/* Tames overexposure on bright images */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/30" />
                </motion.div>

                {/* Content Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
                    {/* Sticky Share - Desktop */}
                    <div className="hidden lg:block lg:col-span-1">
                        <div className="sticky top-28 flex flex-col gap-3">
                            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider writing-vertical-lr mb-2 rotate-180">Share</p>
                            <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 hover:text-primary transition-colors">
                                <TwitterIcon className="h-5 w-5" />
                            </Button>
                            <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 hover:text-primary transition-colors">
                                <LinkedinIcon className="h-5 w-5" />
                            </Button>
                            <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 hover:text-primary transition-colors">
                                <FacebookIcon className="h-5 w-5" />
                            </Button>
                            <div className="w-px h-16 bg-border mx-auto mt-2" />
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-10 lg:col-start-2">
                        <div className="prose prose-lg md:prose-xl max-w-none
                    prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-foreground
                    prose-p:text-muted-foreground prose-p:leading-relaxed
                    prose-a:text-primary prose-a:no-underline hover:prose-a:underline hover:prose-a:text-accent transition-colors
                    prose-strong:text-foreground prose-strong:font-semibold
                    prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:bg-muted/50 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:not-italic prose-blockquote:font-medium prose-blockquote:text-foreground/90
                    prose-img:rounded-2xl prose-img:shadow-lg prose-img:border prose-img:border-border
                    prose-code:text-primary prose-code:bg-primary/10 prose-code:rounded-md prose-code:px-1.5 prose-code:py-0.5 prose-code:font-mono prose-code:text-sm
                    prose-li:marker:text-primary
                ">
                            <div dangerouslySetInnerHTML={{ __html: post.content }} />
                        </div>

                        {/* Mobile Share */}
                        <div className="mt-10 lg:hidden flex items-center justify-between border-t border-border pt-6">
                            <p className="font-bold text-foreground">Share this article</p>
                            <div className="flex gap-2">
                                <Button variant="outline" size="icon" className="rounded-full border-border hover:bg-primary/10 hover:text-primary"><TwitterIcon className="h-4 w-4" /></Button>
                                <Button variant="outline" size="icon" className="rounded-full border-border hover:bg-primary/10 hover:text-primary"><LinkedinIcon className="h-4 w-4" /></Button>
                                <Button variant="outline" size="icon" className="rounded-full border-border hover:bg-primary/10 hover:text-primary"><FacebookIcon className="h-4 w-4" /></Button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Related Posts */}
                <div className="mt-14 md:mt-16">
                    <RelatedPosts posts={relatedPosts} />
                </div>
            </div>
        </article>
    );
}
