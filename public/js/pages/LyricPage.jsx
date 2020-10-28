import React, { useCallback, useEffect, useState } from 'react'
import Note from '../components/Note';
import SongTable from '../components/SongTable';
import { compare } from '../helper/compare';
import { getSongs } from '../components/getSongs';

const LyricPage = () => {

  const [isPreview, setIsPreview] = useState(false);
  const [song, setSong] = useState({});
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);

  const hundleClick = (song) => {
    if (!isPreview) {
      setSong(song);
      setIsPreview(true);
    }
  }

  const noteClose = useCallback(() => {
    setIsPreview(false);
  }, []);

  useEffect(() => {
    getSongs()
      .then(list => {
        setSongs(list);
        setLoading(false);
      }).catch(e => {
        throw new Error(e);
      })
  }, [setSongs]);

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

      {loading ? (
        <h2>Loading...</h2>
      ) : (
          <div className="all-songs">
            <SongTable
              songs={songs}
              hundleClick={hundleClick}
            />
          </div>
        )}
    </article>
  );
}

export default LyricPage;
