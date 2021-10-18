const render = (template, data) => {
  return template.replace(/{{\s*?(\w+)\s*?}}/g, (match, key) => {
    return key && data.hasOwnProperty(key) ? data[ key ] : ''
  })
}

const data = {
  name: '前端胖头鱼',
  age: 100
}
const template = `
  我是: {{ name }}
  年龄是: {{age}}
`
console.log(render(template, data))