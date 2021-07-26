// 冒泡排序 https://juejin.cn/post/6844903814340804615#heading-3
const swap = (array, a, b) => [ array[ b ], array[ a ] ] = [ array[ a ], array[ b ] ]
const bubbleSort = (array) => {
  const length = array.length
  for (let i = 0; i < length - 1; i++) {
    for (let j = 0; j < length - 1 - i; j++) {
      if (array[ j ] > array[ j + 1 ]) {
        swap(array, j, j + 1)
      }
    }
  }

  return array
}

console.log(bubbleSort([ -1, 10, 10, 2 ]))
