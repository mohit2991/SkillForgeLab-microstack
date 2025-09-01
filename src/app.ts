import express, { Request, Response } from "express";

const app = express();

app.use(express.json());

app.use(express.urlencoded());

app.get("/health", (req: Request, res: Response) => {
    res.status(200).json({ status: "ok", message: "Server is healthy 🚀" });
})

export default app;