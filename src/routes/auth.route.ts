import { Router } from "express";
import { createUserHandler } from "../controllers/auth.controller";
import validateResource from "../middlewares/validate.resource";
import { createUserSchema } from "../schemas/user.schema";

const router = Router();

router.post('/auth/register', validateResource(createUserSchema),  createUserHandler);
// router.post('/auth/login');
// router.post('/auth/refresh');

export default router;