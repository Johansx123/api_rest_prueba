import {Router} from 'express';
import { getComments, CreateComment,CreateCommentcustom } from '../controllers/comments.controller.js';

const router = Router();
router.get('/api/comments', getComments );
router.post('/api/comments', CreateComment );
router.post('/api/commentcustom',CreateCommentcustom )
export default router;