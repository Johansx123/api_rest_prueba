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
        return res.status(500).send(error)
    }
   
};

export const getRequest = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT rs.request_id, c.customer_id, c.customer_name, s.service_name FROM request_services rs JOIN customers c ON rs.customer_id = c.customer_id JOIN services s ON rs.service_id = s.service_id;');
        const Rows = rows.map((rows) => {
            return {
            id: rows.request_id,
            phone: rows.customer_id,
            name: rows.customer_name,
            service: rows.service_name,
            };
          });
        res.json(Rows);
    } catch (error) {
        return res.status(500).send(error)
    }
   
};