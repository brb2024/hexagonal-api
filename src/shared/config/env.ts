import z from "zod";
import dotenv from "dotenv";

// Cargar las variables de .env
dotenv.config();

// Variables de la app
const envSchema = z.object({
  // Servidor
  PORT: z.string().default("3000"),

  // Base de datos
  HOST: z.string(),
  USER: z.string(),
  PASSWORD: z.string(),
  DATABASE: z.string(),
  DB_PORT: z.coerce.number().default(3306)
});

export const env = envSchema.parse(process.env);
