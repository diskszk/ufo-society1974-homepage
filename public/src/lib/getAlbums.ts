import { db } from "../firebase";

export const getAlbums = async () => {
  const albumsRef = db.collection("published_albums");

  const snapshots = await albumsRef.get();
  const albums = snapshots.docs.map((doc) => {
    return doc.data();
  });

  console.dir(albums);
};
