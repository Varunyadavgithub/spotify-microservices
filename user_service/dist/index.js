import express from "express";
import dotenv from "dotenv";
dotenv.config();
import { connectDB } from "./config/db.js";
import userRoutes from "./routes/user.route.js";
// Initialize Express app
const app = express();
// Connect to the database
connectDB();
// Middlewares
app.use(express.json());
// Default route
app.get("/", (req, res) => {
    res.send("User Service is up and running!");
});
// User routes
app.use("/api/v1/users", userRoutes);
// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`User service is running on port ${PORT}`);
});
