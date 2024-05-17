import express, { Application, Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';

// Create Express application
const app: Application = express();

// Middleware to parse incoming JSON requests
app.use(bodyParser.json());

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal server error' });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
