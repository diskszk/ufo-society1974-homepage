import { db } from "./firebase";
import { Album } from "../types";

// fetch -> 整形 -> storeにset
export const getAlbums = () => {
  return async (dispatch) => {
    const res = await db.collection("published_albums");
    const albums = [
      {
        discription: "",
        imageFile: {
          filename: "",
          path: "",
        },
        id: "",
        publish_date: "",
        title: "",
      },
    ];

    return albums;
  };

  // console.dir(res);
  // const albums: Album[] = res.docs.map((snapshot) => {
  //   const doc = snapshot.data();
  //   const album: Album = {
  //     discription: doc.discription,
  //     imageFile: {
  //       filename: doc.imageFile.filename,
  //       path: doc.imageFile.path,
  //     },
  //     id: doc.id,
  //     publish_date: doc.publish_date,
  //     title: doc.title,
  //   };
  //   console.dir(album);
  //   return album;
  // });

  // return albums;
};
