import axios from "axios";
import { NO_IMAGE_PATH, WEB_API_BASE_URL } from "../constants";
import { Album, AlbumInfo } from "../types";

interface AlbumsResponse {
  albums: Album[];
  info: AlbumInfo;
}

export const fetchAlbum = async (
  albumId: string
): Promise<{ album: Album; info: AlbumInfo }> => {
  const res = await axios.get<AlbumsResponse>(
    `${WEB_API_BASE_URL}/albums/${albumId}`
  );

  const album = res.data.albums[0];
  const info = res.data.info;

  if (!album.imageFile) {
    album.imageFile = {
      path: NO_IMAGE_PATH,
      filename: "no_image",
    };
  }

  return { album, info };
};
