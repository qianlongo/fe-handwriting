// https://github.com/mqyqingfeng/Blog/issues/11
/**
 * 
 * @param {*} ctx 函数执行上下文this
 * @param  {...any} args 参数列表
 * @returns 函数执行的结果
 */
Function.prototype.myCall = function (ctx, ...args) {
  if (!ctx) {
    ctx = typeof window !== 'undefined' ? window : global
  }
  // 暴露处理 ctx有可能传非对象
  ctx = Object(ctx)

  const fnName = Symbol('key')

  ctx[ fnName ] = this

  const result = ctx[ fnName ](...args)

  delete ctx[ fnName ]

  return result
}

let fn = function (name, sex) {
  console.log(this, name, sex)
}

fn.myCall('', '前端胖头鱼', 'boy'), 
fn.myCall({ name: '前端胖头鱼', sex: 'boy' }, '前端胖头鱼', 'boy')