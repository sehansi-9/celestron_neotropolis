import express from "express";
import bodyParser from "body-parser";
import UserRoutes from "./src/routes/UserRoutes";
import "dotenv/config";

const app = express();

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// Routes
app.use("/api/users", UserRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
