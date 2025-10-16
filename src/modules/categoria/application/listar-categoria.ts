// import { Categoria } from "../domain/model/categoria";
import { CategoriaRepository } from "../domain/repository/categoria-repository";

// Caso de uso para listar categorias
export class ListarCategorias {
  constructor(private readonly categoriaRepo: CategoriaRepository) {}
  
    async ejecutar() {
      return await this.categoriaRepo.listar();
    }
}
