import React, { Children } from 'react';
import { useDispatch } from 'react-redux';
import { push } from "connected-react-router";

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logPath } from '../helper/logPath';

const Login = () => {

  const selector = useSelector(state => state);

  logPath();
  
  return (
    <div>
      <h1>ログイン</h1>
      <Link to="/">Lyric</Link>
    </div>
  );
}

export default Login;