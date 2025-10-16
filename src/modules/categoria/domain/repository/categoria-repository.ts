import { Categoria } from "../model/categoria";

// Interfaz repositorio crud de categoria
export interface CategoriaRepository {
  // Guardar categoria omitiendo id, id autoincremental
  crear(categoria: Omit<Categoria, "id">): Promise<Categoria>;
  // Listar categorias
  listar(): Promise<Categoria[]>;
}
