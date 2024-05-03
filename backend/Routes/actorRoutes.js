import express from 'express';
import { addActor } from '../Controllers/actorController.js';
import {protect,admin} from '../middleware/authMiddleware.js';

const router = express.Router();
router.post('/actor',protect,admin,addActor )

export default router;