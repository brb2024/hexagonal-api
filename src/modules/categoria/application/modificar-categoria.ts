import { Categoria } from "../domain/model/categoria";
import { CategoriaRepository } from "../domain/repository/categoria-repository";

// Caso de uso para modificar categorias
export class ModificarCategoria {
  constructor(private readonly categoriaRepo: CategoriaRepository) {}
  
    async ejecutar(id: number, categoria: Partial<Omit<Categoria, "id">>): Promise<Categoria | null> {
      return await this.categoriaRepo.modificar(id, categoria);
    }
}
