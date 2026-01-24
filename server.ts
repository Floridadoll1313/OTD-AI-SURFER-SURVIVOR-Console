import Stripe from "stripe";
import express from "express";
import cors from "cors";

// Initialize Stripe
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Basic health check route
app.get("/", (req, res) => {
  res.send("OTD AI Surfer Survivor Console server is running!");
});

// Stripe test route (ONLY ONE)
app.get("/stripe-test", async (req, res) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 100,
      currency: "usd",
    });
    res.json({ ok: true, id: paymentIntent.id });
  } catch (err: any) {
    res.json({ ok: false, error: err.message });
  }
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
