import { Router } from "express";
import { categoriaController } from "../infrastructure/dependencies";

// Router de categoria
const categoriaRouter = Router();

// post /categoria/crear
categoriaRouter.post("/crear", categoriaController.crear.bind(categoriaController));
// get /categoria/listar
categoriaRouter.get("/listar", categoriaController.listar.bind(categoriaController));
// post /categoria/obtener
categoriaRouter.post("/obtener", categoriaController.obtenerPorId.bind(categoriaController));

export { categoriaRouter };
