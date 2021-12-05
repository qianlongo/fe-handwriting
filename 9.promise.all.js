Promise.myAll = (promises) => {
  return new Promise((rs, rj) => {
    let count = 0
    let result = []
    const len = promises.length

    if (len === 0) {
      return resolve([])
    }

    promises.forEach((p, i) => {
      Promise.resolve(p).then((res) => {
        count += 1
        result[ i ] = res
        
        if (count === len) {
          rs(result)
        }
      }).catch(rj)
    })
  })
}

Promise.myAll2 = (promises) => {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      return reject('Promise.all accepts an array')
    }

    const length = promises.length
    let remaining = length
    const result = []

    if (length === 0) {
      return resolve([])
    }

    const response = (i, value) => {
      try {
        if (value instanceof Promise) {
          // 注意此val非value
          value.then((val) => {
            response(i, val)
          }, reject)
          return
        }

        result[ i ] = value

        if (--remaining === 0) {
          resolve(result)
        }
      } catch (err) {
        reject(err)
      }
    }

    for (let i = 0; i < length; i++) {
      response(i, promises[i])
    }
  })
}

let p1 = Promise.resolve(1);
let p2 = 2;
let p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 3);
});
let p4 = Promise.reject('出错啦')


// Promise.myAll([ p1, p2, p3 ]).then((res) => {
//   console.log(res, 'res---1')
// }).catch((err) => {
//   console.log('err', err)
// })

// Promise.myAll([ p1, p2, 3 ]).then((res) => {
//   console.log(res, 'res---2')
// }).catch((err) => {
//   console.log('err', err)
// })

// Promise.myAll([ p1, p2, p4 ]).then((res) => {
//   console.log(res, 'res--3')
// }).catch((err) => {
//   console.log('err', err)
// })

// Promise.myAll2([ p1, p2, p3 ]).then((res) => {
//   console.log(res, 'res---1')
// }).catch((err) => {
//   console.log('err', err)
// })

// Promise.myAll2([ p1, p2, 3 ]).then((res) => {
//   console.log(res, 'res---2')
// }).catch((err) => {
//   console.log('err', err)
// })

Promise.myAll2([ p1, p2, p4 ]).then((res) => {
  console.log(res, 'res--3')
}).catch((err) => {
  console.log('err', err)
})