import express from 'express';
import { registerUser,authUser } from '../Controllers/userController.js';
// import {admin,protect} from '../middleware/authMiddleware.js'
import { registerValidation,loginValidation } from '../middleware/validationMiddleware.js';

const router = express.Router();

router.post('/login',loginValidation,authUser )
router.post('/register',registerValidation,registerUser)

export default router;