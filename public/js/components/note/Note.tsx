import React from "react";
// import Lyric from "./Lyric";

// モーダルみたいに表示する
const Note = (props: any) => {
  return (
    <div className="modal">
      {/* ↑モーダルの背景をクリックでモーダルを消したい */}

      <div className="modal-inner">
        <div className="modal-content note">
          <p className="song-title">{props.song.title}</p>
          <div className="btn-container">
            {/* 歌詞のコンポーネント */}
            <button className="modal-close-btn" onClick={props.noteClose}>
              close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Note;
