import { Router } from 'express';
const router = Router();

router.get('/status', (req, res) => {
  res.json({ ok: true, status: 'Game backend connected' });
});

export default router;
app.use('/stripe', stripeRoutes);
