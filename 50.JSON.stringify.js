const jsonstringify = jsonStringify = (data) => {
  // 确认一个对象是否存在循环引用
  const isCyclic = (obj) => {
    let stackSet = new Set()
    let detected = false

    const detect = (obj) => {
      if (obj && typeof obj != 'object') {
        return
      }

      if (stackSet.has(obj)) {
        return detected = true
      }

      stackSet.add(obj)

      for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
          detect(obj[key])
        }
      }

      stackSet.delete(obj)
    }

    detect(obj)

    return detected
  }

  // 特性七:
  // 对包含循环引用的对象（对象之间相互引用，形成无限循环）执行此方法，会抛出错误。
  if (isCyclic(data)) {
    throw new TypeError('Converting circular structure to JSON')
  }

  // 特性九:
  // 当尝试去转换 BigInt 类型的值会抛出错误
  if (typeof data === 'bigint') {
    throw new TypeError('Do not know how to serialize a BigInt')
  }

  const type = typeof data
  const commonKeys1 = ['undefined', 'function', 'symbol']
  const getType = (s) => {
    return Object.prototype.toString.call(s).replace(/\[object (.*?)\]/, '$1').toLowerCase()
  }

  // 非对象
  if (type !== 'object' || data === null) {
    let result = data
    // 特性四：
    // NaN 和 Infinity 格式的数值及 null 都会被当做 null。
    if ([NaN, Infinity, null].includes(data)) {
      result = 'null'
      // 特性一：
      // `undefined`、`任意的函数`以及`symbol值`被`单独转换`时，会返回 undefined
    } else if (commonKeys1.includes(type)) {
      // 直接得到undefined，并不是一个字符串'undefined'
      return undefined
    } else if (type === 'string') {
      result = '"' + data + '"'
    }

    return String(result)
  } else if (type === 'object') {
    // 特性五:
    // 转换值如果有 toJSON() 方法，该方法定义什么值将被序列化
    // 特性六:
    // Date 日期调用了 toJSON() 将其转换为了 string 字符串（同Date.toISOString()），因此会被当做字符串处理。
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
      // 特性二：
      // 布尔值、数字、字符串的包装对象在序列化过程中会自动转换成对应的原始值。
      if (['boolean', 'number'].includes(getType(data))) {
        return String(data)
      } else if (getType(data) === 'string') {
        return '"' + data + '"'
      } else {
        let result = []
        // 特性八
        // 其他类型的对象，包括 Map/Set/WeakMap/WeakSet，仅会序列化可枚举的属性
        Object.keys(data).forEach((key) => {
          // 特性三:
          // 所有以symbol为属性键的属性都会被完全忽略掉，即便 replacer 参数中强制指定包含了它们。
          if (typeof key !== 'symbol') {
            const value = data[key]
            // 特性一
            // `undefined`、`任意的函数`以及`symbol值`，出现在`非数组对象`的属性值中时在序列化过程中会被忽略
            if (!commonKeys1.includes(typeof value)) {
              result.push(`"${key}":${jsonstringify(value)}`)
            }
          }
        })

        return `{${result}}`.replace(/'/, '"')
      }
    }
  }
}

console.log(jsonstringify(undefined))
console.log(jsonstringify(() => { }))
console.log(jsonstringify(Symbol('前端胖头鱼')))
console.log(jsonstringify((NaN)))
console.log(jsonstringify((Infinity)))
console.log(jsonstringify((null)))
console.log(jsonstringify({
  name: '前端胖头鱼',
  toJSON() {
    return {
      name: '前端胖头鱼2',
      sex: 'boy'
    }
  }
}))

console.log(jsonstringify(null) === JSON.stringify(null));
// true
console.log(jsonstringify(undefined) === JSON.stringify(undefined));
// true
console.log(jsonstringify(false) === JSON.stringify(false));
// true
console.log(jsonstringify(NaN) === JSON.stringify(NaN));
// true
console.log(jsonstringify(Infinity) === JSON.stringify(Infinity));
// true
let str = "前端胖头鱼";
console.log(jsonstringify(str) === JSON.stringify(str));
// true
let reg = new RegExp("\w");
console.log(jsonstringify(reg) === JSON.stringify(reg));
// true
let date = new Date();
console.log(jsonstringify(date) === JSON.stringify(date));
// true
let sym = Symbol('前端胖头鱼');
console.log(jsonstringify(sym) === JSON.stringify(sym));
// true
let array = [1, 2, 3];
console.log(jsonstringify(array) === JSON.stringify(array));
// true
let obj = {
  name: '前端胖头鱼',
  age: 18,
  attr: ['coding', 123],
  date: new Date(),
  uni: Symbol(2),
  sayHi: function () {
    console.log("hello world")
  },
  info: {
    age: 16,
    intro: {
      money: undefined,
      job: null
    }
  },
  pakingObj: {
    boolean: new Boolean(false),
    string: new String('前端胖头鱼'),
    number: new Number(1),
  }
}
console.log(jsonstringify(obj) === JSON.stringify(obj));
console.log((jsonstringify(obj)))
console.log(JSON.stringify(obj))

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

console.log(jsonstringify(enumerableObj))

let obj1 = { a: 'aa' }
let obj2 = { name: '前端胖头鱼', a: obj1, b: obj1 }
obj2.obj = obj2

// console.log(jsonstringify(obj2))
console.log(jsonStringify(BigInt(1)))

// console.log(JSON.stringify(BigInt(1)))

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
