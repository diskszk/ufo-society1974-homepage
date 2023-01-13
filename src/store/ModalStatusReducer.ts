import { ModalStatus } from "../types";
import { initialState } from "./initialState";

const CLOSE_MODAL = "CLOSE_MODAL",
  START_REQUEST = "START_REQUEST",
  SUCCESS_REQUEST = "SUCCESS_REQUEST",
  FAIL_REQUEST = "FAIL_REQUEST";

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

type ModalStatusActionTypes =
  | CloseModalAction
  | StartRequestAction
  | SuccessRequestAction
  | FailRequestAction;

export const CreateCloseModalAction = (): ModalStatusActionTypes => {
  return {
    type: CLOSE_MODAL,
  };
};
export const createStartRequestAction = (): ModalStatusActionTypes => {
  return {
    type: START_REQUEST,
  };
};
export const createSuccessRequestAction = (): ModalStatusActionTypes => {
  return {
    type: SUCCESS_REQUEST,
  };
};
export const createFailRequestAction = (
  errorMessage: string
): ModalStatusActionTypes => {
  return {
    type: FAIL_REQUEST,
    payload: errorMessage,
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
        isOpen: false,
        modalType: "",
        errorMessage: "",
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

    default:
      return state;
  }
};
