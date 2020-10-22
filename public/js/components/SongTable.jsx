import React from 'react';

const SongTable = (props) => {

  return (
    <table>
      {/*  dbからfetchしたid/データを詰める */}
      {props.songs.map((song, key) => {
        return (
          <tbody key={key}>
            <tr role="button" className="tr-song" id={key} onClick={() => props.hundleClick(song)}>
              <td className="table-title">{song.id}. {song.titleJP}</td>
              <td>{song.story}</td>
            </tr>
          </tbody>
        );
      })}
    </table>
  );
}

export default SongTable;