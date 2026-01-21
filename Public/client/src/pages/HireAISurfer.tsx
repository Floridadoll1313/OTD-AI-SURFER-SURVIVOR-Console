import React from "react";import { useLocation } from "wouter";
import { useLocation } from "wouter";
export default function HireAISurfer() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#f4f9fb", minHeight: "100vh", color: "#0a1f2f" }}>
      <header style={{ background: "#0a1f2f", color: "white", padding: "2rem", textAlign: "center" }}>
        <h1 style={{ margin: 0, fontSize: "2.4rem" }}>Hire AI Surfer</h1>
        <p>Fast Digital Services • Same‑Day Delivery • Phone‑Powered Creativity</p>/hire-ai-surfer
      </header>
{success && (
  <div style={{
    background: "#d1fae5",
    color: "#065f46",
    padding: "1rem",
    borderRadius: "8px",
    margin: "1rem 0",
    fontWeight: "bold"
  }}>
    Payment received! Send your task details below.
  </div>{success && (
  <form
    action="https://formspree.io/f/your-form-id"
    method="POST"
    style={{
      background: "white",
      padding: "1.5rem",
      borderRadius: "8px",
      boxShadow: "0 0 10px rgba(0,0,0,0.1)",
      marginTop: "1rem"
    }}
  >
    <label style={{ fontWeight: "bold" }}>Describe your task:</label>
    <textarea
      name="task"
      required
      placeholder="Tell me what you need done..."
      style={{
        width: "100%",
        height: "120px",
        marginTop: "0.5rem",
        padding: "0.8rem",
        borderRadius: "6px",
        border: "1px solid #ccc"
      }}
    />

    <label style={{ fontWeight: "bold", marginTop: "1rem", display: "block" }}>
      Upload a file or screenshot (optional):
    </label>
    <input type="file" name="attachment" />

    <button
      type="submit"
      style={{
        marginTop: "1rem",
        background: "linear-gradient(to right, #00b4d8, #48cae4, #90e0ef)",
        color: "white",
        padding: "0.8rem 1.4rem",
        borderRadius: "6px",
        fontSize: "1.1rem",
        fontWeight: "bold",
        border: "none",
        cursor: "pointer",
        width: "100%"
      }}
    >
      Send Task
    </button>
  </form>
)}<stripe-buy-button
  buy-button-id="buy_btn_1SpBqh2YHhudmeE3t7uZlg4b"
  publishable-key="pk_live_51SRcVF2YHhudmeE3pyQMMIlPkoT1mCuZnN6YSsbusHwDLZuB0cQRsTOMxWaOTvb5VBXHI1nukzTURzxOKOF7WnyV00MGPGPtXK"
>
</stripe-buy-button>
)}

{canceled && (
  <div style={{
    background: "#fee2e2",
    color: "#991b1b",
    padding: "1rem",
    borderRadius: "8px",
    margin: "1rem 0",
    fontWeight: "bold"
  }}>
    Payment canceled. You can try again anytime.
  </div>
)}
      <div style={{ maxWidth: "800px", margin: "auto", padding: "2rem" }}>
        <p>
          Need something done quickly? I deliver fast, affordable digital services directly from my phone —
          powered by creativity, AI, and the mythic energy of the Ocean Tide Drop universe.
        </p>

        <p>Perfect for:</p>
        <ul>
          <li>Small businesses</li>
          <li>Creators</li>
          <li>Entrepreneurs</li>
          <li>Anyone who needs quick help</li>
        </ul>

        <h2>What I Offer</h2>
        <ul>
          <li>AI‑assisted writing</li>
          <li>Logo cleanup</li>
          <li>Social media captions</li>
          <li>Branding fixes</li>
          <li>Simple website edits</li>
          <li>Product descriptions</li>
          <li>Small design tasks</li>
          <li>Creative content</li>
          <li>Custom “AI Surfer” insights</li>
        </ul>

        <div style={{ background: "#e0f7ff", padding: "1.5rem", borderRadius: "8px", margin: "2rem 0", textAlign: "center", fontSize: "1.2rem", fontWeight: "bold" }}>
          Flat Rate: $15 per task  
          <br />
          <a 
            href="#" 
            style={{ 
              display: "inline-block",
              background: "#0077cc",
              color: "white",
              padding: "0.8rem 1.4rem",
              borderRadius: "6px",
              textDecoration: "none",
              fontSize: "1.1rem",
              marginTop: "1rem"
            }}
          >
            Pay Now
          </a>
        </div>

        <h2>Send Your Request</h2>
        <p>
          After payment, send your task details and any files or screenshots.  
          I’ll deliver your finished work the same day.
        </p>
      </div>

      <footer style={{ textAlign: "center", padding: "2rem", color: "#555" }}>
        Ocean Tide Drop • Mythic Digital Services
      </footer>
    </div>
  );
}