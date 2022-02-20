// 有效的括号
// 20 https://leetcode-cn.com/problems/valid-parentheses/
/**
 * 
 * 20. 有效的括号
给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
 

示例 1：

输入：s = "()"
输出：true
示例 2：

输入：s = "()[]{}"
输出：true
示例 3：

输入：s = "(]"
输出：false
示例 4：

输入：s = "([)]"
输出：false
示例 5：

输入：s = "{[]}"
输出：true
 

提示：

1 <= s.length <= 104
s 仅由括号 '()[]{}' 组成
 * 
 */

const isValid = (s) => {
  // 空字符串符合条件
  if (!s) {
    return true
  }

  const leftToRight = {
    '(': ')',
    '[': ']',
    '{': '}'
  }
  const stack = []

  for (let i = 0, len = s.length; i < len; i++) {
    const ch = s[i]
    const metchCh = leftToRight[ ch ]
    // 左括号
    if (metchCh) {
      stack.push(metchCh)
    } else {
      // 右括号开始匹配
      // 1. 如果栈内没有左括号，直接false
      // 2. 有数据但是栈顶元素不是当前的右括号
      if (!stack.length || stack.pop() !== ch) {
        return false
      }
    }
  }

  // 最后检查栈内还有没有元素，有说明还有未匹配则不符合
  return !stack.length
}

const isValid2 = (s) => {
  while (true) {
    let len = s.length
    
    s = s.replace('{}', '').replace('[]', '').replace('()', '')

    if (s.length == len) {
      return len === 0
    }
  }
}

// ({}})
// (})

console.log(isValid('({[]})'))