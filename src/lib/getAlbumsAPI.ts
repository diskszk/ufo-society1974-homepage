import axios from "axios";
import { Album } from "../types";

interface AlbumsResponse {
  albums: Album[];
}

export const getAlbums = async (): Promise<Album[]> => {
  const BASE_URL = `${process.env.API_BASE_URL}/api`;

  const res = await axios.get<AlbumsResponse>(`${BASE_URL}/albums`);

  const albums = res.data.albums;

  return albums;
};
