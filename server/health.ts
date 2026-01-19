import { Router } from 'express';

const router = Router();

router.get('/health', (req, res) => {
  res.send({ status: "healthy", uptime: process.uptime() });
});

export default router;