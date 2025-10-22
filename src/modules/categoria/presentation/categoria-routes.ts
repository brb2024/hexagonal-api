import { Router } from "express";
import { categoriaController } from "../infrastructure/dependencies";

// Router de categoria
const categoriaRouter = Router();

// post /categoria/crear
categoriaRouter.post("/crear", categoriaController.crear.bind(categoriaController));

// get /categoria/listar
categoriaRouter.get("/listar", categoriaController.listar.bind(categoriaController));

// post /categoria/obtener
categoriaRouter.get("/obtener/:id", categoriaController.obtenerPorId.bind(categoriaController));

// post /categoria/modificar/:id
categoriaRouter.patch("/modificar/:id", categoriaController.modificar.bind(categoriaController));

export { categoriaRouter };
