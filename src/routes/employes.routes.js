import { Router } from "express";
import { getEmployees, CreateEmployees, UpdateEmployees, DeleteEmployees, getEmployee } from "../controllers/employes.controller.js";


const router = Router();

router.get('/api/employees', getEmployees);
router.get('/api/employees/:id', getEmployee);
router.post('/api/employees', CreateEmployees);
router.put('/api/employees/:id', UpdateEmployees);
router.delete('/api/employees/:id', DeleteEmployees);

export default router