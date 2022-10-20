import React from "react";
import { Router } from "./Router";
import { store } from "./store/store";
import { Provider } from "react-redux";

export const App: React.FC = () => {
  return (
    <>
      <Provider store={store}>
        <Router />
      </Provider>
    </>
  );
};
