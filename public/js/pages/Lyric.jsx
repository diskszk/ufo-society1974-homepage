import React from 'react';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';

const Lyric = () => {

  const dispatch = useDispatch();

  return (
    <div>
      <h1>
        Lyric Page
      </h1>
      <button
        onClick={() => dispatch(push("/develop.html/login"))}
      >
        ログイン
      </button>
    </div>
  );
}

export default Lyric;
