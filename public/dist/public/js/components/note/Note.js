"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
// import Lyric from "./Lyric";
// モーダルみたいに表示する
var Note = function (props) {
    return (react_1.default.createElement("div", { className: "modal" },
        react_1.default.createElement("div", { className: "modal-inner" },
            react_1.default.createElement("div", { className: "modal-content note" },
                react_1.default.createElement("p", { className: "song-title" }, props.song.title),
                react_1.default.createElement("div", { className: "btn-container" },
                    react_1.default.createElement("button", { className: "modal-close-btn", onClick: props.noteClose }, "close"))))));
};
exports.default = Note;
