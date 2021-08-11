// 比较版本号

const compareVersion = function(version1, version2) {
  version1 = version1.split('.')
  version2 = version2.split('.')

  const len1 = version1.length
  const len2 = version2.length
  let maxLen = len1
  const fillZero = (array, len) => {
    while (len--) {
      array.push(0)
    }
  }

  if (len1 < len2) {
    fillZero(version1, len2 - len1)
    maxLen = len2
  } else if (len1 > len2) {
    fillZero(version2, len1 - len2)
    maxLen = len1
  }

  for (let i = 0; i < maxLen; i++) {
    const a = parseInt(version1[i])
    const b = parseInt(version2[i])
    if ( a === b) {
      // i++
    } else if (a > b) {
      return 1
    } else {
      return -1
    }
  }

  return 0
}

// 也可以不补零
const compareVersion = function(version1, version2) {
  version1 = version1.split('.')
  version2 = version2.split('.')

  const maxLen = Math.max(version1.length, version2.length)

  for (let i = 0; i < maxLen; i++) {
    const a = parseInt(version1[i]??0)
    const b = parseInt(version2[i]??0)
    if ( a === b) {
      // i++
    } else if (a > b) {
      return 1
    } else {
      return -1
    }
  }

  return 0
}

console.log(compareVersion('1.0', '1.0.0'))

// 扩展1比较多个版本号

const compareMoreVersion = (versions) => {
  return versions.sort((a, b) => compareVersion(a, b))
}

console.log(compareMoreVersion(['1.0', '3.1', '1.01']))