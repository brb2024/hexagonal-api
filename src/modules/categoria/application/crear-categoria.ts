import { Categoria } from "../domain/model/categoria";
import { CategoriaRepository } from "../domain/repository/categoria-repository";

// Caso de uso para crear categoria
export class CrearCategoria {
  constructor(private readonly categoriaRepo: CategoriaRepository) {}

  async ejecutar(categoria: Omit<Categoria, "id">): Promise<Categoria> {
    console.log(categoria)
    return await this.categoriaRepo.crear({ ...categoria });
  }
}
