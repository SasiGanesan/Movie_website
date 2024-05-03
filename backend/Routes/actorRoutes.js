import express from 'express';
import { addActor } from '../Controllers/actorController.js';

const router = express.Router();
router.post('/actor',addActor )

export default router;