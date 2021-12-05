Promise.myResolve = function (value) {
  if (value && typeof value === 'object' && (value instanceof Promise)) {
    return value
  }

  return new Promise((resolve) => {
    resolve(value)
  })
}

Promise.myResolve(1).then((res) => {
  console.log(res)
})

Promise.myResolve(new Promise((resolve, reject) => {
  reject(1)
})).then((res) => {
  console.log(res)
}).catch((err) => {
  console.log(err, 'err')
})

