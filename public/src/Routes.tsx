import React from "react";
import { Switch, Route } from "react-router-dom";
import { AlbumListPage, DetailPage, UndefinedPage } from "./pages";

const Routes = () => {
  return (
    <Switch>
      <Route exact path={"/"} component={AlbumListPage} />
      <Route exact path={"/next"} component={DetailPage} />
      <Route component={UndefinedPage} />
    </Switch>
  );
};

export default Routes;
