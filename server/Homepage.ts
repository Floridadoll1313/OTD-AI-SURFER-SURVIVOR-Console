import { Router } from 'express';

const router = Router();

// Basic homepage route
router.get('/', (req, res) => {
  res.send({
    status: 'ok',
    message: 'OTD AI Surfer Survivor Console backend is running',
    timestamp: new Date().toISOString()
  });
});

export default router;