// 字符串中的第一个唯一字符 https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/xn5z8r/
/**
 * 387. 字符串中的第一个唯一字符
给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。

 

示例：

s = "leetcode"
返回 0

s = "loveleetcode"
返回 2
 

提示：你可以假定该字符串只包含小写字母。
 */
// 利用hash表存储数量进行计数，然后再进行一次计算
const firstUniqChar = (s) => {
  let cacheMap = {}

  for (let i = 0, len = s.length; i < len; i++) {
    const value = s[ i ]
    
    cacheMap[ value ] = typeof cacheMap[ value ] !== 'undefined' ? cacheMap[ value ] +1 : 1
  }

  for (let i = 0, len = s.length; i < len; i++) {
    if (cacheMap[ s[ i ] ] === 1) {
      return i
    }
  }

  return -1
}

console.log(firstUniqChar("aadadaad"))