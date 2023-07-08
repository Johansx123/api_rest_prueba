//import {pool} from '../db.js' // importamos la conexion db

export const ping = async (req, res) => { // funcion async para esperar el resultado de la db
   // const result = await pool.query('SELECT 1 + 1 AS result');
    res.send("SI SIRVE CTM", ); // respuesta de la db 
}