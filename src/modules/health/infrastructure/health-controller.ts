import { Request, Response } from "express";

// Controlador de health
export class HealthController {
  ejecutar(_req: Request, res: Response) {
    res.status(200).json({ response: "ok" });
  }
}
