import { Router } from 'express';
import path from 'path';

const router = Router();
const clientPath = path.join(__dirname, '..', 'dist');

router.get('/', (req, res) => {
  res.sendFile(path.join(clientPath, 'index.html'));
});

export default router;