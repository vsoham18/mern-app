import { Router } from "express";
import { serviceController } from "../controllers/service-controller.js";
import { authorize } from "../middlewares/auth-middleware.js";

const serviceRouter = Router();

serviceRouter.get("/service", serviceController);

export default serviceRouter;