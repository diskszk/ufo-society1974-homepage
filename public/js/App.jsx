import React from 'react';
import { Login, Lyric, SignUp } from './pages';
import { Route } from 'react-router-dom';

import { useSelector } from 'react-redux';

const App = () => {

  const selector = useSelector(state => state);
  console.log(selector.router);

  // いまいるページのURLを取得
  const rootPath = selector.router.location.pathname
  // console.log(rootPath);

  // /develop.html#/loginでloginにアクセスできる・・・なぜ
  return (
    <>
      <Route exact path={"/"} component={Lyric} />
      <Route exact path={"/login"} component={Login} />
      <Route exact path={"/signup"} component={SignUp} />
    </>
  );
}

export default App;