import { Router, Request, Response, NextFunction } from 'express';
import path from 'path';
import fs from 'fs';

const router = Router();

// Helper function to safely serve HTML files
const serveHTMLFile = (filename: string) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const filePath = path.join(__dirname, 'Public', filename);
    
    // Check if file exists before sending
    fs.access(filePath, fs.constants.F_OK, (err) => {
      if (err) {
        console.error(`File not found: ${filePath}`);
        return res.status(404).send(`
          <!DOCTYPE html>
          <html>
            <head>
              <title>404 - Not Found</title>
              <style>
                body { font-family: Arial, sans-serif; text-align: center; padding: 50px; }
                h1 { color: #e74c3c; }
              </style>
            </head>
            <body>
              <h1>404 - Page Not Found</h1>
              <p>The requested page "${filename}" could not be found.</p>
              <a href="/">Go back to home</a>
            </body>
          </html>
        `);
      }
      
      res.sendFile(filePath, (err) => {
        if (err) {
          console.error(`Error sending file: ${err.message}`);
          next(err);
        }
      });
    });
  };
};

// Routes
router.get('/', serveHTMLFile('index.html'));
router.get('/index', serveHTMLFile('index.html'));
router.get('/dashboard', serveHTMLFile('dashboard.html'));

// API endpoint example - get homepage info
router.get('/api/homepage', (req: Request, res: Response) => {
  res.json({
    title: 'OTD AI Surfer Survivor Console',
    version: '1.0.0',
    description: 'Welcome to the AI Surfer Survivor Console',
    timestamp: new Date().toISOString(),
  });
});

// Catch-all for undefined routes in this router
router.use('*', (req: Request, res: Response) => {
  res.status(404).json({
    error: 'Route not found in homepage router',
    path: req.originalUrl,
    timestamp: new Date().toISOString(),
  });
});

export default router;