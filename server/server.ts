import express from 'express';
import path from 'path';
import homepageRouter from './server/homepage';

const app = express();

// Serve static files from public folder
app.use(express.static('public'));











// Use your homepage router
app.use('/', homepageRouter);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
