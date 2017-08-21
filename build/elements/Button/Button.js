'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _colors = require('../../styles/colors');

var colors = _interopRequireWildcard(_colors);

var _size = require('../../styles/size');

var _polished = require('polished');

var _FlatButton = require('material-ui/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _RaisedButton = require('material-ui/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _MuiThemeProvider = require('material-ui/styles/MuiThemeProvider');

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _getMuiTheme = require('material-ui/styles/getMuiTheme');

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

var _theme = require('../../styles/theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  create by miaoyu  2017/8/17
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  props =>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *    size: small \ medium \ large
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

// import styled from 'styled-components';


var Button = function (_React$Component) {
  _inherits(Button, _React$Component);

  function Button(props) {
    _classCallCheck(this, Button);

    var _this = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, props));

    _this.overwriteStyle = function (oldStyle) {
      var style = _this.props.style;


      if (style) {
        return Object.assign({}, oldStyle, style);
      }
      return oldStyle;
    };

    _this.generatorStyles = function () {
      var _this$props = _this.props,
          size = _this$props.size,
          disabled = _this$props.disabled;

      var obj = _extends({}, _size.buttonSizes[size ? size : 'medium']);

      // disabled
      if (disabled) {
        obj.backgroundColor = colors.disabled1;
        obj.color = colors.disabled2;
        obj.cursor = "not-allowed";
        return _this.overwriteStyle(obj);
      } else {
        obj.backgroundColor = colors.blue2;
        obj.color = colors.white;
        return _this.overwriteStyle(obj);
      }
    };

    _this.changeColorToDark = function () {
      _this.setState({
        backgroundColor: colors.blue2
      });
    };

    _this.changgColorToLight = function () {
      _this.setState({
        backgroundColor: colors.blue1
      });
    };

    _this.generateProperty = function () {
      var _this$props2 = _this.props,
          onClick = _this$props2.onClick,
          disabled = _this$props2.disabled;


      if (disabled) {
        return {
          disabled: true,
          style: _this.state
        };
      } else {
        return {
          onMouseOver: _this.changgColorToLight,
          onMouseOut: _this.changeColorToDark,
          onClick: onClick,
          style: _this.state
        };
      }
    };

    _this.muiTheme = (0, _getMuiTheme2.default)(_theme2.default.getTheme());
    _this.state = _this.generatorStyles();

    return _this;
  }

  _createClass(Button, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          labelStyle = _props.labelStyle,
          children = _props.children,
          label = _props.label;


      return _react2.default.createElement(
        _MuiThemeProvider2.default,
        { muiTheme: this.muiTheme },
        _react2.default.createElement(_FlatButton2.default, _extends({
          labelStyle: labelStyle,
          label: label ? label : 'default'
        }, this.generateProperty()))
      );
    }
  }]);

  return Button;
}(_react2.default.Component);

exports.default = Button;