import { Router } from "express";
import { categoriaController } from "../infrastructure/dependencies";

// Router de categoria
const categoriaRouter = Router();

// post /categoria/crear
categoriaRouter.post("/crear", categoriaController.crear.bind(categoriaController));
// get /categoria/listar
categoriaRouter.get("/listar", categoriaController.listar.bind(categoriaController));

export { categoriaRouter };
