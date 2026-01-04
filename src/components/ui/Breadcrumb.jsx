/**
 * Breadcrumb Component
 *
 * Displays navigation breadcrumbs for page hierarchy
 */

import { ChevronRight, Home } from "lucide-react";
import Link from "next/link";

export function Breadcrumb({ items = [] }) {
  return (
    <nav aria-label="Breadcrumb" className="py-4 border-b border-border bg-background">
      <div className="container mx-auto px-6">
        <ol className="flex items-center flex-wrap gap-1 text-sm">
          {/* Home Link */}
          <li className="inline-flex items-center">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors h-5"
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
                <ChevronRight size={16} className="text-muted-foreground/50 flex-shrink-0" />
                {isLast ? (
                  <span className="inline-flex items-center text-foreground font-medium h-5 leading-5" aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors h-5 leading-5"
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
