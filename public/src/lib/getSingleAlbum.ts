import { db } from "../firebase";
import { Album } from "../types";
import {} from "../../assets/images/no_image.jpg";

export const getSingleAlbum = async (albumId: string): Promise<Album> => {
  const albumRef = db.collection("published_albums").doc(albumId);

  const snapshot = await albumRef.get();
  const doc = snapshot.data();

  console.dir(doc);
  console.log(albumId);

  console.log(snapshot.id);

  let imagePath = "../assets/images/no_image.jpg";
  if (doc.imageFile.filename !== "") {
    imagePath = doc.imageFile.path;
  }

  const album: Album = {
    discription: doc.discription,
    imageFile: {
      filename: doc.imageFile.filename,
      path: imagePath,
    },
    id: snapshot.id,
    publish_date: doc.publish_date,
    title: doc.title,
    services: { ...doc.services },
  };
  console.dir(album);
  console.log(typeof album);

  return album;
};
