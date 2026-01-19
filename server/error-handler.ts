import { Router } from 'express';

const router = Router();

router.use((err, req, res, next) => {
  console.error("Global Error:", err);

  res.status(500).send({
    error: "Internal Server Error",
    message: "🌪️ A rogue wave disrupted the system.",
    details: err.message
  });
});

export default router;