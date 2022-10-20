import { NO_IMAGE_PATH } from "../constants";
import { db } from "../firebase";
import { Album } from "../types";

export const getSingleAlbum = async (albumId: string): Promise<Album> => {
  const albumRef = db.collection("published_albums").doc(albumId);

  const snapshot = await albumRef.get();
  const doc = snapshot.data();

  if (!doc) {
    // TODO: 通信エラー時の処理を実装する
    throw new Error();
  }

  let imagePath = NO_IMAGE_PATH;
  // let imagePath = "../assets/images/no_image.jpg";
  if (doc.imageFile.filename !== "") {
    imagePath = doc.imageFile.path;
  }

  const album: Album = {
    description: doc.description,
    imageFile: {
      filename: doc.imageFile.filename,
      path: imagePath,
    },
    id: snapshot.id,
    publishedDate: doc.publishedDate,
    title: doc.title,
    publishPlatform: { ...doc.publishPlatform },
  };

  return album;
};
