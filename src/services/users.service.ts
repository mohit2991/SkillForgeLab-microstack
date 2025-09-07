import bcrypt from "bcrypt";

import { createUser, findUserByEmail } from "../models/user.model";
import { CreateUserInput } from "../schemas/user.schema";

export const registerUserService = async (name: string, email: string, password: string) => {
    const existingUser = await findUserByEmail(email);
    if (existingUser) throw new Error("Email already exists");

    const hashedPassword = await bcrypt.hash(password, 10);
    return createUser(name, email, hashedPassword);
}