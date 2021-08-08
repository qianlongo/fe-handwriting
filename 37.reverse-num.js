// 7. 整数反转 https://leetcode-cn.com/problems/reverse-integer/

const reverse = (x) => {
  x = '' + x

  if (x.length === 1) {
    return x
  }

  let result = ''
  let i = 1
  const len = x.length
  let firstNum = x[0]

  while (i < len) {
    // 负数
    const curValue = x[ len - i ]

    result += result === '' && curValue === '0' ? '' : curValue 
    i++
  }

  result =  firstNum === '-' ? firstNum + result : result + firstNum

  if (result < -Math.pow(2, 31)) {
    return 0
  } else if (result > Math.pow(2, 31) - 1) {
    return 0
  } else {
    return result
  }
}

console.log(reverse(1534236469))