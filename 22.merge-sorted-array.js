// https://leetcode-cn.com/problems/merge-sorted-array/
/**
 * 给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。

初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。你可以假设 nums1 的空间大小等于 m + n，这样它就有足够的空间保存来自 nums2 的元素。

 

示例 1：

输入：nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
输出：[1,2,2,3,5,6]
示例 2：

输入：nums1 = [1], m = 1, nums2 = [], n = 0
输出：[1]

 * 
 */
const nums1 = [1,2,3,0,0,0]
const m = 3
const nums2 = [2,5,6]
const n = 3

const merge = (num1, m, num2, n) => {
  let i = m - 1
  let j = n - 1
  let k = m + n  -1

  while (i >= 0 && j >= 0) {
    if (num1[ i ] > num2[ j ]) {
      num1[ k ] = num1[ i ]
      i--
      k--
    } else {
      num1[ k ] = num2[ j ]
      j--
      k--
    }
  }

  while (j >= 0) {
    num1[ j ] = num2[ j ]
    j--
  }

  return num1
}

console.log(merge(nums1, m, nums2, n))