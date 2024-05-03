import express from 'express';
import {createMovie, getAllMovies,updateMovie,getMovieById} from '../Controllers/movieController.js';
import {protect,admin} from '../middleware/authMiddleware.js';
import { movieValidation } from '../middleware/validationMiddleware.js';

const router = express.Router();
router.post('/movie',protect,admin,movieValidation,createMovie )
router.get('/',getAllMovies)
router.get('/:id',getMovieById)
router.put('/:id',protect,admin,updateMovie)

export default router;