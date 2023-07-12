import { pool } from "../db.js";

export const getComments = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM u175710332_handymend.comments');
        res.json(rows);
    } catch (error) {
        return res.status(500).json ({
            message: 'No se encontraron comentarios'
        })  
    }
   
};