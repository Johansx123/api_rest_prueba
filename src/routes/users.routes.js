import {Router} from 'express';
import { getUsers,CreateUsers } from '../controllers/users.controller.js';
const router = Router();

router.get('/api/users', getUsers)
router.post('/api/users', CreateUsers)
router.patch('/api/users/:id')
router.delete('/api/users/:id')

export default router;