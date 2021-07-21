// 递归实现
const flat1 = (array) => {
  return array.reduce((result, it) => {
    return result.concat(Array.isArray(it) ? flat1(it) : it)
  }, [])
}

let arr1 = [
  1,
  [ 2, 3, 4 ],
  [ 5, [ 6, [ 7, [ 8 ] ] ] ]
]
console.log(flat1(arr1))

// js原生的flat方法
const flat2 = (array) => {
  return array.flat(Infinity)
}

let arr2 = [
  1,
  [ 2, 3, 4 ],
  [ 5, [ 6, [ 7, [ 8 ] ] ] ]
]
console.log(flat2(arr2))
