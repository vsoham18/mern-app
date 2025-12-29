import { Router } from "express";
import { authorize } from "../../middlewares/auth-middleware.js";
import { adminCheck } from "../../middlewares/admin-middleware.js";
import { adminController } from "../../controllers/Admin/admin-controller.js";

const adminDashboardRouter = Router();
adminDashboardRouter.get("/", authorize, adminCheck, adminController)

export default adminDashboardRouter; 