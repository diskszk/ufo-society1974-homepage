import axios from "axios";
import { WEB_API_BASE_URL } from "../constants";
import { Song } from "../types";

interface SongsResponse {
  songs: Song[];
}

export const fetchSongs = async (albumId: string): Promise<Song[]> => {
  const res = await axios.get<SongsResponse>(
    `${WEB_API_BASE_URL}/albums/${albumId}/songs`
  );

  const songs = res.data.songs;
  return songs;
};
