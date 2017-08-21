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
      var _this$props = _this.props,
          style = _this$props.style,
          overlayStyle = _this$props.overlayStyle;


      if (overlayStyle) {
        return style;
      }
      if (style) {
        return Object.assign({}, oldStyle, style);
      }
      return oldStyle;
    };

    _this.generatorStyles = function () {
      var size = _this.props.size;


      return _this.overwriteStyle(_extends({
        backgroundColor: colors.blue2,
        color: colors.white
      }, _size.buttonSizes[size ? size : 'medium']));
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

    _this.state = _this.generatorStyles();
    return _this;
  }

  _createClass(Button, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          labelStyle = _props.labelStyle,
          children = _props.children;


      return _react2.default.createElement(_FlatButton2.default, {
        labelStyle: labelStyle,
        label: '123',
        onMouseOver: this.changgColorToLight,
        onMouseOut: this.changeColorToDark,
        style: this.state
      });
    }
  }]);

  return Button;
}(_react2.default.Component);

// const buttonSizes = {
//   small: {
//     'font-size': '14px',
//     'line-height': '30px',
//     padding: '0 8px',
//   },
//   medium: {
//     'font-size': '16px',
//     'line-height': '40px',
//     padding: '0 12px',
//   },
//   large: {
//     'font-size': '18px',
//     'line-height': '50px',
//     padding: '0 16px',
//   },
//   wide: {
//     'font-size': '16px',
//     'line-height': '40px',
//     padding: '0 36px',
//   },
//   extraWide: {
//     'font-size': '16px',
//     'line-height': '40px',
//     padding: '0 72px',
//   },
//   fullWidth: {
//     'font-size': '16px',
//     'line-height': '40px',
//     padding: '0 8px',
//   },
// };

// function setDisplay({ size }) {
//   return size === 'fullWidth' ? 'block' : 'inline-block';
// }

// function setWidth({ size }) {
//   return size === 'fullWidth' ? '100%' : 'initial';
// }

// const Button = styled.button`
//   background: ${({ bgColor })  => colors[bgColor]};
//   border: none;
//   border-radius: 2px;
//   color: ${({ fontColor })  => colors[fontColor]};
//   cursor: pointer;
//   display: ${setDisplay};
//   font-size: ${({ size }) => buttonSizes[size]['font-size']};
//   line-height: ${({ size }) => buttonSizes[size]['line-height']};
//   font-weight: 200;
//   margin: 8px 0;
//   outline: none;
//   padding: ${({ size }) => buttonSizes[size]['padding']};
//   width: ${setWidth};
//   text-transform: uppercase;
//   transition: all 300ms ease;
//   &:hover {
//     background: ${({ bgColor })  => darken(0.1, colors[bgColor])};
//   }
// `;

// Button.defaultProps = {
//   bgColor: 'blue',
//   fontColor: 'white',
//   size: 'medium',
// };

exports.default = Button;