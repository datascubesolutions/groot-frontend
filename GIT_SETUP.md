# Git Setup Instructions

## Current Status
✅ Git repository initialized
✅ Branches created: `main`, `develop`, `production`
✅ .gitignore configured to exclude unwanted files
✅ Git user configured: datascubesolutions@gmail.com

## Next Steps to Push to GitHub

### 1. Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `groot-frontend`
3. Description: "Enterprise-grade Next.js frontend application"
4. Visibility: Private (or Public)
5. **DO NOT** initialize with README, .gitignore, or license
6. Click "Create repository"

### 2. Add Remote and Push

```bash
# Add remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/groot-frontend.git

# Or if using SSH
git remote add origin git@github.com:YOUR_USERNAME/groot-frontend.git

# Push main branch
git checkout main
git push -u origin main

# Push develop branch
git checkout develop
git push -u origin develop

# Push production branch
git checkout production
git push -u origin production

# Set develop as default branch (optional)
git checkout develop
```

### 3. Configure GitHub Secrets

After pushing, configure secrets in GitHub:
- Settings → Secrets and variables → Actions

Required secrets:
- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`
- `STAGING_SITE_URL`
- `PRODUCTION_SITE_URL`
- `NEXT_PUBLIC_SITE_URL`

### 4. Set Up Branch Protection

- Settings → Branches
- Protect `develop` and `production` branches

## Current Branch Structure

```
main (default)
├── develop (staging)
└── production (production)
```

## Files Excluded by .gitignore

- All `.md` files (except README.md)
- `node_modules/`
- `.next/`, `out/`, `build/`, `dist/`
- `.env*` files
- IDE files (`.vscode/`, `.idea/`)
- OS files (`.DS_Store`, `Thumbs.db`)
- Log files
- Cache files

## Quick Commands

```bash
# Check status
git status

# Add all files (respects .gitignore)
git add -A

# Commit
git commit -m "your message"

# Push to remote
git push origin branch-name

# Switch branches
git checkout branch-name
```

## Authentication

Git is configured with:
- Email: datascubesolutions@gmail.com
- Name: Datascube Solutions

For GitHub authentication, use:
- Personal Access Token (recommended)
- Or SSH keys

**⚠️ Never commit passwords or secrets!**
