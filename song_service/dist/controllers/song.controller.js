import { TryCatch } from "../config/TryCatch.js";
import { sql } from "../config/db.js";
export const getAllAlbums = TryCatch(async (req, res) => {
    let albums;
    albums = await sql `SELECT * FROM albums`;
    res.status(200).json({
        message: "All albums fetched successfully.",
        albums,
    });
});
export const getAllSongs = TryCatch(async (req, res) => {
    let songs;
    songs = await sql `SELECT * FROM songs`;
    res.status(200).json({
        message: "All songs fetched successfully.",
        songs,
    });
});
export const getAllSongsOfAlbum = TryCatch(async (req, res) => {
    const { id } = req.params;
    let album, songs;
    album = await sql `SELECT * FROM albums where id=${id}`;
    if (album.length === 0) {
        res.status(404).json({
            message: "No album with this id.",
        });
        return;
    }
    songs = await sql `SELECT * FROM songs where id=${id}`;
    const response = { songs, album: album[0] };
    res.status(200).json({
        message: "All songs of a album fetched successfully.",
        response,
    });
});
export const getSingleSong = TryCatch(async (req, res) => {
    const song = await sql `SELECT * FROM songs WHERE id=${req.params.id}`;
    if (song.length === 0) {
        res.status(404).json({
            message: "No song with this id.",
        });
        return;
    }
    res.status(200).json({
        message: "Song fetched successfully.",
        song: song[0],
    });
});
