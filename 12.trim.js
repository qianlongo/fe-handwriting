String.prototype.strim1 = function () {
  return this.replace(/^\s+|\s+$/, '')
}
String.prototype.strim2 = function () {
  return this.replace(/^\s+(.*?)\s+$/, '$1')
}

let str = '     dsfd    '

console.log(str)
console.log(str.strim1())
console.log(str.strim2())