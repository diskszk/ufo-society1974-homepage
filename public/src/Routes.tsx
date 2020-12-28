import React from "react";
import { Switch, Route } from "react-router-dom";
import { AlbumListPage, AlbumDetailPage, UndefinedPage } from "./pages";

const Routes = () => {
  return (
    <Switch>
      <Route exact path={"/"} component={AlbumListPage} />
      <Route exact path={`/detail/:id`} component={AlbumDetailPage} />
      <Route component={UndefinedPage} />
    </Switch>
  );
};

export default Routes;
