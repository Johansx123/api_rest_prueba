import app from './app.js'
import {PORT} from './config.js'

app.listen(PORT); // entra en modo de escucha en el puerto 3000
res.json({ message: "ready in port"}, PORT)