import express from 'express';
import { addVehicle } from "../actions/addVehicle";

const router = express.Router();

// Route for adding a vehicle
router.post('/addVehicle', addVehicle);

export default router;