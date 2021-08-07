// 反转字符串 https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/xnhbqj/
/**
 * 
 */
// 双指针
const reverseString = (s) => {
  let i = 0
  let j = s.length - 1

  while (i < j) {
    let temp = s[ i ]
    
    s[ i ] = s[ j ]
    console.log(i, j, temp, s[ j ], s[ i ])
    s[ j ] = temp
    
    i++
    j--
  }

  return s
}
// 单指针，做对称交换
const reverseString2 = (s) => {
  const len = s.length
  const halfLen = len / 2
  let i = 0

  while (i < halfLen) {
    const temp = s[ i ]
    const tail = len - 1 - i 

    s[ i ] = s[ tail ]
    s[ tail ] = temp

    i++
  }

  return s
}
// 结构交换两个值
const reverseString3 = (s) => {
  const len = s.length

  for (let left = 0, right = len - 1; left < right; left++, right--) {
    [ s[ right ], s[ left ] ] = [ s[ left ], s[ right ] ]
  }  

  return s
}

console.log(reverseString(["h","e","l","l","o"]))
console.log(reverseString2(["h","e","l","l","o"]))
console.log(reverseString3(["h","e","l","l","o"]))