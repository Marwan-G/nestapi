# Development Guide

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- MySQL (v8.0 or higher)
- npm or yarn

### Local Development Setup

1. **Clone and install**
```bash
git clone <your-repo-url>
cd nestapi
npm install
```

2. **Database setup**
```bash
# Start MySQL service
brew services start mysql  # macOS
# or
sudo service mysql start   # Linux

# Create database
mysql -u root -e "CREATE DATABASE IF NOT EXISTS \`nest-test\`;"
```

3. **Environment configuration**
```bash
# Create .env file
echo "NODE_ENV=development" > .env
```

4. **Start development server**
```bash
npm run start:dev
```

## Project Architecture

### Module Structure
```
src/
├── app.module.ts           # Root module
├── main.ts                # Application bootstrap
├── payment/               # Payment feature
│   ├── dto/              # Data Transfer Objects
│   ├── entities/         # Database entities
│   ├── payment.controller.ts
│   ├── payment.service.ts
│   └── payment.module.ts
└── booking/              # Booking feature
    ├── booking.controller.ts
    ├── booking.service.ts
    └── booking.module.ts
```

### Key Concepts

#### Controllers
- Handle HTTP requests
- Route requests to services
- Return HTTP responses

#### Services
- Contain business logic
- Handle database operations
- Can be injected into controllers

#### DTOs (Data Transfer Objects)
- Define data structure for requests
- Include validation rules
- Type-safe data transfer

#### Entities
- Define database table structure
- Map to database tables
- Include relationships

## Database Management

### Development Mode
- `synchronize: true` - Auto-sync schema
- Changes to entities automatically update database
- **Warning**: Don't use in production!

### Production Mode
- `synchronize: false` - Use migrations
- Manual schema changes via migrations
- Safe for production data

### Migration Workflow
```bash
# 1. Change your entity
# 2. Generate migration
npx typeorm migration:generate -d data-source.ts src/migrations/YourMigrationName

# 3. Run migration
npx typeorm migration:run -d data-source.ts

# 4. Revert if needed
npx typeorm migration:revert -d data-source.ts
```

## Validation

### Using class-validator
```typescript
export class CreatePaymentDto {
  @IsString()
  @IsNotEmpty()
  currency: string;

  @IsNumber()
  @IsNotEmpty()
  amount: number;
}
```

### Validation Decorators
- `@IsString()` - Must be string
- `@IsNumber()` - Must be number
- `@IsNotEmpty()` - Cannot be empty
- `@IsEmail()` - Must be valid email
- `@Length(min, max)` - String length validation

## Error Handling

### HTTP Exceptions
```typescript
// In service
if (!existingPayment) {
  throw new NotFoundException(`Payment with id ${id} not found`);
}
```

### Global Exception Filter
- Automatically catches exceptions
- Returns proper HTTP status codes
- Formats error responses

## Testing

### Running Tests
```bash
# Unit tests
npm run test

# E2E tests
npm run test:e2e

# Test coverage
npm run test:cov
```

### Test Structure
```
test/
├── app.e2e-spec.ts        # E2E tests
└── jest-e2e.json          # E2E test config

src/
└── payment/
    └── payment.service.spec.ts  # Unit tests
```

## Code Quality

### Linting
```bash
# Check for linting errors
npm run lint

# Fix linting errors
npm run lint --fix
```

### Formatting
```bash
# Format code
npm run format
```

## Environment Variables

### Development
```bash
NODE_ENV=development
DB_HOST=127.0.0.1
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=
DB_DATABASE=nest-test
```

### Production
```bash
NODE_ENV=production
DB_HOST=your-production-host
DB_PORT=3306
DB_USERNAME=your-username
DB_PASSWORD=your-secure-password
DB_DATABASE=your-production-db
```

## Best Practices

### 1. Service Layer
- Keep controllers thin
- Put business logic in services
- Use dependency injection

### 2. Error Handling
- Use proper HTTP status codes
- Provide meaningful error messages
- Log errors appropriately

### 3. Validation
- Validate all input data
- Use DTOs for type safety
- Provide clear validation messages

### 4. Database
- Use transactions for complex operations
- Handle database errors gracefully
- Use proper indexing

### 5. Security
- Validate all inputs
- Use environment variables for secrets
- Implement proper authentication (future)

## Common Issues

### Database Connection
```bash
# Check if MySQL is running
brew services list | grep mysql

# Check port usage
lsof -i :3306
```

### Port Already in Use
```bash
# Find process using port 3000
lsof -ti:3000

# Kill process
kill -9 $(lsof -ti:3000)
```

### TypeORM Issues
- Check database connection
- Verify entity imports
- Check migration files

## Debugging

### Enable Logging
```typescript
// In app.module.ts
logging: process.env.NODE_ENV === 'development'
```

### Database Queries
- SQL queries logged in development
- Use TypeORM query builder for complex queries
- Monitor query performance

## Deployment

### Build for Production
```bash
npm run build
```

### Environment Setup
- Set production environment variables
- Configure database connection
- Set up reverse proxy (nginx)

### Docker (Optional)
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY dist ./dist
CMD ["node", "dist/main"]
```

## Contributing

1. Follow the existing code style
2. Add tests for new features
3. Update documentation
4. Use meaningful commit messages
5. Create pull requests for changes
