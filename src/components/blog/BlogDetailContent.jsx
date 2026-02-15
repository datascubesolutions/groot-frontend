"use client";

import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
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
import { useCallback, useEffect, useRef, useState } from "react";
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
    <div className="fixed top-[80px] left-0 right-0 z-[45] h-[3px]" style={{ background: "hsl(160 20% 90% / 0.3)" }}>
      <motion.div
        className="h-full"
        style={{
          width: `${progress}%`,
          background: "linear-gradient(90deg, hsl(168 64% 51%), hsl(142 71% 45%), hsl(161 88% 16%))",
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
  const [headings, setHeadings] = useState([]);
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(content, "text/html");
    const elements = doc.querySelectorAll("h2, h3");
    const parsed = Array.from(elements).map((el, index) => ({
      id: `heading-${index}`,
      text: el.textContent,
      level: el.tagName === "H2" ? 2 : 3,
    }));
    setHeadings(parsed);
  }, [content]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
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
      <div className="flex items-center gap-2 mb-4">
        <Hash className="h-3.5 w-3.5" style={{ color: "hsl(168, 64%, 51%)" }} />
        <span className="text-[11px] font-bold uppercase tracking-[0.18em]" style={{ color: "hsl(200, 15%, 40%)" }}>
          On this page
        </span>
      </div>
      {headings.map((h) => (
        <a
          key={h.id}
          href={`#${h.id}`}
          onClick={(e) => {
            e.preventDefault();
            document.getElementById(h.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
          className={`block text-[13px] leading-snug py-1.5 border-l-2 transition-all duration-300 ${h.level === 3 ? "pl-6" : "pl-4"
            } ${activeId === h.id
              ? "border-primary font-semibold"
              : "border-transparent hover:border-border"
            }`}
          style={{ color: activeId === h.id ? "hsl(168, 64%, 51%)" : "hsl(200, 15%, 40%)" }}
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
    { Icon: Twitter, label: "Twitter", href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}` },
    { Icon: Linkedin, label: "LinkedIn", href: `https://www.linkedin.com/sharing/share-offsite/` },
    { Icon: Facebook, label: "Facebook", href: `https://www.facebook.com/sharer/sharer.php` },
    { Icon: Mail, label: "Email", href: `mailto:?subject=${encodeURIComponent(title)}` },
  ];

  const btnClass =
    "h-9 w-9 rounded-full flex items-center justify-center text-muted-foreground border border-border hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-all duration-300";

  return (
    <div className={`flex ${vertical ? "flex-col" : ""} gap-2`}>
      {items.map(({ Icon, label, href }) => (
        <a key={label} href={href} target="_blank" rel="noopener noreferrer" className={btnClass} title={label}>
          <Icon className="h-3.5 w-3.5" />
        </a>
      ))}
      <button onClick={handleCopy} className={btnClass} title="Copy link">
        {copied ? <Check className="h-3.5 w-3.5 text-accent" /> : <Copy className="h-3.5 w-3.5" />}
      </button>
    </div>
  );
}

/* ================================================================
   Article Content Renderer
   Uses custom inline styles instead of @tailwindcss/typography prose
   so it works without the prose plugin.
   ================================================================ */
const articleStyles = `
    .blog-article h2 {
        font-size: 1.75rem;
        font-weight: 700;
        color: hsl(var(--foreground));
        margin-top: 2.5rem;
        margin-bottom: 1.25rem;
        padding-bottom: 0.75rem;
        border-bottom: 1px solid hsl(var(--border) / 0.4);
        line-height: 1.3;
        letter-spacing: -0.02em;
        scroll-margin-top: 6rem;
    }
    .blog-article h3 {
        font-size: 1.3rem;
        font-weight: 600;
        color: hsl(var(--foreground));
        margin-top: 2rem;
        margin-bottom: 1rem;
        line-height: 1.35;
        scroll-margin-top: 6rem;
    }
    .blog-article p {
        font-size: 1.1rem;
        line-height: 1.85;
        color: hsl(var(--muted-foreground));
        margin-bottom: 1.5rem;
    }
    .blog-article strong {
        color: hsl(var(--foreground));
        font-weight: 600;
    }
    .blog-article a {
        color: hsl(var(--primary));
        font-weight: 500;
        text-decoration: none;
        border-bottom: 1px solid hsl(var(--primary) / 0.3);
        transition: all 0.2s;
    }
    .blog-article a:hover {
        color: hsl(var(--forest));
        border-bottom-color: hsl(var(--forest));
    }
    .blog-article blockquote {
        border-left: 3px solid hsl(var(--primary));
        background: linear-gradient(90deg, hsl(var(--primary) / 0.06), transparent);
        padding: 1.25rem 1.75rem;
        border-radius: 0 1rem 1rem 0;
        margin: 2rem 0;
        font-size: 1.1rem;
        font-weight: 500;
        color: hsl(var(--foreground) / 0.85);
        line-height: 1.7;
        font-style: normal;
    }
    .blog-article blockquote p {
        margin-bottom: 0;
        color: inherit;
    }
    .blog-article ul, .blog-article ol {
        margin: 1.25rem 0;
        padding-left: 1.5rem;
    }
    .blog-article li {
        font-size: 1.05rem;
        line-height: 1.85;
        color: hsl(var(--muted-foreground));
        margin-bottom: 0.5rem;
    }
    .blog-article li strong {
        color: hsl(var(--foreground));
    }
    .blog-article ul li::marker {
        color: hsl(var(--primary) / 0.6);
    }
    .blog-article ol li::marker {
        color: hsl(var(--primary) / 0.6);
        font-weight: 600;
    }
    .blog-article code {
        background: hsl(var(--primary) / 0.08);
        color: hsl(var(--primary));
        padding: 0.15rem 0.4rem;
        border-radius: 0.375rem;
        font-size: 0.9em;
        font-family: ui-monospace, monospace;
    }
    .blog-article pre {
        background: hsl(var(--foreground) / 0.03);
        border: 1px solid hsl(var(--border) / 0.5);
        border-radius: 1rem;
        padding: 1.25rem;
        margin: 1.5rem 0;
        overflow-x: auto;
    }
    .blog-article pre code {
        background: none;
        color: hsl(var(--foreground));
        padding: 0;
    }
    .blog-article img {
        border-radius: 1rem;
        margin: 1.5rem 0;
        max-width: 100%;
    }
    .blog-article hr {
        border: none;
        border-top: 1px solid hsl(var(--border) / 0.4);
        margin: 2rem 0;
    }
`;

function ArticleContent({ content }) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    const headings = ref.current.querySelectorAll("h2, h3");
    let idx = 0;
    headings.forEach((el) => {
      el.id = `heading-${idx}`;
      idx++;
    });
  }, [content]);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: articleStyles }} />
      <div
        ref={ref}
        className="blog-article max-w-none"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </>
  );
}

