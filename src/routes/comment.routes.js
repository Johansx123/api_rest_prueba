import {Router} from 'express';
import { getComments, CreateComment } from '../controllers/comments.controller.js';

const router = Router();
router.get('/api/comments', getComments );
router.post('/api/comments', CreateComment );
export default router;