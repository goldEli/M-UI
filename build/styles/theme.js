"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});


var theme = {},
    obj = null;

theme.setTheme = function (options) {
    obj = options;
};

theme.getTheme = function () {
    if (!obj) return;
    return obj;
};

exports.default = theme;