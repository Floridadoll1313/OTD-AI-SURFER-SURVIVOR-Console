import { Router } from 'express';

const router = Router();

router.post('/stripe/webhook', (req, res) => {
  // Render requires raw body for Stripe
  res.send({ received: true });
});

export default router;