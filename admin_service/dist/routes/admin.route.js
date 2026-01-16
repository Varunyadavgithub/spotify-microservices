import express from "express";
import { isAuthenticated } from "../middlewares/auth.middleware.js";
import { addAlbum } from "../controllers/admin.controller.js";
import uploadFile from "../middlewares/multer.middleware.js";
const router = express.Router();
router.post("/album/new", isAuthenticated, uploadFile, addAlbum);
export default router;
