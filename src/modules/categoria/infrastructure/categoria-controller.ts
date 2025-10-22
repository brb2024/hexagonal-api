import { Request, Response } from "express";
import { CrearCategoria } from "../application/crear-categoria";
import { ListarCategorias } from "../application/listar-categoria";
import { ObtenerCategoriaPorId } from "../application/obtener-categoria-por-id";
import { ModificarCategoria } from "../application/modificar-categoria";

// Controlador de categoria
export class CategoriaController {
  constructor(
    // Casos de uso
    private readonly crearCategoria: CrearCategoria,
    private readonly listarCategoria: ListarCategorias,
    private readonly obtenerCategoriaPorId: ObtenerCategoriaPorId,
    private readonly modificarCategoria: ModificarCategoria
  ) {}

  // Metodo para crear categoria
  async crear(req: Request, res: Response) {
    const { descripcion } = req.body;

    try {

      if(!descripcion) {
        return res.status(400).json({ mensaje: "Error, la descripcion es requerida." });
      }

      // Ejecutar el caso de uso
      const categoria = await this.crearCategoria.ejecutar({ descripcion });

      return res.status(201).json(categoria);
    } catch (error) {
      // console.log(error);
      return res.status(500).json({ mensaje: "Error inesperado en el servidor." });
    }
  }

  // Metodo para listar categorias
  async listar(_req: Request, res: Response) {
    try {
      // Ejecutar el caso de uso
      const categorias = await this.listarCategoria.ejecutar();

      // console.log(categorias)
      return res.status(200).json(categorias);
    } catch (error) {
      if(error) {
        return res.status(500).json({ mensaje: "Error al obtener categorias." });
      }

      return res.status(500).json({ mensaje: "Error inesperado en el servidor." });
    }
  }

  /**
   * Obtiene una categoría por su ID
   * @param req.params.id ID de la categoría a buscar
   */
  async obtenerPorId(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const categoriaId = Number(id);

      const categoria = await this.obtenerCategoriaPorId.ejecutar(categoriaId);
      
      if (!categoria) {
        return res.status(404).json({ 
          mensaje: "No se encontró la categoría con el ID proporcionado" 
        });
      }

      return res.status(200).json(categoria);
    } catch (error) {
      console.error('Error al obtener categoría:', error);
      return res.status(500).json({ 
        mensaje: "Error inesperado en el servidor" 
      });
    }
  }

  // Metodo para modificar objeto
  async modificar(req: Request, res: Response) {
    const { id } = req.params;
    const { descripcion } = req.body;

    try {
      if (!id) {
        return res.status(400).json({ mensaje: "Error, el ID es requerido." });
      }

      if (!descripcion) {
        return res.status(400).json({ mensaje: "Error, la descripción es requerida." });
      }

      // Convertimos el id a número ya que viene como string en req.params
      const categoriaId = Number(id);
      
      // Ejecutamos el caso de uso
      const categoriaModificada = await this.modificarCategoria.ejecutar(categoriaId, { descripcion });
      
      // Si retorna null significa que no se encontró la categoría
      if (!categoriaModificada) {
        return res.status(404).json({ mensaje: "No se encontró la categoría con el ID proporcionado." });
      }

      // Si todo sale bien, retornamos la categoría modificada
      return res.status(200).json(categoriaModificada);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ mensaje: "Error inesperado en el servidor." });
    }
  }
}
