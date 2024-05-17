import { Request, Response } from 'express';
import { z, ZodError } from 'zod';

// Define schema for user signup data
const signupSchema = z.object({
    firstName: z.string().min(1),
    lastName: z.string().min(1),
    userName: z.string().min(1),
    mobileNumber: z.string().min(1),
    nationalId: z.string().min(1),
    vehicleNumber: z.string().min(1),
    email: z.string().email(),
    password: z.string().min(6), // Example: Password must be at least 6 characters long
});

// Function to handle user signup
export const signup = async (req: Request, res: Response) => {
    try {
        // Validate request body against schema
        const validatedData = signupSchema.parse(req.body);

        // Return a success response
        return res.status(201).json({ message: 'User signed up successfully' });
    } catch (error) {
        if (error instanceof ZodError) {
            // Handle validation errors
            return res.status(400).json({ error: 'Validation error', details: error.errors });
        } else {
            console.error('Error signing up user:', error);
            return res.status(500).json({ error: 'Internal server error' });
        }
    }
};
