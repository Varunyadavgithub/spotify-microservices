import express from "express";
import { isAuthenticated } from "../middlewares/auth.middleware.js";
import {
  addAlbum,
  addSong,
  addSongThumbnail,
} from "../controllers/admin.controller.js";
import uploadFile from "../middlewares/multer.middleware.js";

const router = express.Router();

router.post("/album/new", isAuthenticated, uploadFile, addAlbum);
router.post("/song/new", isAuthenticated, uploadFile, addSong);
router.post("/song/:id", isAuthenticated, uploadFile, addSongThumbnail);

export default router;
