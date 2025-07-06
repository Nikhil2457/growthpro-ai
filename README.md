# GrowthProAI

A full-stack business analytics dashboard with a React frontend and Node.js/Express backend.

---

## Project Structure

```
root/
  backend/    # Node.js + Express API
  frontend/   # React app (with normal CSS)
```

---

## Backend Setup (Node.js/Express)

1. **Navigate to the backend folder:**
   ```sh
   cd backend
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Start the backend server:**
   ```sh
   npm start
   ```
   The backend will run on [http://localhost:5000](http://localhost:5000)

---

## Frontend Setup (React)

1. **Navigate to the frontend folder:**
   ```sh
   cd frontend
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Start the frontend development server:**
   ```sh
   npm start
   ```
   The frontend will run on [http://localhost:3000](http://localhost:3000) by default.

---

## Features
- Responsive, animated dashboard UI (no Tailwind, just CSS)
- Enter business name and location to simulate analytics
- Regenerate SEO headline (fetches from backend)

---

## Notes
- Make sure the backend is running before using the frontend for full functionality.
- You can customize the backend API endpoints as needed.

---

## License
MIT
