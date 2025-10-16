import express from "express";
import { healthRouter } from "../../../modules/health/presentation/health-routes";
import { categoriaRouter } from "../../../modules/categoria/presentation/categoria-routes";

// Crear la app
const app = express();

// Middlewares
app.use(express.json());

// Rutas
app.use("/health", healthRouter);
app.use("/categoria", categoriaRouter);

export { app };
