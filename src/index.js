import * as compiler from 'vue-template-compiler'
import babel from './babel'
import inject from './inject'
import parseTemplate from './template'

module.exports = function(code, config = {}) {
  const { script, template, styles } = compiler.parseComponent(code)

  const render = parseTemplate(template, config.template)
  const js = script ? babel(inject(script.content, render), config.babel) : ''
  const css = styles && styles[0] ? styles[0].content : ''

  return { js, css }
}
