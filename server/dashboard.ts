import { Router } from 'express';

const router = Router();

router.get('/dashboard', (req, res) => {
  res.send({
    section: "Dashboard",
    status: "online",
    message: "Your Survivor Console dashboard is active.",
    wavesDetected: true,
    energyLevel: "high"
  });
});

export default router;