import { pool } from "../db.js";

export const getServices = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM services');
        res.json(rows);
    } catch (error) {
        return res.status(500).json ({
            message: 'No se encontro servicios'
        })  
    }
   
};

export const CreateService = async (req, res) => {
    try {
        const {comment_customer, qualification, customer_name} = req.body;
        const [rows] = await pool.query('INSERT INTO u175710332_handymend.comments(comment_customer, qualification) VALUES (?, ?)',[comment_customer , qualification]);
        await pool.query('INSERT INTO u175710332_handymend.customers(customer_name) VALUES ( ?)',[customer_name ]);
        res.send(
            {
            id: rows.insertId,
            comment_customer: comment_customer,
            qualification: qualification,
            customer_name: customer_name
            });
    } catch (error) {
        return res.status(500).json ({
            message: 'ERROR al crear comentario'
        })  
    }
   
};