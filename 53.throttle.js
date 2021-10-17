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

const showName = throttle(function (name) {
  console.log(this, name)
}, 1000)

setInterval(() => {
  showName.call({ name: '前端胖头鱼' }, '前端胖头鱼')
}, 10)