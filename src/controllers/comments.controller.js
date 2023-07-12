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

export const CreateComment = async (req, res) => {
    try {
        const {comment_customer, qualification} = req.body;
        const [rows] = await pool.query('INSERT INTO u175710332_handymend.comments(comment_customer, qualification) VALUES (?, ?)',[comment_customer , qualification]);
        res.send(
            {
            id: rows.insertId,
            comment_customer: comment_customer,
            qualification: qualification
            });
    } catch (error) {
        return res.status(500).json ({
            message: 'something goes weong'
        })  
    }
   
};