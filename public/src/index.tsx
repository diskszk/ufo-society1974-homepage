import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { HashRouter } from "react-router-dom";
import App from "./App";

const container = document.getElementById("app");
const root = createRoot(container);

if (!root) {
  throw new Error("Can not find app root.");
}

root.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
);
