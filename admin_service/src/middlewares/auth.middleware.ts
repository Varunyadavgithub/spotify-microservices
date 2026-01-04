import { NextFunction, Request, Response } from "express";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

interface IUser {
  id: string;
  username: string;
  email: string;
  password: string;
  role: string;
  playlists: string[];
}

interface AuthenticatedRequest extends Request {
  user?: IUser | null;
}

export const isAuthenticated = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const token = req.headers.token as string;

    if (!token) {
      res.status(401).json({ message: "Unauthorized Access...!!!" });
      return;
    }

    const { data } = await axios.get(
      `${process.env.USER_SERVICE_URL}/api/v1/users/profile`,
      {
        headers: {
          token: token,
        },
      }
    );

    req.user = data;
    next();
  } catch (error) {
    res.status(401).json({ message: "Unauthorized Access...!!!" });
  }
};
