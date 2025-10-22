import { ResultSetHeader } from "mysql2";
import { pool } from "../../../shared/database/mysql-connection";
import { Categoria } from "../domain/model/categoria";
import { CategoriaRepository } from "../domain/repository/categoria-repository";
import { SQLBuilder } from "../../../shared/utils/sql-builder";

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

  // Metodo para obtener categorias por id
  async obtenerPorId(id: number): Promise<Categoria | null> {
    try {
      const [resultado] = await pool.execute("SELECT * FROM categorias WHERE id = ?", [id]);
      const categoria = resultado as Categoria[];

      console.log(categoria);

      return categoria[0] ?? null;
    } catch (error) {
      // console.log(error);
      throw new Error("No se pudo listar las categorias.");
    }
  }

  // Metodo para modificar categorias
  async modificar(id: number, categoria: Partial<Omit<Categoria, "id">>): Promise<Categoria | null> {
    try {
      // Primero verificamos si la categoría existe
      const categoriaExistente = await this.obtenerPorId(id);
      if (!categoriaExistente) {
        return null; // Retornamos null si la categoría no existe
      }

      // Construimos y ejecutamos el query de actualización
      const query = SQLBuilder.sqlUpdate("UPDATE categorias SET _ WHERE id = ?", categoria);
      const [resultado] = await pool.execute(query, [categoria.descripcion, id]);
      const updateInfo = resultado as ResultSetHeader;

      // Verificamos si se actualizó correctamente
      if (updateInfo.affectedRows === 0) {
        return null; // No se actualizó ningún registro
      }

      // Retornamos la categoría actualizada
      return new Categoria(id, categoria.descripcion!);
    } catch(error) {
      console.log(error);
      throw new Error("No se pudo modificar la categoria.");
    }
  }
}
