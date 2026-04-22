# Groot Frontend

Enterprise-grade Next.js application built with React 19 and Tailwind CSS. Designed for scalability, maintainability, and long-term success.

## 🚀 Tech Stack

- **Framework**: Next.js 16.1.1
- **React**: 19.2.3
- **Styling**: Tailwind CSS 3
- **Fonts**: Plus Jakarta Sans
- **CI/CD**: GitHub Actions
- **Deployment**: Vercel (configurable)

## 📋 Prerequisites

- Node.js 20+ (LTS recommended)
- npm 10+ or yarn 1.22+
- Git 2.30+

## 🛠️ Getting Started

### Installation

```bash
# Clone the repository
git clone https://github.com/datascubesolutions/groot-frontend.git
cd groot-frontend

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues
npm run format       # Format code with Prettier
npm run format:check # Check code formatting

# Testing
npm run test         # Run tests
npm run test:watch   # Run tests in watch mode
npm run test:coverage # Run tests with coverage

# Utilities
npm run type-check   # Type check (if TypeScript configured)
npm run analyze      # Analyze bundle size
npm run clean        # Clean build artifacts
```

## 📁 Project Structure

```
src/
├── app/              # Next.js app router pages
│   ├── (public)/     # Public pages
│   ├── (admin)/      # Admin-only pages
│   └── layout.js     # Root layout
├── components/       # React components
│   ├── errors/      # Error handling components
│   ├── routing/      # Routing utilities
│   └── ui/          # Reusable UI components
├── config/          # Configuration files
├── lib/             # Utilities and helpers
│   ├── routes/      # Route configuration
│   ├── constants/   # Application constants
│   └── utils/       # Utility functions
└── styles/          # Global styles
```

## 🔄 CI/CD

This project uses GitHub Actions for continuous integration and deployment.

### Branch Strategy

- **`develop`** - Staging environment (auto-deploys)
- **`production`** - Production environment (requires approval)

### Workflows

- **CI**: Runs on every push/PR (lint, build, test)
- **Staging Deployment**: Auto-deploys `develop` branch
- **Production Deployment**: Deploys `production` branch with approval
- **Dependency Review**: Automatically reviews dependencies
- **CodeQL**: Security analysis

### Status Badges

Add these to your README:

```markdown
![CI](https://github.com/datascubesolutions/groot-frontend/workflows/CI/badge.svg)
![Deploy Staging](https://github.com/datascubesolutions/groot-frontend/workflows/Deploy%20to%20Staging/badge.svg)
![Deploy Production](https://github.com/datascubesolutions/groot-frontend/workflows/Deploy%20to%20Production/badge.svg)
```

For detailed CI/CD documentation, see [CICD.md](./CICD.md)

For GitHub setup instructions, see [.github/SETUP.md](.github/SETUP.md)

## 🔐 Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_ENV=development
```

### Required Environment Variables

| Variable               | Description                                  | Default                 |
| ---------------------- | -------------------------------------------- | ----------------------- |
| `NEXT_PUBLIC_SITE_URL` | Public site URL                              | `http://localhost:3000` |
| `NEXT_PUBLIC_ENV`      | Environment (development/staging/production) | `development`           |

## 📚 Documentation

- [Architecture Guide](./ARCHITECTURE.md) - Project architecture and structure
- [Routing Guide](./ROUTING.md) - Routing conventions and patterns
- [CI/CD Documentation](./CICD.md) - Continuous integration and deployment
- [GitHub Setup](./.github/SETUP.md) - Repository configuration guide

## 🤝 Contributing

1. Create a feature branch from `develop`
2. Make your changes
3. Run `npm run lint` and `npm run build`
4. Create a pull request to `develop`
5. After review and approval, merge to `develop`
6. Test in staging, then merge `develop` → `production`

## 📝 Code Quality

- ESLint for linting
- Prettier for code formatting (optional)
- TypeScript support ready (when configured)
- Pre-commit hooks (optional, via Husky)

## 🔒 Security

- Dependency scanning via Dependabot
- CodeQL security analysis
- Regular security audits
- Environment variable validation

## 📧 Contact

- **Email**: datascubesolutions@gmail.com
- **Repository**: [GitHub Repository](https://github.com/datascubesolutions/groot-frontend)

## 📄 License

Private - All rights reserved

---

Built with ❤️ by Datascube Solutions
