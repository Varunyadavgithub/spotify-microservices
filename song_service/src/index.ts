import express from "express";
import { Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();
import songRoutes from "./routes/song.route.js";
import redis from "redis";
import cors from "cors";

export const redisClient = redis.createClient({
  password: process.env.REDIS_PASSWORD,
  socket: {
    host: process.env.REDIS_HOST,
    port: 14248,
  },
});

redisClient
  .connect()
  .then(() => console.log("Connected to the Redis DB."))
  .catch(console.error);

// Initialize Express app
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

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
