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
  res.send("Admin Service is up and running!");
});

// Start the server
const PORT = process.env.PORT || 6000;

app.listen(PORT, () => {
  console.log(`Admin service is running on port ${PORT}`);
});
