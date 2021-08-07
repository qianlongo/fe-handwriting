// 283. 移动零 https://leetcode-cn.com/problems/move-zeroes/
/**
 * 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

示例:

输入: [0,1,0,3,12]
输出: [1,3,12,0,0]
说明:

必须在原数组上操作，不能拷贝额外的数组。
尽量减少操作次数。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/move-zeroes
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * 
 */

// 思路就是将非零的不断往前移动，零的不断往后移动
const moveZeroes = (nums) => {
  let len = nums.length  
  let j = 0
  
  for (let i = 0; i < len; i++) {
    if (nums[ i ] !== 0) {
      let temp = nums[ i ]

      nums[ i ] = nums[ j ]
      nums[ j ] = temp

      j++
    }
  }

  return nums
}

moveZeroes([0,1,0,3,12])