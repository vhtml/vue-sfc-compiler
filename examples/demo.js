"use strict";

exports.__esModule = true;
exports.default = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { attrs: { "id": "app" } }, [_vm._v("\n  " + _vm._s(_vm.message) + "\n")]);
  },

  name: 'demo',
  data: function data() {
    return {
      message: 'hello vue!'
    };
  }
};