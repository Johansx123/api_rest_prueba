import { pool } from "../db.js";

export const getServices = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM services');
        const Rows = rows.map((rows) => {
            return {
            id: rows.service_id,
            title: rows.service_name,
            icon: rows.icon,
            features: rows.features,
            color:rows.color
            };
          });
          console.log(Rows.id)
        res.json(Rows);
    } catch (error) {
        return res.status(500).json ({
            message: 'No se encontro servicios'
        })  
    }
   
};

export const CreateService = async (req, res) => {
    try {
        const {service_name, icon, features, color} = req.body;
        const [rows] = await pool.query('INSERT INTO u175710332_handymend.services(service_name, icon, features, color) VALUES (?, ?,?,?)',[service_name , icon, features, color]);
        res.send(
            {
            id: rows.insertId,
            title: service_name,
            icon: icon,
            features: features,
            color:color
            });
    } catch (error) {
        console.log(error)
        return res.status(500).json ({
            message: 'ERROR al crear comentario'
        })  
    }
   
};