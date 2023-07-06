import { DB_HOST,DB_PORT,DB_USER,DB_PASSWORD,DB_DATABASE } from './config.js';
import {createPool} from 'mysql2/promise'; // importamos bien mysql2 que trae las promesas

export const pool = createPool({  //exportamos la conexion con nombre pool
    host: DB_HOST, // el hostname para la conexion db
    user: DB_USER, // el usuario de la db
    password: DB_PASSWORD, // password de la db
    port: DB_PORT, // puerto en el que se ejecuta la database
    database: DB_DATABASE // la database que va a utilizar la api
})