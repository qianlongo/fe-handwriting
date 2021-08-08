// 14. 最长公共前缀 https://leetcode-cn.com/problems/longest-common-prefix/
/**
 * 14. 最长公共前缀
编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀，返回空字符串 ""。

 

示例 1：

输入：strs = ["flower","flow","flight"]
输出："fl"
示例 2：

输入：strs = ["dog","racecar","car"]
输出：""
解释：输入不存在公共前缀。
 * 
 */
// 横向扫描 也可以想起 版本比较的算法题，第一个和第二个比较，再拿结果和第三个比较
const longestCommonPrefix = (strs) => {
  if (strs.length === 0) {
    return ''
  }

  let prefix = strs[0]
  const len = strs.length
  const getPrevfix = (str1, str2) => {
    if (str1.length > str2.length) {
      return getPrevfix(str2, str1)
    }

    let i = 0
    let substrLen = 0
    const len = str1.length

    while (i < len) {
      if (str1[ i ] === str2[ i ]) {
        substrLen++
      } else {
        break
      }
      i++
    }

    return str1.substr(0, substrLen)
  }

  for (let i = 1; i < len; i++) {
    prefix = getPrevfix(prefix, strs[ i ])

    if (prefix === '') {
      return ''
    }
  }

  return prefix
}

console.log(longestCommonPrefix(["flower","flow","flight"]))
