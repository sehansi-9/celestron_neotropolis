// src/controllers/authController.ts
import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { db } from '../firebase';

// Signup function
export const signup = async (req: Request, res: Response) => {
  try {
    const { firstname, lastname, username, mobileNumber, vehicleNo, NIC, email, password } = req.body;

    // Check if email is already registered
    const userDoc = await db.collection('users').doc(email).get();
    if (userDoc.exists) {
      return res.status(400).json({ error: 'Email already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user document
    await db.collection('users').doc(email).set({
      firstname,
      lastname,
      username,
      mobileNumber,
      vehicleNo,
      NIC,
      email,
      password: hashedPassword
    });

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Signin function
export const signin = async (req: Request, res: Response) => {
  try {
    const { username, DTPCode, password } = req.body;

    // Retrieve user document by username
    const userDoc = await db.collection('users').doc(username).get();
    if (!userDoc.exists) {
      return res.status(404).json({ error: 'User not found' });
    }

    const userData = userDoc.data();
    const hashedPassword = userData?.password;

    // Verify password
    const isPasswordValid = await bcrypt.compare(password, hashedPassword);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid password' });
    }

    // Password is valid, user is authenticated
    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
