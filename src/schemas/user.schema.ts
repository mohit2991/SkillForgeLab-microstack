import { z, AnyZodObject } from "zod/v3";

export const createUserSchema: AnyZodObject = z.object({
    body: z.object({
        name: z.string().min(1, "Name is required"),
        email: z.string().email("Invalid email format"),
        password: z.string().min(8, "Password should be at least 8 characters long"),
    }),
    params: z.object({}).optional(),
    query: z.object({}).optional(),
});

export type CreateUserInput = z.infer<typeof createUserSchema>["body"];
