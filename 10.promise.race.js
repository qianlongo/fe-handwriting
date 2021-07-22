Promise.myRace = (promises) => {
  return new Promise((rs, rj) => {
    promises.forEach((p) => {
      Promise.resolve(p).then(rs).catch(rj)
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


Promise.myRace([ p2, p3 ]).then((res) => {
  console.log(res)
}).catch((err) => {
  console.log('err', err)
})

Promise.myRace([ 1 ]).then((res) => {
  console.log(res)
}).catch((err) => {
  console.log('err', err)
})