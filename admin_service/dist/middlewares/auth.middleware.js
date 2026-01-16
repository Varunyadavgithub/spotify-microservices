import axios from "axios";
import dotenv from "dotenv";
dotenv.config();
export const isAuthenticated = async (req, res, next) => {
    try {
        const token = req.headers.token;
        if (!token) {
            res.status(401).json({ message: "Unauthorized Access...!!!" });
            return;
        }
        const { data } = await axios.get(`${process.env.USER_SERVICE_URL}/api/v1/users/profile`, {
            headers: {
                token: token,
            },
        });
        req.user = data?.user;
        next();
    }
    catch (error) {
        res.status(401).json({ message: "Unauthorized Access...!!!" });
    }
};
