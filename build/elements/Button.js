'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  background: ', ';\n  border: none;\n  border-radius: 2px;\n  color: ', ';\n  cursor: pointer;\n  display: ', ';\n  font-size: ', ';\n  line-height: ', ';\n  font-weight: 200;\n  margin: 8px 0;\n  outline: none;\n  padding: ', ';\n  width: ', ';\n  text-transform: uppercase;\n  transition: all 300ms ease;\n  &:hover {\n    background: ', ';\n  }\n'], ['\n  background: ', ';\n  border: none;\n  border-radius: 2px;\n  color: ', ';\n  cursor: pointer;\n  display: ', ';\n  font-size: ', ';\n  line-height: ', ';\n  font-weight: 200;\n  margin: 8px 0;\n  outline: none;\n  padding: ', ';\n  width: ', ';\n  text-transform: uppercase;\n  transition: all 300ms ease;\n  &:hover {\n    background: ', ';\n  }\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _colors = require('../styles/colors');

var colors = _interopRequireWildcard(_colors);

var _polished = require('polished');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var buttonSizes = {
  small: {
    'font-size': '14px',
    'line-height': '30px',
    padding: '0 8px'
  },
  medium: {
    'font-size': '16px',
    'line-height': '40px',
    padding: '0 12px'
  },
  large: {
    'font-size': '18px',
    'line-height': '50px',
    padding: '0 16px'
  },
  wide: {
    'font-size': '16px',
    'line-height': '40px',
    padding: '0 36px'
  },
  extraWide: {
    'font-size': '16px',
    'line-height': '40px',
    padding: '0 72px'
  },
  fullWidth: {
    'font-size': '16px',
    'line-height': '40px',
    padding: '0 8px'
  }
};

function setDisplay(_ref) {
  var size = _ref.size;

  return size === 'fullWidth' ? 'block' : 'inline-block';
}

function setWidth(_ref2) {
  var size = _ref2.size;

  return size === 'fullWidth' ? '100%' : 'initial';
}

var Button = _styledComponents2.default.button(_templateObject, function (_ref3) {
  var bgColor = _ref3.bgColor;
  return colors[bgColor];
}, function (_ref4) {
  var fontColor = _ref4.fontColor;
  return colors[fontColor];
}, setDisplay, function (_ref5) {
  var size = _ref5.size;
  return buttonSizes[size]['font-size'];
}, function (_ref6) {
  var size = _ref6.size;
  return buttonSizes[size]['line-height'];
}, function (_ref7) {
  var size = _ref7.size;
  return buttonSizes[size]['padding'];
}, setWidth, function (_ref8) {
  var bgColor = _ref8.bgColor;
  return (0, _polished.darken)(0.1, colors[bgColor]);
});

Button.defaultProps = {
  bgColor: 'blue',
  fontColor: 'white',
  size: 'medium'
};

exports.default = Button;