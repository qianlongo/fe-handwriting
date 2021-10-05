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