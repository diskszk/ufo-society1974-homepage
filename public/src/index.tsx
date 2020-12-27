import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { Switch, Route, HashRouter } from "react-router-dom";

// PageComponents
import { App, Page, UndefinedPage } from "./pages";

render(
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route exact path={"/"} component={App} />
        <Route exact path={"/page"} component={Page} />
        <Route component={UndefinedPage} />
      </Switch>
    </HashRouter>
  </Provider>,
  document.getElementById("app")
);
