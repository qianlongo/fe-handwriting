const sleep = (func, delay) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(func())
    }, delay)
  })
}

const consoleStr = (str) => {
  return () => {
    console.log(str)
    return str
  }
}

const doFns = async () => {
  const name = await sleep(consoleStr('前端胖头鱼'), 1000)
  const sex = await sleep(consoleStr('boy'), 1000)
  const age = await sleep(consoleStr(100), 1000)

  console.log(name, sex, age)
}

doFns()