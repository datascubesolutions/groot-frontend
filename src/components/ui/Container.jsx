/**
 * Container Component
 * 
 * @fileoverview Responsive container with max-width constraints and semantic HTML
 * @module components/ui/Container
 */

import { memo } from "react";
import { cn } from "@/lib/utils";
import { CONTAINER_MAX_WIDTH } from "@/lib/constants";

/**
 * @typedef {Object} ContainerProps
 * @property {React.ReactNode} children - Container content
 * @property {string} [className] - Additional CSS classes
 * @property {boolean} [asSection] - Render as semantic <section> element
 * @property {string} [maxWidth] - Custom max-width value
 */

function Container({
  children,
  className = "",
  asSection = false,
  maxWidth = CONTAINER_MAX_WIDTH,
}) {
  const baseStyles = "w-full mx-auto px-4 sm:px-6 lg:px-8";
  const containerClasses = cn(baseStyles, className);

  const Component = asSection ? "section" : "div";

  return (
    <Component className={containerClasses} style={{ maxWidth }}>
      {children}
    </Component>
  );
}

export default memo(Container);
