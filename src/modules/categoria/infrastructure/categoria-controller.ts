import { Request, Response } from "express";
import { CrearCategoria } from "../application/crear-categoria";
import { ListarCategorias } from "../application/listar-categoria";

// Controlador de categoria
export class CategoriaController {
  constructor(
    // Casos de uso
    private readonly crearCategoria: CrearCategoria,
    private readonly listarCategoria: ListarCategorias,
  ) {}

  // Metodo para crear categoria
  async crear(req: Request, res: Response) {
    const { descripcion } = req.body;

    try {
      if(!descripcion) {
        return res.status(400).json({ mensaje: "Error, formato de solicitud incorrecto." });
      }

      const categoria = await this.crearCategoria.ejecutar({ descripcion });
      return res.status(201).json(categoria);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ mensaje: "Error inesperado en el servidor." });
    }
  }

  // Metodo para listar categorias
  async listar(_req: Request, res: Response) {
    try {
      const categorias = await this.listarCategoria.ejecutar();
      console.log(categorias)
      return res.status(200).json(categorias);
    } catch (error) {
      if(error) {
        return res.status(500).json({ mensaje: "Error al obtener categorias." });
      }

      return res.status(500).json({ mensaje: "Error inesperado en el servidor." });
    }
  }
}
