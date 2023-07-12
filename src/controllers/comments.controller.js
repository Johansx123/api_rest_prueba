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
            message: 'ERROR al crear comentario'
        })  
    }
   
};

export const CreateCommentcustom = async (req, res) => {
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


export const Updatepathcomment = async (req, res) => {
    try {
        const {id} = req.params;
    const {comment_customer, qualification} = req.body;
    const [rows] = await pool.query('UPDATE u175710332_handymend.comments SET comment_customer = IFNULL(?), qualification = IFNULL(?) WHERE comment_id = ?', [comment_customer, qualification, id]);
    if(rows.affectedRows <= 0) return res.status(404).json({
       message: "No se encontro comentario para actualizar"
    });
    console.log (rows);
    } catch (error) {
        return res.status(500).json ({
            message: 'no se conecto con la base de datos'
        }) 
    }
};

export const Deletecomment = async(req, res) => {
    try {
        const id = req.params.id
         const [rows] = await pool.query('DELETE FROM u175710332_handymend.comments WHERE comment_id = ?', [id]);
        if(rows.affectedRows <= 0) return res.status(404).json({
            message: "No se encontro comentario para eliminar"
        });
        res.sendStatus(204);
         res.json({rows});
     } catch (error) {
        return res.status(500).json ({
            message: 'no se conecto con la base de datos'
        })
     }
};