"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FirebaseTimestamp = exports.db = exports.auth = void 0;
var app_1 = __importDefault(require("firebase/app"));
require("firebase/auth");
require("firebase/firestore");
var config_1 = require("./config");
app_1.default.initializeApp(config_1.firebaseConfig);
exports.auth = app_1.default.auth();
exports.db = app_1.default.firestore();
exports.FirebaseTimestamp = app_1.default.firestore.Timestamp;
