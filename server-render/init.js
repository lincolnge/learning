'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// do not move to index.entry.js, or will cause React not found error

_moment2.default.locale('zh-cn');

var root = Function('return this')() || (42, eval)('this');

root.React = _react2.default;