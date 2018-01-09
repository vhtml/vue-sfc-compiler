const compile = require('../lib')
const fs = require('fs')
const DemoTemplate = fs.readFileSync('./demo.vue', 'utf-8')

try {
  const str = compile(DemoTemplate)
  fs.writeFileSync('./demo.js', str.js)
  fs.writeFileSync('./demo.css', str.css)
} catch (e) {
  console.error(e)
}
