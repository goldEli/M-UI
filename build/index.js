'use strict';

var _Button = require('./elements/Button/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Label = require('./elements/Label');

var _Label2 = _interopRequireDefault(_Label);

var _theme = require('./styles/theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  Button: _Button2.default,
  Label: _Label2.default,
  setTheme: _theme2.default.setTheme
};