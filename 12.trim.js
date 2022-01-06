String.prototype.strim1 = function () {
  return this.replace(/^\s+|\s+$/g, '')
}
String.prototype.strim2 = function () {
  return this.replace(/^\s+(.*?)\s+$/, '$1')
}

let str = '    aaaa   '

console.log(str.length)

console.log(str)
console.log(str.strim1().length)
console.log(str.strim2().length)