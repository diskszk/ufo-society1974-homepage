"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var AlbumItem = function (_a) {
    var album = _a.album;
    return react_1.default.createElement("li", null, album.title);
};
exports.default = AlbumItem;
