export class SQLBuilder {
  // Metodo para construir sql de actualizar
  static sqlUpdate<T extends object>(sql: string, datos: T): string {
    const keys = Object.keys(datos);
    const values = keys.map(e => `${e} = ?`).join(",");
    return sql.replace("_", values);
  }
}
