import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { LoadingStatusReducer } from "./LoadingStatusReducer";

const createStore = () => {
  return reduxCreateStore(
    combineReducers({
      loadingStatus: LoadingStatusReducer,
    }),
    applyMiddleware(thunk, logger)
  );
};

export const store = createStore();
