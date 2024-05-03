import express from 'express';
import { addProducer } from '../Controllers/producerController.js';
import {protect,admin} from '../middleware/authMiddleware.js';

const router = express.Router();
router.post('/producer',protect,admin,addProducer )

export default router;
