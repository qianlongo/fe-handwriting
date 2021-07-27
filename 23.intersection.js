// https://leetcode-cn.com/problems/intersection-of-two-arrays/solution/liang-ge-shu-zu-de-jiao-ji-by-user7746o/
/**
 * 给定两个数组，编写一个函数来计算它们的交集。

 

示例 1：

输入：nums1 = [1,2,2,1], nums2 = [2,2]
输出：[2]
示例 2：

输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
输出：[9,4]
 

说明：

输出结果中的每个元素一定是唯一的。
我们可以不考虑输出结果的顺序。

 * 
 */
// 直觉做法
const intersection1 = (nums1, nums2) => {
  return [ ...new Set(nums1.filter((it) => nums2.includes(it))) ]
};
// 排序 + 双指针 
const intersection2 = (nums1, nums2) => {
  nums1.sort((a, b) => a - b)
  nums2.sort((a, b) => a - b)

  const length1 = nums1.length
  const length2 = nums2.length

  let index1 = 0
  let index2 = 0

  const intersection = []

  while (index1 < length1 && index2 < length2) {
    const num1 = nums1[ index1 ]
    const num2 = nums2[ index2 ]

    if (num1 === num2) {
      if (!intersection.length || num1 !== intersection[ intersection.length - 1 ]) {
        intersection.push(num1)
      }
      index1++
      index2++
    } else if (num1 < num2) {
      index1++
    } else {
      index2++
    }
  }

  return intersection
}

// hash map
const intersection3 = (nums1, nums2) => {
  // const isNums1Min = nums1.length < nums2
  // const nums1Set = new Set(isNums1Min ? nums1 : nums2)
  // const nums2Set = new Set(isNums1Min ? nums2: nums1)

  if (nums1.length > nums2.length) {
    return intersection3(nums2, nums1)
  }

  const nums1Set = new Set(nums1)
  const nums2Set = new Set(nums2)
  const intersection = new Set()

  for (let num of nums1Set) {
    if (nums2Set.has(num)) {
      intersection.add(num)
    }
  }

  return [ ... intersection ]
}

console.log(intersection1([1,2,2,1], [2,2]))
console.log(intersection1([4,9,5], [9,4,9,8,4]))

console.log(intersection2([1,2,2,1], [2,2]))
console.log(intersection2([4,9,5], [9,4,9,8,4]))

console.log(intersection3([1,2,2,1], [2,2]))
console.log(intersection3([4,9,5], [9,4,9,8,4]))