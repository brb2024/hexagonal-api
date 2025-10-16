import { app } from "./shared/infrastructure/http/app";
import { env } from "./shared/config/env";

// Puerto de servidor
const port = env.PORT;

// Iniciar servidor
app.listen(port, () => console.log(`Servidor en puerto: ${port}`));
