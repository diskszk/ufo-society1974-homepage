"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.store = void 0;
var redux_1 = require("redux");
var redux_thunk_1 = __importDefault(require("redux-thunk"));
var redux_logger_1 = __importDefault(require("redux-logger"));
var LoadingStatusReducer_1 = require("./LoadingStatusReducer");
var createStore = function () {
    return redux_1.createStore(redux_1.combineReducers({
        loadingStatus: LoadingStatusReducer_1.LoadingStatusReducer,
    }), redux_1.applyMiddleware(redux_thunk_1.default, redux_logger_1.default));
};
exports.store = createStore();
