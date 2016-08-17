define('static/entry', function(require, exports, module) {

  "use strict";
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
  
  var _react = require("react");
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactDom = require("react-dom");
  
  var _reactDom2 = _interopRequireDefault(_reactDom);
  
  var _reactRouter = require("react-router");
  
  var _pageletAppApp = require("pagelet/app/app");
  
  var _pageletAppApp2 = _interopRequireDefault(_pageletAppApp);
  
  _reactDom2["default"].render(_react2["default"].createElement(
    _reactRouter.Router,
    null,
    _react2["default"].createElement(_reactRouter.Route, { path: "/", component: _pageletAppApp2["default"] })
  ), document.getElementById("content"));

});
