/**
 * UI Components Index
 * 
 * @fileoverview Centralized export for all UI primitive components
 * These are the building blocks used to compose larger components
 * 
 * @example
 * import { Button, Card, Input, Badge } from '@/components/ui';
 * 
 * @module components/ui
 */

// ============================================================================
// Actions
// ============================================================================
export { Button, buttonVariants } from './Button';

// ============================================================================
// Forms
// ============================================================================
export { Input } from './Input';

// ============================================================================
// Display
// ============================================================================
export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from './Card';

export { Badge, badgeVariants } from './Badge';

// ============================================================================
// Feedback
// ============================================================================
export { Loading, LoadingSpinner, LoadingDots } from './Loading';

// ============================================================================
// Layout
// ============================================================================
export { default as Container } from './Container';

// ============================================================================
// Navigation (to be added)
// ============================================================================
// export { Breadcrumbs } from './Breadcrumbs';
// export { Tabs } from './Tabs';
// export { Pagination } from './Pagination';

// ============================================================================
// Overlay (to be added)
// ============================================================================
// export { Modal } from './Modal';
// export { Drawer } from './Drawer';
// export { Tooltip } from './Tooltip';
// export { Popover } from './Popover';

// ============================================================================
// Data Display (to be added)
// ============================================================================
// export { Table } from './Table';
// export { Avatar } from './Avatar';
// export { List } from './List';
