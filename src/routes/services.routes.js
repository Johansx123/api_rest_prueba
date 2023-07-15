import {Router} from 'express';
import { CreateService, getServices } from '../controllers/services.controller.js';

const router = Router();
router.get('/api/services', getServices );
router.post('/api/services', CreateService);
export default router;