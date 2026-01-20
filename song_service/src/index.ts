import express from "express";
import { Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();

// Initialize Express app
const app = express();

// Middlewares
app.use(express.json());

// Default route
app.get("/", (req: Request, res: Response) => {
  res.send("Song Service is up and running!");
});

// Song routes

// Start the server
const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(`Song service is running on port ${PORT}`);
});
