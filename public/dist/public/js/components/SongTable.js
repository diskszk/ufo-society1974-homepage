"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var SongTable = function (props) {
    return (react_1.default.createElement("table", null, props.songs.map(function (song, key) {
        return (react_1.default.createElement("tbody", { key: key },
            react_1.default.createElement("tr", { role: "button", className: "tr-song", id: key, onClick: function () { return props.hundleClick(song); } },
                react_1.default.createElement("td", { className: "table-title" },
                    song.id,
                    ". ",
                    song.titleKana),
                react_1.default.createElement("td", null, song.story))));
    })));
};
exports.default = SongTable;
