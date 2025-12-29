import { Router } from "express";
import { deleteUserController, editUserController, getAllUsers, getUserByIdController } from "../../controllers/Admin/admin-users-controllers.js";
import { authorize } from "../../middlewares/auth-middleware.js";
import { adminCheck } from "../../middlewares/admin-middleware.js";
import { validate } from "../../middlewares/validate-middleware.js";
import { signupSchema } from "../../validators/auth-validator.js";

const userRouter = Router();

userRouter.get("/users",authorize,adminCheck, getAllUsers);
userRouter.delete("/users/delete/:Id",authorize,adminCheck, deleteUserController);
userRouter.patch("/users/edit/:Id",authorize,adminCheck,validate(signupSchema), editUserController);
userRouter.get("/users/:Id",authorize,adminCheck, getUserByIdController);
export default userRouter;  