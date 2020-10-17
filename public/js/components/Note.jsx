import React from 'react'
import Lyric from './Lyric'

// モーダルみたいに表示する
const Note = (props) => {

  let modal = <></>;
  if (props.isPreview) {
    modal = (
      <div className="modal">
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
  return (
    <div>
      {modal}
    </div>
  );
}

export default Note;