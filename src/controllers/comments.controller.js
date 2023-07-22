import { pool } from "../db.js";

export const getComments = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT comment_id, comment_date, comment_customer, score, customer_name FROM comments c LEFT JOIN customers cu ON cu.customer_id = c.customer_id ;');
        const Rows = rows.map((rows) => {
            return {
              id: rows.comment_id,
              date: rows.comment_date,
              comment: rows.comment_customer,
              score: rows.score,
              name: rows.customer_name
            };
          });
       res.json(Rows);
    } catch (error) {
        return res.status(500).send(error)
    }
   
};

export const CreateComment = async (req, res) => {
    try {
        const {comment, score} = req.body;
        const [rows] = await pool.query('INSERT INTO u175710332_handymend.comments(comment_customer, score) VALUES (?, ?)',[comment , score]);
        res.send(
            {
            id: rows.insertId,
            comment: comment,
            score: score
            });
    } catch (error) {
        return res.status(500).send(error)
    }
   
};

export const CreateCommentcustom = async (req, res) => {
    try {
        const {comment, score,name, phone} = req.body;
        await pool.query('INSERT INTO u175710332_handymend.customers(customer_id, customer_name) VALUES (?,?)',[phone,name ])
        const [rows] = await pool.query('INSERT INTO u175710332_handymend.comments(comment_customer, score, customer_id) VALUES (?, ?,?)',[comment , score, phone],);    
        res.send(
            {
            id: rows.insertId,
            comment: comment,
            score: score,
            name: name,
            id: phone
            });
    } catch (error) {
        return res.status(500).send(error)
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
        return res.status(500).send(error)
    }
};

export const Deletecomment = async(req, res) => {
    try {
        const id = req.params.id
         const [rows] = await pool.query('DELETE FROM u175710332_handymend.comments WHERE comment_id = ?', [id]);
         await pool.query('SELECT * FROM u175710332_handymend.comments customer_id WHERE comment_id = ?', [id]);
         await pool.query('DELETE FROM u175710332_handymend.customers customer_id WHERE comment_id = ?', [id]);
        if(rows.affectedRows <= 0) return res.status(404).json({
            message: "No se encontro comentario para eliminar" 
        });
        res.sendStatus(204);
         res.json({rows});
     } catch (error) {
        return res.status(500).send(error)
     }
};