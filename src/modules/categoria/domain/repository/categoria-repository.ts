import { Categoria } from "../model/categoria";

// Interfaz repositorio crud de categoria
export interface CategoriaRepository {
  // Guardar categoria omitiendo id, id autoincremental
  crear(categoria: Omit<Categoria, "id">): Promise<Categoria>;

  // Listar categorias
  listar(): Promise<Categoria[]>;

  // Obtener categoria por id
  obtenerPorId(id: number): Promise<Categoria | null>;

  // Modificar categoria
  modificar(id: number, categoria: Partial<Omit<Categoria, "id">>): Promise<Categoria | null>;
}
