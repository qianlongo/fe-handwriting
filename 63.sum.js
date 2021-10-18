/**
 * 
sum(1, 2, 3).valueOf() // 6 
sum(2, 3)(2).valueOf() // 7 
sum(1)(2)(3)(4).valueOf() //10
sum(2)(4, 1)(2).valueOf() //9
 */

const sum = (...args) => {
  const add = (...args2) => {
    args = [ ...args, ...args2 ]
    return add
  }

  add.valueOf = () => args.reduce((ret, num) => ret + num, 0)

  return add
}

console.log(sum(1, 2, 3).valueOf())
console.log(sum(2, 3)(2).valueOf())
console.log(sum(1)(2)(3)(4).valueOf())
console.log(sum(2)(4, 1)(2).valueOf())