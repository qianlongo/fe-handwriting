// 如何使得a==1 && a == 2 && a == 3为true

// 方式1：隐式转换
(() => {
  let a = {
    i: 1,
    toString () {
      return this.i++
    }
  }
  
  console.log(a == 1 && a == 2 && a == 3)
})()

// 方式2：利用Object.defineProperty劫持的方式
;(() => {
  let _a = 1
  Object.defineProperty(window, 'a', {
    get () {
      return _a++
    }
  })

  console.log(a == 1 && a == 2 && a == 3)
})()

// 方式3：利用Proxy劫持的方式
;(() => {
  let a = new Proxy({ i: 1 }, {
    get (target) {
      return () => target.i++
    }
  })

  console.log(a == 1 && a == 2 && a == 3)
})()
// 方式4：利用数组和toString方法
;(() => {
  let a = [ 1, 2, 3 ]
  
  a.toString = a.shift

  console.log(a == 1 && a == 2 && a == 3)
})()