/* ================================================================
   MAIN COMPONENT
   ================================================================ */
export function BlogDetailContent({ post, relatedPosts }) {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.4]);

  return (
    <article className="min-h-screen bg-background relative overflow-x-hidden">
      <ReadingProgress />

      {/* ═══════════ FULL-WIDTH HERO ═══════════ */}
      <div ref={heroRef} className="relative w-full overflow-hidden pt-20">
        {/* Hero Image — full bleed */}
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative w-full aspect-[2.8/1] md:aspect-[3/1] lg:aspect-[3.2/1] min-h-[340px] max-h-[560px]"
        >
          <Image
            src={post.image || "/images/placeholder.jpg"}
            alt={post.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
            style={{ filter: "brightness(1.05) contrast(1.05)" }}
          />
          {/* Cinematic gradient overlay — dark at bottom for text, transparent at top to show image */}
          <div
            className="absolute inset-0"
            style={{
              background: `
                linear-gradient(to top,
                  rgba(0,0,0,0.88) 0%,
                  rgba(0,0,0,0.65) 30%,
                  rgba(0,0,0,0.30) 55%,
                  rgba(0,0,0,0.10) 75%,
                  rgba(0,0,0,0.05) 100%
                )
              `,
            }}
          />
          {/* Subtle teal tint at the very bottom for brand continuity */}
          <div
            className="absolute inset-x-0 bottom-0 h-[40%]"
            style={{
              background: "linear-gradient(to top, hsl(168, 64%, 15%, 0.25), transparent)",
            }}
          />
        </motion.div>

        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <div className="container mx-auto px-6 sm:px-8 lg:px-16 xl:px-20 max-w-[1400px]">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="max-w-3xl pb-10 md:pb-14"
              style={{ textShadow: "0 2px 20px rgba(0,0,0,0.7), 0 1px 6px rgba(0,0,0,0.5)" }}
            >
              {/* Back */}
              <Link
                href="/blog"
                className="group inline-flex items-center gap-2.5 text-sm font-medium mb-6"
                style={{ color: "#ffffff" }}
              >
                <div
                  className="h-8 w-8 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-105"
                  style={{ border: "1px solid rgba(255,255,255,0.4)", background: "rgba(0,0,0,0.4)", backdropFilter: "blur(16px)" }}
                >
                  <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-x-0.5" style={{ color: "white" }} />
                </div>
                <span>Back to Articles</span>
              </Link>

              {/* Category Badge */}
              <div className="mb-5">
                <span
                  className="inline-block px-3.5 py-1 text-[11px] font-bold tracking-[0.15em] uppercase rounded-full"
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

              {/* Title */}
              <h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold tracking-tight leading-[1.1] mb-4"
                style={{ color: "#ffffff", textShadow: "0 3px 24px rgba(0,0,0,0.6), 0 1px 4px rgba(0,0,0,0.8)" }}
              >
                {post.title}
              </h1>

              {/* Excerpt */}
              <p
                className="text-base md:text-lg leading-relaxed max-w-2xl"
                style={{ color: "rgba(255,255,255,0.95)", textShadow: "0 1px 8px rgba(0,0,0,0.6)" }}
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
        <div className="container mx-auto px-6 sm:px-8 lg:px-16 xl:px-20 max-w-[1400px] py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          {/* Author + Meta */}
          <div className="flex items-center gap-6 flex-wrap">
            <div className="flex items-center gap-3">
              <div className="h-11 w-11 rounded-full bg-gradient-to-br from-primary to-forest p-[2px] shadow-sm flex-shrink-0">
                <div className="h-full w-full rounded-full bg-card overflow-hidden relative">
                  {post.author.avatar ? (
                    <Image src={post.author.avatar} alt={post.author.name} fill className="object-cover" />
                  ) : (
                    <div className="h-full w-full flex items-center justify-center bg-primary/10">
                      <span className="font-bold text-primary">{post.author.name.charAt(0)}</span>
                    </div>
                  )}
                </div>
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm leading-snug">{post.author.name}</p>
                <p className="text-xs text-muted-foreground">{post.author.role}</p>
              </div>
            </div>
            <div className="hidden sm:block h-6 w-px bg-border" />
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

          {/* Share */}
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground hidden md:block">
              Share
            </span>
            <ShareButtons title={post.title} />
          </div>
        </div>
      </motion.div>

      {/* ═══════════ TWO-COLUMN LAYOUT ═══════════ */}
      <div className="container mx-auto px-6 sm:px-8 lg:px-16 xl:px-20 max-w-[1400px] mt-12 md:mt-16 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-16">

          {/* ── Main Article ── */}
          <div className="lg:col-span-8 min-w-0">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <ArticleContent content={post.content} />
            </motion.div>

            {/* Tags */}
            <div className="mt-14 pt-8 border-t border-border">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-muted-foreground mr-2">
                  Topics
                </span>
                {[post.category, "Analytics", "Enterprise", "Data Platform"].map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="border-border text-muted-foreground hover:border-primary/40 hover:text-primary hover:bg-primary/5 transition-all cursor-default px-3 py-1.5 text-xs"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Mobile Share */}
            <div className="mt-8 lg:hidden pt-6 border-t border-border">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Share2 className="h-4 w-4 text-muted-foreground" />
                  <p className="text-sm font-semibold text-foreground">Share</p>
                </div>
                <ShareButtons title={post.title} />
              </div>
            </div>

            {/* ── Author Card ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
              className="mt-12"
            >
              <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-7 md:p-9">
                <div className="absolute top-0 right-0 w-48 h-48 bg-primary/[0.04] rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
                <div className="flex flex-col sm:flex-row gap-5 relative">
                  <div className="h-16 w-16 sm:h-[72px] sm:w-[72px] rounded-2xl bg-gradient-to-br from-primary to-forest p-[2px] flex-shrink-0 shadow-md">
                    <div className="h-full w-full rounded-[14px] bg-card overflow-hidden relative">
                      {post.author.avatar ? (
                        <Image src={post.author.avatar} alt={post.author.name} fill className="object-cover" />
                      ) : (
                        <div className="h-full w-full flex items-center justify-center bg-primary/10">
                          <span className="font-bold text-primary text-2xl">{post.author.name.charAt(0)}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-muted-foreground mb-1.5">
                      Written by
                    </p>
                    <h4 className="text-lg font-bold text-foreground">{post.author.name}</h4>
                    <p className="text-sm text-primary font-medium">{post.author.role}</p>
                    <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                      Passionate about leveraging data and technology to drive business transformation.
                      Writing about the intersection of AI, analytics, and enterprise strategy.
                    </p>
                    <div className="mt-4 flex items-center gap-2">
                      {[Twitter, Linkedin].map((Icon, i) => (
                        <button
                          key={i}
                          className="h-8 w-8 rounded-lg flex items-center justify-center text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all"
                        >
                          <Icon className="h-3.5 w-3.5" />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* ── Newsletter CTA ── */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="mt-12"
            >
              <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-card p-8 md:p-10">
                <div className="absolute -top-20 -right-20 w-56 h-56 bg-primary/[0.08] rounded-full blur-[80px] pointer-events-none" />
                <div className="absolute -bottom-16 -left-16 w-40 h-40 bg-forest/[0.06] rounded-full blur-[60px] pointer-events-none" />

                <div className="relative">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Mail className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary">
                      Newsletter
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground tracking-tight">
                    Stay ahead of the curve
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed max-w-lg mb-6">
                    Get the latest insights on data engineering, AI, and analytics delivered weekly. Join
                    10,000+ data professionals.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 max-w-lg">
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="flex-1 h-12 px-4 rounded-xl border border-border bg-background text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                    />
                    <Button className="h-12 px-7 rounded-xl bg-forest text-forest-foreground font-semibold hover:bg-primary hover:shadow-lg transition-all duration-300 whitespace-nowrap">
                      Subscribe
                      <ArrowUpRight className="h-4 w-4 ml-1.5" />
                    </Button>
                  </div>
                  <p className="text-[11px] text-muted-foreground mt-3">
                    No spam, ever. Unsubscribe anytime.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <aside className="hidden lg:block lg:col-span-4">
            <div className="sticky top-24 space-y-6">
              {/* TOC Card */}
              <div className="rounded-2xl p-6" style={{ border: "1px solid hsl(160, 20%, 90%)", backgroundColor: "hsl(150, 20%, 98%)" }}>
                <TableOfContents content={post.content} />
              </div>

              {/* Share Card */}
              <div className="rounded-2xl p-6" style={{ border: "1px solid hsl(160, 20%, 90%)", backgroundColor: "hsl(150, 20%, 98%)" }}>
                <div className="flex items-center gap-2 mb-4">
                  <Share2 className="h-3.5 w-3.5" style={{ color: "hsl(168, 64%, 51%)" }} />
                  <span className="text-[11px] font-bold uppercase tracking-[0.18em]" style={{ color: "hsl(200, 15%, 40%)" }}>
                    Share article
                  </span>
                </div>
                <ShareButtons title={post.title} />
              </div>

              {/* Bookmark Card */}
              <div className="rounded-2xl p-6 cursor-pointer group" style={{ border: "1px solid hsl(160, 20%, 90%)", backgroundColor: "hsl(150, 20%, 98%)" }}>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors" style={{ backgroundColor: "hsl(161, 88%, 16%, 0.1)" }}>
                    <Bookmark className="h-4 w-4" style={{ color: "hsl(161, 88%, 16%)" }} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold" style={{ color: "hsl(200, 28%, 16%)" }}>Save for later</p>
                    <p className="text-xs" style={{ color: "hsl(200, 15%, 40%)" }}>Bookmark this article</p>
                  </div>
                </div>
              </div>

              {/* Discussion Card */}
              <div className="rounded-2xl p-6" style={{ border: "1px solid hsl(160, 20%, 90%)", backgroundColor: "hsl(150, 20%, 98%)" }}>
                <div className="flex items-center gap-2 mb-4">
                  <MessageCircle className="h-3.5 w-3.5" style={{ color: "hsl(168, 64%, 51%)" }} />
                  <span className="text-[11px] font-bold uppercase tracking-[0.18em]" style={{ color: "hsl(200, 15%, 40%)" }}>
                    Join discussion
                  </span>
                </div>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "hsl(200, 15%, 40%)" }}>
                  Have thoughts on this article? Share your insights with the community.
                </p>
                <Button
                  variant="outline"
                  className="w-full rounded-xl transition-all text-sm h-10"
                  style={{ borderColor: "hsl(160, 20%, 90%)", color: "hsl(200, 28%, 16%)" }}
                >
                  <MessageCircle className="h-3.5 w-3.5 mr-2" />
                  Leave a comment
                </Button>
              </div>

              {/* Related Topics */}
              <div className="rounded-2xl p-6" style={{ border: "1px solid hsl(160, 20%, 90%)", backgroundColor: "hsl(150, 20%, 98%)" }}>
                <span className="text-[11px] font-bold uppercase tracking-[0.18em] block mb-3" style={{ color: "hsl(200, 15%, 40%)" }}>
                  Related Topics
                </span>
                <div className="flex flex-wrap gap-2">
                  {["Data Engineering", "Machine Learning", "Cloud Infrastructure", "Business Intelligence", post.category].map((topic) => (
                    <span
                      key={topic}
                      className="px-3 py-1.5 rounded-lg text-xs font-medium hover:bg-primary/10 hover:text-primary transition-all cursor-pointer"
                      style={{ backgroundColor: "hsl(160, 20%, 94%)", color: "hsl(200, 15%, 40%)" }}
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* ═══════════ Related Posts ═══════════ */}
        {relatedPosts && relatedPosts.length > 0 && (
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
