// 有效的字母异位词 https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/xn96us/
/**
 * 242. 有效的字母异位词
给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。

注意：若 s 和 t 中每个字符出现的次数都相同，则称 s 和 t 互为字母异位词。

 

示例 1:

输入: s = "anagram", t = "nagaram"
输出: true
示例 2:

输入: s = "rat", t = "car"
输出: false
 

提示:

1 <= s.length, t.length <= 5 * 104
s 和 t 仅包含小写字母
 

进阶: 如果输入字符串包含 unicode 字符怎么办？你能否调整你的解法来应对这种情况？
 */

const isAnagram = (s, t) => {
  const calcStrCount = (s) => {
    let cacheMap = {}

    for (let i = 0, len = s.length; i < len; i++) {
      const value = s[ i ]

      cacheMap[ value ] = typeof cacheMap[ value ] !== 'undefined' ? (cacheMap[ value ] + 1) : 1
    }

    return cacheMap
  }

  const sMap = calcStrCount(s)
  const tMap = calcStrCount(t)

  const getResult = (map1, map2) => {
    if (Object.values(map1).length < Object.values(map2).length) {
      return getResult(map2, map1)
    }

    for (const attr in map1) {
      if (map1[ attr ] !== map2[ attr ]) {
        return false
      }
    }

    return true
  }

  return getResult(sMap, tMap)
}
console.log(isAnagram('a', 'ab'))