const curry = (func, ...args) => {
  const fnLen = func.length

  return function (...innerArgs) {
    innerArgs = args.concat(innerArgs)

    if (innerArgs.length < fnLen) {
      return curry(func, ...innerArgs)
    } else {
      func.apply(this, innerArgs)
    }
  }
}

const curry2 = (fn, arr = []) => (...args) => (
  arg => arg.length === fn.length
    ? fn(...arg)
    : curry(fn, arg)
)([...arr, ...args])



const add = curry((num1, num2, num3) => {
  console.log(num1, num2, num3, num1 + num2 + num3)
})

add(1)(2)(3)
add(1, 2)(3)
add(1, 2, 3)
add(1)(2, 3)
