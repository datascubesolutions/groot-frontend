# Project Architecture

This document outlines the architecture and file organization of the Groot Frontend application.

## 📁 Directory Structure

```
groot-frontend/
├── .github/                    # GitHub configuration
│   ├── ISSUE_TEMPLATE/         # Issue templates
│   ├── workflows/              # GitHub Actions CI/CD
│   └── PULL_REQUEST_TEMPLATE.md
├── .vscode/                    # VS Code configuration
│   ├── settings.json           # Workspace settings
│   └── extensions.json         # Recommended extensions
├── e2e/                        # End-to-end tests (Playwright)
├── public/                     # Static assets
│   ├── fonts/                  # Custom fonts
│   ├── images/                 # Static images
│   └── lottie/                 # Lottie animations
├── src/
│   ├── app/                    # Next.js App Router
│   ├── components/             # React components
│   ├── config/                 # Application configuration
│   ├── hooks/                  # Custom React hooks
│   ├── lib/                    # Utilities and helpers
│   ├── styles/                 # Global styles
│   └── types/                  # Type definitions
└── [config files]              # Root configuration files
```

## 🧩 Components Organization

Components are organized by purpose and responsibility:

```
src/components/
├── index.js                    # Master exports
├── ui/                         # UI Primitives (atoms)
│   ├── Button.jsx
│   ├── Card.jsx
│   ├── Input.jsx
│   ├── Badge.jsx
│   ├── Loading.jsx
│   ├── Container.jsx
│   └── index.js
├── sections/                   # Page Sections (organisms)
│   ├── HeroSection.jsx
│   ├── AboutSection.jsx
│   ├── ServicesSection.jsx
│   ├── CTASection.jsx
│   ├── Footer.jsx
│   └── index.js
├── layout/                     # Layout components
│   └── index.js
├── features/                   # Feature-specific components
│   └── index.js
├── errors/                     # Error handling
│   ├── ErrorBoundary.jsx
│   └── index.js
├── seo/                        # SEO components
│   ├── StructuredData.jsx
│   ├── Breadcrumbs.jsx
│   └── index.js
├── animations/                 # Animation wrappers
│   └── index.js
├── routing/                    # Routing utilities
│   └── index.js
└── icons/                      # Icon exports
    └── index.js
```

### Import Patterns

```javascript
// Single centralized import
import { Button, Card, HeroSection, ErrorBoundary } from "@/components";

// Category-specific imports
import { Button, Input, Card } from "@/components/ui";
import { HeroSection, Footer } from "@/components/sections";
import { Breadcrumbs } from "@/components/seo";
```

## 📚 Library Organization

```
src/lib/
├── index.js                    # Master exports
├── api/                        # API client layer
│   ├── client.js               # Fetch wrapper
│   ├── endpoints.js            # API endpoints
│   ├── errors.js               # Error handling
│   └── index.js
├── constants/                  # Application constants
│   └── index.js
├── env/                        # Environment utilities
│   └── index.js
├── routes/                     # Route configuration
│   ├── index.js                # Route definitions
│   └── metadata.js             # SEO metadata per route
├── seo/                        # SEO utilities
│   └── index.js
├── validators/                 # Form validation
│   ├── rules.js                # Validation rules
│   ├── schemas.js              # Pre-built schemas
│   └── index.js
├── utils.js                    # Common utilities (cn)
├── performance.js              # Performance helpers
└── error-tracking.js           # Error tracking
```

## 🪝 Hooks Organization

```
src/hooks/
├── index.js                    # Master exports
├── useScrollReveal.js          # Scroll animations
├── useMediaQuery.js            # Responsive design
├── useLocalStorage.js          # Persistent state
├── useDisclosure.js            # Modal/drawer state
├── useDebounce.js              # Debouncing
├── useThrottle.js              # Throttling
├── useClickOutside.js          # Click detection
├── useKeyPress.js              # Keyboard events
├── useAsync.js                 # Async operations
└── useForm.js                  # Form handling
```

### Usage Examples

```javascript
import {
  useMediaQuery,
  useDisclosure,
  useForm
} from '@/hooks';

// Responsive design
const isMobile = useMediaQuery('(max-width: 768px)');

// Modal state
const { isOpen, onOpen, onClose } = useDisclosure();

// Form handling
const { values, errors, handleSubmit } = useForm({
  initialValues: { email: '' },
  validate: (values) => ({ ... }),
});
```

## 📝 Type Definitions

```
src/types/
├── index.js                    # Master exports
├── common.js                   # Shared types (AsyncState, Pagination)
├── components.js               # Component prop types
├── api.js                      # API types
└── seo.js                      # SEO types
```

## ⚙️ Configuration

```
src/config/
├── index.js                    # Master exports
├── site.config.js              # Site metadata
├── theme.config.js             # Theme settings
└── animation.config.js         # Animation settings
```

## 🔎 SEO Architecture

### Route-Based Metadata

All SEO metadata is centralized in `lib/routes/metadata.js`:

```javascript
export const ROUTE_METADATA = {
  HOME: {
    path: "/",
    title: "Groot Analytics - Data Engineering",
    description: "Turning messy data into decisions",
    changeFrequency: "daily",
    priority: 1.0,
    indexable: true,
  },
  // ... other routes
};
```

### Automatic Sitemap Generation

The sitemap (`app/sitemap.js`) automatically generates from route metadata:

```javascript
import { getIndexableRoutes } from "@/lib/routes/metadata";

export default function sitemap() {
  const routes = getIndexableRoutes();
  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
```

### Structured Data

JSON-LD structured data components available:

- `OrganizationSchema`
- `WebsiteSchema`
- `ServiceSchema`
- `Breadcrumbs` (with automatic schema)

## 📦 Import Conventions

### Centralized Imports (Preferred)

```javascript
// From main entry points
import { Button, Card } from "@/components";
import { cn, ROUTES, generateMetadata } from "@/lib";
import { useForm, useDisclosure } from "@/hooks";
import { siteConfig, themeConfig } from "@/config";
```

### Direct Imports (When needed)

```javascript
// For tree-shaking or specific needs
import { Button } from "@/components/ui/Button";
import { validateEmail } from "@/lib/validators/rules";
```

## 🎨 Styling Architecture

- **Design Tokens**: `src/styles/tokens.css`
- **Animations**: `src/styles/animations.css`
- **Global Styles**: `src/app/globals.css`
- **Component Styles**: Tailwind CSS utilities

## 🧪 Testing Structure

```
├── e2e/                        # E2E tests (Playwright)
│   └── home.spec.js
├── src/components/ui/__tests__/ # Unit tests
│   └── Button.test.js
└── jest.config.js              # Jest configuration
```

## 📋 Coding Standards

1. **Components**: Functional components with hooks
2. **Exports**: Named exports preferred, barrel files for modules
3. **Types**: JSDoc annotations for type safety
4. **Formatting**: Prettier with 2-space indentation
5. **Linting**: ESLint with Next.js recommended rules
