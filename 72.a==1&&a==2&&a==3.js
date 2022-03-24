// 如何使得a==1 && a == 2 && a == 3为true

// 方式1：隐式转换
(() => {
  let a = {
    i: 1,
    toString() {
      return this.i++
    }
  }

  console.log(a == 1 && a == 2 && a == 3)
})()

  // 方式2：利用Object.defineProperty劫持的方式
  ; (() => {
    let _a = 1
    Object.defineProperty(window, 'a', {
      get() {
        return _a++
      }
    })

    console.log(a == 1 && a == 2 && a == 3)
  })()

  // 方式3：利用Proxy劫持的方式
  ; (() => {
    let a = new Proxy({ i: 1 }, {
      get(target) {
        return () => target.i++
      }
    })

    console.log(a == 1 && a == 2 && a == 3)
  })()
  // 方式4：利用数组和join方法
  ; (() => {
    let a = [1, 2, 3]

    a.join = a.shift

    console.log(a == 1 && a == 2 && a == 3)
  })()
  // 方式5：利用隐藏字段
  ; (() => {
    let aﾠ = 1
    let a = 2
    let ﾠa = 3

    console.log(aﾠ == 1 && a == 2 && ﾠa == 3)
  })()

  // 方式6：利用with
  ; (() => {
    let i = 1

    with ({
      get a() {
        return i++
      }
    }) {
      console.log(a == 1 && a == 2 && a == 3)
    }
  })()

  // 方式7：利用障眼法 修改if
  ; (() => {
    const if‌  = () => !0
    let a = 9

    if‌(a == 1 && a == 2 && a == 3)
    {
      console.log('hello world')
    }
  })()

  // 方式8：利用valueOf和正则的匹配规则

  ; (() => {
    let a = {
      r: /\d/g,
      valueOf: function () {
        return this.r.exec(123)[0]
      }
    }

    if (a == 1 && a == 2 && a == 3) {
      console.log("hello world")
    }
  })()





