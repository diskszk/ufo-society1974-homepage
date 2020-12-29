import { ModalStatus, Song } from "../types";
import { initialState } from "./initialState";

const CLOSE_MODAL = "CLOSE_MODAL",
  START_REQUEST = "START_REQUEST",
  SUCCESS_REQUEST = "SUCCESS_REQUEST",
  FAIL_REQUEST = "FAIL_REQUEST",
  OPEN_LYRIC_NOTE = "OPEN_LYRIC_NOTE";

type CloseModalAction = {
  type: typeof CLOSE_MODAL;
};
type StartRequestAction = {
  type: typeof START_REQUEST;
};
type SuccessRequestAction = {
  type: typeof SUCCESS_REQUEST;
};
type FailRequestAction = {
  type: typeof FAIL_REQUEST;
  payload: string;
};
type OpenLyricNoteAction = {
  type: typeof OPEN_LYRIC_NOTE;
  payload: Song;
};

type ModalStatusActionTypes =
  | CloseModalAction
  | StartRequestAction
  | SuccessRequestAction
  | FailRequestAction
  | OpenLyricNoteAction;

export const closeModal = (): ModalStatusActionTypes => {
  return {
    type: CLOSE_MODAL,
  };
};
export const startRequesty = (): ModalStatusActionTypes => {
  return {
    type: START_REQUEST,
  };
};
export const successRequest = (): ModalStatusActionTypes => {
  return {
    type: SUCCESS_REQUEST,
  };
};
export const faileRequest = (errorMessage: string): ModalStatusActionTypes => {
  return {
    type: FAIL_REQUEST,
    payload: errorMessage,
  };
};
export const openLyricNote = (song: Song): ModalStatusActionTypes => {
  return {
    type: OPEN_LYRIC_NOTE,
    payload: { ...song },
  };
};
export const ModalStatusReducer = (
  state = initialState.modalStatus,
  action: ModalStatusActionTypes
): ModalStatus => {
  switch (action.type) {
    case CLOSE_MODAL:
      return {
        ...state,
        ...initialState,
      };
    case START_REQUEST:
      return {
        ...state,
        isOpen: true,
        modalType: "LOADING",
      };
    case SUCCESS_REQUEST:
      return {
        ...state,
        isOpen: false,
        modalType: "",
      };
    case FAIL_REQUEST:
      return {
        ...state,
        isOpen: true,
        modalType: "ERROR",
        errorMessage: action.payload,
      };
    case OPEN_LYRIC_NOTE:
      return {
        ...state,
        isOpen: true,
        modalType: "LYRIC_NOTE",
        song: action.payload,
      };

    default:
      return state;
  }
};
