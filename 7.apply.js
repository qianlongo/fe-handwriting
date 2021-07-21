// https://github.com/mqyqingfeng/Blog/issues/11
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

let fn = function (name) {
  console.log(this, name)
}

fn.myApply('', 'qianlongo')