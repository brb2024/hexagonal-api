import { Categoria } from "../domain/model/categoria";
import { CategoriaRepository } from "../domain/repository/categoria-repository";

export class ObtenerCategoriaPorId {
  constructor(private readonly categoriaRepo: CategoriaRepository) {}

  async ejecutar(id: number): Promise<Categoria | null> {
    return await this.categoriaRepo.obtenerPorId(id);
  }
}
