"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var AlbumListPage_1 = __importDefault(require("./pages/AlbumListPage"));
// ルーティング
var App = function () {
    return react_1.default.createElement(AlbumListPage_1.default, null);
};
exports.default = App;
