/**
 * Component Type Definitions
 * 
 * @fileoverview Type definitions for React components
 * @module types/components
 */

/**
 * @typedef {Object} BaseComponentProps
 * @property {string} [className] - Additional CSS classes
 * @property {React.ReactNode} [children] - Child elements
 * @property {string} [id] - Element ID
 * @property {string} [testId] - Test ID for testing
 */

/**
 * @typedef {'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link' | 'hero' | 'hero-outline' | 'accent' | 'mint'} ButtonVariant
 */

/**
 * @typedef {'default' | 'sm' | 'lg' | 'xl' | 'icon'} ButtonSize
 */

/**
 * @typedef {Object} ButtonProps
 * @property {ButtonVariant} [variant] - Button style variant
 * @property {ButtonSize} [size] - Button size
 * @property {boolean} [asChild] - Render as child component
 * @property {boolean} [loading] - Loading state
 * @property {boolean} [disabled] - Disabled state
 */

/**
 * @typedef {'default' | 'secondary' | 'destructive' | 'outline' | 'success' | 'warning'} BadgeVariant
 */

/**
 * @typedef {Object} BadgeProps
 * @property {BadgeVariant} [variant] - Badge style variant
 */

/**
 * @typedef {Object} CardProps
 * @property {boolean} [hoverable] - Enable hover effects
 * @property {boolean} [clickable] - Enable click styling
 */

/**
 * @typedef {'sm' | 'md' | 'lg' | 'xl' | 'full'} ContainerSize
 */

/**
 * @typedef {Object} ContainerProps
 * @property {ContainerSize} [size] - Container max-width
 * @property {boolean} [centered] - Center content
 * @property {boolean} [padded] - Add horizontal padding
 */

/**
 * @typedef {Object} InputProps
 * @property {string} [error] - Error message
 * @property {string} [hint] - Help text
 * @property {React.ReactNode} [leftIcon] - Left icon
 * @property {React.ReactNode} [rightIcon] - Right icon
 */

/**
 * @typedef {'spinner' | 'dots' | 'skeleton'} LoadingType
 */

/**
 * @typedef {'sm' | 'md' | 'lg'} LoadingSize
 */

/**
 * @typedef {Object} LoadingProps
 * @property {LoadingType} [type] - Loading indicator type
 * @property {LoadingSize} [size] - Loading indicator size
 * @property {string} [text] - Loading text
 */

// Export empty object for module resolution
export { };
