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

let p1 = Promise.resolve(1);
let p2 = 2;
let p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 3);
});
let p4 = Promise.reject('出错啦')


Promise.myAll([ p1, p2, p3 ]).then((res) => {
  console.log(res)
}).catch((err) => {
  console.log('err', err)
})

Promise.myAll([ p1, p2, 3 ]).then((res) => {
  console.log(res)
}).catch((err) => {
  console.log('err', err)
})

Promise.myAll([ p1, p2, p4 ]).then((res) => {
  console.log(res)
}).catch((err) => {
  console.log('err', err)
})