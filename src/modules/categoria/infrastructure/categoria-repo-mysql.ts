import { ResultSetHeader } from "mysql2";
import { pool } from "../../../shared/database/mysql-connection";
import { Categoria } from "../domain/model/categoria";
import { CategoriaRepository } from "../domain/repository/categoria-repository";

// Repositorio categoria de mysql
export class CategoriaRepoMysql implements CategoriaRepository {
  // Metodo praa crear categoria
  async crear(categoria: Omit<Categoria, "id">): Promise<Categoria> {
    const descripcion = categoria.descripcion;

    try {
      const [resultado] = await pool.execute<ResultSetHeader>(
        "INSERT INTO categorias(descripcion) VALUES (?)",
        [descripcion]
      );

      const insertId = resultado.insertId;
      return new Categoria(insertId, descripcion);
    } catch (error) {
      console.log(error);
      throw new Error("No se pudo crear la categoria.");
    }
  }

  // Metodo para las categorias
  async listar(): Promise<Categoria[]> {
    try {
      const [resultado] = await pool.execute("SELECT * FROM categorias");
      return resultado as Categoria[];
    } catch (error) {
      console.log(error);
      throw new Error("No se pudo listar las categorias.");
    }
  }
}
