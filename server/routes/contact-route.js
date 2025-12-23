import { Router } from "express"
import { ContactController, GetContactsController } from "../controllers/contact-controller.js";
import { authorize } from "../middlewares/auth-middleware.js";
const router = Router();
router.get("/contact",authorize,GetContactsController)
router.post("/contact", ContactController)
export const contactRouter = router;     