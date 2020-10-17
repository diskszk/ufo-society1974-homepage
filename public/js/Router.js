import React from 'react';
import { Route, Switch } from 'react-router';
import { Home, Lyric, Login, Paths } from './pages';

// lyric.hmlからのルート
const Router = (props) => {

  const rootPath = props.rootPath;

  return (
    <Switch>
      <Route exact path={rootPath} component={Lyric} />
      <Route exact path={"/login"} component={Login} />
    </Switch>
  );
}

export default Router;