import { db } from "../firebase";
import { Album } from "../types";

export const getAlbums = async (): Promise<Album[]> => {
  const albumsRef = db
    .collection("published_albums")
    .orderBy("publish_date", "desc");

  const snapshots = await albumsRef.get();

  const albums: Album[] = snapshots.docs.map((snapshot) => {
    const doc = snapshot.data();

    let imagePath = "../assets/images/no_image.jpg";
    if (doc.imageFile.filename !== "") {
      imagePath = doc.imageFile.path;
    }

    return {
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
  });

  return albums;
};
