import { Router } from "express";
import { adminContactController, deleteContactById } from "../../controllers/Admin/admin-contactController.js";
import { authorize } from "../../middlewares/auth-middleware.js";
import { adminCheck } from "../../middlewares/admin-middleware.js";

const router = Router();
 
router.get("/contacts",authorize,adminCheck,adminContactController)
router.delete("/contacts/:id",authorize,adminCheck,deleteContactById)
export const adminContactRouter = router; 
