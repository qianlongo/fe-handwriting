const simulateSetTimeout = (fn, timeout) => {
  let timer = null

  timer = setInterval(() => {
    clearInterval(timer)
    fn()
  }, timeout)

  return () => clearInterval(timer)
}

const cancel = simulateSetTimeout(() => {
  console.log(1)
}, 1000)

setTimeout(() => {
  cancel()
}, 1100)