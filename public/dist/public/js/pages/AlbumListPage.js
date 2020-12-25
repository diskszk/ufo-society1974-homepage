"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var AlbumList_1 = __importDefault(require("../components/albumList/AlbumList"));
var AlbumListPage = function () {
    var albumTitles = ["good society", "athlete"];
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("header", null,
            react_1.default.createElement("a", { href: "./index.html" }, "\u30C8\u30C3\u30D7\u30DA\u30FC\u30B8"),
            react_1.default.createElement("h1", null, "\u6B4C\u8A5E\u306E\u8A18\u9332")),
        react_1.default.createElement("article", null,
            react_1.default.createElement(AlbumList_1.default, null))));
};
exports.default = AlbumListPage;
