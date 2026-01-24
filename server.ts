import express from "express";
import cors from "cors";
import Stripe from "stripe";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Basic health check route
app.get("/", (req, res) => {
  res.send("OTD AI Surfer Survivor Console server is running!");
});

// Render provides PORT via environment variable
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
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

