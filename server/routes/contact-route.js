import { Router } from "express"
import { ContactController } from "../controllers/contact-controller.js";
const router = Router();
router.post("/contact", ContactController)
export const contactRouter = router; 