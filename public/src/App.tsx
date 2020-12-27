import React from "react";
import { getAlbums } from "./lib/getAlbums";
import { startRequest } from "./store/LoadingStatusReducer";
import { useDispatch, useSelector } from "react-redux";
import { RootStore, LoadingStatus } from "./types";

const App = () => {
  const dispatch = useDispatch();
  getAlbums();
  dispatch(startRequest());

  const state = useSelector<RootStore, LoadingStatus>(
    (state) => state.loadingStatus
  );

  console.dir(state);
  return (
    <div>
      <h1>React x TypeScript!</h1>
    </div>
  );
};

export default App;
