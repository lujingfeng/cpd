define('widget/header/header', function(require, exports, module) {

  /**
   * @require widget/header/header.less
   */
  
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
  
  var _react = require("react");
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactRouter = require("react-router");
  
  var Header = _react2["default"].createClass({
    displayName: "Header",
  
    mixins: [_reactRouter.History],
  
    getInitialState: function getInitialState() {
      return {};
    },
  
    render: function render() {
  
      return _react2["default"].createElement(
        "div",
        { className: "c-header" },
        _react2["default"].createElement(
          "div",
          null,
          "header"
        )
      );
    }
  });
  
  exports["default"] = Header;
  module.exports = exports["default"];

});
