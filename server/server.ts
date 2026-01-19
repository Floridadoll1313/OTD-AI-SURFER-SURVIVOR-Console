import express from 'express';
import cors from 'cors';
import path from 'path';

const app = express();
app.use(cors());
app.use(express.json());

// Choose ONE homepage:
import homepageRouter from './homepage-cinematic';
// import homepageRouter from './homepage-basic';
// import homepageRouter from './homepage-serve-react';

import dashboardRouter from './dashboard';
import stripeWebhookRouter from './stripe-webhook';
import survivorRouter from './survivor-island';
import surfboardRouter from './surfboards';
import healthRouter from './health';
import notFoundRouter from './not-found';
import errorHandler from './error-handler';

// Mount routes
app.use('/', homepageRouter);
app.use('/', dashboardRouter);
app.use('/', stripeWebhookRouter);
app.use('/', survivorRouter);
app.use('/', surfboardRouter);
app.use('/', healthRouter);

// 404 + error handler
app.use(notFoundRouter);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🌊 OTD AI Surfer Survivor Console running on port ${PORT}`);
});