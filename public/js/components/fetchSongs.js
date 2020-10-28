import { db } from '../firebase';

const songsRef = db.collection('songs');

export const fetchSongs = async () => {
  const res = await songsRef.orderBy('id').get();

  if (res.empty) {
    return false;
  };

  const songList = [];

  res.forEach(doc => {
    songList.push(doc.data());
  });

  return songList;
}