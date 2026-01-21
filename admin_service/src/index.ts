import express from "express";
import { Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();
import { sql } from "./config/db.js";
import adminRoutes from "./routes/admin.route.js";
import cloudinary from "cloudinary";
import redis from "redis";
import cors from "cors";

cloudinary.v2.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

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

async function initializeDatabase() {
  try {
    await sql`
            CREATE TABLE IF NOT EXISTS albums (
                id SERIAL PRIMARY KEY,
                title VARCHAR(255) NOT NULL,
                description VaRCHAR(255) NOT NULL,
                thumbnail VARCHAR(255) NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        `;

    await sql`
            CREATE TABLE IF NOT EXISTS songs (
                id SERIAL PRIMARY KEY,
                title VARCHAR(255) NOT NULL,
                description VARCHAR(255) NOT NULL,
                thumbnail VARCHAR(255),
                audio VARCHAR(255) NOT NULL,
                album_id INTEGER REFERENCES albums(id) ON DELETE SET NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        `;

    console.log("Database initialized successfully.");
  } catch (error) {
    console.error("Error initializing database:", error);
  }
}

// Default route
app.get("/", (req: Request, res: Response) => {
  res.send("Admin Service is up and running!");
});

// Admin routes
app.use("/api/v1/admin", adminRoutes);

// Start the server
const PORT = process.env.PORT || 6000;

initializeDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(`Admin service is running on port ${PORT}`);
  });
});
