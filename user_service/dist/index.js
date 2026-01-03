import express from "express";
import dotenv from "dotenv";
dotenv.config();
import { connectDB } from "./config/db.js";
// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5000;
// Connect to the database
connectDB();
// Default route
app.get("/", (req, res) => {
    res.send("User Service is up and running!");
});
// Start the server
app.listen(PORT, () => {
    console.log(`User service is running on port ${PORT}`);
});
