# AI-Application Full-Stack Project

## Project Structure

```
AI-Application/
├── frontend/         # React app (Vite)
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── About.jsx
│   │   │   └── Contact.jsx
│   │   └── App.jsx
│   ├── .env.example
│   └── ...
├── backend/          # Node.js + Express API
│   ├── controllers/
│   │   └── homeController.js
│   ├── middlewares/
│   │   └── logger.js
│   ├── routes/
│   │   └── index.js
│   ├── server.js
│   ├── package.json
│   ├── .env.example
│   └── ...
└── README.md         # Project instructions
```

## Getting Started

### Prerequisites

- Node.js (latest LTS recommended)
- npm

### 1. Install Dependencies

#### Frontend

```
cd frontend
npm install
```

#### Backend

```
cd backend
npm install
```

### 2. Environment Variables

- Copy `.env.example` to `.env` in both `frontend` and `backend` folders and update values as needed.

### 3. Running the Applications

#### Backend (API Server)

```
cd backend
npm run dev
```

#### Frontend (React App)

```
cd frontend
npm run dev
```

### 4. Connecting Frontend and Backend

- The frontend uses `VITE_API_URL` from its `.env` to connect to the backend API.
- Make sure the backend is running and the API URL matches the backend server address.

## Best Practices

- Backend code is organized into routes, controllers, and middlewares for scalability.
- Frontend uses React Router for navigation and separates pages for maintainability.
- Use environment variables for configuration and secrets.

## Example API Endpoint

- `GET /api/` returns a welcome message.
- `GET /api/status` returns API status and timestamp.

---

Feel free to extend this starter for your production needs!
