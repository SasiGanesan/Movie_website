import express from 'express';
import { registerUser,authUser } from '../Controllers/userController.js';
// import {admin,protect} from '../middleware/authMiddleware.js'

const router = express.Router();

router.post('/login',authUser )
router.post('/register',registerUser)

export default router;