/**
 * new 的执行过程
 * 1. 创建一个对象obj
 * 2. 该对象的__proto__指向构造函数Fn的原型prototype
 * 3. 执行构造函数Fn的代码，往新创建的对象obj上添加成员属性和方法
 * 4. 返回这个新的对象obj
 */

const _new = function (func, ...args) {
  if (typeof func !== 'function') {
    throw 'func must be a function'
  }
  // 这里有点求快了，应该手动模拟一下
  let obj = Object.create(func.prototype)
  // 实际模拟如下
  /**
  let Ctor = function () {}

  Ctor.prototype = func.prototype
  Ctor.prototype.constructor = func

  let obj = new Ctor()
 */
  let result = func.apply(obj, args)

  if (typeof result === 'object' && result !== null || typeof result === 'function') {
    return result
  } else {
    return obj
  }
}

let Person = function (name, sex) {
  this.name = name
  this.sex = sex
}

Person.prototype.showInfo = function () {
  console.log(this.name, this.sex)
}

let p1 = _new(Person, '前端胖头鱼', 'sex')

console.log(p1)

