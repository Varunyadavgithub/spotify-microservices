import express from "express";
import dotenv from "dotenv";
import { sql } from "./config/db.js";
dotenv.config();
// Initialize Express app
const app = express();
// Middlewares
app.use(express.json());
async function initializeDatabase() {
    try {
        await sql `
            CREATE TABLE IF NOT EXISTS albums (
                id SERIAL PRIMARY KEY,
                title VARCHAR(255) NOT NULL,
                description VaRCHAR(255) NOT NULL,
                thumbnail VARCHAR(255) NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        `;
        await sql `
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
    }
    catch (error) {
        console.error("Error initializing database:", error);
    }
}
// Default route
app.get("/", (req, res) => {
    res.send("Admin Service is up and running!");
});
// Start the server
const PORT = process.env.PORT || 6000;
initializeDatabase().then(() => {
    app.listen(PORT, () => {
        console.log(`Admin service is running on port ${PORT}`);
    });
});
