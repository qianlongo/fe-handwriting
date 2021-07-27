// 验证回文字符串 https://leetcode-cn.com/problems/valid-palindrome/
/**
 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。

说明：本题中，我们将空字符串定义为有效的回文串。

 

示例 1:

输入: "A man, a plan, a canal: Panama"
输出: true
解释："amanaplanacanalpanama" 是回文串
示例 2:

输入: "race a car"
输出: false
解释："raceacar" 不是回文串

 */

const isPalindrome = (str) => {
  str = str.replace(/[^a-zA-Z\d]/g, '').toLowerCase()
  
  const length = str.length
  let i = 0

  while (i < length / 2) {
    if (str[ i ] !== str[ str.length - 1 - i ]) {
      return false
    }
    i++
  }

  return true
}

console.log(isPalindrome('A man, a plan, a canal: Panama'))