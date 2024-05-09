import express from 'express';
import { addProducer } from '../Controllers/producerController.js';
import {protect,admin} from '../middleware/authMiddleware.js';
import { producerValidation } from '../middleware/validationMiddleware.js';

const router = express.Router();
router.post('/producer',producerValidation,addProducer )

export default router;
