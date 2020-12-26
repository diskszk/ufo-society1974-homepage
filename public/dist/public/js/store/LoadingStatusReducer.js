"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadingStatusReducer = exports.clearMessage = exports.faileRequest = exports.successRequest = exports.startRequest = void 0;
var initialState = {
    loadingStatus: {
        isLoading: false,
        error: {
            isError: false,
            message: "",
        },
    },
};
var START_REQUEST = "START_REQUEST", SUCCESS_REQUEST = "SUCCESS_REQUEST", FAIL_REQUEST = "FAIL_REQUEST", CLEAR_MESSAGE = "CLEAR_MESSAGE";
var startRequest = function () {
    return {
        type: START_REQUEST,
    };
};
exports.startRequest = startRequest;
var successRequest = function () {
    return {
        type: SUCCESS_REQUEST,
    };
};
exports.successRequest = successRequest;
var faileRequest = function (state) {
    return {
        type: FAIL_REQUEST,
        payload: __assign({}, state),
    };
};
exports.faileRequest = faileRequest;
var clearMessage = function () {
    return {
        type: CLEAR_MESSAGE,
    };
};
exports.clearMessage = clearMessage;
var LoadingStatusReducer = function (state, action) {
    if (state === void 0) { state = initialState.loadingStatus; }
    switch (action.type) {
        case START_REQUEST:
            return __assign(__assign({}, state), { isLoading: true });
        case SUCCESS_REQUEST:
            return __assign(__assign({}, state), { isLoading: false });
        case FAIL_REQUEST:
            return __assign(__assign({}, state), { isLoading: false, error: __assign({}, state.error) });
        case CLEAR_MESSAGE:
            return __assign(__assign({}, state), { error: __assign({}, initialState.loadingStatus.error) });
        default:
            return state;
    }
};
exports.LoadingStatusReducer = LoadingStatusReducer;
