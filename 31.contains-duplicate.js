// 存在重复元素
/**
 * 
 * 给定一个整数数组，判断是否存在重复元素。

如果存在一值在数组中出现至少两次，函数返回 true 。如果数组中每个元素都不相同，则返回 false 。

 

示例 1:

输入: [1,2,3,1]
输出: true
示例 2:

输入: [1,2,3,4]
输出: false
示例 3:

输入: [1,1,1,3,3,4,3,2,4,2]
输出: true

作者：力扣 (LeetCode)
链接：https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/x248f5/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
 */

const containsDuplicate1 = (nums) => {
  const cacheMap = {}

  for (const num of nums) {
    if (cacheMap[ num ]) {
      delete cacheMap[ num ]
    } else {
      cacheMap[ num ] = 1
    }
  }

  return Object.keys(cacheMap).length < nums.length
}

const containsDuplicate2 = (nums) => {
  nums.sort((a, b) => a - b)

  const len = nums.length
  let slow = 0
  let fast = 1

  while (fast < len) {
    if (nums[ slow ] !== nums[ fast ]) {
      slow++
      fast++
    } else {
      break
    }
  }

  return fast !== len
}

console.log(containsDuplicate1([1,1,1,3,3,4,3,2,4,2]))
console.log(containsDuplicate2([1,1,1,3,3,4,3,2,4,2]))
console.log(containsDuplicate1([1,2,3,4]))
console.log(containsDuplicate2([1,2,3,4]))