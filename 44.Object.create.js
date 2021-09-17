// 1. bject.create常规使用
const person = {
  showName () {
    console.log(this.name)
  }
};
const me = Object.create(person)

me.name = '前端胖头鱼'
me.showName()
// 2. 创建一个原型为null的空对象
const emptyObj = Object.create(null)

console.log(emptyObj)

// 3. 

