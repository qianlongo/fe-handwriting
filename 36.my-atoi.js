// 8. 字符串转换整数 (atoi) https://leetcode-cn.com/problems/string-to-integer-atoi/

/**
 * 8. 字符串转换整数 (atoi)
请你来实现一个 myAtoi(string s) 函数，使其能将字符串转换成一个 32 位有符号整数（类似 C/C++ 中的 atoi 函数）。

函数 myAtoi(string s) 的算法如下：

读入字符串并丢弃无用的前导空格
检查下一个字符（假设还未到字符末尾）为正还是负号，读取该字符（如果有）。 确定最终结果是负数还是正数。 如果两者都不存在，则假定结果为正。
读入下一个字符，直到到达下一个非数字字符或到达输入的结尾。字符串的其余部分将被忽略。
将前面步骤读入的这些数字转换为整数（即，"123" -> 123， "0032" -> 32）。如果没有读入数字，则整数为 0 。必要时更改符号（从步骤 2 开始）。
如果整数数超过 32 位有符号整数范围 [−231,  231 − 1] ，需要截断这个整数，使其保持在这个范围内。具体来说，小于 −231 的整数应该被固定为 −231 ，大于 231 − 1 的整数应该被固定为 231 − 1 。
返回整数作为最终结果。
注意：

本题中的空白字符只包括空格字符 ' ' 。
除前导空格或数字后的其余字符串外，请勿忽略 任何其他字符。
 */
// 正则表达式做法
const myAtoi = (s) => {
  // 读取我们想要的数据
  const matchRe = /\s*([+\-]?\d*).*?/
  const match = s.match(matchRe)
  const max = Math.pow(2, 31) - 1
  const min = -max - 1
  let result = 0
  const macthNum = match[1]

  if (match && !(macthNum == '+' || macthNum === '-')) {

    if (macthNum >= min && macthNum <= max) {
      result = macthNum
    } else if (macthNum < min) {
      result = min
    } else {
      result = max
    }
  }

  console.log(match)

  return result
}

const myAtoi2 = (s) => {
  let result = parseInt(s)
  const max = Math.pow(2, 31) - 1
  const min = -max - 1

  if (isNaN(result)) {
    result = 0
  } else {
    if (result > max) {
      result = max
    } else if (result < min) {
      result = min
    }
  }

  return result
}

console.log(myAtoi("-91283472332"))
console.log(myAtoi2("-91283472332"))