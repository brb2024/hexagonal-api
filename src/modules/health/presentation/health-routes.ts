import { Router } from "express";
import { healthController } from "../infrastructure/dependencies";

// Router de health
const healthRouter = Router();

// get /health
healthRouter.get("/", healthController.ejecutar.bind(healthController));

export { healthRouter };
