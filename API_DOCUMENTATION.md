# API Documentation

## Base URL
```
http://localhost:3000
```

## Authentication
Currently, no authentication is required for API endpoints.

## Response Format

### Success Response
```json
{
  "data": {...},
  "message": "Success message"
}
```

### Error Response
```json
{
  "statusCode": 400,
  "message": "Error description",
  "error": "Bad Request"
}
```

## Payment Endpoints

### Create Payment
**POST** `/payment`

Creates a new payment record.

**Request Body:**
```json
{
  "currency": "USD",
  "amount": 100
}
```

**Response:**
```json
{
  "message": "object added",
  "res": {
    "id": 1,
    "currency": "USD",
    "amount": 100,
    "isActive": true
  }
}
```

**Validation Rules:**
- `currency`: Required, string
- `amount`: Required, number

### Get All Payments
**GET** `/payment`

Retrieves all payment records.

**Response:**
```json
[
  {
    "id": 1,
    "currency": "USD",
    "amount": 100,
    "isActive": true
  },
  {
    "id": 2,
    "currency": "EUR",
    "amount": 200,
    "isActive": true
  }
]
```

### Get Payment by ID
**GET** `/payment/:id`

Retrieves a specific payment by ID.

**Parameters:**
- `id` (number): Payment ID

**Response:**
```json
{
  "id": 1,
  "currency": "USD",
  "amount": 100,
  "isActive": true
}
```

**Error Responses:**
- `404 Not Found`: Payment with specified ID not found

### Update Payment
**PATCH** `/payment/:id`

Updates an existing payment record.

**Parameters:**
- `id` (number): Payment ID

**Request Body:**
```json
{
  "currency": "EUR",
  "amount": 150
}
```

**Response:**
```json
{
  "id": 1,
  "currency": "EUR",
  "amount": 150,
  "isActive": true
}
```

**Error Responses:**
- `404 Not Found`: Payment with specified ID not found
- `400 Bad Request`: Validation errors

### Delete Payment
**DELETE** `/payment/:id`

Deletes a payment record.

**Parameters:**
- `id` (number): Payment ID

**Response:**
```json
{
  "message": "Payment with id 1 has been deleted successfully"
}
```

**Error Responses:**
- `404 Not Found`: Payment with specified ID not found

## Booking Endpoints

### Reserve Booking
**POST** `/booking/reserve`

Creates a new booking reservation.

**Response:**
```json
{
  "message": "Booking reserved successfully"
}
```

## Error Codes

| Status Code | Description |
|-------------|-------------|
| 200 | OK - Request successful |
| 201 | Created - Resource created successfully |
| 400 | Bad Request - Invalid input data |
| 404 | Not Found - Resource not found |
| 500 | Internal Server Error - Server error |

## Rate Limiting
Currently, no rate limiting is implemented.

## CORS
CORS is enabled for all origins in development mode.
