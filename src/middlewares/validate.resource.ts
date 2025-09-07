import { AnyZodObject, ZodError, z } from "zod/v3";
import { Request, Response, NextFunction } from "express";

const validateResource = (schema: AnyZodObject | z.ZodEffects<AnyZodObject>) =>
    (req: Request, res: Response, next: NextFunction) => {
        try {
            schema.parse({
                body: req.body,
                params: req.params,
                query: req.query,
            });
            next();
        } catch (e) {
            if (e instanceof ZodError) {
                return res.status(400).json({ errors: e.errors });
            }
            next(e);
        }
    };

export default validateResource;
