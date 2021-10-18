// 类数组转化为数组
const arrayLikeObj = {
  0: '前端胖头鱼',
  1: 100,
  length: 2
}

// 1. [].slice
console.log([].slice.call(arrayLikeObj))
// 2. Array.from
console.log(Array.from(arrayLikeObj))
// 3. Array.apply
console.log(Array.apply(null, arrayLikeObj))
// 4. [].concat
console.log([].concat.apply([], arrayLikeObj))