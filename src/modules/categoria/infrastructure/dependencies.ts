import { CrearCategoria } from "../application/crear-categoria";
import { ListarCategorias } from "../application/listar-categoria";
import { CategoriaController } from "./categoria-controller";
import { CategoriaRepoMysql } from "./categoria-repo-mysql";

// Repositorio mysql
const categoriaRepoMysql = new CategoriaRepoMysql();

// Casos de uso
const crearCategoria = new CrearCategoria(categoriaRepoMysql);
const listarCategorias = new ListarCategorias(categoriaRepoMysql);

// Controlador
export const categoriaController = new CategoriaController(crearCategoria, listarCategorias);
