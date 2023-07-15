import { pool } from "../db.js";

export const CreateRequestService = async (req, res) => {
    try {
        const {phone, service,name} = req.body;
        await pool.query('INSERT INTO u175710332_handymend.customers(customer_id,customer_name) VALUES (?,?)',[phone,name ]);
        const [rows] = await pool.query('INSERT INTO u175710332_handymend.request_services(customer_id, service_id) VALUES (?, ?)',[phone , service]);
        res.send(
            {
            id: rows.insertId,
            name: name,
            phone: phone,
            service: service
            });
    } catch (error) {
        return res.status(500).json ({
            message: 'ERROR al crear el servicio'
        })  
    }
   
};

export const getRequest = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM u175710332_handymend.request_services');
        res.json(rows);
    } catch (error) {
        return res.status(500).json ({
            message: 'No se encontraron servicios'
        })  
    }
   
};