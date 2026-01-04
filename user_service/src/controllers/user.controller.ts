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

  const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET as string, {
    expiresIn: "7d",
  });

  res
    .status(201)
    .json({ message: "User Registered Successfully...!!!", user, token });
});
