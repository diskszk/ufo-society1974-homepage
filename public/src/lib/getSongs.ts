import { db } from "../firebase";
import { Song } from "../types";

export const getSongs = async (albumId: string): Promise<Song[]> => {
  const songsRef = db
    .collection("published_albums")
    .doc(albumId)
    .collection("songs")
    .orderBy("id");

  const snapshots = await songsRef.get();

  const songs: Song[] = snapshots.docs.map((snapshot) => {
    const doc = snapshot.data();

    const shapeedId = Number(doc.id).toString();

    const song: Song = {
      id: shapeedId,
      lyric: doc.lyric,
      songFile: {
        filename: doc.songFile.filename,
        path: doc.songFile.path,
      },
      story: doc.story,
      title: doc.title,
      wordsRights: doc.wordsRights,
      musicRights: doc.musicRights,
    };

    return song;
  });

  return songs;
};
