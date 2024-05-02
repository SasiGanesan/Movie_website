import express from 'express';

const router = express.Router();
router.post('/movie',createMovie )

export default router;