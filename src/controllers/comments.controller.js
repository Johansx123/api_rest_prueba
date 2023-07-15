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
        console.log(error)
        return res.status(500).json ({
            message: 'No se encontraron comentarios'
        })  
    }
   
};

export const CreateComment = async (req, res) => {
    try {
        const {comment_customer, score} = req.body;
        const [rows] = await pool.query('INSERT INTO u175710332_handymend.comments(comment_customer, score) VALUES (?, ?)',[comment_customer , score]);
        res.send(
            {
            id: rows.insertId,
            comment_customer: comment_customer,
            score: score
            });
    } catch (error) {
        return res.status(500).json ({
            message: 'ERROR al crear comentario'
        })  
    }
   
};

export const CreateCommentcustom = async (req, res) => {
    try {
        const {comment_customer, score, customer_name, customer_id} = req.body;
        await pool.query('INSERT INTO u175710332_handymend.customers(customer_id, customer_name) VALUES (?,?)',[customer_id,customer_name ])
        const [rows] = await pool.query('INSERT INTO u175710332_handymend.comments(comment_customer, score, customer_id) VALUES (?, ?,?)',[comment_customer , score, customer_id],);    
        res.send(
            {
            id: rows.insertId,
            comment_customer: comment_customer,
            score: score,
            customer_name: customer_name,
            customer_id: customer_id
            });
    } catch (error) {
        console.log(error)
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
         await pool.query('SELECT * FROM u175710332_handymend.comments customer_id WHERE comment_id = ?', [id]);
         await pool.query('DELETE FROM u175710332_handymend.customers customer_id WHERE comment_id = ?', [id]);
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