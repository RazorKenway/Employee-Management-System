# Employee Management System (EMS)

✅ **Data Validation**

- Client-side form validation
- Server-side input validation with express-validator
- Email uniqueness constraint (no duplicate emails)
- Error messages display on form and API errors

✅ **Persistent Storage**

- MongoDB Atlas cloud database integration
- Automatic timestamp tracking (createdAt, updatedAt)
- Data persists across page refreshes

## 📁 Project Structure

```
Employee Management System/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── EmployeeForm.jsx      # Add employee form
│   │   │   ├── EmployeeList.jsx      # Employee list display
│   │   │   ├── EmployeeCard.jsx      # Individual employee card
│   │   │   └── Sidebar.jsx           # Navigation sidebar
│   │   ├── services/
│   │   │   └── employeeService.js    # API communication
│   │   ├── App.jsx                   # Main app component
│   │   ├── main.jsx                  # React entry point
│   │   ├── index.css                 # Global styles
│   │   └── ...
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── .env                          # Frontend config
│
├── backend/
│   ├── config/
│   │   └── database.js               # MongoDB connection
│   ├── models/
│   │   └── Employee.js               # Employee schema
│   ├── controllers/
│   │   └── employeeController.js     # Business logic
│   ├── routes/
│   │   └── employees.js              # API routes
│   ├── middleware/
│   │   └── validators.js             # Validation & error handling
│   ├── server.js                     # Express server
│   ├── package.json
│   ├── .env                          # Backend config
│   └── .env.example                  # Config template
│
└── README.md                         # This file
```

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB Atlas account (free tier available)

### 1. Clone or Extract Project

```bash
cd "Employee Management System"
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create `.env` file with MongoDB Atlas credentials:

```
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster-name.mongodb.net/employee-management?retryWrites=true&w=majority
```

**Get MongoDB URI:**

1. Visit [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create free account
3. Create a cluster
4. Create a database user
5. Copy connection string and replace `username`, `password`, and `cluster-name`

Start backend server:

```bash
npm run dev
```

Expected output:

```
Database connected to MongoDB
Server running on port 5000
```

### 3. Frontend Setup

Open new terminal:

```bash
cd frontend
npm install
```

Create `.env` file:

```
VITE_API_BASE_URL=http://localhost:5000/api
```

Start frontend server:

```bash
npm run dev
```

Visit: **http://localhost:5173** or **http://localhost:5174**

## 📚 API Endpoints

All endpoints require `Content-Type: application/json`

### GET /api/employees

Get all employees

```bash
curl http://localhost:5000/api/employees
```

Response:

```json
{
  "success": true,
  "data": [
    {
      "_id": "507f1f77bcf86cd799439011",
      "name": "John Doe",
      "email": "john@example.com",
      "role": "Senior Developer",
      "createdAt": "2026-04-20T10:30:00Z",
      "updatedAt": "2026-04-20T10:30:00Z"
    }
  ]
}
```

### POST /api/employees

Create new employee

```bash
curl -X POST http://localhost:5000/api/employees \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Jane Smith",
    "email": "jane@example.com",
    "role": "Product Manager"
  }'
```

**Validation Rules:**

- `name`: Required, must not be empty
- `email`: Required, must be valid email format
- `role`: Required, must not be empty

Response (201 Created):

```json
{
  "success": true,
  "data": {
    "_id": "507f1f77bcf86cd799439012",
    "name": "Jane Smith",
    "email": "jane@example.com",
    "role": "Product Manager"
  }
}
```

### DELETE /api/employees/:id

Delete employee by ID

```bash
curl -X DELETE http://localhost:5000/api/employees/507f1f77bcf86cd799439011
```

Response (200 OK):

```json
{
  "success": true,
  "message": "Employee deleted successfully"
}
```

Error (404 Not Found):

```json
{
  "success": false,
  "message": "Employee not found"
}
```

## 🔐 Security Features

- **Email Uniqueness**: Database constraint prevents duplicate emails
- **Input Validation**: Server-side validation with express-validator
- **CORS**: Cross-origin requests properly configured
- **Environment Variables**: Sensitive data in .env
- **Error Handling**: Proper error messages without exposing server details
