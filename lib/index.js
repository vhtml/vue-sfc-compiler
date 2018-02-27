'use strict';

var _vueTemplateCompiler = require('vue-template-compiler');

var compiler = _interopRequireWildcard(_vueTemplateCompiler);

var _babel = require('./babel');

var _babel2 = _interopRequireDefault(_babel);

var _inject = require('./inject');

var _inject2 = _interopRequireDefault(_inject);

var _template = require('./template');

var _template2 = _interopRequireDefault(_template);

var _postcss = require('./postcss');

var _postcss2 = _interopRequireDefault(_postcss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

module.exports = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(code) {
    var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var _compiler$parseCompon, script, template, styles, render, js, css;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _compiler$parseCompon = compiler.parseComponent(code), script = _compiler$parseCompon.script, template = _compiler$parseCompon.template, styles = _compiler$parseCompon.styles;
            render = (0, _template2.default)(template, config.template);
            js = script ? (0, _babel2.default)((0, _inject2.default)(script.content, render), config.babel) : '';

            if (!styles) {
              _context.next = 9;
              break;
            }

            _context.next = 6;
            return (0, _postcss2.default)(styles, config.resourcePath, config.postcss);

          case 6:
            _context.t0 = _context.sent;
            _context.next = 10;
            break;

          case 9:
            _context.t0 = '';

          case 10:
            css = _context.t0;
            return _context.abrupt('return', { js: js, css: css });

          case 12:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x2) {
    return _ref.apply(this, arguments);
  };
}();