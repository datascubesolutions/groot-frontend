/**
 * Button Component
 * 
 * @fileoverview Reusable button component with variants, sizes, and accessibility features
 * @module components/ui/Button
 */

import { memo, forwardRef } from "react";
import { cn } from "@/lib/utils";
import { BUTTON_VARIANTS, BUTTON_SIZES } from "@/lib/constants";

/**
 * @typedef {Object} ButtonProps
 * @property {React.ReactNode} children - Button content
 * @property {'primary' | 'secondary' | 'outline'} [variant='primary'] - Visual variant
 * @property {'sm' | 'md' | 'lg'} [size='md'] - Button size
 * @property {string} [className] - Additional CSS classes
 * @property {boolean} [disabled] - Disabled state
 * @property {string} [ariaLabel] - Accessibility label
 * @property {React.ButtonHTMLAttributes<HTMLButtonElement>} [props] - Additional button props
 */

const ButtonComponent = forwardRef(
  (
    {
      children,
      variant = BUTTON_VARIANTS.PRIMARY,
      size = BUTTON_SIZES.MD,
      className = "",
      disabled = false,
      ariaLabel,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
      [BUTTON_VARIANTS.PRIMARY]:
        "bg-[var(--color-primary-500)] text-white hover:bg-[var(--color-primary-600)] focus:ring-[var(--color-primary-500)] active:bg-[var(--color-primary-700)]",
      [BUTTON_VARIANTS.SECONDARY]:
        "bg-white text-[var(--color-primary-500)] border-2 border-[var(--color-primary-500)] hover:bg-[var(--color-primary-50)] focus:ring-[var(--color-primary-500)] active:bg-[var(--color-primary-100)]",
      [BUTTON_VARIANTS.OUTLINE]:
        "border-2 border-foreground text-foreground hover:bg-foreground hover:text-background focus:ring-foreground",
    };

    const sizes = {
      [BUTTON_SIZES.SM]: "px-4 py-2 text-sm",
      [BUTTON_SIZES.MD]: "px-6 py-3 text-base",
      [BUTTON_SIZES.LG]: "px-8 py-4 text-lg",
    };

    return (
      <button
        ref={ref}
        type={props.type || "button"}
        disabled={disabled}
        aria-label={ariaLabel}
        aria-disabled={disabled}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

ButtonComponent.displayName = "Button";

export default memo(ButtonComponent);
