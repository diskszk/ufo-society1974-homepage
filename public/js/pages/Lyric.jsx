import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router';
import { logPath } from '../helper/logPath'

const Lyric = () => {

  const dispatch = useDispatch();
  // const selector = useSelector(state => state);

  logPath();


  return (
    <article>

      <p>coding...</p>
      <p><a href="./index.html">トップページ</a></p>
      <h1>歌詞の記録</h1>
      <h1>
        Lyric Page!
      </h1>
      {/* <button
        onClick={() => dispatch(push("/develop.html/login"))}
      >
        ログイン
      </button> */}

    </article>
  );
}

export default Lyric;
