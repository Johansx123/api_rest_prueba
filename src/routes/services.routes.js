import {Router} from 'express';
import { getServices } from '../controllers/services.controller.js';

const router = Router();
router.get('/api/services', getServices );
export default router;