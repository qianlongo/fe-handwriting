// 350. 两个数组的交集 II https://leetcode-cn.com/problems/intersection-of-two-arrays-ii/
/**
 * 
 * 给定两个数组，编写一个函数来计算它们的交集。

 

示例 1：

输入：nums1 = [1,2,2,1], nums2 = [2,2]
输出：[2,2]
示例 2:

输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
输出：[4,9]
 

说明：

输出结果中每个元素出现的次数，应与元素在两个数组中出现次数的最小值一致。
我们可以不考虑输出结果的顺序。
进阶：

如果给定的数组已经排好序呢？你将如何优化你的算法？
如果 nums1 的大小比 nums2 小很多，哪种方法更优？
如果 nums2 的元素存储在磁盘上，内存是有限的，并且你不能一次加载所有的元素到内存中，你该怎么办？


来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/intersection-of-two-arrays-ii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * 
 */

// 解法1，map记录法
const intersect1 = (nums1, nums2) => {
  const cacheMap = {}
  const len1 = nums1.length
  const len2 = nums2.length
  let result = []
  
  for (let i = 0; i < len1; i++) {
    const value = cacheMap[ nums1[ i ] ]
    cacheMap[ nums1[ i ] ] = typeof value !== 'undefined' ? value + 1 : 1
  }

  for (let j = 0; j < len2; j++) {
    const count = cacheMap[nums2[ j ]]

    if (count) {
      result.push(nums2[ j ])
      cacheMap[nums2[ j ]]--
    }
  }

  return result
}
// 双指针法
const intersect2 = (nums1, nums2) => {
  const len1 = nums1.length
  const len2 = nums2.length
  let i = 0
  let j = 0
  let result = []

  nums1.sort((a, b) => a - b)
  nums2.sort((a, b) => a - b)

  while (i < len1 && j < len2) {
    if (nums1[ i ] === nums2[ j ]) {
      result.push(nums1[ i ])
      i++
      j++
    } else if (nums1[ i ] < nums2[ j ]) {
      i++
    } else {
      j++
    }
  }

  return result
}

const n1 = [1,2,2,1]
let n2 = [2,2]

let m1 = [4,9,5]
let m2 = [9,4,9,8,4]

console.log(intersect1(n1, n2))
console.log(intersect2(n1, n2))

console.log(intersect1(m1, m2))
console.log(intersect2(m1, m2))