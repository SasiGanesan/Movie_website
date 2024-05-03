import express from 'express';
import { addActor } from '../Controllers/actorController.js';
import {protect,admin} from '../middleware/authMiddleware.js';
import { actorValidation } from '../middleware/validationMiddleware.js';

const router = express.Router();
router.post('/actor',protect,admin,actorValidation,addActor )

export default router;