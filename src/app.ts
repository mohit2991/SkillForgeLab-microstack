import express, { NextFunction, Request, Response } from "express";
import authRouter from './routes/auth.route';

const app = express();

// Core middlewares
app.use(express.json());
app.use(express.urlencoded());

// Health check
app.get("/health", (req: Request, res: Response) => {
    res.status(200).json({ status: "ok", message: "Server is healthy 🚀" });
})

// Users
app.use('/api', authRouter);

// handle 404
app.use((_req, res) => res.status(404).json({ error: "Not Found" }));

app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
    // In prod you’d hide stack traces and use a logger
    res.status(500).json({ error: 'Internal server error', details: err.message });
})

export default app;