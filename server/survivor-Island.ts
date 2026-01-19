import { Router } from 'express';

const router = Router();

router.get('/survivor', (req, res) => {
  res.send({
    island: "Survivor Island",
    challenge: "Ride the wave before 9 AM",
    reward: "Streak +1",
    status: "active"
  });
});

export default router;