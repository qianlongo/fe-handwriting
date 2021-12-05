Promise.myAllSettled = (promises) => {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      return reject('Promise.allSettled accepts an array')
    }

    const length = promises.length
    let remaining = length
    const result = []

    if (length === 0) {
      return resolve([])
    }

    const response = (i, value) => {
      if (value instanceof Promise) {
        // 注意此val非value
        value.then((val) => {
          response(i, val)
        }, (err) => {
          result[i] = { 
            status: 'rejected', 
            reason: err 
          }

          if (--remaining === 0){
            resolve(result)
          }
        })
        return
      }

      result[ i ] = {
        status: 'fulfilled',
        value
      }

      if (--remaining === 0) {
        resolve(result)
      }
    }

    for (let i = 0; i < length; i++) {
      response(i, promises[i])
    }
  })
}

Promise.myAllSettled2 = (promises) => {
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
        result[ i ] = {
          status: 'fulfilled',
          value: res
        }
        
        if (count === len) {
          rs(result)
        }
      }).catch((err) => {
        count += 1
        result[i] = { 
          status: 'rejected', 
          reason: err 
        }

        if (count === len) {
          rs(result)
        }
      })
    })
  })
}

const p1 = 1
const p2 = Promise.resolve(2)
const p3 = Promise.reject(3)

Promise.myAllSettled([ p1, p2, p3 ]).then(console.log)
