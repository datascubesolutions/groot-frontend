// @ts-nocheck
"use client";

import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { sanitizeHtml } from "@/lib/sanitize";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  Bookmark,
  Calendar,
  Check,
  Clock,
  Copy,
  Facebook,
  Hash,
  Linkedin,
  Mail,
  MessageCircle,
  Share2,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { RelatedPosts } from "./RelatedPosts";

/* ================================================================
   Animation Variants
   ================================================================ */
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

/* ================================================================
   Reading Progress Bar
   ================================================================ */
function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const top = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(height > 0 ? (top / height) * 100 : 0);
    };
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div
      className="fixed left-0 right-0 top-[80px] z-[45] h-[3px]"
      style={{ background: "hsl(160 20% 90% / 0.3)" }}
    >
      <motion.div
        className="h-full"
        style={{
          width: `${progress}%`,
          background:
            "linear-gradient(90deg, hsl(168 64% 51%), hsl(142 71% 45%), hsl(161 88% 16%))",
        }}
        transition={{ duration: 0.1 }}
      />
    </div>
  );
}

/* ================================================================
   Table of Contents — sticky sidebar
   ================================================================ */
function TableOfContents({ content }) {
  const headings = useMemo(() => {
    if (!content) return [];
    const parser = new DOMParser();
    const doc = parser.parseFromString(content, "text/html");
    const elements = doc.querySelectorAll("h2, h3");
    return Array.from(elements).map((el, index) => ({
      id: `heading-${index}`,
      text: el.textContent,
      level: el.tagName === "H2" ? 2 : 3,
    }));
  }, [content]);
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0.1 }
    );
    headings.forEach((h) => {
      const el = document.getElementById(h.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <nav className="space-y-1" aria-label="Table of contents">
      <div className="mb-4 flex items-center gap-2">
        <Hash className="h-3.5 w-3.5" style={{ color: "hsl(168, 64%, 51%)" }} />
        <span
          className="text-[11px] font-bold uppercase tracking-[0.18em]"
          style={{ color: "hsl(200, 15%, 40%)" }}
        >
          On this page
        </span>
      </div>
      {headings.map((h) => (
        <a
          key={h.id}
          href={`#${h.id}`}
          onClick={(e) => {
            e.preventDefault();
            document
              .getElementById(h.id)
              ?.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
          className={`block border-l-2 py-1.5 text-[13px] leading-snug transition-all duration-300 ${
            h.level === 3 ? "pl-6" : "pl-4"
          } ${
            activeId === h.id
              ? "border-primary font-semibold"
              : "border-transparent hover:border-border"
          }`}
          style={{
            color:
              activeId === h.id ? "hsl(168, 64%, 51%)" : "hsl(200, 15%, 40%)",
          }}
        >
          {h.text}
        </a>
      ))}
    </nav>
  );
}

/* ================================================================
   Share Buttons
   ================================================================ */
function ShareButtons({ title, vertical = false }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, []);

  const items = [
    {
      Icon: Twitter,
      label: "Share on Twitter",
      href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}`,
    },
    {
      Icon: Linkedin,
      label: "Share on LinkedIn",
      href: "https://www.linkedin.com/sharing/share-offsite/",
    },
    {
      Icon: Facebook,
      label: "Share on Facebook",
      href: "https://www.facebook.com/sharer/sharer.php",
    },
    {
      Icon: Mail,
      label: "Share via Email",
      href: `mailto:?subject=${encodeURIComponent(title)}`,
    },
  ];

  const btnClass =
    "h-9 w-9 rounded-full flex items-center justify-center text-muted-foreground border border-border hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-all duration-300";

  return (
    <div className={`flex ${vertical ? "flex-col" : ""} gap-2`}>
      {items.map(({ Icon, label, href }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={btnClass}
          aria-label={label}
        >
          <Icon className="h-3.5 w-3.5" aria-hidden="true" />
        </a>
      ))}
      <button
        onClick={handleCopy}
        className={btnClass}
        aria-label={copied ? "Link copied" : "Copy link"}
      >
        {copied ? (
          <Check className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
        ) : (
          <Copy className="h-3.5 w-3.5" aria-hidden="true" />
        )}
      </button>
    </div>
  );
}

/* ================================================================
   Article Content Renderer
   ================================================================ */
const articleStyles = `
  .blog-article h2 {
    font-size: 1.75rem; font-weight: 700; color: hsl(var(--foreground));
    margin-top: 2.5rem; margin-bottom: 1.25rem;
    padding-bottom: 0.75rem; border-bottom: 1px solid hsl(var(--border) / 0.4);
    line-height: 1.3; letter-spacing: -0.02em; scroll-margin-top: 6rem;
  }
  .blog-article h3 {
    font-size: 1.3rem; font-weight: 600; color: hsl(var(--foreground));
    margin-top: 2rem; margin-bottom: 1rem; line-height: 1.35; scroll-margin-top: 6rem;
  }
  .blog-article p {
    font-size: 1.1rem; line-height: 1.85; color: hsl(var(--muted-foreground)); margin-bottom: 1.5rem;
  }
  .blog-article strong { color: hsl(var(--foreground)); font-weight: 600; }
  .blog-article a {
    color: hsl(var(--primary)); font-weight: 500; text-decoration: none;
    border-bottom: 1px solid hsl(var(--primary) / 0.3); transition: all 0.2s;
  }
  .blog-article a:hover { color: hsl(var(--forest)); border-bottom-color: hsl(var(--forest)); }
  .blog-article blockquote {
    border-left: 3px solid hsl(var(--primary));
    background: linear-gradient(90deg, hsl(var(--primary) / 0.06), transparent);
    padding: 1.25rem 1.75rem; border-radius: 0 1rem 1rem 0; margin: 2rem 0;
    font-size: 1.1rem; font-weight: 500; color: hsl(var(--foreground) / 0.85);
    line-height: 1.7; font-style: normal;
  }
  .blog-article blockquote p { margin-bottom: 0; color: inherit; }
  .blog-article ul, .blog-article ol { margin: 1.25rem 0; padding-left: 1.5rem; }
  .blog-article li {
    font-size: 1.05rem; line-height: 1.85; color: hsl(var(--muted-foreground)); margin-bottom: 0.5rem;
  }
  .blog-article li strong { color: hsl(var(--foreground)); }
  .blog-article ul li::marker { color: hsl(var(--primary) / 0.6); }
  .blog-article ol li::marker { color: hsl(var(--primary) / 0.6); font-weight: 600; }
  .blog-article code {
    background: hsl(var(--primary) / 0.08); color: hsl(var(--primary));
    padding: 0.15rem 0.4rem; border-radius: 0.375rem; font-size: 0.9em;
    font-family: ui-monospace, monospace;
  }
  .blog-article pre {
    background: hsl(var(--foreground) / 0.03); border: 1px solid hsl(var(--border) / 0.5);
    border-radius: 1rem; padding: 1.25rem; margin: 1.5rem 0; overflow-x: auto;
  }
  .blog-article pre code { background: none; color: hsl(var(--foreground)); padding: 0; }
  .blog-article img { border-radius: 1rem; margin: 1.5rem 0; max-width: 100%; }
  .blog-article hr { border: none; border-top: 1px solid hsl(var(--border) / 0.4); margin: 2rem 0; }
`;

function ArticleContent({ content }) {
  const ref = useRef(null);
  // Sanitize content once to a stable value — safe to pass to dangerouslySetInnerHTML.
  // sanitizeHtml strips <script>, on* handlers, javascript:/data: URIs.
  const safeContent = sanitizeHtml(content);

  useEffect(() => {
    if (!ref.current) return;
    ref.current.querySelectorAll("h2, h3").forEach((el, idx) => {
      el.id = `heading-${idx}`;
    });
  }, [safeContent]);

  return (
    <>
      {/* articleStyles is a static string defined in this file — not user input, safe. */}
      <style dangerouslySetInnerHTML={{ __html: articleStyles }} />
      <div
        ref={ref}
        className="blog-article max-w-none"
        dangerouslySetInnerHTML={{ __html: safeContent }}
      />
    </>
  );
}

/* ================================================================
   Blog Detail View — pure presentational component
   ================================================================ */
function BlogDetailView({ post, relatedPosts }) {
  const heroRef = useRef(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  // Disable parallax for users who prefer reduced motion (mobile perf + accessibility)
  const heroY = useTransform(
    scrollYProgress,
    [0, 1],
    reducedMotion ? ["0%", "0%"] : ["0%", "20%"]
  );
  const heroOpacity = useTransform(
    scrollYProgress,
    [0, 0.8],
    reducedMotion ? [1, 1] : [1, 0.4]
  );

  return (
    <article className="relative min-h-screen overflow-x-hidden bg-background">
      <ReadingProgress />

      {/* ═══════════ FULL-WIDTH HERO ═══════════ */}
      <div ref={heroRef} className="relative w-full overflow-hidden pt-20">
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative aspect-[2.8/1] max-h-[560px] min-h-[340px] w-full md:aspect-[3/1] lg:aspect-[3.2/1]"
        >
          {/* LCP image — priority load, next/image for optimized formats */}
          <Image
            src={post.image || "/images/placeholder.jpg"}
            alt={post.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
            style={{ filter: "brightness(1.05) contrast(1.05)" }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.65) 30%, rgba(0,0,0,0.30) 55%, rgba(0,0,0,0.10) 75%, rgba(0,0,0,0.05) 100%)",
            }}
          />
          <div
            className="absolute inset-x-0 bottom-0 h-[40%]"
            style={{
              background:
                "linear-gradient(to top, hsl(168, 64%, 15%, 0.25), transparent)",
            }}
          />
        </motion.div>

        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <div className="container mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-16 xl:px-20">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="max-w-3xl pb-10 md:pb-14"
              style={{
                textShadow:
                  "0 2px 20px rgba(0,0,0,0.7), 0 1px 6px rgba(0,0,0,0.5)",
              }}
            >
              <Link
                href="/blog"
                className="group mb-6 inline-flex items-center gap-2.5 text-sm font-medium"
                style={{ color: "#ffffff" }}
              >
                <div
                  className="flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300 group-hover:scale-105"
                  style={{
                    border: "1px solid rgba(255,255,255,0.4)",
                    background: "rgba(0,0,0,0.4)",
                    backdropFilter: "blur(16px)",
                  }}
                >
                  <ArrowLeft
                    className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-x-0.5"
                    style={{ color: "white" }}
                  />
                </div>
                <span>Back to Articles</span>
              </Link>

              <div className="mb-5">
                <span
                  className="inline-block rounded-full px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.15em]"
                  style={{
                    border: "1px solid hsl(168 64% 51% / 0.7)",
                    color: "hsl(168, 64%, 72%)",
                    background: "rgba(0,0,0,0.45)",
                    backdropFilter: "blur(16px)",
                  }}
                >
                  {post.category}
                </span>
              </div>

              <h1
                className="mb-4 text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl md:text-5xl lg:text-[3.5rem]"
                style={{
                  color: "#ffffff",
                  textShadow:
                    "0 3px 24px rgba(0,0,0,0.6), 0 1px 4px rgba(0,0,0,0.8)",
                }}
              >
                {post.title}
              </h1>

              <p
                className="max-w-2xl text-base leading-relaxed md:text-lg"
                style={{
                  color: "rgba(255,255,255,0.95)",
                  textShadow: "0 1px 8px rgba(0,0,0,0.6)",
                }}
              >
                {post.excerpt}
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ═══════════ META BAR ═══════════ */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={1}
        className="border-b border-border bg-card shadow-sm"
      >
        <div className="container mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-4 px-6 py-5 sm:flex-row sm:items-center sm:px-8 lg:px-16 xl:px-20">
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="h-11 w-11 flex-shrink-0 rounded-full bg-gradient-to-br from-primary to-forest p-[2px] shadow-sm">
                <div className="relative h-full w-full overflow-hidden rounded-full bg-card">
                  {post.author.avatar ? (
                    <Image
                      src={post.author.avatar}
                      alt={post.author.name}
                      width={44}
                      height={44}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-primary/10">
                      <span
                        className="font-bold text-primary"
                        aria-hidden="true"
                      >
                        {post.author.name.charAt(0)}
                      </span>
                    </div>
                  )}
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold leading-snug text-foreground">
                  {post.author.name}
                </p>
                <p className="text-xs text-muted-foreground">
                  {post.author.role}
                </p>
              </div>
            </div>
            <div className="hidden h-6 w-px bg-border sm:block" />
            <div className="flex items-center gap-5 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5 text-primary" />
                {post.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5 text-primary" />
                {post.readTime}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden text-[11px] font-bold uppercase tracking-wider text-muted-foreground md:block">
              Share
            </span>
            <ShareButtons title={post.title} />
          </div>
        </div>
      </motion.div>

      {/* ═══════════ TWO-COLUMN LAYOUT ═══════════ */}
      <div className="container mx-auto mt-12 max-w-[1400px] px-6 pb-20 sm:px-8 md:mt-16 lg:px-16 xl:px-20">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 xl:gap-16">
          {/* ── Main Article ── */}
          <div className="min-w-0 lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <ArticleContent content={post.content} />
            </motion.div>

            {/* Tags */}
            <div className="mt-14 border-t border-border pt-8">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="mr-2 text-[11px] font-bold uppercase tracking-[0.15em] text-muted-foreground">
                  Topics
                </span>
                {(post.tags?.length > 0 ? post.tags : [post.category])
                  .slice(0, 5)
                  .map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="cursor-default border-border px-3 py-1.5 text-xs text-muted-foreground transition-all hover:border-primary/40 hover:bg-primary/5 hover:text-primary"
                    >
                      {tag}
                    </Badge>
                  ))}
              </div>
            </div>

            {/* Mobile Share */}
            <div className="mt-8 border-t border-border pt-6 lg:hidden">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Share2 className="h-4 w-4 text-muted-foreground" />
                  <p className="text-sm font-semibold text-foreground">Share</p>
                </div>
                <ShareButtons title={post.title} />
              </div>
            </div>

            {/* Author Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
              className="mt-12"
            >
              <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-7 md:p-9">
                <div className="pointer-events-none absolute right-0 top-0 h-48 w-48 -translate-y-1/2 translate-x-1/3 rounded-full bg-primary/[0.04] blur-[80px]" />
                <div className="relative flex flex-col gap-5 sm:flex-row">
                  <div className="h-16 w-16 flex-shrink-0 rounded-2xl bg-gradient-to-br from-primary to-forest p-[2px] shadow-md sm:h-[72px] sm:w-[72px]">
                    <div className="h-full w-full overflow-hidden rounded-[14px] bg-card">
                      {post.author.avatar ? (
                        <Image
                          src={post.author.avatar}
                          alt={post.author.name}
                          width={72}
                          height={72}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-primary/10">
                          <span
                            className="text-2xl font-bold text-primary"
                            aria-hidden="true"
                          >
                            {post.author.name.charAt(0)}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="mb-1.5 text-[11px] font-bold uppercase tracking-[0.15em] text-muted-foreground">
                      Written by
                    </p>
                    <h4 className="text-lg font-bold text-foreground">
                      {post.author.name}
                    </h4>
                    <p className="text-sm font-medium text-primary">
                      {post.author.role}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      Passionate about leveraging data and technology to drive
                      business transformation. Writing about the intersection of
                      AI, analytics, and enterprise strategy.
                    </p>
                    <div className="mt-4 flex items-center gap-2">
                      {[
                        { Icon: Twitter, label: "Follow on Twitter" },
                        { Icon: Linkedin, label: "Connect on LinkedIn" },
                      ].map(({ Icon, label }) => (
                        <button
                          key={label}
                          aria-label={label}
                          className="flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground transition-all hover:bg-primary/10 hover:text-primary"
                        >
                          <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Newsletter CTA */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="mt-12"
            >
              <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-card p-8 md:p-10">
                <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-primary/[0.08] blur-[80px]" />
                <div className="pointer-events-none absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-forest/[0.06] blur-[60px]" />
                <div className="relative">
                  <div className="mb-3 flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                      <Mail className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary">
                      Newsletter
                    </span>
                  </div>
                  <h3 className="text-xl font-bold tracking-tight text-foreground md:text-2xl">
                    Stay ahead of the curve
                  </h3>
                  <p className="mb-6 mt-2 max-w-lg text-sm leading-relaxed text-muted-foreground">
                    Get the latest insights on data engineering, AI, and
                    analytics delivered weekly. Join 10,000+ data professionals.
                  </p>
                  <div className="flex max-w-lg flex-col gap-3 sm:flex-row">
                    <input
                      type="email"
                      aria-label="Email address for newsletter"
                      placeholder="your@email.com"
                      className="h-12 flex-1 rounded-xl border border-border bg-background px-4 text-sm text-foreground transition-all placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                    />
                    <Button className="h-12 whitespace-nowrap rounded-xl bg-forest px-7 font-semibold text-forest-foreground transition-all duration-300 hover:bg-primary hover:shadow-lg">
                      Subscribe
                      <ArrowUpRight className="ml-1.5 h-4 w-4" />
                    </Button>
                  </div>
                  <p className="mt-3 text-[11px] text-muted-foreground">
                    No spam, ever. Unsubscribe anytime.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* ── Sidebar ── */}
          <aside className="hidden lg:col-span-4 lg:block">
            <div className="sticky top-24 space-y-6">
              <div
                className="rounded-2xl p-6"
                style={{
                  border: "1px solid hsl(160, 20%, 90%)",
                  backgroundColor: "hsl(150, 20%, 98%)",
                }}
              >
                <TableOfContents content={post.content} />
              </div>

              <div
                className="rounded-2xl p-6"
                style={{
                  border: "1px solid hsl(160, 20%, 90%)",
                  backgroundColor: "hsl(150, 20%, 98%)",
                }}
              >
                <div className="mb-4 flex items-center gap-2">
                  <Share2
                    className="h-3.5 w-3.5"
                    style={{ color: "hsl(168, 64%, 51%)" }}
                  />
                  <span
                    className="text-[11px] font-bold uppercase tracking-[0.18em]"
                    style={{ color: "hsl(200, 15%, 40%)" }}
                  >
                    Share article
                  </span>
                </div>
                <ShareButtons title={post.title} />
              </div>

              <button
                type="button"
                aria-label="Bookmark this article to save for later"
                className="group w-full rounded-2xl p-6 text-left"
                style={{
                  border: "1px solid hsl(160, 20%, 90%)",
                  backgroundColor: "hsl(150, 20%, 98%)",
                }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl"
                    style={{ backgroundColor: "hsl(161, 88%, 16%, 0.1)" }}
                  >
                    <Bookmark
                      className="h-4 w-4"
                      aria-hidden="true"
                      style={{ color: "hsl(161, 88%, 16%)" }}
                    />
                  </div>
                  <div>
                    <p
                      className="text-sm font-semibold"
                      style={{ color: "hsl(200, 28%, 16%)" }}
                    >
                      Save for later
                    </p>
                    <p
                      className="text-xs"
                      style={{ color: "hsl(200, 15%, 40%)" }}
                    >
                      Bookmark this article
                    </p>
                  </div>
                </div>
              </button>

              <div
                className="rounded-2xl p-6"
                style={{
                  border: "1px solid hsl(160, 20%, 90%)",
                  backgroundColor: "hsl(150, 20%, 98%)",
                }}
              >
                <div className="mb-4 flex items-center gap-2">
                  <MessageCircle
                    className="h-3.5 w-3.5"
                    style={{ color: "hsl(168, 64%, 51%)" }}
                  />
                  <span
                    className="text-[11px] font-bold uppercase tracking-[0.18em]"
                    style={{ color: "hsl(200, 15%, 40%)" }}
                  >
                    Join discussion
                  </span>
                </div>
                <p
                  className="mb-4 text-sm leading-relaxed"
                  style={{ color: "hsl(200, 15%, 40%)" }}
                >
                  Have thoughts on this article? Share your insights with the
                  community.
                </p>
                <Button
                  variant="outline"
                  className="h-10 w-full rounded-xl text-sm transition-all"
                  style={{
                    borderColor: "hsl(160, 20%, 90%)",
                    color: "hsl(200, 28%, 16%)",
                  }}
                >
                  <MessageCircle className="mr-2 h-3.5 w-3.5" />
                  Leave a comment
                </Button>
              </div>

              <div
                className="rounded-2xl p-6"
                style={{
                  border: "1px solid hsl(160, 20%, 90%)",
                  backgroundColor: "hsl(150, 20%, 98%)",
                }}
              >
                <span
                  className="mb-3 block text-[11px] font-bold uppercase tracking-[0.18em]"
                  style={{ color: "hsl(200, 15%, 40%)" }}
                >
                  Related Topics
                </span>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Data Engineering",
                    "Machine Learning",
                    "Cloud Infrastructure",
                    "Business Intelligence",
                    post.category,
                  ]
                    .filter((v, i, a) => a.indexOf(v) === i)
                    .map((topic) => (
                      <button
                        key={topic}
                        type="button"
                        aria-label={`Filter by topic: ${topic}`}
                        className="rounded-lg px-3 py-1.5 text-xs font-medium transition-all hover:bg-primary/10 hover:text-primary"
                        style={{
                          backgroundColor: "hsl(160, 20%, 94%)",
                          color: "hsl(200, 15%, 40%)",
                        }}
                      >
                        {topic}
                      </button>
                    ))}
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* Related Posts */}
        {relatedPosts?.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="mt-20"
          >
            <RelatedPosts posts={relatedPosts} />
          </motion.div>
        )}
      </div>
    </article>
  );
}

/* ================================================================
   MAIN EXPORT — receives a fully resolved post from the server page
   ================================================================ */
export function BlogDetailContent({ post, relatedPosts = null }) {
  if (!post) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center p-8 text-center">
        <div>
          <h2 className="mb-2 text-2xl font-bold">Post Not Found</h2>
          <p className="mb-4 text-muted-foreground">
            The blog post you are looking for does not exist or has been
            removed.
          </p>
          <Link href="/blog">
            <Button>Back to Blog</Button>
          </Link>
        </div>
      </div>
    );
  }

  return <BlogDetailView post={post} relatedPosts={relatedPosts} />;
}
