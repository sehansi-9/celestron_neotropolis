import express from 'express';
import { LoginUser } from '../actions/registerUser';

const router = express.Router();

// Route for user signup
router.post('/signup', async (req, res) => { 
    console.log('req.body');
    const { isAdmin } = req.body;

    try {
        const userData = req.body; // Assuming user signup data is sent in the request body
        const newUser = await LoginUser({ ...userData, role: isAdmin ? 'admin' : 'user' }); // Assign role based on isAdmin boolean
        res.status(201).json({ message: `${isAdmin ? 'Admin' : 'User'} signed up successfully`, user: newUser });
    } catch (error) {
        console.error(`Error signing up ${isAdmin ? 'admin' : 'user'}:`, error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

export default router;
