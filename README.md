# vue-sfc-compiler
Vue single file component compiler.

### Options

| Option | Default | Description |
|--------------|---------------------------------|--------------------------------|
| template     | `{ preserveWhitespace: false }` | Vue template compiler options  |
| babel        | `{}`                            | babel options                  |
| postcss      | `[]`                            | postcss plugins options        |
| resourcePath | `undefined`                     | Vue single file component path |

### Options 参考
* [vue-template-compiler](https://www.npmjs.com/package/vue-template-compiler)
* [babel](http://babeljs.io/)
* [postcss](http://api.postcss.org/postcss.html)