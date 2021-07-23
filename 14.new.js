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
  let result = func.apply(obj, args)

  if (typeof result === 'object' && result !== null || typeof result === 'function') {
    return result
  } else {
    return obj
  }
}