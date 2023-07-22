import { pool } from "../db.js";

export const getUsers = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM u175710332_handymend.users');
        res.json(rows);
    } catch (error) {
        return res.status(500).send(error)
    }
   
};

export const CreateUsers = async (req, res) => {
    try {
        const {first_name, last_name} = req.body;
        const [rows] = await pool.query('INSERT INTO u175710332_handymend.users(first_name, last_name) VALUES (?,?)',[first_name , last_name]);
        res.send( //error al ingresar el segundo usuario
            {
            id: rows.insertId,
            first_name: first_name,
            last_name: last_name
            });
    } catch (error) {
        return res.status(500).send(error)
    }
   
};