import { TryCatch } from "../config/TryCatch.js";
import { User } from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export const registerUser = TryCatch(async (req, res) => {
    const { username, email, password } = req.body;
    let user = await User.findOne({ email });
    if (user) {
        return res
            .status(400)
            .json({ message: "User Already Exists with this email...!!!" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    user = await User.create({
        username,
        email,
        password: hashedPassword,
    });
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "7d",
    });
    res
        .status(201)
        .json({ message: "User Registered Successfully...!!!", user, token });
});
export const loginUser = TryCatch(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
        return res.status(404).json({ message: "User not exists...!!!" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(400).json({ message: "Invalid Credentials...!!!" });
    }
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "7d",
    });
    return res
        .status(200)
        .json({ message: "Login Successful...!!!", user, token });
});
