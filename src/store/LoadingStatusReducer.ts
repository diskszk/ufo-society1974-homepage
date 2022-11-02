import { LoadingStatus } from "../types";
import { initialState } from "./initialState";

const START_REQUEST = "START_REQUEST",
  SUCCESS_REQUEST = "SUCCESS_REQUEST",
  FAIL_REQUEST = "FAIL_REQUEST",
  CLEAR_MESSAGE = "CLEAR_MESSAGE";

type StartRequestAction = {
  type: typeof START_REQUEST;
};
type SuccessRequestAction = {
  type: typeof SUCCESS_REQUEST;
};
type FailRequestAction = {
  type: typeof FAIL_REQUEST;
  payload: LoadingStatus;
};
type ClearMessageAction = {
  type: typeof CLEAR_MESSAGE;
};

type LoadingStatusActionTypes =
  | StartRequestAction
  | SuccessRequestAction
  | FailRequestAction
  | ClearMessageAction;

export const createStartRequestAction = (): LoadingStatusActionTypes => {
  return {
    type: START_REQUEST,
  };
};
export const CreateSuccessRequestAction = (): LoadingStatusActionTypes => {
  return {
    type: SUCCESS_REQUEST,
  };
};
export const createFailRequestAction = (
  state: LoadingStatus
): LoadingStatusActionTypes => {
  return {
    type: FAIL_REQUEST,
    payload: {
      ...state,
    },
  };
};
export const createClearMessageAction = (): LoadingStatusActionTypes => {
  return {
    type: CLEAR_MESSAGE,
  };
};

export const LoadingStatusReducer = (
  state = initialState.loadingStatus,
  action: LoadingStatusActionTypes
): LoadingStatus => {
  switch (action.type) {
    case START_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case SUCCESS_REQUEST:
      return {
        ...state,
        isLoading: false,
      };
    case FAIL_REQUEST:
      return {
        ...state,
        isLoading: false,
        error: {
          ...state.error,
        },
      };
    case CLEAR_MESSAGE:
      return {
        ...state,
        error: {
          ...initialState.loadingStatus.error,
        },
      };

    default:
      return state;
  }
};
