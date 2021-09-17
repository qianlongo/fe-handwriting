const create = (prop, props) => {
  if (![ 'object', 'function' ].includes(typeof prop)) {
    throw new TypeError(`Object prototype may only be an Object or null: ${prop}`)
  }
  // 创建构造函数
  const Ctor = function () {}
  // 赋值原型
  Ctor.prototype = prop
  // 创建实例
  const obj = new Ctor()
  // 支持第二个参数
  if (props) {
    Object.defineProperties(obj, props)
  }
  // 支持空原型
  if (prop === null) {
    obj.__proto__ = null
  }

  return obj
}

// 1. bject.create常规使用
const person = {
  showName () {
    console.log(this.name)
  }
};
const me = Object.create(person)
const me2 = create(person)

me.name = '前端胖头鱼'
me2.name = '前端胖头鱼'

me.showName()
me2.showName()
// 2. 创建一个原型为null的空对象
const emptyObj = Object.create(null)
const emptyObj2 = create(null)

console.log(emptyObj)
console.log(emptyObj2)

// 3. propertiesObject参数

const props = {
  // foo会成为所创建对象的数据属性
  foo: {
    writable:true,
    configurable:true,
    value: "hello"
  },
  // bar会成为所创建对象的访问器属性
  bar: {
    configurable: false,
    get: function() { return 10 },
    set: function(value) {
      console.log("Setting `o.bar` to", value);
    }
  }
}

let o = Object.create(Object.prototype, props)
let o2 = create(Object.prototype, props)

o.bar = '前端胖头鱼'
o2.bar = '前端胖头鱼'

console.log(o.foo)
console.log(o.bar)

console.log(o2.foo)
console.log(o2.bar)



