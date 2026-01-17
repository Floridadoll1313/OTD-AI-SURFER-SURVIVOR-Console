
`js
import express from "express";
import Stripe from "stripe";
import bodyParser from "body-parser";

const app = express();

// Replace with your actual webhook secret from Stripe Dashboard
const endpointSecret = "whsec_XXXXXXXXXXXXXXXXXXXXXXXX";

const stripe = new Stripe("sktestXXXXXXXXXXXXXXXXXXXX", {
  apiVersion: "2023-10-16",
});

// Stripe requires raw body for signature verification
app.post(
  "/webhook",
  bodyParser.raw({ type: "application/json" }),
  (req, res) => {
    const sig = req.headers["stripe-signature"];

    let event;

    try {
      event = stripe.webhooks.constructEvent(
        req.body,
        sig,
        endpointSecret
      );
    } catch (err) {
      console.error("❌ Webhook signature verification failed:", err.message);
      return res.status(400).send(Webhook Error: ${err.message});
    }

    // Handle event types
    switch (event.type) {
      case "checkout.session.completed":
        console.log("🏄 Checkout completed:", event.data.object.id);
        break;

      case "customer.subscription.created":
        console.log("🌊 Subscription created:", event.data.object.id);
        break;

      case "customer.subscription.updated":
        console.log("🔄 Subscription updated:", event.data.object.id);
        break;

      case "invoice.payment_failed":
        console.log("⚠️ Payment failed:", event.data.object.id);
        break;

      default:
        console.log("📡 Unhandled event:", event.type);
    }

    res.json({ received: true });
  }
);

app.listen(3000, () => {
  console.log("🌊 Webhook server running on port 3000");
});
