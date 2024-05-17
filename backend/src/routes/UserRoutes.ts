import express from 'express';
import { LoginUser } from '../actions/registerUser';

const router = express.Router();

// Route for user signup
router.post('/signup', LoginUser);

export default router;
