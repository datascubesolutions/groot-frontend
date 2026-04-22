import { ChevronRight, Home } from "lucide-react";
import Link from "next/link";

/**
 * @typedef {Object} BreadcrumbItem
 * @property {string} label
 * @property {string} href
 */

/**
 * Navigation breadcrumbs for page hierarchy.
 *
 * @param {Object} props
 * @param {BreadcrumbItem[]} [props.items]
 */
export function Breadcrumb({ items = [] }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="border-b border-border bg-background py-4"
    >
      <div className="container mx-auto px-6">
        <ol className="flex flex-wrap items-center gap-1 text-sm">
          {/* Home Link */}
          <li className="inline-flex items-center">
            <Link
              href="/"
              className="inline-flex h-5 items-center gap-1.5 text-muted-foreground transition-colors hover:text-primary"
            >
              <Home size={16} className="flex-shrink-0" />
              <span className="leading-5">Home</span>
            </Link>
          </li>

          {/* Breadcrumb Items */}
          {items.map((item, index) => {
            const isLast = index === items.length - 1;

            return (
              <li key={index} className="inline-flex items-center gap-1">
                <ChevronRight
                  size={16}
                  className="flex-shrink-0 text-muted-foreground/50"
                />
                {isLast ? (
                  <span
                    className="inline-flex h-5 items-center font-medium leading-5 text-foreground"
                    aria-current="page"
                  >
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="inline-flex h-5 items-center leading-5 text-muted-foreground transition-colors hover:text-primary"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}

export default Breadcrumb;
