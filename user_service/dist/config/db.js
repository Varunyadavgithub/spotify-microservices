import mongoose from "mongoose";
export const connectDB = async () => {
    try {
        mongoose.connect(process.env.MONGO_URI, {
            dbName: "Spotify",
        });
        console.log("MongoDB connected successfully");
    }
    catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1);
    }
};
