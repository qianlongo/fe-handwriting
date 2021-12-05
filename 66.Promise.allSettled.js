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
      try {
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
      } catch (err) {
        reject(err)
      }
    }

    for (let i = 0; i < length; i++) {
      response(i, promises[i])
    }
  })
}

const p1 = 1
const p2 = Promise.resolve(2)
const p3 = Promise.reject(3)

Promise.myAllSettled([ p1, p2, p3 ]).then(console.log)
