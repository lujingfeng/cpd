define('pagelet/app/app', function(require, exports, module) {

  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
  
  var _react = require("react");
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactRouter = require("react-router");
  
  var _widgetHeaderHeader = require("widget/header/header");
  
  var _widgetHeaderHeader2 = _interopRequireDefault(_widgetHeaderHeader);
  
  var App = _react2["default"].createClass({
    displayName: "App",
  
    mixins: [_reactRouter.History],
    getInitialState: function getInitialState() {
      return {};
    },
    componentDidMount: function componentDidMount() {},
  
    componentWillUnmount: function componentWillUnmount() {},
  
    onLoginStateChange: function onLoginStateChange(state) {},
  
    render: function render() {
      return _react2["default"].createElement(
        "div",
        { className: "c-app" },
        _react2["default"].createElement(_widgetHeaderHeader2["default"], null)
      );
    }
  });
  
  exports["default"] = App;
  module.exports = exports["default"];

});
