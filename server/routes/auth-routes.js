import { Router } from "express";
import { authController } from "../controllers/auth-controllers.js";
import { validate } from "../middlewares/validate-middleware.js";
import { loginSchema, signupSchema } from "../validators/auth-validator.js";
const router = Router();
   
router.get("/",authController.Home)
router.route("/api/auth/register").post(validate(signupSchema),authController.Register)
router.post("/api/auth/login",validate(loginSchema),authController.Login)
export const authRouter= router;