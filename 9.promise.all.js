Promise.myAll = (promises) => {
  return new Promise((rs, rj) => {
    let count = 0
    let result = []
    const len = promises.length

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

const p1 = Promise.resolve(1)
const p2 = new Promise((rs, rj) => {
  setTimeout(() => {
    Math.random() > 0 ? rs(2) : rj('error')
  }, 2000)
})
const p3 = new Promise((rs, rj) => {
  setTimeout(() => {
    Math.random() > 0 ? rs(3) : rj('error')
  }, 1000)
})


Promise.myAll([ p1, p2, p3 ]).then((res) => {
  console.log(res)
}).catch((err) => {
  console.log('err', err)
})

Promise.myAll([ p1, p2, '---3' ]).then((res) => {
  console.log(res)
}).catch((err) => {
  console.log('err', err)
})