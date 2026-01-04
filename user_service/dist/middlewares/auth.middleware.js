import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";
export const isAuthenticated = async (req, res, next) => {
    try {
        const token = req.headers.token;
        if (!token) {
            res.status(401).json({ message: "Unauthorized Access...!!!" });
            return;
        }
        const decodedValue = jwt.verify(token, process.env.JWT_SECRET);
        if (!decodedValue || !decodedValue._id) {
            res.status(401).json({ message: "Unauthorized Access...!!!" });
            return;
        }
        const userId = decodedValue._id;
        const user = await User.findById(userId).select("-password");
        if (!user) {
            res.status(401).json({ message: "Unauthorized Access...!!!" });
            return;
        }
        req.user = user;
        next();
    }
    catch (error) {
        res.status(401).json({ message: "Unauthorized Access...!!!" });
    }
};
