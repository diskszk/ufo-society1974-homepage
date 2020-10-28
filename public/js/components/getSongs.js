import { fetchSongs } from './fetchSongs';

export const getSongs = async () => {
  return await fetchSongs()
    .then((songList) => {
      if (!songList) return {};

      const dataList = songList.map((song) => {
        return {
          id: song.id,
          title: song.title,
          titleKana: song.titleKana,
          story: song.story,
          lyric: song.lyric,
          created_at: song.created_at
        }
      });
      console.log(dataList);
      return dataList;
    }).catch((e) => {
      throw new Error(e);
    });
}