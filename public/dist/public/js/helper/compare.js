"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compare = void 0;
var compare = function (a, b) {
    var idA = a.id;
    var idB = b.id;
    var comparison = 0;
    if (idA > idB) {
        comparison = 1;
    }
    else if (idB > idA) {
        comparison = -1;
    }
    return comparison;
};
exports.compare = compare;
