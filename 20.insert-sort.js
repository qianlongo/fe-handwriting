// 插入排序
/**
 * 记住你是怎么打牌的就知道插入排序怎么实现了
 * 1. 首先有一个有序的序列，可以认为第一个元素就是已排序的序列
 * 2. 从未排序序列中取一个元素出来，往有序序列中找到合适的位置，如果该位置比元素大，则后移动, 否则继续往前找
 */

const insertSort = (array) => {
  for (let i = 1, length = array.length; i < length; i++) {
    let j = i - 1
    const curValue = array[ i ]

    while (j >= 0 && array[ j ] > curValue) {
      array[ j + 1 ] = array[ j ]
      j--
    }

    array[ j + 1 ] = curValue
  }

  return array
}

console.log(insertSort([ -1, 10, 10, 2 ]))