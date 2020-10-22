import React, { useCallback, useState } from 'react'
import Note from '../components/Note';
import SongTable from '../components/SongTable';
import { compare } from '../helper/compare';

import { songs } from '../components/songData';       // test data

const LyricPage = () => {

  const [isPreview, setIsPreview] = useState(false);
  const [song, setSong] = useState({});
  const sortedSongs = songs.slice().sort(compare);

  const hundleClick = (song) => {
    if (!isPreview) {
      setSong(song);
      setIsPreview(true);
    }
  }

  const noteClose = useCallback(() => {
    setIsPreview(false);
  }, []);

  return (
    <article>
      {isPreview && (
        <Note
          isPreview={isPreview}
          noteClose={noteClose}
          song={song}
        />
      )}
      <p><a href="./index.html">トップページ</a></p>
      <h1>歌詞の記録</h1>
      <div className="all-songs">
        <SongTable
          songs={sortedSongs}
          hundleClick={hundleClick}
        />
      </div>
    </article>
  );
}

export default LyricPage;
