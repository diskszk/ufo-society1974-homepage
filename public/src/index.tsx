import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { HashRouter } from "react-router-dom";
import App from "./App";

const container = document.getElementById("app");

if (!container) {
  throw new Error("Can not find app root.");
}
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
);
