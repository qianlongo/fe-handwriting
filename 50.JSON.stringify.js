const jsonstringify = (data) => {
  const type = typeof data
  const commonKeys1 = [ 'undefined', 'function', 'symbol' ]
   
  // 非对象
  if (type !== 'object' || data === null) {
    let result = ''
    // 特性四：
    // NaN 和 Infinity 格式的数值及 null 都会被当做 null。
    if ([ NaN, Infinity, null ].includes(data)) {
      result = 'null'
      // 特性一：
      // `undefined`、`任意的函数`以及`symbol值`被`单独转换`时，会返回 undefined
    } else if (commonKeys1.includes(type)) {
      // 直接得到undefined，并不是一个字符串'undefined'
      return undefined
    } else {
      result = `${data}`
    }

    return String(result)
  } else if (type === 'object') {
    // 特性五:
    // 转换值如果有 toJSON() 方法，该方法定义什么值将被序列化
    if (typeof data.toJSON === 'function') {
      return jsonstringify(data.toJSON())
    } else if (Array.isArray(data)) {
      let result = data.map((it) => {
        // 特性一:
        // `undefined`、`任意的函数`以及`symbol值`出现在`数组`中时会被转换成 `null`
        return commonKeys1.includes(typeof it) ? 'null' : jsonstringify(it)
      })

      return `[${result}]`.replace(/'/g, '"')
    } else {
      // 处理普通对象
      let result = []

      Object.keys(data).forEach((key) => {
        // 特性三
        // 所有以symbol为属性键的属性都会被完全忽略掉，即便 replacer 参数中强制指定包含了它们。
        if (typeof key !== 'symbol') {
          const value = data[ key ]
          // 特性一
          // `undefined`、`任意的函数`以及`symbol值`，出现在`非数组对象`的属性值中时在序列化过程中会被忽略
          if (!commonKeys1.includes(typeof value)) {
            result.push(`${key}:${jsonstringify(value)}`)
          }
        }
      })

      return `{${result}}`.replace(/'/, '"')
    }
  }
  
}

console.log(jsonstringify(undefined))
console.log(jsonstringify(() => {}))
console.log(jsonstringify(Symbol('前端胖头鱼')))
console.log(jsonstringify((NaN)))
console.log(jsonstringify((Infinity)))
console.log(jsonstringify((null)))
console.log(jsonstringify({
  name: '前端胖头鱼',
  toJSON () {
    return {
      name: '前端胖头鱼2',
      sex: 'boy'
    }
  }
}))

/*
// 1. 转换对象
console.log(JSON.stringify({ name: '前端胖头鱼', sex: 'boy' }))
// 2. 转换普通值
console.log(JSON.stringify('前端胖头鱼'))
console.log(JSON.stringify(1))
console.log(JSON.stringify(true))
console.log(JSON.stringify(null))
// 3. 指定replacer函数
console.log(JSON.stringify({ name: '前端胖头鱼', sex: 'boy', age: 100 }, (key, value) => {
  return typeof value === 'number' ? undefined : value
}))
// 4. 指定数组
console.log(JSON.stringify({ name: '前端胖头鱼', sex: 'boy', age: 100 }, [ 'name' ]))
// 5. 指定space
console.log(JSON.stringify({ name: '前端胖头鱼', sex: 'boy', age: 100 }))
console.log(JSON.stringify({ name: '前端胖头鱼', sex: 'boy', age: 100 }, null , 2))

// 1. 对象中存在这三种值会被忽略
console.log(JSON.stringify({
  name: '前端胖头鱼',
  sex: 'boy',
  // 函数会被忽略
  showName () {
    console.log('前端胖头鱼')
  },
  // undefined会被忽略
  age: undefined,
  // Symbol会被忽略
  symbolName: Symbol('前端胖头鱼')
}))

// 2. 数组中存在着三种值会被转化为null

console.log(JSON.stringify([
  '前端胖头鱼',
  'boy',
  // 函数会被转化为null
  function showName () {
    console.log('前端胖头鱼')
  },
  //undefined会被转化为null
  undefined,
  //Symbol会被转化为null
  Symbol('前端胖头鱼')
]))

// 3.单独转换会返回undefined
console.log(JSON.stringify(
  function showName () {
    console.log('前端胖头鱼')
  }
))
console.log(JSON.stringify(undefined))
console.log(JSON.stringify(Symbol('前端胖头鱼')))

console.log(JSON.stringify([new Number(1), new String("前端胖头鱼"), new Boolean(false)]))

console.log(JSON.stringify({
  name: Symbol('前端胖头鱼'),
}))

console.log(JSON.stringify({
  [ Symbol('前端胖头鱼') ]: '前端胖头鱼',
}, (key, value) => {
  if (typeof key === 'symbol') {
    return value
  }
}))

console.log(JSON.stringify({
  age: NaN,
  age2: Infinity,
  name: null
}))

const toJSONObj = {
  name: '前端胖头鱼',
  toJSON () {
    return 'JSON.stringify'
  }
}

console.log(JSON.stringify(toJSONObj))

const d = new Date()

console.log(d.toJSON())
console.log(JSON.stringify(d))

let cyclicObj = {
  name: '前端胖头鱼',
}

cyclicObj.obj = cyclicObj

// console.log(JSON.stringify(cyclicObj))
let enumerableObj = {}

Object.defineProperties(enumerableObj, {
  name: {
    value: '前端胖头鱼',
    enumerable: true
  },
  sex: {
    value: 'boy',
    enumerable: false
  },
})

console.log(JSON.stringify(enumerableObj))

const alsoHuge = BigInt(9007199254740991)

console.log(JSON.stringify(alsoHuge))
*/
