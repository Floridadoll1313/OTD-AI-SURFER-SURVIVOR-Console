import { Router } from 'express';

const router = Router();

router.get('/surfboards', (req, res) => {
  res.send({
    tiers: [
      { name: "Foam Board", price: 97 },
      { name: "Cruiser Board", price: 197 },
      { name: "Pro Board", price: 297 },
      { name: "Mythic Titan Board", price: 497 }
    ],
    mascot: "OTD AI Surfer"
  });
});

export default router;