import axios from "axios";
import { Song } from "../types";

interface SongsResponse {
  songs: Song[];
}

export const getSong = async (
  albumId: string,
  songId: string
): Promise<Song> => {
  const BASE_URL = `${process.env.API_BASE_URL}/api`;

  const res = await axios.get<SongsResponse>(
    `${BASE_URL}/albums/${albumId}/songs/${songId}`
  );

  const song = res.data.songs[0];
  return song;
};
