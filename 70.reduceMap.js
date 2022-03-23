Array.prototype.map2 = function (callback, ctx = null) {
  if (typeof callback !== 'function') {
    throw('callback must be a function')
  }

  return this.reduce((result, cur, index, array) => {
    return  result.concat(callback.call(ctx, cur, index, array))
  }, [])
}

let arr = [ 1, 2 ]
let arr2 = arr.map2(function (it, i, array) {
  console.log(it, i, array, this)
  return it * 2
}, { name: 'fatfish' })

console.log(arr2) 