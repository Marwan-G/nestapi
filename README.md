# NestJS REST API Project Created For People looking to learn Nestjs

#Level: Beginner 

A comprehensive NestJS REST API project demonstrating best practices for building scalable backend applications with TypeScript, TypeORM, and MySQL.

## 🚀 Features

- **RESTful API** with full CRUD operations
- **TypeORM Integration** with MySQL database
- **Input Validation** using class-validator
- **Error Handling** with proper HTTP status codes
- **Environment Configuration** for development and production
- **Database Migrations** support
- **Clean Architecture** with services, controllers, and DTOs

## 📋 API Endpoints

### Payment Management
- `POST /payment` - Create a new payment
- `GET /payment` - Get all payments
- `GET /payment/:id` - Get payment by ID
- `PATCH /payment/:id` - Update payment
- `DELETE /payment/:id` - Delete payment

### Booking Management
- `POST /booking/reserve` - Reserve a booking

## 🛠️ Tech Stack

- **Framework**: NestJS
- **Database**: MySQL
- **ORM**: TypeORM
- **Validation**: class-validator
- **Language**: TypeScript
- **Package Manager**: npm

## 📦 Installation

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd nestapi
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
# Create .env file
NODE_ENV=development
DB_HOST=127.0.0.1
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=
DB_DATABASE=nest-test
```

4. **Set up MySQL database**
```bash
# Create database
mysql -u root -e "CREATE DATABASE IF NOT EXISTS \`nest-test\`;"
```

5. **Start the application**
```bash
# Development mode
npm run start:dev

# Production mode
npm run start:prod
```

## 🗄️ Database Schema

### Payment Entity
```typescript
{
  id: number (Primary Key, Auto Generated)
  currency: string (nullable)
  amount: number (nullable)
  isActive: boolean (default: true, nullable)
}
```

## 🔧 Configuration

### Development vs Production

**Development Mode:**
- `synchronize: true` - Auto-sync database schema
- `logging: true` - Show SQL queries
- Hot reload enabled

**Production Mode:**
- `synchronize: false` - Use migrations instead
- `logging: false` - Clean logs
- Optimized for performance

## 📝 API Usage Examples

### Create Payment
```bash
curl -X POST http://localhost:3000/payment \
  -H "Content-Type: application/json" \
  -d '{
    "currency": "USD",
    "amount": 100
  }'
```

### Get All Payments
```bash
curl http://localhost:3000/payment
```

### Update Payment
```bash
curl -X PATCH http://localhost:3000/payment/1 \
  -H "Content-Type: application/json" \
  -d '{
    "currency": "EUR",
    "amount": 150
  }'
```

### Delete Payment
```bash
curl -X DELETE http://localhost:3000/payment/1
```

## 🏗️ Project Structure

```
src/
├── app.module.ts              # Main application module
├── main.ts                   # Application entry point
├── payment/                  # Payment feature module
│   ├── dto/                  # Data Transfer Objects
│   │   ├── create-payment.dto.ts
│   │   └── update-payment.dto.ts
│   ├── entities/             # Database entities
│   │   └── payment.entity.ts
│   ├── payment.controller.ts # Payment endpoints
│   ├── payment.service.ts    # Payment business logic
│   └── payment.module.ts    # Payment module
└── booking/                  # Booking feature module
    ├── booking.controller.ts
    ├── booking.service.ts
    └── booking.module.ts
```

## 🔒 Validation & Error Handling

### Input Validation
- **Required fields**: currency, amount
- **Data types**: string, number validation
- **Custom error messages** for validation failures

### Error Responses
- **404 Not Found**: When resource doesn't exist
- **400 Bad Request**: Validation errors
- **500 Internal Server Error**: Server errors

## 🚀 Deployment

### Environment Variables
```bash
NODE_ENV=production
DB_HOST=your-db-host
DB_PORT=3306
DB_USERNAME=your-username
DB_PASSWORD=your-password
DB_DATABASE=your-database
```

### Production Build
```bash
npm run build
npm run start:prod
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

If you encounter any issues or have questions, please open an issue on GitHub.

---

**Happy Coding! 🎉**