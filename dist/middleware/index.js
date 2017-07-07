'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var app = _ref.app,
      config = _ref.config,
      db = _ref.db;

  //logger 服务日志
  app.use((0, _morgan2.default)('dev'));

  app.use((0, _cors2.default)());

  app.use(_bodyParser2.default.json());

  return app;
};
//# sourceMappingURL=index.js.map