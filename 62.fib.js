// const fib = (n) => {
//   if (n === 1 || n === 2) {
//     return 1
//   }

//   return fib(n -2) + fib(n - 1)
// }

const fib = (n) => {
  if (typeof fib[ n ] !== 'undefined') {
    return fib[ n ]
  }

  if (n === 0) {
    return 0
  }

  if (n === 1 || n === 2) {
    return 1
  }

  const res = fib(n -2) + fib(n - 1)

  fib[ n ] = res

  return res
}

console.log(fib(1))
console.log(fib(2))

const t1 = Date.now()
console.log(fib(44))
console.log(Date.now() - t1)
