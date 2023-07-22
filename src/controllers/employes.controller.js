import { pool } from "../db.js";

export const getEmployee = async (req, res) => {
    try {
        res.send('Express vercel app response')
        const [rows] = await pool.query('SELECT * FROM employees WHERE id = ?', [req.params.id]);
        if(rows.length <= 0) return res.status(404).json({
            message: "Employee not found"
        });
        console.log(rows);
    } catch (error) {
        return res.status(500).send(error)   
    }
};

export const getEmployees = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM employees');
        res.json(rows);
    } catch (error) {
        return res.status(500).send(error)  
    }
   
};

export const CreateEmployees = async (req, res) => {
    try {
        const {name, salary} = req.body;
        const [rows] = await pool.query('INSERT INTO employees(name, salary) VALUES (?, ?)',[name , salary]);
        res.send(
            {
            id: rows.insertId,
            name: name,
            salary: salary
            });
    } catch (error) {
        return res.status(500).send(error) 
    }
   
};

export const UpdateEmployees = async (req, res) => {
    try {
        const {id} = req.params;
    const {name, salary} = req.body;
    const [rows] = await pool.query('UPDATE employees SET name = IFNULL(?), salary = IFNULL(?) WHERE id = ?', [name, salary, id]);
    if(rows.affectedRows <= 0) return res.status(404).json({
       message: "No se encontro empleado para actualizar"
    });
    console.log (rows);
    } catch (error) {
        return res.status(500).send(error) 
    }
    
};

export const UpdatepathEmployees = async (req, res) => {
    try {
        const {id} = req.params;
    const {name, salary} = req.body;
    const [rows] = await pool.query('UPDATE employees SET name = IFNULL(?), salary = IFNULL(?) WHERE id = ?', [name, salary, id]);
    if(rows.affectedRows <= 0) return res.status(404).json({
       message: "No se encontro empleado para actualizar"
    });
    console.log (rows);
    } catch (error) {
        return res.status(500).send(error)
    }
};

export const DeleteEmployees = async(req, res) => {
    try {
        const [rows] = await pool.query('DELETE FROM employees WHERE id = ?', [req.params.id]);
        if(rows.affectedRows <= 0) return res.status(404).json({
            message: "No se encontro empleado para Eliminar"
        });
        res.sendStatus(204);
        console.log(rows);
    } catch (error) {
        return res.status(500).send(error)
    }
};



