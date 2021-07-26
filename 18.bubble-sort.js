// 冒泡排序 https://juejin.cn/post/6844903814340804615#heading-3
/**
 * 1. 从第一个元素开始，比较相邻的两个元素，前者大就交换位置
 * 2. 每次遍历结束，都能找到一个最大值
 * 3. 如果还有没排序的元素继续1
 * 
 */
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
