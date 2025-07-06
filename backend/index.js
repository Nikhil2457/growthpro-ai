const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Simulated headlines
const headlines = [
  "Why Cake & Co is Mumbai's Sweetest Spot in 2025",
  "Discover the Best Cakes in Mumbai at Cake & Co",
  "Cake & Co: The Ultimate Destination for Dessert Lovers",
  "Mumbai's Hidden Gem: Cake & Co's Irresistible Treats",
  "How Cake & Co Became Mumbai's Top Bakery"
];

// POST /business-data
app.post('/business-data', (req, res) => {
  const { name, location } = req.body;
  // Simulate data
  const data = {
    rating: 4.3,
    reviews: 127,
    headline: headlines[0] // Always return the first for initial load
  };
  res.json(data);
});

// GET /regenerate-headline
app.get('/regenerate-headline', (req, res) => {
  // Randomly pick a headline
  const randomHeadline = headlines[Math.floor(Math.random() * headlines.length)];
  res.json({ headline: randomHeadline });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});