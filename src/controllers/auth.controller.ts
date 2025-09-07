import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { registerUserService } from "../services/users.service";

export const createUserHandler = async (req: Request, res: Response) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ message: "All fields required" });
    }

    try {
        const hashPassword = await bcrypt.hash(password, 10);

        const user = await registerUserService(name, email, password);
        res.status(201).json({ user });

    } catch (err: any) {
        if (err.message.includes("exists")) {
            return res.status(400).json({ message: err.message });
        }
        res.status(500).json({ message: "Server error" });
    }
}