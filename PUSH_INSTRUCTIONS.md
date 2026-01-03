# Push Instructions

## Authentication Required

You need to authenticate with GitHub to push. Use one of these methods:

### Option 1: Personal Access Token (Recommended)

1. Go to GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate new token with `repo` scope
3. Copy the token
4. Use it as password when pushing:

```bash
git remote set-url origin https://github.com/datascubesolutions/groot-frontend.git
git push -u origin main
# When prompted for password, paste your token
```

### Option 2: GitHub CLI

```bash
gh auth login
git push -u origin main
```

### Option 3: SSH Key

```bash
# Generate SSH key
ssh-keygen -t ed25519 -C "datascubesolutions@gmail.com"

# Add to ssh-agent
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519

# Copy public key
cat ~/.ssh/id_ed25519.pub

# Add to GitHub → Settings → SSH and GPG keys
git remote set-url origin git@github.com:datascubesolutions/groot-frontend.git
git push -u origin main
```

## Push All Branches

After authentication, push all branches:

```bash
git push -u origin main
git push -u origin develop
git push -u origin production
```

## Repository Description

After pushing, update repository description on GitHub:
- Go to repository → Settings → General
- Description: "Enterprise-grade Next.js frontend with React 19, Tailwind CSS, and CI/CD"
- Website: (your production URL)
- Topics: `nextjs`, `react`, `tailwindcss`, `typescript`, `vercel`, `ci-cd`
