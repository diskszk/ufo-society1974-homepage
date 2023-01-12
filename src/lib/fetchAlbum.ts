import axios from "axios";
import { NO_IMAGE_PATH, WEB_API_BASE_URL } from "../constants";
import { Album } from "../types";

interface AlbumsResponse {
  albums: Album[];
  info: {
    albumId: string;
    songSummaries: {
      id: string;
      title: string;
      story: string;
    }[];
  };
}

export const fetchAlbum = async (albumId: string): Promise<Album> => {
  const res = await axios.get<AlbumsResponse>(
    `${WEB_API_BASE_URL}/albums/${albumId}`
  );

  const album = res.data.albums[0];

  if (!album.imageFile) {
    album.imageFile = {
      path: NO_IMAGE_PATH,
      filename: "no_image",
    };
  }

  return album;
};
