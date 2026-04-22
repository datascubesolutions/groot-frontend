// @ts-nocheck
/**
 * HTML Sanitization Utility
 *
 * @fileoverview Centralized DOMPurify wrapper to sanitize any user/CMS-authored
 * HTML before it is injected via dangerouslySetInnerHTML. Prevents XSS via
 * <script> injection, on* event handlers, javascript: hrefs, and data URIs.
 *
 * Uses `isomorphic-dompurify` so it works on both server (Node) and client.
 */

import DOMPurify from "isomorphic-dompurify";

/**
 * Allowed HTML tags for rich blog/article content.
 * Does NOT include <script>, <style>, <iframe>, <object>, <embed>, <form>.
 */
const ALLOWED_TAGS = [
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "p",
  "br",
  "hr",
  "strong",
  "b",
  "em",
  "i",
  "u",
  "s",
  "del",
  "ins",
  "mark",
  "ul",
  "ol",
  "li",
  "blockquote",
  "pre",
  "code",
  "a",
  "img",
  "table",
  "thead",
  "tbody",
  "tfoot",
  "tr",
  "th",
  "td",
  "div",
  "span",
  "section",
  "article",
  "aside",
  "header",
  "footer",
  "figure",
  "figcaption",
  "details",
  "summary",
  "sup",
  "sub",
];

/**
 * Allowed attributes — tight allow-list, no on* event handlers.
 */
const ALLOWED_ATTR = [
  "href",
  "src",
  "srcset",
  "alt",
  "title",
  "width",
  "height",
  "loading",
  "decoding",
  "class",
  "id",
  "target",
  "rel",
  "colspan",
  "rowspan",
  "aria-label",
  "aria-hidden",
  "role",
  "lang",
];

/**
 * DOMPurify hook: block javascript: and data: URIs in href/src.
 */
DOMPurify.addHook("afterSanitizeAttributes", (node) => {
  // Force safe target+rel on any <a> that opens in new tab
  if (node.tagName === "A") {
    if (node.getAttribute("target") === "_blank") {
      node.setAttribute("rel", "noopener noreferrer");
    }
    const href = node.getAttribute("href") || "";
    // Strip javascript: and data: URIs
    if (/^(?:javascript|data|vbscript):/i.test(href.trim())) {
      node.removeAttribute("href");
    }
  }

  // Strip data: URIs from img src
  if (node.tagName === "IMG") {
    const src = node.getAttribute("src") || "";
    if (/^data:/i.test(src.trim())) {
      node.removeAttribute("src");
    }
  }
});

/**
 * Sanitize HTML string for safe injection via dangerouslySetInnerHTML.
 *
 * @param {string} html - Raw HTML to sanitize.
 * @param {import('dompurify').Config} [options] - Optional DOMPurify overrides.
 * @returns {string} Sanitized HTML string.
 *
 * @example
 * // In a React component:
 * <div dangerouslySetInnerHTML={{ __html: sanitizeHtml(post.content) }} />
 */
export function sanitizeHtml(html, options = {}) {
  if (!html || typeof html !== "string") return "";

  return DOMPurify.sanitize(html, {
    ALLOWED_TAGS,
    ALLOWED_ATTR,
    // Prevent DOM clobbering attacks
    SANITIZE_DOM: true,
    // Return a string, not a DocumentFragment
    RETURN_DOM: false,
    RETURN_DOM_FRAGMENT: false,
    ...options,
  });
}

/**
 * Strict sanitizer for minimal contexts (e.g. tooltips, labels).
 * Only allows inline text formatting — no block elements, no links.
 *
 * @param {string} html
 * @returns {string}
 */
export function sanitizeInlineHtml(html) {
  if (!html || typeof html !== "string") return "";
  return DOMPurify.sanitize(html, {
    ALLOWED_TAGS: ["b", "strong", "em", "i", "code", "span", "br"],
    ALLOWED_ATTR: ["class", "aria-label"],
  });
}
