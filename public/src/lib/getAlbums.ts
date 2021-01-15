import { db } from "../firebase";
import { Album } from "../types";

export const getAlbums = async (): Promise<Album[]> => {
  const albumsRef = db
    .collection("published_albums")
    .orderBy("publishedDate", "desc");

  const snapshots = await albumsRef.get();

  const albums: Album[] = snapshots.docs.map((snapshot) => {
    const doc = snapshot.data();

    let imagePath = "../assets/images/no_image.jpg";
    if (doc.imageFile.filename !== "") {
      imagePath = doc.imageFile.path;
    }

    return {
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
  });

  return albums;
};
