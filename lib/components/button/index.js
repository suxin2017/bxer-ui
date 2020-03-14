"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

require("./index.sass");

var _icon = _interopRequireDefault(require("../icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

Button.propTypes = {
  type: _propTypes.default.oneOf(["primary", "default"]),
  size: _propTypes.default.oneOf(["sm", "md"]),
  icon: _propTypes.default.string
};
Button.defaultProps = {
  type: 'primary',
  size: 'md'
};
/**
 * 按钮组件
 */

function Button(props) {
  var _classNames;

  var type = props.type,
      size = props.size,
      icon = props.icon,
      children = props.children,
      other = _objectWithoutProperties(props, ["type", "size", "icon", "children"]);

  var btnClassNames = (0, _classnames.default)('bxer-btn', (_classNames = {}, _defineProperty(_classNames, "bxer-btn--".concat(size), size), _defineProperty(_classNames, 'bxer-btn--icon', icon && children), _classNames));
  return _react.default.createElement("button", _extends({
    className: btnClassNames
  }, other), icon && _react.default.createElement(_icon.default, {
    type: icon
  }), _react.default.createElement("span", null, children));
}

var _default = Button;
exports.default = _default;