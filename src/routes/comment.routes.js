import {Router} from 'express';
import { getComments } from '../controllers/comments.controller.js';

const router = Router();
router.get('/api/comments', getComments );
export default router;