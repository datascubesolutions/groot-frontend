# Contributing to Groot Frontend

Thank you for your interest in contributing to Groot! This document provides guidelines and instructions for contributing.

## 🚀 Getting Started

1. **Fork the repository**
2. **Clone your fork**: `git clone https://github.com/your-username/groot-frontend.git`
3. **Install dependencies**: `npm install`
4. **Create a branch**: `git checkout -b feature/your-feature-name`

## 📋 Development Workflow

### Branch Strategy

- `main` - Production-ready code
- `develop` - Integration branch for features
- `feature/*` - New features
- `fix/*` - Bug fixes
- `docs/*` - Documentation updates

### Code Standards

#### TypeScript/JavaScript

- Use TypeScript for new files
- Follow ESLint rules (run `npm run lint`)
- Format code with Prettier (run `npm run format`)
- Write meaningful variable and function names
- Add JSDoc comments for complex functions

#### Component Guidelines

- Use functional components with hooks
- Follow the component structure:
  ```jsx
  // Imports
  // Types/Interfaces
  // Component
  // Exports
  ```
- Keep components focused and single-purpose
- Use TypeScript for props when possible

#### Styling

- Use Tailwind CSS utility classes
- Follow the design system tokens
- Ensure responsive design (mobile-first)
- Test in multiple browsers

### Testing

- Write tests for new components
- Aim for >70% code coverage
- Run tests before committing: `npm run test`
- Test in multiple browsers/devices

### Commit Messages

Follow conventional commits:

```
type(scope): subject

body (optional)

footer (optional)
```

Types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation
- `style`: Formatting
- `refactor`: Code refactoring
- `test`: Adding tests
- `chore`: Maintenance

Example:
```
feat(ui): add new Card component

- Added Card, CardHeader, CardContent components
- Includes variants and responsive design
- Added tests with 85% coverage
```

## 🧪 Testing

### Unit Tests
```bash
npm run test
npm run test:watch
npm run test:coverage
```

### E2E Tests
```bash
npm run test:e2e
```

### Manual Testing Checklist

- [ ] Test in Chrome, Firefox, Safari
- [ ] Test on mobile devices
- [ ] Test accessibility (keyboard navigation, screen readers)
- [ ] Test with slow network (throttling)
- [ ] Verify no console errors

## 📝 Pull Request Process

1. **Update documentation** if needed
2. **Add tests** for new features
3. **Ensure all tests pass**
4. **Update CHANGELOG.md** with your changes
5. **Create pull request** to `develop` branch
6. **Wait for code review**
7. **Address review comments**
8. **Squash commits** if requested

### PR Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Unit tests added/updated
- [ ] E2E tests added/updated
- [ ] Manual testing completed

## Screenshots (if applicable)
Add screenshots here

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Comments added for complex code
- [ ] Documentation updated
- [ ] No new warnings generated
- [ ] Tests pass locally
```

## 🐛 Reporting Bugs

Use GitHub Issues with:
- Clear title and description
- Steps to reproduce
- Expected vs actual behavior
- Environment (browser, OS, version)
- Screenshots if applicable

## 💡 Suggesting Features

Use GitHub Issues with:
- Clear description of the feature
- Use case/justification
- Potential implementation approach
- Examples if applicable

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Testing Library](https://testing-library.com)

## 🤝 Code of Conduct

- Be respectful and inclusive
- Welcome newcomers
- Accept constructive criticism
- Focus on what's best for the project

## 📧 Questions?

Feel free to open an issue or contact the maintainers.

Thank you for contributing! 🎉
