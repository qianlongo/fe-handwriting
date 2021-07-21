const simulateSetInterval = (func, timeout) => {
  let timer = null
  const interval = () => {
    timer = setTimeout(() => {
      func()
      interval()
    }, timeout)
  }

  interval()

  return () => clearTimeout(timer)
}

const cancel = simulateSetInterval(() => {
  console.log(1)
}, 300)

setTimeout(() => {
  cancel()
}, 1000)
