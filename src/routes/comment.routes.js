import {Router} from 'express';
import { getComments, CreateComment,CreateCommentcustom,Updatepathcomment,Deletecomment } from '../controllers/comments.controller.js';

const router = Router();
router.get('/api/comments', getComments );
router.post('/api/comments',  CreateComment);
router.post('/api/commentcustom',CreateCommentcustom )
router.patch('/api/comments/:id',Updatepathcomment)
router.delete('/api/comments/:id',Deletecomment)
export default router;

