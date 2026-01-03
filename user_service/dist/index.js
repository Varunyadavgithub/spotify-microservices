import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
app.get("/", (req, res) => {
    res.send("User Service is up and running!");
});
app.listen(5000, () => {
    console.log(`User service is running on port ${PORT}`);
});
