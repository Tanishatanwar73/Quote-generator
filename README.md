# Quote Generator

A full-stack web application for creating and reading inspirational quotes, built with React, Tailwind CSS, Node.js, Express, and MongoDB.

## Features

- 🔐 User authentication (register / login) with JWT
- 📜 Browse all quotes (public)
- ✍️ Create and share quotes (authenticated users)
- 🗂️ Categorize quotes (Motivation, Life, Wisdom, etc.)
- 📱 Fully responsive design

## Tech Stack

| Layer     | Technology                        |
|-----------|-----------------------------------|
| Frontend  | React 19, Vite, Tailwind CSS v4   |
| Backend   | Node.js, Express                  |
| Database  | MongoDB (Mongoose)                |
| Auth      | JWT (jsonwebtoken), bcryptjs      |

## Project Structure

```
Quote-generator/
├── client/          # React + Tailwind CSS frontend
│   └── src/
│       ├── api/         # Axios instance
│       ├── components/  # Navbar, QuoteCard, ProtectedRoute
│       ├── context/     # AuthContext (JWT)
│       └── pages/       # Home, Login, Register, CreateQuote
└── server/          # Node.js + Express backend
    ├── middleware/  # JWT auth middleware
    ├── models/      # User, Quote (Mongoose)
    └── routes/      # /api/auth, /api/quotes
```

## Getting Started

### Prerequisites

- Node.js ≥ 18
- MongoDB (local or Atlas)

### 1. Clone the repository

```bash
git clone https://github.com/Tanishatanwar73/Quote-generator.git
cd Quote-generator
```

### 2. Set up the backend

```bash
cd server
cp .env.example .env        # Fill in MONGO_URI and JWT_SECRET
npm install
npm run dev                  # Starts on http://localhost:5000
```

### 3. Set up the frontend

```bash
cd client
npm install
npm run dev                  # Starts on http://localhost:5173
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## API Endpoints

| Method | Path               | Auth     | Description               |
|--------|--------------------|----------|---------------------------|
| POST   | /api/auth/register | No       | Register a new user       |
| POST   | /api/auth/login    | No       | Login and get JWT token   |
| GET    | /api/quotes        | No       | Fetch all quotes          |
| POST   | /api/quotes        | Required | Create a new quote        |
