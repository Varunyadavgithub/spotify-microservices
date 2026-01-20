import express from "express";
import { Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();
import songRoutes from "./routes/song.route.js";

// Initialize Express app
const app = express();

// Middlewares
app.use(express.json());

// Default route
app.get("/", (req: Request, res: Response) => {
  res.send("Song Service is up and running!");
});

// Song routes
app.use("/api/v1", songRoutes);

// Start the server
const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(`Song service is running on port ${PORT}`);
});
