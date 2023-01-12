import { createStore as reduxCreateStore, combineReducers } from "redux";
import { LoadingStatusReducer } from "./LoadingStatusReducer";
import { ModalStatusReducer } from "./ModalStatusReducer";

const createStore = () => {
  return reduxCreateStore(
    combineReducers({
      loadingStatus: LoadingStatusReducer,
      modalStatus: ModalStatusReducer,
    })
  );
};

export const store = createStore();
