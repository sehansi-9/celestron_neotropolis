import express from "express";
import { addParkingSpace } from "../actions/addParkingSpace";

const router = express.Router();

// Route for adding a parking space
router.post("/addParkingSpace", addParkingSpace);

export default router;