/**
 * 
 * @param {*} ctx 函数执行上下文this
 * @param {*} args  参数列表
 * @returns 函数执行的结果
 */
Function.prototype.myApply = function (ctx, args) {
  if (!ctx) {
    ctx = typeof window !== 'undefined' ? window : global
  }
  // 暴露处理 ctx有可能传非对象
  ctx = Object(ctx)

  const fnName = Symbol()

  ctx[ fnName ] = this

  const result = ctx[ fnName ](...args)

  delete ctx[ fnName ]

  return result
}

let fn = function (name, sex) {
  console.log(this, name, sex)
}


fn.myApply('', ['前端胖头鱼', 'boy'])
fn.myApply({ name: '前端胖头鱼', sex: 'boy' }, ['前端胖头鱼', 'boy'])