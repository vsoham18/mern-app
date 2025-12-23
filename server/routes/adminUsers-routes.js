import { Router } from "express";
import { getAllUsers } from "../controllers/users-controllers.js";
import { authorize } from "../middlewares/auth-middleware.js";
import { adminCheck } from "../middlewares/admin-middleware.js";

const userRouter = Router();

userRouter.get("/users",authorize,adminCheck, getAllUsers);

export default userRouter;