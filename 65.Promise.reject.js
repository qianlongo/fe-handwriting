Promise.myReject = function (value) {
  return new Promise((resolve, reject) => {
    reject(value)
  })
}

Promise.myReject('err').then((res) => {
  console.log(res)
}).catch((err) => {
  console.log(err, 'err')
})