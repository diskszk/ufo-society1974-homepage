import React from 'react'
import Lyric from './Lyric'

// モーダルみたいに表示する
const Note = (props) => {

  return (
    <div className="modal">
      {/* ↑モーダルの背景をクリックでモーダルを消したい */}

      <div className="modal-inner">
        <div className="modal-content note">
          <p className="song-title">{props.song.title}</p>
          <Lyric
            lyric={props.song.lyric}
          />
          <div className="btn-container">
            <button className="modal-close-btn" onClick={props.noteClose}>close</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Note;