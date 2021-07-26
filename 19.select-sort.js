// 选择排序 https://juejin.cn/post/6844903814340804615#heading-8
/**
 * 1. 取出未排序的第一个元素，遍历该元素之后的部分并进行比较。第一次就是取第一个元素
 * 2. 如果有更小的就交换位置
 */

 const swap = (array, a, b) => [ array[ b ], array[ a ] ] = [ array[ a ], array[ b ] ]
 
const selectSort = (array) => {
  const length = array.length

  for (let i = 0; i < length; i++) {
    let minIndex = i

    for (let j = i + 1; j < length; j++) {
      if (array[ j ] < array[ minIndex ]) {
        minIndex = j
      }
    }

    if (minIndex !== i) {
      swap(array, i, minIndex)
    }
  }

  return array
}

console.log(selectSort([ -1, 10, 10, 2 ]))