# Contributing to NestJS REST API

Thank you for your interest in contributing to this project! This document provides guidelines for contributing to the NestJS REST API project.

## 🤝 How to Contribute

### Reporting Issues
- Use the GitHub issue tracker
- Provide clear description of the problem
- Include steps to reproduce
- Add relevant code snippets

### Suggesting Enhancements
- Open a discussion or issue
- Describe the feature request
- Explain the use case
- Consider implementation complexity

### Code Contributions
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📋 Development Guidelines

### Code Style
- Follow existing code patterns
- Use TypeScript best practices
- Write clean, readable code
- Add comments for complex logic

### Testing
- Add unit tests for new features
- Update existing tests if needed
- Ensure all tests pass
- Test edge cases

### Documentation
- Update README if needed
- Add JSDoc comments
- Update API documentation
- Include examples

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- MySQL 8.0+
- Git

### Setup
```bash
# Fork and clone
git clone https://github.com/yourusername/nestjs-rest-api.git
cd nestjs-rest-api

# Install dependencies
npm install

# Set up environment
cp .env.example .env

# Start development server
npm run start:dev
```

## 📝 Pull Request Process

### Before Submitting
- [ ] Code follows project style
- [ ] Self-review completed
- [ ] Tests added/updated
- [ ] Documentation updated
- [ ] No breaking changes

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
- [ ] Unit tests pass
- [ ] Integration tests pass
- [ ] Manual testing completed

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Documentation updated
```

## 🏷️ Issue Labels

### Bug Reports
- `bug` - Something isn't working
- `high-priority` - Critical issue
- `low-priority` - Minor issue

### Feature Requests
- `enhancement` - New feature or improvement
- `good-first-issue` - Good for newcomers
- `help-wanted` - Extra attention needed

### Documentation
- `documentation` - Documentation improvements
- `question` - Further information requested

## 🎯 Areas for Contribution

### High Priority
- Authentication implementation
- API rate limiting
- Input sanitization
- Error logging

### Medium Priority
- Additional validation rules
- Database optimization
- API documentation
- Test coverage

### Low Priority
- Code refactoring
- Performance improvements
- Additional examples
- Documentation updates

## 📚 Learning Resources

### NestJS
- [Official Documentation](https://docs.nestjs.com/)
- [TypeScript Guide](https://www.typescriptlang.org/docs/)
- [Node.js Best Practices](https://github.com/goldbergyoni/nodebestpractices)

### TypeORM
- [TypeORM Documentation](https://typeorm.io/)
- [MySQL Best Practices](https://dev.mysql.com/doc/)

## 🛠️ Development Tools

### Recommended Extensions (VS Code)
- TypeScript and JavaScript Language Features
- ESLint
- Prettier
- REST Client
- MySQL

### Useful Commands
```bash
# Development
npm run start:dev

# Testing
npm run test
npm run test:e2e

# Code Quality
npm run lint
npm run format

# Database
npm run migration:generate
npm run migration:run
```

## 📞 Getting Help

### Community
- GitHub Discussions
- Stack Overflow
- NestJS Discord

### Maintainers
- @yourusername - Project maintainer
- Response time: Usually within 24 hours

## 📄 License

By contributing, you agree that your contributions will be licensed under the MIT License.

## 🙏 Recognition

Contributors will be recognized in:
- README.md contributors section
- Release notes
- Project documentation

Thank you for contributing to this project! 🎉
