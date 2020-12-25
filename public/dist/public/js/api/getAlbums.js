"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAlbums = void 0;
var firebase_1 = require("../firebase");
var albumsRef = firebase_1.db.collection("published_albums");
// fetch -> 整形 -> storeにset
var getAlbums = function () {
    alert("KUMA!!!");
};
exports.getAlbums = getAlbums;
