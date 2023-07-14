import {Router} from 'express';
import {CreateRequestService, getRequest} from '../controllers/requestservices.controller.js'

const router = Router();
router.get('/api/requestservices', getRequest );
router.post('/api/requestservices', CreateRequestService)
export default router;