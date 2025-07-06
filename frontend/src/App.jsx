import React, { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({ name: "", location: "" });
  const [businessData, setBusinessData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.location.trim()) {
      setError("Please fill in both business name and location");
      return;
    }

    setLoading(true);
    setError("");

    // Simulate API call
    setTimeout(() => {
      setBusinessData({
        rating: 4.3,
        reviews: 127,
        headline: "Why Cake & Co is Mumbai's Sweetest Spot in 2025",
      });
      setLoading(false);
    }, 1000);
  };

  const handleRegenerateHeadline = async () => {
    if (!formData.name || !formData.location) return;
    setLoading(true);
    setError("");
    try {
      const response = await fetch("http://localhost:5000/regenerate-headline");
      if (!response.ok) throw new Error("Failed to regenerate headline");
      const data = await response.json();
      setBusinessData((prev) => ({
        ...prev,
        headline: data.headline,
      }));
    } catch (err) {
      setError("Error regenerating headline. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1 className="title">GrowthProAI Business Dashboard</h1>
      <div className="card">
        <h2>Enter Business Information</h2>
        <form onSubmit={handleSubmit} className="form">
          <label>
            Business Name
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="e.g., Cake & Co"
              required
            />
          </label>
          <label>
            Location
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              placeholder="e.g., Mumbai"
              required
            />
          </label>
          <button type="submit" disabled={loading}>
            {loading ? "Loading..." : "Get Business Data"}
          </button>
        </form>
        {error && <div className="error">{error}</div>}
      </div>
      {businessData && (
        <div className="card animate">
          <h2>Business Analytics</h2>
          <div className="stats">
            <div>
              <div className="stat-number">{businessData.rating} ⭐</div>
              <div className="stat-label">Google Rating</div>
            </div>
            <div>
              <div className="stat-number">{businessData.reviews}</div>
              <div className="stat-label">Reviews</div>
            </div>
            <div>
              <div className="stat-number">SEO</div>
              <div className="stat-label">Optimized</div>
            </div>
          </div>
          <div className="headline">
            <strong>Latest AI-Generated SEO Headline:</strong>
            <p>"{businessData.headline}"</p>
            <button onClick={handleRegenerateHeadline} disabled={loading} className="regenerate-btn">
              {loading ? "Regenerating..." : "Regenerate Headline"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;