import { Router } from "express";
import { adminContactController } from "../controllers/admin-contactController.js";
import { authorize } from "../middlewares/auth-middleware.js";
import { adminCheck } from "../middlewares/admin-middleware.js";

const router = Router();

router.get("/contacts",authorize,adminCheck,adminContactController) 

export const adminContactRouter = router;
