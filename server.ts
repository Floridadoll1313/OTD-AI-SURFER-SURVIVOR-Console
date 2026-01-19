import express, { Request, Response, NextFunction } from 'express';
import path from 'path';
import homepageRouter from './homepage';

const app = express();

// Middleware Configuration
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// Serve static files from Public directory
app.use(express.static(path.join(__dirname, 'Public')));

// Security Headers
app.use((req: Request, res: Response, next: NextFunction) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  next();
});

// Request Logging Middleware
app.use((req: Request, res: Response, next: NextFunction) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${req.method} ${req.url}`);
  next();
});

// Routes
app.use('/', homepageRouter); // Use the homepage router

// Fallback route for dashboard (if not handled by homepageRouter)
app.get('/dashboard', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, 'Public', 'dashboard.html'));
});

// Health check endpoint
app.get('/health', (req: Request, res: Response) => {
  res.status(200).json({ 
    status: 'ok', 
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// 404 Handler - Must be after all routes
app.use((req: Request, res: Response) => {
  res.status(404).json({ 
    error: 'Not Found',
    message: `Route ${req.url} not found`,
    timestamp: new Date().toISOString()
  });
});

// Global Error Handler - Must be last
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error('Error:', err.stack);
  res.status(500).json({ 
    error: 'Internal Server Error',
    message: process.env.NODE_ENV === 'development' ? err.message : 'Something went wrong',
    timestamp: new Date().toISOString()
  });
});

// Server Configuration
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '0.0.0.0';

const server = app.listen(PORT, () => {
  console.log('=================================');
  console.log(`🚀 Server started successfully`);
  console.log(`📍 Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`🌐 URL: http://localhost:${PORT}`);
  console.log(`⏰ Started at: ${new Date().toISOString()}`);
  console.log('=================================');
});

// Graceful Shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM signal received: closing HTTP server');
  server.close(() => {
    console.log('HTTP server closed');
    process.exit(0);
  });
});

process.on('SIGINT', () => {
  console.log('\nSIGINT signal received: closing HTTP server');
  server.close(() => {
    console.log('HTTP server closed');
    process.exit(0);
  });
});

// Handle uncaught exceptions
process.on('uncaughtException', (err: Error) => {
  console.error('Uncaught Exception:', err);
  process.exit(1);
});

process.on('unhandledRejection', (reason: any) => {
  console.error('Unhandled Rejection:', reason);
  process.exit(1);
});

export default app;