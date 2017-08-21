"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});


var muiTheme = {},
    obj = null;

muiTheme.setMuiTheme = function (options) {
    obj = options;
    debugger;
};

muiTheme.getMuiTheme = function () {
    if (obj) return;
    return getMuiTheme({
        obj: obj
    });
};

exports.default = muiTheme;