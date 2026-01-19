import { Router } from 'express';

const router = Router();

router.use((req, res) => {
  res.status(404).send({
    error: "Route Not Found",
    message: "🌑 You drifted beyond the mapped tides.",
    suggestion: "Return to the Console and recalibrate your compass."
  });
});

export default router;