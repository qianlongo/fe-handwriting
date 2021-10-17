// 基于时间戳
const throttle = function (func, delay) {
  let startTime = Date.now()

  return function (...args) {
    let lastTime = Date.now()

    if (lastTime - startTime > delay) {
      func.apply(this, args)
      startTime = Date.now()
    }
  }
}

const throttle2 = function (func, delay) {
  let timer = null

  return function (...args) {
    if (!timer) {
      timer = setTimeout(() => {
        func.apply(this, args)
        timer = null
      }, delay) 
    }
  }
}

let t1 = Date.now()

const showName = throttle2(function (name) {
  const t2 = Date.now()
  console.log(this, name, t2 - t1)
  t1 = Date.now()
}, 1000)

setInterval(() => {
  showName.call({ name: '前端胖头鱼' }, '前端胖头鱼')
}, 10)