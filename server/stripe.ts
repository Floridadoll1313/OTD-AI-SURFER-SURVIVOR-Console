import { Router } from 'express';
const router = Router();

router.post('/webhook', express.raw({ type: 'application/json' }), (req, res) => {
  // Stripe signature verification goes here
  res.sendStatus(200);
});

export default router;
app.use('/stripe', stripeRoutes);
