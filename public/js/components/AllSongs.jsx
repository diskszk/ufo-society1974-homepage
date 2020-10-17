import React, { useCallback, useEffect, useState } from 'react'
import Note from './Note';
import { kite, young } from './songData';

const songs = [
  {
    id: kite.id,
    title: kite.title,
    titleJP: kite.titleJP,
    story: kite.story,
    lyric: kite.lyric,
  },
  {
    id: young.id,
    title: young.title,
    titleJP: young.titleJP,
    story: young.story,
    lyric: young.lyric,
  }
];


const AllSongs = () => {
  const [isPreview, setIsPreview] = useState(false);
  const [song, setSong] = useState({});

  const hundleClick = (song) => {
    if (!isPreview) {
      setSong(song);
      setIsPreview(true);
    }
  }

  const noteClose = useCallback(() => {
    setIsPreview(false);
  }, [])

  return (
    <div className="all-songs">
      <p>all songs</p>
      {isPreview && (
        <Note
          isPreview={isPreview}
          noteClose={noteClose}
          song={song}
        />
      )}

      {/*  dbからfetchしたid/データを詰める */}
      {songs.map((song, key) => {
        return (
          <>
            <table>
              <tbody>
                <tr role="button" className="tr-song" id={key} onClick={() => hundleClick(song)}>
                  <td className="table-title">{song.id}. {song.titleJP}</td>
                  <td>{song.story}</td>
                </tr>
              </tbody>
            </table>
          </>
        );
      })}
    </div>
  );
}

export default AllSongs;