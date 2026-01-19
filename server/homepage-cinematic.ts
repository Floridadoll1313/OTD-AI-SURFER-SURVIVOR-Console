import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.send({
    realm: "Ocean Tide Drop",
    status: "active",
    message: "🌊 The tide rises. The Console awakens.",
    description: "Your AI Surfer Survivor Core is online. Systems calibrated. Waves detected. Prepare to ride.",
    surfer: "OTD AI Surfer",
    version: "1.0.0",
    timestamp: new Date().toISOString()
  });
});

export default router;